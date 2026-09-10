// Slider wiring and play/pause

export function initControls(state) {
  function bind(id, stateKey, transform, displayId, fmt) {
    const input = document.getElementById(id);
    const display = displayId ? document.getElementById(displayId) : null;
    if (!input) return;
    if (display) display.textContent = fmt ? fmt(state[stateKey]) : state[stateKey];
    input.value = state[stateKey];
    input.addEventListener('input', () => {
      const v = transform(+input.value);
      state[stateKey] = v;
      if (display) display.textContent = fmt ? fmt(v) : v;
      if (stateKey === 'heartRate') {
        state.cycleLength = 60 / v;
      }
    });
  }

  bind('ctrl-hr',   'heartRate',  v => v,            'val-hr',   v => v);
  bind('ctrl-emax', 'emax',       v => v,            'val-emax', v => v.toFixed(1));
  bind('ctrl-edv',  'edv_target', v => v,            'val-edv',  v => v);
  bind('ctrl-r',    'resistance', v => v,            'val-r',    v => v.toFixed(2));

  const btn = document.getElementById('btn-playpause');
  if (btn) {
    btn.addEventListener('click', () => {
      state.running = !state.running;
      btn.textContent = state.running ? 'Pause' : 'Play';
      btn.classList.toggle('paused', !state.running);
    });
  }
}
