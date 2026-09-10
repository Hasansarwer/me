import { SimState, stepSimulation } from './sim.js';
import { createECG }               from './ecg.js';
import { createHeart }             from './heart.js';
import { createPVLoop }            from './pvloop.js';
import { createHemodynamics }      from './hemodynamics.js';
import { initControls }            from './controls.js';

const state = new SimState();

const ecg  = createECG(document.getElementById('ecg-canvas'));
const heart = createHeart(document.getElementById('heart-svg'));
const pv    = createPVLoop(document.getElementById('pv-canvas'));
const hemo  = createHemodynamics(document.getElementById('hemo-canvas'));

initControls(state);

// Warm up simulation so displays aren't empty on first frame
stepSimulation(state, 3.0);

let lastTime = performance.now();

function loop(now) {
  if (state.running) {
    const deltaT = (now - lastTime) / 1000;
    stepSimulation(state, deltaT);
    ecg.render(state);
    heart.render(state);
    pv.render(state);
    hemo.render(state);
  }
  lastTime = now;
  requestAnimationFrame(loop);
}

requestAnimationFrame(loop);
