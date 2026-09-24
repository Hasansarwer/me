window.QUIZ_BANK = [

  // ── MCQ ────────────────────────────────────────────────────────────────────

  {
    type: "mcq",
    q: "Rolle's theorem requires, among other conditions, that:",
    options: [
      "f(a) ≠ f(b)",
      "f(a) = f(b)",
      "f is differentiable at both endpoints a and b",
      "f has no maximum on (a, b)"
    ],
    answer: 1,
    explanation: "Rolle's theorem needs three conditions simultaneously: (1) f continuous on [a,b], (2) f differentiable on (a,b), and (3) f(a)=f(b). When all three hold, at least one c∈(a,b) exists with f'(c)=0."
  },

  {
    type: "mcq",
    q: "Lagrange's mean value theorem states that for some c ∈ (a, b), f'(c) equals:",
    options: [
      "f(a) + f(b)",
      "f'(a) + f'(b)",
      "[f(b) − f(a)] / (b − a)",
      "[f(a) + f(b)] / 2"
    ],
    answer: 2,
    explanation: "LMVT: f'(c) = [f(b)−f(a)]/(b−a). Geometrically, the slope of the tangent at c equals the slope of the chord from (a,f(a)) to (b,f(b)). The auxiliary function g(x)=f(x)−f(a)−[f(b)−f(a)](x−a)/(b−a) satisfies Rolle's theorem, giving c."
  },

  {
    type: "mcq",
    q: "Cauchy's mean value theorem for differentiable f and g on (a, b) states:",
    options: [
      "f'(c) · g'(c) = [f(b)−f(a)] · [g(b)−g(a)]",
      "f'(c) / g'(c) = [f(a)−f(b)] / [g(a)−g(b)]",
      "f'(c) / g'(c) = [f(b)−f(a)] / [g(b)−g(a)]",
      "f'(c) = g'(c)"
    ],
    answer: 2,
    explanation: "Cauchy's MVT: f'(c)/g'(c) = [f(b)−f(a)]/[g(b)−g(a)] for some c∈(a,b), provided g'≠0 on (a,b). Setting g(x)=x recovers Lagrange's MVT. It is proved by applying Rolle's theorem to the auxiliary function F(x) = f(x)·[g(b)−g(a)] − g(x)·[f(b)−f(a)]."
  },

  {
    type: "mcq",
    q: "In Lagrange's form, the remainder after n terms in Taylor's theorem is:",
    options: [
      "f^(n+1)(xi) / n! · (x−a)^(n+1)",
      "f^(n+1)(xi) / (n+1)! · (x−a)^(n+1)",
      "f^(n)(xi) / n! · (x−a)^n",
      "f^(n+1)(xi) / (n+1)! · (x−xi)^n"
    ],
    answer: 1,
    explanation: "Lagrange remainder: R_n = f^(n+1)(xi)/(n+1)! · (x−a)^(n+1) for some xi between a and x. The (n+1)! denominator mirrors the coefficient of the (n+1)-th Taylor term. It bounds the truncation error when the series is stopped after n terms."
  },

  {
    type: "mcq",
    q: "The Maclaurin series is obtained from Taylor's series by setting:",
    options: [
      "a = 1",
      "a = x",
      "a = 0",
      "x = 0"
    ],
    answer: 2,
    explanation: "Maclaurin series: expand Taylor's series about a=0. The result is f(x)=f(0)+xf'(0)+x^2/2!·f''(0)+…. It is a power series in x starting from the origin."
  },

  {
    type: "mcq",
    q: "The Maclaurin expansion of e^x is:",
    options: [
      "1 − x + x^2/2! − x^3/3! + …",
      "x − x^3/3! + x^5/5! − …",
      "1 + x + x^2/2! + x^3/3! + …",
      "x + x^2/2 + x^3/3 + …"
    ],
    answer: 2,
    explanation: "e^x = 1+x+x^2/2!+x^3/3!+… for all x. Since f^(n)(0)=e^0=1 for every n, each coefficient is 1/n!. The series converges for all real x and is one of the most important in mathematics."
  },

  {
    type: "mcq",
    q: "The Maclaurin expansion of sin x is:",
    options: [
      "1 − x^2/2! + x^4/4! − …",
      "x − x^3/3! + x^5/5! − …",
      "1 + x + x^2/2! + …",
      "x + x^3/3! + x^5/5! + …"
    ],
    answer: 1,
    explanation: "sin x = x − x^3/3! + x^5/5! − … for all x. Only odd powers appear (since sin is an odd function). Compare with cos x, which has only even powers. Both series converge for all real x."
  },

  {
    type: "mcq",
    q: "The Maclaurin expansion of cos x is:",
    options: [
      "x − x^3/3! + x^5/5! − …",
      "1 − x + x^2/2! − …",
      "1 + x^2/2! + x^4/4! + …",
      "1 − x^2/2! + x^4/4! − …"
    ],
    answer: 3,
    explanation: "cos x = 1 − x^2/2! + x^4/4! − … for all x. Only even powers appear (since cos is an even function). This can also be obtained by differentiating the sin x series term by term."
  },

  {
    type: "mcq",
    q: "The first two non-zero terms of the Maclaurin expansion of ln(1+x) are:",
    options: [
      "1 − x/2",
      "x − x^2/2",
      "x + x^2/2",
      "1 + x/2"
    ],
    answer: 1,
    explanation: "ln(1+x) = x − x^2/2 + x^3/3 − … for |x|<1. It can be derived by integrating the geometric series 1/(1+x)=1−x+x^2−… term by term from 0 to x. The constant term is zero since ln(1)=0."
  },

  {
    type: "mcq",
    q: "The binomial expansion (1+x)^m converges for:",
    options: [
      "All real x",
      "|x| ≤ 1 for all m",
      "|x| < 1",
      "x > 0 only"
    ],
    answer: 2,
    explanation: "(1+x)^m = 1+mx+m(m−1)/2!·x^2+… converges for |x|<1 when m is not a non-negative integer. For positive integer m it is an exact polynomial (terminates). The boundary x=±1 requires separate analysis."
  },

  {
    type: "mcq",
    q: "For f(x) = x^2 − 4x + 3 on [1, 3], Rolle's theorem gives f'(c) = 0 at c =",
    options: [
      "1",
      "2",
      "3",
      "1.5"
    ],
    answer: 1,
    explanation: "f(1)=1−4+3=0 and f(3)=9−12+3=0, so f(1)=f(3). Since f'(x)=2x−4, setting f'(c)=0 gives c=2, which lies in (1,3). This confirms Rolle's theorem for this example."
  },

  {
    type: "mcq",
    q: "Which set of conditions is sufficient for Rolle's theorem to guarantee a c ∈ (a, b) with f'(c) = 0?",
    options: [
      "f continuous on (a, b) only",
      "f differentiable on [a, b] (including endpoints)",
      "f continuous on [a, b], differentiable on (a, b), and f(a) = f(b)",
      "f differentiable everywhere with f(a) ≠ f(b)"
    ],
    answer: 2,
    explanation: "All three conditions are required: continuity on the closed interval, differentiability on the open interval, and equal endpoint values. Dropping any one can destroy the conclusion — e.g., f(x)=|x| on [−1,1] is continuous with equal endpoints but f'(0) is undefined."
  },

  {
    type: "mcq",
    q: "The Lagrange remainder R_n bounds the error when the Taylor series is truncated after n terms. For the Maclaurin expansion of e^x, the remainder after 3 terms satisfies |R_3| ≤",
    options: [
      "e^x · x^3 / 6",
      "e^x · x^4 / 24",
      "x^3 / 6",
      "x^4 / 24"
    ],
    answer: 1,
    explanation: "R_3 = f^(4)(xi)/4! · x^4 = e^xi · x^4/24 for some xi between 0 and x. Since e^xi ≤ e^x for 0≤xi≤x>0, the bound is |R_3| ≤ e^x · x^4/24. This is the Lagrange error bound."
  },

  {
    type: "mcq",
    q: "Using the Maclaurin expansion through the cubic term, e^(0.1) ≈",
    options: [
      "1.100",
      "1.1052",
      "1.010",
      "1.110"
    ],
    answer: 1,
    explanation: "e^(0.1) ≈ 1 + 0.1 + (0.1)^2/2 + (0.1)^3/6 = 1 + 0.1 + 0.005 + 0.000167 ≈ 1.1052. The actual value is 1.10517…, so this four-term approximation is accurate to 5 decimal places."
  },

  {
    type: "mcq",
    q: "The Maclaurin expansion of tan^(−1) x = x − x^3/3 + x^5/5 − … converges for:",
    options: [
      "All x",
      "x > 0",
      "|x| < 1 only (not at ±1)",
      "|x| ≤ 1"
    ],
    answer: 3,
    explanation: "The series for tan^(−1) x converges for |x| ≤ 1. At x=1 it gives the Leibniz formula pi/4 = 1−1/3+1/5−…. At x=−1 it gives −pi/4. The series diverges for |x|>1."
  },

  // ── Fill in the blank ───────────────────────────────────────────────────────

  {
    type: "fill",
    q: "Rolle's theorem: if f is continuous on [a,b], differentiable on (a,b), and f(a)=f(b), then f'(c) = ___ for some c ∈ (a, b).",
    answer: "0",
    alt: [],
    explanation: "f'(c)=0 means the tangent is horizontal at c. Geometrically, the curve must 'turn around' somewhere between the two equal endpoint values, creating a local extremum with zero derivative."
  },

  {
    type: "fill",
    q: "Lagrange's MVT: for f continuous on [a, b] and differentiable on (a, b), f'(c) = ___ for some c ∈ (a, b).",
    answer: "(f(b)-f(a))/(b-a)",
    alt: ["[f(b)-f(a)]/(b-a)"],
    explanation: "The mean value is the slope of the chord from a to b. Lagrange's theorem guarantees at least one interior point c where the tangent slope equals this chord slope."
  },

  {
    type: "fill",
    q: "The Lagrange remainder after n terms in Taylor's theorem is R_n = f^(n+1)(xi) / ___ · (x−a)^(n+1).",
    answer: "(n+1)!",
    alt: [],
    explanation: "R_n = f^(n+1)(xi)/(n+1)! · (x−a)^(n+1). The factorial (n+1)! in the denominator is one step beyond the last included term n!. It is the same pattern as the next Taylor coefficient."
  },

  {
    type: "fill",
    q: "The Maclaurin series is Taylor's series expanded about a = ___.",
    answer: "0",
    alt: [],
    explanation: "Maclaurin series: a=0 gives f(x) = f(0) + xf'(0) + x^2/2!·f''(0) + …. It expresses f as a power series centred at the origin."
  },

  {
    type: "fill",
    q: "e^x = 1 + x + x^2/2! + ___ + …",
    answer: "x^3/3!",
    alt: ["x^3/(3!)"],
    explanation: "The general term is x^n/n!, so the next term after x^2/2! is x^3/3! = x^3/6. All derivatives of e^x equal e^x, so f^(n)(0)=1 for all n, giving coefficient 1/n!."
  },

  {
    type: "fill",
    q: "sin x = x − x^3/3! + ___ − …",
    answer: "x^5/5!",
    alt: ["x^5/(5!)"],
    explanation: "sin x has only odd-power terms: x − x^3/3! + x^5/5! − x^7/7! + … . The signs alternate. The general term is (−1)^n · x^(2n+1)/(2n+1)!."
  },

  {
    type: "fill",
    q: "cos x = 1 − ___ + x^4/4! − …",
    answer: "x^2/2!",
    alt: ["x^2/(2!)"],
    explanation: "cos x has only even-power terms: 1 − x^2/2! + x^4/4! − …. It can be derived from the sin x series by differentiating term by term: D(sin x) = cos x, and D(x^(2n+1)/(2n+1)!) = x^(2n)/(2n)!."
  },

  {
    type: "fill",
    q: "ln(1+x) = x − x^2/2 + ___ − … for |x| < 1.",
    answer: "x^3/3",
    alt: [],
    explanation: "ln(1+x) = x − x^2/2 + x^3/3 − x^4/4 + … . The general term is (−1)^(n−1)·x^n/n. This is obtained by integrating the geometric series 1/(1+x)=1−x+x^2−… term by term."
  },

  {
    type: "fill",
    q: "The Maclaurin expansion of (1+x)^m converges for ___.",
    answer: "|x|<1",
    alt: ["-1<x<1"],
    explanation: "(1+x)^m = 1+mx+m(m−1)/2!·x^2+… converges for |x|<1. For non-integer m, the series is infinite. For positive integer m it terminates exactly (binomial theorem) and converges everywhere."
  },

  {
    type: "fill",
    q: "In the binomial expansion (1+x)^m = 1 + ___ x + m(m−1)/2! x^2 + …, the coefficient of x is ___.",
    answer: "m",
    alt: [],
    explanation: "d/dx[(1+x)^m] = m(1+x)^(m−1), evaluated at x=0 gives m. So the coefficient of x in the Maclaurin expansion is m/1! = m."
  },

  {
    type: "fill",
    q: "Cauchy's MVT: f'(c)/g'(c) = ___ for some c ∈ (a, b).",
    answer: "(f(b)-f(a))/(g(b)-g(a))",
    alt: [],
    explanation: "Cauchy's MVT generalises Lagrange's to two functions. Setting g(x)=x recovers Lagrange's result. It requires g'(x)≠0 on (a,b) to ensure the denominator g(b)−g(a)≠0."
  },

  {
    type: "fill",
    q: "Rolle's theorem applied to f(x) = sin x on [0, pi]: the point c where f'(c) = 0 is c = ___.",
    answer: "pi/2",
    alt: [],
    explanation: "f(0)=0 and f(pi)=0, so f(0)=f(pi). f'(x)=cos x, and cos(pi/2)=0, so c=pi/2. Indeed pi/2 lies in (0,pi), confirming Rolle's theorem."
  },

  {
    type: "fill",
    q: "tan^(−1) x = x − x^3/3 + ___ − … for |x| ≤ 1.",
    answer: "x^5/5",
    alt: [],
    explanation: "tan^(−1)x = x − x^3/3 + x^5/5 − x^7/7 + … . The general term is (−1)^n·x^(2n+1)/(2n+1). It is derived by integrating the geometric series 1/(1+x^2)=1−x^2+x^4−… term by term."
  },

  {
    type: "fill",
    q: "The coefficient of x^n in the Maclaurin series of e^x is ___.",
    answer: "1/n!",
    alt: ["1/(n!)"],
    explanation: "f^(n)(0)=1 for all n (since d^n/dx^n(e^x)=e^x and e^0=1). The Maclaurin coefficient of x^n is f^(n)(0)/n! = 1/n!. The sum of all terms is the well-known series for e^x."
  },

  {
    type: "fill",
    q: "The constant term (coefficient of x^0) in the Maclaurin series of any function f is ___.",
    answer: "f(0)",
    alt: [],
    explanation: "Setting x=0 in the Maclaurin series f(x) = f(0)+xf'(0)+x^2/2!·f''(0)+… immediately gives f(0). It is the value of f at the expansion point."
  }

];
