import React, { useEffect, useRef } from 'react';
import { Boid } from './Boids';

interface BoidsCanvasProps {
    numBoids: number;
}

const BoidsCanvas: React.FC<BoidsCanvasProps> = ({ numBoids }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        let animationFrameId: number;
        let boids: Boid[] = [];

        const resizeCanvas = () => {
            const canvas = canvasRef.current;
            if (canvas) {
                const width = window.innerWidth;
                const height = window.innerHeight;

                // Get the device pixel ratio
                const scale = window.devicePixelRatio;

                // Set canvas width/height to match the display size, and scale for high-DPI devices
                canvas.width = width * scale;
                canvas.height = height * scale;

                // Scale the context to match the new canvas resolution
                const ctx = canvas.getContext("2d");
                if (ctx) {
                    ctx.scale(scale, scale);
                }
            }
        };

        const animate = () => {
            const canvas = canvasRef.current;
            if (!canvas) return;

            const ctx = canvas.getContext("2d");
            if (!ctx) return;

            ctx.clearRect(0, 0, canvas.width, canvas.height);

            for (const boid of boids) {
                boid.update();
                boid.borders(canvas.width, canvas.height);
                boid.draw(ctx, boids,100 );  // Pass boids for connection lines
            }

            animationFrameId = requestAnimationFrame(animate);
        };

        const initializeBoids = () => {
            const canvas = canvasRef.current;
            if (canvas) {
                boids = [];
                for (let i = 0; i < numBoids; i++) {
                    boids.push(new Boid(Math.random() * canvas.width, Math.random() * canvas.height));
                }
            }
        };

        resizeCanvas();
        initializeBoids();
        animate();

        window.addEventListener('resize', resizeCanvas);

        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener('resize', resizeCanvas);
        };
    }, [numBoids]);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: -1,
                background: 'black'
            }}
        />
    );
};

export default BoidsCanvas;
