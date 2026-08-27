/* ==========================================================================
   Animated "journey network" background — a lightweight particle field
   that reacts to the mouse. Used behind the opening and closing cover
   screens. Pure canvas 2D, no dependencies, self-contained.
   ========================================================================== */

function initCoverCanvas(canvasId, opts = {}) {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let w, h, dpr;
  let particles = [];
  const count = opts.count || 70;
  const linkDist = opts.linkDist || 130;
  const color = opts.color || '88, 214, 201'; // rgb triplet
  const mouse = { x: -9999, y: -9999, active: false };

  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    w = canvas.clientWidth;
    h = canvas.clientHeight;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  function makeParticles() {
    particles = Array.from({ length: count }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      r: Math.random() * 1.6 + 0.8,
    }));
  }

  function step() {
    ctx.clearRect(0, 0, w, h);

    particles.forEach(p => {
      // gentle drift
      p.x += p.vx;
      p.y += p.vy;

      // mouse repulsion — the "interactive" bit
      if (mouse.active) {
        const dx = p.x - mouse.x, dy = p.y - mouse.y;
        const dist = Math.hypot(dx, dy);
        if (dist < 140 && dist > 0.01) {
          const force = (140 - dist) / 140 * 0.6;
          p.x += (dx / dist) * force;
          p.y += (dy / dist) * force;
        }
      }

      if (p.x < -10) p.x = w + 10; if (p.x > w + 10) p.x = -10;
      if (p.y < -10) p.y = h + 10; if (p.y > h + 10) p.y = -10;
    });

    // links
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const a = particles[i], b = particles[j];
        const dist = Math.hypot(a.x - b.x, a.y - b.y);
        if (dist < linkDist) {
          const alpha = (1 - dist / linkDist) * 0.28;
          ctx.strokeStyle = `rgba(${color}, ${alpha})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }
    }

    // nodes
    particles.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${color}, 0.85)`;
      ctx.fill();
    });

    requestAnimationFrame(step);
  }

  window.addEventListener('resize', () => { resize(); makeParticles(); });
  canvas.addEventListener('mousemove', e => {
    const rect = canvas.getBoundingClientRect();
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
    mouse.active = true;
  });
  canvas.addEventListener('mouseleave', () => { mouse.active = false; });

  resize();
  makeParticles();
  requestAnimationFrame(step);
}
