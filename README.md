# SharpEntity Static Site (GitHub Pages)

This repository contains a modern static rebuild of `http://www.sharpentity.com` for GitHub Pages.

## Structure

- `docs/` : publishable site root for GitHub Pages
- `docs/assets/css/styles.css` : shared styling
- `docs/assets/js/main.js` : navigation and contact-form behavior
- `docs/assets/images/` : local logo/background/image assets

## Local Preview

Run from repository root:

```bash
python3 -m http.server 8080 --directory docs
```

Then open:

- `http://localhost:8080`

## GitHub Pages Deployment

1. Push this repository to GitHub.
2. In GitHub: `Settings` -> `Pages`.
3. Under **Build and deployment**, choose:
   - **Source**: `Deploy from a branch`
   - **Branch**: your default branch (for example `main`)
   - **Folder**: `/docs`
4. Save and wait for the Pages deployment to complete.

## Optional Custom Domain

If you are using a custom domain:

1. Add a `docs/CNAME` file containing your domain name (for example `www.example.com`).
2. Configure DNS records for GitHub Pages.
3. In GitHub Pages settings, verify the custom domain and enable HTTPS.

## Notes

- `.nojekyll` is included at `docs/.nojekyll`.
- The original SharpEntity logo is preserved unmodified.
- Contact form submission uses `mailto:info@SharpEntity.com` on static hosting.
