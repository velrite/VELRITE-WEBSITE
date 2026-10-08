# Architecture

## High-level design

~~~mermaid
flowchart LR
  Dev[Codespace] -->|git push| GH[GitHub: VELRITE-WEBSITE]
  GH -->|Git integration| Build[Cloudflare build: next-on-pages]
  Build --> Pages[Cloudflare Pages project: velrite]
  Visitor --> CF[Cloudflare DNS + CDN] --> Pages
  Reg[Porkbun registrar] -. NS delegation .-> CF
  Visitor -->|contact form POST| FS[Formspree] --> Inbox[Owner inbox]
  Mail[hello@ / contact@ velrite.com] -->|MX fwd1/fwd2.porkbun.com| Inbox
~~~

## Components
| Component | Role | Notes |
|---|---|---|
| GitHub repo | Source of truth | Renamed SAFETY-TRASH to VELRITE-WEBSITE |
| Cloudflare Pages (project velrite) | Hosting, auto-build from Git | Pages project, not the Worker project of the same name |
| Cloudflare DNS | Authoritative DNS for velrite.com | Nameservers ariella / dax .ns.cloudflare.com |
| Porkbun | Registrar and email forwarding | MX records preserved after DNS move |
| Formspree | Contact form backend | Form POST, no custom server |
| Cloudflare Web Analytics beacon | Traffic counting | Present in served HTML |

## Deployment workflow
1. Commit and push to main.
2. Cloudflare Pages Git integration triggers a build.
3. Build command: npx --legacy-peer-deps @cloudflare/next-on-pages@1
4. Output .vercel/output/static is published; custom domains velrite.com and www.velrite.com alias to the deployment.
5. Manual fallback: npx wrangler pages deploy .vercel/output/static --project-name=velrite --commit-dirty=true

Observed on one successful deployment: duration 1m 46s, status success, aliases velrite.com and www.velrite.com.

## Low-level design

Routes (from the build output): / , /about , /blog , /case-studies , /contact , /insights ,
/privacy , /services , /services/platform-engineering , /services/devsecops ,
/services/cloud-infrastructure , /services/systems-engineering , /terms , /sitemap.xml.
robots.txt was added after that build output was captured.

- /insights redirects to /blog.
- Blog is a static listing. MDX is not installed.
- Theme: class toggle on the html element, persisted in localStorage, defaulting to prefers-color-scheme. No theme library.
- Metadata: title, description, Open Graph, Twitter card, metadataBase, canonical in layout.tsx; Organization JSON-LD on the homepage.
- Contact form: native form POST to a Formspree endpoint; fields name, email, company, message.

## Security architecture
- HTTPS and DNS terminated at Cloudflare.
- No secrets in the repository by design; the only third-party identifier in code is the public Formspree form ID.
- No authentication, database, or user data store exists on the site.
- Not implemented: rate limiting or spam protection on the contact form, security headers, CSP.
- Not audited: 8 npm audit findings (4 moderate, 4 high) were reported at install time and not triaged.

## Cost
| Item | Cost | Source |
|---|---|---|
| Domain | about 11.08 USD per year renewal estimate | Porkbun domain page |
| Cloudflare plan | Free | Dashboard |
| Cloudflare Pages / Workers builds | 9 of 3,000 build minutes used (1-23 July) | Workers and Pages dashboard |
| Formspree | Free tier; limits depend on plan, verify before relying on volume | Formspree |

## Capacity
Static prerendered pages served from Cloudflare's network; no application server to size.
Load testing was not performed. See 05-verification-status.md.

## Disaster recovery
Source is in GitHub; a full rebuild needs only the repo plus the Cloudflare project settings
(build command, output directory, nodejs_compat flag, domains). Restore was never rehearsed.
Status: NOT VERIFIED.
