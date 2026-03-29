# Personal Website

Live at: https://jenna-cohen-ai.vercel.app

## How to add a new project

Edit `src/app/page.tsx` and add a new object to the `PROJECTS` array at the top of the file:

```js
{
  id: "unique-id",          // URL-safe identifier (lowercase, hyphens)
  title: "Project Name",
  status: "Free",           // Label shown on the card (e.g. "Free", "Beta", "Shipped")
  description: "Short description shown on the homepage card.",
  github: "https://github.com/JennaCohen1/...",
  website: "https://...",
  pitch: "One-liner pitch quote shown on the detail page.",
  concept: "Longer concept write-up.",
  guide: "How to use it."
}
```

Commit the change and Vercel will auto-deploy.

## Dev

```bash
npm run dev
```

Opens at http://localhost:3000

## Tech stack

- Next.js + TypeScript
- Tailwind CSS
- Hosted on Vercel
