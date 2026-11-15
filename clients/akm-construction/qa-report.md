# QA report: AKM Real Estate and Construction (preview)

Run on clients/akm-construction/site/ (5 pages).

- PASS: No TODO, lorem, example.com, XXX
- PASS: No empty photo placeholders
- PASS: No em dashes
- PASS: No pricing anywhere
- PASS: No credential badges or license, insurance or FORTIFIED claims
- PASS: Retile toy sits right after the hero
- PASS: Retile toy has 32 tiles, real buttons, a live counter (32 tiles)
- PASS: The hook opens the problem section, once
- PASS: Hero has no photo
- PASS: Every page has title, description, viewport, noindex, preview banner
- PASS: No link or image path starts with /
- PASS: Every image file exists (27 images)
- PASS: Every <img> has alt text
- PASS: No GPS in any site image
- PASS: Job photos appear only inside their own job strip
- PASS: Animations respect reduced motion
- PASS: No hard-coded tel: or sms: numbers
- PASS: Quote forms text Joe only
- PASS: No roofing or new-build services
- PASS: Meta titles <= 60, descriptions <= 155

Browser check (Playwright, 320px, 390px and 1280px): no sideways page scroll, every photo loads, no script errors. Retile toy: taps, Set them all, Start over and the finish message all work, every tile stays inside the grout, and Set them all is instant for reduced-motion users.

Lighthouse: skipped.
