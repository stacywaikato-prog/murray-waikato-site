# Murray Waikato — Whakairo Portfolio: Strategy, Curation & Spec

Source of truth: 31 photographs of work (17 + 14 added later; 6 repeats in the second batch were ignored) + Murray's two flyers and his message (text only). Nothing on the site is invented. Where the material is silent, the site is silent.

## 0. What I could not do (needs Murray)
1. **No marae/wharenui/installation photos were supplied.** The flyers list this as a service; the site states it as a service and shows no examples. Highest-value missing material.
2. **No named commissions, clients, dates, dimensions or testimonials.** No Testimonials page is built. I can't tell which pieces were commissioned; tag them and I'll add a "Commissioned" label.
3. **Stone type per piece** (pounamu / tangiwai / other) is unconfirmed. Titles say "pounamu" on the strength of the river-slab photos. Confirm each piece and its source before launch: it matters for authenticity and sales.
4. **Piece names and taonga terms** are descriptive and provisional (e.g. "Pierced timber panel", "Feathered rākau"). Murray should name every piece correctly (the long-handled forms look like taiaha / tewhatewha; the clubs like mere; the pendants like toki, hei tiki, etc.). I deliberately did not guess.
   - **Blue translucent stone** (five photos, series "Light through stone"): I don't know what it is or whether it is natural. Murray to confirm the stone name before launch.
   - **Cog-shaped inlays** on two tiki: shown as photographed; Murray to say what they mean if he wants it told.
5. **Photo quality.** Nearly all photos are 720 px-wide phone screenshots with black bars (cropped by `scripts/prepare-images.py`). They hold up at card size, not as desktop full-bleed. Only the two workbench shots (1536 px) are used full-bleed. Request originals.
6. **Murray's reo (verse, greeting, "whakaritorito" line)** is now confirmed as his own (flyer + his message of 19 Nov), shown as supplied. His typed message has no macrons; the flyer has some (Ngāti, rā), which the site keeps, plus the macrons in the greeting lines (kōrero, rākau). Murray or a reo reviewer should confirm spelling/macrons, and give an English translation of the "He whakaritorito…" line and "He whakairoiro rākau e" before any English is shown beside them. `site.showVerse` hides the verse.
7. **Flyer imagery not used.** Both flyers contain AI-generated carvings and landscapes; per your rules only the text was used.
8. **Named piece withheld:** the pale double-headed piece inscribed "Hari Huritau Anaru" (a birthday gift) is `published: false` until Murray/recipient agree to the name being public.
9. Domain, form endpoint, social links, photographer credit: placeholders in `src/content/site.ts`.
10. A truly long-form biography needs an interview. The About page is as long as the evidence allows. Questions: who taught you, and where? First piece you carved? Which marae/whare carry your work (with permission)? What do you do with offcuts? How is a design decided with a whānau? What does a good commission look like? What do you want carried forward, and by whom?

## 1. Sitemap
```
/                      Home
/about/                About the artist
/whakapapa/            Whakapapa (greeting, eight-line pepeha, whakaritorito line, verse)
/works/                Six bodies of work
  /works/timber-forms/
  /works/toki-and-hafts/
  /works/pounamu/
  /works/rakau/
  /works/light-through-stone/
  /works/drawing-and-layout/
/gallery/              Filterable archive + lightbox
/process/              Six moments, as photographed
/commissioning/        Four commission areas + what to tell Murray
/contact/              Phone, email, form
/sitemap.xml /robots.txt /404
```
Not built (no material): Testimonials, Marae projects, News.

## 2. Content strategy
- **Voice:** specific, observed, quiet. Describe only what a photograph shows; use Murray's own words verbatim for anything in first person. No invented quotes.
- **Banned:** "passionate", "bringing ideas to life", "dedicated craftsman", "world-class". None appear.
- **Te reo:** macrons everywhere; te reo wrapped in `lang="mi"` for screen readers.
- **Goal mapping:** carving mastery → Featured/Works/Detail shots · whakapapa → pepeha strip on every page footer + /whakapapa · commissions → /commissioning + mobile Call/Enquire bar · credibility → his own words, 20+ years, learning lineage · legacy → archive framing ("the archive"), captions, whakapapa.
- **Conversion:** persistent mobile bar (Call / Enquire), tel/mailto links, one short form, no pricing promised.

## 3. Wireframes (desktop / mobile)
```
HOME
[nav: Murray Waikato ........ About Whakapapa Works Gallery Process Commissioning Contact]
[HERO  | H1 "Whakairo from Te Teko."  + 2 CTAs ........ | tall photo: backlit tiki ]
[PEPEHA STRIP: 6 columns -> 2 cols mobile]
[STATEMENT (parchment): "In Murray's words" + large verbatim quote + link]
[FEATURED: 3 staggered cards (timber, toki, pounamu), 4:5 crops]
[PROCESS (basalt): headline | para ; 3 photos Stone / Line / Finished]
[WHAKAPAPA (parchment): headline | six "Ko ... te ..." rows]
[BODIES OF WORK: typographic index rows with micro-thumb]
[CTA (kōkōwai): headline, Enquire + phone]
[footer]                                       [mobile: Call | Enquire fixed bar]

ABOUT        header | sticky photo+pepeha table (4 col) + 7-col long text (Place, Learning, The work, Purpose)
WHAKAPAPA    header | 6 large pepeha rows + wharetipuna/wharekai | photo + text | verse (centred)
WORKS        alternating 6/5 split rows, one per series
WORK DETAIL  header + text | alternating photo/caption figures | "Next" bar
GALLERY      filter chips | 2-col (mobile) / 3-col masonry | <dialog> lightbox, arrows, Esc
PROCESS      6 alternating text/photo sections | full-bleed workbench banner
COMMISSION   header | 4 areas list + photo | "What to tell Murray" 4 steps | CTA
CONTACT      phone/email large | form (name, email, phone, enquiry type, message)
```

## 4. Design system
- **Idea:** a gallery at night. Dark ink for photographs, parchment for reading, one earth-red for action. No decorative Māori motifs: the carvings are the ornament.
- **Palette** (from the photographs): ink `#0F0E0C`, basalt `#1A1916`, ash `#2A2824`, parchment `#EFE8DA`, bone `#D9CFB9`, stone `#B9B09C`, rimu `#C7782F` (accent on dark, 5.6:1), kōkōwai `#A8482A` (accent/buttons on parchment, 4.7:1), pounamu `#3E5F43`.
- **Type:** one clean sans throughout: Inter (variable), self-hosted via `@fontsource-variable` (no Google request; full macron support). Headings regular (400) weight with tight tracking (-0.025em; h1 -0.035em); body 17px/1.7; eyebrows 12px, 0.22em caps. To change, edit `--font-display` in `globals.css`.
- **Spacing/layout:** 12-col grid, max 80rem, 20/40 px gutters; sections 96–144 px vertical.
- **Motion:** one 0.9s rise on hero; hover zoom 1.03 on images; all disabled under `prefers-reduced-motion`.
- **Components:** Header (mobile menu, `aria-expanded`), Photo (srcset, intrinsic size, dominant-colour placeholder, `fetchpriority`), Reo, GalleryGrid (filter + `<dialog>` lightbox), ContactForm (endpoint or mailto fallback + honeypot), MobileEnquiry.

## 5. Photo curation (ranked by impact)
Cropped on import: letterbox bars on all; collage panel, empty box lid, vehicle-cover logo and car tail-light removed from four. Only workbench-axe and haft-detail (1536 px) are large enough for desktop full-bleed.

| # | id | Use | Why |
|---|---|---|---|
| 1 | hei-tiki-backlit | **Hero** | Glowing edges on black, a human hand: connection and craft in one frame. Keep ≤45vw (low-res). |
| 2 | beach-lineup | Hero-quality · Rākau lead | Five carved pieces, feathers, paua, sea, low light: the most cinematic frame. |
| 3 | pectoral-sunlit | Pounamu lead | Sun through translucent stone; the pierced design reads perfectly. Cropped from a collage. |
| 4 | plinth-form | Timber lead | Best timber surface carving; crop 4:5 to lose the yard. |
| 5 | pounamu-slab-river | Whakapapa, Process 01 | Stone in river = whenua. |
| 6 | blue-tiki-gears | Light-through-stone lead | Vivid and unique: the strongest "only Murray" image. |
| 7 | pierced-panel | Commissioning, Timber | Scale, openings, relief. |
| 8 | beach-staff | Rākau | Single-subject minimalism; blue sky, gravel. |
| 9 | toki-pendants-pair | Process, Pounamu | Backlit colour; clothesline background is the weak point. |
| 10 | timber-blade-hedge | Timber, Rākau | Strong vertical, figures and shaft. |
| 11 | feathered-blade-tree | Rākau | Warm timber against greenery; feather detail. |
| 12 | blue-mere-feathers | Light | Hand, feathers, glow; kitchen background distracts. |
| 13 | wip-silhouette | Process 04 | Graphic silhouette; in-progress honesty. |
| 14 | haft-detail | Toki lead, Process 05, **Full** | Method in one picture (carving + pencil lines). 1536 px. |
| 15 | blue-tiki-held | Process 04, Light | Shows joints and inlays. |
| 16 | blue-slab-light | Light | Raw slab, lovely gradient. |
| 17 | pectoral-boxed | Pounamu | Strong form; boxed on grass. |
| 18 | tiki-paua-earrings | Pounamu | Clear product shot; paua eyes. |
| 19 | boxed-taonga-set | Pounamu, Process 06 | Fitted wooden case; slightly soft. |
| 20 | blue-lashed-pendant | Light | Notched edges, lashing. |
| 21–23 | toki-river-stones, pendant-earring-set, crescent-pendants | Gallery | Good; busy backgrounds. |
| 24 | stone-blanks | Process 01 | Quantity and rhythm; modest quality. |
| 25 | rakau-in-progress | Process 02, Rākau | Five stages side by side. |
| 26–30 | hei-tiki-layout-slab, workbench-axe (**Full**), layout-studies, workbench-axe-low-light, boxed-toki-pendants | Process | Documentary; dim or cluttered. |
| 31 | named-piece | **Withheld** | Personal name inscribed; consent first. |

## 6. SEO (also implemented in code)
| Page | Title | Description |
|---|---|---|
| Home | Murray Waikato — Māori Master Carver, Te Teko | Whakairo in timber and pounamu by Murray Waikato of Te Teko, Ngāti Awa ki Rangitaiki. Marae and wharenui carving, cultural commissions, local and international projects. |
| About | About Murray Waikato — Carver of Ngāti Awa ki Rangitaiki | A Māori carver from Te Teko, a descendant of Mataatua who has carried the carving knowledge of Ngāti Awa ki Rangitaiki for more than twenty years. |
| Whakapapa | Whakapapa — Putauaki, Rangitaiki, Ngāti Awa, Mataatua | Murray Waikato's pepeha… |
| Works | Works — Timber, Toki and Pounamu by Murray Waikato | Carved timber forms, toki and hafts, pounamu pendants, and drawings on stone. |
| Gallery | Gallery — Carving, Pounamu and Workshop Photographs | Every photograph in the archive… |
| Process | Process — From Stone and Timber to Finished Carving | What the workshop photographs show… |
| Commissioning | Commissioning — Marae, Wharenui and Cultural Carving | Commission Murray Waikato for marae and wharenui carving… |
| Contact | Contact Murray Waikato — Enquiries and Collaborations | …phone 020 424 1602 or email… |

OG titles/descriptions are per page in `src/app/*/page.tsx`; OG image `public/og.jpg` is a photo-only triptych (1200×630). Person JSON-LD in the root layout. Image alt text for every photo is in `src/content/images.ts` and describes only what is visible.

## 7. Next.js specification
- **Stack:** Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS 4, static export (`output: "export"`), no runtime server.
- **Content:** `src/content/` (site, images, works) is the single source; pages contain layout only. Add a work = add an entry.
- **Images:** `scripts/prepare-images.py` crops bars, writes 480/800/1200/native webp (q82) and a manifest with intrinsic size and dominant colour (zero layout shift).
- **Performance:** no client JS except Header, Gallery, Form; self-hosted variable fonts; hero image preloaded via `fetchpriority`; everything else lazy. Target Lighthouse ≥ 95 on all four.
- **Accessibility:** skip link, landmarks, `lang` attributes (en-NZ / mi), visible focus, 44px targets, native `<dialog>` lightbox (focus trap, Esc, return focus), filters with `aria-pressed`, live region, reduced motion, AA contrast verified for the palette.
- **Forms:** set `NEXT_PUBLIC_FORM_ENDPOINT` (Web3Forms/Formspree) or it opens the visitor's email app. Honeypot included.
- **Deploy:** `npm run build` → `out/` to Cloudflare Pages / Netlify / any host. Set `NEXT_PUBLIC_SITE_URL`.

## 8. Five-lens critique (and what changed)
**Museum curator.** Weak: captions lacked an object-label feel; no dimensions, year or material per piece. Fixed: numbered works ("No. 01"), material lines, provisional titles, caption on every image. Still needed: year, dimensions, name, stone/timber species from Murray.
**Māori cultural advisor.** Risks: invented tikanga or stories; decorative faux motifs; unreviewed reo; naming a private person; unverified pounamu claims; taonga photographed casually. Fixed: no motifs, no invented kōrero, Murray's words verbatim, macrons and `lang="mi"`, named piece withheld, verse behind a flag, "pepeha first" structure, no pricing. Still needed: Murray (and a reo reviewer) sign-off on all reo; his view on which taonga should or shouldn't be shown; stone provenance; whether the AI-flyers are retired.
**UX designer.** Weak: enquiry buried on mobile. Fixed: fixed Call/Enquire bar, tel/mailto, short form, menu with 44px targets. Gallery filters kept to four.
**Photographer.** Weak: phone screenshots, letterboxed, clothesline and yard backgrounds, glare through film, mixed colour temperature, one low-res hero. Mitigated: cropping, 4:5 crops, restrained use of large sizes. Shoot list that would lift this to international standard: neutral grey/black backdrop and raking side-light; one hero per major piece at ≥3000 px; scale reference; macro of chisel marks; hands at work (with consent); marae and wharenui in situ; consistent edit.
**High-end web judge.** Strength: restraint, typographic confidence, honest documentary tone. Weak: no motion storytelling, no large landscape imagery, no press/exhibition credits. Added: staggered editorial grid, typographic index, full-bleed workshop banner. Candidate upgrades once material exists: scroll-linked process film, marae case studies, press and exhibition list, bilingual toggle, an archive of named works with provenance.

### Batch 4 additions (19 Nov)
14 new photographs, no duplicates. New hero: `timber-spiral-form` (sunlit timber carving, double spirals), shown full-bleed right with an ink gradient. `hei-tiki-wet` is the highest-resolution image supplied (1536×2048) and now leads the OG image with the hero.
New filters: **Bone** (rei puta, two pairs of pale earrings, boxed pierced earrings) and **Other stone** (banded purple-grey toki pendant and close detail).
**Murray to confirm:** material of the pale earrings (bone?); the banded purple-grey stone; meaning of ‘Arahura Tangiwai’ on the club photo (stone source/type?) and whether he wants the text kept on the image; names for the short clubs (red-stained club, green stone club); cog-shaped inlays on the face pendant.
