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

Images use Cloudflare’s **`/cdn-cgi/image/`** transforms in production when Image Resizing / Transformations are enabled on your zone. Set **`NEXT_PUBLIC_CF_IMAGES=0`** if you need plain static URLs without resizing.

**Workers / Pages deploy:** use `pnpm run deploy`, or build with `pnpm run build && pnpm exec opennextjs-cloudflare build` then deploy with Wrangler. In `wrangler.jsonc`, keep **`name`** and **`services[].service`** (for `WORKER_SELF_REFERENCE`) identical — if you rename the worker, update both or the API returns error 10143.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for general options.
