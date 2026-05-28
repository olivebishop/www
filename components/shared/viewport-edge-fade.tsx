'use client';

import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

/**
 * Viewport edge vignette: scrolling copy, images, and sections blur/fade
 * through a tall translucent strip (content stays visible, not painted over).
 */
const EDGE_HEIGHT = 'clamp(5rem, 20vh, 10rem)';
const EDGE_MASK =
  'linear-gradient(to top, black 0%, black 22%, rgba(0,0,0,0.75) 48%, rgba(0,0,0,0.35) 68%, transparent 100%)';
const EDGE_TINT =
  'linear-gradient(to top, color-mix(in oklch, var(--background) 78%, transparent) 0%, color-mix(in oklch, var(--background) 48%, transparent) 32%, color-mix(in oklch, var(--background) 22%, transparent) 58%, transparent 100%)';
const EDGE_FROST =
  'linear-gradient(to top, rgba(255,255,255,0.14) 0%, rgba(255,255,255,0.06) 35%, rgba(255,255,255,0.02) 55%, transparent 100%)';

const TOP_EDGE_HEIGHT = 'clamp(4rem, 14vh, 7rem)';
const TOP_EDGE_MASK =
  'linear-gradient(to bottom, black 0%, black 28%, rgba(0,0,0,0.5) 55%, transparent 100%)';
const TOP_EDGE_TINT =
  'linear-gradient(to bottom, color-mix(in oklch, var(--background) 72%, transparent) 0%, color-mix(in oklch, var(--background) 38%, transparent) 45%, transparent 100%)';
const TOP_EDGE_FROST =
  'linear-gradient(to bottom, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.03) 45%, transparent 100%)';

const backdrop = {
  backdropFilter: 'blur(20px) saturate(1.15)',
  WebkitBackdropFilter: 'blur(20px) saturate(1.15)',
} as const;

export default function ViewportEdgeFade() {
  const [footerInView, setFooterInView] = useState(false);
  const [homeBrandsClear, setHomeBrandsClear] = useState(false);

  useEffect(() => {
    const footer = document.querySelector('footer');
    if (!footer) return;

    const footerObserver = new IntersectionObserver(
      ([entry]) => setFooterInView(entry.isIntersecting),
      { threshold: 0, rootMargin: '0px 0px -1px 0px' }
    );
    footerObserver.observe(footer);

    const brands = document.getElementById('home-brands');

    const updateHomeBrands = () => {
      if (!brands) {
        setHomeBrandsClear(false);
        return;
      }

      const rect = brands.getBoundingClientRect();
      const vh = window.innerHeight;
      const scrollY = window.scrollY;

      const onHeroFold =
        scrollY < 120 &&
        rect.top > vh * 0.35 &&
        rect.bottom <= vh;

      setHomeBrandsClear(onHeroFold);
    };

    updateHomeBrands();
    window.addEventListener('scroll', updateHomeBrands, { passive: true });
    window.addEventListener('resize', updateHomeBrands);

    return () => {
      footerObserver.disconnect();
      window.removeEventListener('scroll', updateHomeBrands);
      window.removeEventListener('resize', updateHomeBrands);
    };
  }, []);

  const bottomHidden = footerInView || homeBrandsClear;

  return (
    <>
      {/* Bottom — frosted glass: layout/content blurs through as it scrolls */}
      <div
        aria-hidden
        className={cn(
          'pointer-events-none fixed inset-x-0 bottom-0 z-[45] transform-gpu transition-opacity duration-300 motion-reduce:transition-none',
          bottomHidden && 'opacity-0'
        )}
        style={{
          height: EDGE_HEIGHT,
          ...backdrop,
          background: EDGE_TINT,
          WebkitMaskImage: EDGE_MASK,
          maskImage: EDGE_MASK,
        }}
      />
      <div
        aria-hidden
        className={cn(
          'pointer-events-none fixed inset-x-0 bottom-0 z-[46] mix-blend-soft-light transform-gpu transition-opacity duration-300 motion-reduce:transition-none',
          bottomHidden && 'opacity-0'
        )}
        style={{
          height: EDGE_HEIGHT,
          background: EDGE_FROST,
          WebkitMaskImage: EDGE_MASK,
          maskImage: EDGE_MASK,
        }}
      />

      {/* Top — same treatment under nav */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-x-0 top-0 z-[45] transform-gpu"
        style={{
          height: TOP_EDGE_HEIGHT,
          ...backdrop,
          background: TOP_EDGE_TINT,
          WebkitMaskImage: TOP_EDGE_MASK,
          maskImage: TOP_EDGE_MASK,
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none fixed inset-x-0 top-0 z-[46] mix-blend-soft-light transform-gpu"
        style={{
          height: TOP_EDGE_HEIGHT,
          background: TOP_EDGE_FROST,
          WebkitMaskImage: TOP_EDGE_MASK,
          maskImage: TOP_EDGE_MASK,
        }}
      />
    </>
  );
}
