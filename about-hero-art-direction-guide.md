# About Page Hero — Art Direction & Implementation Guide
### For: `about-v2.html` — the `.hero` section only ("MOVEMENT 1 — OPENING")
### Prepared for implementation by Claude Code

---

## 0. Scope correction

This replaces the previous guide as the actual deliverable. The target is the `.hero` section of
`about-v2.html` — the block the file itself already labels `MOVEMENT 1 — OPENING`, containing the
`hero-eyebrow` ("About"), the `<h1>` ("Hello, I'm Eshwar."), the `hero-intro` bio paragraph, and the
`hero-portrait-frame` (the portrait in the dark ink-colored mat).

**Locked, not to be touched:** everything else in `about-v2.html` — Movement 2 ("The Note," including
the pull-quote, the "How I Work" list, and the Workflow Teamwork illustration), Movement 3 ("The
Index"), the Closing section, the global footer, the global nav — plus `index.html` in its entirety,
all project/case-study pages, and the portfolio's navigation structure.

---

## 1. The Central Creative Concept: **"Movement I: Before the Work"**

The file already thinks of the About page as a composed piece in movements — that's in the code
comments (`MOVEMENT 1`, `MOVEMENT 2`, `MOVEMENT 3`), even though the visitor never sees that
structure. Surfacing it, quietly, is the concept: this hero should read as the **overture** — the
quiet passage before the case for the work begins — not as a conventional "headshot + bio" About
hero.

Right now the section does something very common: a greeting, a résumé-style paragraph, and a
portrait photo, arranged as two roughly equal columns. That structure quietly says *"here are my
credentials."* The brief asks for something that instead says *"here's how I think, and the
credentials are available if you want them."* Nothing needs to be added to say that — it's already
sitting inside the existing bio paragraph, buried at the end. The job is to bring it forward and
let the résumé facts recede into a quieter, supporting role.

This is a smaller, quieter concept than a landing-page hero would need — appropriately so. It's the
second thing a visitor sees on the site, arriving from an intentional click ("About"), not the
first impression. The move here is subtraction and re-emphasis, not spectacle.

---

## 2. The Narrative

Keep every sentence that exists today. Nothing is being rewritten. What changes is which sentence
gets to speak first and loudest.

Buried in the current bio, this line already exists:
> *"...I enjoy translating research and complex problems into intuitive digital experiences."*

That's the thesis. It's currently the last clause of a long, credential-dense paragraph, competing
for attention with a Bachelor's degree, three company names, and five discipline labels. The
narrative direction the brief asks for — curiosity, observation, empathy, connecting ideas, "this
is how I think" — is already written. It just needs to be given the floor, with the CV facts
following as evidence rather than opening the conversation.

---

## 3. The Emotional Journey — First 10 Seconds

| Beat | What happens | What it should feel like |
|---|---|---|
| 1 | A small kicker appears — "Movement I" alongside the existing "About" label, or in its place. | The visitor senses this page is composed, not just populated. |
| 2 | "Hello, I'm Eshwar." settles in — quiet, human-scaled, not shouting. | An actual hello, not a banner headline. |
| 3 | The thesis line arrives as its own beat, pulled out and given real size. | *This* is the thing being said. Everything else supports it. |
| 4 | A thin rule, then the portrait and the full bio arrive together, smaller and quieter. | The credentials — present, available, not the point. |
| 5 | Scrolling on, the visitor reaches Movement 2 and its illustration. | Recognition — the same quiet, considered hand is at work here too. |

---

## 4. Visual Hierarchy & Composition

**Principle:** two zones instead of one even split. Right now `.hero-inner` is a single grid that
gives the greeting/bio and the portrait roughly equal visual weight (`1.2fr / 1fr`). Split it
instead into a **primary zone** (the thesis, full-width, doing the emotional work) and a **quieter
secondary zone** (portrait + full bio, doing the credentialing work), separated by a thin rule.

### Desktop (≥900px) — rough wireframe

```
┌───────────────────────────────────────────────────────────────┐
│  ╭╮  MOVEMENT I · ABOUT                                        │
│                                                                  │
│  Hello, I'm Eshwar.                                              │
│                                                          ·        │
│    ┃ "I enjoy translating research and                   ·(faint │
│    ┃  complex problems into intuitive                      ·blob)│
│    ┃  digital experiences."                                       │
│                                                                    │
│  ─────────────────────────────────────────────────────────       │
│                                                                    │
│  ┌──────────┐    I'm a UI/UX Designer with a Bachelor's degree    │
│  │ portrait │    in Interaction Design from Strate School of      │
│  │  (ink    │    Design. Through experiences at Bosch Global      │
│  │  frame)  │    Software Technologies, Strange Avenue and        │
│  └──────────┘    Cropin Technology Solutions, I've worked         │
│  Eshwar —         across enterprise UX, interaction design, UX    │
│  Product Designer  research, rapid prototyping and AI-assisted    │
│                      design workflows...                          │
└───────────────────────────────────────────────────────────────┘
```

- **Zone A (primary):** kicker, headline, thesis pull-quote — full width, left-aligned, generous.
  This is the section's actual center of gravity now, not the photo.
- **Thin rule:** reuse the same hairline-divider convention already used elsewhere in this file
  (`.how-i-work { border-top: 1px solid var(--border) }`, `.ledger-group-label` bottom border) —
  don't invent a new divider style.
- **Zone B (secondary):** portrait + full bio, in a lighter, smaller-weight row beneath the rule.
  The portrait keeps its existing ink-frame treatment (it's already a good device — a dark mat
  around a photo reads as "framed," which is the right instinct) but should occupy noticeably less
  visual share than it does today — think a fixed, modest width (roughly 220–260px) rather than
  a near-equal grid column. The bio fills the remaining width at a slightly smaller size than the
  thesis line above it, signaling "supporting information."
- A small caption sits beneath the portrait: **"Eshwar — Product Designer."** This isn't new copy —
  it's pulled directly from the existing footer (`.gfoot-name` / `.gfoot-role`), reused here as a
  quiet plate label under the framed photo. No invented biographical detail.
- The faint blob motif (see §6) sits in the negative space to the right of the thesis line —
  atmosphere only, never behind text.

### Mobile (≤900px, matching the existing breakpoint)

- Everything stacks single-column, as the current CSS already does at 900px. Keep that breakpoint.
- Zone A stacks first (kicker, headline, thesis), then the rule, then Zone B (portrait, caption,
  bio) — same order as desktop, just single-column.
- Reduce or drop the faint blob motif at this width, consistent with how other decorative elements
  in the site are simplified on small screens.

---

## 5. Typography Treatment

No new typefaces — same `Lora` / `Plus Jakarta Sans` pairing used throughout the site.

**Kicker**
Keep the existing `.hero-eyebrow` style exactly (11px, 700 weight, uppercase, 0.14em
letter-spacing, `--green`) — it's already correct and consistent with `.about-eyebrow` elsewhere in
this same file. If "Movement I" is added, treat it as a small secondary label paired with "About,"
not a replacement that costs clarity (e.g. "Movement I · About" or "About — Movement I," small and
quiet, same line).

**Headline ("Hello, I'm Eshwar.")**
This can stay close to its current size (`clamp(28px, 3.6vw, 40px)`, Lora bold) — it doesn't need
the dramatic scale increase a landing hero would. It's a greeting; let it sound like one. The
change here is less about size and more about giving it room: increase the space between it and
the thesis line below so the two don't read as one continuous paragraph.

**Thesis pull-quote (new — extracted, not rewritten)**
This is the section's real typographic event. Reuse the `.pull-quote` treatment already defined
and used in Movement 2 of this same file: italic Lora, `--green`, left border rule. Target a size
between the Movement 2 pull-quote's full scale and the headline above it — roughly
`clamp(24px, 3vw, 34px)` feels right for a secondary-page hero (smaller than a true landing
statement, still clearly the loudest thing on the page after the greeting).

The sentence itself — *"I enjoy translating research and complex problems into intuitive digital
experiences"* — is copied verbatim from the existing `hero-intro` paragraph. The full paragraph
stays completely intact, unedited, in its original wording and order, in Zone B. This is a
standard editorial device (a pull-quote excerpted from body copy) — not new content.

**Bio paragraph (Zone B)**
Keep `Plus Jakarta Sans`, but drop it slightly in visual weight relative to today — a touch smaller
(e.g. 15–16px instead of the current `clamp(16px, 1.6vw, 18px)`) and/or a slightly quieter color
weight, so it reads clearly as supporting material once the thesis has already been said above.

**Portrait caption**
Small, quiet — reuse a scale similar to `.note-caption-body` or `.ledger-row-sub` (13–14px,
`--mid`), non-italic. It's a label, not a moment.

---

## 6. Illustration Strategy

There's no illustration asset in this section today — just the portrait — and the brief's caution
against "placing an illustration beside text" doesn't literally apply here the way it did in the
original landing-header brief. But the underlying instruction still does: don't let this section
sit in visual isolation from the illustration language; plant it quietly, so Movement 2's Workflow
Teamwork illustration (the very next thing the visitor scrolls to) feels like a continuation, not
an introduction.

**The move: extend the same faint motif system used for the illustrations, at low intensity, into
this section — nothing more.**

- **A small hand-drawn line doodle**, same spirit as the line quality in the character
  illustrations — simple, single-stroke, rounded linecap, `--green`, roughly 80–120px — placed near
  the kicker at the top of the section. A small, quiet opening gesture, not decoration for its own
  sake.
- **A faint organic blob**, very low opacity (roughly 6–10%) in `--green` or `--green-light`,
  positioned in the negative space beside the thesis pull-quote (see wireframe, §4). This is the
  same shape family that sits behind the characters in `Illustration - Workflow Teamwork.png`,
  which the visitor reaches within one scroll of leaving this section. Planting its faint silhouette
  here first is what makes that illustration's fully-saturated blob feel *recognized* rather than
  *new* — this is the entire mechanism for satisfying the brief's "first illustration should feel
  inevitable" objective, applied to this page.

Both are new, simple, original SVG shapes — not extracted from the PNG assets — designed only to
echo the linework and blob-shape qualities already visible in the illustrations. Keep them small
and quiet enough that neither one draws the eye away from the thesis line.

**The portrait itself is not reframed as an "exhibit."** Its existing dark ink-frame treatment
already does real work — it's a considered, gallery-adjacent device (a dark mat around a
photograph), and it shouldn't be redesigned into something more elaborate. The change here is
scale and hierarchy (make it smaller, quieter, captioned), not a new frame concept.

---

## 7. Colour Strategy

- **Change `.hero`'s background from `var(--cream)` to white.** This is the direct instruction from
  the brief, and it has a nice structural side-effect worth noting: Movement 2 (`.section-white`)
  is *already* white. A white hero flowing directly into an already-white Movement 2 means the
  opening of the page — greeting, thesis, portrait, *and* the first illustration — all sit on one
  continuous white surface, with the first cream section (Movement 3, "The Index") arriving only
  after the illustrated, editorial part of the story is told. That's a good, low-risk way to
  extend the "white canvas" instruction's effect one section further than the one being redesigned,
  without touching Movement 2's own styles.
- `--green` remains the only working accent: kicker, thesis pull-quote, line doodle, faint blob,
  divider (if colored rather than neutral gray).
- No new color tokens are required here. Skip the optional warm-accent-dot idea for this
  particular section — it reads as slightly too playful for what is, tonally, a quieter, more
  personal introduction than a landing statement. Reserve that device (if used at all) for a more
  declarative moment elsewhere.

---

## 8. Whitespace Strategy

- Increase the section's padding modestly past the current `96px 0 88px` — something like
  `120px 0 96px` desktop gives Zone A room to breathe without turning a secondary-page hero into a
  landing-scale event.
- Increase the gap between the headline and the thesis pull-quote, and between the thesis and the
  rule, more than the tight `margin-top: 24px` rhythm currently used for `.hero-intro`. Each beat
  in §3 should register as a distinct pause.
- Zone B (portrait + bio) can keep a tighter, more conventional rhythm — it's meant to read as
  quieter, denser, "reference material," in contrast to the more spacious Zone A above it. The
  whitespace contrast between the two zones is itself part of the hierarchy.

---

## 9. Motion

This section already has the sitewide motion system wired in — `anim-eyebrow`, `anim-heading`, and
`anim-sub` classes are already applied to the eyebrow, `<h1>`, and intro/portrait respectively, and
the `fadeUp` keyframe plus `prefers-reduced-motion` handling already exist in this file. Extend
that system rather than introducing a new one:

- Kicker: keep `anim-eyebrow` timing.
- Headline: keep `anim-heading` timing.
- **New thesis pull-quote:** add it to the stagger sequence directly after the headline — a new
  animation class (e.g. `anim-quote`) at roughly 160–200ms offset, following the same `fadeUp`
  pattern and duration as the existing classes.
- **Line doodle:** a short self-drawing stroke animation (`stroke-dashoffset` transition,
  ~600–800ms, ease-out) as the very first thing to animate, before the kicker fades in — same
  technique recommended for the landing header, reused here for consistency if that section is
  ever built.
- Zone B (portrait, caption, bio): can use the existing `.reveal` / `IntersectionObserver`
  scroll-triggered utility already defined in this file, rather than a load-time animation — it's
  secondary material, so it's appropriate for it to arrive a beat later, on scroll, rather than
  competing with Zone A's load-in sequence.
- Reduced motion: no new work needed beyond making sure any new elements (thesis quote, line
  doodle) fall under the existing `prefers-reduced-motion` block already governing `.anim-*` and
  `.reveal` elements in this file.

---

## 10. Content Mapping — what happens to each existing element

| Current element | Disposition |
|---|---|
| `.hero-eyebrow` ("About") | Kept. Optionally paired with "Movement I" per §5 — same visual style. |
| `<h1>` ("Hello, I'm Eshwar.") | Kept verbatim. Given more surrounding space; scale roughly unchanged. |
| `.hero-intro` (bio paragraph) | Kept **completely intact and unedited**, moved to Zone B, styled slightly quieter. |
| *(new)* Thesis pull-quote | Not new copy — the closing clause of the existing bio, quoted verbatim and given `.pull-quote` styling as a separate, prominent element in Zone A. |
| `.hero-portrait-frame` / `.hero-portrait` | Kept, same ink-frame treatment. Resized smaller, moved into Zone B, given a caption. |
| *(new)* Portrait caption | Not new copy — reuses "Eshwar" / "Product Designer" already present in the footer. |
| *(new)* Line doodle + faint blob | New, minimal, original SVG motifs per §6. |
| *(new)* Thin dividing rule | New element, but reuses an existing divider convention already used elsewhere in this file. |

No sentence in the bio or headline is being rewritten, reordered within itself, or replaced. The
only "new" text on the page is a verbatim quotation of text that's already there, and two proper
nouns already used in the footer.

---

## 11. Implementation Guidance for Claude Code

- **Scope discipline:** touch only the `.hero` section (markup + its own styles) inside
  `about-v2.html`. Do not modify `.section` (Movement 2), the Index section, the Closing section,
  the footer, or the nav. Do not touch `index.html` or any other page.
- **Background:** change `.hero`'s `background` from `var(--cream)` to `var(--white)`. Don't touch
  the `--cream` token itself — Movement 3 still needs it.
- **Restructure `.hero-inner`:** replace the current single `1.2fr / 1fr` grid with two stacked
  zones as described in §4 — a full-width Zone A (kicker, headline, new pull-quote), a thin
  divider, then a Zone B row (a fixed-width portrait column + a flexible bio column, weighted more
  toward the bio than the current near-even split).
- **New pull-quote element:** reuse the existing `.pull-quote` class from Movement 2 rather than
  defining a new style — apply it to a new element in Zone A containing the quoted sentence, sized
  per §5 (a modifier class or scoped override is fine if the exact scale needs to differ slightly
  from Movement 2's version).
- **Divider:** reuse the existing hairline border pattern (`1px solid var(--border)`) already used
  for `.how-i-work` / `.ledger-group-label` elsewhere in this file.
- **New motif SVGs:** inline SVG (not image files) for both the line doodle and the faint blob, so
  they can be styled/animated with CSS at near-zero load cost. Mark both `aria-hidden="true"`.
- **Motion:** add new elements to the existing `fadeUp` / `anim-*` sequence and the existing
  `.reveal` scroll-utility already present in this file's script block — don't duplicate or
  reimplement either system.
- **Responsive:** keep the existing 900px breakpoint. At that width and below, stack Zone A then
  Zone B, keep the portrait roughly at its current mobile sizing (`max-width: 300px`), and simplify
  or drop the blob motif.
- **Accessibility:** preserve the portrait's existing alt text. Keep visual/DOM order matching
  reading order (kicker → headline → pull-quote → divider → portrait/caption → bio). New decorative
  SVGs get `aria-hidden="true"`.

---

## 12. Design Rationale — quick-reference summary

- **Splitting into Zone A / Zone B** turns an equal-weight "greeting + résumé + photo" hero into a
  hierarchy that leads with thinking and follows with credentials — directly serving the brief's
  "this is how I think, not why you should hire me" narrative instruction, without changing a
  single word.
- **Extracting the thesis as a pull-quote**, verbatim from the existing bio, is the safest possible
  way to "elevate storytelling through design" exactly as instructed — no new claims, no rewritten
  copy, just a change in what gets said loudest.
- **Downscaling and captioning the portrait** keeps the existing (already good) framed-photo device
  intact while ensuring it doesn't outweigh the thinking that should lead the section.
- **Faint line + blob motifs** plant the illustration language's essential visual DNA one scroll
  ahead of the first actual illustration (Movement 2), so it registers as continuation rather than
  introduction — satisfying the "first illustration should feel inevitable" objective without
  touching Movement 2 itself.
- **White background**, flowing into the already-white Movement 2, extends the "white canvas"
  instruction's effect across the page's full opening passage — greeting, thinking, and first
  illustration — before the first cream section arrives.
- **Reusing existing patterns throughout** (the `.pull-quote` class, the hairline-divider
  convention, the `anim-*` / `.reveal` motion system, the footer's name/role text) keeps this
  section feeling like it was always part of the same authored system, rather than a new style
  bolted onto an existing page.

---

## 13. Guardrails (recap)

- Only `.hero` in `about-v2.html` changes.
- No new fonts. No rewritten copy — the "new" pull-quote and caption are verbatim reuses of
  existing text.
- The portrait's existing ink-frame treatment is kept, just resized and repositioned.
- Movement 2, Movement 3, Closing, footer, nav, `index.html`, and all other pages stay exactly as
  they are.
