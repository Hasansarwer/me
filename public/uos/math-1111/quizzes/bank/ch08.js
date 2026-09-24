window.QUIZ_BANK = [

  // ── MCQ ────────────────────────────────────────────────────────────────────

  {
    type: "mcq",
    q: "L'Hôpital's rule applies when the limit of f(x)/g(x) has the indeterminate form:",
    options: [
      "0 + 0 or ∞ + ∞",
      "0/0 or ∞/∞",
      "0 · 1 or 1 · ∞",
      "0^1 or 1^0"
    ],
    answer: 1,
    explanation: "L'Hôpital's rule applies to 0/0 and ∞/∞ forms: lim f(x)/g(x) = lim f'(x)/g'(x). Other indeterminate forms (0·∞, ∞−∞, 0^0, 1^∞, ∞^0) must first be algebraically rewritten as 0/0 or ∞/∞. Powers are handled by taking logarithms."
  },

  {
    type: "mcq",
    q: "The equation of the tangent to y = f(x) at the point (x₁, y₁) is:",
    options: [
      "y − y₁ = −(1/f'(x₁)) · (x − x₁)",
      "y − y₁ = f'(x₁) · (x − x₁)",
      "y = f'(x₁) · x + y₁",
      "y − y₁ = f(x₁) · (x − x₁)"
    ],
    answer: 1,
    explanation: "Tangent at (x₁,y₁): y−y₁ = m(x−x₁) where m = f'(x₁) = dy/dx evaluated at x₁. For an implicit curve F(x,y)=0, the slope is m = −F_x/F_y. For parametric x(t),y(t), the slope is (dy/dt)/(dx/dt)."
  },

  {
    type: "mcq",
    q: "If the tangent to y = f(x) at a point has slope m, the slope of the normal at the same point is:",
    options: [
      "m",
      "1/m",
      "−1/m",
      "−m"
    ],
    answer: 2,
    explanation: "The tangent and normal are perpendicular, so their slopes multiply to −1: m · (−1/m) = −1. Normal equation: y−y₁ = (−1/m)(x−x₁). When m=0 (horizontal tangent) the normal is vertical; when the tangent is vertical (m undefined) the normal is horizontal."
  },

  {
    type: "mcq",
    q: "A necessary condition for a differentiable function f to have a local extremum at an interior point c is:",
    options: [
      "f(c) = 0",
      "f''(c) = 0",
      "f'(c) = 0",
      "f'''(c) = 0"
    ],
    answer: 2,
    explanation: "Fermat's theorem: if f has a local extremum at c and is differentiable there, then f'(c)=0. Note this is necessary but not sufficient — f'(c)=0 can also occur at inflection points (e.g., f(x)=x^3 at c=0)."
  },

  {
    type: "mcq",
    q: "The second derivative test: if f'(c) = 0 and f''(c) > 0, then f has a:",
    options: [
      "Local maximum at c",
      "Point of inflection at c",
      "Saddle point at c",
      "Local minimum at c"
    ],
    answer: 3,
    explanation: "f''(c)>0 means the curve is concave up at c, so the critical point is a local minimum. Conversely, f''(c)<0 means concave down, giving a local maximum. If f''(c)=0 the test is inconclusive; use higher derivatives or sign analysis of f'."
  },

  {
    type: "mcq",
    q: "The second derivative test: if f'(c) = 0 and f''(c) < 0, then f has a:",
    options: [
      "Local minimum at c",
      "Local maximum at c",
      "Point of inflection at c",
      "Absolute maximum at c"
    ],
    answer: 1,
    explanation: "f''(c)<0 means the curve is concave down at c, so the critical point is a local maximum. Example: f(x)=−x^2 has f'(0)=0 and f''(0)=−2<0, confirming a local (and global) maximum at x=0."
  },

  {
    type: "mcq",
    q: "For z = f(x, y), a stationary point (f_x = f_y = 0) is a saddle point when D = f_xx·f_yy − f_xy² satisfies:",
    options: [
      "D > 0 and f_xx > 0",
      "D > 0 and f_xx < 0",
      "D = 0",
      "D < 0"
    ],
    answer: 3,
    explanation: "Classification of stationary points of z=f(x,y): D>0 and f_xx>0 → local min; D>0 and f_xx<0 → local max; D<0 → saddle point (neither a max nor min); D=0 → inconclusive. A saddle has a minimum in one cross-section and a maximum in another."
  },

  {
    type: "mcq",
    q: "Maximum profit is achieved when:",
    options: [
      "Total revenue R(x) is maximum",
      "Total cost C(x) is minimum",
      "Marginal revenue equals marginal cost",
      "Marginal cost is zero"
    ],
    answer: 2,
    explanation: "Profit P=R−C is maximised when P'=R'−C'=0, i.e., R'=C', or MR=MC. This is the fundamental optimality condition in economics: produce up to the point where the extra revenue from one more unit equals the extra cost. Verify it is a maximum by checking P''<0."
  },

  {
    type: "mcq",
    q: "The radius of curvature ρ for the curve y = f(x) is:",
    options: [
      "|y''| / (1 + y'²)^(3/2)",
      "(1 + y'²)^(3/2) / |y''|",
      "(1 + y'²) / |y''|",
      "|y''| / (1 + y'²)"
    ],
    answer: 1,
    explanation: "ρ = 1/κ = (1+y'²)^(3/2)/|y''|. The curvature κ=|y''|/(1+y'²)^(3/2) measures how rapidly the tangent direction changes; ρ is the reciprocal. At the origin of y=x^2 where y'=0 and y''=2, ρ=1/2^1=1/2."
  },

  {
    type: "mcq",
    q: "A vertical asymptote x = a of y = f(x) occurs when:",
    options: [
      "f(x) → a as x → ∞",
      "f(x) → L (finite) as x → a",
      "|f(x)| → ∞ as x → a",
      "f(x) → 0 as x → a"
    ],
    answer: 2,
    explanation: "Vertical asymptote at x=a: |f(x)|→∞ as x→a (from one or both sides). Example: y=1/(x−2) has a vertical asymptote at x=2. Compare: horizontal asymptote y=L when f(x)→L as x→±∞."
  },

  {
    type: "mcq",
    q: "In polar coordinates, the x-component of a point at distance r and angle θ from the origin is:",
    options: [
      "r · sin θ",
      "r · cos θ",
      "r / cos θ",
      "tan θ"
    ],
    answer: 1,
    explanation: "Polar to Cartesian: x = r·cos θ and y = r·sin θ. Inverse: r = sqrt(x^2+y^2) and tan θ = y/x. These conversions are essential for differentiating and integrating polar curves."
  },

  {
    type: "mcq",
    q: "The subtangent at a point P(x, y) on y = f(x) has length:",
    options: [
      "y · (dy/dx)",
      "(dy/dx) / y",
      "y / (dy/dx)",
      "1 / (y · dy/dx)"
    ],
    answer: 2,
    explanation: "Subtangent = y/(dy/dx). The subnormal = y·(dy/dx). These are the projected lengths on the x-axis of the tangent and normal segments respectively between the foot of the ordinate and the x-intercepts of the tangent and normal."
  },

  {
    type: "mcq",
    q: "The envelope of a one-parameter family F(x, y, c) = 0 is found by eliminating c between F = 0 and:",
    options: [
      "∂F/∂x = 0",
      "∂F/∂y = 0",
      "∂F/∂c = 0",
      "F = 1"
    ],
    answer: 2,
    explanation: "Envelope: eliminate c from F=0 and ∂F/∂c=0. The resulting curve is tangent to every member of the family. Example: the envelope of y=mx+a/m (a family of lines parametrised by m) is the parabola y^2=4ax."
  },

  {
    type: "mcq",
    q: "L'Hôpital's rule requires that, as x → a:",
    options: [
      "f and g are polynomials",
      "Both f(x) and g(x) → 0, or both |f(x)| and |g(x)| → ∞",
      "f(a) ≠ 0 and g(a) ≠ 0",
      "Only f(a) = 0"
    ],
    answer: 1,
    explanation: "L'Hôpital's rule requires either the 0/0 form (both numerator and denominator → 0) or the ∞/∞ form (both → ∞). If only one vanishes, the limit is trivially 0 or ∞ without any need for the rule."
  },

  {
    type: "mcq",
    q: "For the implicit curve F(x, y) = 0, the slope dy/dx equals:",
    options: [
      "−F_y / F_x",
      "F_x / F_y",
      "−F_x / F_y",
      "F_y / F_x"
    ],
    answer: 2,
    explanation: "Implicit differentiation of F(x,y)=0 with respect to x: F_x + F_y·(dy/dx) = 0, giving dy/dx = −F_x/F_y (provided F_y≠0). For example, F=x^2+y^2−25=0 gives dy/dx=−(2x)/(2y)=−x/y."
  },

  // ── Fill in the blank ───────────────────────────────────────────────────────

  {
    type: "fill",
    q: "L'Hôpital's rule: if lim f(x)/g(x) is 0/0 or ∞/∞, then the limit equals lim ___.",
    answer: "f'(x)/g'(x)",
    alt: [],
    explanation: "L'Hôpital: lim f(x)/g(x) = lim f'(x)/g'(x) whenever the original limit is 0/0 or ∞/∞ and the new limit exists. The rule may be applied repeatedly if the 0/0 or ∞/∞ form persists."
  },

  {
    type: "fill",
    q: "The slope of the tangent to y = f(x) at (x₁, y₁) is ___.",
    answer: "f'(x1)",
    alt: ["f'(x_1)", "dy/dx"],
    explanation: "The slope equals the derivative evaluated at the point: m = f'(x₁) = dy/dx|_{x=x₁}. This slope determines both the tangent line y−y₁=m(x−x₁) and the normal line y−y₁=−(1/m)(x−x₁)."
  },

  {
    type: "fill",
    q: "The slope of the normal to a curve at a point where the tangent slope is m is ___.",
    answer: "-1/m",
    alt: [],
    explanation: "Tangent and normal are perpendicular: their slopes satisfy m₁·m₂=−1. So the normal slope is −1/m. When the tangent is horizontal (m=0) the normal is vertical; when the tangent is vertical the normal is horizontal."
  },

  {
    type: "fill",
    q: "A necessary condition for f to have a local extremum at an interior differentiable point c is f'(c) = ___.",
    answer: "0",
    alt: [],
    explanation: "Fermat's theorem: f'(c)=0 at any local extremum where f is differentiable. Points where f'(c)=0 are called critical points. Not every critical point is an extremum — additional testing (second derivative or sign changes) is required."
  },

  {
    type: "fill",
    q: "The second derivative test: if f'(c) = 0 and f''(c) > 0, then c is a local ___.",
    answer: "minimum",
    alt: ["min"],
    explanation: "f''(c)>0 means the function is concave up (bowl-shaped) at c, confirming a local minimum. Mnemonic: 'concave up = cup = catches water = minimum'."
  },

  {
    type: "fill",
    q: "For z = f(x, y), the stationary point is a saddle point when D = f_xx·f_yy − f_xy² is ___.",
    answer: "negative",
    alt: ["<0", "less than 0"],
    explanation: "D<0 means the quadratic form changes sign in different directions, so the stationary point is neither a max nor a min — it is a saddle. The classic saddle surface z=x^2−y^2 has D=2·(−2)−0^2=−4<0 at the origin."
  },

  {
    type: "fill",
    q: "Maximum profit occurs when marginal revenue MR equals ___.",
    answer: "MC",
    alt: ["marginal cost", "C'(x)"],
    explanation: "Setting P'(x)=R'(x)−C'(x)=0 gives R'(x)=C'(x), i.e., MR=MC. This is the first-order condition for profit maximisation. Confirm it is a maximum by checking P''(x)<0, i.e., MC is rising faster than MR."
  },

  {
    type: "fill",
    q: "The curvature of y = x^2 at the origin (where f'(0) = 0 and f''(0) = 2) is κ = ___.",
    answer: "2",
    alt: [],
    explanation: "κ = |y''|/(1+y'^2)^(3/2). At the origin: y'=0 and y''=2, so κ = 2/(1+0)^(3/2) = 2. The radius of curvature is ρ=1/κ=1/2."
  },

  {
    type: "fill",
    q: "For an oblique asymptote y = mx + c, the slope m is found from m = lim(x→∞) ___.",
    answer: "f(x)/x",
    alt: ["y/x"],
    explanation: "m = lim_{x→∞} f(x)/x and c = lim_{x→∞}[f(x)−mx]. For example, f(x)=(2x^2+3x+1)/(x+1) gives m=lim(2x^2/x)/1=2 and c=1 after polynomial division."
  },

  {
    type: "fill",
    q: "In polar coordinates, the distance r from the origin equals ___ (in terms of x and y).",
    answer: "sqrt(x^2+y^2)",
    alt: [],
    explanation: "r = sqrt(x^2+y^2) by the Pythagorean theorem. Together with tanθ=y/x, these convert Cartesian coordinates to polar. The inverse conversions are x=rcosθ and y=rsinθ."
  },

  {
    type: "fill",
    q: "For the implicit curve F(x, y) = 0, dy/dx = ___.",
    answer: "-F_x/F_y",
    alt: ["-Fx/Fy"],
    explanation: "Implicit differentiation of F(x,y)=0: F_x+F_y·(dy/dx)=0 ⟹ dy/dx=−F_x/F_y. For x^2+y^2=25: F_x=2x, F_y=2y, so dy/dx=−x/y."
  },

  {
    type: "fill",
    q: "To find the envelope of the family F(x, y, c) = 0, eliminate c between F = 0 and ∂F/∂c = ___.",
    answer: "0",
    alt: [],
    explanation: "Envelope condition: ∂F/∂c=0. Solving this alongside F=0 for c and substituting gives the envelope. For y=cx−c^2/4 (a family of lines): F_c=x−c/2=0 gives c=2x, and back-substitution yields y=x^2 — a parabola."
  },

  {
    type: "fill",
    q: "The subtangent at P(x, y) on curve y = f(x) equals y divided by ___.",
    answer: "dy/dx",
    alt: ["y'", "f'(x)"],
    explanation: "Subtangent = y/(dy/dx). The subnormal = y·(dy/dx). Their product is y^2, and the length of the tangent is y·sqrt(1+(dx/dy)^2) while the normal length is y·sqrt(1+(dy/dx)^2)."
  },

  {
    type: "fill",
    q: "The polar subnormal of r = f(θ) equals ___.",
    answer: "dr/dtheta",
    alt: ["dr/dθ", "r'"],
    explanation: "Polar subnormal = r·cot(phi) = dr/dθ, where phi is the angle between the radius vector and the tangent. The polar subtangent = r·tan(phi) = r^2/(dr/dθ). These are the polar analogues of the Cartesian subtangent and subnormal."
  },

  {
    type: "fill",
    q: "At a break-even point, profit P(x) = R(x) − C(x) = ___.",
    answer: "0",
    alt: [],
    explanation: "Break-even means revenue exactly covers cost, so P=R−C=0. This defines the minimum output (or outputs) needed to avoid a loss. Production beyond break-even generates positive profit, up to the profit-maximising level MR=MC."
  }

];
