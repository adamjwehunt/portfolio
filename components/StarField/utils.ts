import { SPEED, STAR_COLOR, BACKGROUND_COLOR, LAYER_SPEED_MULTIPLIERS, LAYER_COLORS } from './StarField';

export interface Star {
	x: number;
	y: number;
	sx: number;
	sy: number;
	w: number;
	h: number;
	age: number;
	dies: number;
	color: string;
	layer: number;
}

export function createStar(width: number, height: number, layer: number = 0): Star {
	const speedMultiplier = LAYER_SPEED_MULTIPLIERS[layer] || 1;
	
	// All stars start from center but with different speeds
	const x = width / 2;
	const y = height / 2;
	
	// For extremely slow layers, increase the initial spread to make them more visible
	let spreadFactor = 1;
	if (speedMultiplier <= 0.05) {
		// Increase spread for very slow stars so they're more visible initially
		spreadFactor = 0.2 / speedMultiplier; // This makes slower stars start closer to edges
		spreadFactor = Math.min(spreadFactor, 10); // Cap the spread factor
	}
	
	const sx = (Math.random() * 10 - 5) * speedMultiplier;
	const sy = (Math.random() * 10 - 5) * speedMultiplier;

	const start = width > height ? width : height;

	const star: Star = {
		age: 0,
		color: LAYER_COLORS[layer] || STAR_COLOR,
		dies: 500,
		h: 1 + Math.floor(layer / 2), // Make slower stars slightly bigger
		sx,
		sy,
		w: 1 + Math.floor(layer / 2), // Make slower stars slightly bigger
		x: x + (sx * start * spreadFactor) / (SPEED * speedMultiplier),
		y: y + (sy * start * spreadFactor) / (SPEED * speedMultiplier),
		layer,
	};

	return star;
}

export function clearCanvas(
	ctx: CanvasRenderingContext2D | null,
	width: number,
	height: number
) {
	if (!ctx) {
		return;
	}
	ctx.fillStyle = BACKGROUND_COLOR;
	ctx.fillRect(0, 0, width, height);
}
