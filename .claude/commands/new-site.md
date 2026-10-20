---
description: Run a new client website through the full agent pipeline, stopping for Joe at each checkpoint
argument-hint: <slug> "<Business Name>" [links...]
---

Start a new client site. Arguments: $ARGUMENTS

The first argument is the client slug, the quoted text is the business name, and anything after that is links to their existing pages.

Run these steps in order. At every **STOP**, end your turn and wait for Joe.

1. Create `clients/<slug>/raw/` if it doesn't exist. If `raw/` is empty, tell Joe to drop in any photos, logo, screenshots, or the owner's texts now, and wait for him to say "go" before continuing.
2. Use the **brief** agent with the slug, business name, and links.
3. **STOP.** Show Joe the gap text so he can send it to the owner. When Joe pastes the owner's answers, use the brief agent again to update `brief.json`.
4. Use the **copy** agent.
5. **STOP.** Show Joe the home page hero and ask him to read `clients/<slug>/copy.json`. Make any changes he asks for. Continue when he approves.
6. Use the **builder** agent.
7. **STOP.** Tell Joe how to open the site locally and look at it at phone width. Make any changes he asks for. Continue when he approves.
8. Use the **ship** agent. It will stop after the preview deploy and wait for "ship it."

After launch, tell Joe: "For change requests from this client, say: use the care agent for <slug>, then paste their text."
