# What is AI? — Kids Classroom Explainer ("Paper Playground")

A warm, storybook-style explainer deck that teaches primary-school children
(~ages 8–11) what AI is: where it shows up in daily life, how it learns, what it is
good and bad at, how to work with it, and how to stay safe. Built as a flagship
showcase for the slide-maker public template gallery, with a hand-built native robot
mascot ("Pip") and a fully native illustration system (no stock or generated photos).

## Template File
- `template.pptx` — the editable 16:9 deck (12 slides).
- `build_template.py` — the build script (source of truth; re-run to regenerate).
- `style.py` — the reusable visual identity: palette, fonts, the "Pip" robot mascot,
  native decorative shapes (sun / spark / cloud / heart), speech bubbles, cards,
  feature tiles, takeaway bars, cover, and footer.
- `assets/icons/` — recolored open-licensed Tabler icons (one family) used in the deck.
- `render/slide01.png … slide12.png` — one PNG per slide.

## Summary
This is a **real, finished content example** — every word is genuine, age-appropriate
copy about AI (kept deliberately qualitative, with no invented statistics), not
placeholder text. Its value as a template is the **reusable visual system underneath**:
swap the words in `build_template.py` and you keep the whole "Paper Playground" look —
the warm cream canvas, the friendly rounded type, the semantic colour coding, the
native robot mascot, and the component helpers in `style.py`.

Best for: **explaining anything to children or a general beginner audience** — school
lessons, science/tech literacy, museum and library programs, kids' workshops, onboarding
that should feel friendly rather than corporate. The system scales to any topic that
benefits from a warm, encouraging, illustration-led voice. It is designed to be
**teacher-presented with a read-along feel**: each slide carries a full spoken script in
its speaker notes (open Presenter View), so the slides themselves stay uncluttered.

The illustration mood is carried **100% natively** — a vector mascot, native auto-shapes,
and recolored icons — so the deck is fully editable and portable, with no dependency on an
image-generation tool. To reuse: copy `style.py` + `assets/icons/`, then build content
slides with `st.card` / `st.feature_tile` / `st.title_bar` / `st.robot` / `st.speech_bubble`
/ `st.takeaway`, keeping one accent hue per idea.

## Structure
1. **Cover** — "What is AI?" title, Pip the robot, and a warm sky of shapes.
2. **The big idea** — a kid definition: AI is a computer helper that learns from examples (+ what "AI" stands for).
3. **Everyday life** — a 6-tile icon grid of where AI shows up (voice, recommendations, photos, maps, games, translation).
4. **How AI learns · 1** — learning from examples: many cat photos → robot → "That's a cat!" (this is called training).
5. **How AI learns · 2** — the practice loop: guess → check → learn → repeat (the free-throw analogy).
6. **Superpowers** — four things AI is really good at (fast, tireless, spots patterns, knows a lot).
7. **Tricky bits** — what AI is NOT good at: no true understanding, no feelings, can be confidently wrong.
8. **The golden rule** — a bold full-bleed statement: "AI can be wrong. YOU are the checker." (the deck's pivot).
9. **Team up** — four steps to be a smart AI partner (ask clearly, check, think for yourself, stay curious & kind).
10. **Stay safe** — four safety cards (keep secrets secret, ask a grown-up, it's a tool not a friend, be kind & honest).
11. **You're in charge** — what YOU bring vs what AI brings; together you're a team, with YOU as the boss.
12. **Remember** — the 5 things to take away, with a "keep being curious!" sign-off from Pip.

## Fonts & Colors
**Fonts.** Display / titles / big numbers / mascot voice: **Arial Rounded MT Bold**
(friendly, rounded). Body / captions: **Trebuchet MS** (humanist, highly readable for
kids). Both are standard on macOS / Microsoft Office; on Linux they substitute, so keep
the render PNGs as the reference or install equivalents. No CJK or math fonts are needed.

**Colors — "Paper Playground".**
- Canvas: warm cream `#FFF7EA` (deeper cream `#FCEED9` for quiet motif washes).
- Ink / text: warm plum-navy `#39304F` (titles) · `#5A5170` (body) · `#8B8098` (captions).
- Cards: solid white with a warm offset shadow (`#EBDCC0`) and a colored accent rim/band.
- **Semantic accent set** (each hue bound to one idea deck-wide):
  `#F5843C` tangerine = **AI / energy** · `#1AA79E` teal = **learning** ·
  `#57AE5F` green = **what AI is good at** · `#EC6588` berry = **be careful / safety** ·
  `#4C9EE0` sky = **everyday life / tools** · `#8A72D0` grape = **imagination / you** ·
  `#F6B93B` sunshine = **sparks / highlights**.
- Darkened variants (`#127B74`, `#3C8C48`, `#D24A6C`, `#2E7FBE`, `#6E58B8`) are used where
  white text must clear a 4.5:1 contrast ratio, or for emphasis captions on cream.
- The one deliberate canvas flip is slide 8 (deep plum `#39304F` full-bleed) — the
  "golden rule" peak — using cream + sunshine text for high contrast.
