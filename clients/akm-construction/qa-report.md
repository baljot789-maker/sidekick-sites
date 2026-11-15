# QA report: AKM Real Estate and Construction (preview)

Run on clients/akm-construction/site/ (5 pages).

- PASS: No TODO, lorem, example.com, XXX
- PASS: No em dashes
- PASS: No pricing anywhere
- PASS: No credential badges or claims
- PASS: Kitchen section comes right after the hero
- PASS: Kitchen: drawing first, then the headline, then the button
- PASS: Kitchen: no descriptors (no part labels, no problem and fix captions, no extra sentence, no eyebrow)
- PASS: Kitchen plays with scroll, pins while it plays, and reverses on the way up
- PASS: Reduced motion: finished kitchen shown, nothing pinned
- PASS: The hook opens the problem section, once
- PASS: Every page has title, description, viewport, noindex, preview banner
- PASS: No link or image path starts with /
- PASS: Every image file exists (27 images)
- PASS: Every <img> has alt text, and the drawing has a title
- PASS: No GPS in any site image
- PASS: Job photos appear only inside their own job strip
- PASS: No hard-coded tel: or sms: numbers
- PASS: Quote forms text Joe only
- PASS: No roofing or new-build services
- PASS: Meta titles <= 60, descriptions <= 155

Browser check (Playwright at 375x667, 390x844 and 1280x900): no sideways page scroll, every photo loads, no script errors. The kitchen pins in the middle of the screen, swaps one part per step across about 630 px of scrolling, reverses when scrolling up, and lets go after the last part.

Lighthouse: skipped.
