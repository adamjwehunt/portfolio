'use client';

import { useEffect, useMemo, useRef, useCallback } from 'react';
import styles from './starfield.module.css';

const SPEED = 1.5;
const ACCELERATION = 0.25;
const STAR_COLOR = '#fff';
const BACKGROUND_COLOR = '#000';

interface Star {
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

// Source: https://codepen.io/bts/pen/BygMzB
export default function Starfield() {
	const canvasRef = useRef<HTMLCanvasElement>(null);
	const starsRef = useRef<Star[]>([]);
	const numStarsRef = useRef<number>(0);
	const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
	const canvasDimensions = useMemo(() => ({ width: 0, height: 0 }), []);
	const animationRef = useRef<number | null>(null);

	const createStar = useCallback(
		(canvasWidth: number, canvasHeight: number): Star => {
			const x = canvasDimensions.width / 2;
			const y = canvasDimensions.height / 2;
			const sx = Math.random() * 10 - 5;
			const sy = Math.random() * 10 - 5;

			const start = canvasWidth > canvasHeight ? canvasWidth : canvasHeight;

			const star: Star = {
				x: x + (sx * start) / 1.5,
				y: y + (sy * start) / 1.5,
				sx,
				sy,
				w: 1,
				h: 1,
				age: 0,
				dies: 500,
				color: STAR_COLOR,
			};

			return star;
		},
		[canvasDimensions]
	);

	const resizeCanvas = useCallback(() => {
		const canvas = canvasRef.current;
		if (!canvas) {
			return;
		}

		if (canvasDimensions.width !== window.innerWidth) {
			canvas.width = window.innerWidth;
			canvasDimensions.width = window.innerWidth;
		}
		if (canvasDimensions.height !== window.innerHeight) {
			canvas.height = window.innerHeight;
			canvasDimensions.height = window.innerHeight;
		}
	}, [canvasDimensions]);

	const clearCanvas = useCallback(() => {
		const ctx = ctxRef.current;
		if (!ctx) {
			return;
		}
		ctx.fillStyle = BACKGROUND_COLOR;
		ctx.fillRect(0, 0, canvasDimensions.width, canvasDimensions.height);
	}, [canvasDimensions]);

	const draw = useCallback(() => {
		const canvas = canvasRef.current;
		const ctx = ctxRef.current;

		if (!canvas || !ctx) {
			return;
		}

		const canvasWidth = canvas.width;
		const canvasHeight = canvas.height;

		clearCanvas();

		const stars = starsRef.current;
		const starsToRemove: number[] = [];

		for (let i = 0; i < stars.length; i++) {
			const star = stars[i];

			star.x += star.sx;
			star.y += star.sy;

			star.sx += star.sx / (50 / ACCELERATION);
			star.sy += star.sy / (50 / ACCELERATION);

			star.age++;

			if (
				star.age === Math.floor(50 / ACCELERATION) ||
				star.age === Math.floor(150 / ACCELERATION) ||
				star.age === Math.floor(300 / ACCELERATION)
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
			}

			ctx.fillStyle = star.color;
			ctx.fillRect(star.x, star.y, star.w, star.h);
		}

		if (starsToRemove.length > 0) {
			starsToRemove.sort((a, b) => b - a);
			for (const index of starsToRemove) {
				stars.splice(index, 1);
				numStarsRef.current--;
			}
		}

		const starsToDraw = (canvasWidth * canvasHeight) / 5_000;

		if (numStarsRef.current < starsToDraw) {
			const numNewStars = starsToDraw - numStarsRef.current;
			const newStars = Array.from({ length: numNewStars }, () =>
				createStar(canvasWidth, canvasHeight)
			);
			starsRef.current = [...starsRef.current, ...newStars];
			numStarsRef.current += numNewStars;
		}

		requestAnimationFrame(draw);
	}, [clearCanvas, createStar]);

	useEffect(() => {
		window.addEventListener('resize', resizeCanvas);
		resizeCanvas();
		return () => window.removeEventListener('resize', resizeCanvas);
	}, [resizeCanvas]);

	useEffect(() => {
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
	}, [createStar, canvasDimensions, draw]);

	return <canvas ref={canvasRef} className={styles.starfield} />;
}
