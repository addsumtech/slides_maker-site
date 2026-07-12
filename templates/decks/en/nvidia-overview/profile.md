# NVIDIA — Company & Product Overview

A flagship, presentation-grade example deck for the slide-maker public template gallery:
a company & product overview built as a real, fact-checked deck rather than a lorem-ipsum
mockup. It shows what a polished company-intro / product-matrix / customer-communication
deck looks like — and doubles as a reusable **visual system** you can keep and pour your
own company's content into.

## Template File

- `template.pptx` — the editable 16:9 deck (native text, shapes, and charts; fully editable
  in PowerPoint / Keynote).
- `render/slide01.png … slide16.png` — one PNG per slide (layout proof).
- `build_nvidia.py` — the source-of-truth build script (re-run to regenerate the deck).

## Summary

**What it is.** A 16-slide English overview of NVIDIA — company profile, milestones, the
full-stack platform, business model, revenue, a four-pillar product matrix (Data Center /
Gaming / Pro Visualization / Automotive & Robotics), the CUDA software moat, competitive
position, and a key-figures scoreboard. Every number is **web-verified against primary
sources** (NVIDIA SEC filings and press releases, GTC 2025, Jon Peddie Research, market-cap
trackers) as of July 2026; anything that could not be pinned to a clean source (e.g.
AI-accelerator market share) is stated **qualitatively** rather than invented.

**Where it fits.** Company introductions, investor/partner overviews, product-matrix
briefings, and customer-communication decks for any technology company — especially ones
that want a confident, engineering-flavoured dark look. It is deliberately a **self-read
reference deck**: each slide is self-sufficient on screen or as a PNG.

**How to reuse it.** Treat the *content* as a worked example and the *visual system* as the
reusable asset. Keep the structure, chrome, semantic-colour contract, and component choices;
swap NVIDIA's facts for your own. The palette, wordmark, "compute-grid" motif, and per-pillar
colour coding are all defined once in `build_nvidia.py`, so re-skinning to another brand is a
few edits — change the accent hue, the wordmark text, and the numbers, and the whole deck
re-themes. The point of a real-content example is exactly this: a proven visual system you
can trust, with content you replace.

## Structure

1. **Cover** — "The accelerated computing company." + positioning line and as-of date.
2. **Company at a glance** — identity facts (founding, founders, CEO, model) + a headline
   figures panel (revenue, market cap, net income, R&D).
3. **Full-stack platform** — the thesis: NVIDIA sells the whole stack (silicon → systems →
   networking → software → ecosystem), as a layered diagram.
4. **Milestones** — an alternating 1993–2025 timeline, plus a three-era summary band.
5. **The AI inflection** — revenue trajectory column chart (FY2023–FY2026, total vs Data
   Center) with a "$15B → $194B" takeaway rail. *(The money slide.)*
6. **Business model** — a design→fabricate→integrate→software→deploy value chain, plus
   "how it earns" and "why it holds" columns.
7. **Revenue by segment** — an FY2025 donut + leaderboard showing Data Center dominance.
8. **Product-line matrix** — the four hardware pillars as 2×2 cards over a spanning CUDA
   software band.
9. **Data Center & AI** — the architecture roadmap (Ampere → Rubin) + a GB200 NVL72 spec
   panel and the full data-center stack.
10. **Gaming** — GeForce RTX 50 (Blackwell) and DLSS 4 ("up to 8×").
11. **Pro Visualization** — the Omniverse digital-twin loop (real → twin → simulate → deploy)
    + RTX PRO and "why it matters".
12. **Automotive & Robotics** — a three-tier "physical AI" stack (Isaac / Jetson Thor / DRIVE).
13. **The moat** — CUDA: a "~6 million developers" hero + the software layers of lock-in.
14. **Competitive position** — market-share meter bars + a challengers panel (AMD / Intel /
    custom silicon).
15. **Key figures** — a six-tile KPI scoreboard.
16. **Close + sources** — "One platform, from graphics to the AI factory." + a sources strip.

## Fonts & Colors

**Fonts.** A deliberately portable, cross-platform pairing so the `.pptx` renders the same
everywhere:
- **Display & body:** Arial (bold for titles/heroes, regular for body) — lining figures keep
  the many big numbers clean and baseline-aligned.
- **Chrome / mono:** Consolas — the ">_" tracked eyebrows, footer tag, and page markers, for a
  quiet "engineering terminal" voice. (Substitutes to a default monospace if Consolas is
  absent; swap `deckkit.MONO` for a locally-installed mono to control it.)

**Colours.** A near-black canvas with one signature brand hue and a strict semantic contract:
- **Canvas:** `#0B0E10` near-black (base) and `#07120B` green-black (hero / cover / close).
- **Panels & lines:** `#141A1E` panels, `#2A343B` hairlines; ink `#EDF2EE`; muted `#94A0A2`.
- **NVIDIA green `#76B900`** (bright `#9BE01E` for small text) — *the* brand hue, bound to the
  company, Data Center, and the growth story. It is the deck's one dominant accent.
- **Pillar hues, used only for their pillar:** cyan `#2FB6E6` = Gaming · violet `#A585F5` =
  Pro Visualization / Omniverse · amber `#F2A93B` = Automotive & Robotics · steel `#7C8A92` =
  OEM / neutral / competitors.

Colour carries meaning here: a hue always stands for the same thing across all 16 slides,
which is what makes the deck read as one system rather than a set of styled pages.
