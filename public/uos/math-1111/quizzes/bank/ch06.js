window.QUIZ_BANK = [

  // ── MCQ ────────────────────────────────────────────────────────────────────

  {
    type: "mcq",
    q: "The n-th derivative D^n(e^(ax)) equals:",
    options: [
      "n·e^(ax)",
      "a^n·e^(ax)",
      "n!·e^(ax)",
      "a·e^(ax)"
    ],
    answer: 1,
    explanation: "Standard result: D^n(e^(ax)) = a^n·e^(ax). Each differentiation multiplies by a, so after n differentiations the factor is a^n. In particular, D^n(e^x) = e^x (set a=1)."
  },

  {
    type: "mcq",
    q: "D^2(sin x) equals:",
    options: [
      "cos x",
      "sin x",
      "−cos x",
      "−sin x"
    ],
    answer: 3,
    explanation: "Using D^n(sin x) = sin(x + npi/2): D^2(sin x) = sin(x + pi) = −sin x. Alternatively: D(sin x) = cos x, D^2(sin x) = D(cos x) = −sin x."
  },

  {
    type: "mcq",
    q: "D^4(sin x) equals:",
    options: [
      "sin x",
      "cos x",
      "−sin x",
      "−cos x"
    ],
    answer: 0,
    explanation: "D^4(sin x) = sin(x + 4pi/2) = sin(x + 2pi) = sin x. The trig derivative cycle has period 4: sin→cos→−sin→−cos→sin. The 4th derivative returns to the original function."
  },

  {
    type: "mcq",
    q: "According to Leibniz's theorem, D^n(uv) =",
    options: [
      "sum of C(n,r)·u^(r)·v^(n-r) from r=0 to n",
      "sum of C(n,r)·u^(n-r)·v^(r) from r=0 to n",
      "sum of n!·u^(n-r)·v^(r) from r=0 to n",
      "u^(n)·v + u·v^(n) only"
    ],
    answer: 1,
    explanation: "Leibniz's theorem: D^n(uv) = sum_{r=0}^{n} C(n,r)·u^(n-r)·v^(r), where u^(n-r) denotes the (n-r)-th derivative of u. This generalises the product rule to arbitrary order."
  },

  {
    type: "mcq",
    q: "The number of terms in the Leibniz expansion of D^n(uv) is:",
    options: [
      "n",
      "n − 1",
      "n + 1",
      "2n"
    ],
    answer: 2,
    explanation: "The sum runs from r=0 to r=n, giving n+1 terms. For example, D^2(uv) has three terms: u''v + 2u'v' + uv'' (matching the binomial expansion of (u+v)^2 in structure)."
  },

  {
    type: "mcq",
    q: "The partial derivative dz/dx of z = f(x, y) is computed by:",
    options: [
      "Differentiating with respect to both x and y simultaneously",
      "Differentiating with respect to x while holding y constant",
      "Finding the total rate of change of z along any curve",
      "Differentiating with respect to y while holding x constant"
    ],
    answer: 1,
    explanation: "Partial differentiation isolates one variable: dz/dx (written ∂z/∂x) is the derivative with respect to x treating y as a fixed constant. The notation ∂ (curly d) signals that other variables are held fixed."
  },

  {
    type: "mcq",
    q: "For z = f(x, y), the mixed partial derivatives f_xy and f_yx are equal when:",
    options: [
      "f is defined on an open domain",
      "f is merely continuous",
      "The mixed partial derivatives themselves are continuous",
      "x and y are independent variables"
    ],
    answer: 2,
    explanation: "Schwarz's (Clairaut's) theorem: f_xy = f_yx at a point provided both mixed partials exist and are continuous in a neighbourhood of that point. Continuity of the partials, not just of f, is the key condition."
  },

  {
    type: "mcq",
    q: "The total differential of z = f(x, y) is:",
    options: [
      "dz = (dz/dx)·(dz/dy)",
      "dz = f_x·dx + f_y·dy",
      "dz = f_x·dx · f_y·dy",
      "dz = (d^2z)/(dx dy)"
    ],
    answer: 1,
    explanation: "Total differential: dz = f_x dx + f_y dy = (∂z/∂x)dx + (∂z/∂y)dy. It captures the first-order change in z due to small independent changes dx and dy in both variables simultaneously."
  },

  {
    type: "mcq",
    q: "A function f(x, y) is homogeneous of degree n if:",
    options: [
      "f(tx, ty) = n·f(x, y)",
      "f(tx, ty) = t·f(x, y)",
      "f(tx, ty) = t^n·f(x, y)",
      "f(tx, ty) = f(x^n, y^n)"
    ],
    answer: 2,
    explanation: "Homogeneous of degree n: scaling both arguments by t scales the function by t^n. Example: f(x,y) = x^2+xy is homogeneous of degree 2 because f(tx,ty) = t^2x^2+t^2xy = t^2·f(x,y)."
  },

  {
    type: "mcq",
    q: "Euler's theorem for a differentiable function z = f(x, y) homogeneous of degree n states:",
    options: [
      "x·(dz/dx) − y·(dz/dy) = nz",
      "x·(dz/dx) + y·(dz/dy) = nz",
      "(dz/dx) + (dz/dy) = nz",
      "x·(dz/dx) · y·(dz/dy) = nz"
    ],
    answer: 1,
    explanation: "Euler's theorem: x·∂z/∂x + y·∂z/∂y = nz. Proof: differentiate f(tx,ty)=t^n f(x,y) with respect to t, then set t=1. For three variables: xu_x + yu_y + zu_z = nu."
  },

  {
    type: "mcq",
    q: "The sign factor in D^n(ln x) = (-1)^(?) · (n-1)!/x^n is:",
    options: [
      "(-1)^n",
      "(-1)^(n-1)",
      "(-1)^(n+1)",
      "Always positive"
    ],
    answer: 1,
    explanation: "D^n(ln x) = (-1)^(n-1)·(n-1)!/x^n. Check: D^1(ln x) = 1/x = (-1)^0·0!/x = +1/x ✓. D^2(ln x) = −1/x^2 = (-1)^1·1!/x^2 ✓. The sign alternates, starting positive for n=1."
  },

  {
    type: "mcq",
    q: "The amplitude factor in the formula for D^n(e^(ax)sin(bx+c)) is:",
    options: [
      "(a + b)^n",
      "(a^2 + b^2)^(n/2)",
      "sqrt(a^2 + b^2)",
      "(a^2 + b^2)^n"
    ],
    answer: 1,
    explanation: "D^n(e^(ax)sin(bx+c)) = (a^2+b^2)^(n/2)·e^(ax)·sin(bx+c+n·tan^(-1)(b/a)). The factor (a^2+b^2)^(n/2) = r^n where r = sqrt(a^2+b^2) is the modulus of the complex number a+ib."
  },

  {
    type: "mcq",
    q: "D^n(a^x) where a > 0 and a ≠ 1 equals:",
    options: [
      "a^x · ln a",
      "n · a^(x−1)",
      "(ln a)^n · a^x",
      "a^(nx)"
    ],
    answer: 2,
    explanation: "D^n(a^x) = (ln a)^n·a^x. Each differentiation multiplies by ln a (since D(a^x) = a^x·ln a), so after n differentiations the factor is (ln a)^n. Setting a=e gives (ln e)^n·e^x = e^x."
  },

  {
    type: "mcq",
    q: "For z = x^2y + e^(xy), the partial derivative dz/dx equals:",
    options: [
      "2x + e^(xy)",
      "2xy + y·e^(xy)",
      "x^2 + x·e^(xy)",
      "2xy + x·e^(xy)"
    ],
    answer: 1,
    explanation: "Holding y constant: d/dx(x^2y) = 2xy, and d/dx(e^(xy)) = y·e^(xy) by the chain rule. So dz/dx = 2xy + y·e^(xy). Similarly dz/dy = x^2 + x·e^(xy)."
  },

  {
    type: "mcq",
    q: "For z = f(x, y) where x = x(t) and y = y(t), the chain rule gives dz/dt as:",
    options: [
      "(dz/dx) + (dz/dy)",
      "(dz/dx)·(dz/dy)",
      "(dz/dx)·(dx/dt) + (dz/dy)·(dy/dt)",
      "(dz/dx)·(dx/dt) · (dz/dy)·(dy/dt)"
    ],
    answer: 2,
    explanation: "Chain rule for parametric paths: dz/dt = (∂z/∂x)·(dx/dt) + (∂z/∂y)·(dy/dt). Both partial derivatives contribute because both x and y change with t. This extends naturally to more variables."
  },

  // ── Fill in the blank ───────────────────────────────────────────────────────

  {
    type: "fill",
    q: "D^n(e^(ax)) = ___.",
    answer: "a^n e^(ax)",
    alt: ["a^n*e^(ax)", "a^ne^(ax)"],
    explanation: "Standard result: D^n(e^(ax)) = a^n·e^(ax). Each differentiation pulls down one factor of a, giving a^n after n steps."
  },

  {
    type: "fill",
    q: "D^n(a^x) = ___ for a > 0, a ≠ 1.",
    answer: "(ln a)^n a^x",
    alt: ["(ln a)^n*a^x"],
    explanation: "D(a^x) = a^x·ln a. Repeating n times: D^n(a^x) = (ln a)^n·a^x. Setting a=e recovers D^n(e^x)=e^x since (ln e)^n=1."
  },

  {
    type: "fill",
    q: "D^n(ln x) = (-1)^(n-1) · ___ / x^n.",
    answer: "(n-1)!",
    alt: [],
    explanation: "Full formula: D^n(ln x) = (-1)^(n-1)·(n-1)!/x^n. The factorial (n-1)! arises from differentiating the power function n times; the sign alternates starting positive for n=1."
  },

  {
    type: "fill",
    q: "D^2(sin x) = ___.",
    answer: "-sin x",
    alt: ["-sin(x)"],
    explanation: "D^2(sin x) = sin(x + pi) = −sin x. Equivalently: D(sin x) = cos x and D(cos x) = −sin x, so D^2(sin x) = −sin x."
  },

  {
    type: "fill",
    q: "D^4(cos x) = ___.",
    answer: "cos x",
    alt: ["cos(x)"],
    explanation: "D^n(cos x) = cos(x + npi/2). For n=4: cos(x + 2pi) = cos x. The derivatives of both sin x and cos x return to themselves after 4 steps, reflecting the period-4 cycle."
  },

  {
    type: "fill",
    q: "D^n(sin(ax+b)) = a^n · sin(ax+b + ___).",
    answer: "npi/2",
    alt: ["n*pi/2", "n pi/2"],
    explanation: "Each differentiation shifts the argument of sine by pi/2 and introduces a factor of a. After n differentiations: D^n(sin(ax+b)) = a^n·sin(ax+b+npi/2)."
  },

  {
    type: "fill",
    q: "The number of terms in the Leibniz expansion of D^n(uv) is ___.",
    answer: "n+1",
    alt: [],
    explanation: "The sum runs from r=0 to r=n, producing n+1 terms. This parallels the binomial theorem: (a+b)^n also has n+1 terms with binomial coefficients C(n,r)."
  },

  {
    type: "fill",
    q: "In the Leibniz formula D^n(uv) = sum of C(n,r)·u^(n-r)·v^(r), the coefficient is ___.",
    answer: "C(n,r)",
    alt: ["nCr", "n!/(r!(n-r)!)"],
    explanation: "The binomial coefficient C(n,r) = n!/(r!(n−r)!) appears in each term. This is identical to the coefficient in the binomial expansion of (x+y)^n."
  },

  {
    type: "fill",
    q: "The partial derivative dz/dx is computed by treating ___ as a constant.",
    answer: "y",
    alt: [],
    explanation: "∂z/∂x means differentiate z with respect to x while holding y fixed. Any term in z that involves only y (not x) differentiates to zero, just like a constant."
  },

  {
    type: "fill",
    q: "The total differential of z = f(x, y) is dz = f_x dx + ___.",
    answer: "f_y dy",
    alt: ["f_y*dy"],
    explanation: "dz = f_x dx + f_y dy, where f_x = ∂z/∂x and f_y = ∂z/∂y. This gives the best linear approximation to the change in z for small changes dx and dy."
  },

  {
    type: "fill",
    q: "A function z = f(x, y) is homogeneous of degree n if f(tx, ty) = ___.",
    answer: "t^n f(x,y)",
    alt: ["t^n*f(x,y)"],
    explanation: "Homogeneity of degree n: f(tx,ty)=t^n·f(x,y). The degree tells you how f scales when both variables are scaled by the same factor t."
  },

  {
    type: "fill",
    q: "Euler's theorem: for z = f(x, y) homogeneous of degree n, x·(dz/dx) + y·(dz/dy) = ___.",
    answer: "nz",
    alt: ["n*z"],
    explanation: "Euler's theorem states x·∂z/∂x + y·∂z/∂y = nz. It extends to three variables as xu_x + yu_y + zu_z = nu. The degree n appears as the multiplier on the right side."
  },

  {
    type: "fill",
    q: "For z = (x^2+y^2)^(3/2), which is homogeneous of degree 3, x·(dz/dx) + y·(dz/dy) = ___.",
    answer: "3z",
    alt: ["3*z"],
    explanation: "By Euler's theorem with n=3: x·∂z/∂x + y·∂z/∂y = 3z. Verification: z_x = 3x(x^2+y^2)^(1/2), z_y = 3y(x^2+y^2)^(1/2), so xz_x+yz_y = 3(x^2+y^2)^(3/2) = 3z."
  },

  {
    type: "fill",
    q: "If f_xy and f_yx are continuous near a point, then f_xy = ___.",
    answer: "f_yx",
    alt: ["fyx"],
    explanation: "Schwarz's theorem (symmetry of mixed partials): if both f_xy and f_yx exist and are continuous in a neighbourhood, they are equal. This means the order of partial differentiation does not matter."
  },

  {
    type: "fill",
    q: "D^3(e^(2x)) = ___.",
    answer: "8e^(2x)",
    alt: ["8*e^(2x)", "8e^2x"],
    explanation: "Using D^n(e^(ax)) = a^n·e^(ax) with a=2, n=3: D^3(e^(2x)) = 2^3·e^(2x) = 8e^(2x). Each differentiation multiplies by a=2, so three steps give 2^3=8."
  }

];
