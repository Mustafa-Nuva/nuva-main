# NUVA Website - Next.js Version

A modern, responsive landing page for NUVA AI Assistant built with Next.js 14, TypeScript, and custom CSS.

## 🚀 Features

- **Next.js 14** with App Router
- **TypeScript** for type safety
- **Responsive Design** - Mobile-first approach
- **Modern UI** - Glass morphism effects and smooth animations
- **SEO Optimized** - Meta tags and semantic HTML
- **Performance** - Optimized images and lazy loading

## 📋 Prerequisites

Before you begin, ensure you have installed:
- **Node.js** (version 18.0 or higher)
- **npm** or **yarn** package manager

## 🛠️ Installation

1. **Install Node.js** (if not already installed)
   - Download from [nodejs.org](https://nodejs.org/)
   - Verify installation: `node --version`

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Run Development Server**
   ```bash
   npm run dev
   ```

4. **Open in Browser**
   - Navigate to [http://localhost:3000](http://localhost:3000)

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 📁 Project Structure

```
nuva-website/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── components/
│   ├── Header.tsx          # Navigation header
│   ├── Hero.tsx            # Hero section
│   ├── Features.tsx        # Features section
│   ├── HowItWorks.tsx      # How it works section
│   ├── About.tsx           # About section
│   ├── CTA.tsx             # Call-to-action form
│   └── Footer.tsx          # Footer
├── public/                 # Static assets
├── package.json
├── tsconfig.json
├── next.config.js
└── tailwind.config.ts
```

## 🎨 Customization

### Colors
Edit CSS variables in `app/globals.css`:
```css
:root {
  --accent: #4f46e5;
  --accent-soft: #22d3ee;
  --text-main: #e5e7eb;
  /* ... more variables */
}
```

### Content
- **Hero Section**: Edit `components/Hero.tsx`
- **Features**: Edit `components/Features.tsx`
- **Form**: Edit `components/CTA.tsx`

### Metadata
Update SEO metadata in `app/layout.tsx`:
```typescript
export const metadata: Metadata = {
  title: "Your Title",
  description: "Your Description",
  // ...
}
```

## 🚀 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Import project on [vercel.com](https://vercel.com)
3. Deploy automatically

### Netlify
1. Build the project: `npm run build`
2. Deploy the `.next` folder

### Manual Deployment
```bash
npm run build
npm start
```

## 🔧 Next Steps

1. **Connect Form Backend**
   - Update `components/CTA.tsx` to connect to your email service or backend API

2. **Add Analytics**
   - Integrate Google Analytics or Plausible

3. **Add Chatbot Integration**
   - The design is already prepared for chatbot integration in the hero section

4. **Optimize Images**
   - Add actual images to `public/` folder
   - Use Next.js `Image` component for optimization

## 📝 Migration Notes

This project was migrated from static HTML to Next.js. Key improvements:
- ✅ Component-based architecture
- ✅ TypeScript for better development experience
- ✅ Server-side rendering capabilities
- ✅ Better performance and SEO
- ✅ Easy to extend and maintain

## 🐛 Troubleshooting

**TypeScript Errors**: These will resolve once you run `npm install`

**Port Already in Use**: Change port with `npm run dev -- -p 3001`

**Build Errors**: Clear cache with `rm -rf .next` then rebuild

## 📄 License

All rights reserved © NUVA

## 🤝 Support

For questions or issues, contact: hello@nuva.app
