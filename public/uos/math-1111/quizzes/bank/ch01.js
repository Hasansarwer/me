window.QUIZ_BANK = [

  // ── MCQ ────────────────────────────────────────────────────────────────────

  {
    type: "mcq",
    q: "Which of the following best defines a set?",
    options: [
      "Any collection of numbers",
      "A collection of well-defined objects",
      "A list written in increasing order",
      "A subset of the real numbers"
    ],
    answer: 1,
    explanation: "A set is a collection of well-defined objects — meaning we can unambiguously decide whether any given object belongs to it. 'Any collection of numbers' is too narrow (sets can contain anything), and the other options impose restrictions the definition does not require."
  },

  {
    type: "mcq",
    q: "The notation A ⊆ B means:",
    options: [
      "A and B have the same elements",
      "B is contained in A",
      "Every element of A is also an element of B",
      "A and B have no elements in common"
    ],
    answer: 2,
    explanation: "A ⊆ B (A is a subset of B) means every element of A also belongs to B. It does not require A = B — in fact A ⊆ A for any set. If A = B then both A ⊆ B and B ⊆ A hold simultaneously."
  },

  {
    type: "mcq",
    q: "The interval notation (a, b] represents:",
    options: [
      "a < x < b  (open at both ends)",
      "a ≤ x ≤ b  (closed at both ends)",
      "a < x ≤ b  (open at a, closed at b)",
      "a ≤ x < b  (closed at a, open at b)"
    ],
    answer: 2,
    explanation: "A round bracket excludes the endpoint; a square bracket includes it. So (a, b] means a < x ≤ b — the left endpoint a is excluded (open) and the right endpoint b is included (closed). This is called a half-open (or half-closed) interval."
  },

  {
    type: "mcq",
    q: "Which statement correctly defines a function f : A → B?",
    options: [
      "A relation where every element of B is assigned to at least one element of A",
      "A relation where every element of A is assigned to exactly one element of B",
      "Any subset of A × B",
      "A relation where different elements of A must map to different elements of B"
    ],
    answer: 1,
    explanation: "A function requires that every element of the domain A is assigned to exactly one element of B — no input is left unmapped, and no input has two different outputs. Option (c) describes a general relation; option (d) is the additional condition for injectivity."
  },

  {
    type: "mcq",
    q: "The vertical line test says a curve represents a function of x if and only if:",
    options: [
      "Every horizontal line meets the curve at most once",
      "Every vertical line meets the curve at most once",
      "The curve passes through the origin",
      "Every vertical line meets the curve at least once"
    ],
    answer: 1,
    explanation: "If a vertical line x = c met the curve twice, there would be two y-values for a single x-value — violating the 'exactly one output' rule. At most one intersection guarantees one output per input. The horizontal line test instead checks whether the function is one-to-one."
  },

  {
    type: "mcq",
    q: "A function f : A → B is injective (one-to-one) if:",
    options: [
      "Every element of B has at least one pre-image in A",
      "f(x₁) = f(x₂) implies x₁ = x₂",
      "Every element of A maps to every element of B",
      "f(x) is always positive"
    ],
    answer: 1,
    explanation: "Injectivity means different inputs give different outputs: f(x₁) = f(x₂) ⟹ x₁ = x₂ (equivalently, x₁ ≠ x₂ ⟹ f(x₁) ≠ f(x₂)). Option (a) is surjectivity. An injective function passes the horizontal line test — every horizontal line meets the graph at most once."
  },

  {
    type: "mcq",
    q: "For a function to have an inverse f⁻¹, it must be:",
    options: [
      "Onto (surjective) only",
      "One-to-one (injective) only",
      "Both one-to-one and onto (bijective)",
      "A polynomial function"
    ],
    answer: 2,
    explanation: "An inverse f⁻¹ : B → A must send each element of B back to a unique element of A. For this to work, every element of B must be hit (surjectivity) and no two elements of A can share an image (injectivity). Only a bijective function has a well-defined inverse."
  },

  {
    type: "mcq",
    q: "A function f is even if:",
    options: [
      "f(−x) = −f(x) for all x",
      "f(x) = f(−x) for all x",
      "f(x) > 0 for all x",
      "The domain contains only non-negative numbers"
    ],
    answer: 1,
    explanation: "An even function satisfies f(−x) = f(x): substituting −x gives the same output. Geometrically, the graph is symmetric about the y-axis. The condition f(−x) = −f(x) instead defines an odd function. Examples of even functions: f(x) = x², cos x, |x|."
  },

  {
    type: "mcq",
    q: "What is the natural domain of f(x) = 1/(x − 3)?",
    options: [
      "All real numbers",
      "x > 3, i.e., (3, ∞)",
      "All real numbers except x = 3, i.e., (−∞, 3) ∪ (3, ∞)",
      "x ≠ 0"
    ],
    answer: 2,
    explanation: "The only restriction is that the denominator cannot be zero: x − 3 ≠ 0, so x ≠ 3. Every other real number is valid. The natural domain is ℝ \\ {3} = (−∞, 3) ∪ (3, ∞)."
  },

  {
    type: "mcq",
    q: "If f(x) = x² + 1 and g(x) = 2x − 3, then (f ∘ g)(x) equals:",
    options: [
      "2x² − 1",
      "4x² − 12x + 10",
      "(x² + 1)(2x − 3)",
      "2x³ − 3x² + 2x − 3"
    ],
    answer: 1,
    explanation: "(f ∘ g)(x) = f(g(x)) = f(2x − 3) = (2x − 3)² + 1 = 4x² − 12x + 9 + 1 = 4x² − 12x + 10. Note: composition is not commutative — (g ∘ f)(x) = g(x² + 1) = 2x² − 1, which is different."
  },

  // ── Fill in the blank ───────────────────────────────────────────────────────

  {
    type: "fill",
    q: "The union of sets A and B is A ∪ B = {x | x ∈ A ___ x ∈ B}.",
    answer: "or",
    alt: ["OR", "Or"],
    explanation: "A ∪ B contains every element that belongs to A or to B (or both). This is the inclusive 'or'. By contrast, intersection A ∩ B uses 'and' — only elements in both sets simultaneously."
  },

  {
    type: "fill",
    q: "The natural domain of g(x) = √(4 − x²) is ___.",
    answer: "[-2, 2]",
    alt: ["-2 ≤ x ≤ 2", "[-2,2]", "{x: -2 ≤ x ≤ 2}", "-2<=x<=2"],
    explanation: "We need 4 − x² ≥ 0, i.e. x² ≤ 4, giving −2 ≤ x ≤ 2. Both endpoints are included (the square root equals zero there but is still defined), so the domain is the closed interval [−2, 2]."
  },

  {
    type: "fill",
    q: "A function f is odd if f(−x) = ___.",
    answer: "-f(x)",
    alt: ["−f(x)", "-(f(x))", "negative f(x)", "-f"],
    explanation: "An odd function satisfies f(−x) = −f(x) for all x in its domain. The graph of an odd function is symmetric about the origin. Examples: f(x) = x, x³, sin x. Note that f must also satisfy f(0) = 0 whenever 0 is in its domain."
  },

  {
    type: "fill",
    q: "To find f⁻¹(x) for f(x) = 2x + 5, write y = 2x + 5, solve for x, then swap: f⁻¹(x) = ___.",
    answer: "(x-5)/2",
    alt: ["(x - 5)/2", "x/2 - 5/2", "(x−5)/2", "0.5x - 2.5", "(x-5) / 2"],
    explanation: "From y = 2x + 5: subtract 5 to get y − 5 = 2x, then divide by 2: x = (y − 5)/2. Swapping the roles of x and y gives f⁻¹(x) = (x − 5)/2. Verify: f(f⁻¹(x)) = 2·(x−5)/2 + 5 = x ✓"
  },

  {
    type: "fill",
    q: "The ___ line test determines whether a function is one-to-one.",
    answer: "horizontal",
    alt: ["Horizontal"],
    explanation: "The horizontal line test: a function is one-to-one (injective) if and only if every horizontal line intersects its graph at most once. If any horizontal line meets the graph more than once, the function is not one-to-one and therefore has no inverse. (The vertical line test instead checks whether a curve is a function.)"
  },

  // ── Additional MCQ ─────────────────────────────────────────────────────────

  {
    type: "mcq",
    q: "A function f : A → B is surjective (onto) if:",
    options: [
      "Every element of A has exactly one image in B",
      "Different elements of A always map to different elements of B",
      "For every y ∈ B there exists at least one x ∈ A with f(x) = y",
      "f is one-to-one"
    ],
    answer: 2,
    explanation: "Surjectivity means every element of the codomain B is actually reached — no element of B is 'missed'. Formally: ∀ y ∈ B, ∃ x ∈ A such that f(x) = y. Option (a) is the function property; option (b) is injectivity. A surjection can map multiple inputs to the same output."
  },

  {
    type: "mcq",
    q: "The intersection A ∩ B equals:",
    options: [
      "{x | x ∈ A or x ∈ B}",
      "{x | x ∈ A and x ∈ B}",
      "{x | x ∉ A and x ∉ B}",
      "{x | x ∈ A but x ∉ B}"
    ],
    answer: 1,
    explanation: "A ∩ B contains precisely the elements that belong to both A and B simultaneously — the logical 'and'. The union A ∪ B uses 'or' (either or both). The complement Aᶜ is {x ∈ U | x ∉ A}, and A \\ B = {x | x ∈ A but x ∉ B} is the set difference."
  },

  {
    type: "mcq",
    q: "Which of the following is a transcendental function?",
    options: [
      "f(x) = x³ − 2x + 7",
      "f(x) = (x² + 1)/(x − 3)",
      "f(x) = √(x² + 1)",
      "f(x) = sin x"
    ],
    answer: 3,
    explanation: "Transcendental functions cannot be expressed as roots of polynomial equations — they 'transcend' algebra. Trigonometric functions (sin, cos, tan), exponential, and logarithmic functions are transcendental. Option (a) is a polynomial, (b) is rational, and (c) is algebraic (it satisfies y² = x² + 1, a polynomial relation)."
  },

  {
    type: "mcq",
    q: "Does y² = x define y as a function of x?",
    options: [
      "Yes, because every x gives a value of y",
      "No, because some values of x give two values of y (e.g. x = 4 gives y = ±2)",
      "Yes, but only for x ≥ 0",
      "No, because the domain is empty"
    ],
    answer: 1,
    explanation: "For x = 4, y² = 4 gives y = +2 and y = −2 — two outputs for one input. A function requires exactly one output per input, so y² = x does not define y as a function of x. However, y = √x (the positive branch alone) is a function, as is y = −√x (the negative branch alone)."
  },

  // ── Additional Fill ────────────────────────────────────────────────────────

  {
    type: "fill",
    q: "The complement of set A with respect to universal set U is Aᶜ = {x ∈ U | x ___ A}.",
    answer: "∉",
    alt: ["not in", "does not belong to", "∉ A", "is not in"],
    explanation: "The complement Aᶜ contains all elements of the universal set U that are not in A — the condition is x ∉ A. Together, A and Aᶜ partition U: A ∪ Aᶜ = U and A ∩ Aᶜ = ∅."
  },

  {
    type: "fill",
    q: "The natural domain of h(x) = √(3x − 6) is ___.",
    answer: "[2, ∞)",
    alt: ["[2,∞)", "x ≥ 2", "x>=2", "2 ≤ x < ∞", "[2, infinity)"],
    explanation: "The expression under the square root must be non-negative: 3x − 6 ≥ 0 ⟹ 3x ≥ 6 ⟹ x ≥ 2. The endpoint x = 2 is included (gives h(2) = 0, which is defined), so the domain is [2, ∞)."
  }

];
