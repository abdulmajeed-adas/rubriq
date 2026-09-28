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
  `rubriq-report-mockup-hq.jpg` (showcase image).
- Compress large images to JPEG before adding them. PNGs with photos in them are too heavy.
- Local preview: serve the folder with a tiny Node `http.createServer` static server, then check it with Playwright.

## Design system
Colors are CSS variables on `:root`, taken from the owner's brand palette. There is also a dark-mode block.

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
- **Fraunces** (serif) only in the "How it works" heading and step titles. This scoping is intentional.
- **Caveat** only for the handwritten note in "The problem" illustration.

## Page structure, in order
1. **Nav**: logo, center links (Product / Solutions / Pricing / Resources), globe language toggle,
   and a "Book a call" button.
   - The chevrons are decorative; there are no real dropdowns.
   - Pricing points to `#contact`.
2. **Hero**: a two-column grid.
   - Left: eyebrow "Assess / Analyze / Develop", the headline "Turn any rubric into a self-writing report.",
     the lede, a scope note, and two buttons.
   - Right: a hand-built CSS dashboard illustration with a sidebar, stat cards, radar chart, evidence list,
     and two overlapping cards ("Leadership Assessment Report", "Development Plan"). The data in it is
     labeled illustrative.
   - The hero is tuned to fit a roughly 900px viewport without the next section peeking in. The settings are
     `.hero` padding-bottom 220px and `.hero-copy { transform: translateY(40px) }`.
3. **The problem**:
   - Left: heading and a card-stack illustration ("Client Scores", "Q3 Assessment" with an "In progress" badge,
     "Client Report") with a handwritten "Hours of work every week" note.
   - Right: a paragraph and 3 icon cards (clock, refresh, eye).
4. **Showcase** (`#showcase`): the report mockup image.
5. **How it works**: 4 step cards, each with a mini illustration and a badge (cube, upload, check, spreadsheet
   grid), with arrows between them. The arrows flip direction in RTL.
6. **What ships with it** (`#ships`): a 6-card capability grid. Not redesigned yet.
7. **Proof** (`#proof`): a copper strip. Not redesigned yet.
8. **Contact** (`#contact`): CTA card, then the booking widget, then the contact form, then email/WhatsApp chips.
   Not redesigned yet.
9. **Footer**.

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
- Don't reproduce real trademarked logos. For example, use a generic spreadsheet icon instead of the Excel logo.
- The hero stats row was removed on purpose; don't bring it back.
- The owner sends AI-generated mockups section by section and expects "make it like this". Match the layout,
  colors, and style closely, but still apply the two rules above.
- After every change, check EN, AR/RTL, and mobile. Watch for mis-nested `</div>` tags, which broke a layout
  once already.

## Known issues / TODO
- The `.section-head h2` selector never matches, because the class is on the `h2` itself. This affects the
  "What ships with it" heading.
- The proof strip still says "54 across 3 domains (case study)". The owner removed those numbers from the hero;
  ask whether they should come out here too.
- Nav dropdowns are fake and there is no real pricing section.
- **Name risk:** rubriq.com is an existing company (an AI academic editing and peer-review tool), and the name
  sounds the same as Rubrik, a large public company. Suggested fixes: use a `.io`, `.ai`, or `.co` domain and get a
  trademark check. The domain is not bought yet.
- Likely next steps: redesign "What ships with it", Proof, and Contact from new mockups; connect Cloudflare Pages;
  and buy the domain.

## Related, but a separate project
`C:\claude\miqyas-site` is the father's version of the site. It uses the old "Miqyas" branding and is framed as a
personal consulting pitch, and it is not in git. Don't modify it or merge it with this site.
