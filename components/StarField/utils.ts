import { SPEED, STAR_COLOR, BACKGROUND_COLOR } from './StarField';

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
}

export function createStar(width: number, height: number): Star {
	const x = width / 2;
	const y = height / 2;
	const sx = Math.random() * 10 - 5;
	const sy = Math.random() * 10 - 5;

	const start = width > height ? width : height;

	const star: Star = {
		x: x + (sx * start) / SPEED,
		y: y + (sy * start) / SPEED,
		sx,
		sy,
		w: 1,
		h: 1,
		age: 0,
		dies: 500,
		color: STAR_COLOR,
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
