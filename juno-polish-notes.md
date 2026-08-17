# Juno Case Study — Implementation Polish Notes

Scope: implementation only. Nothing here touches storytelling, layout, content, illustrations, or brand — just the kind of thing a good dev-handoff pass catches before shipping.

---

## Already solid — no action needed

- The `.section-number` / `.section-title` / `.section-intro` rhythm is applied consistently across all 8 numbered sections. This is the backbone of the page's pacing and it holds up well.
- `clamp()` is used consistently for all major type sizes (hero h1, section-title, decision-title, etc.) — fluid scaling is handled correctly, no fixed-px headline sizing to fix.
- The screenshot/pair-item/annotation-list components repeat cleanly across all five Decision blocks — good component discipline.
- The lightbox is simple, self-contained, and works (click-to-open, click-outside/Escape/× to close).
- Only one `<h1>` on the page, and heading levels step down correctly (h1 → h2 → h3) with no skipped levels.

---

## 1. Section rhythm: uneven spacing around the Decision dividers

This is the highest-value fix — it's a real, measurable inconsistency, not a matter of taste.

`.decision-block` (line ~353) sets `padding: 80px 0;`. Each Decision section (A–E) overrides this **inline** with `padding-top: 0; border-top: none;` — but never overrides `padding-bottom`. So the *bottom* 80px always survives, stacked on top of the section's own bottom padding:

- Decision A sits in `.section-sm` (64px) → **144px** before the divider
- Decisions B, C, D sit in `.section` (96px) → **176px** before the divider
- But the *following* section always zeroes out its own top padding via the same inline override → only **96px** (or 64px for A) *after* the divider

So every `<div class="section-divider">` currently has ~80px more air above it than below it. On a slow scroll this reads as slightly lopsided pacing — the divider feels like it belongs to the section above rather than sitting neutrally between two decisions.

**Fix:** override `padding-bottom: 0` on `.decision-block` as well, and let the divider's spacing come from a single consistent margin (e.g. wrap each divider in `margin: 96px 0` and remove the padding from decision-block entirely, or standardize the override so both sides are symmetric).

---

## 2. Card and container padding: too many near-duplicate values

Padding across the various card-style components is inconsistent in a way that looks like organic drift rather than an intentional scale:

| Component | Padding |
|---|---|
| `.observation-card` | `36px` |
| `.principle-card` | `32px` |
| `.bee-fn-card` | `28px 22px` |
| `.reflection-item` | `36px 40px` |
| `.type-specimen` | `40px` |
| `.voice-example` | `36px` |
| `.prototype-note` | `32px 36px` |
| `.color-note` | `20px 24px` |

None of these are wrong individually, but side by side (e.g. scrolling from Section 02's observation cards to Section 03's principle cards) the ~4–8px deltas are large enough to register as "slightly different" without any visible reason why. Worth collapsing to 2–3 fixed padding tokens (e.g. `--pad-card: 32px`, `--pad-callout: 24px`) and mapping every component to one of them.

---

## 3. Two near-identical border colors doing the same job

`--border-green: #C8D9CE` is defined as a token and used correctly in `.principle-card` and `.prototype-note`. But `.mascot-trait` (line ~811) and `.voice-example` (line ~938) both hardcode `#C8DDD4` instead — a different (very close) green. Same visual role, two slightly different values. Purely a "make sure it's actually the same token" cleanup, no color decision involved.

Same pattern with `--green-light: #EBF1EE`: it's correctly referenced via the token in `.section-green-light`, but hardcoded directly as `#EBF1EE` in `.mascot-trait`, `.color-note`, `.voice-example`, and `.ui-demo-tag`. Worth a find-and-replace to the CSS variable so any future tweak only has to happen once.

---

## 4. Accessibility: contrast on dark sections

Several text elements on dark backgrounds sit at low opacity white, and the values are all different from each other with no evident logic:

- `.section-dark .section-intro` → `rgba(255,255,255,0.65)`
- `.gallery-intro .section-intro` → `rgba(255,255,255,0.55)`
- `.screen-label` → `rgba(255,255,255,0.45)`
- `.footer-meta` → `rgba(255,255,255,0.4)`
- `.footer-note` → `rgba(255,255,255,0.35)`
- The closing line in Section 08 ("Every interaction was designed…") → `rgba(255,255,255,0.3)`

The last two-three of these, on `var(--dark)` (#1A1A1A) or `var(--green-dark)` (#1B2E22), land well under WCAG AA for small text — the 0.3 and 0.35 values in particular will be genuinely hard to read for some users, not just "subtle." Recommend consolidating to two tiers (e.g. 0.6 for secondary text, 0.45 as the floor for anything smaller/finer) — this keeps the intentional hierarchy of "this text matters less" without any of it dropping below legibility.

---

## 5. Accessibility: lightbox is mouse-only

In the lightbox script (near the bottom of the file):

```js
document.querySelectorAll('[data-lightbox]').forEach(function (el) {
  el.addEventListener('click', function () { open(el.src, el.alt); });
});
```

Every zoomable image only responds to `click` — there's no `tabindex`, no `role`, and no `keydown` handler, so keyboard users can't open the lightbox at all (they can tab past the images, but Enter/Space does nothing). Given `aria-modal="true"` is already correctly set on the overlay, it's worth finishing the job: add `tabindex="0"` + `role="button"` to each `[data-lightbox]` element, handle Enter/Space, move focus to the close button on open, and return focus to the trigger on close.

Also: `#lightbox-close` has only `padding: 4px` around a 28px glyph — comes out under the ~44px touch target recommendation. A little more padding (or a fixed `min-width`/`min-height: 44px`) would make it easier to hit precisely on mobile, where this close button is the primary way out of a full-screen image.

---

## 6. Responsive breakpoints: mostly consistent, one real pinch point

The breakpoint set across the file (`640 / 680 / 768 / 900 / 960`) is close to a clean system but not quite unified — most components use 900/640, a few use 768, 680, or 960. Not urgent, but consolidating to a standard set (e.g. 640 / 900 / 1024) would make future edits more predictable.

One place this actually causes a visible squeeze: `.observations-grid` (Section 02) only drops to a single column at 680px, while `.container` padding has already shrunk from 48px → 24px at 768px. That means anywhere between roughly 680–768px viewport width, you get **two columns of cards** with the **narrower container padding** — the cards get noticeably tighter in that band than just above or just below it. Dropping the observations-grid breakpoint to match the container's 768px would remove that dead zone.

---

## 7. Small CSS cleanup

- `.pair-item {}` and `.screen-item {}` are empty rules — dead weight, safe to delete.
- A large number of inline `style="margin-top: 32px"` / `40px` / `48px` / `56px` / `64px` attributes duplicate the `.mt-8` through `.mt-64` utility classes already defined at the top of the stylesheet. Not a visual issue, but consolidating onto the existing utilities (rather than one-off inline styles) will make future spacing edits much faster to make consistently.
- Several images (the full-width screenshots and gallery grids especially) don't have `width`/`height` attributes, so the browser can't reserve space for them before they load — this shows up as layout shift while scrolling on a slower connection. Adding explicit dimensions (or `aspect-ratio` in CSS) would tighten this up.
- None of the below-the-fold images use `loading="lazy"` — with 40+ screenshots on this page, lazy-loading everything except the hero image would meaningfully improve initial load feel.

---

## 8. Finishing touches for a "shipped" feel

- No `<meta name="description">` and no Open Graph tags (`og:title`, `og:image`, etc.) — worth adding since portfolio case studies are frequently shared as bare links (Slack, LinkedIn, email), and right now a shared link would show no preview image or summary.
- No favicon declared — small thing, but its absence is one of the more noticeable "unfinished" signals in a browser tab.

---

### Suggested priority order
1. Decision-block padding symmetry (#1) — most visible, purely mechanical fix.
2. Dark-background text contrast (#4) — accessibility, quick value fix.
3. Lightbox keyboard support (#5) — accessibility, moderate effort.
4. Card padding + color token consolidation (#2, #3) — maintainability, no visual risk.
5. Meta tags/favicon (#8) — five-minute wins before sharing the link.
6. Breakpoint cleanup, lazy-loading, dead CSS (#6, #7) — nice-to-haves, do last.
