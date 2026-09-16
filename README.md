# KITKAT // LOST ARCHIVE

> our little universe — an archive made for two people.

A romantic digital archive / interactive experience built for KitKat.

## Stack

- Next.js + React + TypeScript
- Static export (`output: "export"`)
- CSS-first visual system
- GitHub → Cloudflare Pages

## Local development

```bash
npm install
npm run dev
```

Then open the local address shown by Next.js.

## Production build

```bash
npm run build
```

The static site is generated in `out/`.

## Cloudflare Pages

Use the GitHub repository as the source and configure:

- Framework preset: Next.js (Static HTML Export)
- Build command: `npx next build`
- Build output directory: `out`

Every push to the connected branch can trigger a new deployment.

## Roadmap

- [x] Archive boot / VHS loading sequence
- [x] Lost Archive desktop shell
- [x] First visual design system
- [x] Responsive layout
- [ ] Real couple timeline
- [ ] Scrapbook memories
- [ ] Interactive letters
- [ ] Cassette / Windows Media Player-inspired music room
- [ ] Games + achievements
- [ ] Explorable universe
- [ ] Future checklist
- [ ] Hidden files / easter eggs
- [ ] Final secret room

## Visual direction

Dark romantic + emo + grunge + VHS + scrapbook + archive + dreamcore + angelcore + early internet.

The interface should feel imperfect but intentional: scanned paper, analog noise, old filenames, media artifacts, angelic imagery, monochrome engravings, faded pink, black, and wine tones.
