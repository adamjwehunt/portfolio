'use client';

import { useLayoutEffect, useMemo, useRef, useCallback } from 'react';

import styles from './starfield.module.css';
import { Star, clearCanvas, createStar } from './utils';

export const SPEED = 4;
export const ACCELERATION = 0.3;
export const STAR_COLOR = '#fff';
export const BACKGROUND_COLOR = '#3f525d';
export const LAYER_SPEED_MULTIPLIERS = [1, 0.5, 0.15, 0.015]; // Slowest stars are the most distant
export const LAYER_DENSITY = [0.09, 0.19, 0.27, 0.45]; // Density distribution
export const LAYER_COLORS = ['#ffffff', '#ffcc66', '#66ccff', '#99ff99'];

const Starfield = () => {
	const canvasRef = useRef<HTMLCanvasElement>(null);
	const starsRef = useRef<Star[]>([]);
	const numStarsRef = useRef<number>(0);
	const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
	const canvasDimensions = useMemo(() => ({ height: 0, width: 0 }), []);
	const animationRef = useRef<number | null>(null);

	const resizeCanvas = useCallback(() => {
		const canvas = canvasRef.current;
		if (!canvas) {
			return;
		}

		if (
			canvasDimensions.width !== window.innerWidth ||
			canvasDimensions.height !== window.innerHeight
		) {
			canvas.width = window.innerWidth;
			canvasDimensions.width = window.innerWidth;
			canvas.height = window.innerHeight;
			canvasDimensions.height = window.innerHeight;
		}
	}, [canvasDimensions]);

	const draw = useCallback(() => {
		const canvas = canvasRef.current;
		const ctx = ctxRef.current;

		if (!canvas || !ctx) {
			return;
		}

		const canvasWidth = canvas.width;
		const canvasHeight = canvas.height;

		clearCanvas(ctx, canvasWidth, canvasHeight);

		const stars = starsRef.current;
		const starsToRemove: number[] = [];

		for (let i = stars.length - 1; i >= 0; i--) {
			const star = stars[i];
			const speedMultiplier = LAYER_SPEED_MULTIPLIERS[star.layer] || 1;

			star.x += star.sx;
			star.y += star.sy;

			star.sx += star.sx / (50 / (ACCELERATION * speedMultiplier));
			star.sy += star.sy / (50 / (ACCELERATION * speedMultiplier));

			star.age++;

			if (
				[
					Math.floor(50 / (ACCELERATION * speedMultiplier)),
					Math.floor(150 / (ACCELERATION * speedMultiplier)),
					Math.floor(300 / (ACCELERATION * speedMultiplier)),
				].includes(star.age)
			) {
				star.w++;
				star.h++;
			}

			if (
				star.x + star.w < 0 ||
				star.x > canvasWidth ||
				star.y + star.h < 0 ||
				star.y > canvasHeight
			) {
				starsToRemove.push(i);
			} else {
				ctx.fillStyle = star.color;
				ctx.fillRect(star.x, star.y, star.w, star.h);
			}
		}

		if (starsToRemove.length > 0) {
			starsToRemove.forEach((index) => {
				stars.splice(index, 1);
				numStarsRef.current--;
			});
		}

		// Increase star count by reducing the divisor (was 5_000)
		const starsToDraw = (canvasWidth * canvasHeight) / 2_500;

		if (numStarsRef.current < starsToDraw) {
			const numNewStars = starsToDraw - numStarsRef.current;
			for (let i = 0; i < numNewStars; i++) {
				// Choose a layer based on density distribution
				const rand = Math.random();
				let selectedLayer = 0;
				let cumulativeProbability = 0;

				for (let l = 0; l < LAYER_DENSITY.length; l++) {
					cumulativeProbability += LAYER_DENSITY[l];
					if (rand <= cumulativeProbability) {
						selectedLayer = l;
						break;
					}
				}

				starsRef.current.push(
					createStar(canvasWidth, canvasHeight, selectedLayer)
				);
				numStarsRef.current++;
			}
		}

		animationRef.current = requestAnimationFrame(draw);
	}, []);

	useLayoutEffect(() => {
		window.addEventListener('resize', resizeCanvas);
		resizeCanvas();
		return () => window.removeEventListener('resize', resizeCanvas);
	}, [resizeCanvas]);

	useLayoutEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) {
			return;
		}

		ctxRef.current = canvas.getContext('2d');
		if (!ctxRef.current) {
			return;
		}

		animationRef.current = requestAnimationFrame(draw);

		return () => {
			if (animationRef.current) {
				cancelAnimationFrame(animationRef.current);
			}
		};
	}, [canvasDimensions, draw]);

	return <canvas ref={canvasRef} className={styles.starfield} />;
};

export default Starfield;
