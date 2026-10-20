# Sidekick Sites

This repo builds $199 websites (plus $50/month maintenance) for local service businesses, sold by ScaleUp Sidekicks. Joe runs it. He is new to coding, so explain anything technical in plain words and keep reports short.

## How the work flows

Each client gets a folder in `clients/<slug>/`. Agents pass files to each other like a relay baton:

1. **brief** agent writes `brief.json` and `gap-text.txt`
2. **copy** agent writes `copy.json`
3. **builder** agent writes `site/`
4. **ship** agent checks, previews, and (after Joe says "ship it") goes live
5. **care** agent handles client change requests and monthly checks after launch

The **kit** agent runs once per niche and writes design kits to `kits/<niche>/`.

To run the whole thing for a new client, Joe types `/new-site`.

## Previews for prospects

Before someone hires us, Joe can build them a preview of their own site from public info and email them the link. He types `/preview-site`. The same agents run in **preview mode** (`"mode": "preview"` in `brief.json`): no gap text, public sources only, a preview banner, hidden from Google. Ship copies the finished preview into `previews/<preview_path>/` instead of deploying it, and the **pitch** agent drafts the email.

`previews/` is the only folder that is served to the public, at previews.scaleupsidekicks.com. Everything else in this repo stays private.

## Rules for every agent and every session

- **Never invent facts** about a client business: no licenses, years, reviews, guarantees, or numbers that aren't confirmed in `brief.json`.
- **Never deploy to production** without Joe typing "ship it" in the conversation.
- **Never buy domains, change DNS, or handle passwords.** Tell Joe what to do instead.
- **Never push and never send email.** Pushing puts `previews/` on the internet. Joe pushes, or says so in the conversation. Joe sends every email himself.
- The price, what's included, and the timing promise live in `pipeline/offer.md` and must match scaleupsidekicks.com. Never state them any other way.
- Client raw files in `clients/<slug>/raw/` are originals. Never edit or delete them.
- No em dashes in anything client-facing.
- When an agent's instructions turn out wrong in practice, tell Joe what to change in its file in `.claude/agents/`. The agents get better by editing those files after each real client.
