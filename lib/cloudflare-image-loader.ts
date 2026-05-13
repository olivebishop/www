import { siteUrl } from "./seo";

/** Matches `next/image` custom loader args (keeps this file free of `next/image` imports). */
type LoaderParams = { src: string; width: number; quality?: number };

function stripTrailingSlash(url: string): string {
  return url.replace(/\/$/, "");
}

/**
 * Production: optional Cloudflare Image Resizing via `/cdn-cgi/image/...`.
 * @see https://developers.cloudflare.com/images/transform-images/transform-url/
 *
 * **Default:** plain `src` URLs (reliable on Workers + OpenNext). Many zones need
 * Image Resizing enabled separately; `/cdn-cgi/` via the Worker often breaks images.
 *
 * Set **`NEXT_PUBLIC_CF_IMAGES=1`** when Image Resizing is enabled on the zone and
 * you want transformed URLs. Set **`NEXT_PUBLIC_CF_IMAGES=0`** to force plain URLs.
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
  const cf = process.env.NEXT_PUBLIC_CF_IMAGES?.trim();
  const useTransforms = isProd && cf === "1";

  if (!useTransforms) {
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
