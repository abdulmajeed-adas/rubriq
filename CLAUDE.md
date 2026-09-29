# Rubriq website — project context

Handoff notes from the first build session (Sept 26–28, 2026).

## What this is
Marketing site for **Rubriq** (Arabic: روبريك), an **AI solutions agency** that builds automated
assessment-to-report platforms for consulting practices. The pitch: a consultant's rubric/framework goes in,
and a finished, data-grounded narrative report plus an action plan comes out.

- **Positioning is tech-only.** We build and run the platform; the client's team does the assessing and makes
  the judgment calls. Don't write copy that implies Rubriq does consulting work. The owner asked for this explicitly.
- **The client keeps their knowledge and voice.** Each client gets a knowledge base, and the owner trains the AI to
  write reports in that client's own language and reporting style, so reports stay on-brand. Copy should say reports
  come from approved assessment data, the client's knowledge base, and their reporting style. Don't imply generic
  "AI writes it in seconds." This was added on Sept 29, 2026, in the methodology section's wording.
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
- **Fraunces** (serif) for the headings and card titles of the redesigned sections. The owner's newer mockups use it.
  In Arabic those switch to Tajawal.

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
3. **Before / With Rubriq** (`#compare`, `.ba-*` classes, uses its own 1480px `.ba-wrap`): a centered header, then two
   panels with a round arrow between them.
   - The left panel has 6 steps with copper arrows and a "2–3 days" bar.
   - The right panel has the framework, an arrow, the Rubriq logo card (HTML), dotted SVG connectors, a 2×2 grid of
     platform cards, and a "Minutes, not days" bar.
   - The pictorial parts are crops of the owner's mockup (`ba-*.jpg`). Captions are HTML and translated. The labels
     inside the card crops stay English.
   - Below 1280px the panels stack and the middle arrow points down. Below 760px the steps become a 3-column grid
     and the right-panel flow stacks. Below 440px it's 2 columns.
   - Added on Sept 29, 2026.
4. **Your methodology stays yours** (`#methodology`, `.me-*` classes, 1480px `.me-wrap`): a centered header, then a
   5-column diagram.
   - The headline is "Your methodology stays yours. / Your knowledge and voice do too."
   - The columns are: the framework docs crop plus 6 HTML chips (Domains, Criteria, Weights, Scoring Scale,
     Knowledge Base, Voice & Tone); the incoming connector crop; the Rubriq
     "Methodology engine" card with a dashed line; the outgoing connector crop; and 4 output cards. Each output card
     has an HTML title and description with a cropped visual.
   - Three bottom labels sit at the foot of each column.
   - Below 1200px it stacks vertically and the connectors hide. Below 640px the chips go 2-up and the outputs 1-up.
   - Crops: `me-*.jpg`. Added on Sept 29, 2026.
5. **How it works** (`#how`, 1480px `.steps-wrap`): a centered kicker with rules on both sides, the serif heading, and
   4 step cards in a grid.
   - Each card has an "art box" (`aspect-ratio 433/300`, the mockup's illustration band), and the crop
     (`hw-1.jpg` to `hw-4.jpg`) sits inside it at the mockup position via `--x`, `--y`, and `--w`. Below that come
     the number, the Fraunces title, and the text.
   - Round copper arrows sit inside the art boxes and straddle the gaps between cards. They're hidden below 1100px,
     where the grid goes 2×2, and below 620px it's 1 column.
   - This is the second redesign, from the owner's new mockup on Sept 29, 2026. Step 4 is now "AI generates the
     report".
   The nav's "Product" and "Solutions" links and the hero's "See it in action" button point here.
6. **Not another dashboard** (`#output`, `.no-*` classes, 1480px `.no-wrap`): a centered header, then
   Assessment / Report / Development Plan tabs, three sample-document cards, and 3 features with dividers.
   - The cards (`no-report.jpg`, `no-assessment.jpg`, `no-devplan.jpg`) are one mockup strip cut in three. On
     desktop they sit in a grid proportional to their widths, so they line up like the original. The strip is
     `dir="ltr"` so it doesn't mirror.
   - The tabs work. On desktop all 3 cards show, and a click dims the others. At 1000px and below only the selected
     card shows, and the tabs switch it. The script is next to `renderBooking()` at the bottom.
   - Added on Sept 29, 2026.
7. **Proof** (`#proof`, `.pr-*` classes, 1480px `.pr-wrap`): two columns.
   - Left: the "Proof, not a prototype" kicker, the serif headline "Already running in production.", the lede, 2×2
     stat cards (54 indicators, 3 assessment domains, Multiple partner organizations, Minutes to generate reports),
     and a copper "View example report" button.
   - Right: the fanned report pages crop (`proof-reports.jpg`).
   - The owner's mockup brought "54" and "3 domains" back here on purpose; the hero still has no stats row.
   - Below 1100px the columns stack, and below 480px the stats go 1-up.
   - Redesigned on Sept 29, 2026, replacing the old copper strip.
8. **Final CTA + contact** (`#contact`, `.cta-*` classes, 1480px `.cta-wrap`):
   - At the top, the "Get started" CTA from the owner's mockup: the headline "See Rubriq running on your own
     framework.", a lede, and two buttons, plus the illustration crop `cta-art.jpg`.
   - "Book a demo" scrolls to `#book`, the booking widget. "Send your framework" is a mailto; JS sets its `href`
     from `CONTACT_EMAIL`, with a pre-filled subject and body.
   - Below that, the existing booking widget, contact form, and email/WhatsApp chips are kept unchanged. The owner
     still has to decide whether they stay.
9. **Footer**.

### Restructure done (Sept 29, 2026)
The owner rebuilt the page to exactly this order, one screenshot per section:
1. Hero
2. Before Rubriq / With Rubriq
3. Your methodology stays yours
4. How it works
5. Not another dashboard (the output section)
6. Proof / live deployment
7. Final CTA

Rules for this work:
- Recreate each screenshot as closely as possible, in the site's existing style and code patterns.
- Don't redesign in your own direction, and don't touch unrelated functionality.
- Replace the old section in place.
- Finish one section, then stop and wait for the next screenshot.

Removed on Sept 29, 2026: the standalone Showcase image section, "The problem", and the "What ships with it" grid,
along with its `ships-*.jpg` crops and the Caveat font.

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
- Don't draw or add real trademarked logos yourself. Exceptions: when the owner's mockup includes them and they
  asked for a close copy, they stay in the crops. The owner approved this on Sept 29, 2026, for Excel (How it works)
  and for Excel, Word, Outlook, and Gmail (Before / With Rubriq). They show the tools the process uses, not
  endorsements.
- Preferred technique for matching a mockup: build the text, cards, and layout in HTML, and crop only the pictorial
  parts (photos, illustrations) from the mockup image. The hero's mountain cover and the How it works illustrations
  are done this way.
- The hero stats row was removed on purpose; don't bring it back.
- The owner sends AI-generated mockups section by section and expects "make it like this". Match the layout,
  colors, and style closely, but still apply the two rules above.
- After every change, check EN, AR/RTL, and mobile. Watch for mis-nested `</div>` tags, which broke a layout
  once already.

## Known issues / TODO
- Nav dropdowns are fake and there is no real pricing section.
- The Proof button "View example report" jumps to `#output`, because no standalone example report exists yet. If a
  real sample PDF or page is made, point the button there.
- **Name risk:** rubriq.com is an existing company (an AI academic editing and peer-review tool), and the name
  sounds the same as Rubrik, a large public company. Suggested fixes: use a `.io`, `.ai`, or `.co` domain and get a
  trademark check. The domain is not bought yet.
- Likely next steps: decide whether the booking widget and contact form stay under the Final CTA; connect Cloudflare Pages;
  and buy the domain.

## Related, but a separate project
`C:\claude\miqyas-site` is the father's version of the site. It uses the old "Miqyas" branding and is framed as a
personal consulting pitch, and it is not in git. Don't modify it or merge it with this site.
