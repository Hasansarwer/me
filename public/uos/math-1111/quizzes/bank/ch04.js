window.QUIZ_BANK = [

  // ── MCQ ────────────────────────────────────────────────────────────────────

  {
    type: "mcq",
    q: "A function f(x) is continuous at x = a if:",
    options: [
      "f(a) is defined",
      "lim(x→a) f(x) exists",
      "f(a) is defined, the limit exists, and lim(x→a) f(x) = f(a)",
      "f'(a) exists"
    ],
    answer: 2,
    explanation: "Continuity at x = a requires all three conditions simultaneously: f(a) must be defined, the two-sided limit must exist, and the limit must equal f(a). Satisfying only one or two conditions is insufficient."
  },

  {
    type: "mcq",
    q: "The function f(x) = 1/(3 − e^(1/x)) is discontinuous at x = 0 because:",
    options: [
      "The limit oscillates near x = 0",
      "f(0) is undefined since 1/0 is undefined",
      "The left-hand and right-hand limits are both infinite",
      "The limit exists but does not equal f(0)"
    ],
    answer: 1,
    explanation: "Since 1/0 is undefined, e^(1/0) is undefined, and so f(0) = 1/(3 − e^(1/0)) is undefined. The first condition for continuity — f(a) must be defined — is violated immediately."
  },

  {
    type: "mcq",
    q: "How many types of discontinuity are classified in this chapter?",
    options: ["3", "4", "5", "6"],
    answer: 3,
    explanation: "Six types are listed: (1) ordinary/first kind, (2) second kind, (3) mixed, (4) removable, (5) infinite, and (6) oscillatory. Each is characterised by the behaviour of the one-sided limits relative to f(a)."
  },

  {
    type: "mcq",
    q: "Discontinuity of the second kind occurs when:",
    options: [
      "Both one-sided limits exist but are unequal",
      "Neither one-sided limit exists (as a finite number)",
      "Only one one-sided limit fails to exist",
      "The two-sided limit exists but does not equal f(a)"
    ],
    answer: 1,
    explanation: "Second-kind discontinuity means neither lim(x→a⁻) f(x) nor lim(x→a⁺) f(x) exists as a finite value. Compare: first-kind means both exist but are unequal; mixed means exactly one exists."
  },

  {
    type: "mcq",
    q: "For the piecewise function f(x) = {3−2x for 0≤x<3/2; −3−2x for x≥3/2}, at x = 3/2: f(3/2) = −6, the right-hand limit = −6, and the left-hand limit = 0. This is a:",
    options: [
      "Ordinary (first-kind) discontinuity",
      "Removable discontinuity",
      "Mixed discontinuity",
      "Second-kind discontinuity"
    ],
    answer: 2,
    explanation: "The right-hand limit equals f(3/2) = −6, so the function is continuous from the right. The left-hand limit (0) differs, giving a discontinuity from the left. When exactly one side matches f(a), the discontinuity is called mixed."
  },

  {
    type: "mcq",
    q: "A removable discontinuity at x = a requires:",
    options: [
      "Neither one-sided limit exists",
      "Only one one-sided limit exists",
      "Both one-sided limits exist and are equal, but differ from f(a)",
      "Both one-sided limits are infinite"
    ],
    answer: 2,
    explanation: "Removable discontinuity: lim(x→a⁻) f(x) = lim(x→a⁺) f(x) = L, but L ≠ f(a). It is 'removable' because simply redefining f(a) = L would make f continuous at a."
  },

  {
    type: "mcq",
    q: "The function f(x) = sin(1/x) has what kind of discontinuity at x = 0?",
    options: ["Infinite", "Removable", "First kind (ordinary)", "Oscillatory"],
    answer: 3,
    explanation: "As x→0, the argument 1/x→∞ and sin(1/x) oscillates infinitely often between −1 and +1 without settling to any fixed value. This is oscillatory discontinuity — the limit simply does not exist."
  },

  {
    type: "mcq",
    q: "Which statement correctly relates differentiability and continuity?",
    options: [
      "Every continuous function is differentiable",
      "Every differentiable function is continuous",
      "Differentiable functions need not be continuous",
      "Continuity and differentiability are unrelated"
    ],
    answer: 1,
    explanation: "Theorem: every differentiable function is continuous. The converse is false — f(x) = |x| is continuous everywhere but not differentiable at x = 0, where the left and right derivatives are −1 and +1 respectively."
  },

  {
    type: "mcq",
    q: "f(x) is differentiable at x = a if and only if:",
    options: [
      "f is defined on an open interval containing a",
      "f is continuous at a",
      "The left-hand and right-hand difference quotients have the same finite limit",
      "f'(a) is a positive number"
    ],
    answer: 2,
    explanation: "Differentiability at a requires lim(h→0⁻) [f(a−h)−f(a)]/(−h) = lim(h→0⁺) [f(a+h)−f(a)]/h. When these two one-sided limits exist and are equal, their common value is f'(a)."
  },

  {
    type: "mcq",
    q: "Polynomials are:",
    options: [
      "Continuous only at integer values of x",
      "Continuous for all real values of x",
      "Differentiable but not necessarily continuous",
      "Continuous only on bounded intervals"
    ],
    answer: 1,
    explanation: "x^n is continuous for all real x when n is a positive integer. Since polynomials are finite sums and products of such terms (and constant functions), they are continuous everywhere on ℝ."
  },

  {
    type: "mcq",
    q: "A function continuous on a closed interval [a, b]:",
    options: [
      "Must be differentiable on (a, b)",
      "Must be periodic",
      "Is bounded on that interval",
      "Has exactly one maximum and one minimum"
    ],
    answer: 2,
    explanation: "Property of continuous functions: if f is continuous on a closed interval, it is bounded there. This is the Extreme Value Theorem — it attains its least upper bound and greatest lower bound at least once."
  },

  {
    type: "mcq",
    q: "The Intermediate Value Theorem states that a function continuous on (a, b):",
    options: [
      "Attains its maximum at an endpoint",
      "Has a derivative at every interior point",
      "Takes every value between f(a) and f(b) at least once",
      "Is monotone on the interval"
    ],
    answer: 2,
    explanation: "IVT: if f is continuous on (a, b) and k is any value between f(a) and f(b) (with f(a) ≠ f(b)), then there exists at least one c ∈ (a, b) with f(c) = k. The converse is not necessarily true."
  },

  {
    type: "mcq",
    q: "The function f(x) = ln x is continuous for:",
    options: [
      "All real values of x",
      "All x ≥ 0",
      "All positive values of x (x > 0)",
      "All x ≠ 0"
    ],
    answer: 2,
    explanation: "ln x is defined only for x > 0 and is continuous throughout its domain. It is not defined at x = 0 or for negative x, unlike e^x which is continuous for all real x."
  },

  {
    type: "mcq",
    q: "For f(x) = {x for 0≤x<1/2; (1−x) for 1/2≤x<1}, at x = 1/2 the function is:",
    options: [
      "Neither continuous nor differentiable",
      "Both continuous and differentiable",
      "Continuous but not differentiable",
      "Differentiable but not continuous"
    ],
    answer: 2,
    explanation: "Both one-sided limits and f(1/2) equal 1/2, so f is continuous. However Lf'(1/2) = +1 and Rf'(1/2) = −1, so the derivative does not exist — a classic example of continuity without differentiability."
  },

  {
    type: "mcq",
    q: "The converse of the theorem 'every differentiable function is continuous' is:",
    options: [
      "True — continuous functions are always differentiable",
      "True only for polynomial functions",
      "False — a continuous function need not be differentiable",
      "False — a differentiable function need not be continuous"
    ],
    answer: 2,
    explanation: "The converse claims 'every continuous function is differentiable,' which is false. The standard counterexample is f(x) = |x|: continuous everywhere but not differentiable at x = 0 (left derivative −1 ≠ right derivative +1)."
  },

  // ── Fill in the blank ───────────────────────────────────────────────────────

  {
    type: "fill",
    q: "A function f(x) is continuous at x = a if lim(x→a) f(x) = ___.",
    answer: "f(a)",
    alt: [],
    explanation: "Continuity requires f(a) to be defined, the two-sided limit to exist, and the limit to equal f(a). The concise statement is lim(x→a) f(x) = f(a)."
  },

  {
    type: "fill",
    q: "In Cauchy's definition of continuity, |f(x) − f(a)| < epsilon whenever |x − a| ≤ ___.",
    answer: "delta",
    alt: [],
    explanation: "Cauchy's ε−δ definition: for every ε > 0 there exists δ > 0 such that |f(x)−f(a)| < ε whenever |x−a| ≤ δ. The δ controls how close x must be to a."
  },

  {
    type: "fill",
    q: "Ordinary discontinuity (first kind) occurs when both one-sided limits exist but are ___ to each other.",
    answer: "unequal",
    alt: ["not equal", "different"],
    explanation: "First-kind (ordinary) discontinuity: both lim(x→a⁻) f(x) and lim(x→a⁺) f(x) are finite but differ from each other (and from f(a))."
  },

  {
    type: "fill",
    q: "A removable discontinuity at x = a means the two-sided limit exists but is not equal to ___.",
    answer: "f(a)",
    alt: [],
    explanation: "Removable discontinuity: LHL = RHL = L (the limit exists), but L ≠ f(a). Redefining f(a) = L would remove the discontinuity."
  },

  {
    type: "fill",
    q: "The function f(x) = (x²−a²)/(x−a) for x≠a and f(a) = 0 has a ___ discontinuity at x = a.",
    answer: "removable",
    alt: [],
    explanation: "lim(x→a) (x²−a²)/(x−a) = lim(x→a)(x+a) = 2a. Both one-sided limits equal 2a, but f(a) = 0 ≠ 2a (for a≠0), so the discontinuity is removable."
  },

  {
    type: "fill",
    q: "If both one-sided limits of f(x) tend to ±∞ at x = a, the function has an ___ discontinuity there.",
    answer: "infinite",
    alt: [],
    explanation: "Infinite discontinuity occurs when lim(x→a⁻) f(x) and lim(x→a⁺) f(x) both tend to ±∞. Example: f(x) = (x−2)/(x−1) has an infinite discontinuity at x = 1."
  },

  {
    type: "fill",
    q: "A function that is continuous on a closed interval is ___ on that interval.",
    answer: "bounded",
    alt: [],
    explanation: "One of the key properties: if f is continuous on [a, b], it is bounded there. It attains its maximum and minimum values at least once on the interval."
  },

  {
    type: "fill",
    q: "The function f(x) = x^n is continuous for all x except x = 0 when n is ___.",
    answer: "negative",
    alt: [],
    explanation: "For negative n, x^n = 1/x^|n| is undefined at x = 0, creating a discontinuity there. For positive rational n, the function is continuous for all x."
  },

  {
    type: "fill",
    q: "The function ln x is continuous for all ___ values of x.",
    answer: "positive",
    alt: [],
    explanation: "ln x is defined and continuous only for x > 0. It is undefined for x ≤ 0, unlike e^x which is continuous for all real x."
  },

  {
    type: "fill",
    q: "The derivative f'(a) = lim(h→0) [f(a+h) − f(a)] / ___.",
    answer: "h",
    alt: [],
    explanation: "This is the definition of the derivative at a point. The expression [f(a+h)−f(a)]/h is the difference quotient; its limit as h→0 (if it exists) gives f'(a)."
  },

  {
    type: "fill",
    q: "For f to be differentiable at x = a, the left-hand derivative and the right-hand derivative must be ___.",
    answer: "equal",
    alt: ["equal to each other"],
    explanation: "Differentiability requires lim(h→0⁻) [f(a−h)−f(a)]/(−h) = lim(h→0⁺) [f(a+h)−f(a)]/h. If Lf'(a) ≠ Rf'(a), then f'(a) does not exist."
  },

  {
    type: "fill",
    q: "Every differentiable function is ___, but the converse is not necessarily true.",
    answer: "continuous",
    alt: [],
    explanation: "Theorem: differentiability at a implies continuity there. The converse fails — f(x)=|x| is continuous but not differentiable at x=0, where the left and right derivatives differ."
  },

  {
    type: "fill",
    q: "For f(x) = {x for 0≤x<1/2; (1−x) for 1/2≤x<1}, the left-hand derivative at x = 1/2 is ___.",
    answer: "1",
    alt: [],
    explanation: "Lf'(1/2) = lim(h→0⁻) [f(1/2−h) − f(1/2)]/(−h) = lim [(1/2−h) − 1/2]/(−h) = lim(−h)/(−h) = 1. Since Rf'(1/2) = −1 ≠ 1, the function is not differentiable at x=1/2."
  },

  {
    type: "fill",
    q: "For f(x) = {5x−4 for 0<x≤1; 4x²−3x for 1<x<2}, the value f(1) = ___.",
    answer: "1",
    alt: [],
    explanation: "f(1) = 5(1)−4 = 1. The right-hand limit lim(x→1⁺)(4x²−3x) = 4−3 = 1 = f(1), and the left-hand limit also equals 1, so f is continuous at x=1."
  },

  {
    type: "fill",
    q: "The function sin(1/x) has ___ discontinuity at x = 0.",
    answer: "oscillatory",
    alt: [],
    explanation: "As x→0, 1/x→∞ and sin(1/x) oscillates infinitely between −1 and +1 without approaching any fixed limit. This is the defining characteristic of oscillatory discontinuity."
  }

];
