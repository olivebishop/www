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
 * Set `NEXT_PUBLIC_CF_IMAGES=0` to skip resizing (plain `src` URLs).
 * `NEXT_PUBLIC_SITE_URL` must match your deployed origin (e.g. https://olivebishop.com).
 */
export default function cloudflareImageLoader({
  src,
  width,
  quality,
}: LoaderParams): string {
  const q = Math.min(100, Math.max(1, quality ?? 75));
  const options = `width=${width},format=auto,quality=${q}`;

  const site = stripTrailingSlash(process.env.NEXT_PUBLIC_SITE_URL || "");
  const isProd = process.env.NODE_ENV === "production";
  const disabled = process.env.NEXT_PUBLIC_CF_IMAGES === "0";

  if (!isProd || disabled || !site) {
    if (src.startsWith("/")) return src;
    return src;
  }

  if (src.startsWith("http://") || src.startsWith("https://")) {
    try {
      const parsed = new URL(src);
      const originSite = new URL(site);
      if (parsed.origin === originSite.origin) {
        const path = `${parsed.pathname}${parsed.search}`;
        return `${site}/cdn-cgi/image/${options}${path}`;
      }
      return `${site}/cdn-cgi/image/${options}/${src}`;
    } catch {
      return src;
    }
  }

  const path = src.startsWith("/") ? src : `/${src}`;
  return `${site}/cdn-cgi/image/${options}${path}`;
}
