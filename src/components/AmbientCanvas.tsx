import React, { useEffect, useRef } from 'react';

export const AmbientCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let width = 0;
    let height = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const pointer = {
      x: -2000,
      y: -2000,
      targetX: -2000,
      targetY: -2000,
      radius: 220,
      lastSpawn: 0
    };

    const formulas = [
      '∇ × B = μ₀J',
      '∂L/∂w',
      'λ = h/p',
      'f(x) = ∫ e^(-t²)dt',
      'z.infer<typeof Schema>',
      'hash(chunk) >> 4',
      'O(log n)',
      'tensor.dot(W, x) + b',
      '∑_{i=1}^n w_i x_i',
      'loss: 0.0024',
      'dim=[128, 768]',
      'softmax(QK^T / √d_k)',
      'E[X] = ∫ x p(x) dx',
      'curl(E) = -∂B/∂t',
      '|ψ⟩ = α|0⟩ + β|1⟩',
      'H(p, q) = -∑ p(x) log q(x)',
      'det(A - λI) = 0',
      'KL(P || Q)',
      'σ(z) = 1/(1+e^-z)',
      'L_reg = λ ‖θ‖₂²'
    ];

    interface Token {
      text: string;
      x: number;
      y: number;
      vx: number;
      vy: number;
      alpha: number;
      maxAlpha: number;
      baseColorDark: string;
      baseColorLight: string;
      life: number;
      maxLife: number;
      fontSize: number;
      nearCursor: boolean;
    }

    const activeTokens: Token[] = [];
    const MAX_TOKENS = 36;
    let lastAmbientSpawn = 0;

    function resize() {
      if (!canvas || !ctx) return;
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = width + 'px';
      canvas.style.height = height + 'px';
      ctx.scale(dpr, dpr);
    }

    window.addEventListener('resize', resize);
    resize();

    const handlePointerMove = (e: MouseEvent | TouchEvent) => {
      if ('touches' in e && e.touches.length > 0) {
        pointer.targetX = e.touches[0].clientX;
        pointer.targetY = e.touches[0].clientY;
      } else if ('clientX' in e) {
        pointer.targetX = e.clientX;
        pointer.targetY = e.clientY;
      }
    };

    const handlePointerLeave = () => {
      pointer.targetX = -2000;
      pointer.targetY = -2000;
    };

    window.addEventListener('mousemove', handlePointerMove, { passive: true });
    window.addEventListener('touchstart', handlePointerMove, { passive: true });
    window.addEventListener('touchmove', handlePointerMove, { passive: true });
    window.addEventListener('mouseleave', handlePointerLeave);
    window.addEventListener('touchend', handlePointerLeave);

    function createToken(x?: number, y?: number, nearCursor = false): Token {
      const text = formulas[Math.floor(Math.random() * formulas.length)];
      const darkColors = ['rgba(173, 198, 255, ', 'rgba(137, 250, 155, ', 'rgba(194, 198, 213, '];
      const lightColors = ['rgba(77, 142, 254, ', 'rgba(16, 185, 129, ', 'rgba(100, 116, 139, '];
      const idx = Math.floor(Math.random() * darkColors.length);

      return {
        text,
        x: x !== undefined ? x : Math.random() * width,
        y: y !== undefined ? y : Math.random() * height,
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.2 - 0.08,
        alpha: 0,
        maxAlpha: nearCursor ? (0.28 + Math.random() * 0.22) : (0.16 + Math.random() * 0.18),
        baseColorDark: darkColors[idx],
        baseColorLight: lightColors[idx],
        life: 0,
        maxLife: 320 + Math.random() * 380,
        fontSize: 10 + Math.floor(Math.random() * 3),
        nearCursor
      };
    }

    // Seed initial ambient tokens
    for (let i = 0; i < 20; i++) {
      const t = createToken();
      t.life = Math.random() * t.maxLife * 0.8;
      activeTokens.push(t);
    }

    let animationId: number;

    function render(time: number) {
      if (!ctx) return;
      animationId = requestAnimationFrame(render);

      // Smooth pointer interpolation
      pointer.x += (pointer.targetX - pointer.x) * 0.12;
      pointer.y += (pointer.targetY - pointer.y) * 0.12;

      ctx.clearRect(0, 0, width, height);

      const isDark = document.documentElement.classList.contains('dark');
      const scrollY = window.scrollY || window.pageYOffset || 0;

      // Parallax Grid
      const gridSize = 40;
      const offsetX = (pointer.x !== -2000 ? (pointer.x - width / 2) * 0.025 : 0) % gridSize;
      const offsetY = ((scrollY * 0.18) + (pointer.y !== -2000 ? (pointer.y - height / 2) * 0.025 : 0)) % gridSize;

      ctx.lineWidth = 1;
      ctx.strokeStyle = isDark ? 'rgba(255, 255, 255, 0.035)' : 'rgba(77, 142, 254, 0.06)';

      ctx.beginPath();
      for (let x = offsetX; x < width; x += gridSize) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
      }
      for (let y = offsetY; y < height; y += gridSize) {
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
      }
      ctx.stroke();

      // Pointer / touch proximity illumination
      if (pointer.x > -1000 && pointer.y > -1000) {
        const gridStartX = Math.floor((pointer.x - pointer.radius) / gridSize) * gridSize + offsetX;
        const gridEndX = Math.ceil((pointer.x + pointer.radius) / gridSize) * gridSize + offsetX;
        const gridStartY = Math.floor((pointer.y - pointer.radius) / gridSize) * gridSize + offsetY;
        const gridEndY = Math.ceil((pointer.y + pointer.radius) / gridSize) * gridSize + offsetY;

        for (let nx = gridStartX; nx <= gridEndX; nx += gridSize) {
          for (let ny = gridStartY; ny <= gridEndY; ny += gridSize) {
            const dx = nx - pointer.x;
            const dy = ny - pointer.y;
            const dist = Math.hypot(dx, dy);
            if (dist < pointer.radius) {
              const nodeAlpha = (1 - dist / pointer.radius) * (isDark ? 0.35 : 0.45);
              ctx.fillStyle = isDark ? `rgba(173, 198, 255, ${nodeAlpha})` : `rgba(77, 142, 254, ${nodeAlpha})`;
              ctx.beginPath();
              ctx.arc(nx, ny, 1.8, 0, Math.PI * 2);
              ctx.fill();
            }
          }
        }

        // Pointer spawned tokens
        if (time - pointer.lastSpawn > 220 && activeTokens.length < MAX_TOKENS) {
          const angle = Math.random() * Math.PI * 2;
          const dist = 30 + Math.random() * 100;
          activeTokens.push(createToken(pointer.x + Math.cos(angle) * dist, pointer.y + Math.sin(angle) * dist, true));
          pointer.lastSpawn = time;
        }
      }

      // Slow ambient replenishment across the entire viewport
      if (time - lastAmbientSpawn > 800 && activeTokens.length < 24) {
        activeTokens.push(createToken());
        lastAmbientSpawn = time;
      }

      // Render tokens
      for (let i = activeTokens.length - 1; i >= 0; i--) {
        const token = activeTokens[i];
        token.life += 1;

        const progress = token.life / token.maxLife;
        if (progress < 0.2) {
          token.alpha = (progress / 0.2) * token.maxAlpha;
        } else if (progress > 0.75) {
          token.alpha = ((1 - progress) / 0.25) * token.maxAlpha;
        } else {
          token.alpha = token.maxAlpha;
        }

        token.x += token.vx;
        token.y += token.vy;

        // Pointer repulsion physics
        if (pointer.x > -1000 && pointer.y > -1000) {
          const pdx = token.x - pointer.x;
          const pdy = token.y - pointer.y;
          const pdist = Math.hypot(pdx, pdy);
          if (pdist < pointer.radius && pdist > 0.001) {
            const repelForce = (1 - pdist / pointer.radius) * 0.45;
            token.x += (pdx / pdist) * repelForce;
            token.y += (pdy / pdist) * repelForce;
            token.alpha = Math.min(token.alpha * 1.35, isDark ? 0.65 : 0.55);
          }
        }

        ctx.font = `500 ${token.fontSize}px 'JetBrains Mono', monospace`;
        const baseColor = isDark ? token.baseColorDark : token.baseColorLight;
        ctx.fillStyle = baseColor + token.alpha + ')';
        ctx.fillText(token.text, token.x, token.y);

        if (token.life >= token.maxLife || token.x < -100 || token.x > width + 100 || token.y < -100 || token.y > height + 100) {
          activeTokens.splice(i, 1);
        }
      }
    }

    animationId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handlePointerMove);
      window.removeEventListener('touchstart', handlePointerMove);
      window.removeEventListener('touchmove', handlePointerMove);
      window.removeEventListener('mouseleave', handlePointerLeave);
      window.removeEventListener('touchend', handlePointerLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 w-full h-full"
      aria-hidden="true"
    />
  );
};
export default AmbientCanvas;
