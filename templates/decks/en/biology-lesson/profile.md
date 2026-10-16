# Chalkboard · Middle-School Biology Lesson Template (sample lesson: *Photosynthesis*)

## Template File
`template.pptx` (16:9, 13.333 × 7.5 in, 15 slides, English, every shape and word native and editable). Per-slide renders are in `render/slide01.png … render/slide15.png` (1920×1080). The build script `build_photosynthesis.py` is the deck's source of truth; run it again to reproduce the deck exactly. This is the English edition of the Chinese deck: same design, same visual language, every string translated. The Chinese original is kept in `_record/zh_original/`.

## Summary
A **classroom lesson** template built in slide-maker's **`chalkboard` visual language**. It uses a real, teachable middle-school biology lesson, *Photosynthesis*, as **genuine sample content**, and fills out the complete shape of a lesson: a warm-up question, learning goals, three history-of-science slides, the word equation, the site, a process diagram, limiting factors, a class experiment, real-world uses, a whole-board summary, practice questions, answers and homework. Every slide carries the teacher's spoken script in the speaker notes, so it is ready to teach from.

Good for: **new-topic lessons, revision lessons, open or demonstration lessons in any middle- or high-school subject, parent open days, popular-science talks and school-based courses**, and also for short corporate training sessions of the "explain one idea, then practise it" kind. Anything where the teacher writes on the board while students listen and copy can use it directly.

**Key point: this is "real sample content + a reusable visual system".** Every year, name, number, experiment and conclusion in the deck can be checked, and the sources are given in the footnotes: van Helmont's willow experiment (*Ortus Medicinae*, 1648); Priestley's mint-and-candle and mouse experiments (*Phil. Trans.* 62, 1772); Ingenhousz (*Experiments upon Vegetables*, 1779); and Sachs (Britannica entry: 1862 and 1864). Where no exact year could be pinned down, the wording is qualitative: Sachs is dated "1860s", and the class experiment is described as "following Sachs's idea", so the textbook procedure is never passed off as his original experiment. What you really reuse is the **board-work visual system**: swap in your own lesson content and you get a deck with the same feel.

**Signature move (a controlled aesthetic risk): "the board line that grows."** At the foot of every board sits the same line of board work: the word equation for photosynthesis. The slot for each term never moves across the deck; only what is written in it changes.

- Cover and slide 3 (learning goals): all blanks and question marks, with the line "Today, we fill in this line" beside it.
- Slides 4 and 5: each scientist adds one term, and the newly written term is in yellow chalk. Van Helmont adds "water", Priestley adds "oxygen", Ingenhousz adds "light energy".
- Slide 6: the line is blown up to fill the page, with brackets marking raw materials, condition and products, and under each term the name of whoever's work put it there.
- Slides 7–11: a yellow chalk ring marks the term the slide is about. The site slide rings "chloroplasts", the factors slide rings "light energy" and "carbon dioxide", and the process slide marks "in" and "out" under the line.
- Slide 13 (practice): the line is **erased**, leaving chalk dust, and students write it from memory.
- Slide 14 (answers): the whole line is written back in yellow chalk as the answer to question 1.

Slide 12 (summary) is the whole board: the equation as the top line, three columns under it, and one sentence at the bottom answering the question from the start of the lesson.

This device keeps the deck from being "a PowerPoint with a blackboard background". It reads like a teacher filling one board over the course of a lesson: whichever slide a student turns to, they can see how far the lesson has got.

## Structure
01. **Cover**: title "Photosynthesis", subtitle "How a green leaf uses sunlight to turn carbon dioxide and water into food"; a green-chalk leaf and a yellow-chalk sun; the empty board line at the bottom with "Today, we fill in this line"
02. **Warm-up · Make a guess**: the big question in a pink chalk box, "A little willow grows into a big tree. Where does its new mass come from?"; four chalk rings: Soil? / Water? / Air? / Sunlight?, each with a "Vote" blank underneath
03. **Learning goals**: Write / Explain / Apply, three numbered goals in rings; the fully blank board line at the bottom
04. **History ① van Helmont**: a chalk before-and-after table (willow 5 lb → about 169 lb; soil 200 lb, only ~2 oz lighter), a yellow ring on "~164 lb more"; "His conclusion" and a pink "Think about it" on the right; "water" goes on the board
05. **History ② ③ 1771 → 1779**: left panel Priestley, with candle and mouse each tested "no plant / add mint"; right panel Ingenhousz, three cases: in sunlight, in the dark, non-green parts; "oxygen" and "light energy" go on the board
06. **The word equation (signature slide)**: the equation blown up to the whole page, brackets for raw materials, condition and products, the site marked under the arrow; under each term, the scientist who supplied it; the standard textbook definition in a box at the bottom
07. **Site · chloroplasts**: a chalk zoom chain: leaf → mesophyll cell (green bodies, nucleus with a leader line) → chloroplast; two key-sentence boxes; "chloroplasts" ringed on the board
08. **Process diagram**: one big leaf on its stalk. Carbon dioxide comes in and oxygen goes out through the stomata; water travels up in the xylem and organic matter down in the phloem. Light at the top. "in" and "out" marked under the board line
09. **What affects photosynthesis**: three boxes for light intensity, carbon dioxide and temperature, each with a qualitative chalk curve and a note that the curves show trends only, with no real values; "light energy" and "carbon dioxide" ringed on the board
10. **Class experiment · Green leaves make starch in light**: five steps, destarch → cover → decolor → iodine → observe, each with what to do and "why"; below, the result leaf (blue hatching where it was lit, a blank band where it was covered), a conclusion box and a blue safety box (heat the alcohol in a water bath)
11. **In real life · greenhouses**: a chalk-drawn hoop greenhouse with seedlings and a grow light; four practices sorted into "make more" and "use less", each pointing to one term on the board line
12. **Lesson summary (whole board)**: the equation as the board's top line, then three columns: how we found out, what it is (uses / needs / site / makes), evidence and uses; at the bottom, the answer to "back to our question"
13. **Practice**: three questions (write the equation from memory / multiple choice on the purpose of the dark treatment / explain why extra carbon dioxide raises greenhouse yields); the board line erased, leaving chalk dust and question marks
14. **Answers**: worked answers, including why A, C and D are wrong in the multiple-choice question; the board line written back in full in yellow chalk
15. **Homework**: three tasks (copy the board line / answer the opening question / explain the reasons behind the experiment steps); the completed board line at the bottom, and a preview of the next lesson

## Fonts & Colors
**Typeface (one family, by role)**
- All text: **Chalkboard SE** (the macOS face of the `chalkboard` visual language, `vl.use(..., fonts="mac")`). It has a hand-chalked feel, and its figures are lining figures of equal height, so years and "164 lb" never bob up and down. The English edition has no Chinese text, so the East-Asian face (Hiragino Sans GB) the language assigns to CJK is not used; **PingFang is never used**, because LibreOffice substitutes a handwriting face for it.
- Type scale: slide titles 34pt (slide 8: 32pt); warm-up question 36pt; slide 6 equation 25pt; board line 22pt (labels above and below the arrow about 16pt); body text 17–22pt; footnote sources 12pt. Median body size is about 17–18pt, set so the back row of a classroom can read it.
- Size adjustments from the Chinese edition, made only where the longer English words would not fit and only on that slide: warm-up question 40 → 36pt (slide 2), process-slide title 34 → 32pt (slide 8), page-scale equation 30 → 25pt (slide 6), summary labels 19 → 16pt (slide 12). The script's width estimate for Latin characters was recalibrated from 0.62 em to 0.50 em to match Chalkboard SE (measured at about 0.47 em). That keeps the board-line slots, rings and underlines hugging the English words the way they hugged the Chinese ones, and lets the board line stay at 22pt.

**Colour (chalk meanings, one colour, one meaning)**
- Board green `#22392B`, wooden frame `#7A4F2A`, one stick of chalk in the chalk tray. These are the visual language's own ground with a fine grain; no colours were adjusted by hand.
- **White chalk `#F3F1EA`**: the teacher's explanation. **Grey-white `#C9D3C9`**: secondary notes, sources, blanks.
- **Yellow chalk `#F2D16B`**: key points. That covers conclusions, the term newly written on the board on that slide, the term the slide is about (ringed or boxed in yellow), and category labels such as raw materials / condition / products.
- **Pink chalk `#F2A9B8`**: the teacher is asking. That covers the section label in each header, the warm-up question box, "Think about it", and the boxes for learning goals, practice, answers and homework, plus every "Why".
- **Blue chalk `#A4CDE6`**: hands-on. Experiment step boxes, the safety reminder, the blue iodine result.
- **Green chalk `#B6E388`**: only the plant itself, that is leaves, chloroplasts and seedlings, never text.
- All text clears 4.5:1 contrast against board green (measured: white 11.0:1, grey-white 8.1:1, yellow 8.4:1, pink 6.6:1, blue 7.4:1). Colour never carries meaning alone: every yellow highlight also has a ring or box, and the blanked board line on the practice slide is also blanks and question marks.

**Three heading treatments, one meaning each**: a yellow double underline means new knowledge; a pink chalk box means the teacher is asking students to do something (goals, practice, answers, homework, the warm-up question); a centred title with no rule means the slide itself is the board (slides 6 and 12). Arrows appear only where there is an order or a direction, such as the chronology of discovery, the zoom chain, materials moving in and out, the experiment steps and the equation's own arrow.

**Graphics**: everything is hand-drawn with `native_art` chalk strokes, and each piece can be selected and edited in PowerPoint: leaves, cells, chloroplasts, the greenhouse, the qualitative curves, rings, boxes, brackets and arrows. Icons are from the lucide family, recoloured in chalk colours. No photos, no AI-generated images.

This template uses the macOS system font Chalkboard SE. On Windows, swap in Trebuchet MS (the cross-platform face of the `chalkboard` visual language), then re-run `build_photosynthesis.py` so the board-line slots are measured again.
