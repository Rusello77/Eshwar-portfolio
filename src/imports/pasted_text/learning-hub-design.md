Design a mobile Learning Hub UI for a community-driven app for Indian homemaker entrepreneurs running small home businesses such as baking, pickles, tailoring, handmade crafts, homemade meals, and beauty services.

The Learning Hub should feel like a supportive, practical, and community-based learning ecosystem, not just a content library.

Maintain the existing green visual aesthetic of the app:

soft green palette

rounded cards

minimal layout

friendly tone

Design for mobile (390x844) using Auto Layout.

🧭 Overall Structure

Create the Learning Hub with the following section hierarchy in order:

1️⃣ Continue Learning

Top section.

Display a resume learning card.

Include:

Course thumbnail
Title
Progress bar
Progress percentage
Resume button

Example:

“How to Price Homemade Food”
Progress: 60%

This section should feel personal and actionable.

2️⃣ Learning Paths ⭐

Section title:

Learning Paths

Display horizontal scroll cards.

Each card includes:

Illustration or thumbnail
Path title
Short description
Number of lessons

Examples:

Start Your First Business
Grow Your Customer Base
Improve Packaging & Branding
Sell on Instagram

Cards should feel slightly larger than normal cards.

3️⃣ Filter + Category Row

Create a sticky horizontal section.

Include:

Scrollable chips:

All
Recommended
Beginner
Marketing
Pricing
Packaging
Social Media
Finance

Add a filter icon button on the right.

Active chip:

Filled green
White text

Inactive:

White background
Grey text

4️⃣ Advanced Filter Panel

When user taps filter icon, open a bottom sheet modal.

Title:

Find what you need

Filter Sections
Content Type

Checkbox list:

Video lessons
Learning paths
Community stories
Tools & templates
Live sessions

Skill Level

Radio buttons:

Beginner
Intermediate
Advanced

Default = Beginner

Business Type

Checkbox list:

Baking
Pickles & Snacks
Tailoring
Handmade Crafts
Beauty Services
Homemade Meals

Duration

Checkboxes:

Under 5 min
5–15 min
15–30 min

Goals

Checkbox list:

Start a business
Improve sales
Learn marketing
Manage time
Improve packaging

Format

Checkbox list:

Step-by-step course
Quick tip
Story-based learning

Sort By

Radio options:

Most relevant
Most popular
Recently added
Shortest duration

Bottom Actions

Reset button
Apply Filters (primary green button)

5️⃣ Recommended Content Feed

Section title:

Recommended for You

Display vertical content cards.

Mix content types:

Video
Story
Quick tip

Each card includes:

Thumbnail
Tag (Marketing / Pricing etc.)
Title
Duration
Optional label:

Beginner / Story / Popular

Include bookmark icon.

6️⃣ Learn from Real Stories ⭐

Section title:

Learn from Real Stories

Display horizontal scroll video cards.

Each card includes:

Video thumbnail
Play icon
Profile image
Name
Business type

Example:

Latha Nair
Homemade Pickles

When tapped → open Story Detail Page

Story Detail Page

Include:

Video player at top
Business journey text
Challenges faced
Lessons learned
Practical tips

Include button:

Ask the Community

7️⃣ Tools & Templates ⭐

Section title:

Tools for Your Business

Display horizontal cards.

Each card includes:

Tool name
Short description
Icon

Examples:

Pricing Calculator
Order Tracker
Packaging Checklist
Expense Tracker

CTA:

Use Tool / Download

8️⃣ Live Sessions & Mentors

Section title:

Learn with Experts

Display cards:

Session title
Mentor name
Date / time

Buttons:

Join
Remind Me

🔍 Active Filter Feedback

When filters are applied:

Display selected filters as removable chips above content.

Example:

Marketing ✕ Beginner ✕

🚫 Empty State

If no results:

Show illustration + text:

“No results found. Try adjusting your filters.”

Button:

Reset Filters

🎨 Design Guidelines

Maintain:

consistent spacing

soft shadows

rounded cards

green accents

Use horizontal scroll where needed to avoid clutter.

Ensure content is easy to scan and not overwhelming.

🔄 Interaction Flow

Include flows:

Learning Hub → Apply filters → Updated content

Learning Hub → Learning Path → Path details

Learning Hub → Story → Story detail page

Learning Hub → Tool → Tool usage

Learning Hub → Session → Join flow

🧠 UX Intent

The Learning Hub should support:

structured learning (paths)

exploration (recommended feed)

community learning (stories)

practical action (tools)

real support (mentors)

The experience should feel:

Helpful
Empowering
Community-driven