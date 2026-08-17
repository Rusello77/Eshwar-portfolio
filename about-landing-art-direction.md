# Art Direction — About & Landing
### The gallery spaces around four locked exhibits

Scope confirmed: `about.html` and `index.html` (hero + Work section only). The four case studies — Beyond the Household, Juno, Beyond the Prompt, Janapada — are not touched, discussed, or referenced as things to improve. Typography (Lora + Plus Jakarta Sans) stays exactly as-is. Everything below is composition, hierarchy, rhythm, color extension, and motion.

---

## Part 1 — Why these two pages read as assembled, not art-directed

This isn't a criticism of execution — the code is clean, accessible, responsive. The problem is one level up, in the *decisions*, and it's the same problem in five places.

### 1.1 One shell, reused on repeat
Every section on About — How I Think, Experience, Education, Toolkit — is the identical scaffold: eyebrow label → numbered index (`01 —`, `02 —`) → serif heading → intro line → a grid of equal-sized bordered cards. Swap the words and any section could be any other section. When the container never changes shape, nothing in it can feel foregrounded — the philosophy statement (the most personal, differentiating content on the page) gets exactly the same visual weight as a toolkit list of software icons.

### 1.2 The card is doing too much work
`.principle-card`, `.exp-card`, `.tool-tile`, and `.project-card` (on Landing) are all the same idea: white rectangle, ~14–16px radius, 1px gray border, internal padding. This is the most recognizable "AI-portfolio" component — a white rounded box with a hairline border — and it appears **four separate times** across the two pages. Once a component repeats that often with no variation, it stops reading as a design decision and starts reading as a default.

### 1.3 About is still a résumé, just with better paragraphs
Structurally, the page is Hero → Experience → Education → Toolkit → Languages — which is the exact information architecture of the reference résumé image. The new "How I Think" section is genuinely good writing, but it's boxed into the same three-card grid as everything else, so it doesn't get to *be* the thing the page is about. The brief asked for an editorial introduction; what exists is a résumé with an editorial paragraph bolted on top.

### 1.4 Landing's Work section is, literally, a list of projects
Two-column grid, four equal cards, same padding, same tag pills. The "Research → Product" connector between rows is a genuinely good idea — it's the one place on either page trying to say something structural — but it's executed as a thin gray line with a small label, so it reads as a divider, not a curatorial statement. It deserves to be the loudest quiet thing on the page, and right now it's the quietest.

### 1.5 The two heroes are the same hero
Landing hero: eyebrow, name, one paragraph. About hero: eyebrow, headline, one paragraph, plus a photo. Same type sizes, same spacing rhythm, same left-aligned single block. A visitor landing on either page in isolation would struggle to tell they're different "moments" in the same visit — the entrance and the introduction should not feel identical.

### 1.6 What's already right — keep this
- The cream/green/ink palette. It's not a mistake — it's the one thing that already ties research-led, growth- and community-themed work (homemakers, folk heritage, community platforms) to a natural, grounded palette. Extend it; don't replace it.
- The Lora/Plus Jakarta Sans pairing — serif for voice, sans for structure — is the correct pairing for an editorial-meets-interaction-design portfolio. Just not used with enough restraint yet.
- The "Research → Product" connector concept and the tag taxonomy already on the locked project cards (`UX Research` / `AI Research` vs `Product Design` / `Game Design`) — this is a real, true structural fact about the four projects, not an invented one. It's the strongest asset on the landing page and it's currently underused.
- The portrait. Keep it as the emotional anchor of About — just stop presenting it like a profile photo and start presenting it like the one framed object in the room.

---

## Part 2 — The direction: **Field & Frame**

**The idea, in one line:** *You are walking through a small, considered gallery. Before you reach the exhibits, someone hands you the curator's note.*

This isn't a new metaphor invented for its own sake — it's the brief's own language, taken literally. You described these two pages as "gallery spaces that frame the exhibits" and asked for an "architectural introduction." Field & Frame builds exactly that:

- **Field** — the grounding. This designer's actual practice is fieldwork: household research, agentic-tool research, community design, cultural heritage. The About page becomes the *field notes* — the observing, thinking voice behind the work — not a résumé.
- **Frame** — the presentation. The Landing page becomes the *gallery walk* — four plates, curated and sequenced, not a grid of product cards.

Both pages already point at this — the brief's own vocabulary ("editorial," "curated exhibition," "architectural introduction") is the direction. This document just gives it a system.

### 2.2 Why this is authentic, not decorative
Every project in the locked Work section already earns this: two research studies followed by two product/design outcomes is a real sequence, not an invented one. The existing tag pairs (`UX Research`/`AI Research` → `Product Design`/`Game Design`) already encode "research becomes product." The gallery-walk structure doesn't dress this up — it just finally gives it room to be seen.

### 2.3 System evolution

**Color** — extend, don't replace.
| Token | Value | Role |
|---|---|---|
| `--paper` (was `--cream`) | `#F5F1E8` | unchanged — the gallery wall |
| `--green` | `#5A8B6F` | unchanged — becomes a *precious* accent, not a default fill |
| `--ink` *(new)* | `#16241C` | a warm, botanical near-black (not pure black — stays in the green family). Used for one deliberate dark "room" per page, and for the portrait mat. |
| `--dark`, `--mid`, `--border` | unchanged | body text and structure |

Rule: `--green` may only be used for (a) eyebrow/plate-number labels, (b) the pull-quote rule and text, (c) hover states, and (d) the Research→Product divider band. It should **not** appear as a fill color on chips, badges, or card backgrounds anywhere on these two pages. Spending it everywhere is why it currently reads as decoration instead of a signature.

**Typography** — same two families, used with more contrast.
Right now every section heading uses Lora at roughly the same size (28–40px). Reserve Lora's large sizes for exactly **three** moments total across both pages: the Landing name lockup, the About opening line, and the pull-quote. Every other section heading (Experience, Education, Toolkit, the Work section intro) downgrades to Plus Jakarta Sans — bold, uppercase, tracked, small — functioning as a *label*, not a headline. This is the single highest-leverage change: it makes the serif feel earned instead of automatic.

**Radius & border language** — from "app" to "print."
Rounded cards with hairline borders read as software UI. Move toward the language of a printed catalogue: thin full-width rules instead of boxed cards, sharp or barely-rounded corners (0–4px, down from 10–16px), generous whitespace instead of padding-inside-a-box. The one place radius can stay soft is the nav and any button — everything content-bearing should feel laid out on a page, not contained in a component.

**Grid** — break symmetry deliberately.
Replace repeated equal-column grids with one asymmetric ratio used consistently (roughly 5:7 or 4:8) for anything that's a *statement* (hero text, the pull-quote), and a tight, dense, single-column list for anything that's *reference* (experience, education, toolkit). Reference material should visibly recede; statements should visibly expand.

**Motion** — one orchestrated moment, not scattered effects.
On page load: hero elements settle in with a short staggered fade + 8–12px upward translate (label → heading → subtext, ~80ms apart) — like gallery lights coming up, not a bounce. On scroll: each Work "plate" and the About index rows fade in once, individually, via IntersectionObserver — no parallax, no looping ambient animation. Respect `prefers-reduced-motion` by disabling all of it.

**The signature motif.**
A single thin vertical rule (the "spine") plus small catalogue-style numbering — `Plate 01`, `Plate 02` — used at exactly two places: the four Work entries, and nowhere else. Numbering that appears on every section (as it does now — 01/02/03/04 on About sections *and* 01/02/03/04 on project cards) stops meaning anything. Restricting it to the one place where a real sequence exists (the four projects) is what makes it feel intentional instead of templated.

---

## Part 3 — About page: new composition

Three movements instead of five stacked sections. Nothing truthful is removed — Experience, Education, Toolkit, and Languages all remain, consolidated into one quieter appendix instead of three separate card-grid sections.

```
┌─────────────────────────────────────────────┐
│  MOVEMENT 1 — Opening                        │
│  eyebrow · one distilled line (Lora, large)  │
│  portrait, framed on --ink mat, offset right │
├─────────────────────────────────────────────┤
│  MOVEMENT 2 — The Note                       │
│  large pull-quote (THE Lora moment of        │
│  the page) · philosophy paragraph            │
│  quiet inline list: how I work (3 lines,     │
│  not 3 cards)                                │
├─────────────────────────────────────────────┤
│  MOVEMENT 3 — The Index                      │
│  Experience / Education / Toolkit / Languages│
│  as one unified ledger — small type,         │
│  hairline rows, no cards, no colored tiles   │
├─────────────────────────────────────────────┤
│  Closing note + footer                       │
└─────────────────────────────────────────────┘
```

**Movement 1 — Opening.** Drop the paragraph-length bio from the hero; keep one line only (the current `hero-bio` can move down into Movement 2, where it belongs alongside the philosophy). Restyle `.hero-portrait`: replace the soft drop-shadow/rounded-corner treatment with a hard-edged frame — a 24–32px `--ink` mat around the image, 2–4px radius max, positioned asymmetrically (not centered against the text block) so it reads as a hung object, not a headshot.

**Movement 2 — The Note.** This is where `.pull-quote` and `.philosophy-line` move to, and where they become the single largest piece of type on the page — bigger than the hero name. The three principle cards (`Research & strategy`, `Design & systems`, `Narrative & craft`) lose their card treatment entirely: no white box, no border, no chip pills. Present them as three short lines in a single column beneath the philosophy paragraph, each a title + one sentence, separated by hairline rules — supporting the voice above, not competing with it.

**Movement 3 — The Index.** Merge Experience, Education, Toolkit, and Languages into one section titled once (e.g. "Index" or "In brief" — label-style, sans-serif, small). Each entry becomes a single row: company/school name, role/degree, and duration/years right-aligned, separated by a 1px hairline — no logo tiles in colored boxes, no bordered cards, no 3-column grid. Toolkit becomes a plain grouped list (label + inline row of tool names, icon optional and small — 20px, not 36px in a bordered tile) rather than a wall of bordered tiles. This is what makes the page stop feeling like a résumé: the résumé content still exists, truthfully, but it's been demoted to reference material sitting quietly under the editorial voice, instead of leading with equal weight.

**Confirm before implementing:** the current `about.html` already does **not** contain any language about skin colour or identity — the "How I Think" section is already the storyteller/philosophy content you want. No content removal is needed there; just carry the copy forward into Movement 2 unchanged.

---

## Part 4 — Landing page: new composition

```
┌─────────────────────────────────────────────┐
│  ENTRANCE                                    │
│  large, generous — more air than About's     │
│  hero. eyebrow · name (largest Lora on the   │
│  site) · one positioning line                │
├─────────────────────────────────────────────┤
│  THRESHOLD                                   │
│  short curatorial intro line + hairline rule │
│  (replaces the flat "Work / 4 projects" bar) │
├─────────────────────────────────────────────┤
│  PLATE 01 — Beyond the Prompt   (locked copy)│
│  PLATE 02 — Beyond the Household(locked copy)│
├───────────── Research → Product ─────────────┤
│         (full-width --ink divider band)      │
├─────────────────────────────────────────────┤
│  PLATE 03 — Juno                (locked copy)│
│  PLATE 04 — Janapada            (locked copy)│
├─────────────────────────────────────────────┤
│  footer                                      │
└─────────────────────────────────────────────┘
```

**Entrance.** Increase top/bottom padding well beyond About's hero (roughly 1.4–1.6× the vertical space) so this page visibly announces itself as the front door, not a repeat of About's opening. Keep the copy exactly as it is (label, name, one bio line) — this is about scale and air, not new words.

**Threshold.** Replace `.projects-header` (the small "Work / 4 projects" utility bar) with one short, quiet curatorial line above a single hairline rule — a sentence that frames what's coming (e.g. describing the collection as research-led product design across four studies). This is new copy you're free to write, since it's framing text, not project content — but it must not touch, summarize, or editorialize on any individual project.

**Plates.** Each of the four projects becomes a full-width horizontal composition instead of a boxed card in a 2-column grid:
- Left rail (fixed width, ~120px): the plate number (`Plate 01`) in the small green label style, plus the existing tags stacked vertically instead of in a horizontal pill row.
- Main column: the project title at large Lora size (bigger than it is now — this is the second-largest serif moment on the site after the About pull-quote), the locked description paragraph exactly as written, and the arrow link.
- No card border, no box shadow, no rounded rectangle. A single 1px hairline rule separates each plate from the next, full container width.
- On hover: the title shifts to `--green` and the arrow slides right — keep this interaction, it already works well.

**Research → Product divider.** Promote the existing connector from a thin gray line to a full-width `--ink` band (short vertical padding, ~48–64px) spanning the container, with the label centered in the small green uppercase style. This is the one moment on the whole page that gets the dark "gallery wall" treatment — it should feel like turning a corner into the next room, not a decorative rule between rows.

**Mobile.** Plates stack with the left rail (number + tags) moving above the title instead of beside it. The ink divider band keeps its full-width treatment at reduced padding. Nav behavior is unchanged.

---

## Part 5 — Implementation guide for Claude Code

This section is written to remove decisions, not require them. Follow it directly.

### 5.1 Absolute constraints — do not violate
1. Do not open, edit, or reference `beyond-the-household` / `research-project.html`, `case-study-v3.html` (Juno), `beyond-the-prompt.html`, or `janapada.html`. They are out of scope entirely.
2. Do not change any project title, subtitle, description, tag, order, or link inside the Work section of `index.html`. Copy the existing `<a class="project-card">` blocks' text content verbatim into the new plate structure.
3. Do not change the font stack. `Lora` and `Plus Jakarta Sans` remain the only two families, loaded exactly as they are now.
4. Do not remove the truthful content on About (companies, roles, durations, schools, years, tools, languages) — only restructure its presentation per Part 3, Movement 3.
5. Keep both pages' existing nav, footer markup/behavior, and mobile hamburger logic as-is structurally; only restyle to match the new tone (hairlines over borders, `--ink` where `--dark` is currently used for the footer background is already correct and can stay).

### 5.2 Token updates (apply in both files' `:root`)
- Add `--ink: #16241C;`
- Keep all existing tokens (`--cream`, `--white`, `--green`, `--green-light`, `--green-mid`, `--green-dark`, `--dark`, `--mid`, `--border`) unchanged.
- Global radius reduction: anywhere a card/box currently uses 10–16px radius and is being converted to a plate/ledger-row treatment, remove the radius and the border, and use a `1px solid var(--border)` full-width rule instead (top or bottom, per the wireframes above). Nav and buttons may keep their existing small radius.

### 5.3 About page — section-by-section build order
1. **Hero:** shorten `hero-bio` copy down to a single line in place (move the rest of the current paragraph down into the new Movement 2 quote/philosophy area). Restyle `.hero-portrait` container: replace the current shadow-only treatment with a `24–32px` `--ink` background mat behind the image (image sits inset within it), radius reduced to `2–4px`. Shift the two-column grid so the portrait is offset — e.g. push it slightly right and let the text column take ~55% width instead of an even split.
2. **Merge "01 — How I Think" into "The Note":** increase `.pull-quote` font size to become the largest serif moment on the page (larger than `.hero h1`). Remove card treatment from `.principles-grid` — convert the three `.principle-card` blocks into a single-column stacked list: title (small, bold, green) + one-line body, separated by a 1px `--border` rule, no background, no padding-box, no `.skill-chip` pills (replace chip rows with a plain comma-separated inline text line in `--mid`).
3. **Remove section headers for Experience, Education, and Toolkit as separate `.section` blocks.** Combine them into one `.section` titled once (small sans-serif label, not Lora). Within it:
   - Experience rows: company (bold) + role (`--mid`) on the left, duration (small, green, right-aligned) on the right, one row per company, 1px hairline between rows. Drop the `.exp-logo-tile` colored box — if logos are kept, render them small (28–32px) and inline before the company name, not in a separate bordered tile.
   - Education rows: same row pattern — school + degree left, years right.
   - Toolkit: group labels stay (Design & Prototyping / Visual & Media / AI-assisted Workflow) but render as an inline wrapped list of tool names with small icons (20px) rather than bordered `.tool-tile` boxes.
   - Languages: fold into the same ledger as a final row group (language — proficiency), dropping the separate bordered-columns treatment.
4. **Closing CTA:** keep the two actions (See the work / Download résumé) but remove the light-green filled background box; present as a simple full-width row with a top hairline rule, consistent with the new ledger tone.

### 5.4 Landing page — section-by-section build order
1. **Hero:** increase vertical padding substantially beyond the current `100px 0 80px` — target roughly `160–200px` top and `100–120px` bottom on desktop, scaling down responsibly on mobile. No other copy or structural change.
2. **Replace `.projects-header`:** remove the label+count utility bar. Add one new short line of framing copy above a single full-width hairline rule (new copy, about the collection, never about individual projects).
3. **Rebuild `.projects-grid` as a stacked plate list:** each `.project-card` becomes a full-width row with a fixed-width left rail (plate number + vertically stacked tags) and a main content column (title, locked description, arrow). Remove card border, background box, and shadow; add a `1px solid var(--border)` rule beneath each plate.
4. **Promote `.rp-connector`:** convert it from an inline thin-line-with-label into a full-width `--ink` background band (own full-bleed section, not confined to the container width) with the existing label centered inside it in the small uppercase green style (on the dark background, use a light tint of green or `--paper` for contrast — do not use `--dark` text on `--ink`).
5. **Mobile:** stack the rail above the title/description within each plate; keep the ink band full-width at reduced padding.

### 5.5 Motion
- Hero (both pages): on load, fade + translateY(10px→0) the eyebrow, then heading, then subtext, staggered ~80ms apart, total duration under 600ms, ease-out.
- Work plates and About ledger rows: fade + translateY(8px→0) once when scrolled into view (IntersectionObserver, `threshold: 0.15`), not repeating.
- Wrap all of the above in a `prefers-reduced-motion: reduce` check that disables the transform/opacity animation and shows content immediately.

### 5.6 QA checklist before calling this done
- [ ] No case-study file was opened or edited.
- [ ] All four project titles, subtitles, descriptions, tags, and links on Landing match the current `index.html` exactly, character for character.
- [ ] Only `Lora` and `Plus Jakarta Sans` are loaded; no new `@font-face` or Google Fonts link added.
- [ ] Every fact currently on About (companies, roles, durations, schools, years, tools, languages) is still present somewhere on the page.
- [ ] `--green` is not used as a background fill anywhere except the Research→Product band (as a light tint on ink) and hover states.
- [ ] At most three Lora moments exist across both pages at "large" size: Landing name, About opening line, About pull-quote.
- [ ] No card on either page uses both a border and a border-radius above 4px, except the nav and buttons.
- [ ] Reduced-motion users see static, fully-visible content.
