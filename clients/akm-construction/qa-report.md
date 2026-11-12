# QA report: AKM Real Estate and Construction (preview)

Run on clients/akm-construction/site/ (5 pages).

- PASS: No TODO, lorem, example.com, XXX
- PASS: No empty photo placeholders
- PASS: No oval-top photo frames left in styles.css (only the AKM seal, step numbers and viewer buttons are round)
- PASS: No em dashes
- PASS: Every page has title, description, viewport, noindex, preview banner
- PASS: No JSON-LD
- PASS: No link or image path starts with /
- PASS: Every image file exists (16 images)
- PASS: Every <img> has alt text
- PASS: Images under 400 KB
- PASS: No GPS in any site image
- PASS: Each job: 2+ photos, first is a before, one Drive folder (4 jobs)
- PASS: Every job photo has a Drive folder and file on record
- PASS: Job photos appear only inside their own job strip
- PASS: No hard-coded tel: or sms: numbers
- PASS: site.js PHONE is blank
- PASS: Quote forms text Joe only ({'+16146238379'})
- PASS: Joe's number appears only as the form target
- PASS: No roofing, new-build or FORTIFIED text (no photos yet)
- PASS: Business name never 'AKM Construction'
- PASS: Meta titles <= 60, descriptions <= 155

Browser check (Playwright, 375px phone and 1280px desktop): no sideways page scroll, every photo loads, no script errors. Photo strips scroll sideways, the arrows appear on desktop, and tapping a photo opens the full-size viewer, where left and right stay inside the same job.

Lighthouse: skipped. Not run in this session.
