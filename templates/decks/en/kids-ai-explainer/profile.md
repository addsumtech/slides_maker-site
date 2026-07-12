# Crayon Classroom · Kids' Explainer Deck Template (What Is AI?)

A warm, picture-book classroom template for explaining things to young children. The sample content is a complete, teachable lesson — "explaining what AI is to elementary-school kids" — built entirely from real, ready-to-teach material. **The whole visual system is reusable: swap the text and icons to cover any other kids' explainer topic** (e.g. "What is electricity?", "How does recycling work?", "Germs and bacteria").

## Template File
- `template.pptx` — 12 slides, 16:9, English, fully editable (native text / shapes / icons, no bitmap screenshots).
- `build_kids_ai.py` — the build script for this deck (the true "source file"; re-runnable and easy to iterate on).
- `illus.py` — a hand-built native illustration system: the hand-drawn robot mascot "little AI" + crayon-doodle parts (stars / clouds / sun / hearts / dotted trail / speech bubbles).
- `assets/icons/` — icons pulled from the open-source Phosphor library and recoloured to the palette (one consistent family).
- `render/slide01.png … slide12.png` — a rendered image of each slide.

## Summary
- **What this is**: a "kids' explainer / early-classroom lesson" template. At its core is an authored, non-template-feeling **native illustration system** — a warm cream-paper background + crayon-box palette + a robot mascot woven through every slide + rounded cards — creating the friendly feel of a picture-book classroom. Every illustration is a **text-free atmosphere illustration** (drawn natively as vectors); the images carry no text or data.
- **Good for**: elementary / kindergarten explainer decks, kids' coding or AI first-lessons, parent-child explaining, science-museum / library children's events, and any "zero-background" intro for a general audience — anything that needs to be "understandable by kids and cute on screen." Designed for live teaching (each slide already has a **teacher's script** in the speaker notes).
- **Reusability**: this deck is "real sample content + a reusable visual system." **Keep the whole visual (palette / mascot / cards / icon treatment / layout rhythm) and swap each slide's text and icons for your topic** — the five-part narrative spine (where it shows up in daily life → an analogy for how it works → strengths and weaknesses → how to work with it → safety tips) fits almost any "explain a thing to a child" topic.
- **Note on imagery**: image-generation quota was unavailable, so per the fallback plan the "cute-illustration atmosphere" was built entirely from **icons + native vector shapes** — no blocking, no placeholder images.

## Structure (slide by slide)
1. **Cover** — "What Is AI?" full-bleed picture-book scene: the mascot waving + sun, clouds, stars; a warm peach-sky bookend.
2. **Adventure map** — the lesson roadmap: a winding dotted trail links 5 numbered stops (the five themes).
3. **① AI in daily life** — 6 icon cards: voice assistant / video picks / photo & filters / translation / games / maps.
4. **Definition** — a three-step flow: sees lots of examples → finds patterns itself → learns a skill; "more like a curious, well-read kid."
5. **② An analogy (the key slide)** — a side-by-side parallel: how YOU learned "cat" = how AI learns "cat," both from lots of examples.
6. **② The practice loop** — a cycle diagram: take a guess → see if it's right → make it better → try again; "just like learning to ride a bike."
7. **③ Strengths** — four green cards: great memory / lightning fast / never tired / pattern pro.
8. **③ Weaknesses** — a speech bubble (a funny confidently-wrong example) + three limits: doesn't really understand / jumps to conclusions / no common sense or feelings.
9. **④ How to work with it** — four numbered rules: ask clearly / check the answers / ask a grown-up / you're the boss.
10. **⑤ Safety tips** — a "Safe to do" (green ✓) vs "Be careful" (coral ✗) side-by-side compare.
11. **Recap** — a five-colour summary strip that bookends the map on slide 2.
12. **Closing** — "However smart the tool, you're the one who decides" as a full-bleed sign-off, echoing the cover (bookend).

## Fonts & Colors
**Fonts**
- Latin / numerals: `Arial Rounded MT Bold` (rounded and cuddly; used throughout for the English text, "AI", page numbers, and figures).
- CJK fallback: `Hiragino Sans GB` is still configured for any East-Asian glyphs (rounded, friendly, and safe on this render toolchain). The English deck renders in Arial Rounded MT Bold.
- ⚠ Font dependency: both are macOS system fonts. Opening the `.pptx` on Windows / elsewhere, substitute a rounded Latin face (e.g. `Arial Rounded` or any rounded sans) for the same look. The PNGs in `render/` are the correct rendered result.

**Palette (crayon box · semantic colours)** — each colour means exactly one thing throughout:
- Paper `#FFF6EA` (warm cream) / cover · closing sky `#FFE1C4→#FFF3E4` (peach gradient bookend).
- Ink `#2E2A4A` (soft deep indigo, same as the mascot's face-screen); secondary text `#8C86A8`.
- **Blue `#3D9BE9` = AI / technology** (the mascot itself).
- **Green `#3FC79A` = strengths · safety · good**.
- **Yellow `#FFC93C` = learning · ideas · sparkle**.
- **Coral `#FF6B6B` = caution · weaknesses**.
- **Purple `#9B7EDE` = you · the kid · the one who decides**.
- Cards are white with a soft shadow; each semantic colour has a very light tint used for bubbles / panels; body text contrast ≥ 4.5:1.
- Signature motif: the hand-drawn robot mascot "little AI" (varied expressions/poses, acting as a guide rather than a repeated stamp) + crayon-doodle accents (stars · clouds · sun · hearts · dotted trail).

> **Fonts:** This deck uses macOS system fonts (Hiragino Sans GB / PingFang SC / Songti SC for Chinese; Helvetica Neue / Avenir Next / Georgia for Latin). On Windows or other systems, install **Noto Sans CJK SC / Source Han Sans** (and swap Latin display fonts) to reproduce the exact look; otherwise your app will substitute a system font. The online preview is a pixel-accurate render, so it always looks correct regardless of your fonts.
