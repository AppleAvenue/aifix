# Sole Theory - Design System Documentation

## Overview

This design system document outlines all the visual and interactive design elements used in the Sole Theory Shopify theme. Use this as a reference when customizing or extending the theme.

## Color Palette

### Primary Colors

| Color Name | HEX Code | RGB | Usage |
|------------|----------|-----|-------|
| Primary Black | `#000000` | rgb(0, 0, 0) | Main backgrounds, header |
| Secondary Red | `#ff0000` | rgb(255, 0, 0) | CTAs, accents, highlights |
| White | `#ffffff` | rgb(255, 255, 255) | Text on dark backgrounds |

### Secondary Colors

| Color Name | HEX Code | RGB | Usage |
|------------|----------|-----|-------|
| Dark Gray | `#1a1a1a` | rgb(26, 26, 26) | Alternate text, gradients |
| Deep Black | `#0a0a0a` | rgb(10, 10, 10) | Footer, dark sections |
| Light Gray | `#f5f5f5` | rgb(245, 245, 245) | Light backgrounds (if needed) |
| Bright Red | `#ff3333` | rgb(255, 51, 51) | Hover states, accents |
| Light Red | `#ff6666` | rgb(255, 102, 102) | Gradients, banners |

### Color Usage Guidelines

- **Black (#000000)**: Use as the primary background color to create a premium, bold aesthetic
- **Red (#ff0000)**: Reserve for important actions and highlights - don't overuse
- **White (#ffffff)**: Primary text color on dark backgrounds for maximum contrast
- **Gradients**: Combine reds (#ff0000 → #ff6666) for banners and special sections

## Typography

### Font Families

**Heading Font: Archivo**
- Source: Google Fonts
- Weights: 400, 500, 600, 700, 800
- Usage: All headings (h1-h6), logo, buttons, labels

**Body Font: Questrial**
- Source: Google Fonts
- Weight: 400
- Usage: Body text, descriptions, form inputs

### Type Scale

| Element | Size | Weight | Letter Spacing | Line Height |
|---------|------|--------|----------------|-------------|
| H1 (Hero) | 6rem (96px) | 800 | 10px | 1.1 |
| H2 (Section) | 3rem (48px) | 700 | 4px | 1.2 |
| H3 (Subsection) | 2.5rem (40px) | 700 | 2px | 1.2 |
| H4 (Card Title) | 1.5rem (24px) | 700 | 1px | 1.3 |
| Body Large | 1.2rem (19.2px) | 400 | 1px | 1.6 |
| Body | 1rem (16px) | 400 | 0.5px | 1.6 |
| Button | 1rem (16px) | 700 | 2px | 1.4 |
| Small | 0.9rem (14.4px) | 400 | 0.5px | 1.5 |

### Responsive Typography

**Mobile (< 768px)**
- H1: 3rem (48px)
- H2: 2rem (32px)
- H3: 1.8rem (28.8px)

**Small Mobile (< 480px)**
- H1: 2rem (32px)
- H2: 1.5rem (24px)
- Button: 0.9rem (14.4px)

## Spacing System

### Base Unit
- Base: 1rem (16px)
- All spacing uses multiples of 0.5rem (8px)

### Spacing Scale

| Name | Value | Pixels | Usage |
|------|-------|--------|-------|
| xs | 0.5rem | 8px | Tight spacing, icons |
| sm | 1rem | 16px | Component padding |
| md | 1.5rem | 24px | Card padding, gaps |
| lg | 2rem | 32px | Section spacing |
| xl | 3rem | 48px | Large gaps |
| 2xl | 4rem | 64px | Section padding |
| 3xl | 5rem | 80px | Major section padding |

### Layout Spacing

- **Section Padding**: 5rem (80px) top and bottom
- **Container Padding**: 2rem (32px) left and right
- **Grid Gap**: 2rem (32px)
- **Component Gap**: 1rem - 1.5rem

## Layout & Grid

### Container
- **Max Width**: 1400px
- **Padding**: 2rem (32px) on sides
- **Centered**: margin: 0 auto

### Grid System

**Product Grid**
```css
display: grid;
grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
gap: 2rem;
```

**Responsive Breakpoints**
- Desktop: > 1024px (4 columns)
- Tablet: 768px - 1024px (2-3 columns)
- Mobile: < 768px (1 column)

## Components

### Buttons

#### Primary Button (.cta-btn)
- **Background**: #ff0000
- **Color**: #ffffff
- **Padding**: 1rem 3rem
- **Border Radius**: 50px
- **Font Weight**: 700
- **Letter Spacing**: 2px
- **Hover**: translateY(-3px) + shadow

#### Secondary Button (.add-to-cart)
- **Background**: transparent
- **Border**: 2px solid #ffffff
- **Color**: #ffffff
- **Padding**: 0.8rem
- **Border Radius**: 50px
- **Hover**: Background #ff0000

#### Back Button (.back-btn)
- **Background**: transparent
- **Border**: 2px solid #ffffff
- **Padding**: 0.8rem 1.5rem
- **Border Radius**: 50px
- **Hover**: Background #ff0000 + translateX(-5px)

### Product Cards

**Structure**:
- Image container: 300px height
- Padding: 1.5rem
- Border: 1px solid rgba(255, 255, 255, 0.1)
- Border Radius: 20px
- Background: rgba(255, 255, 255, 0.03)

**Hover State**:
- Transform: translateY(-10px)
- Box Shadow: 0 20px 40px rgba(255, 0, 0, 0.3)
- Border Color: #ff0000
- Image Scale: 1.1

### Navigation

**Header**:
- Position: Fixed
- Background: rgba(0, 0, 0, 0.95) with backdrop-filter blur
- Padding: 1.5rem 0
- Border Bottom: 1px solid rgba(255, 255, 255, 0.1)

**Scrolled State**:
- Padding: 1rem 0
- Box Shadow: 0 4px 20px rgba(0, 0, 0, 0.5)

### Forms

**Input Fields**:
- Padding: 1rem
- Background: rgba(255, 255, 255, 0.05)
- Border: 1px solid rgba(255, 255, 255, 0.2)
- Border Radius: 10px
- Color: #ffffff

**Focus State**:
- Border Color: #ff0000
- Background: rgba(255, 255, 255, 0.08)

### Cards & Containers

**Standard Card**:
- Background: rgba(255, 255, 255, 0.03)
- Border: 1px solid rgba(255, 255, 255, 0.1)
- Border Radius: 15px
- Padding: 2rem

## Animations & Transitions

### Timing Function
- Standard: cubic-bezier(0.4, 0, 0.2, 1)
- Duration: 0.3s

### Hover Effects

| Element | Effect | Duration |
|---------|--------|----------|
| Buttons | translateY(-3px) + shadow | 0.3s |
| Product Cards | translateY(-10px) + border glow | 0.3s |
| Images | scale(1.1) | 0.5s |
| Links | color change | 0.3s |

### Keyframe Animations

**fadeInUp**:
- From: opacity 0, translateY(30px)
- To: opacity 1, translateY(0)
- Duration: 1s

**pulse**:
- 0%, 100%: opacity 1
- 50%: opacity 0.8
- Duration: 8s infinite

**glow**:
- 0%, 100%: drop-shadow(0 0 20px rgba(255, 0, 0, 0.5))
- 50%: drop-shadow(0 0 40px rgba(255, 0, 0, 0.8))
- Duration: 3s infinite

**shimmer**:
- Background gradient animation
- Duration: 2s infinite

## Icons & Graphics

### Icon Style
- Simple, minimal line icons
- Color: #ffffff or #ff0000
- Size: 1rem - 1.5rem

### Placeholder Graphics
- Background: Linear gradient #1a1a1a → #333
- Shimmer animation
- Opacity: 0.3

## Mobile Responsiveness

### Breakpoints

```css
/* Tablet */
@media (max-width: 1024px) {
  /* Adjust grid columns */
}

/* Mobile */
@media (max-width: 768px) {
  /* Single column layouts */
  /* Show mobile menu */
  /* Hide desktop elements */
}

/* Small Mobile */
@media (max-width: 480px) {
  /* Further reduce font sizes */
  /* Stack all elements */
}
```

### Mobile-Specific Styles
- Full-width buttons
- Hamburger menu
- Full-screen cart drawer
- Reduced padding
- Stacked layouts

## Accessibility

### Contrast Ratios
- White on Black: 21:1 (AAA)
- Red on Black: 5.25:1 (AA)
- White on Red: 4:1 (AA)

### Focus States
- All interactive elements have visible focus states
- Focus color: #ff0000
- Outline width: 2px

### ARIA Labels
- All buttons have aria-label
- Cart includes aria-live regions
- Navigation uses semantic HTML

## Best Practices

### Do's
- Use the color palette consistently
- Maintain spacing scale
- Follow typography hierarchy
- Use animations sparingly
- Optimize images before upload
- Test on multiple devices

### Don'ts
- Don't use colors outside the palette without reason
- Don't exceed 3 levels of hierarchy
- Don't overuse animations
- Don't use images larger than 200KB
- Don't forget hover states
- Don't ignore mobile experience

## Usage Examples

### Creating a New Section
1. Use section padding: 5rem 2rem
2. Center content: max-width 1400px
3. Add section header with proper typography
4. Use grid system for layout
5. Apply consistent spacing

### Adding a New Button
1. Choose appropriate button style
2. Apply correct padding and radius
3. Use letter-spacing: 2px
4. Add hover state
5. Ensure mobile responsiveness

### Styling a Product Card
1. Use product-card class
2. Apply standard border and radius
3. Add hover effects
4. Include image with fallback
5. Use price color: #ff0000

---

This design system ensures consistency across all theme elements and provides a foundation for future customization.
