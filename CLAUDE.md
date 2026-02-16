# CLAUDE.md — SharpEntity Static Site

## Project Overview
Static website for **SharpEntity LLC** (sharpentity.com), hosted on **GitHub Pages**.
No build step or static site generator — plain HTML, CSS, and JS served directly from `/docs`.

## Key Paths
- `docs/` — GitHub Pages publish root (all deployable files live here)
- `docs/assets/css/styles.css` — shared stylesheet
- `docs/assets/js/main.js` — navigation & contact-form behavior
- `docs/assets/images/` — logos, backgrounds, images
- `AGENT_INSTRUCTIONS.md` — design & implementation guidelines (read before making changes)

## Pages
| File | Purpose |
|------|---------|
| `docs/index.html` | Homepage |
| `docs/generative-ai-solutions.html` | Service: Generative AI |
| `docs/cloud-migration-and-modernization.html` | Service: Cloud Migration |
| `docs/architecture--design.html` | Service: Architecture & Design |
| `docs/strategic-consulting.html` | Service: Strategic Consulting |
| `docs/core-values.html` | About: Core Values |
| `docs/contact.html` | Contact form (mailto-based) |

## Conventions
- **No build system.** Edit HTML/CSS/JS directly in `docs/`.
- **No frameworks.** Custom lightweight CSS; vanilla JS only.
- **Mobile-first, responsive.** All changes must work on mobile, tablet, and desktop.
- **Accessible.** Follow WCAG 2.1 AA — semantic HTML, keyboard navigation, skip links.
- **SEO.** Every page needs `<title>`, `<meta description>`, and Open Graph tags.
- **Images.** Provide WebP with JPG fallback; lazy-load non-critical images.
- `.nojekyll` in `docs/` disables Jekyll processing on GitHub Pages.

## Local Preview
```bash
python3 -m http.server 8080 --directory docs
```

## Deployment
Push to `main` branch. GitHub Pages deploys from `main` branch `/docs` folder automatically.

## Common Tasks
- **Add a new page:** Create HTML in `docs/`, add nav link in all page headers, update `docs/sitemap.xml`.
- **Update content:** Edit the relevant HTML file in `docs/` directly.
- **Update styles:** Edit `docs/assets/css/styles.css`.
- **Add images:** Place optimized WebP + JPG in `docs/assets/images/`.
- **Future migration to Hugo:** Source files would move out of `docs/`; Hugo would build into `docs/`. No action needed until decided.
