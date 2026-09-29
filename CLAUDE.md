# Rubriq website — project context

Handoff notes from the first build session (Sept 26–28, 2026).

## What this is
Marketing site for **Rubriq** (Arabic: روبريك), an **AI solutions agency** that builds automated
assessment-to-report platforms for consulting practices. The pitch: a consultant's rubric/framework goes in,
and a finished, data-grounded narrative report plus an action plan comes out.

- **Positioning is tech-only.** We build and run the platform; the client's team does the assessing and makes
  the judgment calls. Don't write copy that implies Rubriq does consulting work. The owner asked for this explicitly.
- The one real proof point is a live 54-indicator youth-NGO capacity assessment deployment.
  Describe it generically ("a network of youth-development partners"), never by client name.

## Repo and deploy
- GitHub: https://github.com/abdulmajeed-adas/rubriq (public, branch `main`)
- Local folder on the original PC: `C:\claude\rubriq`. It was called `miqyas-agency-site` until Sept 28, 2026.
- Deploy target: Cloudflare Pages via Git integration. It may not be connected yet. Use no build command and
  output directory `/`.
- Git identity is set repo-local: `Abdulmajeed Adas <adas.abdulmajeed@gmail.com>`.
- Workflow so far: edit, preview locally, check EN + AR + mobile, then commit and push.
  Ask before pushing unless the user already said to push.

## Stack
- A single static `index.html` with inline CSS and JS. No build step, no framework.
- Assets: `logo-icon.png` (logo glyph on a transparent background; also the favicon) and
  `rubriq-report-mockup-hq.jpg` (the report mockup; no longer shown on its own, but the hero cover crops its photo
  from it, so keep the file).
- Compress large images to JPEG before adding them. PNGs with photos in them are too heavy.
- Local preview: on the current PC (no Node), serve the folder on `http://localhost:8765` with a PowerShell
  `HttpListener` running in the background, then check it in the owner's Chrome through the Claude extension.
  Chrome maximizes the window, so resizing doesn't work there; to check mobile, load the page in a 390px iframe.

## Design system
Colors are CSS variables on `:root`, taken from the owner's brand palette. The site is light-only: the dark-mode
block was removed on purpose (Sept 29, 2026) because the illustrations hardcode light card backgrounds. Don't add it back.

| Token | Hex | Palette name |
|---|---|---|
| `--bg` | #fcf8f4 | Background Ivory |
| `--surface` | #f4ece3 | Soft Surface |
| `--line` / `--accent-l` | #e7d8c8 | Card Beige |
| `--ink` | #1f1d1a | Primary Text |
| `--ink-soft` | #5e5a55 | Secondary Slate |
| `--brand` | #c67b49 | Copper Accent (buttons, CTAs) |
| `--brand-d` / `--accent-d` | #a85c2f | Deep Copper (labels, kickers) |
| `--accent` | #d8b594 | Soft Sand |
| `--data-blue` | #4e6f8e | Data Blue |
| `--sage` | #74826a | Sage |
| `--brand-l` | #f3e2d2 | pale copper tint (derived) |
| `--muted` | #9c948a | tertiary gray (derived) |

Typography:
- **Manrope** everywhere by default.
- **Tajawal** for Arabic.
- **Fraunces** (serif) for the headings and card titles of the redesigned sections (How it works, What ships with it).
  The owner's newer mockups use it. In Arabic those switch to Tajawal.
- **Caveat** only for the handwritten note in "The problem" illustration.

## Page structure, in order
1. **Nav**: logo, center links (Product / Solutions / Pricing / Resources), globe language toggle,
   and a "Book a call" button.
   - The chevrons are decorative; there are no real dropdowns.
   - Pricing points to `#contact`.
2. **Hero**: a two-column grid.
   - Left: eyebrow "Assess / Analyze / Develop", the headline "Turn any rubric into a self-writing report.",
     the lede, a scope note, and two buttons.
   - Right: the big card is an HTML/CSS copy of the platform's report-generation page (`.rg` classes): a toolbar,
     a cover, the Domain 1 banner, the overall score, and component bars. It replaced a dashboard on Sept 29, 2026,
     because the platform has no dashboard. The cover's mountain photo is cropped from `rubriq-report-mockup-hq.jpg`
     with a CSS mask. Cover sizes use `cqw` units so the text stays aligned with the photo. Two small cards
     ("Leadership Assessment Report", "Development Plan") overlap its bottom.
   - The hero is tuned to fit a roughly 900px viewport without the next section peeking in. The settings are
     `.hero` padding-bottom 220px and `.hero-copy { transform: translateY(40px) }`.
3. **The problem**:
   - Left: heading and a card-stack illustration ("Client Scores", "Q3 Assessment" with an "In progress" badge,
     "Client Report") with a handwritten "Hours of work every week" note.
   - Right: a paragraph and 3 icon cards (clock, refresh, eye).
4. **How it works** (`#how`, uses `.wrap-wide`): 4 step cards with outlined arrow circles between them. The arrows
   flip direction in RTL. The illustrations `how-step-1.jpg` to `how-step-4.jpg` are 262×210 crops of the owner's
   ChatGPT mockup. Their edges are CSS-masked into the card gradient, and the text is HTML. This replaced
   hand-built HTML illustrations, which the owner felt looked bad, on Sept 29, 2026.
   The nav's "Product" link and the hero's "See it in action" button point here.
5. **What ships with it** (`#ships`, uses `.wrap-wide`): a 6-card capability grid. It has 3 columns, then 2 below
   1100px, then 1 below 700px. Each card has an HTML icon, a Fraunces title, and body text on the left. On the right
   is an illustration cropped from the owner's mockup (`ships-1.jpg` to `ships-6.jpg`), placed with the inline CSS
   variables `--x`, `--w`, and `--y`. On phones the illustration sits top-right, opposite the icon. Redesigned on
   Sept 29, 2026.
6. **Proof** (`#proof`): a copper strip. Not redesigned yet.
7. **Contact** (`#contact`): CTA card, then the booking widget, then the contact form, then email/WhatsApp chips.
   Not redesigned yet.
8. **Footer**.

The standalone Showcase section (the report mockup image) was removed on Sept 29, 2026, because the hero card now
shows the same report page.

## Bilingual system (EN/AR)
- The `translations = { en: {...}, ar: {...} }` object is at the bottom of the file.
- Elements are tagged `data-i18n` (innerHTML), `data-i18n-alt` (alt text), or `data-i18n-ph` (placeholder).
- `setLang(lang)` swaps the text, sets `dir="rtl"`, and saves the choice to localStorage under the key
  `miqyas-lang`. That key is legacy; it's harmless and can stay.
- **The HTML default text is overwritten by the JS on load.** When you change copy, update the `en` object and the
  `ar` object, not just the HTML.
- The decorative illustrations are locked with `dir="ltr"` so they don't mirror. Their UI labels stay in English on
  purpose.

## Booking widget and contact form
- The widget shows 14 days of hourly slots from **8 AM to 1 AM Riyadh time (UTC+3)**, converted to and grouped by
  the visitor's own timezone. It requires at least 1 hour of notice.
- A booking opens a pre-filled **mailto** (to adas.abdulmajeed@gmail.com) or a **WhatsApp** link (+966 55 084 3077).
  **Nobody has confirmed that WhatsApp number yet.**
- This does not sync with a real calendar. Slots never lock once taken. A possible upgrade is a Calendly or Cal.com
  embed.
- The contact form is also mailto-based.

## Rules and decisions to keep
- **No fabricated social proof.** Don't add fake client logos (the mockups showed Microsoft, PwC, UNICEF, World Bank,
  Deloitte) or invented stats (500+ orgs, 2M+ assessments, 4.8/5 ratings).
- Don't reproduce real trademarked logos. There is one exception: on Sept 29, 2026, the owner explicitly chose to
  show the Excel logo in How it works step 4 (it's part of the mockup crop), because the product really exports
  Excel. Don't add other brand logos.
- Preferred technique for matching a mockup: build the text, cards, and layout in HTML, and crop only the pictorial
  parts (photos, illustrations) from the mockup image. The hero's mountain cover and the How it works illustrations
  are done this way.
- The hero stats row was removed on purpose; don't bring it back.
- The owner sends AI-generated mockups section by section and expects "make it like this". Match the layout,
  colors, and style closely, but still apply the two rules above.
- After every change, check EN, AR/RTL, and mobile. Watch for mis-nested `</div>` tags, which broke a layout
  once already.

## Known issues / TODO
- The proof strip still says "54 across 3 domains (case study)". The owner removed those numbers from the hero;
  ask whether they should come out here too.
- Nav dropdowns are fake and there is no real pricing section.
- **Name risk:** rubriq.com is an existing company (an AI academic editing and peer-review tool), and the name
  sounds the same as Rubrik, a large public company. Suggested fixes: use a `.io`, `.ai`, or `.co` domain and get a
  trademark check. The domain is not bought yet.
- Likely next steps: redesign Proof and Contact from new mockups; connect Cloudflare Pages;
  and buy the domain.

## Related, but a separate project
`C:\claude\miqyas-site` is the father's version of the site. It uses the old "Miqyas" branding and is framed as a
personal consulting pitch, and it is not in git. Don't modify it or merge it with this site.
