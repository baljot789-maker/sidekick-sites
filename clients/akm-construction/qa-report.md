# QA report: AKM Real Estate and Construction (preview)

Run on clients/akm-construction/site/ (5 pages).

- PASS: No TODO, lorem, example.com, XXX
- PASS: No em dashes
- PASS: No pricing anywhere
- PASS: No credential badges or license, insurance or FORTIFIED claims
- PASS: Kitchen section comes right after the hero
- PASS: In the kitchen section, the animation comes before the words
- PASS: No eyebrow in the kitchen section
- PASS: Tile toy fully removed
- PASS: Kitchen has 7 swappable parts, each with a chip button
- PASS: Final button fills Kitchen remodel into the estimate form
- PASS: The hook opens the problem section, once
- PASS: Every page has title, description, viewport, noindex, preview banner
- PASS: No link or image path starts with /
- PASS: Every image file exists (27 images)
- PASS: Every <img> has alt text, and the drawing has a title
- PASS: No GPS in any site image
- PASS: Job photos appear only inside their own job strip
- PASS: Animations respect reduced motion
- PASS: No hard-coded tel: or sms: numbers
- PASS: Quote forms text Joe only
- PASS: No roofing or new-build services
- PASS: Meta titles <= 60, descriptions <= 155

Browser check (Playwright, 320px, 390px and 1280px): no sideways page scroll, every photo loads, no script errors. Kitchen: plays once on its own when it scrolls into view, every chip and every part of the drawing toggles, Remodel it finishes the rest, Start over resets, and the final button fills Kitchen remodel into the form. With reduced motion on, nothing plays by itself and swaps are instant.

Lighthouse: skipped.
