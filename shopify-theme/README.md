# Sole Theory - Shopify Theme

A modern, high-performance Shopify theme inspired by streetwear and premium sneaker culture.

## Design System

### Color Palette

- **Primary Color**: `#000000` (Black) - Main background and text
- **Secondary Color**: `#ff0000` (Red) - Accent color for CTAs and highlights
- **Text Light**: `#ffffff` (White) - Light text on dark backgrounds
- **Text Dark**: `#1a1a1a` (Dark Gray) - Alternative dark text
- **Background Dark**: `#0a0a0a` (Deep Black) - Alternate dark backgrounds
- **Accent**: `#ff3333` (Bright Red) - Hover states and highlights

### Typography

- **Heading Font**: Archivo (weights: 400, 500, 600, 700, 800)
- **Body Font**: Questrial
- **Letter Spacing**:
  - Headings: 2-4px
  - Body: 1px
  - Buttons: 2px

### Spacing System

- Base spacing unit: 1rem (16px)
- Section padding: 5rem (80px)
- Component padding: 1.5-2rem
- Grid gap: 2rem

## Theme Structure

```
shopify-theme/
├── assets/
│   ├── theme.css          # Main stylesheet
│   └── theme.js           # Main JavaScript file
├── config/
│   ├── settings_schema.json  # Theme settings
│   └── settings_data.json    # Default settings values
├── layout/
│   └── theme.liquid       # Main layout template
├── locales/
│   └── en.default.json    # English translations
├── sections/
│   ├── header.liquid      # Header section
│   ├── footer.liquid      # Footer section
│   ├── hero.liquid        # Hero section
│   ├── featured-banner.liquid  # Promotional banner
│   ├── featured-collection.liquid  # Product collection display
│   └── newsletter.liquid  # Newsletter signup
├── snippets/
│   ├── cart-drawer.liquid # Cart sidebar
│   └── product-card.liquid  # Reusable product card
└── templates/
    ├── index.json         # Homepage template
    ├── product.liquid     # Product page template
    └── collection.liquid  # Collection page template
```

## Features

### Navigation
- Fixed header with scroll effect
- Mobile-responsive hamburger menu
- Search functionality
- Cart button with item count

### Hero Section
- Full viewport height
- Animated background gradient
- Customizable title and CTA

### Featured Collections
- Grid layout with responsive columns
- Hover effects on product cards
- Add to cart functionality
- Product image handling with fallback

### Product Pages
- Large product images
- Variant selection (colors, sizes)
- Dynamic price updates
- Add to cart functionality

### Cart
- Slide-out cart drawer
- Real-time cart updates
- Remove items functionality
- Direct checkout link

### Mobile Responsive
- Breakpoints at 768px and 480px
- Mobile menu
- Optimized layouts for all screen sizes

## Customization

### Colors
Navigate to Theme Settings > Colors to customize:
- Primary Color
- Secondary Color
- Text Colors

### Typography
Navigate to Theme Settings > Typography to customize:
- Heading Font
- Body Font

### Layout
Navigate to Theme Settings > Layout to customize:
- Container Max Width

## Sections

All sections are customizable through the Shopify Theme Editor:

### Hero Section
- Title
- Subtitle
- Button text and link

### Featured Banner
- Tag text
- Main promotional text

### Featured Collection
- Heading and subheading
- Collection selection
- Number of products to display
- View all button toggle

### Newsletter
- Heading and subheading
- Input placeholder
- Button text

## Button Styles

### Primary Button (.cta-btn)
- Red background (#ff0000)
- Rounded corners (50px)
- Hover: Lift effect with shadow

### Secondary Button (.add-to-cart)
- Transparent background with border
- Hover: Red fill

### Back Button (.back-btn)
- Transparent with border
- Hover: Red fill with slide effect

## Hover States

- Product cards: Lift and scale with red glow
- Buttons: Color change with shadow
- Links: Color change to red
- Images: Scale effect (1.1x)

## Installation

1. Download or clone this theme
2. Zip the `shopify-theme` folder
3. In your Shopify admin, go to Online Store > Themes
4. Click "Upload theme" and select the zip file
5. Once uploaded, click "Customize" to configure sections and settings

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Optimizations

- Lazy loading images
- Minimal JavaScript
- CSS animations using GPU acceleration
- Optimized font loading with preconnect
- Image size optimization through Shopify CDN

## Support

For customization support or issues, please refer to Shopify's theme documentation:
https://shopify.dev/themes

## License

This theme is provided as-is for use with Shopify stores.
