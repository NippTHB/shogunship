---
name: ShogunShip
description: A crafted pixel-art collector guild connecting international collectors with trusted purchasing support in Japan.
colors:
  night-foundation: "#080d14"
  deep-ledger: "#0a1220"
  guild-panel: "#0f1b2d"
  inset-blue: "#1a2b3c"
  stone-border: "#2a3f5a"
  quiet-ink: "#4a5a6a"
  muted-copy: "#8090a0"
  secondary-copy: "#a0b0c0"
  clear-copy: "#c8d8e8"
  parchment-gold: "#e8c87a"
  autumn-orange: "#ff6b2b"
  meadow-green: "#6abf5e"
  water-blue: "#7ab8ff"
typography:
  display:
    fontFamily: "Press Start 2P, monospace"
    fontSize: "clamp(1.5rem, 3vw, 2.25rem)"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "normal"
  headline:
    fontFamily: "Press Start 2P, monospace"
    fontSize: "clamp(1.25rem, 2vw, 1.5rem)"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "normal"
  title:
    fontFamily: "Press Start 2P, monospace"
    fontSize: "9px"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "normal"
  body:
    fontFamily: "VT323, monospace"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "normal"
  label:
    fontFamily: "Press Start 2P, monospace"
    fontSize: "7px"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "0.05em"
rounded:
  none: "0px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  section: "80px"
components:
  button-primary:
    backgroundColor: "{colors.autumn-orange}"
    textColor: "{colors.night-foundation}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "12px 24px"
  button-secondary:
    backgroundColor: "{colors.inset-blue}"
    textColor: "{colors.parchment-gold}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "12px 24px"
  guild-card:
    backgroundColor: "{colors.guild-panel}"
    textColor: "{colors.clear-copy}"
    rounded: "{rounded.none}"
    padding: "16px"
  status-chip:
    backgroundColor: "{colors.night-foundation}"
    textColor: "{colors.secondary-copy}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "4px 8px"
---

# Design System: ShogunShip

## Overview

**Creative North Star: "The Autumn Collector Guild"**

ShogunShip should feel like entering a quiet guild hall at the edge of a Japanese countryside village: carefully catalogued objects, warm human stewardship, and a restrained sense of adventure. The current pixel-art vocabulary is the foundation, but future work must favor warmth, trust, and tangible craft over arcade intensity.

The visual system is crafted and welcoming. It uses square geometry, pixel typography, item-led imagery, ledger-like information, and deliberate color accents. Interfaces should feel handmade and accountable, as though a small local team prepared each record for a collector personally.

The system is quietly layered. Depth comes from tonal surfaces, purposeful borders, and occasional hard pixel shadows. Not every card, label, or section should demand equal attention. The strongest treatments are reserved for primary actions, meaningful objects, and trust-building evidence.

**Key Characteristics:**

- Pixel-art character with adult collector credibility
- Warm, personal guild atmosphere rather than competitive game energy
- Quietly layered navy surfaces with clear functional hierarchy
- Square, tactile controls and structural borders
- Item imagery, arrival photos, and inspection evidence as essential visual content
- Selective autumn, meadow, and water accents

## Colors

The extracted palette is a nocturnal pixel interface with parchment, autumn, meadow, and water accents. Future work should preserve these tokens while moving their composition toward the environmental warmth described in PRODUCT.md.

### Primary

- **Parchment Gold:** The principal highlight for important headings, borders, signature marks, and trusted information.
- **Autumn Orange:** The action color for primary buttons, active emphasis, and rare structural shadows. It must remain scarce enough to signal importance.

### Secondary

- **Meadow Green:** A supporting trust and success accent. Use for verified states, positive indicators, and limited countryside references.
- **Water Blue:** A restrained supporting accent for routes, marketplace access, informational states, and soft environmental contrast.

### Tertiary

- **Night Foundation:** The deepest canvas and image-overlay color.
- **Deep Ledger:** A subtle alternate section surface.
- **Guild Panel:** The principal card and navigation surface.
- **Inset Blue:** A secondary control and inset surface.

### Neutral

- **Stone Border:** The default structural border and inactive state.
- **Quiet Ink:** Reserved for deeply muted metadata only.
- **Muted Copy:** Supporting prose and collector notes.
- **Secondary Copy:** Compact metadata and quiet labels.
- **Clear Copy:** High-priority body text on dark surfaces.

### Named Rules

**The Environmental Accent Rule.** Meadow green and water blue support the guild atmosphere; they never dominate full-page backgrounds.

**The Autumn Signal Rule.** Autumn orange marks action or exceptional emphasis. If orange appears everywhere, it communicates nothing.

**The Contrast Is Craft Rule.** Body copy must reach WCAG AA contrast. Pixel styling never excuses unreadable color combinations.

## Typography

**Display Font:** Press Start 2P (with monospace fallback)  
**Body Font:** VT323 (with monospace fallback)  
**Label/Mono Font:** Press Start 2P

**Character:** Press Start 2P supplies the deliberate, crafted pixel identity. VT323 keeps longer explanations conversational and readable. Their contrast should distinguish guild signage from the founders' clear, human explanations.

### Hierarchy

- **Display** (400, `clamp(1.5rem, 3vw, 2.25rem)`, 1.5): Hero statements and the single most important message in a section.
- **Headline** (400, `clamp(1.25rem, 2vw, 1.5rem)`, 1.5): Section titles and major trust claims.
- **Title** (400, `9px`, 1.5): Card names, item names, and concise component headings.
- **Body** (400, `18px`, 1.5): Explanations, founder context, process details, and collector stories. Keep lines within roughly 65 characters when possible.
- **Label** (400, `7px`, `0.05em`, uppercase): Short metadata, statuses, and compact interface labels only.

### Named Rules

**The Signage and Conversation Rule.** Press Start 2P is signage; VT323 is conversation. Never set paragraphs or detailed explanations in the pixel display font.

**The Tiny Label Limit.** Labels below `8px` are reserved for secondary metadata. Essential instructions and actions must be larger.

## Elevation

The system is quietly layered. Dark tonal steps establish most depth: Night Foundation behind Deep Ledger, then Guild Panel and Inset Blue. Hard pixel shadows remain a signature treatment, but they are structural punctuation rather than a default decoration.

### Shadow Vocabulary

- **Primary Pixel Lift** (`4px 4px 0 #ff6b2b`): Primary actions and signature dialog boxes.
- **Featured Pixel Lift** (`6px 6px 0 #ff6b2b`): Important imagery, provenance objects, or one featured trust moment per section.
- **Quiet Colored Lift** (`4px 4px 0` at approximately 27% accent opacity): Supporting cards that need separation without visual shouting.
- **Pressed State** (`0 0 0`): Buttons move into their shadow to create tactile feedback.

### Named Rules

**The Quiet Layer Rule.** Begin with tonal layering and borders. Add a hard shadow only when the element deserves physical emphasis.

**The One Featured Lift Rule.** A section may contain many cards, but only one visual moment should receive the strongest shadow treatment.

## Components

Components are crafted and welcoming: square-edged, tactile, legible, and direct. They should communicate the care of a small guild rather than the speed of an arcade interface.

### Buttons

- **Shape:** Square and tactile (`0px` radius) with a `3px` border.
- **Primary:** Autumn Orange background, Night Foundation text, Parchment Gold or light-orange border, and `12px 24px` padding.
- **Hover / Focus:** Move `2px` into the hard shadow on hover; use a visible `3px` Autumn Orange focus outline. Active state moves fully into the shadow.
- **Secondary:** Inset Blue background with Parchment Gold text. Use for lower-priority exploration actions.

### Chips

- **Style:** Compact square labels with Night Foundation or rarity-color backgrounds, `1px` to `2px` borders, and Press Start 2P labels.
- **State:** Color may identify status or rarity, but text must always state the meaning.

### Cards / Containers

- **Corner Style:** Completely square (`0px` radius).
- **Background:** Guild Panel for standard cards; Night Foundation for inset or featured dialogue areas.
- **Shadow Strategy:** Tonal layering first, quiet colored lift second, full pixel lift only for featured content.
- **Border:** `2px` for supporting containers, `4px` for featured cards and imagery.
- **Internal Padding:** `16px` standard, `24px` for spacious trust-building content.

### Inputs / Fields

- **Style:** Square, dark inset surface with a Stone Border and clear body text.
- **Focus:** Autumn Orange focus outline with no soft glow.
- **Error / Disabled:** Errors require text plus a destructive color; disabled fields use Quiet Ink and remain clearly readable.

### Navigation

Navigation uses a fixed Night Foundation bar with a strong Parchment Gold lower border. Desktop links are compact pixel labels; the primary action uses the orange tactile button. Mobile navigation becomes a full-screen guild menu with visible text labels and a clear close control.

### Guild Dialog

Guild dialogs are signature trust containers: Night Foundation surface, Parchment Gold `4px` border, optional Autumn Orange pixel lift, and a small title inset into the upper border. Use them for founder messages, inspection notes, and high-value reassurance, not generic content.

### Provenance Card

Provenance cards pair decisive item imagery with a Guild Panel record. Rarity or status colors may frame the item, but factual information, marketplace source, arrival evidence, inspection details, and customer ownership must remain more prominent than game mechanics.

## Do's and Don'ts

### Do:

- **Do** make the site feel like a lived-in collector guild, with pixel-game language supporting the atmosphere rather than controlling every interaction.
- **Do** use arrival photos, inspection evidence, founder context, and item documentation as primary visual content.
- **Do** use Night Foundation, Deep Ledger, Guild Panel, and Inset Blue as a quiet tonal depth system.
- **Do** reserve Parchment Gold and Autumn Orange for important UI moments.
- **Do** use Meadow Green and Water Blue as selective environmental and semantic accents.
- **Do** maintain square geometry, crisp borders, pixel rendering, and immediate tactile feedback.
- **Do** keep body text readable and compliant with WCAG 2.2 AA.
- **Do** present ShogunShip as a service helping customers buy from third-party Japanese sellers and marketplaces.

### Don't:

- **Don't** make ShogunShip feel like a marketplace that lists or sells its own inventory.
- **Don't** make the site feel like a brown workshop dominated by soil and timber tones.
- **Don't** create a flat field of uninterrupted green or blue.
- **Don't** turn the interface into a neon arcade game or competitive RPG.
- **Don't** use generic gaming-themed landing-page patterns as a substitute for trust-building content.
- **Don't** make the experience resemble a corporate logistics dashboard.
- **Don't** make the brand feel like a distant or exclusive luxury marketplace.
- **Don't** let every card, label, border, and shadow demand equal attention.
- **Don't** use culturally stereotyped or novelty interpretations of Japan.
- **Don't** make the service resemble an anonymous dropshipping or proxy-buying company.
- **Don't** imply third-party marketplace inventory belongs to ShogunShip.
- **Don't** use excessive game terminology, constant rarity mechanics, or arcade status language.
- **Don't** rely on soft shadows, rounded cards, glassmorphism, or gradient text.
