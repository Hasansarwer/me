// Pressure-Volume loop tracer

const V_MIN = 0, V_MAX = 220;   // mL
const P_MIN = 0, P_MAX = 160;   // mmHg
const V0 = 5;                   // unstressed volume (matches sim.js)
const PAD = { top: 30, right: 20, bottom: 40, left: 52 };

export function createPVLoop(canvas) {
  const ctx = canvas.getContext('2d');
  let w = 0, h = 0, pw = 0, ph = 0;

  function resize() {
    canvas.width  = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    w = canvas.width; h = canvas.height;
    pw = w - PAD.left - PAD.right;
    ph = h - PAD.top  - PAD.bottom;
  }
  resize();
  window.addEventListener('resize', resize);

  function toX(v) { return PAD.left + ((v - V_MIN) / (V_MAX - V_MIN)) * pw; }
  function toY(p) { return PAD.top  + (1 - (p - P_MIN) / (P_MAX - P_MIN)) * ph; }

  function drawAxes() {
    ctx.strokeStyle = '#1e3a5f';
    ctx.lineWidth = 1;
    ctx.fillStyle = '#4a7fa5';
    ctx.font = '10px monospace';

    // Grid
    const vTicks = [0, 50, 100, 150, 200];
    const pTicks = [0, 40, 80, 120, 160];
    ctx.setLineDash([3, 5]);
    vTicks.forEach(v => {
      const x = toX(v);
      ctx.beginPath(); ctx.moveTo(x, PAD.top); ctx.lineTo(x, PAD.top + ph); ctx.stroke();
      ctx.fillText(v, x - 8, h - PAD.bottom + 14);
    });
    pTicks.forEach(p => {
      const y = toY(p);
      ctx.beginPath(); ctx.moveTo(PAD.left, y); ctx.lineTo(PAD.left + pw, y); ctx.stroke();
      ctx.fillText(p, 2, y + 4);
    });
    ctx.setLineDash([]);

    // Axis lines
    ctx.strokeStyle = '#2a4a6f';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(PAD.left, PAD.top); ctx.lineTo(PAD.left, PAD.top + ph);
    ctx.lineTo(PAD.left + pw, PAD.top + ph);
    ctx.stroke();

    // Axis labels
    ctx.fillStyle = '#6090b0';
    ctx.font = '11px monospace';
    ctx.fillText('Volume (mL)', PAD.left + pw / 2 - 40, h - 4);
    ctx.save();
    ctx.translate(12, PAD.top + ph / 2 + 40);
    ctx.rotate(-Math.PI / 2);
    ctx.fillText('Pressure (mmHg)', 0, 0);
    ctx.restore();
  }

  function drawESPVR(emax) {
    // ESPVR: P = Emax * (V - V0)
    ctx.strokeStyle = '#ff660044';
    ctx.lineWidth = 1.5;
    ctx.setLineDash([6, 4]);
    ctx.beginPath();
    const v1 = V0, p1 = 0;
    const v2 = V_MAX;
    const p2 = emax * (v2 - V0);
    ctx.moveTo(toX(v1), toY(p1));
    ctx.lineTo(toX(v2), toY(Math.min(p2, P_MAX)));
    ctx.stroke();
    ctx.setLineDash([]);
    ctx.fillStyle = '#ff660088';
    ctx.font = '10px monospace';
    ctx.fillText('ESPVR', toX(60), toY(Math.min(emax * 55, P_MAX - 10)));
  }

  function drawLoop(vols, pres, color, alpha) {
    if (!vols || vols.length < 2) return;
    ctx.globalAlpha = alpha;
    ctx.strokeStyle = color;
    ctx.lineWidth   = alpha > 0.5 ? 2 : 1.5;
    ctx.beginPath();
    ctx.moveTo(toX(vols[0]), toY(pres[0]));
    for (let i = 1; i < vols.length; i++) {
      ctx.lineTo(toX(vols[i]), toY(pres[i]));
    }
    ctx.stroke();
    ctx.globalAlpha = 1;
  }

  function drawCurrentPoint(v, p) {
    ctx.fillStyle = '#00d4ff';
    ctx.beginPath();
    ctx.arc(toX(v), toY(p), 5, 0, Math.PI * 2);
    ctx.fill();
  }

  function getActiveSweep(state) {
    const len  = state.historyLen;
    const ptr  = state.writePtr;
    const start = state.cycleStartPtr;
    const count = Math.min(ptr - start, len - 1);
    const vols = [], pres = [];
    for (let i = 0; i < count; i++) {
      const idx = (start + i) % len;
      vols.push(state.history.lv_volume[idx]);
      pres.push(state.history.lv_pressure[idx]);
    }
    return { vols, pres };
  }

  function render(state) {
    ctx.clearRect(0, 0, w, h);

    // Panel background
    ctx.fillStyle = '#0d1520';
    ctx.fillRect(0, 0, w, h);

    drawAxes();
    drawESPVR(state.emax);

    // Ghost loop (previous complete cycle)
    if (state.lastCycleLoop) {
      drawLoop(state.lastCycleLoop.vols, state.lastCycleLoop.pres, '#00d4ff', 0.18);
    }

    // Active sweep (current cycle so far)
    const sweep = getActiveSweep(state);
    drawLoop(sweep.vols, sweep.pres, '#00d4ff', 0.85);

    // Current point
    drawCurrentPoint(state.lv_volume, state.lv_pressure);

    // Label
    ctx.fillStyle = '#4a7fa5';
    ctx.font = '11px monospace';
    ctx.fillText('P–V Loop', PAD.left + 4, PAD.top - 8);
  }

  return { render };
}
