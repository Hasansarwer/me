window.QUIZ_BANK = [

  // ── MCQ ────────────────────────────────────────────────────────────────────

  {
    type: "mcq",
    q: "The derivative of a constant function f(x) = c is:",
    options: [
      "0",
      "1",
      "c",
      "Undefined"
    ],
    answer: 0,
    explanation: "Constant rule: d/dx(c) = 0 for any constant c. A horizontal line has zero slope everywhere, so the derivative is identically zero."
  },

  {
    type: "mcq",
    q: "According to the power rule, d/dx(x^n) equals:",
    options: [
      "n·x^n",
      "n·x^(n−1)",
      "(n−1)·x^n",
      "x^(n+1)/(n+1)"
    ],
    answer: 1,
    explanation: "Power rule: d/dx(x^n) = n·x^(n−1). The old exponent comes down as a multiplier and the exponent decreases by one. This holds for all real n, not just positive integers."
  },

  {
    type: "mcq",
    q: "The product rule states d(uv)/dx =",
    options: [
      "u·(dv/dx) + v·(du/dx)",
      "u·(du/dx) + v·(dv/dx)",
      "(v·(du/dx) − u·(dv/dx)) / v²",
      "u·(dv/dx) − v·(du/dx)"
    ],
    answer: 0,
    explanation: "Product rule: d(uv)/dx = u·(dv/dx) + v·(du/dx). Differentiate the first factor and keep the second, then keep the first and differentiate the second. Both terms are added."
  },

  {
    type: "mcq",
    q: "The quotient rule gives d(u/v)/dx as:",
    options: [
      "(u·(dv/dx) − v·(du/dx)) / v²",
      "(v·(du/dx) − u·(dv/dx)) / v²",
      "(u·(dv/dx) + v·(du/dx)) / v²",
      "(v·(du/dx) + u·(dv/dx)) / u²"
    ],
    answer: 1,
    explanation: "Quotient rule: d(u/v)/dx = [v·(du/dx) − u·(dv/dx)] / v². The denominator is squared; the numerator is 'bottom times d(top) minus top times d(bottom)'."
  },

  {
    type: "mcq",
    q: "d/dx(e^x) equals:",
    options: [
      "x·e^(x−1)",
      "e^x",
      "e^x · ln e",
      "1/e^x"
    ],
    answer: 1,
    explanation: "e^x is its own derivative: d/dx(e^x) = e^x. This property defines e ≈ 2.71828 as the unique base for which the exponential function is unchanged by differentiation."
  },

  {
    type: "mcq",
    q: "d/dx(ln x) equals:",
    options: [
      "1/x",
      "(ln x)/x",
      "x/(ln x)",
      "1/(x·ln x)"
    ],
    answer: 0,
    explanation: "d/dx(ln x) = 1/x for x > 0. More generally d/dx(log_a x) = (1/x)·log_a e = 1/(x·ln a). Setting a = e gives log_e e = 1, so d/dx(ln x) = 1/x."
  },

  {
    type: "mcq",
    q: "d/dx(sin x) equals:",
    options: [
      "−sin x",
      "cos x",
      "−cos x",
      "sin x"
    ],
    answer: 1,
    explanation: "d/dx(sin x) = cos x. The trig derivative cycle runs: sin→cos→−sin→−cos→sin. Knowing any adjacent pair in the cycle lets you recover the others."
  },

  {
    type: "mcq",
    q: "d/dx(tan x) equals:",
    options: [
      "sec x·tan x",
      "−csc^2 x",
      "sec^2 x",
      "csc^2 x"
    ],
    answer: 2,
    explanation: "d/dx(tan x) = sec^2 x. Applying the quotient rule to sin x/cos x gives (cos^2 x + sin^2 x)/cos^2 x = 1/cos^2 x = sec^2 x."
  },

  {
    type: "mcq",
    q: "d/dx(sin^(−1) x) equals:",
    options: [
      "1/sqrt(1+x^2)",
      "−1/sqrt(1−x^2)",
      "1/sqrt(1−x^2)",
      "1/(1+x^2)"
    ],
    answer: 2,
    explanation: "d/dx(sin^(−1) x) = 1/sqrt(1−x^2). Implicit differentiation of sin y = x gives cos y·(dy/dx) = 1, so dy/dx = 1/cos y = 1/sqrt(1−x^2). Compare: d/dx(cos^(−1) x) = −1/sqrt(1−x^2)."
  },

  {
    type: "mcq",
    q: "The chain rule states: if y = f(v) and v = g(x), then dy/dx =",
    options: [
      "(dy/dv)·(dv/dx)",
      "(dv/dx)·(dy/dx)",
      "(dy/dx) / (dv/dx)",
      "(dv/dy)·(dx/dv)"
    ],
    answer: 0,
    explanation: "Chain rule: dy/dx = (dy/dv)·(dv/dx). Differentiate the outer function evaluated at the inner function, then multiply by the derivative of the inner function."
  },

  {
    type: "mcq",
    q: "Using logarithmic differentiation, d/dx(x^x) =",
    options: [
      "x·x^(x−1)",
      "x^x·ln x",
      "x^x·(1 + ln x)",
      "x^x / x"
    ],
    answer: 2,
    explanation: "Let y = x^x. Taking ln: ln y = x·ln x. Differentiating both sides: y'/y = ln x + 1. So y' = x^x·(1 + ln x). Logarithmic differentiation is needed because both the base and the exponent contain x."
  },

  {
    type: "mcq",
    q: "d/dx(sinh x) equals:",
    options: [
      "−cosh x",
      "cosh x",
      "sech^2 x",
      "−csch^2 x"
    ],
    answer: 1,
    explanation: "d/dx(sinh x) = cosh x. Unlike circular trig where d/dx(cos x) = −sin x, hyperbolic cosine has no minus sign: d/dx(cosh x) = sinh x as well. This is because sinh x = (e^x − e^(−x))/2 and cosh x = (e^x + e^(−x))/2."
  },

  {
    type: "mcq",
    q: "For a curve defined parametrically by x = x(t) and y = y(t), dy/dx equals:",
    options: [
      "(dy/dt) + (dx/dt)",
      "(dx/dt) / (dy/dt)",
      "(dy/dt)·(dx/dt)",
      "(dy/dt) / (dx/dt)"
    ],
    answer: 3,
    explanation: "Parametric differentiation: dy/dx = (dy/dt) / (dx/dt). By the chain rule, dy/dx = (dy/dt)·(dt/dx) = (dy/dt) / (dx/dt), valid when dx/dt ≠ 0. Example: x = cos t, y = sin t gives dy/dx = cos t/(−sin t) = −cot t."
  },

  {
    type: "mcq",
    q: "In implicit differentiation of F(x, y) = 0, the correct procedure is to:",
    options: [
      "Differentiate only the terms containing y with respect to x",
      "Differentiate both sides with respect to x, treating y as a function of x",
      "Differentiate both sides with respect to y, treating x as a constant",
      "Solve for y explicitly, then differentiate"
    ],
    answer: 1,
    explanation: "Implicit differentiation: differentiate both sides of F(x, y) = 0 with respect to x. Whenever y appears, apply the chain rule — each d/dx(y^n) = n·y^(n−1)·(dy/dx). Then collect and solve for dy/dx."
  },

  {
    type: "mcq",
    q: "d/dx(a^x), where a > 0 and a ≠ 1, equals:",
    options: [
      "a^x",
      "x·a^(x−1)",
      "a^x·log_a e",
      "a^x·ln a"
    ],
    answer: 3,
    explanation: "d/dx(a^x) = a^x·ln a. Write a^x = e^(x·ln a) and apply the chain rule: d/dx(e^(x·ln a)) = e^(x·ln a)·ln a = a^x·ln a. Setting a = e recovers d/dx(e^x) = e^x since ln e = 1."
  },

  // ── Fill in the blank ───────────────────────────────────────────────────────

  {
    type: "fill",
    q: "The constant rule: d/dx(c) = ___ for any constant c.",
    answer: "0",
    alt: [],
    explanation: "d/dx(c) = 0. A constant has no rate of change, so its derivative is zero everywhere."
  },

  {
    type: "fill",
    q: "The power rule: d/dx(x^n) = ___.",
    answer: "nx^(n-1)",
    alt: ["n*x^(n-1)", "n x^(n-1)"],
    explanation: "Power rule: multiply by the exponent and reduce the exponent by one. Applies to all real n, including negative and fractional exponents."
  },

  {
    type: "fill",
    q: "The constant multiple rule: d/dx(c·u) = c · ___.",
    answer: "du/dx",
    alt: ["u'"],
    explanation: "A constant factor passes through differentiation unchanged: d/dx(c·u) = c·(du/dx). This lets you scale a known derivative directly."
  },

  {
    type: "fill",
    q: "d/dx(e^x) = ___.",
    answer: "e^x",
    alt: [],
    explanation: "e^x is its own derivative. This is the defining property of the number e ≈ 2.71828 as the natural exponential base."
  },

  {
    type: "fill",
    q: "d/dx(ln x) = ___ for x > 0.",
    answer: "1/x",
    alt: [],
    explanation: "d/dx(ln x) = 1/x. Setting a = e in d/dx(log_a x) = 1/(x·ln a) gives 1/(x·ln e) = 1/x."
  },

  {
    type: "fill",
    q: "d/dx(cos x) = ___.",
    answer: "-sin x",
    alt: ["-sin(x)"],
    explanation: "d/dx(cos x) = −sin x. Note the minus sign — contrast with d/dx(sin x) = +cos x."
  },

  {
    type: "fill",
    q: "d/dx(tan x) = ___.",
    answer: "sec^2(x)",
    alt: ["sec^2 x", "sec^2x"],
    explanation: "d/dx(tan x) = sec^2 x. Follows from the quotient rule on sin x/cos x: (cos^2 x + sin^2 x)/cos^2 x = 1/cos^2 x = sec^2 x."
  },

  {
    type: "fill",
    q: "d/dx(sin^(−1) x) = ___.",
    answer: "1/sqrt(1-x^2)",
    alt: [],
    explanation: "d/dx(sin^(−1) x) = 1/sqrt(1−x^2). Implicit differentiation of sin y = x: cos y·(dy/dx) = 1, so dy/dx = 1/sqrt(1−x^2). Valid for |x| < 1."
  },

  {
    type: "fill",
    q: "d/dx(tan^(−1) x) = ___.",
    answer: "1/(1+x^2)",
    alt: [],
    explanation: "d/dx(tan^(−1) x) = 1/(1+x^2). Implicit differentiation of tan y = x: sec^2 y·(dy/dx) = 1, so dy/dx = 1/(1+tan^2 y) = 1/(1+x^2)."
  },

  {
    type: "fill",
    q: "d/dx(cosh x) = ___.",
    answer: "sinh x",
    alt: ["sinh(x)"],
    explanation: "d/dx(cosh x) = sinh x. Since cosh x = (e^x + e^(−x))/2, differentiating gives (e^x − e^(−x))/2 = sinh x. Note: no minus sign, unlike d/dx(cos x) = −sin x."
  },

  {
    type: "fill",
    q: "d/dx(sinh^(−1) x) = ___.",
    answer: "1/sqrt(1+x^2)",
    alt: [],
    explanation: "d/dx(sinh^(−1) x) = 1/sqrt(1+x^2). From sinh y = x: cosh y·(dy/dx) = 1, so dy/dx = 1/cosh y = 1/sqrt(1+sinh^2 y) = 1/sqrt(1+x^2), using cosh^2 y − sinh^2 y = 1."
  },

  {
    type: "fill",
    q: "Using logarithmic differentiation, d/dx(x^x) = ___.",
    answer: "x^x(1+ln x)",
    alt: ["x^x*(1+ln x)", "x^x (1+ln x)"],
    explanation: "Let y = x^x, so ln y = x·ln x. Then y'/y = ln x + 1, giving y' = x^x·(1+ln x). Logarithmic differentiation handles variable-base variable-exponent forms."
  },

  {
    type: "fill",
    q: "For parametric equations x = x(t) and y = y(t), dy/dx = ___.",
    answer: "(dy/dt)/(dx/dt)",
    alt: ["dy/dt / dx/dt"],
    explanation: "Parametric differentiation: dy/dx = (dy/dt)/(dx/dt). Chain rule gives dy/dx = (dy/dt)·(dt/dx) = (dy/dt)/(dx/dt), provided dx/dt ≠ 0."
  },

  {
    type: "fill",
    q: "d/dx(a^x) = ___ for a > 0, a ≠ 1.",
    answer: "a^x ln a",
    alt: ["a^x * ln a", "a^x*ln a", "(ln a)a^x"],
    explanation: "d/dx(a^x) = a^x·ln a. Writing a^x = e^(x·ln a) and applying the chain rule yields e^(x·ln a)·ln a = a^x·ln a. The ln a factor makes this reduce correctly to d/dx(e^x) = e^x when a = e."
  },

  {
    type: "fill",
    q: "d/dx(sec x) = ___.",
    answer: "sec x tan x",
    alt: ["sec(x)tan(x)", "sec x * tan x"],
    explanation: "d/dx(sec x) = sec x·tan x. Quotient rule on 1/cos x: [0·cos x − (−sin x)]/cos^2 x = sin x/cos^2 x = (1/cos x)·(sin x/cos x) = sec x·tan x."
  }

];
