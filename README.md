# Fitness Results - Modern Fitness Website

A modern, sleek fitness website built with React, TypeScript, and Vite. Features a minimalist design with glassmorphism effects, smooth animations, and conversion-optimized layouts.

## 🚀 Features

- **Modern Design**: Vibrant gradients, glassmorphism effects, and smooth animations
- **Fully Responsive**: Mobile-first design that works on all devices
- **Multiple Pages**:
  - Homepage with hero, services, mission, and testimonials
  - Memberships with pricing tiers and billing toggle
  - Schedule Visit with booking form
  - Contact page with multiple contact methods
  - Store with product listings (Shopify-ready)
  - Product detail pages

- **Conversion Optimized**: Clear CTAs, social proof, and streamlined user journeys
- **SEO Ready**: Meta tags, semantic HTML, and optimized structure
- **Shopify Integration Ready**: Placeholder structure for easy Shopify Storefront API integration

## 🛠️ Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **React Router** - Client-side routing
- **Framer Motion** - Animations (ready to integrate)
- **CSS3** - Custom design system with CSS variables

## 📦 Getting Started

### Prerequisites

- Node.js 16+ and npm

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The development server will start at `http://localhost:3000`

## 🎨 Design System

The website uses a comprehensive design system with:

- **Color Palette**: Vibrant gradients (electric blue to purple), dark mode support
- **Typography**: Google Fonts (Inter for body, Outfit for headings)
- **Spacing**: Consistent 8px grid system
- **Animations**: Fade-ins, slide-ups, hover effects, micro-interactions
- **Components**: Glassmorphism cards, gradient buttons, responsive forms

## 🔌 Integration Setup

### Shopify Store

To connect your Shopify store:

1. Create a Shopify store and get your Storefront API credentials
2. Create a `.env` file:
```env
VITE_SHOPIFY_DOMAIN=your-store.myshopify.com
VITE_SHOPIFY_STOREFRONT_TOKEN=your-token
```
3. Implement the Shopify API calls in `src/lib/shopify.ts`

### Convex Database

For appointment booking and form submissions:

1. Create a Convex account at convex.dev
2. Add your Convex URL to `.env`:
```env
VITE_CONVEX_URL=https://your-convex-url.convex.cloud
```
3. Deploy Convex schema and functions

## 📱 Pages

- **/** - Homepage with hero, services, mission, testimonials
- **/memberships** - Pricing tiers and training programs
- **/schedule-visit** - Booking form for consultations
- **/contact** - Contact form and business information
- **/store** - Product listings with search and filters
- **/store/:productId** - Product detail pages

## 🎯 Key Features

### Homepage
- Full-screen hero with gradient background
- Animated service cards with glassmorphism
- Stats counter with mission statement
- Auto-rotating testimonials carousel
- Prominent CTAs throughout

### Memberships
- Three-tier pricing (Basic, Premium, Elite)
- Monthly/Annual billing toggle with savings display
- Feature comparison with checkmarks
- Training program details
- FAQ section

### Schedule Visit
- Multi-field booking form
- Date and time selection
- Trainer preference selector
- Timeline of what to expect
- Success confirmation animation

### Contact
- Subject-based contact form
- Multiple contact methods with icons
- Social media links
- Business hours and location

### Store
- Product grid with category filters
- Search functionality
- Product cards with hover effects
- Related products section
- Size and quantity selectors

## 🚀 Deployment

### Netlify

```bash
# Build command
npm run build

# Publish directory
dist
```

### Vercel

```bash
# Build command
npm run build

# Output directory
dist
```

## 📝 Customization

### Colors

Edit CSS variables in `src/index.css`:

```css
:root {
  --color-primary: #6366f1;
  --gradient-primary: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  /* ... more variables */
}
```

### Content

Update content directly in the page components:
- `src/pages/Home.tsx`
- `src/pages/Memberships.tsx`
- `src/pages/ScheduleVisit.tsx`
- `src/pages/Contact.tsx`
- `src/pages/Store.tsx`

## 🤝 Contributing

This is a custom project for Fitness Results. For modifications or questions, contact the development team.

## 📄 License

Copyright © 2025 Fitness Results. All rights reserved.

## 🎨 Design Credits

- Modern minimalist design inspired by leading fitness brands
- Glassmorphism effects and gradient aesthetics
- Conversion-optimized layouts based on industry best practices

---

Built with ❤️ for Fitness Results - Your Goals. Our Mission.
