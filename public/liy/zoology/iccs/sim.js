// Cardiac cycle physics: time-varying elastance + two-element Windkessel

const V0 = 5;          // mL unstressed volume
const EMIN = 0.05;     // mmHg/mL passive diastolic stiffness
const Z_AO = 0.05;     // mmHg·s/mL aortic characteristic impedance
const R_MITRAL = 0.005;// mmHg·s/mL mitral valve resistance
const P_LA = 8;        // mmHg left atrial pressure (fixed)
const ESV_MIN = 20;    // mL minimum end-systolic volume clamp
const HISTORY_LEN = 600; // ~10s at 60fps

export class SimState {
  constructor() {
    this.heartRate   = 75;
    this.emax        = 2.0;
    this.edv_target  = 120;
    this.resistance  = 1.0;
    this.capacitance = 1.5;

    this.t            = 0;
    this.cycleLength  = 60 / this.heartRate;
    this.lv_pressure  = 0;
    this.lv_volume    = 120;
    this.aortic_pressure = 80;
    this.elastance    = 0;
    this.mitral_open  = true;
    this.aortic_open  = false;
    this.cycleStartPtr = 0;
    this.lastCycleLoop = null; // {vols, pres} arrays for ghost loop

    this.history = {
      time:            new Float32Array(HISTORY_LEN),
      lv_pressure:     new Float32Array(HISTORY_LEN),
      lv_volume:       new Float32Array(HISTORY_LEN),
      aortic_pressure: new Float32Array(HISTORY_LEN),
      ecg_signal:      new Float32Array(HISTORY_LEN),
    };
    this.writePtr = 0;
    this.historyLen = HISTORY_LEN;
    this.running  = true;
    this._wallTime = 0;
  }
}

function normalizedElastance(t, cl) {
  const tpeak = 0.2 + 0.15 * cl;
  if (t <= tpeak) {
    return 0.5 * (1 - Math.cos(Math.PI * t / tpeak));
  } else if (t <= 1.5 * tpeak) {
    return 0.5 * (1 + Math.cos(2 * Math.PI * (t - tpeak) / tpeak));
  }
  return 0;
}

function ecgSignal(t, cl) {
  const waves = [
    { mu: 0.12, sigma: 0.025, A:  0.25 }, // P
    { mu: 0.27, sigma: 0.008, A: -0.15 }, // Q
    { mu: 0.30, sigma: 0.010, A:  1.60 }, // R
    { mu: 0.33, sigma: 0.008, A: -0.25 }, // S
    { mu: 0.45, sigma: 0.040, A:  0.35 }, // T
  ];
  return waves.reduce((sum, w) => {
    const dt = t - w.mu * cl;
    const s  = w.sigma * cl;
    return sum + w.A * Math.exp(-(dt * dt) / (2 * s * s));
  }, 0);
}

function integrateOneStep(state, dt) {
  const cl = state.cycleLength;
  const t  = state.t;

  const en = normalizedElastance(t, cl);
  const E  = state.emax * en + EMIN;
  state.elastance = E;

  const P_lv_raw = E * (state.lv_volume - V0);
  state.lv_pressure = Math.max(0, P_lv_raw);

  // Valve logic with hysteresis
  if (!state.aortic_open && state.lv_pressure > state.aortic_pressure + 2) {
    state.aortic_open = true;
  }
  if (state.aortic_open && state.lv_pressure < state.aortic_pressure - 1) {
    state.aortic_open = false;
  }
  if (!state.mitral_open && state.lv_pressure < P_LA) {
    state.mitral_open = true;
  }
  if (state.mitral_open && state.lv_pressure > P_LA) {
    state.mitral_open = false;
  }

  const Q_out    = state.aortic_open ? Math.max(0, (state.lv_pressure - state.aortic_pressure) / Z_AO) : 0;
  const Q_mitral = state.mitral_open ? Math.max(0, (P_LA - state.lv_pressure) / R_MITRAL) : 0;

  const dV = (Q_mitral - Q_out) * dt;
  const dP_ao = ((Q_out - state.aortic_pressure / state.resistance) / state.capacitance) * dt;

  state.lv_volume       += dV;
  state.aortic_pressure += dP_ao;

  // Clamp to physiologic limits
  state.lv_volume       = Math.max(ESV_MIN, Math.min(state.lv_volume, state.edv_target + 20));
  state.aortic_pressure = Math.max(30, Math.min(state.aortic_pressure, 200));
  state.lv_pressure     = Math.max(0, E * (state.lv_volume - V0));

  state.t += dt;
}

let _accumulator = 0;
const DT = 0.001; // 1 ms fixed step

export function stepSimulation(state, deltaT) {
  _accumulator += Math.min(deltaT, 0.05);

  while (_accumulator >= DT) {
    // Detect cycle boundary before stepping
    const prevT = state.t;
    integrateOneStep(state, DT);
    _accumulator -= DT;

    // Record ECG into current step
    const ecg = ecgSignal(state.t, state.cycleLength);

    // Write history
    const ptr = state.writePtr % state.historyLen;
    state.history.time[ptr]            = state.t;
    state.history.lv_pressure[ptr]     = state.lv_pressure;
    state.history.lv_volume[ptr]       = state.lv_volume;
    state.history.aortic_pressure[ptr] = state.aortic_pressure;
    state.history.ecg_signal[ptr]      = ecg;
    state.writePtr++;

    // Cycle reset
    if (state.t >= state.cycleLength) {
      // Snapshot this cycle's loop data for ghost rendering
      state.lastCycleLoop = snapshotLoop(state);
      state.cycleStartPtr = state.writePtr;
      state.t -= state.cycleLength;
      state.cycleLength = 60 / state.heartRate;
    }
  }
}

function snapshotLoop(state) {
  const len  = state.historyLen;
  const ptr  = state.writePtr;
  const vols = [];
  const pres = [];
  for (let i = 0; i < len; i++) {
    const idx = (ptr - len + i + len * 2) % len;
    vols.push(state.history.lv_volume[idx]);
    pres.push(state.history.lv_pressure[idx]);
  }
  return { vols, pres };
}
