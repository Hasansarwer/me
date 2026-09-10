// Scrolling hemodynamic time-series: pressure overlay + LV volume

const DISPLAY_SECONDS = 8;
const PAD = { top: 8, right: 10, bottom: 8, left: 46 };

export function createHemodynamics(canvas) {
  const ctx = canvas.getContext('2d');
  let w = 0, h = 0;

  function resize() {
    canvas.width  = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    w = canvas.width; h = canvas.height;
  }
  resize();
  window.addEventListener('resize', resize);

  function drawPanel(yOffset, panelH, yMin, yMax, series, label, colors) {
    const pw = w - PAD.left - PAD.right;
    const ph = panelH - PAD.top - PAD.bottom;
    const toX = (i, count) => PAD.left + (i / (count - 1)) * pw;
    const toY = (v) => yOffset + PAD.top + (1 - (v - yMin) / (yMax - yMin)) * ph;

    // Panel bg
    ctx.fillStyle = '#080f1a';
    ctx.fillRect(0, yOffset, w, panelH);

    // Gridlines
    const pTicks = yMin === 0 ? [0, 40, 80, 120, 160] : [40, 80, 120, 160, 200];
    const filtered = pTicks.filter(v => v >= yMin && v <= yMax);
    ctx.strokeStyle = '#12253a';
    ctx.setLineDash([3, 6]);
    ctx.lineWidth = 1;
    filtered.forEach(v => {
      const y = toY(v);
      if (y < yOffset + PAD.top || y > yOffset + panelH - PAD.bottom) return;
      ctx.beginPath(); ctx.moveTo(PAD.left, y); ctx.lineTo(PAD.left + pw, y); ctx.stroke();
      ctx.fillStyle = '#2a4a6f';
      ctx.font = '9px monospace';
      ctx.fillText(v, 2, y + 3);
    });
    ctx.setLineDash([]);

    // Left axis
    ctx.strokeStyle = '#1e3a5f';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(PAD.left, yOffset + PAD.top);
    ctx.lineTo(PAD.left, yOffset + panelH - PAD.bottom);
    ctx.stroke();

    // Label
    ctx.fillStyle = '#4a7fa5';
    ctx.font = '10px monospace';
    ctx.fillText(label, PAD.left + 4, yOffset + PAD.top + 12);

    // Plot each series
    const len   = series[0].data.length;
    const ptr   = series[0].ptr;
    const total = series[0].total;
    const samplesPerSec = len / 10;
    const displayCount = Math.floor(samplesPerSec * DISPLAY_SECONDS);
    const count = Math.min(displayCount, total);

    if (count < 2) return;

    series.forEach(({ data, color, lineWidth: lw }) => {
      ctx.strokeStyle = color;
      ctx.lineWidth   = lw || 1.8;
      ctx.beginPath();
      let first = true;
      for (let i = 0; i < count; i++) {
        const idx = (ptr - count + i + len * 2) % len;
        const x   = toX(i, count);
        const y   = toY(Math.max(yMin, Math.min(yMax, data[idx])));
        if (first) { ctx.moveTo(x, y); first = false; }
        else ctx.lineTo(x, y);
      }
      ctx.stroke();
    });
  }

  function render(state) {
    if (w === 0 || h === 0) return;
    ctx.clearRect(0, 0, w, h);

    const len  = state.historyLen;
    const ptr  = state.writePtr % len;
    const total = state.writePtr;

    const pressureH = Math.floor(h * 0.58);
    const volumeH   = h - pressureH - 2;

    // Top panel: LV + Aortic pressure overlay
    drawPanel(0, pressureH, 0, 160, [
      { data: state.history.aortic_pressure, ptr, total, color: '#ff4455', lineWidth: 2 },
      { data: state.history.lv_pressure,     ptr, total, color: '#ff9900', lineWidth: 1.5 },
    ], 'Pressure (mmHg)', []);

    // Divider
    ctx.fillStyle = '#1e3a5f';
    ctx.fillRect(0, pressureH, w, 2);

    // Bottom panel: LV volume
    drawPanel(pressureH + 2, volumeH, 40, 200, [
      { data: state.history.lv_volume, ptr, total, color: '#4499ff', lineWidth: 2 },
    ], 'LV Volume (mL)', []);

    // Legend (pressure panel)
    ctx.font = '10px monospace';
    ctx.fillStyle = '#ff4455'; ctx.fillText('■ Aortic P', w - 88, 14);
    ctx.fillStyle = '#ff9900'; ctx.fillText('■ LV P',     w - 88, 26);
  }

  return { render };
}
