Redesign the “Continue Learning” card component in the Learning Hub of a mobile app for homemaker entrepreneurs.

Use the existing visual style of the app (green color palette, rounded cards, minimal layout). Do not change the overall aesthetic — only refine this component.

Design for mobile (390x844) using Auto Layout.

🧩 Component Structure

Create a single card component with the following layout:

Layout (Horizontal Structure)

Place elements in a left-right layout:

Left side:

Circular progress indicator

Right side:

Course information and actions stacked vertically

Left Section — Progress Indicator

Create a circular progress ring.

Requirements:

Display progress percentage inside (example: 60%)

Use primary green color for progress stroke

Background ring should be light grey

Keep stroke thin and minimal

Optional small label below percentage: “Completed”

This should be the primary visual focus.

Right Section — Content

Stack the following elements vertically:

1. Course Title

Max 2 lines

Example: “How to Price Homemade Food”

Use semibold text

2. Rating

Display star icon + rating value

Example: ⭐ 4.6

Use smaller font size

Use secondary text color (grey)

3. Primary Action Button

Button text:

Resume

Style:

Green background

White text

Rounded corners (12–16px)

Medium width (not full width if space constrained)

4. Secondary Action

Text link:

View Path →

Style:

Green text

Smaller than button

Minimal, no background

🎨 Visual Design Guidelines

Card background: white

Rounded corners: 16px

Soft shadow: subtle elevation

Padding inside card: 16px–20px

Maintain generous spacing between elements

📏 Spacing Rules

Space between progress and content: 16px–20px

Space between title and rating: 6–8px

Space between rating and button: 12–16px

Space between button and “View Path”: 8px

🚫 Constraints (Important)

Do NOT include:

Progress bars (only circular progress)

Thumbnail images

Extra buttons (no restart, no bookmark)

Excessive text or metadata

Keep the component minimal and focused.

🧠 UX Intent

The card should allow users to:

instantly understand their learning progress

quickly resume their course

optionally view the full learning path

The design should feel:

Clean
Focused
Action-oriented
Easy to scan

🔄 Interaction

Resume button should be primary tap target

View Path should navigate to the course structure screen

Progress should update dynamically

💡 Optional Enhancement

If progress is:

below 20% → show label: “Just Started”

above 80% → show label: “Almost Done”

Keep this subtle.

✅ Final Output

Generate a refined Continue Learning card component that integrates seamlessly with the existing Learning Hub UI and improves visual clarity, hierarchy, and usability.