# Lights Down — Editorial Cultural Explainer · **Atmospheric-Image Edition**

> **This is the image version of the "Lights Down" deck.** It is identical in content, structure,
> page count and visual language to the base template, with one addition: three *text-free* comedy-club
> mood photos (`moodimg/su_cover.png`, `su_mic.png`, `su_stage.png`) are woven in as full-bleed
> atmospheric backgrounds on the three dark "stage" pages — the **cover (1)**, the **revolution
> divider (6)**, and the **curtain-call close (13)** — each under a graduated dark scrim so the
> native amber/ivory text stays crisp. No numbers, names, dates or copy changed; the amber accents
> and the SOURCES line are untouched. The remaining ten pages are exactly as the base design.

## Template File
`template.pptx` — 13 slides, 16:9 (10 × 5.625 in). Rendered previews in `render/` (`slide01.png` … `slide13.png`). Reproducible from `build_standup.py` (the build script is the source of truth). Mood plates live in `moodimg/`; `su_mic_flip.png` is the horizontally-mirrored `su_mic.png` (mic on the right, generated at build time).

## Summary
An **editorial "cultural broadsheet"** template built as a worked example for the slide-maker gallery, using *A Brief History of Stand-Up Comedy* as its subject. The design language — **"Lights Down"** — opens, peaks, and closes on a dark stage lit by a soft spotlight (a microphone motif, a dithered volumetric glow) and reads the history itself on warm ivory paper: *lights down for the show, paper for the record*. Serif display + mono "byline" chrome give it an authored, magazine feel rather than a slideware look.

It is designed for **cultural explainers and light talks** — any subject you want to narrate as a short, credible, visually varied story: a history, a field primer, a "how did we get here" overview, a museum/lecture piece. Delivery is presented (each slide carries a spoken thread in the speaker notes), and the density is *balanced* — tight phrasing on the slide, detail in the notes.

**This is a real-content example, not a mockup: the visual system is what you reuse — swap in your own topic and keep the components.** Every fact was web-verified; contested points (e.g. who was the "first" modern stand-up) are phrased qualitatively rather than asserted. The reusable system is the point: the dark/paper rhythm, the semantic-colour contract, the editorial header + mono chrome, and the component set (timelines, a before/after, a top-down tree, a region ledger, a concept-equation, figure cards, a pull-quote peak, a colophon close). Replace the words and the deck still holds.

## Structure
1. **Cover** — full-bleed club photo (`su_cover.png`: lone vintage mic, stool, brick wall, amber spotlight, open dark space on the left) under a graduated scrim; title, subtitle, gallery kicker sit crisp on the dark left.
2. **The form** — what stand-up *is*: one person, a mic, a point of view (three icon pillars).
3. **Origins (1850s–1930s)** — music hall, vaudeville, the lecture circuit; a horizontal chronology timeline.
4. **The modern form (1950s)** — the nightclub turns the variety act into the solo voice (before → after).
5. **The Golden Age (1950s–60s)** — Sahl, Bruce, Newhart; the comedy-LP era as three figure cards.
6. **The revolution (late 1960s–70s)** — Pryor, Carlin, Rivers; comedy becomes autobiography (dark interlude, now over a full-bleed `su_mic.png` mirrored so the lit vintage mic sits on the right, clear of the left-hand text).
7. **The boom (1972–1992)** — clubs then cable; a milestone timeline + a boom-and-bust note.
8. **Style branches out** — observational / one-liners / alternative / storytelling, as a top-down tree.
9. **Going global** — UK, India, the Arab world, South Africa, China; a colour-coded region ledger.
10. **The industry today (as of 2026)** — streaming specials, podcasts, short-form clips (three forces).
11. **Anatomy of a joke** — SET-UP → PUNCHLINE, plus premise / act-out / tag / callback.
12. **Why it matters** — free speech (Bruce, Carlin) and the intimacy of one voice (dark emotional peak).
13. **Curtain call** — closing bookend over a full-bleed `su_stage.png` (an empty amber-lit club stage) that mirrors the cover, with a compact sources line on the darkened left.

## Fonts & Colors
**Fonts (portable — installed on macOS + Windows):**
- **Georgia** — display face: headlines, pull-quotes, figure names, the concept-equation.
- **Arial** — body text (lining figures, so hero numerals/years stay uniform).
- **Courier New** — mono "chrome": tracked caps kickers, page markers (`03 / 13`), footers, the colophon labels. This typewriter-ish chrome is the template's quiet signature.
- One CJK term (脱口秀, slide 9) is tagged **Hiragino Sans GB** so it renders portably; substitute a local CJK font on non-mac machines.

**Colour system (a deliberate semantic contract, not decoration):**
- **Stage** `#1A140E` (warm near-black) · **Paper** `#F2EBDA` (warm ivory) — the two grounds that carry the dark/light rhythm.
- **Ink** `#24211A` (paper text) · **Ivory** `#F1E9D8` (stage text) · **Muted** `#8B8271` / `#9C9284`.
- **Stage-red** `#B02E24` (on paper, AA-safe) / `#D4402E` (brighter, on the dark stage) = *the comic's transgressive voice / the punchline* — the ONE hot accent, used only where it means that (the keyword in a headline, the mic, "break it", the pull-quote mark).
- **Brass** `#A9792E` = *chronology* — timeline dots, year badges, era markers, kickers on time-based slides.
- **Hairline** `#D8CFB8` for rules and card borders.
- **Harmonized category hues** (brass / teal `#2E6E64` / plum `#7A4A66` / olive `#4E6B34` / slate `#3B5C7A`) colour-code the branch and region entries without breaking the two-accent discipline — earth tones that sit quietly on paper, deliberately excluding the reserved vermilion.

> **Fonts:** This deck uses macOS system fonts. On Windows, install Noto Sans CJK SC / Source Han Sans to reproduce the exact look; otherwise your app substitutes a system font. The online preview is a pixel-accurate render, always correct.
