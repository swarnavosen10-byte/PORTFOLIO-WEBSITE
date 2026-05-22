# Swarnavo Sen Portfolio

An interactive, single-page portfolio with a cinematic 3D command-station hero, project filters, GitHub orbit, animated case-study cards, responsive sections, theme switching, and editable content.

The project section is based on the showcase repositories from `https://github.com/swarnavosen10-byte`. The deployment repository for this site is intentionally excluded from the portfolio gallery.

## Open It

Open `index.html` in a browser. No build step is required.

The hero uses Three.js from `unpkg.com`. If that network import is blocked, the site automatically falls back to an animated canvas visual.

## Customize

Edit the `portfolio` object at the top of `main.js`:

- `name`, `role`, `email`, `location`, and `status`
- `highlights`
- `projects`
- `range`
- `process`

## Deploy & Preview

Preview locally using a simple static server (Python):

```bash
python -m http.server 8000
# then open http://localhost:8000
```

Deploy options:

- GitHub Pages: push the repository to GitHub and enable Pages from the `main` branch (or `gh-pages`).
- Vercel: import the repo at vercel.com and deploy; Vercel serves static sites automatically.

If you want, I can prepare a `package.json` with a `start` script, or create a `deploy` branch and publish to GitHub Pages for you.

## Push to GitHub & Auto-deploy

1. Create a new repository on GitHub (for example `swarnavo-portfolio`).
2. Push your local project to GitHub:

```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo>.git
git push -u origin main
```

3. The repository includes a GitHub Actions workflow to publish the site to the `gh-pages` branch whenever you push to `main`.

Notes:
- Make sure GitHub Actions is enabled for your account/repo. The workflow uses the built-in `GITHUB_TOKEN` to publish.
- If you prefer Vercel or Netlify, import the repo there and they will deploy automatically.

Keep real project outcomes specific: launch metrics, users served, revenue influenced, speed improvements, uptime, or before and after workflow time.
