# QA report: AKM Real Estate and Construction (preview)

Run on clients/akm-construction/site/ (5 pages).

- PASS: No TODO, lorem, example.com, XXX
- PASS: No empty photo placeholders
- PASS: No oval-top photo frames
- PASS: No em dashes
- PASS: No pricing anywhere: no dollar amounts, no 'price' or 'pricing' words
- PASS: Hero has no photo
- PASS: Credential badges sit right after the hero, before the before-and-after scroller
- PASS: Three credential badges: licensed, insured, FORTIFIED
- PASS: The hook is the opening line of the problem section
- PASS: The hook is not repeated further down
- PASS: Every page has title, description, viewport, noindex, preview banner
- PASS: No JSON-LD
- PASS: No link or image path starts with /
- PASS: Every image file exists (27 images)
- PASS: Every <img> has alt text
- PASS: Images under 400 KB
- PASS: No GPS in any site image
- PASS: Each job: 3+ photos, one Drive folder (5 jobs)
- PASS: Job photos appear only inside their own job strip
- PASS: Reveal animation respects reduced motion
- PASS: No hard-coded tel: or sms: numbers
- PASS: site.js PHONE is blank
- PASS: Quote forms text Joe only ({'+16146238379'})
- PASS: Joe's number appears only as the form target
- PASS: No roofing or new-build services on the site (no photos yet)
- PASS: Business name never 'AKM Construction'
- PASS: Meta titles <= 60, descriptions <= 155

Browser check (Playwright, 390px phone and 1280px desktop): no sideways page scroll, every photo loads, no script errors.

Lighthouse: skipped. Not run in this session.
