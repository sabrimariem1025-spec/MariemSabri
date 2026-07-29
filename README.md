# Mariem Sabri — Personal Brand Website

Next.js 14 + TypeScript + Tailwind CSS + Framer Motion site for Mariem Sabri
(Digital Skills Trainer, AI Trainer, Full-Stack Developer).

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Before you launch

Search the codebase for `PLACEHOLDER` — these mark spots where real data
(dates, contact details, CV file) should replace neutral placeholders:

- `lib/data.ts` — contact email/phone/LinkedIn/GitHub, KGS / Tunisian
  Programming Lovers / Association des Jeunes Créateurs dates
- `components/certificates.tsx` — add real certificate entries to the
  `certificates` array (title, organization, issue date, credential ID,
  optional link and image)
- `components/testimonials.tsx` — replace with a real slider once quotes
  are collected
- `components/blog.tsx` — turn draft topics into real articles / MDX pages
- `public/cv-mariem-sabri.pdf` — add the actual CV file (linked from the
  Hero and Contact sections)
- `app/layout.tsx` — set the final production domain in metadata if you
  add `metadataBase` / Open Graph images

## Deploying

The project is a standard Next.js app — push to GitHub and import into
Vercel, or run `npm run build && npm start` on any Node host.
