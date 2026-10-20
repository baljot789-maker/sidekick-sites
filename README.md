# Sidekick Sites: setup and how it works

Seven agents that build and maintain $199 websites for local businesses, and build previews to show prospects before they hire us.

## What an agent is (the 12-year-old version)

Each agent is one text file in `.claude/agents/`. The file is a job description: what the agent does, what it reads, what it writes, and what it must never do. When you ask Claude Code to "use the brief agent," it hires a helper, hands it that job description, and the helper does only that job.

The agents never talk to each other. They pass files. The Brief agent writes `brief.json`. The Copy agent reads it and writes `copy.json`. The Builder reads both and writes the site. Like a relay race: each runner only needs to know how to grab the baton and what to hand off. That's why `pipeline/schema/site-brief.example.json` (the baton's shape) matters more than any single agent.

## Two ways in

- **`/preview-site`** for a prospect who hasn't hired us. Built from their public pages only, published to a hidden link, followed by an email you send yourself.
- **`/new-site`** for a paying client. The owner confirms every fact, then it goes live on their domain. If they started as a preview, run it on the same slug and the work carries over.

## Folder map

```
.claude/agents/      the seven job descriptions
.claude/commands/    /preview-site and /new-site
CLAUDE.md            rules every Claude Code session in this repo follows
pipeline/schema/     the shape of brief.json
pipeline/rules/      ai-tells.md, the copy checklist
pipeline/offer.md    price, what's included, timing, sender details (must match the homepage)
pipeline/do-not-contact.txt   anyone who said no thanks
kits/                design kits, one folder per niche (Kit agent fills this)
template/            the tested base site (empty until your first approved build)
clients/<slug>/      everything for one business: raw files, brief, copy, site, logs
previews/            the ONLY public folder, served at previews.scaleupsidekicks.com
```

## Hosting setup (one time, about 20 minutes, all done by you)

These steps involve your accounts, so Claude won't do them for you. Everything here is free. We use Cloudflare Pages because Vercel's free plan is for non-commercial use only, and previews for prospects count as commercial.

1. **GitHub:** on github.com, create a new repository named `sidekick-sites`, set to **Private**, with no README. Then tell Claude Code: "Connect this repo to github.com/<your-username>/sidekick-sites." You run the push yourself.
2. **Cloudflare account:** sign up free at dash.cloudflare.com. No credit card needed.
3. **Cloudflare Pages project:** in the dashboard, Workers & Pages, Create, Pages tab, Connect to Git. Let Cloudflare see only the `sidekick-sites` repo. Project name `ss-previews`, production branch `main`, framework preset **None**, build command blank, build output directory `previews`. Save and Deploy.
4. **Domain:** in that project, Custom domains, add `previews.scaleupsidekicks.com`. Cloudflare shows one CNAME record. Add it wherever scaleupsidekicks.com's DNS lives.
5. **Check it:** visiting previews.scaleupsidekicks.com should bounce you to scaleupsidekicks.com.

Every push to `main` redeploys the previews within a minute or two. Only the `previews/` folder is served. The `_headers` file inside it keeps every preview out of Google.

## Before your first email

Fill in the reply-to email and mailing address in `pipeline/offer.md`. A PO box or a registered mailbox is fine. US law requires one in every sales email, and the Pitch agent won't write an email without it.

## First runs, in order

1. **Kit (once per niche):** "Use the kit agent for niche residential-construction." Open `kits/residential-construction/preview.html` and pick the kits you like. Delete the ones you don't.
2. **First preview:** save 4 to 8 of the business's photos from their Google or Facebook page into `clients/<slug>/raw/`, then:
   `/preview-site <slug> "<Business Name>" residential-construction <google or facebook link>`
3. Follow the stops. You approve the copy, the built site, and the email. Then push, and send the email yourself.
4. Once you're happy with the first site, say: "Copy this site's structure into template/." Every future site now starts from a tested base.

## After every real build

The agents are version 1 and will be wrong in places. After each build, write down what you had to fix by hand, then ask Claude Code to update the matching file in `.claude/agents/`. That loop is how the pipeline gets from "helps" to "runs itself."

## Time targets for you per client

| Step | Your time |
|---|---|
| Drop raw files, run /new-site | 5 min |
| Send gap text, paste answers | 5 min |
| Read copy | 10 min |
| Review site on your phone | 10 min |
| Ship and send launch text | 5 min |
| **Total** | **about 35 min** |

If a real build takes more than an hour of your time, find the step that ate it and fix that agent first.

Going live on a client's own domain uses Cloudflare's command-line tool, Wrangler. The first time, you run `npx wrangler login` yourself and click Allow in the browser. Previews don't need it.

## Changes and monthly checks

- Client texts a change: "Use the care agent for <slug>:" then paste their text.
- First of each month: "Monthly check all." Send every owner the text it drafts. That text is what keeps the $50 coming.

## Monthly upkeep of the pipeline itself

Ask: "Read the current Wikipedia page 'Signs of AI writing' and propose additions to pipeline/rules/ai-tells.md." Approve or reject each one yourself.
