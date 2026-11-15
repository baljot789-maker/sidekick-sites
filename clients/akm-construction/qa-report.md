# QA report: AKM Real Estate and Construction (preview)

Run on clients/akm-construction/site/ (5 pages).

- PASS: No TODO, lorem, example.com, XXX
- PASS: No em dashes
- PASS: No pricing anywhere
- PASS: No credential badges or claims
- PASS: Phone set once, to Jay's cell, in site.js
- PASS: Every main button is Call Jay (header, hero, how it works, closing, phone bar, services, contact)
- PASS: No hard-coded tel: or sms: numbers in the HTML (site.js fills them)
- PASS: Quote forms still text Joe (preview rule)
- PASS: Kitchen section right after the hero, drawing then headline then button, no descriptors
- PASS: The hook opens the problem section, once
- PASS: Every page has title, description, viewport, noindex, preview banner
- PASS: Every image file exists (27 images)
- PASS: No GPS in any site image
- PASS: Job photos appear only inside their own job strip
- PASS: No roofing or new-build services
- PASS: Meta titles <= 60, descriptions <= 155

Browser check (Playwright at 390x844 and 1280x900): every visible Call Jay button dials tel:+16143902931 and every Text Jay button texts it; no Get a free estimate buttons show once the number is set; no script errors.

Lighthouse: skipped.
