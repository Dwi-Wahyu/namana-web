# Design System Document: The Cobalt Editorial

## 1. Overview & Creative North Star
**Creative North Star: "The Digital Blue-Print"**

This design system moves away from the tired, "earthy" tropes of traditional coffee shops. We are not designing for a rustic cabin; we are designing for the high-performance urbanite. The system is a fusion of **Digital Brutalism** and **High-Fashion Editorial**. 

We achieve a "signature" look by leaning into the high contrast of Royal Cobalt Blue against stark, clinical whites and deep blacks. The layout philosophy rejects the standard symmetrical grid in favor of **intentional asymmetry**—where typography intentionally overshoots container edges and images use architectural cropping to create a sense of movement and "third space" energy.

---

## 2. Colors: Tonal Architecture
The palette is hyper-modern, cold, and electric. We use blue not as a secondary accent, but as a structural force.

### The Palette (Material Selection)
- **Primary (`#0846ed`)**: Royal Cobalt. Use for high-impact surfaces and primary CTAs.
- **Surface & Background (`#f6f6f6`)**: A clinical, clean off-white that prevents eye strain while maintaining a "fresh" digital feel.
- **On-Surface (`#2d2f2f`)**: Modern Black. Used for maximum legibility in body text.

### The "No-Line" Rule
**Strict Mandate:** 1px solid borders are prohibited for sectioning. 
Boundaries must be defined through **Background Color Shifts**. For example, a `surface-container-low` section should sit directly against a `surface` background. To separate content, use white space or the "Blue Tile" texture.

### Surface Hierarchy & Nesting
Treat the UI as a physical stack of materials. 
1. **Base Layer:** `surface` (#f6f6f6)
2. **Nesting Tier 1:** `surface-container-low` (#f0f1f1) for secondary content blocks.
3. **Nesting Tier 2:** `surface-container-highest` (#dbdddd) for elevated interaction points.
4. **The Signature Layer:** `primary` (#0846ed) used for "Hero" sections to create an immersive, branded environment.

### The Glass & Gradient Rule
To prevent the UI from looking "flat" or "cheap," floating elements (like navigation bars or hovering order summaries) must utilize **Glassmorphism**.
- **Token:** `surface-container-lowest` (#ffffff) at 70% opacity + 20px Backdrop Blur.
- **Gradients:** Use subtle transitions from `primary` (#0846ed) to `primary-container` (#859aff) on large buttons to add "soul" and depth.

---

## 3. Typography: Editorial Authority
We use a dual-font system to balance technical precision with urban personality.

- **Display & Headlines (Space Grotesk):** This is our "high-performance" face. It is wide, geometric, and aggressive. Use `display-lg` (3.5rem) with tight letter-spacing (-0.02em) for hero headlines to mimic premium street-wear branding.
- **Body & Labels (Plus Jakarta Sans):** A clean, modern sans-serif that ensures readability for menus and long-form work-from-cafe logs. 
- **The Hierarchy Strategy:** Headlines should feel "oversized" compared to body text. This 4:1 scale ratio creates an editorial, Instagram-ready aesthetic that feels intentional rather than accidental.

---

## 4. Elevation & Depth: Tonal Layering
Traditional drop shadows are too "standard software." We use **Tonal Layering** to imply height.

- **The Layering Principle:** Instead of a shadow, place a `surface-container-lowest` card on a `surface-container-low` background. The subtle 2% shift in brightness provides a "soft lift" that feels architectural.
- **Ambient Shadows:** For floating elements (e.g., Modals), use a "Cobalt Tinted Shadow."
    - **Values:** `0px 20px 40px rgba(8, 70, 237, 0.08)`
    - This replaces grey shadows with a faint blue glow, tying the object to the brand's light source.
- **The "Ghost Border":** If a separator is required for accessibility, use the `outline-variant` token at **15% opacity**. It should be felt, not seen.

---

## 5. Components

### Buttons: The High-Performance Trigger
- **Primary:** `primary` background, `on-primary` text. No border. `md` (0.375rem) corner radius.
- **Secondary:** `surface-container-highest` background. Bold `spaceGrotesk` label.
- **Tertiary:** No background. `primary` text with an underline that only appears on hover.

### Chips: The Navigation Grid
- Styled like **Blue Ceramic Tiles**. Use square corners (`none`) and a high-gloss finish (subtle gradient). Use these for coffee categories (Espresso, Cold Brew, Pour Over).

### Input Fields: Minimalist Frames
- No background color. Only a bottom "Ghost Border" (10% `outline`). When focused, the border transforms into a 2px `primary` cobalt line.

### Cards & Lists: The No-Divider Rule
- **Forbid dividers.** Use `1.5rem` of vertical white space (Spacing Scale) to separate items. 
- **Signature Accent:** Use a 4px vertical "Rattan" texture strip on the left-hand side of featured list items to denote "Premium/Featured" status.

### Custom Component: The "Instagram Frame"
- A specific image container component that uses a `primary` cobalt frame with `display-sm` typography overlaying the corner, designed specifically for social sharing within the app.

---

## 6. Do's and Don'ts

### Do
- **DO** use "Aggressive Padding." Give elements 2x the space you think they need to achieve a gallery-like feel.
- **DO** use the Blue Ceramic Tile texture as a background for small, high-intensity components like "Add to Cart" or "Loyalty Points."
- **DO** overlap elements. Let a photo of a latte bleed behind a Cobalt Blue text box.

### Don't
- **DON'T** use rounded corners larger than `xl` (0.75rem). We want "sharp and modern," not "bubbly and cute."
- **DON'T** use brown, beige, or cream. If it looks "cozy," it's wrong. It should look "electric."
- **DON'T** use 100% opaque black for text. Use `on-surface` (#2d2f2f) to keep the contrast sophisticated rather than harsh.
- **DON'T** use standard icons. Use thick-stroke (2px) geometric icons that match the weight of `spaceGrotesk`.