# Portfolio Information Architecture --- Build Spec (Revised)

**Purpose of this document:** This is a build spec for a website builder
(human or AI) to implement the site structure, navigation, and page flow
for a UX/Product design portfolio. It does **not** cover visual design,
typography, colour, or in-page case study layout --- those are already
finalized separately. This document only covers structure, hierarchy,
navigation, and flow.

> **Revision note:** This version preserves the original architecture
> while incorporating a few finalized portfolio decisions. These are
> intentional architectural refinements only.

------------------------------------------------------------------------

# 1. Site Map

    /                              → Home
    /about                         → About
    /work/beyond-the-prompt        → Case Study 1
    /work/beyond-the-household     → Case Study 2
    /work/juno                     → Case Study 3
    /work/janapada                 → Case Study 4

Notes: - Do **not** build a separate `/work` index/listing page. Home
serves as the project index. - Do **not** build a `/contact` page.
Contact is a persistent footer element on every page. - **Do not build a
`/resume` page.** Resume should instead be a downloadable PDF accessible
from the **About page** and the **global footer**.

------------------------------------------------------------------------

# 2. Global Navigation

Desktop navigation (persistent):

Left: Logo / Name → Home

Right, in this exact order:

`About   Work   Contact`

Behaviour:

-   **About** → `/about`
-   **Work** → Home and scroll to the project grid
-   **Contact** → Scroll to the footer contact section on the current
    page
-   Logo → Home

Mobile:

-   Sticky header
-   Logo + Hamburger
-   Same three destinations

------------------------------------------------------------------------

# 3. Home Page

Keep the structure from the original specification.

Project order remains fixed:

1.  Beyond the Prompt
2.  Beyond the Household
3.  Juno
4.  Janapada

Optional: A subtle visual relationship may be shown between Projects 2
and 3 (Research → Product), without merging them.

------------------------------------------------------------------------

# 4. Case Study Pages

Retain the original standalone philosophy.

Every project must make sense when opened directly via URL.

Bottom navigation should now be:

`← Previous Project     ← All Projects     Next Project →`

instead of only "Next Project".

## Research → Juno

Projects 2 (Beyond the Household) and 3 (Juno) intentionally share a
narrative relationship.

However, **the transition itself is outside the scope of this
architecture document.**

The wording, presentation and storytelling of that transition should be
implemented within the individual project pages after both projects have
been finalized.

The architecture only establishes that this relationship exists.

## Janapada

As the final project, replace "Next Project" with: - Resume download -
Contact CTA

No looping.

------------------------------------------------------------------------

# 5. Fixed Project Sequence

Unchanged.

1.  Beyond the Prompt
2.  Beyond the Household
3.  Juno
4.  Janapada

------------------------------------------------------------------------

# 6. Global Footer

Unchanged except Resume is a downloadable asset (not a page).

Contents: - Resume download - Email - LinkedIn / socials - Copyright

------------------------------------------------------------------------

# 7. About Page

Retain original hierarchy.

Include Resume download within this page.

------------------------------------------------------------------------

# 8. Entry & Exit Rules

Retain original behaviour.

Users may enter any project directly and navigate via:

-   Previous Project
-   All Projects
-   Next Project
-   Global Navigation

------------------------------------------------------------------------

# 9. What NOT to Build

Original constraints remain, with one revision:

-   No `/work` page
-   No `/contact` page
-   **No `/resume` page**
-   No dynamic project ordering
-   No modification to finalized case study content or layouts

------------------------------------------------------------------------

# 10. Build Checklist

Retain the original checklist with these revisions:

-   Resume is downloadable from About and Footer.
-   Previous / All Projects / Next Project navigation implemented.
-   Household → Juno relationship preserved, with transition
    implementation deferred to the project pages.
