window.QUIZ_BANK = [

  // ── MCQ ────────────────────────────────────────────────────────────────────

  {
    type: "mcq",
    q: "The statement x → a (x approaches a) means:",
    options: [
      "x becomes exactly equal to a",
      "x gets arbitrarily close to a but never equals a",
      "x is always less than a",
      "x is always greater than a"
    ],
    answer: 1,
    explanation: "x → a means x can be made as close to a as we like (within any pre-assigned positive distance δ), but the key point is that x never actually reaches a. The behaviour of f at the point x = a is irrelevant to the limit — only what happens near a matters."
  },

  {
    type: "mcq",
    q: "The limit lim(x→a) f(x) = l exists if and only if:",
    options: [
      "f(a) = l",
      "f is defined at x = a",
      "The left-hand limit and right-hand limit both equal l",
      "f is continuous everywhere"
    ],
    answer: 2,
    explanation: "A two-sided limit exists precisely when the left-hand limit lim(x→a⁻) f(x) and the right-hand limit lim(x→a⁺) f(x) are equal — and their common value is l. The function need not even be defined at x = a for the limit to exist."
  },

  {
    type: "mcq",
    q: "For f(x) = x/|x|, the left-hand limit as x → 0 is:",
    options: [
      "1",
      "0",
      "−1",
      "Does not exist"
    ],
    answer: 2,
    explanation: "For x < 0, |x| = −x, so f(x) = x/(−x) = −1. As x → 0 from the left, f(x) = −1 throughout. The right-hand limit is +1 (since for x > 0, f(x) = x/x = 1). Because LHL ≠ RHL, the two-sided limit does not exist at x = 0."
  },

  {
    type: "mcq",
    q: "lim(x→0) 1/x² equals:",
    options: [
      "0",
      "1",
      "−∞",
      "+∞"
    ],
    answer: 3,
    explanation: "As x → 0 from either side, 1/x² → +∞ because x² is always positive and shrinks to zero, making 1/x² grow without bound. Since both the left-hand and right-hand limits equal +∞, the limit is +∞ (it exists as an infinite limit, unlike lim(x→0) 1/x which has different signs from each side)."
  },

  {
    type: "mcq",
    q: "lim(x→0) 1/x equals:",
    options: [
      "+∞",
      "−∞",
      "0",
      "Does not exist"
    ],
    answer: 3,
    explanation: "For x → 0⁺, 1/x → +∞; for x → 0⁻, 1/x → −∞. Since the left-hand and right-hand limits are different (one +∞, one −∞), lim(x→0) 1/x does not exist. This differs from 1/x², where both sides give +∞."
  },

  {
    type: "mcq",
    q: "The important trigonometric limit lim(θ→0) (sin θ)/θ equals:",
    options: [
      "0",
      "θ",
      "∞",
      "1"
    ],
    answer: 3,
    explanation: "lim(θ→0) (sin θ)/θ = 1. This is proved using the squeeze (sandwich) theorem: for small θ > 0, sin θ < θ < tan θ, giving cos θ < (sin θ)/θ < 1. As θ → 0, cos θ → 1, squeezing the ratio to 1. This limit is fundamental to all trigonometric derivatives."
  },

  {
    type: "mcq",
    q: "lim(x→0) (1 + x)^(1/x) equals:",
    options: [
      "1",
      "e",
      "∞",
      "0"
    ],
    answer: 1,
    explanation: "lim(x→0) (1 + x)^(1/x) = e. Expanding by the binomial theorem gives 1 + 1 + 1/2! + 1/3! + … = e ≈ 2.718. This is one of the two standard definitions of Euler's number e. The equivalent form lim(x→∞) (1 + 1/x)^x also equals e."
  },

  {
    type: "mcq",
    q: "lim(x→∞) (1 + 1/x)^x equals:",
    options: [
      "0",
      "1",
      "e",
      "∞"
    ],
    answer: 2,
    explanation: "lim(x→∞) (1 + 1/x)^x = e. As x grows, 1/x shrinks, but raising (1 + 1/x) to the power x keeps the product meaningful. The binomial expansion at x → ∞ gives 1 + 1 + 1/2! + 1/3! + … = e. This is equivalent to lim(x→0) (1+x)^(1/x) = e via the substitution x ↦ 1/x."
  },

  {
    type: "mcq",
    q: "lim(x→0) (eˣ − 1)/x equals:",
    options: [
      "e",
      "0",
      "1",
      "∞"
    ],
    answer: 2,
    explanation: "lim(x→0) (eˣ − 1)/x = 1. This follows from the general result lim(x→0) (aˣ − 1)/x = ln a by setting a = e (since ln e = 1). It also follows directly from L'Hôpital's rule: differentiating numerator and denominator gives eˣ/1 → 1 as x → 0."
  },

  {
    type: "mcq",
    q: "lim(x→a) (xⁿ − aⁿ)/(x − a) equals:",
    options: [
      "aⁿ",
      "n aⁿ",
      "n aⁿ⁻¹",
      "n (a−1)ⁿ⁻¹"
    ],
    answer: 2,
    explanation: "lim(x→a) (xⁿ − aⁿ)/(x − a) = naⁿ⁻¹. For positive integer n, factor xⁿ − aⁿ = (x−a)(xⁿ⁻¹ + xⁿ⁻²a + ⋯ + aⁿ⁻¹), cancel (x−a), then set x = a to get n terms each equal to aⁿ⁻¹. This result generalises to all rational n and is the algebraic foundation of the power rule for differentiation."
  },

  {
    type: "mcq",
    q: "L'Hôpital's rule can be applied when a limit has the indeterminate form:",
    options: [
      "0/1 or 1/0",
      "0/0 or ∞/∞",
      "0 + ∞ or 0 − ∞",
      "Any finite over any finite"
    ],
    answer: 1,
    explanation: "L'Hôpital's rule applies to the indeterminate forms 0/0 and ∞/∞ (and also to 1^∞, 0^0, ∞^0, 0·∞, and ∞−∞ after algebraic rearrangement). The rule states: if lim f(x) and lim g(x) are both 0 or both ±∞, then lim f(x)/g(x) = lim f′(x)/g′(x), provided the latter limit exists."
  },

  {
    type: "mcq",
    q: "lim(n→∞) (n² + n − 1)/(3n² + 1) equals:",
    options: [
      "0",
      "1/3",
      "1",
      "∞"
    ],
    answer: 1,
    explanation: "Divide numerator and denominator by n² (the highest power): (1 + 1/n − 1/n²)/(3 + 1/n²). As n → ∞, all terms with 1/n or 1/n² vanish, leaving 1/3. For rational functions as x → ∞, when the degrees are equal the limit is the ratio of the leading coefficients."
  },

  {
    type: "mcq",
    q: "lim(x→∞) (sin x)/x equals:",
    options: [
      "1",
      "Does not exist",
      "∞",
      "0"
    ],
    answer: 3,
    explanation: "Since |sin x| ≤ 1 for all x, we have |(sin x)/x| ≤ 1/|x| → 0 as x → ∞. By the squeeze theorem, lim(x→∞) (sin x)/x = 0. This is an ∞/∞ form that resolves to 0 because the numerator stays bounded while the denominator grows without limit."
  },

  // ── Fill in the blank ───────────────────────────────────────────────────────

  {
    type: "fill",
    q: "The notation x → a never implies that x ___ a.",
    answer: "=",
    alt: ["equals", "equal to", "is equal to", "== a"],
    explanation: "x → a means x gets arbitrarily close to a but the equality x = a is never reached. The limit describes the behaviour of f(x) as x approaches a — what happens at x = a is a separate matter (continuity), and the function need not even be defined there."
  },

  {
    type: "fill",
    q: "A limit lim(x→a) f(x) exists when the left-hand limit equals the ___.",
    answer: "right-hand limit",
    alt: ["RHL", "right hand limit", "right-hand limit"],
    explanation: "The two-sided limit exists if and only if lim(x→a⁻) f(x) = lim(x→a⁺) f(x), and their common value is the limit. If the one-sided limits disagree (as in x/|x| at x = 0), the two-sided limit does not exist."
  },

  {
    type: "fill",
    q: "In the ε–δ definition of limit, we require |f(x) − l| < ε whenever 0 < |x − a| < ___.",
    answer: "δ",
    alt: ["delta", "Δ"],
    explanation: "The ε–δ definition says: for every ε > 0 (measuring closeness of f(x) to l), there must exist δ > 0 (measuring closeness of x to a) such that |f(x) − l| < ε for all x satisfying 0 < |x − a| < δ. The δ controls the input window; ε controls the output window."
  },

  {
    type: "fill",
    q: "lim(x→0) (aˣ − 1)/x = ___.",
    answer: "ln a",
    alt: ["log a", "ln(a)", "loge a", "log_e a"],
    explanation: "lim(x→0) (aˣ − 1)/x = ln a. The proof substitutes y = aˣ − 1 (so aˣ = 1 + y) and uses x = ln(1+y)/ln a; the expression becomes (ln a)/ln(1+y)^(1/y), and as x→0, y→0, so ln(1+y)^(1/y) → ln e = 1. Setting a = e gives the special case lim(x→0) (eˣ−1)/x = 1."
  },

  {
    type: "fill",
    q: "To evaluate lim(n→∞) (n² + n − 1)/(3n² + 1), divide numerator and denominator by ___ to get the limit 1/3.",
    answer: "n²",
    alt: ["n^2", "n2"],
    explanation: "Dividing by n² gives (1 + 1/n − 1/n²)/(3 + 1/n²). As n → ∞, the terms 1/n, 1/n², etc. all vanish, leaving 1/3. This technique — dividing by the highest power of n present — is the standard method for ∞/∞ rational limits."
  },

  {
    type: "fill",
    q: "lim(x→0) (1 − cos x)/x = ___.",
    answer: "0",
    alt: ["zero"],
    explanation: "Write 1 − cos x = 2 sin²(x/2). Then (1−cos x)/x = 2 sin²(x/2)/x = sin(x/2) · [sin(x/2)/(x/2)]. As x→0, sin(x/2)→0 and [sin(x/2)/(x/2)]→1, so the product → 0·1 = 0. This limit arises in the derivative of cos x."
  },

  {
    type: "fill",
    q: "lim(x→a) (x² − a²)/(x − a) = ___ (simplify using factorisation).",
    answer: "2a",
    alt: ["2 a", "2*a"],
    explanation: "Factor: x² − a² = (x−a)(x+a). Cancel (x−a) to get x+a. Now set x = a: a + a = 2a. This is the special case n = 2 of the general result lim(x→a)(xⁿ−aⁿ)/(x−a) = naⁿ⁻¹, and it is also the derivative of x² at x = a from first principles."
  }

];
