const FPS           = 60;
const INTERVAL      = 1000 / FPS;
const WAVE_SPEED    = 0.4;
const WAVE_WIDTH    = 0.6;
const WAVE_OPACITY  = 0.4;
const WAVE_ANGLE    = 20;
const GRAIN_DENSITY = 0.34;
const GRAIN_OPACITY = 0.50;

const GRAIN_R = 240, GRAIN_G = 240, GRAIN_B = 240;
const WAVE_R  = 240, WAVE_G  = 240, WAVE_B  = 240;

export function initNoiseCanvas(canvas) {
  const ctx = canvas.getContext('2d');
  let phase = 0, lastTs = 0;

  function resize() {
    canvas.width  = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
  }

  function draw(ts) {
    requestAnimationFrame(draw);
    if (ts - lastTs < INTERVAL) return;
    lastTs = ts;

    const w = canvas.width, h = canvas.height;
    if (!w || !h) return;

    phase = (phase + 0.01 * WAVE_SPEED) % 2;

    const angleRad = WAVE_ANGLE * Math.PI / 180;
    const cosA  = Math.cos(angleRad);
    const sinA  = Math.sin(angleRad);
    const denom = w * Math.max(cosA, 0.1) + h * Math.max(sinA, 0.1);
    const half  = WAVE_WIDTH / 2;
    const waveA = Math.floor(WAVE_OPACITY * 255);
    const grainA = Math.floor(GRAIN_OPACITY * 255);

    const imgData = ctx.createImageData(w, h);
    const d       = imgData.data;

    const dotCount = Math.floor(w * h * GRAIN_DENSITY * 0.05);
    for (let i = 0; i < dotCount; i++) {
      const idx = (Math.floor(Math.random() * h) * w + Math.floor(Math.random() * w)) * 4;
      d[idx] = GRAIN_R; d[idx+1] = GRAIN_G; d[idx+2] = GRAIN_B;
      d[idx+3] = grainA;
    }

    const a     = cosA / denom;
    const pxHalf = half / a;

    for (let py = 0; py < h; py++) {
      const b = sinA * py / denom;
      for (let k = 0; k <= 2; k++) {
        const pxCenter = (phase + k - b) / a;
        const x0 = Math.max(0,   Math.floor(pxCenter - pxHalf));
        const x1 = Math.min(w-1, Math.ceil(pxCenter  + pxHalf));

        for (let px = x0; px <= x1; px++) {
          const n = Math.abs(((px * cosA + py * sinA) / denom - phase) % 1);
          if (n >= half && n <= 1 - half) continue;
          const intensity = 1 - 2 * Math.min(n, 1 - n) / WAVE_WIDTH;
          if (Math.random() < 0.3 * intensity) {
            const idx = (py * w + px) * 4;
            const wa  = Math.floor(waveA * intensity);
            d[idx]   = Math.min(255, d[idx]   + WAVE_R);
            d[idx+1] = Math.min(255, d[idx+1] + WAVE_G);
            d[idx+2] = Math.min(255, d[idx+2] + WAVE_B);
            d[idx+3] = Math.max(d[idx+3], wa);
          }
        }
      }
    }

    ctx.putImageData(imgData, 0, 0);
  }

  resize();
  window.addEventListener('resize', resize);
  requestAnimationFrame(draw);
}
