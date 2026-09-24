window.QUIZ_BANK = [

  // ── MCQ ────────────────────────────────────────────────────────────────────

  {
    type: "mcq",
    q: "A transverse wave is one in which the displacement of the medium is:",
    options: [
      "Parallel to the direction of wave propagation",
      "Perpendicular to the direction of wave propagation",
      "At 45° to the direction of propagation",
      "Zero everywhere"
    ],
    answer: 1,
    explanation: "In a transverse wave the medium particles oscillate perpendicular (at right angles) to the direction the wave travels. Examples include light and waves on a stretched string. In a longitudinal wave, by contrast, the displacement is parallel to the propagation direction."
  },

  {
    type: "mcq",
    q: "Which of the following is an example of a longitudinal wave?",
    options: [
      "Light waves in a vacuum",
      "Transverse waves on a string",
      "Sound waves in air",
      "Radio waves"
    ],
    answer: 2,
    explanation: "Sound in air is longitudinal: air molecules are displaced back and forth along the direction of propagation, creating alternating compressions and rarefactions. Light and radio waves are transverse electromagnetic waves; string waves are transverse mechanical waves."
  },

  {
    type: "mcq",
    q: "The wave number k is defined as:",
    options: [
      "k = λ/2π",
      "k = f/v",
      "k = 2π/λ",
      "k = v/f"
    ],
    answer: 2,
    explanation: "The wave number k = 2π/λ measures how many radians of phase occur per metre of distance — the spatial analogue of angular frequency ω = 2π/T. A shorter wavelength means more cycles per metre and hence a larger k."
  },

  {
    type: "mcq",
    q: "A wave has frequency f = 4 Hz and wavelength λ = 0.5 m. Its speed is:",
    options: [
      "0.5 m/s",
      "8 m/s",
      "2 m/s",
      "4 m/s"
    ],
    answer: 2,
    explanation: "v = fλ = 4 × 0.5 = 2 m/s. The wave speed is the product of frequency and wavelength — this fundamental relation holds for all periodic waves. Changing frequency alone (at fixed medium properties) changes λ but not v."
  },

  {
    type: "mcq",
    q: "The angular frequency ω is related to the ordinary frequency f by:",
    options: [
      "ω = f/2π",
      "ω = 2πf",
      "ω = f²",
      "ω = 1/f"
    ],
    answer: 1,
    explanation: "ω = 2πf because a single cycle spans 2π radians, so ω (radians per second) equals 2π times f (cycles per second). Equivalently, ω = 2π/T since T = 1/f."
  },

  {
    type: "mcq",
    q: "The wave y(x, t) = A sin(kx − ωt) travels in the:",
    options: [
      "Negative x-direction",
      "Positive x-direction",
      "y-direction",
      "Both directions simultaneously"
    ],
    answer: 1,
    explanation: "The phase is (kx − ωt). A crest (constant phase) satisfies kx − ωt = constant, so dx/dt = +ω/k = +v. Hence the wave moves in the positive x-direction. A minus sign between the kx and ωt terms always signals +x propagation."
  },

  {
    type: "mcq",
    q: "Which equation describes a wave travelling in the negative x-direction?",
    options: [
      "y = A sin(kx − ωt)",
      "y = A cos(kx − ωt)",
      "y = A sin(kx + ωt)",
      "y = A sin(ωt − kx)"
    ],
    answer: 2,
    explanation: "y = A sin(kx + ωt) has phase (kx + ωt). Setting it constant gives dx/dt = −ω/k = −v, so the wave travels in the −x direction. Option D, sin(ωt − kx) = −sin(kx − ωt), is still a +x-direction wave (same crest velocity as option A)."
  },

  {
    type: "mcq",
    q: "The speed of a transverse wave on a stretched string with tension T and linear mass density μ is:",
    options: [
      "v = T/μ",
      "v = √(μ/T)",
      "v = Tμ",
      "v = √(T/μ)"
    ],
    answer: 3,
    explanation: "v = √(T/μ). Greater tension increases the restoring force (faster propagation), while greater mass density increases inertia per unit length (slower propagation). The square-root dependence means you must quadruple T to double v."
  },

  {
    type: "mcq",
    q: "The tension in a string is increased to four times its original value while the linear mass density remains unchanged. The wave speed:",
    options: [
      "Is unchanged",
      "Doubles",
      "Quadruples",
      "Increases by √2"
    ],
    answer: 1,
    explanation: "v = √(T/μ), so v ∝ √T. Replacing T with 4T gives v_new = √(4T/μ) = 2v. The speed doubles — not quadruples. The square root means you need four times the tension to achieve twice the speed."
  },

  {
    type: "mcq",
    q: "Stationary (standing) waves are produced by:",
    options: [
      "A single wave with very large amplitude",
      "Superposition of two waves with different frequencies",
      "Superposition of two waves of equal amplitude travelling in opposite directions",
      "Superposition of transverse and longitudinal waves"
    ],
    answer: 2,
    explanation: "Standing waves arise from the superposition of two waves of equal amplitude and frequency travelling in opposite directions. They create fixed nodes (zero displacement) and antinodes (maximum displacement). This typically occurs on strings when a wave reflects from a fixed boundary."
  },

  {
    type: "mcq",
    q: "At a node of a standing wave, the displacement is:",
    options: [
      "Equal to A (the individual wave amplitude)",
      "Equal to 2A (the maximum possible)",
      "Permanently zero",
      "Constantly oscillating between ±2A"
    ],
    answer: 2,
    explanation: "At a node the two component waves always cancel completely, so the displacement is permanently zero. The node position is fixed in space. At an antinode (midway between nodes) the waves reinforce, giving a maximum displacement of 2A."
  },

  {
    type: "mcq",
    q: "In the standing wave y = 2A sin(kx) cos(ωt), nodes occur where:",
    options: [
      "cos(ωt) = 0",
      "sin(kx) = ±1",
      "sin(kx) = 0",
      "kx = π/4, 3π/4, …"
    ],
    answer: 2,
    explanation: "The amplitude envelope 2A sin(kx) is permanently zero when sin(kx) = 0, i.e. at kx = 0, π, 2π, … or x = 0, λ/2, λ, … Option A identifies instants when the whole string is momentarily flat (every half-period), not permanently fixed nodes."
  },

  {
    type: "mcq",
    q: "A string of length L is fixed at both ends. The wavelength of the fundamental mode (first harmonic) is:",
    options: [
      "λ = L/2",
      "λ = L",
      "λ = 2L",
      "λ = 4L"
    ],
    answer: 2,
    explanation: "The fundamental mode fits exactly one half-wavelength between the two fixed nodes at the ends: L = λ₁/2, so λ₁ = 2L. Higher harmonics satisfy L = nλ/2, giving λn = 2L/n for n = 1, 2, 3, …"
  },

  {
    type: "mcq",
    q: "For a string of length L fixed at both ends with wave speed v, the nth harmonic frequency is:",
    options: [
      "fn = v/nL",
      "fn = nv/4L",
      "fn = nv/2L",
      "fn = n²v/2L"
    ],
    answer: 2,
    explanation: "fn = nv/2L for n = 1, 2, 3, … Each harmonic fits n half-wavelengths: L = nλn/2 → λn = 2L/n → fn = v/λn = nv/2L. The harmonic frequencies are integer multiples of the fundamental f₁ = v/2L."
  },

  {
    type: "mcq",
    q: "The distance between two adjacent nodes (or two adjacent antinodes) in a standing wave is:",
    options: [
      "λ/4",
      "λ/2",
      "λ",
      "2λ"
    ],
    answer: 1,
    explanation: "Nodes occur at x = 0, λ/2, λ, 3λ/2, … — separated by λ/2. Antinodes sit midway between nodes at x = λ/4, 3λ/4, 5λ/4, … — also λ/2 apart. Measuring the node spacing experimentally therefore gives λ/2, not λ."
  },

  // ── Fill in the blank ───────────────────────────────────────────────────────

  {
    type: "fill",
    q: "The wave number k in terms of wavelength λ is k = ___.",
    answer: "2π/λ",
    alt: ["2pi/lambda", "2*pi/lambda"],
    explanation: "k = 2π/λ measures the spatial phase change in radians per unit length. It is the spatial analogue of ω = 2π/T. A shorter wavelength packs more cycles per metre, giving a larger k."
  },

  {
    type: "fill",
    q: "The angular frequency ω in terms of frequency f is ω = ___.",
    answer: "2πf",
    alt: ["2*pi*f", "2pif", "2pi*f"],
    explanation: "ω = 2πf because one complete cycle spans 2π radians. Equivalently, ω = 2π/T since T = 1/f. Angular frequency appears naturally in the wave equation since the phase (kx − ωt) is dimensionless."
  },

  {
    type: "fill",
    q: "The phase velocity of a wave in terms of angular frequency ω and wave number k is v = ___.",
    answer: "ω/k",
    alt: ["omega/k"],
    explanation: "v = ω/k. Setting the phase (kx − ωt) constant and differentiating gives dx/dt = ω/k. Combined with ω = 2πf and k = 2π/λ, this recovers the familiar v = fλ."
  },

  {
    type: "fill",
    q: "The wave speed in terms of frequency f and wavelength λ is v = ___.",
    answer: "fλ",
    alt: ["f*lambda", "lambda*f", "λf", "f*λ"],
    explanation: "v = fλ: in each period T = 1/f the wave advances by exactly one wavelength λ, so its speed is λ/T = fλ. This is the most commonly used form of the wave-speed relation."
  },

  {
    type: "fill",
    q: "The speed of a transverse wave on a string with tension T and linear mass density μ is v = ___.",
    answer: "√(T/μ)",
    alt: ["sqrt(T/mu)", "sqrt(T/μ)", "(T/mu)^(1/2)", "(T/μ)^(1/2)"],
    explanation: "v = √(T/μ). Tension T provides the restoring force (higher T → faster) and μ = m/L is the inertia per unit length (higher μ → slower). Derived by applying Newton's second law to a small curved segment of the string."
  },

  {
    type: "fill",
    q: "The speed of a longitudinal wave in a fluid with bulk modulus B and density ρ is v = ___.",
    answer: "√(B/ρ)",
    alt: ["sqrt(B/rho)", "sqrt(B/ρ)", "(B/rho)^(1/2)"],
    explanation: "v = √(B/ρ). The bulk modulus B measures the fluid's stiffness (resistance to compression) and ρ is its inertia per unit volume. For air this gives the speed of sound v = √(γP/ρ), where γP is the effective bulk modulus."
  },

  {
    type: "fill",
    q: "The wave equation states that ∂²y/∂t² = ___ × ∂²y/∂x².",
    answer: "v²",
    alt: ["v^2"],
    explanation: "∂²y/∂t² = v² ∂²y/∂x² is the classical wave equation. Any function of the form y = f(x ± vt) satisfies it. The coefficient v² is the square of the wave speed, linking the temporal and spatial curvatures of the displacement."
  },

  {
    type: "fill",
    q: "Two waves y₁ = A sin(kx − ωt) and y₂ = A sin(kx + ωt) superpose. The resultant standing wave is y = ___.",
    answer: "2A sin(kx)cos(ωt)",
    alt: ["2Asin(kx)cos(omegat)", "2A sin(kx) cos(omegat)", "2A*sin(kx)*cos(omega*t)", "2asin(kx)cos(omegat)"],
    explanation: "Using the sum-to-product identity: sin(kx − ωt) + sin(kx + ωt) = 2 sin(kx)cos(ωt). The space and time variables separate — the amplitude envelope 2A sin(kx) is fixed in space while cos(ωt) drives the oscillation at every point."
  },

  {
    type: "fill",
    q: "The frequency of the nth harmonic on a string of length L fixed at both ends (wave speed v) is fn = ___.",
    answer: "nv/2L",
    alt: ["n*v/(2*L)", "n*v/2L", "nv/(2L)"],
    explanation: "fn = nv/2L for n = 1, 2, 3, … The boundary condition gives L = nλn/2, so λn = 2L/n and fn = v/λn = nv/2L. Harmonic frequencies are integer multiples of the fundamental f₁ = v/2L."
  },

  {
    type: "fill",
    q: "The wavelength of the fundamental mode (first harmonic) on a string of length L fixed at both ends is λ₁ = ___.",
    answer: "2L",
    alt: ["2*L"],
    explanation: "The fundamental fits exactly one half-wavelength: L = λ₁/2, so λ₁ = 2L. This gives the lowest standing-wave frequency f₁ = v/2L. The nth harmonic has λn = 2L/n, fitting n half-wavelengths."
  },

  {
    type: "fill",
    q: "In the nth harmonic of a standing wave on a string fixed at both ends, the number of antinodes is ___.",
    answer: "n",
    alt: [],
    explanation: "The nth harmonic fits n half-wavelengths and has n antinodes (and n + 1 nodes, including the two fixed ends). For example, the fundamental (n = 1) has 1 antinode at the midpoint; the second harmonic (n = 2) has 2 antinodes."
  },

  {
    type: "fill",
    q: "In a standing wave with wavelength λ, the distance between two adjacent nodes is ___.",
    answer: "λ/2",
    alt: ["lambda/2", "0.5λ", "0.5*lambda", "0.5*λ"],
    explanation: "Nodes occur at x = 0, λ/2, λ, 3λ/2, … so adjacent nodes are separated by λ/2. Measuring this spacing experimentally gives half the wavelength; the full wavelength is λ = 2 × (node spacing)."
  },

  {
    type: "fill",
    q: "The angular frequency ω in terms of the period T is ω = ___.",
    answer: "2π/T",
    alt: ["2pi/T", "2*pi/T"],
    explanation: "ω = 2π/T: one full oscillation covers 2π radians and takes time T, giving a rate of 2π/T rad/s. Since T = 1/f, this is identical to ω = 2πf."
  },

  {
    type: "fill",
    q: "A string of length L = 0.5 m has a wave speed v = 20 m/s. The fundamental frequency f₁ = ___ Hz.",
    answer: "20",
    alt: ["20.0", "20.00"],
    explanation: "f₁ = v/2L = 20 / (2 × 0.5) = 20 Hz. This is the lowest frequency for a standing wave on this string. Higher harmonics occur at f₂ = 40 Hz, f₃ = 60 Hz, and so on."
  },

  {
    type: "fill",
    q: "In the progressive wave equation y = A sin(___), the blank for a wave moving in the +x direction is:",
    answer: "kx − ωt",
    alt: ["kx - omegat", "kx-omegat", "kx - omega*t", "kx-omega*t", "kx-wt", "kx - wt"],
    explanation: "The phase (kx − ωt) tracks a crest moving in the +x direction: setting it constant gives dx/dt = +ω/k = +v > 0. The phase (kx + ωt) would represent a wave moving in the −x direction."
  }

];
