# Shopify Theme Deployment Guide

## Pre-Deployment Checklist

Before deploying this theme to your Shopify store, ensure you have:

1. A Shopify store (any plan)
2. Admin access to your store
3. The theme files ready (downloaded/cloned)
4. Product collections created in your store
5. Navigation menus configured

## Step 1: Prepare the Theme Files

1. Locate the `shopify-theme` folder
2. Compress it into a ZIP file:
   - On Mac: Right-click > Compress
   - On Windows: Right-click > Send to > Compressed folder
3. Name it something memorable like `sole-theory-theme.zip`

## Step 2: Upload to Shopify

1. Log into your Shopify admin panel
2. Navigate to **Online Store > Themes**
3. Scroll to the "Theme Library" section
4. Click **"Add theme"** button
5. Select **"Upload zip file"**
6. Choose your `sole-theory-theme.zip` file
7. Wait for the upload to complete

## Step 3: Initial Configuration

Once uploaded, you'll see the theme in your Theme Library:

1. Click **"Customize"** on the new theme (don't publish yet)
2. This opens the Theme Editor

## Step 4: Configure Navigation

### Header Menu
1. In Theme Editor, click on the Header section
2. Set the "Menu" setting to your main navigation menu
3. To create/edit menus:
   - Go to **Online Store > Navigation**
   - Edit "Main menu" or create a new one
   - Add links to:
     - Home
     - Collections
     - About
     - Contact

### Footer Menu
1. In Theme Editor, click on the Footer section
2. Configure:
   - Brand name
   - Tagline
   - Footer menu links
   - Social media URLs (Instagram, TikTok, WhatsApp)

## Step 5: Configure Homepage Sections

The homepage uses a JSON template with multiple sections:

### Hero Section
1. Click on "Hero Section"
2. Configure:
   - **Title**: Your brand name (e.g., "SOLE THEORY")
   - **Subtitle**: Your tagline (e.g., "Where Street Meets Elite")
   - **Button Text**: Call-to-action (e.g., "SHOP NOW")
   - **Button Link**: Link to your main collection

### Featured Banner
1. Click on "Featured Banner"
2. Set:
   - **Tag Text**: Promotional badge (e.g., "New Drop")
   - **Main Text**: Promotion message (e.g., "Limited Edition")

### Featured Collections
1. Click on "Featured Collection" sections
2. For each section:
   - **Heading**: Section title (e.g., "PREMIUM COLLECTION")
   - **Subheading**: Description
   - **Collection**: Select from your collections
   - **Products Limit**: Number of products to show (3-12)
   - **Show View All**: Toggle on/off

### Newsletter Section
1. Click on "Newsletter"
2. Configure:
   - **Heading**: Newsletter title
   - **Subheading**: Description
   - **Placeholder Text**: Input placeholder
   - **Button Text**: Submit button text

## Step 6: Configure Theme Settings

Click on "Theme settings" in the left sidebar:

### Colors
- **Primary Color**: #000000 (default black)
- **Secondary Color**: #ff0000 (default red)
- **Text Colors**: White and dark gray

### Typography
- **Heading Font**: Choose a bold, modern font
- **Body Font**: Choose a clean, readable font

Note: The theme is designed for Archivo (headings) and Questrial (body), but you can select similar fonts from Shopify's font library.

### Layout
- **Container Max Width**: 1400px (recommended)

## Step 7: Setup Collections

Before publishing, ensure you have:

1. Created product collections:
   - Go to **Products > Collections**
   - Create collections like "Sneakers", "Clothing", "Exclusives"
   - Add products to each collection

2. Add products with:
   - High-quality images (at least 800x800px)
   - Proper titles and descriptions
   - Variants (sizes, colors) if applicable
   - Pricing

## Step 8: Test Before Publishing

1. Use the preview mode in Theme Editor
2. Test on different devices:
   - Desktop
   - Tablet
   - Mobile

3. Check functionality:
   - Navigation works
   - Product cards display correctly
   - Add to cart works
   - Cart drawer opens and closes
   - Search functionality
   - Mobile menu

4. Verify:
   - All images load
   - Text is readable
   - Colors are correct
   - Links work

## Step 9: Publish the Theme

Once everything looks good:

1. Click **"Save"** in Theme Editor
2. Go back to **Online Store > Themes**
3. Find your new theme
4. Click **"Actions"** > **"Publish"**
5. Confirm the publication

## Post-Deployment Tasks

### 1. Configure Checkout
- Go to **Settings > Checkout**
- Customize checkout colors to match your theme
- Set your logo

### 2. Setup Policies
- Go to **Settings > Policies**
- Add your:
  - Refund policy
  - Privacy policy
  - Terms of service
  - Shipping policy

### 3. Configure Payments
- Go to **Settings > Payments**
- Enable payment providers
- Test payment flow

### 4. Setup Shipping
- Go to **Settings > Shipping and delivery**
- Configure shipping rates
- Set up delivery zones

### 5. Enable Social Media
- Go to **Online Store > Themes > Customize**
- Add your social media links in Footer section

## Customization Tips

### Adding New Sections
The theme uses Shopify OS 2.0, so you can:
1. In Theme Editor, click "Add section"
2. Choose from available sections
3. Reorder sections by dragging

### Modifying Colors
To match your brand:
1. Update colors in Theme Settings
2. Colors automatically apply throughout the theme

### Adding Pages
1. Go to **Online Store > Pages**
2. Create pages for:
   - About Us
   - Contact
   - FAQ
   - Size Guide

3. Add pages to navigation menus

## Troubleshooting

### Products Not Showing
- Ensure products are added to collections
- Check that collections are selected in section settings
- Verify products are published and in stock

### Cart Not Working
- Clear browser cache
- Check that JavaScript is enabled
- Test in incognito/private browsing mode

### Images Not Loading
- Verify images are uploaded to products
- Check image file sizes (should be optimized)
- Ensure images are in supported formats (JPG, PNG, WebP)

### Mobile Menu Not Opening
- Clear browser cache
- Check JavaScript console for errors
- Ensure theme.js is loading correctly

## Support Resources

- **Shopify Theme Documentation**: https://shopify.dev/themes
- **Shopify Help Center**: https://help.shopify.com
- **Shopify Community**: https://community.shopify.com

## Performance Optimization

After deployment, optimize performance:

1. **Compress Images**:
   - Use tools like TinyPNG or Shopify's built-in optimization
   - Aim for images under 200KB

2. **Enable CDN**:
   - Shopify automatically uses CDN
   - Ensure all assets load from CDN

3. **Monitor Speed**:
   - Use Google PageSpeed Insights
   - Check Shopify's Speed Score in admin

4. **Optimize Apps**:
   - Only install necessary apps
   - Remove unused apps that slow down your store

## Security Checklist

- [ ] SSL Certificate enabled (automatic with Shopify)
- [ ] Strong admin password set
- [ ] Two-factor authentication enabled
- [ ] Staff permissions configured
- [ ] Regular backups enabled

## Launch Checklist

Before going live:
- [ ] Theme published
- [ ] Products added with images and descriptions
- [ ] Collections organized
- [ ] Navigation menus configured
- [ ] Footer information added
- [ ] Social media links added
- [ ] Policies pages created
- [ ] Payment gateway configured
- [ ] Shipping rates set
- [ ] Checkout tested
- [ ] Mobile experience tested
- [ ] All links work
- [ ] Contact information correct
- [ ] Newsletter signup works
- [ ] Search functionality tested

## Maintenance

Regular maintenance tasks:
1. Update products and collections monthly
2. Check for broken links quarterly
3. Review analytics to optimize sections
4. Test checkout flow monthly
5. Keep Shopify apps updated
6. Monitor site speed regularly

## Need Help?

If you encounter issues:
1. Check Shopify's status page
2. Review Shopify documentation
3. Contact Shopify support
4. Join Shopify community forums

---

Congratulations on deploying your new theme! Your store is now ready to start selling.
