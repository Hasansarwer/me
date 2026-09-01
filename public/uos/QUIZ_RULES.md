# Quiz System — Design Rules

**Project:** UoS Interactive Learning (Math-1111 / Physics-1111)
**Author:** Hasan Sarwer

---

## 1. Workflow

- Work **one chapter at a time**. The chapter to work on is selected by the instructor.
- **Before writing any questions, read the full chapter source file** to ensure questions are accurate and aligned with the actual content taught.
- Each chapter gets its own question bank file.
- Both subjects (Math and Physics) follow the same rules.

---

## 2. File Structure

```text
math-1111/
  quizes/
    index.html          ← quiz shell (chapter selector, display, scoring)
    bank/
      ch01.js           ← question bank for Chapter 1
      ch02.js           ← question bank for Chapter 2
      ...
  derivative/           ← simulations stay as-is
  function-grapher/
  ...

physics-1111/
  quizes/
    index.html
    bank/
      ch01.js
      ...
  shm/                  ← simulations stay as-is
  ...
```

---

## 3. Question Bank Format

Each chapter bank file exports a single array named `questions`.
Two question types are supported:

### MCQ

```js
{
  type: "mcq",
  q: "Question text here?",
  options: ["Option A", "Option B", "Option C", "Option D"],
  answer: 1,         // 0-based index of the correct option
  explanation: "Why the correct option is right, in one or two clear sentences."
}
```

### Fill in the Blank

```js
{
  type: "fill",
  q: "The derivative of sin x is ___.",
  answer: "cos x",            // primary correct answer (string)
  alt: ["cosx", "cos(x)"],   // optional accepted alternates (case-insensitive)
  explanation: "Why this is the correct answer, in one or two clear sentences."
}
```

- `explanation` is **required** for every question — shown after the student answers, whether correct or incorrect.
- Answers are checked **case-insensitively** with leading/trailing whitespace stripped.
- For numeric answers, include common equivalent forms in `alt` (e.g. `"1/2"` and `"0.5"`).

---

## 4. Random Selection Rule

| Total questions in bank | Questions shown per attempt          |
| ----------------------- | ------------------------------------ |
| < 10                    | **5** (or all if fewer than 5 exist) |
| ≥ 10                    | **10**                               |

- Questions are drawn **randomly without replacement** each attempt.
- Order of selected questions is also randomised.

---

## 5. Quiz Attempt Flow

1. Student opens the quiz page and selects a chapter.
2. The shell loads the chapter bank, applies the random selection rule, and shows the first question.
3. For each question:
   - **MCQ:** student clicks an option → immediate feedback appears (✓ correct / ✗ incorrect + correct answer revealed) → **Next** button becomes active.
   - **Fill in the blank:** student types answer → clicks **Check** → immediate feedback appears → **Next** button becomes active.
   - Once feedback is shown the answer is **locked** (cannot be changed).
4. After the last question a **results screen** shows the total score: **X / N correct**.
5. A **Try Again** button reloads a fresh random set from the same chapter bank.

---

## 6. Scoring

- Each question is worth **1 point**. No partial credit.
- Fill-in-the-blank: marked correct only if the answer matches `answer` or any entry in `alt` (case-insensitive, trimmed).

---

## 7. Design

- Match the existing simulation color scheme:
  - Primary navy: `#0f3466`
  - Accent teal: `#0d9488`
  - Background: `#f7f9fc`
- Single-page shell — no frameworks, plain HTML/CSS/JS.
- Mobile-friendly (responsive layout).
- No backend, no data storage — fully static.

---

## 8. Adding Questions — Checklist

When adding a new chapter bank:

- [ ] Aim for **at least 12–15 questions** per chapter (ensures good variety across attempts).
- [ ] Mix MCQ and fill-in-the-blank (roughly 70 % MCQ, 30 % fill).
- [ ] Cover all major topics/theorems from the chapter.
- [ ] Distractors in MCQs should be plausible (common misconceptions or near-correct values).
- [ ] Avoid trick questions — focus on conceptual understanding and key formulas.
- [ ] Review against the chapter content in the book before committing.

---

## 9. Decisions

| Decision   | Choice                                                                        |
| ---------- | ----------------------------------------------------------------------------- |
| Timer      | **No timer** — students work at their own pace                                |
| Display    | **One question at a time** with Next button — students focus on each question |
| Navigation | `quizes/` folder per subject; chapter selected inside the hub page            |
| Feedback   | **Per question** — answer + explanation shown immediately after answering     |
| History    | **Fully stateless** — no localStorage, no tracking between attempts           |
