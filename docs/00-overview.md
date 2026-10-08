# Overview

## Executive summary
velrite.com is the public site of Velrite, a platform engineering and DevSecOps consultancy.
It is a statically prerendered Next.js application served from Cloudflare Pages, with DNS
on Cloudflare and the domain registered at Porkbun. Source lives in GitHub (VELRITE-WEBSITE).

## Business problem
A solo consultancy targeting CTOs, enterprise teams and fintech needs a credible public
presence with no infrastructure budget. A buyer evaluating an unknown vendor checks for:
a real domain, working contact path, legal pages, discoverability, and technical credibility.

## Requirements (from the owner brief)
- Zero hosting spend beyond the domain; free tiers only.
- Custom domain velrite.com with HTTPS.
- Pages: Home, About, Services (+4 subpages), Case Studies, Blog, Insights, Contact, Privacy, Terms, 404.
- SEO: metadata, Open Graph, Twitter cards, structured data, sitemap, robots, canonical URLs.
- Light and dark mode, accessible, fast.
- Contact form that delivers to a real inbox.
- Separate from velrite.github.io (personal engineering portfolio, not merged).
- No fabricated client names or results.

## Out of scope for this documentation
Velrite Control (monitoring), payments, content engine, Velrite Fabric: see 06-roadmap.md.

## Environment facts (observed)
- Next.js 16.2.11 (Turbopack), TypeScript, Tailwind CSS v4 (CSS-based config), shadcn/ui, lucide-react.
- Adapter: @cloudflare/next-on-pages 1.13.16 (npm reports it deprecated in favour of the OpenNext adapter).
- wrangler 4.113.0. Cloudflare build environment: Node 22.16.0, npm 10.9.2.
- Dev environment: GitHub Codespaces. The original Codespace was deleted; this one was recreated from the repo.
- Domain created 2026-07-18, expires 2027-07-18 (Porkbun); renewal estimate shown as 11.08 USD.
