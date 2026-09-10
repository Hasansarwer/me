// Scrolling ECG waveform renderer

const DISPLAY_SECONDS = 5;

export function createECG(canvas) {
  const ctx = canvas.getContext('2d');

  function resize() {
    canvas.width  = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  function render(state) {
    const w = canvas.width;
    const h = canvas.height;
    ctx.clearRect(0, 0, w, h);

    // Background
    ctx.fillStyle = '#050d05';
    ctx.fillRect(0, 0, w, h);

    // Gridlines
    ctx.strokeStyle = '#0a2a0a';
    ctx.lineWidth = 1;
    const gridRows = 5;
    for (let i = 1; i < gridRows; i++) {
      const y = (i / gridRows) * h;
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(w, y);
      ctx.stroke();
    }

    const len = state.historyLen;
    const ptr = state.writePtr;
    const samplesPerSecond = len / 10; // ~10s of history
    const displaySamples = Math.floor(samplesPerSecond * DISPLAY_SECONDS);
    const count = Math.min(displaySamples, ptr);

    if (count < 2) return;

    // Map ECG amplitude to canvas y (baseline at 60% height)
    const baseline = h * 0.6;
    const scale    = h * 0.22; // 1.0 amplitude → 22% of height

    ctx.strokeStyle = '#00ff88';
    ctx.lineWidth = 1.8;
    ctx.shadowColor = '#00ff88';
    ctx.shadowBlur = 4;
    ctx.beginPath();

    let first = true;
    for (let i = 0; i < count; i++) {
      const idx = (ptr - count + i + len * 2) % len;
      const x   = (i / (count - 1)) * w;
      const y   = baseline - state.history.ecg_signal[idx] * scale;
      if (first) { ctx.moveTo(x, y); first = false; }
      else ctx.lineTo(x, y);
    }
    ctx.stroke();
    ctx.shadowBlur = 0;

    // Moving cursor line at right edge
    ctx.strokeStyle = '#00ff8866';
    ctx.lineWidth = 1;
    ctx.setLineDash([4, 4]);
    ctx.beginPath();
    ctx.moveTo(w - 1, 0);
    ctx.lineTo(w - 1, h);
    ctx.stroke();
    ctx.setLineDash([]);

    // Label
    ctx.fillStyle = '#00cc66';
    ctx.font = '11px monospace';
    ctx.fillText(`${Math.round(state.heartRate)} bpm`, 8, 16);
  }

  return { render };
}
