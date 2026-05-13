This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to load [Geist](https://fonts.google.com/specimen/Geist) and local display fonts.

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Learn Next.js](https://nextjs.org/learn)

## Deploy on Cloudflare

Deploy with [Cloudflare Pages](https://pages.cloudflare.com/) (for example via the OpenNext Cloudflare adapter or your chosen Next-on-Workers setup). Set **`NEXT_PUBLIC_SITE_URL`** to your production origin (for example `https://olivebishop.com`) so metadata and the image loader resolve correctly.

**Contact form (`/api/enquire`):** add Worker secret **`RESEND_API_KEY`**. Owner notifications go to **`olivehendrilgen1@gmail.com`** by default (change via **`ADMIN_NOTIFY_EMAIL`** or **`NOTIFICATION_EMAIL`** in Worker env). If you point those at the same mailbox as `from`, a plus-address is used so mail still shows as new.

**Images:** plain `/images/...` URLs are used by default (reliable on Workers). After you enable [Image Resizing](https://developers.cloudflare.com/images/transform-images/) on the zone, set **`NEXT_PUBLIC_CF_IMAGES=1`** so the custom loader emits **`/cdn-cgi/image/...`** URLs.

**Workers / Pages deploy:** use `pnpm run deploy`, or build with `pnpm run build && pnpm exec opennextjs-cloudflare build` then deploy with Wrangler. In `wrangler.jsonc`, keep **`name`** and **`services[].service`** (for `WORKER_SELF_REFERENCE`) identical — if you rename the worker, update both or the API returns error 10143.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for general options.
