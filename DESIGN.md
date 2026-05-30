---
name: Recanto Gobbo
description: A living sanctuary where the land, the craft, and the table are one.
colors:
  sandy-dune: "#EBD5C3"
  warm-cream: "#FFFDF8"
  forest-deep: "#1F3D2B"
  forest-mid: "#237D47"
  golden-amber: "#E8B923"
  burnt-copper: "#B85A05"
  aged-gold: "#9C7C16"
  warm-sienna: "#A86A2A"
  home-cream: "#F5F1EA"
  field-stone: "#3E3E2F"
  olive-badge: "#4B4D33"
  warm-sand: "#ECE2D5"
typography:
  display:
    fontFamily: "'Playfair Display', Georgia, serif"
    fontSize: "clamp(56px, 5.3vw, 76px)"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "normal"
  headline:
    fontFamily: "'Playfair Display', Georgia, serif"
    fontSize: "clamp(32px, 4vw, 52px)"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "normal"
  title:
    fontFamily: "'Playfair Display', Georgia, serif"
    fontSize: "clamp(22px, 2.5vw, 36px)"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "normal"
  overline:
    fontFamily: "'Montserrat', sans-serif"
    fontSize: "14px"
    fontWeight: 500
    lineHeight: 1
    letterSpacing: "1.5px"
  body:
    fontFamily: "'Inter', system-ui, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.7
    letterSpacing: "normal"
  label:
    fontFamily: "'Inter', system-ui, sans-serif"
    fontSize: "13px"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "0.5px"
rounded:
  sm: "8px"
  md: "14px"
  lg: "22px"
  xl: "32px"
  pill: "999px"
spacing:
  xs: "12px"
  sm: "24px"
  md: "56px"
  lg: "90px"
components:
  btn-pill-cta:
    backgroundColor: "#E8DCCB"
    textColor: "#3E3E2F"
    rounded: "{rounded.pill}"
    padding: "8px 22px"
  btn-pill-cta-hover:
    backgroundColor: "#EFE5D7"
    textColor: "#3E3E2F"
    rounded: "{rounded.pill}"
    padding: "8px 22px"
  btn-buy:
    backgroundColor: "#3E3E2F"
    textColor: "#FFFDF8"
    rounded: "{rounded.pill}"
    padding: "10px 20px"
  btn-buy-hover:
    backgroundColor: "#2F2F24"
    textColor: "#FFFDF8"
    rounded: "{rounded.pill}"
    padding: "10px 20px"
  btn-service:
    backgroundColor: "{colors.forest-deep}"
    textColor: "{colors.warm-cream}"
    rounded: "{rounded.sm}"
    padding: "10px 16px"
  product-card:
    backgroundColor: "{colors.warm-cream}"
    rounded: "{rounded.xl}"
    padding: "26px"
---

# Design System: Recanto Gobbo

## 1. Overview

**Creative North Star: "The Living Sanctuary"**

Recanto Gobbo is not a store or a resort; it is a place that remembers what the land tastes like. The visual system must carry that weight: unhurried, rooted, warm. Every design choice should feel as though it grew out of the earth rather than out of a template. The palette is the color of shade under forest canopy, of warm sand at afternoon, of honey poured over walnut wood. The typography is the weight of a family ledger, the warmth of a handwritten market sign.

The rhythm is generous. Spacing breathes. Nothing crowds. Copy speaks directly, the way someone who works the land speaks: no flourish that does not earn its place. This is a brand register surface; design IS the experience. A visitor's impression of this site is the first impression of the place itself.

What this system explicitly refuses: the generic agro-tourism brochure with stock-photo smiling farmers, teal-and-white layouts, and "sustainability" bullet points. It refuses the Instagram slow-living aesthetic — the beige-sage neutrals, the soft-serif minimalism that signals lifestyle but not place. It refuses e-commerce urgency: no discount badges, no buy-now immediacy. Recanto Gobbo is not a shop. It is an invitation.

**Key Characteristics:**
- Earth and forest palette, committed to warmth rather than neutrality
- Playfair Display (established brand identity) paired with Inter for clarity and Montserrat for overline precision
- Generous curves: nothing is sharp; radii from 8px (action buttons) to 999px (hero pills)
- Golden Amber used at 10% or less of any surface; its scarcity is its meaning
- Flat by default: surfaces rest calm; shadows respond to interaction, not decoration
- Photography as the primary surface material, never replaced by CSS color blocks

## 2. Colors: The Earth and Forest Palette

Two anchors govern every surface: Forest Deep (the ground the brand grew from) and the warm earth tones that surround it. Golden Amber enters as a signal, never a field.

### Primary
- **Forest Deep** (#1F3D2B): The brand's identity color. Primary text, the "Essência" section fill, navigation links, all primary action elements. Appears across 40-60% of text-bearing surfaces. Every page is anchored here.
- **Forest Mid** (#237D47): Lighter, more saturated green. Reserved for secondary CTAs, contact banner action links, and active-state feedback on dark surfaces. Never a background.

### Secondary
- **Sandy Dune** (#EBD5C3): Main background for interior pages (Sobre, Serviços, Contato). The color of warm packed earth in afternoon.
- **Home Cream** (#F5F1EA): The home page's background variant. Slightly cooler than Sandy Dune; used to give the landing experience its own distinct warmth register.
- **Warm Cream** (#FFFDF8): Header surface, card fills, submenu backgrounds. Near-white but always warm, never cold. The canvas on which Forest Deep rests.

### Tertiary
- **Golden Amber** (#E8B923): The hover accent. Also the icon color in the Essência section and the eyebrow underline rule on the About page. Never a background fill or dominant surface.
- **Aged Gold** (#9C7C16): Darker, more muted cousin of Golden Amber. Active navigation states, card title accents in the location widget. The settled version of the hover signal.
- **Warm Sienna** (#A86A2A): Active menu state. The warm burnt amber marking the current page.
- **Burnt Copper** (#B85A05): Pressed/deepest interaction state. Footer link hover, the CTA heart icon. Reserve for emphasis moments only.

### Neutral
- **Field Stone** (#3E3E2F): Dark olive used as text on the home page's cream background. Slightly warmer and less saturated than Forest Deep; prevents harsh contrast against the lighter home surface.
- **Olive Badge** (#4B4D33): Product badge fill and product hero buy button base. Military olive, muted, deliberate.
- **Warm Sand** (#ECE2D5): Product image placeholder background. Appears when images are loading; warm enough to not feel broken.

### Named Rules
**The Amber Rule.** Golden Amber (#E8B923) appears on 10% or less of any given surface. It marks interaction and occasion. A surface filled with amber has lost the color's meaning entirely. Every use must earn its place by scarcity.

**The Green Grounding Rule.** Every page is anchored to Forest Deep (#1F3D2B). It is not an accent; it is the ground. Do not lighten it to a "fresher" mid-green for visual air. The depth is the point. When a section needs a different background, the text remains Forest Deep.

**The No-Cold-White Rule.** Pure white (#FFFFFF) does not appear in this system. Every light surface carries warmth: Sandy Dune, Home Cream, or Warm Cream. Cold white reads as clinical and breaks the earth register.

## 3. Typography

**Display Font:** Playfair Display (Google Fonts, weights 600-700), with Georgia as fallback.
**Body Font:** Inter (Google Fonts, weights 400-700), with system-ui as fallback.
**Overline Font:** Montserrat (Google Fonts, weight 500), reserved exclusively for uppercase tracking labels.

*Identity note: Playfair Display appears on the reflex-reject list for greenfield decisions. This is an established brand identity, not a new choice. Do not second-guess it for existing surfaces. For any genuinely new surface extensions, verify it still serves the voice before reaching for it by reflex.*

**Character:** The pairing works through contrast of register, not contrast of weight alone. Playfair Display carries the brand's warmth and handmade history. Inter handles all functional, informational, and interactive text with clarity. Montserrat enters only for overlines: precise, tracked, ceremonial. Three voices in strict hierarchy — emotion, clarity, ceremony — never mixed within a role.

### Hierarchy
- **Display** (Playfair 700, clamp(56px, 5.3vw, 76px), line-height 1): Hero headlines only. Used at full emotional weight across hero surfaces. No maximum paragraph width constraint; these are single statements, not prose.
- **Headline** (Playfair 700, clamp(32px, 4vw, 52px), line-height 1.1): Page-level section headings. "Do sonho à vida no campo" scale. Used once per major section.
- **Title** (Playfair 700, clamp(22px, 2.5vw, 36px), line-height 1.2): Card titles, banner headlines, footer column headings, location card names.
- **Overline** (Montserrat 500, 13-16px, letter-spacing 1.3-1.8px, UPPERCASE): Section-entry ceremony labels. Always short. Always flanked by decorative rules on both sides. Never used for body content.
- **Body** (Inter 400, 14-17px, line-height 1.7-1.8): Running copy, card descriptions, page paragraphs. Cap at 65ch on prose passages to preserve reading comfort.
- **Label** (Inter 500-600, 12-15px, letter-spacing 0.5px): Interface labels, badge text, navigation meta, small price display.

### Named Rules
**The Three Voices Rule.** Playfair Display for emotion. Inter for clarity. Montserrat for ceremony. A fourth typeface is an intruder. Never mix within a role: all hero headlines are Playfair; all body copy is Inter; all overlines are Montserrat.

**The Italic Reserve.** Italic Playfair Display appears only in the handwriting or testimonial pattern (`.sobre-handwriting`). Casual italic use outside that context degrades the effect and reads as stylistic restlessness.

## 4. Elevation

This system is **flat by default**. Surfaces sit calmly at rest; depth is a state, not a condition. Shadows appear in response to interaction (hover, focus, flyout) or structural necessity (floating dropdowns, overlapping cards) — not to add visual interest to static elements.

The system's shadows carry a warm tint. Rather than neutral gray (`rgba(0,0,0,...)`), the shadow base uses Forest Deep (`rgba(31, 61, 43, ...)`) and Field Stone (`rgba(62, 62, 47, ...)`). A cold gray shadow does not belong to this palette. The forest follows the brand into the shadow.

### Shadow Vocabulary
- **Green Float** (`0 14px 30px rgba(31, 61, 43, 0.16)`): Submenus, map location widget, slider arrows. Forest-tinted ambient lift for floating UI elements.
- **Card Lift** (`0 14px 24px rgba(62, 62, 47, 0.16), 0 4px 8px rgba(0, 0, 0, 0.12)`): Service cards at rest. *Note: the preferred future direction is to move this shadow to hover-only, per the flat-by-default principle. Existing service cards carry it at rest; this is the gap to close.*
- **Card Lift Hover** (`0 22px 34px rgba(62, 62, 47, 0.22), 0 8px 12px rgba(0, 0, 0, 0.14)`): Cards on hover. The lift state.
- **Product Ambient** (`0 10px 35px rgba(0, 0, 0, 0.08), 0 2px 10px rgba(0, 0, 0, 0.04)`): Product cards. Softer, more neutral shadow for the white card against a cream background.
- **CTA Float** (`0 20px 40px rgba(31, 61, 43, 0.14)`): Location overlay cards, CTA cards floating over imagery.

### Named Rules
**The Flat-by-Default Rule.** Shadows are a response, not a decoration. At rest, surfaces are flat. A shadow that appears on a static card with no interactive meaning is adding visual noise, not depth.

**The Green Shadow Rule.** When tinting shadows, use Forest Deep (`rgba(31, 61, 43, ...)`) rather than neutral black. The forest is always present, even in the shadow.

## 5. Components

### Navigation
A fixed header (90px desktop, 110px mobile) on a Warm Cream (#FFFDF8) surface. Logo at left, centered nav links, institutional phrase at right on desktop.
- **Links:** Inter 500, 20px, Forest Deep. Subtle text-shadow (`0 8px 8px rgba(31, 61, 43, 0.22)`) ties them to the surface.
- **Hover:** Shift to Golden Amber (#E8B923), 0.3s ease. No underline; color alone carries the state.
- **Active:** Warm Sienna (#A86A2A).
- **Submenu:** 14px radius, Warm Cream fill, Green Float shadow. Fades in with `translateY(10px → 0)` over 0.25s ease. Disappears on mouse-out.
- **Mobile:** Full-width dropdown below header. Large touch targets (48px+ per link). Font Awesome icons at 34px preceding each link label. Active icon tints to Warm Sienna.

### Pill CTA Links
The primary interactive pattern for hero surfaces. Full-rounded pill with a warm tan fill.
- **Shape:** border-radius 999px.
- **Default:** Background #E8DCCB (Warm Tan), text Field Stone (#3E3E2F). Padding 8px 22px mobile; scales to 16px 45px on large screens.
- **Hover:** Lighten to #EFE5D7, `translateY(-1px)`, 0.2s ease.
- **Focus:** `outline: 2px solid #9C7C16; outline-offset: 2px`.
- **Min-width:** 188px mobile, 300px on large screens.

### Buy Button
The purchase action on product cards. Grounded and unhurried, not urgent.
- **Shape:** border-radius 999px, full-width within its card context.
- **Default:** Field Stone (#3E3E2F) fill, Warm Cream text. Inter 500, 18-22px. Min-height 48px.
- **Hover:** Darken to #2F2F24, `translateY(-1px)`, 0.2s ease. Icon included (shopping bag SVG).
- **Hero exception:** The products page cinematic hero uses a gradient buy button (#b8860b → #d4a437). This is a surface-specific exception for high-contrast dark hero backgrounds; standard product cards use solid fill only.

### Service Card
A compact card for service offerings, floating above the hero via negative margin.
- **Shape:** 18px radius. Fixed height (260px desktop, 176px mobile).
- **Surface:** #F5F2EC fill. A `::before` gradient overlay adds a subtle glass sheen at 0.65 opacity. *This sheen is borderline glassmorphism; future work should simplify it to a tonal background tint.*
- **Shadow:** Card Lift shadow at rest (see Elevation section; target: move to hover-only).
- **On hover:** Card Lift Hover shadow, `translateY(-6px)`, 220ms ease.
- **CTA:** Forest Deep button (btn-service) pinned to card bottom via `margin-top: auto`.

### Product Card
A featured product container with image, title, price, and buy action.
- **Shape:** 32px radius, Warm Cream (#FFFDF8) fill. Product Ambient shadow at rest.
- **Image area:** 380px tall (500px mobile), gradient placeholder (#D9CCB5 → #C9B89D). Image scales to 1.04x on card hover over 0.5s ease.
- **Badge:** Pill-shaped (50px radius), Olive Badge (#4B4D33) fill, white Inter 600 12px text. Absolute-positioned in top-left of image area.
- **Content:** 26px padding. Title in Playfair 700 30px, price in Inter 600 24px, both in Field Stone (#4B473D).
- **Thumbnails:** Circular-cornered (12px radius) variant images positioned at image bottom. Active thumbnail: white border, full opacity.

### Section Overline
The decorative ceremony label used to open sections.
- **Anatomy:** Flanking rules (40-80px wide, 1px tall) on both sides of uppercase Montserrat text. Rules color: Warm Sienna (#B97945) on light backgrounds, white on dark.
- **Type:** Montserrat 500, 13-16px, letter-spacing 1.3-1.8px, uppercase, Forest Deep on light, white on dark.
- **Spacing:** 7-18px margin-bottom before the following headline.

### Essência Section
A deep Forest Deep (#1F3D2B) full-width band with four value pillars. Signature brand moment.
- **Background:** Forest Deep, with gentle elliptical border-radius on top and bottom edges (`border-radius: 50% 4%`) creating an organic, curved border.
- **Dividers:** Vertical rules between pillars in Golden Amber at 45% opacity (`rgba(232, 185, 35, 0.45)`).
- **Icons:** Font Awesome icons at 34px, Golden Amber color.
- **Text:** White for headings, white at reduced opacity for body. Overline in Golden Amber.

## 6. Do's and Don'ts

### Do:
- **Do** anchor every surface to Forest Deep (#1F3D2B), whether as text, background, or warm shadow tint.
- **Do** let photography carry primary visual weight on hero surfaces. A great image with minimal overlay text is the correct answer.
- **Do** keep Golden Amber (#E8B923) at 10% or less of any given screen. Scarcity is the mechanism.
- **Do** use warm-tinted shadows (`rgba(31, 61, 43, ...)`) rather than neutral gray. Cold shadows break the palette.
- **Do** use pill radii (999px) for primary CTAs and product buy actions. The full-round is a brand signature.
- **Do** use the three-font system as strict roles: Playfair Display for emotion, Inter for clarity, Montserrat for ceremony.
- **Do** reserve italic Playfair Display for the handwriting and testimonial pattern only.
- **Do** use Montserrat overlines with flanking decorative rules to open sections ceremonially.
- **Do** treat the Warm Cream (#FFFDF8) header and card surface as the "paper" of the system: flat, clean, warm.

### Don't:
- **Don't** make this look like generic agro-tourism: stock-photo smiling farmers, teal-and-white palettes, sustainability bullet points in identical icon-text card grids.
- **Don't** adopt Instagram slow-living aesthetics: soft sage, single-weight sans, lifestyle-curator minimalism. This system is warm and deep, not airbrushed.
- **Don't** introduce e-commerce urgency: discount badges, countdown timers, "limited availability" signals. The brand is an invitation.
- **Don't** use gradient text (`background-clip: text`). Use weight or size for emphasis.
- **Don't** introduce a fourth typeface. The three-voice system is complete.
- **Don't** use Golden Amber (#E8B923) as a background fill. A surface flooded with amber reads as a food-delivery app, not a forest sanctuary.
- **Don't** use sharp corners (0-4px radius) on containers, cards, or buttons. The system rounds generously; sharpness reads as hostile in this context.
- **Don't** substitute colored CSS blocks or placeholder panels where photography belongs. If a section is image-led, ship a real image.
- **Don't** use `backdrop-filter: blur()` outside the cinematic hero context. The glass effect is reserved for that specific surface; applied elsewhere it becomes decoration.
- **Don't** use pure white (#FFFFFF) as a background. Every light surface is warm: Sandy Dune, Home Cream, or Warm Cream.
