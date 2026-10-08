# Rubriq website — project context

Handoff notes from the first build session (Sept 26–28, 2026).

## What this is
Marketing site for **Rubriq** (Arabic: روبريك). Rubriq **builds and runs a dedicated assessment-to-report platform
for each consulting firm**. The pitch: a firm's rubric/framework goes in, and a finished, data-grounded narrative
report plus an action plan comes out.

- **Core message (decided Oct 8, 2026): "We build and run your own assessment platform."** It is not one shared SaaS
  that everyone logs into, and it is not "an agency". Each client gets their own platform, built around their
  framework, brand, knowledge base, and reporting voice, and Rubriq builds, launches, and runs it.
  - Copy should repeat three ideas: it's theirs (dedicated, on their methodology and voice); we build and run it
    (no setup or IT work for them); and it runs on a proven engine (the live deployment), so custom doesn't mean slow
    or risky.
  - Wording to use: "your own platform", "built around your framework", "we build / we run". Avoid "AI solutions
    agency", "one integrated platform", or anything that sounds like a self-serve tool.
  - The menu says "Client login", because each client logs into their own platform. The Proof section frames the
    youth-network deployment as "one client's platform".

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
- A multi-page static site with no build step and no framework. Every page links **`site.css`** (all styles) and
  **`site.js`** (all translations, `setLang`, the nav menu, and the booking, output-tab, and mailto helpers, each
  guarded so it only runs where its elements exist).
- Pages:
  - `index.html` (landing)
  - `how-it-works.html`: 5 sections built Oct 1, 2026 from the owner's mockups (`_design/mockups/09-*`), with `.hp-*` classes:
    a hero with 3 step cards (Configure / Assess & Review / Generate), 01 Configure, 02 Assess & Review, 03 Generate,
    and a closing CTA. Every UI card is HTML/CSS rather than a crop, so it stays sharp; the owner rejected blurry crops.
    Card labels are English illustration text (`dir="ltr"`, `aria-hidden`); the copy around them is translated. Images:
    `images/how-it-works-page/mountain.jpg` (thumbnails) and `excel-icon.png`. "See an Example Report" goes to
    `index.html#output` while the Example Report page is empty.
  - `example-report.html` (intentionally empty since Oct 1, 2026; the owner will send new sections for it)
  - `solutions.html`
  - `security.html` (full Security & Trust page; see the note further down)
  - `book.html` (Book a Demo: calendar booking and details form)
  - `contact.html` (Contact us: email card, a Book a demo link, and a message form; same card design as booking.
    "Send message" opens a pre-filled mailto. Topic options were written by Claude, so the owner may edit them)
  - `privacy.html`
  - `terms.html`
- Solutions, Security, Privacy, and Terms are starter pages: a heading plus "coming soon". The legal pages
  deliberately have no invented legal text; the owner has to supply the real policy.
- The nav and footer HTML are repeated in each page (static, no includes). **When you change the menu or footer,
  update all 9 files.**
  - The menu is: Home, How It Works, Example Report, Solutions, Security & Trust, Contact, then the language toggle, a
    Login button (`href="#"` placeholder until the platform login URL exists), and Book a demo (`book.html`).
  - The current page gets `aria-current` from `site.js`.
  - At 1180px and below the links collapse into a ☰ dropdown. At 600px and below Login moves into the dropdown.
  - The footer has Privacy Policy and Terms of Service links.
- The home page keeps its How it works and output sections too; the owner may later replace the separate pages with
  new designs.
- Images live in `images/`, one folder per section: `brand/` (logo and favicon), `hero/` (`report-page.jpg`, the
  full-resolution report page used as the hero's big card), `before-after/`, `methodology/`, `how-it-works/`,
  `output/`, `proof/`, and `get-started/`. Files have plain descriptive names; there are no prefixes. Put new section
  images in a new folder named after the section.
- The owner's design mockups are saved locally in `_design/mockups/`, numbered in page order, with older and scrapped
  versions in `_design/mockups/old/`. `_design/` is in `.gitignore`, so they are never pushed to the public repo or
  served on the site.
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
1. **Nav**: the shared site menu (see Stack). "Home" is marked as the current page.
2. **Hero** (redesigned Oct 2, 2026 from the owner's "Clear Insights, Stronger Tomorrow" mockup, which they love):
   - A full-bleed photo, `images/hero/hero-laptop.webp` (1672×941, supplied by the owner): a laptop showing the
     report on a mountain at sunset. Dark gradients on the left and top keep the text and menu readable.
   - Copy (layout from the "Rubriq Impact at Sunset" mockup; headline changed Oct 8, 2026 to match the new positioning):
     - A copper bar, then the Manrope headline "Your methodology. / Your own platform." with "Your own platform." in peach
       (`.hero-accent`).
     - The subtitle (`.hero-sub`, key `heroSub`).
     - "Book a demo" (`book.html`, key `heroCta`), and a round play button labelled "See how it works"
       (`.hero-watch`, key `heroWatch`) that links to `how-it-works.html`. There is no video yet.
   - The menu on the home page only is `nav.nav-over`: fixed and transparent over the photo, with white text and the
     white-and-copper logo `images/brand/logo-icon-light.png`. `site.js` adds `.is-solid` (the normal cream menu)
     after 40px of scroll or when the mobile menu opens.
   - In Arabic the text block stays on the left, because the laptop is on the right of the photo; only the text inside
     reads RTL. On wide screens the block shifts up to 60px left into the spare side margin, and 20px up.
   - At 960px and below, the text sits at the bottom over a stronger dark fade (Arabic is right-aligned there).
   - Replaced the earlier report-card hero, whose `.hero-visual` and `.hero-plan` code was removed.
3. **Before / With Rubriq** (`#compare`, `.ba-*` classes, uses its own 1480px `.ba-wrap`): a centered header, then two
   panels with a round arrow between them.
   - The left panel has 6 steps with copper arrows and a "2–3 days" bar.
   - The right panel has the framework, an arrow, the Rubriq logo card (HTML), dotted SVG connectors, a 2×2 grid of
     platform cards, and a "Minutes, not days" bar.
   - The pictorial parts are crops of the owner's mockup (`images/before-after/`). Captions are HTML and translated. The labels
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
   - Crops: `images/methodology/`. Added on Sept 29, 2026.
5. **How it works** (`#how`, 1480px `.steps-wrap`): a centered kicker with rules on both sides, the serif heading, and
   4 step cards in a grid.
   - Each card has an "art box" (`aspect-ratio 433/300`, the mockup's illustration band), and the crop
     (`images/how-it-works/step-1-framework.jpg` to `images/how-it-works/step-4-report.jpg`) sits inside it at the mockup position via `--x`, `--y`, and `--w`. Below that come
     the number, the Fraunces title, and the text.
   - Round copper arrows sit inside the art boxes and straddle the gaps between cards. They're hidden below 1100px,
     where the grid goes 2×2, and below 620px it's 1 column.
   - This is the second redesign, from the owner's new mockup on Sept 29, 2026. Step 4 is now "AI generates the
     report".
   The nav's "Product" and "Solutions" links and the hero's "See it in action" button point here.
6. **Not another dashboard** (`#output`, `.no-*` classes, 1480px `.no-wrap`): a centered header, then
   Assessment / Report / Development Plan tabs, three sample-document cards, and 3 features with dividers.
   - The cards (`images/output/report-card.jpg`, `images/output/assessment-card.jpg`, `images/output/development-plan-card.jpg`) are one mockup strip cut in three. On
     desktop they sit in a grid proportional to their widths, so they line up like the original. The strip is
     `dir="ltr"` so it doesn't mirror.
   - The tabs work. On desktop all 3 cards show, and a click dims the others. At 1000px and below only the selected
     card shows, and the tabs switch it. The script is next to `renderBooking()` at the bottom.
   - Added on Sept 29, 2026.
7. **Proof** (`#proof`, `.pr-*` classes, 1480px `.pr-wrap`): two columns.
   - Left: the "Proof, not a prototype" kicker, the serif headline "Already running in production.", the lede, 2×2
     stat cards (54 indicators, 3 assessment domains, Multiple partner organizations, Minutes to generate reports),
     and a copper "View example report" button.
   - Right: the fanned report pages crop (`images/proof/report-pages.jpg`).
   - The owner's mockup brought "54" and "3 domains" back here on purpose; the hero still has no stats row.
   - Below 1100px the columns stack, and below 480px the stats go 1-up.
   - Redesigned on Sept 29, 2026, replacing the old copper strip.
8. **Final CTA + contact** (`#contact`, `.cta-*` classes, 1480px `.cta-wrap`):
   - At the top, the "Get started" CTA from the owner's mockup: the headline "See Rubriq running on your own
     framework.", a lede, and two buttons, plus the illustration crop `images/get-started/illustration.jpg`.
   - "Book a demo" links to `book.html`. "Send your framework" is a mailto; JS sets its `href` from
     `CONTACT_EMAIL`, with a pre-filled subject and body.
   - The booking widget, contact form, and chips are not on the home page. The owner wanted them on their own page.
9. **Footer**.

### book.html (Book a Demo; redesigned Oct 1, 2026 from the owner's "Warm Copper Booking Interface" mockup)
- One two-column card (`.bk-*` classes) on a page with beige CSS shapes behind it and no page heading, as in the
  mockup.
  - Left: "Select a date and time", a month calendar with prev/next arrows, then "Available times" with the
    auto-detected timezone and a 3-column slot grid.
  - Right: "Your details": Full name, Work email, Company, Role (select), Assessment type / framework (select), an
    optional notes textarea with a 0/500 counter, an optional file drop zone (PDF, PPT, or DOCX up to 10MB), a
    Book Demo button, and "You'll receive a calendar invite by email."
- The Role and Framework option lists were written by Claude because the mockup didn't list them. The owner may want
  to edit them (`bkRole1`–`5` and `bkFw1`–`6` in `site.js`).
- The old "Or just send a message" form and the email/WhatsApp chips were removed because they aren't in the
  mockup.
- The nav "Book a demo", the hero "Book a Demo", and the CTA "Book a demo" all link here. On Cloudflare Pages it is
  also served at `/book`.

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
- The `translations = { en: {...}, ar: {...} }` object is at the top of `site.js` and holds the text for every page.
- Elements are tagged `data-i18n` (innerHTML), `data-i18n-alt` (alt text), or `data-i18n-ph` (placeholder).
- `setLang(lang)` swaps the text, sets `dir="rtl"`, and saves the choice to localStorage under the key
  `miqyas-lang`. That key is legacy; it's harmless and can stay.
- **The HTML default text is overwritten by the JS on load.** When you change copy, update the `en` object and the
  `ar` object, not just the HTML.
- The decorative illustrations are locked with `dir="ltr"` so they don't mirror. Their UI labels stay in English on
  purpose.

- **Security & Trust page (`security.html`, `.sc-*` classes; written Oct 8, 2026 from the owner's answers).** Every
  sentence must stay true, so if the setup changes, update the page. It states this setup, which the owner committed to:
  - Each firm gets its **own Supabase project** (database and storage), with hosting on **Cloudflare**.
  - The hosting region is chosen per firm at setup. A Supabase project's region can't be changed later, so ask first.
  - Email-and-password logins, with **two-factor authentication for admins and consultants**, and Microsoft/Google
    SSO on request. Roles are Admin, Consultant, and Respondent, enforced with row-level security.
  - Evidence files are in **private storage** and open through short-lived signed links. Backups run **daily**, so
    every client needs the Supabase Pro plan.
  - AI is **Anthropic Claude via the commercial API**, and client data isn't used for training. Each knowledge base is
    used only for its own client.
  - Export and deletion on request; an NDA is offered; staff access the platform only for setup and support.
  - Cloudflare's SOC 2 Type II / ISO 27001 and Supabase's SOC 2 Type II are credited to those providers, never to Rubriq.
  - Security questions go to `contact.html` until a security email exists.
  - The same setup is a printable checklist for each new client in `_design/security-standard.svg` (local only).

## Booking logic (on `book.html`, in `site.js`)
- Availability is unchanged: hourly slots from **8 AM to 1 AM Riyadh time (UTC+3)** for the next 90 days (`NUM_DAYS`), with at
  least 1 hour of notice. They are shown in the visitor's timezone, which is detected automatically and shown as a label next to "Available
  times" (for example "GMT+3 (Riyadh)"); the owner asked for no manual picker. Calendar days with no slots are disabled.
- **There is no backend.** "Book Demo" validates the form, then opens a pre-filled **mailto** to
  adas.abdulmajeed@gmail.com with every field, the time in both the visitor's timezone and Riyadh time, and the file
  name. A mailto can't attach the file, so the visitor is told to attach it themselves. The owner confirms by
  sending a calendar invite manually.
- Nothing syncs with a real calendar, so slots never lock. For real bookings, file uploads, and automatic invites,
  connect a service: a Cal.com embed or API, Formspree, or a Cloudflare Pages Function plus email.

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
- The Login button goes nowhere yet (`href="#"`); point it at the platform login once it exists.
- The Proof button "View example report" and the hero "See Example Report" go to `#output` while `example-report.html` is empty; repoint both to that page once it has content.
- **Name risk:** rubriq.com is an existing company (an AI academic editing and peer-review tool), and the name
  sounds the same as Rubrik, a large public company. Suggested fixes: use a `.io`, `.ai`, or `.co` domain and get a
  trademark check. The domain is not bought yet.
- Likely next steps: confirm the live site deploys from GitHub (the owner reported it hadn't updated on the domain);
  connect or check Cloudflare Pages;
  and buy the domain.

## Related, but a separate project
`C:\claude\miqyas-site` is the father's version of the site. It uses the old "Miqyas" branding and is framed as a
personal consulting pitch, and it is not in git. Don't modify it or merge it with this site.
