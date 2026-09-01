window.QUIZ_BANK = [

  // ── MCQ ────────────────────────────────────────────────────────────────────

  {
    type: "mcq",
    q: "The equation of motion of a simple pendulum (exact form) is:",
    options: [
      "d²θ/dt² = −(g/L)θ",
      "d²θ/dt² = −(g/L)sin θ",
      "d²θ/dt² = −(g/L)cos θ",
      "d²θ/dt² = +(g/L)sin θ"
    ],
    answer: 1,
    explanation: "The tangential restoring component of gravity is −mg sin θ. Applying Newton's second law along the arc (mL d²θ/dt² = −mg sin θ) and cancelling m gives d²θ/dt² = −(g/L) sin θ. The sin θ makes this a nonlinear equation — exact solutions require elliptic integrals."
  },

  {
    type: "mcq",
    q: "The small-angle approximation sin θ ≈ θ converts the pendulum equation into SHM. The angular frequency ω is then:",
    options: [
      "ω = √(L/g)",
      "ω = √(g/L)",
      "ω = g/L",
      "ω = L/g"
    ],
    answer: 1,
    explanation: "With sin θ ≈ θ the equation becomes d²θ/dt² + (g/L)θ = 0, which is the SHM equation with ω² = g/L, giving ω = √(g/L). This approximation is accurate to within 1% for amplitudes below about 8°."
  },

  {
    type: "mcq",
    q: "The period of a simple pendulum under the small-angle approximation is:",
    options: [
      "T = 2π√(g/L)",
      "T = 2π√(L/g)",
      "T = (1/2π)√(L/g)",
      "T = 2π√(Lg)"
    ],
    answer: 1,
    explanation: "T = 2π√(L/g). A longer pendulum oscillates more slowly (T ∝ √L); a stronger gravitational field oscillates it faster (T ∝ 1/√g). Crucially, T does not depend on mass or amplitude — that is why the pendulum was used as a timekeeper."
  },

  {
    type: "mcq",
    q: "The period of a simple pendulum is independent of:",
    options: [
      "Its length L",
      "Local gravitational acceleration g",
      "The mass of the bob and the amplitude (for small angles)",
      "The length and gravitational field"
    ],
    answer: 2,
    explanation: "T = 2π√(L/g) depends only on L and g. It does not depend on the mass m (it cancelled out of the equation of motion) or the amplitude (provided the small-angle approximation holds). This independence of mass and amplitude is what made pendulum clocks practical."
  },

  {
    type: "mcq",
    q: "A 'seconds pendulum' has a period of 2 s. At g = 9.81 m/s², its length is approximately:",
    options: [
      "0.25 m",
      "0.50 m",
      "1.00 m",
      "2.00 m"
    ],
    answer: 2,
    explanation: "From T = 2π√(L/g): L = gT²/(4π²) = 9.81 × 4 / (4π²) ≈ 0.994 m ≈ 1 m. The seconds pendulum is very nearly one metre long — a historically important result that linked the metre and the second."
  },

  {
    type: "mcq",
    q: "A physical (compound) pendulum of mass M, pivot-to-CM distance d, and moment of inertia I about the pivot has period:",
    options: [
      "T = 2π√(Mgd/I)",
      "T = 2π√(I/Mgd)",
      "T = 2π√(Md/Ig)",
      "T = 2π√(I/Md)"
    ],
    answer: 1,
    explanation: "The restoring torque is τ = −Mgd sin θ ≈ −Mgd θ. Applying τ = Iα gives Iθ̈ = −Mgd θ, i.e. θ̈ + (Mgd/I)θ = 0. So ω² = Mgd/I and T = 2π√(I/Mgd). A simple pendulum is the special case I = mL², d = L."
  },

  {
    type: "mcq",
    q: "When a lift accelerates upward with acceleration a, the period of a pendulum inside it:",
    options: [
      "Increases — the pendulum ticks slower",
      "Decreases — the pendulum ticks faster",
      "Stays the same",
      "Becomes infinite (pendulum stops)"
    ],
    answer: 1,
    explanation: "The upward acceleration adds to gravity: g_eff = g + a. Since T = 2π√(L/g_eff) and g_eff > g, the period decreases — the pendulum ticks faster. Intuitively, the bob 'feels heavier' so the restoring effect of gravity is stronger."
  },

  {
    type: "mcq",
    q: "When a lift accelerates downward with acceleration a (a < g), the pendulum inside:",
    options: [
      "Ticks faster because g_eff = g + a",
      "Ticks slower because g_eff = g − a",
      "Stops completely",
      "Ticks at the same rate"
    ],
    answer: 1,
    explanation: "Downward acceleration opposes gravity: g_eff = g − a < g. A smaller effective gravity gives a longer period T = 2π√(L/g_eff), so the pendulum ticks slower. At a = g (free fall), g_eff = 0 and the pendulum does not oscillate at all."
  },

  {
    type: "mcq",
    q: "A pendulum is in a lift in free fall (a = g downward). What happens to it?",
    options: [
      "It oscillates faster than normal",
      "It oscillates at its normal period",
      "It does not oscillate — it stays wherever released",
      "It oscillates with infinite amplitude"
    ],
    answer: 2,
    explanation: "In free fall g_eff = g − g = 0. With no effective gravity there is no restoring force, so the pendulum does not oscillate. This is a demonstration of the equivalence principle — in a freely falling frame, gravity is locally undetectable."
  },

  {
    type: "mcq",
    q: "A lift accelerates horizontally at acceleration a. The effective gravitational magnitude felt by a pendulum inside is:",
    options: [
      "g_eff = g + a",
      "g_eff = g − a",
      "g_eff = √(g² + a²)",
      "g_eff = √(g² − a²)"
    ],
    answer: 2,
    explanation: "The true gravity g acts vertically downward and the pseudo-force (due to horizontal acceleration a) acts horizontally. These two perpendicular vectors combine as g_eff = √(g² + a²). The string tilts to align with this resultant at angle α = arctan(a/g) from the vertical."
  },

  // ── Fill in the blank ───────────────────────────────────────────────────────

  {
    type: "fill",
    q: "The small-angle approximation assumes sin θ ≈ ___.",
    answer: "θ",
    alt: ["theta", "Θ"],
    explanation: "For |θ| ≪ 1 radian, sin θ ≈ θ (the first term of the Taylor series). This linearises the pendulum equation into SHM. The approximation is within 1% for amplitudes below about 8° (0.14 rad)."
  },

  {
    type: "fill",
    q: "The period of a simple pendulum is T = ___.",
    answer: "2π√(L/g)",
    alt: ["2*pi*sqrt(L/g)", "2π√L/g", "2pi*sqrt(L/g)"],
    explanation: "T = 2π√(L/g). It increases with length (longer → slower) and decreases with g (stronger gravity → faster). Notably, T is independent of both mass and amplitude — the property that made the pendulum a reliable clock."
  },

  {
    type: "fill",
    q: "The period of a physical pendulum with moment of inertia I, mass M, and pivot-to-CM distance d is T = ___.",
    answer: "2π√(I/Mgd)",
    alt: ["2*pi*sqrt(I/(M*g*d))", "2π√(I/(Mgd))", "2pi√(I/Mgd)"],
    explanation: "T = 2π√(I/Mgd). For a simple pendulum, I = mL² and d = L, which recovers T = 2π√(L/g). The physical pendulum formula is more general and applies to any rigid body swinging about a fixed pivot."
  },

  {
    type: "fill",
    q: "In a lift accelerating upward with acceleration a, the effective gravity is g_eff = ___.",
    answer: "g + a",
    alt: ["g+a", "a + g"],
    explanation: "g_eff = g + a. The upward acceleration creates a downward pseudo-force (in the lift frame) that adds to true gravity. The pendulum therefore oscillates faster: T = 2π√(L/(g+a)) < 2π√(L/g)."
  },

  {
    type: "fill",
    q: "A pendulum in free fall (lift falling with a = g) has g_eff = ___, so it ___ oscillate.",
    answer: "0",
    alt: ["zero", "0, does not", "zero, does not"],
    explanation: "g_eff = g − g = 0. With no effective restoring force, the pendulum does not oscillate at all — it remains wherever it is released. This weightlessness scenario demonstrates the equivalence principle: free fall is locally indistinguishable from the absence of gravity."
  },

  // ── Additional questions ────────────────────────────────────────────────────

  {
    type: "mcq",
    q: "A simple pendulum of period T on Earth is taken to the Moon where g_moon = g/6. Its new period is:",
    options: [
      "T/√6",
      "T/6",
      "T√6",
      "6T"
    ],
    answer: 2,
    explanation: "T = 2π√(L/g), so T ∝ 1/√g. Replacing g with g/6 gives T_moon = 2π√(L/(g/6)) = 2π√(6L/g) = √6 × T. The weaker lunar gravity makes the pendulum swing much more slowly — it takes √6 ≈ 2.45 times longer per cycle."
  },

  {
    type: "mcq",
    q: "If the length of a simple pendulum is doubled, the period:",
    options: [
      "Doubles",
      "Halves",
      "Increases by a factor of √2",
      "Increases by a factor of 4"
    ],
    answer: 2,
    explanation: "T = 2π√(L/g), so T ∝ √L. Replacing L with 2L gives T_new = 2π√(2L/g) = √2 × T. The period increases by a factor of √2 ≈ 1.41. The square-root relationship means you must quadruple the length to double the period."
  },

  {
    type: "mcq",
    q: "The small-angle approximation sin θ ≈ θ is accurate to within 1% for amplitudes below approximately:",
    options: [
      "1°",
      "8°",
      "20°",
      "45°"
    ],
    answer: 1,
    explanation: "The approximation sin θ ≈ θ introduces less than 1% error for |θ| ≲ 8° (≈ 0.14 rad). Beyond this angle the period begins to noticeably exceed 2π√(L/g) and the full elliptic-integral solution is needed. For most lab pendulums, keeping amplitude below 5° is a safe rule of thumb."
  },

  {
    type: "fill",
    q: "When a lift accelerates horizontally at a, the pendulum string tilts at angle α = arctan(___) from the vertical.",
    answer: "a/g",
    alt: ["a / g"],
    explanation: "The effective gravity vector has horizontal component a and vertical component g. The string aligns with this resultant, tilting at α = arctan(a/g) from the vertical. This is why you feel pushed back in an accelerating vehicle — the apparent 'gravity' tilts toward the rear."
  },

  {
    type: "fill",
    q: "A simple pendulum of length L = 1 m at g = 9.81 m/s² has period T ≈ ___ s. (Use π² ≈ 9.87)",
    answer: "2",
    alt: ["2.0", "2.00", "≈ 2"],
    explanation: "T = 2π√(L/g) = 2π√(1/9.81) = 2π × 0.319 ≈ 2.007 s ≈ 2 s. This is the seconds pendulum — its half-period (one swing) is 1 s, which is why it was used in pendulum clocks. Its length is very close to 1 m, linking the metre and the second historically."
  }

];
