import { useEffect, useRef } from 'react';

export default function HeroVisual() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let time = 0;

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      const dpr = window.devicePixelRatio || 1;
      canvas.width = parent.offsetWidth * dpr;
      canvas.height = parent.offsetHeight * dpr;
      canvas.style.width = `${parent.offsetWidth}px`;
      canvas.style.height = `${parent.offsetHeight}px`;
      ctx.scale(dpr, dpr);
    };

    const draw = () => {
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      ctx.clearRect(0, 0, w, h);

      const cx = w / 2;
      const cy = h / 2;

      const layers = [
        { radius: 80, count: 6, speed: 0.5, opacity: 0.8, size: 4 },
        { radius: 140, count: 10, speed: -0.3, opacity: 0.5, size: 3 },
        { radius: 200, count: 14, speed: 0.2, opacity: 0.3, size: 2.5 },
      ];

      layers.forEach((layer, li) => {
        for (let i = 0; i < layer.count; i++) {
          const angle = (i / layer.count) * Math.PI * 2 + time * layer.speed;
          const x = cx + Math.cos(angle) * layer.radius;
          const y = cy + Math.sin(angle) * layer.radius;

          if (li === 0) {
            for (let j = 0; j < layer.count; j++) {
              if (j === i) continue;
              const angle2 = (j / layer.count) * Math.PI * 2 + time * layer.speed;
              const x2 = cx + Math.cos(angle2) * layer.radius;
              const y2 = cy + Math.sin(angle2) * layer.radius;
              ctx.beginPath();
              ctx.moveTo(x, y);
              ctx.lineTo(x2, y2);
              ctx.strokeStyle = `rgba(145, 196, 153, ${layer.opacity * 0.15})`;
              ctx.lineWidth = 0.5;
              ctx.stroke();
            }
          }

          ctx.beginPath();
          ctx.arc(x, y, layer.size, 0, Math.PI * 2);
          const gradient = ctx.createRadialGradient(x, y, 0, x, y, layer.size * 2);
          if (li === 0) {
            gradient.addColorStop(0, `rgba(145, 196, 153, ${layer.opacity})`);
            gradient.addColorStop(1, 'rgba(145, 196, 153, 0)');
          } else if (li === 1) {
            gradient.addColorStop(0, `rgba(194, 215, 187, ${layer.opacity})`);
            gradient.addColorStop(1, 'rgba(194, 215, 187, 0)');
          } else {
            gradient.addColorStop(0, `rgba(128, 143, 133, ${layer.opacity})`);
            gradient.addColorStop(1, 'rgba(128, 143, 133, 0)');
          }
          ctx.fillStyle = gradient;
          ctx.fill();
        }

        ctx.beginPath();
        ctx.arc(cx, cy, layer.radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(145, 196, 153, ${0.08 + li * 0.03})`;
        ctx.lineWidth = 0.5;
        ctx.setLineDash(li === 2 ? [4, 6] : []);
        ctx.stroke();
        ctx.setLineDash([]);
      });

      const pulseRadius = 30 + Math.sin(time * 2) * 8;
      const coreGradient = ctx.createRadialGradient(cx, cy, 0, cx, cy, pulseRadius);
      coreGradient.addColorStop(0, 'rgba(145, 196, 153, 0.6)');
      coreGradient.addColorStop(0.5, 'rgba(128, 143, 133, 0.3)');
      coreGradient.addColorStop(1, 'rgba(128, 143, 133, 0)');
      ctx.beginPath();
      ctx.arc(cx, cy, pulseRadius, 0, Math.PI * 2);
      ctx.fillStyle = coreGradient;
      ctx.fill();

      ctx.beginPath();
      ctx.arc(cx, cy, 6, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
      ctx.fill();

      time += 0.01;
      animationId = requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener('resize', resize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full"
      aria-hidden="true"
    />
  );
}
