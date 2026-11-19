# Murray Waikato — whakairo portfolio
Next.js 16 · Tailwind 4 · static export.

```
npm install
npm run dev        # http://localhost:3000
npm run build      # static site in ./out
```
Edit content in `src/content/` (site.ts, images.ts, works.ts). Re-run photos: `python3 scripts/prepare-images.py <folder-of-originals> .`
Env: `NEXT_PUBLIC_SITE_URL`, `NEXT_PUBLIC_FORM_ENDPOINT`.
Read `docs/STRATEGY.md` first: it lists what needs Murray's confirmation before launch.
