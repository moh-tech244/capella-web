# Capella R&D Lab - Landing Page

A premium, dark-themed landing page for Capella R&D Lab's Media Optimizer service.

## Features

- 🎨 Dark theme with electric blue accents
- ⚡ Smooth animations with Motion (Framer Motion)
- 📱 Fully responsive (mobile & desktop)
- 💳 Stripe payment integration
- 🔒 Privacy-protected contact information
- 🚀 Optimized for performance

## Tech Stack

- React 18.3
- Tailwind CSS v4
- Motion (Framer Motion)
- Lucide Icons
- Vite

## Local Development

```bash
# Install dependencies
pnpm install

# Start dev server
# Note: The dev server is already running in this environment
```

## Deployment to Vercel

### Option 1: Using Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Option 2: Using Vercel Dashboard

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will auto-detect Vite settings
6. Click "Deploy"

## Project Structure

```
src/
├── app/
│   ├── App.tsx           # Main component
│   └── components/
│       ├── Header.tsx    # Fixed navigation
│       ├── Hero.tsx      # Hero section with animations
│       ├── Features.tsx  # Enterprise features grid
│       ├── Pricing.tsx   # Stripe pricing cards
│       └── Footer.tsx    # Contact & links
└── styles/
    └── theme.css         # Tailwind theme tokens
```

## Pricing Plans

- **Basic Access**: $15 CAD/month
- **Standard Pack**: $60 CAD/6 months (Most Popular)
- **Elite Protocol**: $89 CAD/year

All pricing links are connected to Stripe and open in new tabs.

## Contact

- WhatsApp: [+1 (438) 969-3772](https://wa.me/14389693772)
- Support available 24/7

## License

© 2026 Capella R&D Lab. All rights reserved.
