# Juno Brand Identity & Design System

## Brand Overview

**Name:** Juno  
**Tagline:** "Connect, Learn, Grow Your Home Business"  
**Brand Theme:** "The Modern Hive" — a warm, collaborative ecosystem for homemaker entrepreneurs  
**Tagline (Internal):** "The Tool to Grow"

---

## Visual Identity

### Mascot System: The Tool-Bee

Juno's mascot is **Tool-Bee**, a friendly botanical bee that represents growth, collaboration, and productivity.

#### 2D Tool-Bee Icon (Primary UI Avatar)
- **Usage:** Default avatar for ALL users across the app
- **Purpose:** Privacy-first, consistent brand identity
- **Where:** Radar view, list views, home screen, chat previews, milestones, discussions
- **Design:** Clean, geometric, minimal bee face with happy expression
- **Scalability:** Designed to work at 24px and smaller
- **Colors:** Juno Green (#5A8B6F) body, Gold (#D4A86F) accents

#### 3D Tool-Bee Mascot (Limited Use)
- **Usage:** Onboarding screens, empty states, branding illustrations
- **Purpose:** Create warmth and personality at key moments
- **Where:** Welcome screen, onboarding flow, error states
- **Do NOT use:** In functional UI components, lists, or repeated elements

---

## Color Palette

### Primary Colors

| Color | Hex | Usage |
|-------|-----|-------|
| **Juno Green** | `#5A8B6F` | Primary actions, buttons, active states, branding |
| **Juno Green Light** | `#7AA98A` | Hover states, secondary elements |
| **Juno Green Dark** | `#4A7360` | Pressed states, emphasis |

### Accent Colors

| Color | Hex | Usage |
|-------|-----|-------|
| **Juno Gold** | `#D4A86F` | Highlights, achievements, special features |
| **Juno Gold Light** | `#E8C89A` | Subtle accents, decorative elements |

### Background Colors

| Color | Hex | Usage |
|-------|-----|-------|
| **Juno Cream** | `#F5F1E8` | Main background color |
| **Juno Cream Light** | `#FAF8F2` | Cards, elevated surfaces |
| **Juno Cream Dark** | `#EBE6D8` | Muted backgrounds, disabled states |

### Supporting Colors

| Color | Hex | Usage |
|-------|-----|-------|
| **Light Green BG** | `#E8F0EC` | Tags, chips, secondary backgrounds |
| **Soft Highlight** | `#D8E8DE` | Subtle highlights |

### Text Colors

| Color | Hex | Usage |
|-------|-----|-------|
| **Text Primary** | `#2D2D2D` | Headlines, primary text |
| **Text Secondary** | `#6B6B6B` | Body text, descriptions |
| **Text Muted** | `#999999` | Metadata, timestamps |

---

## Typography

**Font Family:** Inter (system fallback: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif)

### Hierarchy

- **H1:** 24px, Semibold (600)
- **H2:** 20px, Semibold (600)
- **Body:** 16px, Normal (400)
- **Label:** 14px, Medium (500)
- **Caption:** 13px, Normal (400)

---

## Shadows

- **Soft Shadow:** `0 4px 16px rgba(90, 139, 111, 0.08)`
- **Medium Shadow:** `0 6px 20px rgba(90, 139, 111, 0.12)`

---

## Avatar & Privacy System

### Avatar Visibility Rules

| Context | Avatar Type | Rationale |
|---------|-------------|-----------|
| **Radar View (Non-Connected)** | 2D Bee Icon | Privacy, consistency, clear brand identity |
| **List View (Non-Connected)** | 2D Bee Icon | Privacy, uniform appearance |
| **Home Screen (Top-Left)** | Real User Photo | User's own profile, quick access |
| **Radar Center Node** | Real User Photo | User's own profile, emphasized presence |
| **My People Section** | Real Photos | Connected users, established trust |
| **Stories from Community** | Real Photos + Thumbnails | User-submitted content, YouTube-style presentation |
| **Chat Previews** | 2D Bee Icon | Privacy until profile is opened |
| **Discussions/Questions** | 2D Bee Icon | Community representation, privacy |
| **Milestones** | 2D Bee Icon | Community representation |
| **Inside Profile View** | Real Image (Optional) | User choice, full profile context |

### Key Principles
- **Privacy First:** Real images shown only for connected users and user-submitted content
- **Trust-Based Reveal:** Connection status determines avatar type (bee = unknown, photo = connected)
- **Brand Recall:** Bee icon creates strong, memorable identity for the platform
- **Content Context:** Stories use real photos because they're meant to be shared publicly
- **User Empowerment:** User's own photo always visible to themselves (top-left, radar center)

---

## UI Patterns

### Buttons

**Primary Button:**
- Background: Juno Green (#5A8B6F)
- Text: Cream Light (#FAF8F2)
- Hover: Juno Green Dark (#4A7360)
- Shadow: Soft shadow on default, medium shadow on hover

**Secondary Button:**
- Background: Cream Light (#FAF8F2)
- Border: 2px solid Juno Green (#5A8B6F)
- Text: Juno Green (#5A8B6F)
- Hover: Light Green BG (#E8F0EC)

### Cards

- Background: Cream Light (#FAF8F2)
- Border Radius: 16px
- Shadow: Soft shadow
- Hover: Medium shadow

### Navigation

**Bottom Nav:**
- Background: Cream Light (#FAF8F2)
- Border: Cream Dark (#D8D3C8)
- Active State: Juno Green (#5A8B6F)
- Inactive State: Text Secondary (#6B6B6B)

### Tags & Chips

- Background: Light Green BG (#E8F0EC)
- Text: Juno Green (#5A8B6F)
- Border Radius: 999px (pill shape)

---

## Screen-Specific Guidelines

### Connections Screen (Radar)

**Visual Style:**
- Cream background (#F5F1E8)
- Orbital rings in Juno Green Light (#7AA98A) with varying opacity
- Connection nodes: Bee icons in cream circles
- Center node: User's bee avatar with subtle green shadow
- Distance-based colors:
  - Close (≤2km): #7AA98A
  - Medium (≤5km): #A3BDAF
  - Far (>5km): #C8D8CE

**No Visual Clutter:**
- Clean, minimal design
- Soft shadows
- Even spacing
- Clear hierarchy

### Home Screen

**Key Elements:**
- **Profile avatar (real photo)** in top-left - clickable to access profile
- Search bar with cream/green styling
- Notification icon in top-right
- Discussion avatars show bee icons (privacy for all users)
- Community milestones use emoji + text (no photos)
- **Stories from Community:** YouTube-style video cards with:
  - Real thumbnail images
  - Play button overlay
  - Duration badge (bottom-right)
  - User's real photo with name below
  - Tutorial-style titles
- Warm, inviting card-based layout

### Onboarding

**Visual Focus:**
- 3D Tool-Bee mascot as hero element
- Cream background with subtle botanical accent
- Clear, welcoming copy
- Primary CTA: Juno Green button
- Secondary option: Outlined green button

---

## Design Principles

1. **Warm, Not Cold:** Use cream backgrounds, not harsh white
2. **Friendly, Not Childish:** Professional yet approachable
3. **Consistent, Not Chaotic:** Bee icons everywhere for identity
4. **Private, Not Exposed:** Real photos only in profile views
5. **Premium, Not Generic:** Soft shadows, intentional spacing
6. **Botanical, Not Corporate:** Green tones inspired by nature

---

## Do's and Don'ts

### ✅ Do

- Use 2D bee icons for non-connected users and privacy contexts
- Show real photos for connected users (My People)
- Display user's own photo in top-left homepage and radar center
- Use real photos with YouTube-style thumbnails for Stories
- Maintain cream backgrounds throughout the app
- Use soft botanical green for primary actions
- Apply subtle, warm shadows
- Keep spacing consistent and generous
- Use gold sparingly for highlights

### ❌ Don't

- Show real photos for non-connected users on radar or lists
- Mix avatar styles without clear context (connected vs. non-connected)
- Use harsh white backgrounds
- Show real profile photos in discussion cards or question cards
- Overuse the 3D mascot in functional UI
- Use cold, corporate grays
- Add harsh shadows or borders
- Create visual clutter
- Use generic video thumbnails - make them look like real YouTube tutorials

---

## Component Inventory

### Core Components

- `BeeAvatar.tsx` - 2D bee icon for UI
- `ToolBeeMascot.tsx` - 3D bee for onboarding/branding
- `Avatar.tsx` - Avatar wrapper supporting bee icons and real photos
- `Button.tsx` - Juno-styled buttons
- `Card.tsx` - Warm cream cards
- `BottomNav.tsx` - Navigation with Juno colors
- `VideoStoryCard.tsx` - YouTube-style video cards with real photos

### Avatar Component API

```typescript
<Avatar
  variant="bee"          // Default: 2D bee icon
  variant="real"         // Real photo for connected users
  variant="me"           // User's own photo
  imageUrl="..."         // URL for real photos
  alt="..."             // Alt text
  className="..."       // Styling
/>
```

### Video Story Card Design

YouTube-inspired tutorial cards featuring:
- **Thumbnail:** Real content image (16:9 aspect ratio, 280x160px)
- **Play Button:** Centered, black/70% opacity, hover changes to Juno green
- **Duration Badge:** Bottom-right corner, black background
- **Title Overlay (Optional):** Gradient from bottom, 2-line clamp
- **User Info Section:**
  - Real user photo (circular, 36x36px)
  - Name (bold, 13px)
  - Business type (11px, muted)
- **Hover Effect:** Slight scale-up (1.02x) with enhanced shadow

---

## Accessibility

- Maintain WCAG AA contrast ratios
- Juno Green (#5A8B6F) on Cream Light (#FAF8F2): ✅ Pass
- Text Primary (#2D2D2D) on Cream backgrounds: ✅ Pass
- All interactive elements have clear focus states
- Bee avatars have proper alt text

---

## Future Considerations

- Add seasonal bee variations for special events
- Consider customizable bee accessories (hat, scarf) for profiles
- Explore animated bee transitions
- Develop illustration library with botanical themes

---

**Last Updated:** April 2026  
**Design System Version:** 1.0
