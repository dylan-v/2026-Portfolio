# Portfolio

A Next.js app with **Tailwind CSS** and **shadcn/ui**.

## Setup

```bash
npm install
```

## Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Add more shadcn components

```bash
npx shadcn@latest add [component-name]
```

Example: `npx shadcn@latest add card dialog`

## Build

```bash
npm run build
npm start
```

## Deploy to GitHub Pages

1. **Create a repo** on GitHub (e.g. `2026-Portfolio`).

2. **Push the project** (if you haven’t already):
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git push -u origin main
   ```

3. **Turn on GitHub Pages**  
   Repo → **Settings** → **Pages** → **Build and deployment** → Source: **GitHub Actions**.

4. **Deploy**  
   Each push to `main` (or `master`) runs the workflow and publishes the site to GitHub Pages.

   The site will be at: **https://YOUR_USERNAME.github.io/YOUR_REPO/**

   If you use a **user/org site** (repo name `USERNAME.github.io`), set `BASE_PATH` to empty in `.github/workflows/deploy-gh-pages.yml` (e.g. `BASE_PATH: ""`) so the app is served from the root.
