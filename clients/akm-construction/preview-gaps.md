# What's missing, and what the site does without it

Updated 2026-11-10 from the Website Brief (2026-11-07).

## Blocks launch

1. **AKM customer number.** Left blank on purpose. Every Call and Text button is hidden until it's set. To add it, type it once at the top of `site/site.js` (`var PHONE = "";`), then copy the site into previews again. Pick a 662 number: that's the Belzoni area code.
2. **Photos.** 16 real job photos in 4 before-and-after strips plus 4 more finished jobs are on the site now, from the Drive folder "Web project - AKM" (375 photos, 177 videos). About 1 in 4 photos was opened to find the jobs: a master bath in Moorhead (2026), a shower in Inverness (2026), a custom kitchen near Belzoni (2025) and a kitchen near Belzoni (2024). See `photo-index.md` for which Drive folder each job comes from. Every caption is job type, town and year, no dates. Towns come from each photo's GPS, which is stripped from the copies on the site.
   **No roofing photos found.** None of the 96 photos opened show a roof. Roofing, new builds and other remodels are off the site until there are photos for them. Their text is saved under `paused` in `copy.json`, and `on_site` is false in `brief.json`.
3. **Logo.** Joe is booking the designer. Until then the header uses a typed "AKM / Real Estate and Construction" wordmark and the footer a round AKM seal.
4. **Domain.** Jay picks it and registers it in AKM's own account with two-factor sign-in.

## Left off the site until it arrives

5. **Licence number and proof of insurance.** The brief says licensed and insured in Mississippi. The site says nothing about it until the number and proof are in hand. Residential jobs over about $10,000 need a state contractor licence, which covers every kitchen and new build on the site.
6. **FORTIFIED certification.** The site describes the work ("FORTIFIED roofing projects completed across the Mississippi Delta"), as the brief asks. It does not call Jay a certified FORTIFIED roofer until that's confirmed.
7. **Customer quotes.** None in writing yet. When 2 or 3 arrive (word for word, first name, town, permission), they get a homepage section, ideally the ones about honesty, pricing or saving money.
8. **Email, hours, how Jay got started, what AKM stands for.** Left out. The About page stays short.

## Form

The quote form texts Joe (614-623-8379) until the AKM number exists, per the preview rule. It opens the visitor's texting app with their details typed in, and tells them to attach photos, or blueprints for a new build, before sending. That covers the brief's blueprint upload for now with no outside service. A web form with file uploads (the brief's "From Joe" item) can replace it later. On a desktop computer, the text link may not open anything, so desktop visitors need the phone number once it exists.

## Questions for Jay

- Is there a folder of roofing jobs? The Drive folders here are only interior work and electrical.
- Was the 2024 kitchen build near Belzoni (IMG_9835 to IMG_1805) a new house? If yes, New builds can come back with those photos.
- Is the Moorhead master bath the job he is proudest of? It leads the home page.

## Photos to ask about

- `raw/drive/2026_Belzoni/IMG_7886.JPG` (electrical panels, Belzoni, 2026) may be the commercial kitchen. If Jay says yes, it goes in that story.
- `raw/drive/2025_near-Belzoni/IMG_6723.JPG` shows a crew member tiling, smiling. Great for the About page, but only with his OK.
- `raw/drive/2026_Moorhead/IMG_8703.PNG` is a text thread with a customer's name in it. Never put it on the site.

## Search

Town names on the page help a little. Google Business Profile, with the service area, real photos and reviews, does far more for local search, and AKM has none. Previews are hidden from Google anyway, so none of this counts until launch.

## Kept off version one (per the brief)

Real estate services, named lenders or government programs, and any handyman or small-job language. The services page says plainly: "We don't do handyman work or small repairs."

Design: unchanged from October. Magnolia cream, Delta green, aged brass, Libre Caslon with Libre Franklin, arched window frames, beadboard lines.

## How photos work now

Every job is its own sideways strip: Before, then the steps, then After. Tap a photo for the full-size viewer. Left and right in the viewer stay inside that job, so a before can never sit next to another job's after. Each job's photos were checked to share one Drive folder and one address.

**The Custom kitchen near Belzoni after photo has a worker in it** (IMG_3395, his back and cap, face not visible). Jay should be fine with it, or we swap it. The matching hood photo without a person (IMG_3400) has a location tag 2.4 km from the before, so it stays out until Jay confirms it's the same kitchen.
