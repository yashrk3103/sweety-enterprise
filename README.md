# Sweety Enterprise Website

Professional multi-page website for **Sweety Enterprise**, an event management company based in Surat, Gujarat.

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Static export (`output: "export"`) for GitHub Pages hosting

## Local Development

```bash
npm install
npm run dev
```

## Build for Static Hosting

```bash
npm run build
```

The static site is generated in the `/out` folder.

## GitHub Pages Deployment

A workflow is included at:

- `.github/workflows/deploy.yml`

It builds the site and deploys `out/` to GitHub Pages on every push to `main`.

## Configure Custom Domain (`sweetyenterprise.page`)

1. In GitHub, open **Repository Settings → Pages**.
2. Set Source to **GitHub Actions**.
3. Confirm custom domain is set to `sweetyenterprise.page` (the repo includes `public/CNAME`).
4. In your domain DNS provider, configure:
   - `A` records for `@` pointing to GitHub Pages IPs:
     - `185.199.108.153`
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`
   - `CNAME` record for `www` → `<your-github-username>.github.io`
5. Enable **Enforce HTTPS** once DNS is fully propagated.
