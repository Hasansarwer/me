window.QUIZ_BANK = [

  // ── MCQ ────────────────────────────────────────────────────────────────────

  {
    type: "mcq",
    q: "Hooke's law for an ideal spring states that the restoring force is:",
    options: [
      "F = kx",
      "F = −kx",
      "F = −k/x",
      "F = k/x²"
    ],
    answer: 1,
    explanation: "F = −kx. The negative sign makes it a restoring force — it always opposes the displacement. k (in N/m) is the spring constant; a larger k means a stiffer spring. This linear relationship is valid for small displacements."
  },

  {
    type: "mcq",
    q: "Applying Newton's second law to a spring–mass system gives d²x/dt² + ___x = 0. The missing quantity is:",
    options: [
      "k/m",
      "m/k",
      "√(k/m)",
      "km"
    ],
    answer: 0,
    explanation: "From mẍ = −kx, dividing by m gives ẍ + (k/m)x = 0. Comparing with the standard SHM equation ẍ + ω²x = 0 identifies ω² = k/m. The ratio k/m sets how 'strong' the spring is relative to the mass."
  },

  {
    type: "mcq",
    q: "The angular frequency of a spring–mass oscillator is:",
    options: [
      "ω = √(m/k)",
      "ω = √(k/m)",
      "ω = k/m",
      "ω = m/k"
    ],
    answer: 1,
    explanation: "ω = √(k/m). A stiffer spring (larger k) increases ω — the oscillator is faster. A heavier mass (larger m) decreases ω — it is slower. This directly determines the period T = 2π/ω = 2π√(m/k)."
  },

  {
    type: "mcq",
    q: "The period of a spring–mass oscillator is T = 2π√(m/k). If the mass is quadrupled while k stays the same, the period:",
    options: [
      "Doubles",
      "Halves",
      "Quadruples",
      "Remains unchanged"
    ],
    answer: 0,
    explanation: "T ∝ √m. Replacing m with 4m gives T_new = 2π√(4m/k) = 2 × 2π√(m/k) = 2T. The period doubles. The square root means a fourfold increase in mass only doubles the period — changes in mass have a 'softened' effect."
  },

  {
    type: "mcq",
    q: "The property that the period of an ideal spring–mass oscillator is independent of amplitude is called:",
    options: [
      "Resonance",
      "Isochronism",
      "Superposition",
      "Damping"
    ],
    answer: 1,
    explanation: "Isochronism (from Greek: 'equal time') means T = 2π√(m/k) depends only on m and k, not on amplitude A. Whether the spring is compressed by 1 cm or 10 cm, the oscillation period is the same — provided Hooke's law still holds."
  },

  {
    type: "mcq",
    q: "A mass suspended on a vertical spring stretches it by e at equilibrium. The period of vertical oscillations is:",
    options: [
      "T = 2π√(e/g)",
      "T = 2π√(g/e)",
      "T = 2π√(m/g)",
      "T = 2π√(g/m)"
    ],
    answer: 0,
    explanation: "At equilibrium ke = mg, so k/m = g/e. Substituting into T = 2π√(m/k) gives T = 2π√(e/g). Gravity only shifts the equilibrium downwards by e; it does not change the period. This result lets you find T purely by measuring the static stretch e."
  },

  {
    type: "mcq",
    q: "The total mechanical energy of an undamped spring–mass oscillator is:",
    options: [
      "E = ½kA",
      "E = ½kA²",
      "E = ½mωA²",
      "E = kA²"
    ],
    answer: 1,
    explanation: "E = ½kA² = ½mω²A². This is constant throughout the motion — energy is conserved. It depends on amplitude squared: doubling A quadruples E. At any instant E = KE + PE, but the total never changes for an undamped oscillator."
  },

  {
    type: "mcq",
    q: "At the equilibrium position (x = 0) of a spring–mass oscillator:",
    options: [
      "KE = 0 and PE = E (all energy is potential)",
      "KE = E and PE = 0 (all energy is kinetic)",
      "KE = PE = E/2",
      "KE = 0 and PE = 0"
    ],
    answer: 1,
    explanation: "At x = 0: PE = ½kx² = 0, so all energy is kinetic: KE = E = ½kA². This is where the oscillator moves fastest (v = ωA). At the extremes x = ±A the situation reverses — all energy is potential and KE = 0."
  },

  {
    type: "mcq",
    q: "At displacement x = A/2, the ratio PE/E equals:",
    options: [
      "1/4",
      "1/2",
      "3/4",
      "1"
    ],
    answer: 0,
    explanation: "PE/E = (½kx²)/(½kA²) = x²/A² = (A/2)²/A² = 1/4. So PE is one-quarter of the total energy at half the amplitude. The remaining 3/4 is kinetic energy. This 'quarter-rule' follows directly from the x² dependence of PE."
  },

  {
    type: "mcq",
    q: "If the amplitude of a spring–mass oscillator is doubled, the total energy:",
    options: [
      "Doubles",
      "Triples",
      "Quadruples",
      "Remains unchanged"
    ],
    answer: 2,
    explanation: "E = ½kA². Since E ∝ A², doubling A gives E_new = ½k(2A)² = 4 × ½kA² = 4E. The energy quadruples. This is why large-amplitude oscillations are energetically much more significant than small ones."
  },

  // ── Fill in the blank ───────────────────────────────────────────────────────

  {
    type: "fill",
    q: "The angular frequency of a spring–mass system is ω = ___.",
    answer: "√(k/m)",
    alt: ["sqrt(k/m)", "(k/m)^(1/2)", "√k/m"],
    explanation: "ω = √(k/m). This follows from identifying ω² = k/m in the SHM equation ẍ + ω²x = 0. It shows directly that a stiffer spring speeds up the oscillation while a heavier mass slows it down."
  },

  {
    type: "fill",
    q: "For a vertical spring, the static extension e when mass m is hung is e = ___.",
    answer: "mg/k",
    alt: ["mg / k", "m*g/k"],
    explanation: "At equilibrium the spring force balances gravity: ke = mg, giving e = mg/k. This shift is permanent and only relocates the equilibrium — the oscillation equation and period are unchanged from the horizontal case."
  },

  {
    type: "fill",
    q: "The kinetic energy of a spring–mass oscillator at displacement x is KE = ___.",
    answer: "½mω²(A²-x²)",
    alt: ["(1/2)mω²(A²-x²)", "½k(A²-x²)", "(1/2)k(A²-x²)", "0.5mω²(A²-x²)"],
    explanation: "KE = ½mω²(A² − x²). Since k = mω², this equals ½k(A² − x²). At x = 0 (equilibrium) it equals the full energy E = ½mω²A²; at x = ±A it is zero. Together with PE = ½mω²x², the two always add to E."
  },

  {
    type: "fill",
    q: "The total mechanical energy of a spring–mass oscillator is E = ___.",
    answer: "½kA²",
    alt: ["(1/2)kA²", "½mω²A²", "(1/2)mω²A²", "0.5kA²"],
    explanation: "E = ½kA² = ½mω²A². It is constant (conserved for an undamped oscillator), independent of phase, and proportional to A². This is verified by adding KE = ½mω²(A² − x²) and PE = ½mω²x², which always sum to ½mω²A²."
  },

  {
    type: "fill",
    q: "The time-average of kinetic energy over one complete cycle is ⟨KE⟩ = ___.",
    answer: "E/2",
    alt: ["E / 2", "½E", "0.5E", "half E"],
    explanation: "⟨KE⟩ = ⟨PE⟩ = E/2. This follows because ⟨sin²(ωt+φ)⟩ = ⟨cos²(ωt+φ)⟩ = 1/2 over a full cycle. The oscillator spends equal time, on average, storing energy as kinetic and as potential — even though the instantaneous split varies continuously."
  }

];
