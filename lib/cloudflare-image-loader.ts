import { siteUrl } from "./seo";

/** Matches `next/image` custom loader args (keeps this file free of `next/image` imports). */
type LoaderParams = { src: string; width: number; quality?: number };

function stripTrailingSlash(url: string): string {
  return url.replace(/\/$/, "");
}

/**
 * Production: Cloudflare Image Resizing via `/cdn-cgi/image/...` so assets are
 * optimized at the edge and cached on Cloudflare’s CDN.
 * @see https://developers.cloudflare.com/images/transform-images/transform-url/
 *
 * Local paths use **same-origin relative** `/cdn-cgi/image/...` URLs so the browser
 * always hits the live hostname (avoids wrong absolute origin from build-time env).
 *
 * Set `NEXT_PUBLIC_CF_IMAGES=0` to skip resizing (plain `src` URLs).
 */
export default function cloudflareImageLoader({
  src,
  width,
  quality,
}: LoaderParams): string {
  const q = Math.min(100, Math.max(1, quality ?? 75));
  const options = `width=${width},format=auto,quality=${q}`;

  const site = stripTrailingSlash(siteUrl);
  const isProd = process.env.NODE_ENV === "production";
  const disabled = process.env.NEXT_PUBLIC_CF_IMAGES === "0";

  if (!isProd || disabled) {
    return src;
  }

  /** Same-origin `/cdn-cgi/image/...` (preferred for local assets on Workers). */
  function cdnCgiLocal(path: string): string {
    const p = path.startsWith("/") ? path : `/${path}`;
    return `/cdn-cgi/image/${options}${p}`;
  }

  if (src.startsWith("http://") || src.startsWith("https://")) {
    try {
      const parsed = new URL(src);
      const originSite = new URL(site);
      if (parsed.origin === originSite.origin) {
        const path = `${parsed.pathname}${parsed.search}`;
        return cdnCgiLocal(path);
      }
      return `${site}/cdn-cgi/image/${options}/${src}`;
    } catch {
      return src;
    }
  }

  const path = src.startsWith("/") ? src : `/${src}`;
  return cdnCgiLocal(path);
}
