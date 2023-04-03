'use client';

import React, { useEffect, useRef } from 'react';

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

const createStar = (canvasWidth: number, canvasHeight: number): Star => {
	const x = canvasWidth / 2;
	const y = canvasHeight / 2;
	const sx = Math.random() * 10 - 5;
	const sy = Math.random() * 10 - 5;

	const start = canvasWidth > canvasHeight ? canvasWidth : canvasHeight;

	const star: Star = {
		x: x + (sx * start) / 10,
		y: y + (sy * start) / 10,
		sx,
		sy,
		w: 1,
		h: 1,
		age: 0,
		dies: 500,
		color: '#ffffff',
	};

	return star;
};

interface StarFieldProps {
	children: React.ReactNode;
}

// Source: https://codepen.io/bts/pen/BygMzB
export default function Starfield({ children }: StarFieldProps) {
	const canvasRef = useRef<HTMLCanvasElement>(null);
	const starsRef = useRef<Star[]>([]);
	const numStarsRef = useRef<number>(0);

	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) {
			return;
		}

		const ctx = canvas.getContext('2d');
		if (!ctx) {
			return;
		}

		const draw = () => {
			if (!canvasRef.current) {
				return;
			}

			const canvasWidth = canvasRef.current.width;
			const canvasHeight = canvasRef.current.height;

			if (canvasWidth !== window.innerWidth) {
				canvas.width = window.innerWidth;
			}
			if (canvasHeight !== window.innerHeight) {
				canvas.height = window.innerHeight;
			}

			const starsToDraw = (canvas.width * canvas.height) / 6_000;

			if (numStarsRef.current < starsToDraw) {
				const numNewStars = starsToDraw - numStarsRef.current;
				const newStars = Array.from({ length: numNewStars }, () =>
					createStar(canvas.width, canvas.height)
				);
				starsRef.current = [...starsRef.current, ...newStars];
				numStarsRef.current += numNewStars;
			}

			ctx.fillStyle = 'rgba(0, 0, 0, 0.8)';
			ctx.fillRect(0, 0, canvas.width, canvas.height);

			const acceleration = 1;
			const stars = starsRef.current;

			stars.forEach((star, index) => {
				star.x += star.sx;
				star.y += star.sy;

				star.sx += star.sx / (50 / acceleration);
				star.sy += star.sy / (50 / acceleration);

				star.age++;

				if (
					star.age === Math.floor(50 / acceleration) ||
					star.age === Math.floor(150 / acceleration) ||
					star.age === Math.floor(300 / acceleration)
				) {
					star.w++;
					star.h++;
				}

				if (
					star.x + star.w < 0 ||
					star.x > canvas.width ||
					star.y + star.h < 0 ||
					star.y > canvas.height
				) {
					starsRef.current.splice(index, 1);
					numStarsRef.current--;
				}

				ctx.fillStyle = star.color;
				ctx.fillRect(star.x, star.y, star.w, star.h);
			});
		};

		const interval = setInterval(draw, 40);
		return () => clearInterval(interval);
	}, []);

	return <canvas ref={canvasRef}>{children}</canvas>;
}
