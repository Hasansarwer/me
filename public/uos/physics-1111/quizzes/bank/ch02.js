window.QUIZ_BANK = [

  // ── MCQ ────────────────────────────────────────────────────────────────────

  {
    type: "mcq",
    q: "Which two conditions must hold for motion to be classified as simple harmonic?",
    options: [
      "Velocity proportional to displacement; always directed away from equilibrium",
      "Acceleration proportional to displacement; always directed toward equilibrium",
      "Acceleration proportional to velocity; always directed away from equilibrium",
      "Displacement proportional to time; always positive"
    ],
    answer: 1,
    explanation: "SHM requires (1) acceleration ∝ displacement and (2) acceleration always directed back toward equilibrium. Together these give a = −ω²x. The negative sign is what keeps the motion oscillatory — without it the object would accelerate away and never return."
  },

  {
    type: "mcq",
    q: "The acceleration of a simple harmonic oscillator at displacement x is:",
    options: [
      "a = ω²x",
      "a = −ωx",
      "a = −ω²x",
      "a = ω x²"
    ],
    answer: 2,
    explanation: "a = −ω²x. The negative sign ensures acceleration always points back toward equilibrium (opposite to x). The magnitude ω²|x| is zero at the equilibrium position and greatest at the extreme positions x = ±A."
  },

  {
    type: "mcq",
    q: "In x(t) = A cos(ωt + φ), the quantity φ is called the:",
    options: [
      "Amplitude",
      "Angular frequency",
      "Phase constant (initial phase)",
      "Period"
    ],
    answer: 2,
    explanation: "φ is the phase constant (or initial phase). It fixes where in the cycle the oscillator sits at t = 0. For example, φ = 0 means the oscillator starts at x = +A; φ = π/2 means it starts at x = 0 moving in the negative direction."
  },

  {
    type: "mcq",
    q: "The maximum speed of a simple harmonic oscillator with amplitude A and angular frequency ω is:",
    options: [
      "A / ω",
      "ω / A",
      "ωA",
      "ω²A"
    ],
    answer: 2,
    explanation: "v_max = ωA. It occurs at the equilibrium position (x = 0) where all energy is kinetic. From v = −Aω sin(ωt + φ), the largest possible magnitude of the sine is 1, giving |v|_max = Aω."
  },

  {
    type: "mcq",
    q: "At the equilibrium position (x = 0), which statement is correct?",
    options: [
      "Speed is zero and acceleration is maximum",
      "Speed is maximum and acceleration is zero",
      "Both speed and acceleration are maximum",
      "Both speed and acceleration are zero"
    ],
    answer: 1,
    explanation: "At x = 0: the restoring force F = −kx = 0, so acceleration a = −ω²x = 0. All energy is kinetic, so speed is at its maximum value ωA. The opposite extremes hold at x = ±A, where speed is zero and acceleration is greatest."
  },

  {
    type: "mcq",
    q: "The speed of a simple harmonic oscillator at displacement x is:",
    options: [
      "v = ω(A + x)",
      "v = ω√(A + x²)",
      "v = ω√(A² − x²)",
      "v = ωA / x"
    ],
    answer: 2,
    explanation: "v = ±ω√(A² − x²). This follows from sin²θ + cos²θ = 1 applied to x = A cos(ωt + φ) and v = −Aω sin(ωt + φ). When x = 0, v = ±ωA (maximum); when x = ±A, v = 0 (the turning points)."
  },

  {
    type: "mcq",
    q: "The defining differential equation of SHM is:",
    options: [
      "dx/dt + ωx = 0",
      "d²x/dt² − ω²x = 0",
      "d²x/dt² + ω²x = 0",
      "d²x/dt² + ωx = 0"
    ],
    answer: 2,
    explanation: "d²x/dt² + ω²x = 0 (equivalently ẍ = −ω²x). The + sign before ω²x is critical: it produces sinusoidal solutions. The − sign version would give exponentially growing solutions, which is not oscillatory. Any physical system that reduces to this form executes SHM."
  },

  {
    type: "mcq",
    q: "If an oscillator starts at x(0) = +A (the positive extreme), the phase constant φ is:",
    options: [
      "π/2",
      "π",
      "0",
      "2π"
    ],
    answer: 2,
    explanation: "x(0) = A cos φ = A requires cos φ = 1, giving φ = 0. With φ = 0, x(t) = A cos(ωt) — the oscillator starts at the positive extreme and the cosine function naturally begins there."
  },

  {
    type: "mcq",
    q: "SHM is geometrically understood as the projection of uniform circular motion onto:",
    options: [
      "A tangent to the circle",
      "A diameter of the circle",
      "The circumference of the circle",
      "A chord of the circle"
    ],
    answer: 1,
    explanation: "When a point Q moves uniformly around a reference circle of radius A with angular speed ω, its perpendicular projection P onto a diameter traces SHM: x = A cos(ωt + φ). This is where the sinusoidal form of displacement originates."
  },

  {
    type: "mcq",
    q: "For x(t) = 0.08 cos(4πt + π/3) m, the frequency f is:",
    options: [
      "4π Hz",
      "4 Hz",
      "2 Hz",
      "0.5 Hz"
    ],
    answer: 2,
    explanation: "ω = 4π rad/s, so f = ω/(2π) = 4π/(2π) = 2 Hz. Always extract ω from the coefficient of t inside the cosine/sine, then divide by 2π to get frequency in Hz."
  },

  // ── Fill in the blank ───────────────────────────────────────────────────────

  {
    type: "fill",
    q: "The SHM differential equation is d²x/dt² + ___x = 0.",
    answer: "ω²",
    alt: ["ω^2", "omega^2", "omega²", "w²", "w^2"],
    explanation: "d²x/dt² + ω²x = 0. Rearranging gives ẍ = −ω²x, confirming that acceleration is proportional to and opposite in direction to displacement. ω² is always positive, ensuring the solutions are sinusoidal (oscillatory)."
  },

  {
    type: "fill",
    q: "The maximum acceleration in SHM is a_max = ___.",
    answer: "ω²A",
    alt: ["ω^2 A", "omega^2 A", "Aω²", "A*ω²", "Aω^2"],
    explanation: "a_max = ω²A. From a = −ω²x, acceleration is greatest where |x| is greatest, i.e. at the extreme positions x = ±A. At equilibrium (x = 0), acceleration is zero."
  },

  {
    type: "fill",
    q: "The velocity in SHM is v(t) = ___ (differentiate x = A cos(ωt + φ)).",
    answer: "-Aω sin(ωt + φ)",
    alt: ["-aω sin(ωt+φ)", "-Aω sin(ωt+φ)", "−Aω sin(ωt+φ)", "-A*omega*sin(omega*t+phi)"],
    explanation: "Differentiating x = A cos(ωt + φ) with respect to t gives v = −Aω sin(ωt + φ). The negative sign and the sine function mean velocity is 90° out of phase with displacement: when displacement is at its extreme, velocity is zero, and vice versa."
  },

  {
    type: "fill",
    q: "For A = 0.1 m and T = 2 s, the maximum speed v_max = ___ m/s. (Leave in terms of π)",
    answer: "0.1π",
    alt: ["π/10", "pi/10", "0.1*pi", "0.314"],
    explanation: "ω = 2π/T = 2π/2 = π rad/s. Then v_max = ωA = π × 0.1 = 0.1π ≈ 0.314 m/s. Maximum speed occurs at x = 0 (the equilibrium position)."
  },

  {
    type: "fill",
    q: "In SHM, velocity and displacement are related by v = ±ω√(___ − x²).",
    answer: "A²",
    alt: ["A^2", "a²", "a^2"],
    explanation: "v = ±ω√(A² − x²). This is derived using the Pythagorean identity sin²θ + cos²θ = 1 on the expressions for x and v. It confirms: at x = ±A (the extremes) v = 0, and at x = 0 (equilibrium) v reaches its maximum ωA."
  },

  // ── Additional questions ────────────────────────────────────────────────────

  {
    type: "mcq",
    q: "For an oscillator with ω = 6 rad/s and A = 0.5 m, the maximum speed v_max is:",
    options: [
      "3 m/s",
      "6 m/s",
      "12 m/s",
      "0.5 m/s"
    ],
    answer: 0,
    explanation: "v_max = ωA = 6 × 0.5 = 3 m/s. This occurs at the equilibrium position x = 0 where all energy is kinetic. The formula v_max = ωA is the single most-used result for SHM speeds."
  },

  {
    type: "mcq",
    q: "The magnitude of acceleration at x = A/2 is:",
    options: [
      "a = ω²A",
      "a = ω²A/4",
      "a = ω²A/2",
      "a = 2ω²A"
    ],
    answer: 2,
    explanation: "|a| = ω²|x| = ω²(A/2) = ω²A/2. Since acceleration is proportional to displacement, at half the amplitude it is exactly half the maximum acceleration ω²A. This linear proportionality is the defining feature of SHM."
  },

  {
    type: "mcq",
    q: "For x(t) = A cos(ωt), velocity is maximum at t = T/4 because at that moment:",
    options: [
      "x = +A, so potential energy is maximum",
      "x = 0, so all energy is kinetic",
      "x = −A, so acceleration is maximum",
      "x = A/2, so energy is split equally"
    ],
    answer: 1,
    explanation: "At t = T/4: ωt = π/2, so x = A cos(π/2) = 0. The oscillator is at the equilibrium position where PE = ½kx² = 0, all energy is kinetic, and speed is maximum (v = ωA). The cosine and sine are 90° out of phase, so displacement zero and speed maximum occur together."
  },

  {
    type: "fill",
    q: "The period of SHM expressed in terms of angular frequency ω is T = ___.",
    answer: "2π/ω",
    alt: ["2*pi/ω", "2pi/ω", "2π / ω"],
    explanation: "T = 2π/ω. One full cycle spans 2π radians of phase; dividing by the angular rate ω (rad/s) gives the time for that cycle in seconds. This links T, f, and ω: T = 1/f = 2π/ω."
  },

  {
    type: "fill",
    q: "If x(0) = 0 and the oscillator moves in the negative x-direction at t = 0, the phase constant is φ = ___.",
    answer: "π/2",
    alt: ["pi/2", "90°", "90 degrees"],
    explanation: "x(0) = A cos φ = 0 requires cos φ = 0, so φ = π/2 or −π/2. v(0) = −Aω sin φ must be negative (moving in −x direction), so sin φ > 0, giving φ = π/2. With φ = π/2, x(t) = A cos(ωt + π/2) = −A sin(ωt), which starts at zero and initially goes negative."
  }

];
