# NUVA – AI Assistant Landing Page

A modern, production‑ready landing page for **NUVA**, a premium AI assistant. This project is structured to be dropped directly into a new GitHub repository.

## Tech Stack

- **HTML5** – semantic, SEO‑friendly structure
- **CSS3** – custom responsive layout, dark theme, glassmorphism
- **Vanilla JavaScript** – light interactions, scroll animations, chatbot integration hook

No build tools or frameworks are required. Everything runs as a static site.

## Features

- Dark, futuristic theme with electric blue and soft purple accents
- Hero section with NUVA headline, live preview panel, and CTA
- Features section with animated cards
- "How It Works" 3‑step explanation
- About NUVA section with product positioning and highlights
- Call‑to‑action section with an early access form (frontend only)
- Footer with copyright and social links
- Smooth scroll animations and subtle glow effects
- Fully responsive (mobile, tablet, desktop)
- Accessible color contrast and reduced‑motion support
- SEO‑ready `<head>` meta and social tags
- Prepared for future chatbot integration (`window.NUVA.chatbot` hook)

## Project Structure

```text
Nuva website/
├─ index.html
├─ assets/
│  ├─ css/
│  │  └─ style.css
│  └─ js/
│     └─ main.js
├─ README.md
└─ .gitignore
```

- `index.html` – main landing page markup
- `assets/css/style.css` – global styles, layout, theme, and animations
- `assets/js/main.js` – scroll behavior, section animations, and chatbot placeholder hook

You can add an `assets/img/` folder for custom imagery or logos as needed.

## Getting Started

1. Clone or download this project into a new folder.
2. Open `index.html` in your browser, or run a simple static server:

   ```bash
   # Example with Python 3
   python -m http.server 8000
   ```

3. Visit `http://localhost:8000` in your browser.

## Customization

- **Branding** – Update the NUVA logo, colors, and copy inside `index.html` and `style.css`.
- **Sections** – Add or remove feature cards, steps, or stats by editing the respective sections.
- **Form handling** – The early access form is currently frontend‑only. Connect the form `action` to
  your backend, API route, or tools like Formspree / Make / Zapier.
- **Chatbot** – The layout is prepared for an embedded NUVA chatbot. Use the `window.NUVA.chatbot`
  hook defined in `assets/js/main.js` to mount your widget when it is ready.

## GitHub Setup

1. Initialize a new git repository in this folder:

   ```bash
   git init
   git add .
   git commit -m "Initial commit: NUVA AI assistant landing page"
   ```

2. Create a new repository on GitHub and follow the `git remote add origin` instructions from GitHub.

3. Push your code:

   ```bash
   git push -u origin main
   ```

## Deployment

Because this is a static site, you can deploy it easily to:

- GitHub Pages
- Netlify
- Vercel
- Cloudflare Pages

Just point your hosting provider at the root of the project.

## License

You can adapt and use this landing page for NUVA or similar AI products. Add your preferred license
file if you plan to open‑source it.
