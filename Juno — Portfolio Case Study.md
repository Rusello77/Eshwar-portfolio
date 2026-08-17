# Juno
### Designing a growth ecosystem for homemaker entrepreneurs

**Role:** Independent product design — product strategy, information architecture, interaction design, visual identity, design system, prototype
**Research context:** Problem space informed by a prior group research project, *Beyond the Household: A case study of how Indian homemakers create businesses*
**Prototype:** Designed in Figma; working prototype generated using Figma Make

---

A home baker in Whitefield tracks her orders in WhatsApp, learns pricing from YouTube, manages her task list in a notebook, and finds her packaging supplier through word of mouth. She is not underserved by technology in the abstract. She is underserved by the gaps between the tools she already uses.

That observation came from prior research I was part of, studying homemaker entrepreneurs across Bangalore. The research identified networking as a key opportunity area. But the more carefully I examined the findings, the clearer it became that networking was a symptom, not the problem.

The real problem was fragmentation. These users weren't isolated — they were active, resourceful, and already operating within informal ecosystems of knowledge, relationships, and daily operations. What they lacked was a system where those behaviors compounded.

Juno is my individual response to that problem: a community platform designed not to introduce new tools, but to connect the ones that already exist.

---

## 01 — The Problem Was Never Networking

Research on homemaker entrepreneurs surfaced a consistent picture. One participant described her business this way: *"Mostly I contact customers personally through WhatsApp and accept custom made cake orders based on preferences."*

Her business runs on WhatsApp. Her learning runs on YouTube. Her operations run on informal systems she designed herself. Nothing connects. Each growth action requires context-switching, re-entering the same information, and losing the accumulative value of what came before.

The research identified four directions worth exploring: a skill monetization platform, learning hubs, community and networking spaces, and work-life balance tools. The community and networking direction was where I began. But as I worked through the product strategy, I kept returning to the same question: what would it take to design a system where learning, networking, operations, and contribution didn't compete for the user's limited time — but reinforced each other?

Juno started as a response to one research direction. It became a synthesis of all four.

> *"The problem was never networking. The problem was fragmented growth. Networking was simply one symptom."*

---

> **[IMAGE — Fragmentation diagram]**
> Five disconnected tools floating in isolation: WhatsApp, YouTube, Notebook, Personal Contacts, Word of Mouth. No connecting lines between them. Text-light. No product UI. The disconnection is the point.
>
> **Annotations:**
> - WhatsApp → *Customer communication, orders, billing*
> - YouTube → *Learning, tutorials, business ideas*
> - Notebook → *Task tracking, order management*
> - Personal Contacts → *Vendors, customers, referrals*
> - Word of Mouth → *Introductions, reputation, discovery*
>
> **Caption below:** *See diagram brief — Fragmentation Diagram*

---

## 02 — A Business That Lives Between Tools

The research studied homemakers at three stages: starting a business from scratch, growing an existing idea, and scaling an established operation. The most underserved — and Juno's primary audience — are in the middle: women with a working home business who are actively trying to grow, but who haven't yet formalized their operations, built a network beyond their immediate circle, or found consistent ways to keep learning.

Their businesses vary — bakers, tailors, pickle makers, handicraft sellers, beauty practitioners, homemade meal providers — but their operating patterns are remarkably consistent. Four observations from the research shaped the design directly.

**Learning happens through people, not curricula.** Users learn through conversations, shared experiences, and peer stories — not formal business education. This is why the Learning Hub centers community stories and peer-led sessions alongside structured content: not because it's more engaging, but because it reflects how learning actually works for this user group.

**Trust drives every transaction.** Vendor recommendations, customer referrals, and community introductions all happen through personally vouched channels. Users don't transact with strangers — they transact with people someone they trust has already introduced. This became the foundation of the connection and privacy systems.

**WhatsApp is the operating system.** For customer communication, order management, community groups, and vendor sharing, WhatsApp isn't a preference — it's the infrastructure the entire business runs on. Designing against it would mean competing with the platform where the business already lives.

**Operations run on daily tasks.** These users don't think in terms of business management dashboards. They think: *what needs to be completed today?* This shaped My Business's entry point — not a performance overview, but a task list.

---

## 03 — Five Beliefs Before Any Screens

These are the beliefs that drove each decision point where there was a genuine choice between alternatives. They're not principles identified in retrospect.

**Community as infrastructure, not feature.**
Community is not one tab. It is the foundation that makes learning, networking, and business growth possible. Without it, every other surface in the product loses most of its value. The implication: community health is a product responsibility, not a moderation afterthought.

**Trust before visibility.**
Most platforms default to full visibility and let users manage privacy in settings. Juno inverts this. A user's phone number, WhatsApp, and email are hidden until a connection is established. Trust unlocks identity — not the other way around.

**Familiar over new.**
Users already have working mental models: WhatsApp messages, checklist tasks, card-based recommendations. The product builds on those rather than replacing them with novel patterns that require learning. Every place where a familiar interaction model was available, it was chosen over an original one.

**Systems over screens.**
Individual screens were never optimized in isolation. Decisions were made based on how entire loops functioned — whether the Learning surface fed back into Home, whether Create content reached the right people, whether vendor sharing circulated through the network or dead-ended in a single conversation.

**Value should circulate.**
Knowledge, introductions, supplier recommendations, and business stories should move through the network as transferable objects — not remain locked in individual relationships. Every sharing mechanism in the product exists to serve this principle.

---

## 04 — The Decisions That Made It Different

These are the decisions that had real alternatives — the ones where a different choice would have produced a materially different product.

---

### A — Trust Architecture: Progressive Identity Reveal

The standard approach to user profiles is full visibility, with privacy managed through settings. For homemaker entrepreneurs — many operating out of their homes, building networks in their local neighborhoods, navigating a genuine tension between professional visibility and personal safety — this approach creates real disincentives to participate. The research noted that these users rely on personal trust and referrals, not public listings. A system that immediately exposes phone numbers and home areas to strangers would replicate the dynamics they already manage carefully on social platforms — not design past them.

The decision: progressive identity reveal, with two clearly defined states.

**Discovery state** — business work is visible. Name, trade, location, products, reviews, and community memberships are accessible. Contact information — WhatsApp, phone, email — is withheld behind an explicit prompt.

**Connected state** — full contact becomes visible. WhatsApp is promoted to the primary action button. The profile reads as a trusted colleague, not a public listing.

---

> **[IMAGE — UserProfileScreen, side-by-side]**
> Two screens of the same user — Sunita Kumar, Cake Baking — placed side by side. Left: not-connected state. Right: connected state.
>
> **Annotations — Left (not connected):**
> - Bee avatar → *Identity protected until trust is established*
> - Name, trade, location → *Professional context visible — who she is, what she does, where she works*
> - "Connect" button → *The connection request is the trust gate*
> - "Connect to view contact details" → *Gating is explicit, not hidden*
> - Products, reviews → *Work visible — enough to evaluate, not enough to contact without consent*
>
> **Annotations — Right (connected):**
> - WhatsApp button (primary, filled) → *Promoted to primary action — the platform where her business runs*
> - Phone number, email → *Full contact revealed — same profile, different permission state*
> - Message button (secondary) → *In-app messaging as a secondary path*
>
> **Label between the two states:** *Same user. Same profile. Different trust state.*

---

This decision has structural consequences throughout the product. The radar shows bee avatars — not photos — for unconnected users. The My People section shows real faces only for existing connections. Privacy is not a settings toggle. It is built into the information architecture.

---

### B — Governance-Based Learning

Open publishing maximizes contribution but degrades content quality and trust over time. Full central moderation protects quality but creates a bottleneck that doesn't scale and removes agency from contributors. Most platforms choose one and accept the tradeoff.

The decision: a tiered governance system where authority is earned through demonstrated experience.

**Beginner** — content requires approval before publishing. The reviewer bears accountability for quality until the author has established a track record.

**Intermediate** — demonstrated experience unlocks direct publishing of workshops and lessons.

**Mentor** — earns participation in the approval process itself, contributing to the governance of the system, not just its content.

---

> **[IMAGE — Governance tier diagram]**
> Custom three-tier diagram. See diagram brief — Governance Tier Diagram.
>
> **Adjacent to diagram — inset screenshot:**
> ShareJourneyScreen showing "Intermediary" badge in the publish flow.
>
> **Annotations on inset:**
> - "Intermediary" badge → *This user has earned direct publishing rights*
> - Form fields below → *A Beginner submitting the same form would enter a review queue*

---

This reflects a specific belief: experience should influence authority. A beginner sharing a raw observation is different from a mentor teaching a validated method. Treating them identically would make the Learning surface untrustworthy over time. The governance system encodes that difference into the product structure rather than relying on moderation to correct it after the fact.

The full tier system is designed. Its implementation in the current prototype is partial — the tier badge is visible in the publish flow, and the architecture supports the full hierarchy.

---

### C — Create Replacing Collaborate

An earlier version of the navigation included a Collaborate section — a destination for users to find collaborative projects and opportunities. It was removed.

The diagnosis: Collaborate existed as a destination without a behavioral trigger. Users could browse collaboration opportunities, but nothing in the product created the conditions for collaboration to emerge organically. It was a feature waiting for behavior the product wasn't generating.

Create replaced it — in the center of the navigation bar.

---

> **[IMAGE — CreateOptionsBottomSheet]**
> Bottom sheet over a dimmed HomeScreen. "Create" as the sheet title. Four options visible.
>
> **Annotations:**
> - "Share your journey" → *Feeds: Learning Hub — peer stories section*
> - "Add a lesson" → *Feeds: Learning Hub — structured content library*
> - "Update a milestone" → *Feeds: Home — community milestones carousel*
> - "Host a workshop" → *Feeds: Learning Hub + Connections — live session, shareable via Connections*
> - Create FAB in nav → *Contribution is always one tap away from anywhere in the product*

---

Without contribution, the learning surface goes static, the home feed loses its human texture, and the community has no new reasons to engage. Create is not a content feature — it is the mechanism that keeps the ecosystem alive.

---

### D — Value Circulation Loops

Research showed that vendor recommendations and peer introductions are among the highest-trust forms of business knowledge in this community. A baker who found a reliable packaging supplier will tell another baker who asks. The product encodes this behavior structurally.

Vendors in My Business can be shared as rich cards in chat conversations — not a name to search for, but a card with business category, location, phone number, and a tagline. A recommendation becomes a structured, actionable object. The same mechanism applies to connections: a trusted peer can be introduced through a shareable profile card.

---

> **[IMAGE — Chat flow sequence, 4 frames in order]**
>
> **Frame 1 — Chat screen:**
> - Conversation between two bakers about packaging → *"Can you share their contact?" — a trust-based referral in natural language*
> - Share button in toolbar → *The structured sharing mechanism is always accessible in chat*
>
> **Frame 2 — Share bottom sheet:**
> - "Vendor" option → *Share a trusted supplier — structured business knowledge*
> - "Connection" option → *Recommend someone to connect with — trusted peer introduction*
>
> **Frame 3 — Select Vendor picker:**
> - Vendor list from My Business → *Vendors already in the system — no re-entry required*
> - Category filters → *Packaging, Raw Materials, Delivery — organized for quick finding*
>
> **Frame 4 — Vendor card in chat:**
> - ABC Packaging Solutions card → *Not a text message — a structured, actionable card*
> - Location, phone, tagline → *Contact and context together — recipient can act immediately*
> - Call / Message actions → *Direct action from the card — no searching required*
>
> **Caption spanning all frames:** *A verbal recommendation becomes a structured, reusable object.*

---

### E — WhatsApp as Partner, Not Competitor

Building an internal messaging system that competes with WhatsApp would mean asking users to migrate the platform where their entire business already lives. The research made this clear: the observation wasn't that these users wished they had a different communication tool — it was that WhatsApp *was* their communication infrastructure, and any product that ignored this would add friction rather than remove it.

Every WhatsApp integration point was a deliberate design decision: the primary action on connected profiles, quick-action buttons on customer and vendor cards, community groups listed on business profiles, and — most directly — how live learning sessions are registered for.

---

> **[IMAGE — Learning Hub, "Join via WhatsApp" bottom sheet]**
> "Learn with Experts" section visible behind. Bottom sheet open: "Join via WhatsApp" as the title, "We'll send the session link and updates directly to your WhatsApp" as the subtext, "Get Link on WhatsApp" as the CTA.
>
> **Annotations:**
> - Sheet title "Join via WhatsApp" → *WhatsApp as the primary registration mechanism — not a notification preference*
> - Subtext → *The product delivers its own feature through WhatsApp*
> - "Get Link on WhatsApp" CTA → *The session lives where the user already is*
> - Phone number field → *A WhatsApp number, not an account login — the user's existing identity*

---

To join a live expert session, you receive the link on WhatsApp. Not an in-app notification. Not an email. WhatsApp — because that is where this user will actually see it and act on it.

---

## 05 — A System, Not a Collection of Features

The five surfaces in Juno are not five separate apps sharing a navigation bar. They are nodes in a system with intentional feedback loops.

Community generates questions, discussions, and peer stories. Learning provides structured responses — paths, lessons, and expert sessions. Create returns new knowledge and experience back to both surfaces. Connections enables the peer relationships that make learning and contribution meaningful. My Business grounds everything in the daily operational reality of running a home business.

---

> **[IMAGE — Ecosystem diagram]**
> Custom diagram showing all five surfaces as connected nodes with directional arrows. See diagram brief — Ecosystem Diagram.
>
> **No additional annotations on this diagram — the diagram itself is the argument.**

---

Each surface was defined by the user intent it answers — not by the features that needed a home:

| Surface | Intent question |
|---|---|
| Home | What should I focus on today? |
| Connections | Who can help me grow? |
| Create | What can I contribute? |
| Learning | What can I learn? |
| My Business | How is my business performing? |

This structure meant that every feature decision had a test: which intent does this serve, and does adding it strengthen or dilute that answer?

---

## 06 — The Brand as Argument

Juno takes its name from the Roman goddess of women, guidance, protection, and transition. The mythology aligned with the product's purpose: supporting women through a significant transition — from homemaker to entrepreneur.

The visual identity makes three arguments.

**Juno Green, not WhatsApp green.** The early color palette sat close to WhatsApp's — a natural starting point for a product built to integrate with it. But as the product took shape, the conflict became clear: the product needed to look like itself, not like WhatsApp. The color system moved to a muted botanical sage that reads as warm and community-oriented without trading on another platform's identity.

**Cream, not white.** White is efficient and neutral. Cream is warm and lived-in. The backgrounds signal neighborhood, not dashboard.

**The Tool-Bee.** The mascot was designed to solve four problems simultaneously: brand recognition (a distinctive, ownable character), privacy (the universal avatar for every unconnected user), community representation (the hive as a metaphor for collective growth), and radar visualization (bee nodes work visually in the orbital graph in a way that generic icons or real photos do not).

---

> **[IMAGE — ConnectionsScreen radar, close-up view]**
> The orbital radar with bee-icon nodes surrounding a central real photo.
>
> **Annotations:**
> - Center user (real photo) → *Your profile — always real, always visible to you*
> - Surrounding bee nodes → *Everyone else — identity protected until connected*
> - Three concentric rings → *2km · 5km · 10km — proximity as a dimension of community*
> - Bee icon detail → *Brand, privacy, community, and visualization — one element, four functions*

---

The bee is not decorative. It is load-bearing.

---

## 07 — The Product

---

> **[IMAGE — ConnectionsScreen full view]**
> The full Connections screen showing My People section at the top with real photos (connected users), followed by category filters, Radar/List toggle, and the radar visualization below.
>
> **Annotations:**
> - My People section, real photos → *Connected users — trust is visible here. These are people who have mutual access to each other's contact.*
> - Bee avatars in radar → *Everyone else — discoverable but not yet trusted*
> - Real photo in center → *You are always a participant, never anonymous to yourself*
> - Radar/List toggle → *Two browsing modes — exploration and efficiency, without choosing for the user*

---

> **[IMAGE — Learning Hub full scroll]**
> Full-length Learning Hub screen showing all content sections stacked.
>
> **Annotations:**
> - Continue Learning (60% progress ring) → *Progress persists — learning is ongoing, not episodic*
> - Learning Paths → *Structured progressions for deliberate skill-building*
> - Trending Now with tags (Popular, Beginner) → *Community-surfaced content — what the network finds valuable, surfaces here*
> - "Beginner" tag → *Governance tiers visible in content — content quality is legible before you open it*
> - Learn from Real Stories (video thumbnails) → *Peer video content — learning through people, made structural*
> - Tools for Your Business → *Pricing Calculator — answers the practical question, not just the conceptual one*
> - Learn with Experts → *Live sessions from community mentors — the research insight about learning through conversation, formalized*

---

> **[IMAGE — My Business above-the-fold]**
> Today's Tasks section — 2 of 5 tasks completed (40%), checklist items in various states, consistency tracker below at 72%.
>
> **Annotations:**
> - "Today's Tasks" heading → *The entry point is a task list — not a performance dashboard*
> - Checklist items → *3 orders pending delivery · 2 payments pending · Reply to customer messages — operational, not abstract*
> - Completed items (strikethrough) → *Familiar completion state — the mental model these users already use in notebooks*
> - "2 of 5 tasks completed" → *Daily progress framing — what's done, what remains*
> - Consistency tracker (72%, "Moderately consistent") → *Behavioral pattern visible over time — not a judgment, an observation*

---

> **[IMAGE — HomeScreen above-the-fold]**
> Sticky header with own avatar and search, Community Milestones carousel, Trending Discussions preview, Create FAB centered in bottom nav.
>
> **Annotations:**
> - Own avatar (real photo, top left) → *You are a participant — always present, always visible as yourself*
> - Community Milestones → *Collective progress celebrated by default — not buried in a notification*
> - Discussion cards with bee avatars → *Community discussions — identity protected until connection, even in public spaces*
> - Create FAB (center, bottom nav) → *Contribution always one tap away from anywhere in the product*

---

## 08 — What I'd Want to Learn Next

Juno is a prototype — a high-fidelity hypothesis, not a validated product.

The designs were built in Figma. The working prototype was generated using Figma Make, which produced a functional React codebase from the Figma source. This let me focus on design quality, interaction logic, and the design system rather than on implementation. All data is hardcoded. There is no backend, no real authentication, and no live activity.

Several design decisions remain unvalidated, and the answers would materially change the product.

**Does progressive identity reveal feel protective or obstructive?** The trust architecture assumes users will connect first and evaluate contact later. A user who wants to assess someone before committing to a connection request may experience the gate as a barrier rather than a feature. Testing would surface whether the two-step flow builds trust or creates friction at the wrong moment.

**Does the governance system build credibility or create gatekeeping?** The tier structure assumes users will experience Beginner approval as appropriate scaffolding rather than unnecessary restriction. If users interpret it as a barrier to contribution, the system designed to protect content quality would instead suppress the contribution the ecosystem needs to function.

**Does the radar communicate proximity or confuse?** The orbital visualization is conceptually coherent — distance as community. Whether users read it that way immediately, or find it disorienting compared to a list, requires real usage data.

**Is the WhatsApp integration deep enough?** The current integrations are meaningful but additive — they sit alongside in-app flows rather than replacing them. A more aggressive version of the "familiar over new" principle would ask whether the product should eventually work *through* WhatsApp rather than alongside it.

These aren't failures of the design. They are the productive uncertainties that a real design process would resolve. The next phase of this work is putting the prototype in front of real users and learning which hypotheses hold.
