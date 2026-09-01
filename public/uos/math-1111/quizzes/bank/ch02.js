window.QUIZ_BANK = [

  // ── MCQ ────────────────────────────────────────────────────────────────────

  {
    type: "mcq",
    q: "The slope of the secant line through points P(x₁, y₁) and Q(x₂, y₂) on a curve is:",
    options: [
      "m = (x₂ − x₁) / (y₂ − y₁)",
      "m = (y₂ − y₁) / (x₂ − x₁)",
      "m = (y₂ + y₁) / (x₂ + x₁)",
      "m = (x₂ − x₁)(y₂ − y₁)"
    ],
    answer: 1,
    explanation: "The slope of any straight line through two points is rise over run: m = (y₂ − y₁)/(x₂ − x₁). This is the slope of the secant line PQ. As Q moves toward P, this ratio becomes the slope of the tangent (the derivative) at P."
  },

  {
    type: "mcq",
    q: "The tangent line to a curve at point P is defined as:",
    options: [
      "The line perpendicular to the curve at P",
      "The line through P and the origin",
      "The limiting position of the secant line PQ as Q → P",
      "The line with the same y-intercept as the curve"
    ],
    answer: 2,
    explanation: "As the nearby point Q slides along the curve toward the fixed point P, the secant line PQ rotates. Its limiting position — when Q reaches P — is the tangent line at P. This limit is what defines the tangent precisely and connects it to the derivative."
  },

  {
    type: "mcq",
    q: "The derivative of f at a point P is geometrically interpreted as:",
    options: [
      "The area under the curve at P",
      "The slope of the tangent line to the curve at P",
      "The y-intercept of the tangent line at P",
      "The distance from P to the x-axis"
    ],
    answer: 1,
    explanation: "By definition, f ′(x₁) = lim(Δx→0) Δf/Δx, and this limit equals the slope of the tangent line at P(x₁, y₁). So the derivative at a point is precisely the steepness (inclination) of the curve at that point."
  },

  {
    type: "mcq",
    q: "The derivative dy/dx is defined as the limit:",
    options: [
      "lim(Δx→∞) Δy/Δx",
      "lim(Δy→0) Δx/Δy",
      "lim(Δx→0) Δy/Δx",
      "lim(Δx→0) Δx/Δy"
    ],
    answer: 2,
    explanation: "dy/dx = lim(Δx→0) Δy/Δx. Here Δy = f(x + Δx) − f(x) is the change in output and Δx is the change in input. As Δx shrinks to zero, the average rate Δy/Δx becomes the instantaneous rate of change — the derivative."
  },

  {
    type: "mcq",
    q: "For the curve y = 1/x, the derivative at the point P(x₁, y₁) is:",
    options: [
      "1/x₁",
      "1/x₁²",
      "−1/x₁²",
      "−1/x₁"
    ],
    answer: 2,
    explanation: "Applying the limit definition to y = 1/x: dy/dx = lim(Δx→0) [1/(x₁+Δx) − 1/x₁]/Δx = lim(Δx→0) [−Δx / (x₁(x₁+Δx)·Δx)] = −1/x₁². The negative sign means the curve is always decreasing — the tangent slope is negative everywhere."
  },

  {
    type: "mcq",
    q: "The tangent to y = 1/x at P(x₁, y₁) cuts the x-axis at (2x₁, 0) and the y-axis at (0, 2y₁). The area of the triangle formed by this tangent and the coordinate axes is:",
    options: [
      "½ x₁y₁",
      "x₁y₁",
      "2",
      "4"
    ],
    answer: 2,
    explanation: "Area = ½ × base × height = ½ × 2x₁ × 2y₁ = 2x₁y₁. Since P lies on y = 1/x, we have y₁ = 1/x₁, so x₁y₁ = 1. Therefore Area = 2 × 1 = 2, regardless of which point P is chosen on the curve."
  },

  {
    type: "mcq",
    q: "The physical interpretation of the derivative dy/dx is:",
    options: [
      "The total accumulated change in y",
      "The average rate of change of y over the full domain",
      "The instantaneous rate of change of y with respect to x",
      "The maximum value of y"
    ],
    answer: 2,
    explanation: "Physically, Δy/Δx is the average rate of change over the interval [x, x+Δx]. As Δx → 0, this average becomes the instantaneous rate at the single point x. For example, dy/dt gives how fast y is changing at that exact moment in time."
  },

  {
    type: "mcq",
    q: "If s(t) is the position of a particle at time t, the instantaneous velocity v(t) is:",
    options: [
      "v(t) = s(t) / t",
      "v(t) = ds/dt",
      "v(t) = d²s/dt²",
      "v(t) = s(t + 1) − s(t)"
    ],
    answer: 1,
    explanation: "Velocity is the instantaneous rate of change of position: v(t) = ds/dt = lim(Δt→0) [s(t+Δt) − s(t)]/Δt. Option (a) would give average velocity from t = 0 only; option (c) is acceleration; option (d) is the average over a 1-second interval."
  },

  {
    type: "mcq",
    q: "Instantaneous acceleration a(t) is defined as:",
    options: [
      "a(t) = s(t) / t²",
      "a(t) = ds/dt",
      "a(t) = dv/dt = d²s/dt²",
      "a(t) = v(t) / t"
    ],
    answer: 2,
    explanation: "Acceleration is the rate of change of velocity: a(t) = dv/dt. Since v = ds/dt, acceleration is also the second derivative of position: a = d²s/dt². It measures how quickly the particle's speed or direction is changing at each instant."
  },

  {
    type: "mcq",
    q: "For s(t) = t³ − 6t² + 9t metres, the velocity at t = 2 s is:",
    options: [
      "v(2) = 3 m/s",
      "v(2) = 0 m/s",
      "v(2) = −3 m/s",
      "v(2) = −6 m/s"
    ],
    answer: 2,
    explanation: "v(t) = ds/dt = 3t² − 12t + 9. At t = 2: v(2) = 3(4) − 12(2) + 9 = 12 − 24 + 9 = −3 m/s. The negative sign means the particle is moving in the negative direction at that instant."
  },

  {
    type: "mcq",
    q: "For s(t) = t³ − 6t² + 9t metres, the acceleration at t = 2 s is:",
    options: [
      "a(2) = 6 m/s²",
      "a(2) = 0 m/s²",
      "a(2) = −6 m/s²",
      "a(2) = 3 m/s²"
    ],
    answer: 1,
    explanation: "a(t) = dv/dt = 6t − 12. At t = 2: a(2) = 6(2) − 12 = 12 − 12 = 0 m/s². The particle is momentarily not accelerating. For t > 2 the acceleration is positive, so it will begin to oppose the negative velocity and decelerate the particle."
  },

  {
    type: "mcq",
    q: "If q(t) is the electric charge (in coulombs) that has passed a point in a circuit up to time t, the instantaneous current i(t) is:",
    options: [
      "i(t) = q(t) × t",
      "i(t) = dq/dt",
      "i(t) = d²q/dt²",
      "i(t) = q(t) / t"
    ],
    answer: 1,
    explanation: "Current is defined as the rate of flow of charge: i(t) = dq/dt. This is a direct physical application of the derivative — the charge function q(t) plays the same role as position s(t), and current is its derivative, just as velocity is the derivative of position."
  },

  {
    type: "mcq",
    q: "The ratio Δy/Δx (with Δx ≠ 0) gives the ___ rate of change of y with respect to x over [x, x + Δx].",
    options: [
      "Instantaneous",
      "Maximum",
      "Average",
      "Minimum"
    ],
    answer: 2,
    explanation: "Δy/Δx is the average rate of change over the interval [x, x + Δx]. It equals the slope of the secant line through the two endpoints of that interval. Only when Δx → 0 does this average become the instantaneous rate of change (the derivative) at the single point x."
  },

  // ── Fill in the blank ───────────────────────────────────────────────────────

  {
    type: "fill",
    q: "The slope of the secant line through P(x₁, y₁) and Q(x₂, y₂) is m = ___.",
    answer: "(y₂-y₁)/(x₂-x₁)",
    alt: ["(y2-y1)/(x2-x1)", "(y₂ - y₁)/(x₂ - x₁)", "(y2 - y1)/(x2 - x1)", "Δy/Δx"],
    explanation: "m = (y₂ − y₁)/(x₂ − x₁). This is the rise-over-run formula for slope, applied to the two points P and Q on the curve. As Q → P, this ratio approaches dy/dx, the derivative at P."
  },

  {
    type: "fill",
    q: "The derivative is defined as dy/dx = lim(___ → 0) Δy/Δx.",
    answer: "Δx",
    alt: ["delta x", "Δx", "dx"],
    explanation: "dy/dx = lim(Δx → 0) Δy/Δx. The symbol Δx represents the small but finite change in x (the run). As Δx shrinks to zero, the average slope of the secant becomes the exact slope of the tangent — the derivative."
  },

  {
    type: "fill",
    q: "The basic problem of differential calculus is the ___ problem.",
    answer: "tangent",
    alt: ["Tangent", "tangent line"],
    explanation: "The fundamental challenge of differential calculus is: given a curve and a point on it, find the slope of the tangent line at that point. All derivative rules are ultimately techniques for solving this tangent problem efficiently."
  },

  {
    type: "fill",
    q: "For a particle with position s(t), the instantaneous velocity is v(t) = ___.",
    answer: "ds/dt",
    alt: ["s'(t)", "s′(t)", "dS/dt", "d(s)/dt"],
    explanation: "v(t) = ds/dt. Velocity is the first derivative of position with respect to time. It gives the instantaneous rate at which position is changing — positive when moving in the positive direction, negative when moving in the negative direction."
  },

  {
    type: "fill",
    q: "Acceleration is the second derivative of position: a(t) = ___.",
    answer: "d²s/dt²",
    alt: ["d2s/dt2", "d²s / dt²", "s''(t)", "s″(t)"],
    explanation: "a(t) = d²s/dt². Since a = dv/dt and v = ds/dt, acceleration is the derivative of the derivative — the second derivative of position. It measures how rapidly velocity itself is changing at each instant."
  },

  {
    type: "fill",
    q: "If W(t) is the energy transferred up to time t, the instantaneous power is P = ___.",
    answer: "dW/dt",
    alt: ["dW / dt", "W'(t)", "W′(t)"],
    explanation: "P = dW/dt. Power is the rate of energy transfer — a direct derivative. This parallels all the other physical derivatives: velocity (ds/dt), current (dq/dt), and growth rate (dN/dt) all follow the same pattern of 'quantity per unit time'."
  },

  {
    type: "fill",
    q: "For y = 1/x, the area of the triangle formed by the tangent at any point P(x₁, y₁) and the coordinate axes is always ___.",
    answer: "2",
    alt: ["2 sq units", "2 square units"],
    explanation: "The tangent at P(x₁, 1/x₁) meets the x-axis at (2x₁, 0) and the y-axis at (0, 2/x₁) = (0, 2y₁). Area = ½ × 2x₁ × 2y₁ = 2x₁y₁ = 2(x₁ · 1/x₁) = 2. This constant area is a beautiful geometric property of the rectangular hyperbola y = 1/x."
  }

];
