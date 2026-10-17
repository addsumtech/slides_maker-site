# Engineering Drawing · Thesis Defense Deck Template (Example: Shannon's 1937 Master's Thesis)

## Template File
`template.pptx`: 16 slides, 16:9 (13.333 × 7.5 in), entirely in English and fully native and editable. The circuit drawings, dimension lines, part balloons, equations and charts are all native PowerPoint shapes and text; there is not a single bitmap illustration.
Companion files: `build_shannon.py` (the reproducible build script and the template's source of truth; `python3 build_shannon.py --png` also exports 1920×1080 renders), `circuitdraw.py` (a relay-contact network drawing library: one structure draws both the circuit and its Boolean expression), `facts.py` (every fact and its source), and `render/slide01–16.png` (per-slide renders, 1920×1080).

## Summary
This is an "engineering drawing" template for **thesis defenses**, built in slide-maker's **`drafting` visual language**: a vellum ground, a drafting grid, a double-ruled border, zone numbering, a title block at bottom right (sheet number counts up page by page), numbered balloons with leader lines, and dimension lines. Main sheets use the light vellum ground; **the backup Q&A sheets switch to a cyanotype blueprint ground**, like the blueprint copies kept in a drawer and pulled out only when the committee asks a question.

**Real content, not placeholders.** The example defends a real classic: Claude Shannon's 1937 MIT master's thesis, *A Symbolic Analysis of Relay and Switching Circuits* (published in the AIEE Transactions in 1938). The cover says "Sample defense", and the presenter field reads "Sample"; it never poses as Shannon himself. Dates, degree, advisor, publication details, postulates, derivation, case figures and historical assessments were each checked against the original text or a reliable source, with the source cited at the foot of every sheet. Assessments whose original page could not be checked are marked "as quoted".

**Signature device: "algebra as dimension".** The dimension lines on the circuit drawings do not give lengths; they give that stretch of circuit's Boolean expression (Shannon's hindrance notation: series is plus, parallel is times). The device runs through sheets 1, 6, 9, 13 and 15. Sheet 9 sets the paper's Figures 5 and 6 side by side at the same scale: 13 contacts reduced to 6, with the behavior unchanged. The build script verifies the two expressions are equivalent using Shannon's own method of perfect induction, checking all 64 switch combinations. Vermilion means only "Shannon's notation and results"; page chrome is always in ink blue.

**Good for:** master's and PhD defenses, proposal and mid-term reviews, close readings of methods papers, and academic talks in engineering, circuits or algorithms, especially STEM content that needs "figure + equation + derivation + source".

**Why it is reusable:** content and visual system are kept apart. The layout skeleton (drawing sheets, title block, balloons and leaders, dimension lines, equation chains, parts lists, backup sheets) stays as is; replace the facts in `facts.py` and the wording in `build_shannon.py` and it fits your own thesis. `circuitdraw.py` can draw any series-parallel network, and `year_ranges()` can draw any "parallel work" year comparison. To change content, edit the scripts and rebuild rather than editing the binary by hand, so the deck stays reproducible.

## Structure
1. **Cover**: thesis title, "Master's thesis, MIT, submitted August 10, 1937", and "Presenter: Sample"; on the right, the real circuit of the paper's Figure 6, with its hindrance function on the dimension line above and a chain of dimensions labeling each segment below.
2. **Drawing index · Thesis record**: a clickable 14-row drawing index; on the right, the thesis record set like a title block (title, author, department, submission date, degree, advisor, publication).
3. **Background**: Detail A, a relay coil driving make and break contacts (numbered balloons and a parts list); on the right, three points: where these circuits were used, and the paper's own verdicts that analysis was "very tedious and open to frequent error" and synthesis was "cut and try".
4. **Research question**: one big question, with three sub-questions split along a dimension chain below it (analysis / synthesis / simplification), each labeled and linked to the sheet that answers it.
5. **Related work**: the title says it straight: "Others came close; Shannon built a usable calculus". The upper half is a timeline, Boole 1854 → Peirce 1886 → Huntington 1933 → Nakashima → Shestakov → Shannon 1937 (marked not to scale); the lower half is a to-scale year axis that uses dimension lines to compare the spans of three parallel lines of work, with an arrow showing work that continued.
6. **Method · hindrance notation** (signature sheet): three circuit drawings, series, parallel and break contact, with X + Y, XY and X′ on their dimension lines; a general note at top right (0 closed / 1 open).
7. **Method · postulates and duality**: Postulates 1–4 in dual a/b columns (native equations), the duality principle in the paper's words, and the paper's Table I (circuits ↔ propositions).
8. **Key derivation**: a five-line native equation chain for the Figure 5 hindrance function, each step tagged with the theorem it uses (17b, 3a, 6b, 4b), and Theorem 17b at the bottom.
9. **Before and after** (core evidence sheet): Figures 5 and 6 side by side at the same scale, each with its Boolean expression on the dimension line; under the central "SIMPLIFY" arrow, 13 → 6 contacts in large type.
10. **Applications**: first one step of synthesis, U = S₁,₃,₄(w, x, y, z) → draw Figure 31; then zero-based dimension bars comparing 20 / 15 / 14 elements for the selective circuit; on the right, a parts list of the other four examples (electric combination lock, vote-counting circuit, binary adder, factor-table machine).
11. **Results and contributions**: three contributions, each tagged with the drawing sheets that prove it (clickable); on the right, two historical assessments (marked as quoted and paraphrased) and the prize year (1939, some sources say 1940).
12. **Limitations and influence**: the left column gives the paper's three self-stated limitations, the right column the later work each arrow points to (Veitch, Karnaugh map, Quine–McCluskey, Huffman).
13. **Conclusion**: a reprise of Figure 6 and its algebra dimension, with balloons 1–3 keyed to three conclusions on the right: circuits can be written as algebra, algebra can simplify circuits, relays can do logic.
14. **Acknowledgments**: thanks to the committee; below it, a drawing-style approval block listing advisor F. L. Hitchcock, Bush and Caldwell (also thanked in the published version), and "Presenter: Sample · not Shannon himself".
15. **Backup Q&A sheet A** (cyanotype ground): "Why is series written as plus?" with the same circuits dimensioned in both notations; "Did anyone get there first?" with a year-axis comparison. The sheet carries back links.
16. **Backup Q&A sheet B** (cyanotype ground): "Is the simplest circuit guaranteed?" with a scope table; "What about timing and delay?" with an X(t) / X(t − p) timing sketch and a delay dimension p.

## Fonts & Colors
**Typefaces (paired by role)**
- Page titles / display: Georgia.
- Body: Georgia.
- Labels / kickers / title block / sheet numbers: Courier New, like the lettering on an engineering drawing.
- Type scale (unified in the build script): 34 hero question · 28 page title · 22 equation · 16 sub-head · 13.5 body · 12 small body · 10.5 notes and sources.
- Numerals and equations: Times New Roman (serif lining figures); equations are native text, with italic variables and real, editable sub- and superscripts.
- Any CJK fallback is pinned to Hiragino Sans GB, never PingFang, because LibreOffice on this machine substitutes a handwriting face for PingFang when rendering.

**Colors (semantic: one color, one meaning)**
- Vellum ground `#F1EFE8`, drafting ink blue `#1E3A5F` (line work, body text, neutral information), secondary ink `#3E5674` (notes, sources).
- **Vermilion `#B8401A` (text) / `#E2552C` (fill) = Shannon's notation, the simplified result, the highlighted answer.** It is used in this one sense throughout; kickers, sheet numbers, balloon numbers and other page chrome stay ink blue.
- **Cyanotype ground `#123254` + pale blue-white line `#E4ECF5` + orange `#F27D4E` / `#F59A72` = backup Q&A sheets**, appearing only on sheets 15–16.
- All body text meets a contrast ratio of at least 4.5:1 against its ground.

Font substitution: the deck is set in Georgia, Courier New and Times New Roman, all available on both macOS and Windows. Hiragino Sans GB (a macOS system font) is only the CJK fallback; if you add Chinese text and open the deck on Windows, switch the CJK font to Microsoft YaHei (or change `EA` at the top of `build_shannon.py` and rebuild).
