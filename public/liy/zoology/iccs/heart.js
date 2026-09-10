// SVG heart anatomy animator

const ESV_MIN   = 20;
const EDV_MAX   = 220;

function lerp(a, b, t) { return a + (b - a) * t; }

function setFill(el, r, g, b) {
  if (el) el.style.fill = `rgb(${Math.round(r)},${Math.round(g)},${Math.round(b)})`;
}

export function createHeart(svgEl) {
  // Cache element references
  const ids = ['lv', 'rv', 'la', 'ra', 'valve-mitral', 'valve-aortic', 'valve-tricuspid', 'valve-pulmonary',
                'lv-blood', 'rv-blood', 'la-blood', 'ra-blood'];
  const el = {};
  ids.forEach(id => { el[id] = svgEl.querySelector('#' + id); });

  function render(state) {
    const edv = Math.max(state.edv_target, 80);
    const lv_fill = Math.max(0, Math.min(1, (state.lv_volume - ESV_MIN) / (edv - ESV_MIN)));

    // Estimate right-side volumes with ~20ms phase lag (approximated as slight fill offset)
    const rv_fill = Math.max(0, Math.min(1, lv_fill * 0.85 + 0.1));

    // Atria fill inversely (empty when ventricles fill, fill when ventricles eject)
    const la_fill = Math.max(0, Math.min(1, 1 - lv_fill));
    const ra_fill = Math.max(0, Math.min(1, 1 - rv_fill));

    // Animate chamber blood pools by scaling height and adjusting y-translate
    animateChamber(el['lv-blood'], lv_fill, 'lv');
    animateChamber(el['rv-blood'], rv_fill, 'rv');
    animateChamber(el['la-blood'], la_fill, 'la');
    animateChamber(el['ra-blood'], ra_fill, 'ra');

    // Valve states
    setValveOpen(el['valve-mitral'],    state.mitral_open);
    setValveOpen(el['valve-aortic'],    state.aortic_open);
    setValveOpen(el['valve-tricuspid'], !state.mitral_open);   // mirrors mitral (right side)
    setValveOpen(el['valve-pulmonary'], !state.aortic_open);   // mirrors aortic (right side)

    // Chamber wall outline intensity
    if (el['lv']) {
      const intensity = Math.round(lerp(40, 80, lv_fill));
      el['lv'].style.stroke = `rgb(${intensity + 60}, ${intensity}, ${intensity})`;
    }
  }

  function animateChamber(bloodEl, fill, side) {
    if (!bloodEl) return;
    // Scale the blood fill element vertically from bottom
    // fill=0 → scaleY(0.05), fill=1 → scaleY(1)
    const sy = lerp(0.05, 1, fill);
    bloodEl.style.transform = `scaleY(${sy.toFixed(3)})`;
    bloodEl.style.transformOrigin = 'bottom center';
    bloodEl.style.transformBox = 'fill-box';

    // Color: oxygenated (left) = red spectrum, deoxygenated (right) = blue spectrum
    if (side === 'lv' || side === 'la') {
      const r = Math.round(lerp(100, 200, fill));
      bloodEl.style.fill = `rgb(${r}, 20, 30)`;
    } else {
      const b = Math.round(lerp(80, 180, fill));
      bloodEl.style.fill = `rgb(20, 30, ${b})`;
    }
  }

  function setValveOpen(valveEl, isOpen) {
    if (!valveEl) return;
    valveEl.dataset.open = isOpen ? 'true' : 'false';
  }

  return { render };
}
