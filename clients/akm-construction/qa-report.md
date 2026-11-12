# QA report: AKM Real Estate and Construction (preview, photos added)

Run on clients/akm-construction/site/ (5 pages).

- PASS: No TODO, lorem, example.com, XXX
- PASS: No placeholder frames left
- PASS: No em dashes in visible text or copy.json
- PASS: Every page has title, meta description, viewport, noindex, preview banner
- PASS: No JSON-LD
- PASS: No link or image path starts with /
- PASS: Every image file exists (11 images)
- PASS: Every image has alt text
- PASS: Images under 400 KB
- PASS: No hard-coded tel: or sms: numbers
- PASS: site.js PHONE is blank
- PASS: Quote forms text Joe only ({'+16146238379'})
- PASS: Joe's number appears only as the form target
- PASS: No roofing, new-build or FORTIFIED text on the site (no photos yet)
- PASS: No exact GPS in any site image
- PASS: Business name never 'AKM Construction'
- PASS: Meta titles <= 60 and descriptions <= 155

Browser check (Playwright, 375px phone and 1280px desktop): no sideways scroll on any page, no broken images, no script errors.

Lighthouse: skipped. Not run in this session.
