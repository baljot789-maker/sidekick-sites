# QA report: AKM Real Estate and Construction (preview)

Run on clients/akm-construction/site/ (5 pages).

- PASS: No TODO, lorem, example.com, XXX
- PASS: No empty photo placeholders
- PASS: No oval-top photo frames
- PASS: No em dashes
- PASS: Bathroom pricing removed everywhere
- PASS: Every page has title, description, viewport, noindex, preview banner
- PASS: No JSON-LD
- PASS: No link or image path starts with /
- PASS: Every image file exists (27 images)
- PASS: Every <img> has alt text
- PASS: Images under 400 KB
- PASS: No GPS in any site image
- PASS: Each job: 3+ photos, first is a before-type shot, one Drive folder (5 jobs)
- PASS: Each compare slider uses two photos from the same job
- PASS: Job photos appear only inside their own job strip
- PASS: Before and after scroller sits right after the hero on the home page
- PASS: Reveal animation respects reduced motion
- PASS: No hard-coded tel: or sms: numbers
- PASS: site.js PHONE is blank
- PASS: Quote forms text Joe only ({'+16146238379'})
- PASS: Joe's number appears only as the form target
- PASS: No roofing, new-build or FORTIFIED text (no photos yet)
- PASS: Business name never 'AKM Construction'
- PASS: Meta titles <= 60, descriptions <= 155 (home 54/149; services 50/131; work 50/135; about 52/139; contact 43/140)

Browser check (Playwright, 375px phone and 1280px desktop): no sideways page scroll, every photo loads, no script errors. The reveal sweeps from before to after once when a card scrolls into view (100% to 22%), stays at 50% for people who ask for reduced motion, and the handle works by drag and by arrow keys. Photo strips scroll sideways and the full-size viewer stays inside one job.

Lighthouse: skipped. Not run in this session.
