# QA report: AKM Real Estate and Construction (preview, November rebuild)

Run 2026-11-10 on clients/akm-construction/site/ (5 pages), rerun after the StoryBrand rewrite: no em dashes, no TODOs, no ai-tells words, noindex and banner on every page, no hard-coded phone numbers, no sideways scroll at 375px or 1280px, no script errors.

- PASS: No TODO, lorem, example.com, XXX in any page
- PASS: No em dashes in visible text
- PASS: No em dashes in copy.json
- PASS: Every page has title, meta description, viewport
- PASS: Every page has noindex robots meta
- PASS: Every page has the preview banner
- PASS: No JSON-LD block
- PASS: No link or image path starts with /
- PASS: Every internal link points to a page that exists (about.html, contact.html, index.html, services.html, work.html)
- PASS: Every #anchor link has a target
- PASS: Business name appears as 'AKM Real Estate and Construction', no old 'AKM Construction'
- PASS: No hard-coded tel: or sms: numbers (phone is blank, set once in site.js)
- PASS: site.js PHONE is blank
- PASS: Quote forms text Joe (614-623-8379) and no other number ({'+16146238379'})
- PASS: Joe's number appears nowhere except the form target
- PASS: Meta titles <= 60 and descriptions <= 155 characters (home 49/141; services 55/138; work 47/114; about 50/129; contact 43/128)
- PASS: No words from pipeline/rules/ai-tells.md
- PASS: No 'Moreover/Furthermore/Additionally/In short/Ultimately'
- PASS: Fonts are the Libre Caslon and Libre Franklin set only (Libre Caslon Display, Libre Caslon Text, Libre Franklin)
- PASS: Images: none yet (photos pending)

Browser check (Playwright, 375px phone and 1280px desktop): no sideways scroll on any page, no script errors. With a test number typed into site.js, every Call and Text button appeared with tel:/sms: links and the phone bar switched from "Get a free estimate" to Call and Text. The link contact.html?project=New+build#quote picks New build and shows the blueprints tip.

Lighthouse: skipped. Not run in this session.
