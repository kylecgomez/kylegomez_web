# kylegomez.com

Personal website built with Next.js 14, deployed on Vercel.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view locally.

## Project structure

```
app/
  layout.tsx        # Root layout + metadata
  page.tsx          # Home page (hero, experience, skills, writing)
  page.module.css   # Home page styles
  globals.css       # Global styles + design tokens
  projects/
    page.tsx        # Projects page
    projects.module.css
components/
  Nav.tsx           # Shared navigation
  Nav.module.css
public/
  kyle-gomez-resume.pdf   # Add your resume PDF here
```

## Deploying to Vercel

1. Push this repo to GitHub
2. Import the repo in Vercel
3. Vercel auto-detects Next.js — no config needed
4. Add your custom domain in Vercel → Settings → Domains

## Customization

- **Content**: Edit the data arrays at the top of `app/page.tsx` and `app/projects/page.tsx`
- **Colors**: Edit CSS variables in `app/globals.css`
- **Fonts**: Swap Google Fonts import in `globals.css`
- **Resume**: Drop a PDF named `kyle-gomez-resume.pdf` into the `public/` folder
