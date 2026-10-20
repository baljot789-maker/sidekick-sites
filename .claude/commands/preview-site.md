---
description: Build a preview site for a prospect who hasn't hired us yet, from public info only, then draft the email that shows it to them
argument-hint: <slug> "<Business Name>" <niche> [links...]
---

Build a preview site for a prospect. Arguments: $ARGUMENTS

The first argument is the slug, the quoted text is the business name, the next word is the niche (example: `residential-construction`), and anything after that is links to their public pages (Google listing, Facebook, Yelp, an old website).

**Preview mode** means the owner has not hired us and has not sent us anything. Every agent below runs in preview mode: tell each one so when you call it. At every **STOP**, end your turn and wait for Joe.

1. Check `pipeline/do-not-contact.txt`. If the business is on it, stop and tell Joe.
2. Check `kits/<niche>/`. If it has no `kit-*.json` files, stop and tell Joe: "Run the kit agent for <niche> first. It takes a while but only happens once per niche."
3. Create `clients/<slug>/raw/`. If it is empty, tell Joe: "Save 4 to 8 of their photos from their Google or Facebook page into clients/<slug>/raw/, plus their logo if they have one. Say go when done, or say go now to build with no photos." Wait for "go."
4. Use the **brief** agent in preview mode with the slug, name, niche, and links.
5. Use the **copy** agent in preview mode.
6. **STOP.** Show Joe the home page hero and the facts the copy relies on that came from public pages. Make any changes he asks for. Continue when he approves.
7. Use the **builder** agent in preview mode.
8. **STOP.** Tell Joe how to open the site locally and look at it at phone width. Make any changes he asks for. Continue when he approves.
9. Use the **ship** agent in preview mode. It publishes to `previews/` and stops before anything goes online.
10. Use the **pitch** agent.
11. **STOP.** Show Joe the email. He sends it himself, from his own email. Nothing in this repo sends email.

If the prospect says yes, tell Joe: "Run /new-site <slug> to turn the preview into the real site. The brief, copy, and build are reused; the owner confirms the facts first."
