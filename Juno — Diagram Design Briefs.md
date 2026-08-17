# Juno — Diagram Design Briefs

Three custom diagrams are required for the case study. They do not exist in the prototype or Figma source and must be created. This document specifies each diagram's purpose, content, structure, and visual treatment.

Use the Juno brand system throughout:
- **Juno Green:** #5A8B6F
- **Juno Cream:** #F5F1E8
- **Juno Gold:** #D4A86F
- **Text:** near-black (#1A1A1A or equivalent)
- **Secondary text:** medium grey (#6B7280 or equivalent)
- **Background:** Cream (#F5F1E8) or white, depending on where the diagram appears in the layout

---

## Diagram 1 — Fragmentation Diagram

**Where it appears:** Section 01 — The Problem Was Never Networking
**Purpose:** To make the core insight visual before any product UI appears. The diagram should communicate that the user already has all the tools she needs — they just don't connect.

---

### Content

Five labeled nodes, each representing an existing tool or behavior:

| Node | Label | Sublabel |
|---|---|---|
| 1 | WhatsApp | Customer communication, orders, billing |
| 2 | YouTube | Learning, tutorials, inspiration |
| 3 | Notebook | Task tracking, order management |
| 4 | Personal Contacts | Vendors, customers, referrals |
| 5 | Word of Mouth | Introductions, reputation, discovery |

**No connecting lines between the nodes.** The disconnection is the entire point.

---

### Layout

Arrange the five nodes loosely — not in a grid, not in a circle. They should feel scattered, like objects that happen to be in the same space without any relationship to each other. Slight variation in size (10–15%) between nodes adds to the informal, un-designed feeling.

Each node is a rounded rectangle or pill shape with:
- An icon or simple illustration representing the tool
- The bold label
- The sublabel in smaller, lighter text below

**Overall composition:** wide format, approximately 2:1 width-to-height ratio. Nodes distributed across the space without symmetry.

---

### Visual treatment

- Background: Cream (#F5F1E8) or transparent
- Node fill: White or very light grey (#F9F9F9) — they should feel like objects floating in space, not UI elements
- Node border: 1px light grey (#E5E7EB)
- Label text: Juno Green (#5A8B6F) or near-black
- Sublabel text: medium grey, smaller weight
- No shadows, no gradients
- No arrows, no lines — the absence of connection is intentional

**Tone:** Quiet, observational. This is not a problem diagram with red warning colors — it is a neutral observation that these things exist separately.

---

### What the diagram should feel like to a reader

Someone looking at this for three seconds should think: *"These are five separate things with no relationship to each other."* That is the entire argument. The diagram does not need to be explained by text — it should make the fragmentation legible before the text confirms it.

---

---

## Diagram 2 — Governance Tier Diagram

**Where it appears:** Section 04-B — Governance-Based Learning, alongside the ShareJourneyScreen inset
**Purpose:** To make the governance structure visible — three tiers, clearly differentiated, with permissions at each level. The diagram exists because this system is almost entirely invisible in the prototype.

---

### Content

Three tiers, ordered bottom to top (earned progression reads upward):

| Tier | Publishing ability | Additional role |
|---|---|---|
| **Beginner** | Submits content → requires approval | — |
| **Intermediate** | Publishes workshops and lessons directly | — |
| **Mentor** | Publishes directly + participates in approvals | Reviews Beginner submissions |

**Key relationship to show:** Mentor reviews Beginner content. This closes the governance loop.

**Guiding text to incorporate:** *"Experience should influence authority."* (Use as a caption or label beneath the diagram, not as a heading within it.)

---

### Layout

Vertical stack, three levels, reading upward:

```
┌─────────────────────────┐
│        MENTOR           │  ← Publishes + Reviews
│  Participates in        │
│  approvals              │
└─────────────────────────┘
           ↑
┌─────────────────────────┐
│     INTERMEDIATE        │  ← Publishes directly
│  Publishes workshops    │
│  and lessons directly   │
└─────────────────────────┘
           ↑
┌─────────────────────────┐
│       BEGINNER          │  ← Submits for review
│  Content reviewed       │
│  before publishing      │
└─────────────────────────┘
```

Upward arrows between tiers with a small label: *"Earned through experience"* running vertically beside the arrows.

An additional curved arrow from Mentor back down to Beginner labeled: *"Reviews submissions"* — this shows the loop closing.

---

### Visual treatment

- Background: White or Cream
- Tier fills: Use a gradient of tint — Beginner is the lightest tint of Juno Green, Intermediate is mid-tint, Mentor is the full #5A8B6F. This gives a visual sense of increasing authority/depth without requiring color coding.
- Tier label (BEGINNER / INTERMEDIATE / MENTOR): Bold, all-caps, white text on the filled background for Mentor; dark text on lighter tiers
- Sublabel text: Regular weight, smaller size
- Permission badges or chips: Small rounded rectangles inside each tier block showing the key permission in one phrase (e.g., *"Requires approval"*, *"Publishes directly"*, *"Reviews submissions"*)
- Upward arrows: Juno Green, medium weight
- Curved review arrow: Juno Gold (#D4A86F) — distinguish it as a different type of relationship

**Overall proportion:** Tall and narrow. This diagram should feel like a ladder or a progression, not a matrix.

---

### What the diagram should feel like to a reader

Three seconds of reading should communicate: *There are three levels of trust, you start at the bottom, and you earn your way up.* The governance loop (Mentor reviewing Beginner) should be readable as a second observation — visible on close reading, not essential for the first impression.

---

---

## Diagram 3 — Ecosystem Diagram

**Where it appears:** Section 05 — A System, Not a Collection of Features
**Purpose:** This is the most important visual in the entire case study. It must make the argument that Juno is a system with feedback loops — not five features that happen to share a navigation bar. A hiring manager who only looks at this diagram should understand the product's architecture.

---

### Content

Five labeled nodes, one per product surface. Each node should also show its intent question.

| Node | Intent question |
|---|---|
| Home | What should I focus on today? |
| Connections | Who can help me grow? |
| Create | What can I contribute? |
| Learning | What can I learn? |
| My Business | How is my business performing? |

**Value flows to show (directional arrows):**

| From | To | What flows |
|---|---|---|
| Create | Learning | Journeys, lessons, workshops |
| Create | Home | Milestones, stories |
| Learning | Home | Surfaced trending content |
| Home/Community | Learning | Questions become learning topics |
| Connections | Chat | Peer introductions, recommendations |
| Chat | Connections | Shared profiles surface new connections |
| My Business | Chat | Vendor cards shared in conversations |
| Chat | My Business | Received vendor cards saved to vendor list |
| Connections | Home | Activity, introductions surface in feed |

**The Create node is the engine.** It should feel slightly more prominent than the others — it is the mechanism that keeps all other surfaces active.

---

### Layout

Pentagonal arrangement — five nodes at the points of a loose pentagon, with Create at the top center (emphasizing its role as the engine/driver). Arrows flow between nodes as described above.

```
              CREATE
             /       \
            /         \
    HOME --+           +-- LEARNING
           |           |
    CONNECTIONS --- MY BUSINESS
```

The arrows should be curved or angled, not straight, to suggest organic flow rather than mechanical process.

Do **not** draw every possible arrow — only the flows listed above. Too many arrows make the diagram illegible. The goal is to show that surfaces are connected, not to map every possible interaction.

**Intent questions:** Displayed inside or directly below each node in smaller text. These are the secondary read — visible on closer inspection.

---

### Visual treatment

- Background: Cream (#F5F1E8)
- Node shape: Rounded rectangles or circles. Consistent across all five.
- Node fill: White with a subtle Juno Green border (2px, #5A8B6F)
- Node label: Bold, Juno Green (#5A8B6F)
- Intent question: Regular weight, medium grey, smaller size — inside the node or directly beneath
- Arrows: Juno Green, medium weight, with arrowheads
- Arrow labels (optional): Small, grey, placed near the midpoint of each arrow — brief phrase describing what flows (e.g., "lessons", "vendor cards", "milestones")
- Create node: Slightly larger than the others, or with a slightly stronger fill/border — to signal its role as the ecosystem engine

**Proportions:** Wide format, approximately 4:3 width-to-height ratio. The diagram should breathe — generous spacing between nodes.

**Tone:** Connected and intentional, but not mechanical. The flows should look organic, not like a flowchart.

---

### What the diagram should feel like to a reader

Five seconds of reading should communicate: *These five things are connected, and value moves between them.* Ten seconds should reveal the loops — Create feeds Learning, Learning feeds Home, Home drives Connections. The intent questions should reward a third pass: *Ah, each surface was designed around a specific question.*

The most important thing this diagram must NOT do: look like a standard app sitemap or a UX deliverable. It is not a navigation map. It is an argument about how value circulates.

---

## Usage notes

- All three diagrams should be created in Figma using the Juno brand system
- Export at 2x for web, 3x for any print or high-resolution usage
- The Fragmentation Diagram and Ecosystem Diagram should be wide-format (landscape orientation)
- The Governance Diagram should be tall-format (portrait orientation)
- None of the three diagrams should include any prototype screenshots — they are conceptual visualizations, not UI documentation
