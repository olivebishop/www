'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HugeiconsArrowUpRight } from './icons';
import Link from 'next/link';
import ProjectDrawer from './project-drawer';

type BookmarkGroup = 'fonts' | 'ui' | 'other';

interface Bookmark {
  id: number;
  title: string;
  description: string;
  url: string;
  category: string;
  /** Short label for the “what it’s for” column */
  focus: string;
  group: BookmarkGroup;
}

const GROUP_ORDER: { id: BookmarkGroup; label: string; hint: string }[] = [
  { id: 'fonts', label: 'Fonts & typography', hint: 'Typefaces and type scales' },
  { id: 'ui', label: 'UI inspiration', hint: 'Galleries, patterns, and references' },
  { id: 'other', label: 'Tools & references', hint: 'Dev tooling, docs, and utilities' },
];

const bookmarks: Bookmark[] = [
  {
    id: 8,
    title: 'Fontshare',
    description: 'Free fonts for designers and developers.',
    url: 'https://fontshare.com/',
    category: 'Design',
    focus: 'Fonts',
    group: 'fonts',
  },
  {
    id: 15,
    title: 'UNCUT.wtf',
    description: 'Contemporary free fonts for commercial use.',
    url: 'https://uncut.wtf/',
    category: 'Design',
    focus: 'Fonts',
    group: 'fonts',
  },
  {
    id: 14,
    title: 'Typescale',
    description: 'Build harmonious type scales for design systems.',
    url: 'https://typescale.net/',
    category: 'Design',
    focus: 'Typography',
    group: 'fonts',
  },
  {
    id: 1,
    title: 'Goodcart',
    description: 'Ecommerce UI patterns and product-page inspiration.',
    url: 'https://www.goodcart.design/',
    category: 'Inspiration',
    focus: 'Ecommerce UI',
    group: 'ui',
  },
  {
    id: 2,
    title: 'Landbook',
    description: 'Hand-picked website design gallery for landing pages, portfolios, and more.',
    url: 'https://land-book.com/',
    category: 'Inspiration',
    focus: 'Web galleries',
    group: 'ui',
  },
  {
    id: 3,
    title: 'CallToInspiration',
    description: 'Small UI and UX details for designers and developers.',
    url: 'https://calltoinspiration.com/',
    category: 'Inspiration',
    focus: 'App & UX detail',
    group: 'ui',
  },
  {
    id: 4,
    title: 'Paywall Screens',
    description: 'Real paywall screens and flows from mobile apps.',
    url: 'https://www.paywallscreens.com/',
    category: 'Inspiration',
    focus: 'Mobile paywalls',
    group: 'ui',
  },
  {
    id: 5,
    title: 'Mobbin',
    description: 'UI and UX patterns for mobile and web apps.',
    url: 'https://mobbin.com/discover',
    category: 'Inspiration',
    focus: 'Mobile & web apps',
    group: 'ui',
  },
  {
    id: 6,
    title: 'Design inspiration (link)',
    description: 'Curated inspiration — short link from the same list as Mobbin.',
    url: 'https://t.co/Ztubru6VGQ',
    category: 'Inspiration',
    focus: 'Curated',
    group: 'ui',
  },
  {
    id: 7,
    title: 'Wes Bos — inspiration thread',
    description: 'More design and dev inspiration links from the community.',
    url: 'https://x.com/wesbos/status/2032185388970782995?s=20',
    category: 'Inspiration',
    focus: 'Community links',
    group: 'ui',
  },
  {
    id: 17,
    title: 'Site of Sites',
    description: 'Curated web design inspiration — submit sites and browse by industry, style, and platform.',
    url: 'https://www.siteofsites.co/',
    category: 'Inspiration',
    focus: 'Web design',
    group: 'ui',
  },
  {
    id: 18,
    title: 'The FWA',
    description: 'Favourite Website Awards — cutting-edge interactive and creative web projects.',
    url: 'https://thefwa.com/',
    category: 'Inspiration',
    focus: 'Web design',
    group: 'ui',
  },
  {
    id: 19,
    title: 'Maxi Best Of',
    description: 'Curated picks of standout websites and digital design.',
    url: 'https://maxibestof.one/',
    category: 'Inspiration',
    focus: 'Web design',
    group: 'ui',
  },
  {
    id: 20,
    title: 'One Page Love — OG Gallery',
    description: 'Hundreds of real Open Graph images for social share and meta preview inspiration.',
    url: 'https://onepagelove.com/og',
    category: 'Inspiration',
    focus: 'Open Graph',
    group: 'ui',
  },
  {
    id: 21,
    title: '404s',
    description: 'Gallery of creative 404 and error page designs, filterable by style and industry.',
    url: 'https://www.404s.design/',
    category: 'Inspiration',
    focus: '404 pages',
    group: 'ui',
  },
  {
    id: 22,
    title: 'Navbar Gallery',
    description: 'Navigation bar examples — static, dropdown, mega menu, sidebar, and more.',
    url: 'https://www.navbar.gallery/',
    category: 'Inspiration',
    focus: 'Navbars',
    group: 'ui',
  },
  {
    id: 23,
    title: 'Footer.design',
    description: 'Curated footer gallery — typographic, grid, animated, and editorial layouts.',
    url: 'https://www.footer.design/',
    category: 'Inspiration',
    focus: 'Footers',
    group: 'ui',
  },
  {
    id: 24,
    title: 'CTA.gallery',
    description: 'Call-to-action patterns — buttons, forms, modals, pricing, and newsletter CTAs.',
    url: 'https://www.cta.gallery/',
    category: 'Inspiration',
    focus: 'CTAs',
    group: 'ui',
  },
  {
    id: 25,
    title: 'Unsection',
    description: '3,000+ website sections — hero, pricing, FAQ, testimonials, and hover effects.',
    url: 'https://www.unsection.com/',
    category: 'Inspiration',
    focus: 'Page sections',
    group: 'ui',
  },
  {
    id: 26,
    title: 'Supahero',
    description: 'Curated hero section library for landing pages and marketing sites.',
    url: 'https://supahero.io/',
    category: 'Inspiration',
    focus: 'Hero sections',
    group: 'ui',
  },
  {
    id: 27,
    title: '60fps',
    description: 'UI and UX animation shots from top mobile and web apps.',
    url: 'https://60fps.design/',
    category: 'Inspiration',
    focus: 'Micro-animation',
    group: 'ui',
  },
  {
    id: 28,
    title: 'Bento Grids',
    description: 'Bento grid layout inspiration for dashboards and landing pages.',
    url: 'https://bentogrids.com/',
    category: 'Inspiration',
    focus: 'Bento layouts',
    group: 'ui',
  },
  {
    id: 29,
    title: 'Design Spells',
    description: 'Small design details that feel magical — motion, easter eggs, and delightful UI.',
    url: 'https://designspells.com/',
    category: 'Inspiration',
    focus: 'Micro-animation',
    group: 'ui',
  },
  {
    id: 30,
    title: 'Gridddy',
    description: 'Footer and grid layout references from Framer-built sites.',
    url: 'https://gridddy.framer.website/',
    category: 'Inspiration',
    focus: 'Footers',
    group: 'ui',
  },
  {
    id: 31,
    title: 'Rebrand Gallery',
    description: 'Rebrands and visual identity launches — logos, systems, and reveal videos.',
    url: 'https://www.rebrand.gallery/',
    category: 'Inspiration',
    focus: 'Rebrands',
    group: 'ui',
  },
  {
    id: 32,
    title: 'SaaSPO',
    description: 'SaaS landing page and product marketing design inspiration.',
    url: 'https://saaspo.com/',
    category: 'Inspiration',
    focus: 'SaaS',
    group: 'ui',
  },
  {
    id: 33,
    title: 'Landing Love',
    description: 'Showcase of animated marketing sites with full-page video recordings.',
    url: 'https://www.landing.love/',
    category: 'Inspiration',
    focus: 'Landing pages',
    group: 'ui',
  },
  {
    id: 34,
    title: 'Gormankind — designer picks',
    description: 'Curated designer and portfolio links from the community.',
    url: 'https://x.com/gormankind/status/2056489575099568504?s=20',
    category: 'Inspiration',
    focus: 'X / designers',
    group: 'ui',
  },
  {
    id: 35,
    title: 'Gormankind — more designer picks',
    description: 'Follow-up thread with more designer and portfolio recommendations.',
    url: 'https://x.com/gormankind/status/2056879118076289311?s=20',
    category: 'Inspiration',
    focus: 'X / designers',
    group: 'ui',
  },
  {
    id: 39,
    title: 'mymind',
    description: 'Private place to dump images, links, and notes — auto-organizes into a personal moodboard.',
    url: 'https://access.mymind.com/',
    category: 'Inspiration',
    focus: 'Moodboards',
    group: 'ui',
  },
  {
    id: 40,
    title: 'benja — design inspiration thread',
    description: 'Community recs for saving design inspiration into moodboards and folders — mymind, Are.na, Eagle, Moody.',
    url: 'https://x.com/benjaminakar/status/2103165881027064147?s=20',
    category: 'Inspiration',
    focus: 'X / moodboards',
    group: 'ui',
  },
  {
    id: 41,
    title: 'Page mascot skill',
    description: 'Interactive page mascot that follows the cursor and reacts when you poke it.',
    url: 'https://x.com/nilbuild/status/2099450737684029539?s=20',
    category: 'Inspiration',
    focus: 'Mascots',
    group: 'ui',
  },
  {
    id: 37,
    title: 'Design Engineer Tools',
    description: 'Curated tools for web-focused design engineers — inspiration, AI code, components, utilities, capture, and more.',
    url: 'https://designengineer.tools/',
    category: 'Resources',
    focus: 'Tool index',
    group: 'other',
  },
  {
    id: 38,
    title: 'Creattie',
    description: 'Animated illustrations and icons — a Lottie-style alternative for lightweight web and app motion.',
    url: 'https://creattie.com/',
    category: 'Tools',
    focus: 'Animation',
    group: 'other',
  },
  {
    id: 9,
    title: 'Shoogle',
    description: 'Shadcn-style components for Google’s design language.',
    url: 'https://shoogle.dev/',
    category: 'Development',
    focus: 'UI components',
    group: 'other',
  },
  {
    id: 13,
    title: 'Cheat Sheets',
    description: 'Quick-reference cheat sheets for developers.',
    url: 'https://cheatsheets.zip/',
    category: 'Resources',
    focus: 'Reference',
    group: 'other',
  },
  {
    id: 16,
    title: 'Vercel AI SDK',
    description: 'TypeScript toolkit for building AI features in Next.js and beyond.',
    url: 'https://ai-sdk.dev/',
    category: 'Development',
    focus: 'AI',
    group: 'other',
  },
];

const bookmarkSections = GROUP_ORDER.map((g) => ({
  ...g,
  items: bookmarks.filter((b) => b.group === g.id),
}));

function BookmarkRowLink({ bookmark }: { bookmark: Bookmark }) {
  return (
    <a
      href={bookmark.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${bookmark.title} — ${bookmark.focus}`}
      className="group grid grid-cols-1 gap-2 items-start px-4 py-3.5 outline-none transition-colors hover:bg-muted/25 focus-visible:bg-muted/25 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-foreground/25 sm:grid-cols-[minmax(0,1.1fr)_minmax(0,0.75fr)_minmax(0,1.35fr)_auto] sm:gap-x-3 md:gap-x-4"
    >
      <div className="min-w-0">
        <span className="font-medium text-foreground group-hover:text-foreground transition-colors tracking-[-0.01em] break-words">
          {bookmark.title}
        </span>
        <span className="mt-1 block text-[11px] uppercase tracking-[0.08em] text-foreground/35">{bookmark.category}</span>
      </div>
      <span className="text-sm text-foreground/55 break-words sm:pt-0.5 sm:whitespace-nowrap">{bookmark.focus}</span>
      <span className="text-sm text-foreground/45 leading-relaxed min-w-0 break-words">{bookmark.description}</span>
      <span className="flex justify-end pt-0.5 sm:pt-1" aria-hidden>
        <HugeiconsArrowUpRight className="w-4 h-4 shrink-0 text-foreground/30 group-hover:text-foreground transition-colors" />
      </span>
    </a>
  );
}

export function Bookmarks() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <section className="pt-28 sm:pt-32 md:pt-36 pb-10 sm:pb-14 px-5 sm:px-8 md:px-16">
        <div className="max-w-6xl mx-auto">
          <motion.p
            className="section-label mb-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            Bookmarks
          </motion.p>
          <motion.h1
            className="page-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            Resources i use
          </motion.h1>
          <motion.p
            className="mt-6 sm:mt-8 body-base text-foreground/50 max-w-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            One table, grouped into fonts, UI inspiration, and tools — scan categories top to bottom.
          </motion.p>
        </div>
      </section>

      <section className="pb-20 sm:pb-28 px-5 sm:px-8 md:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="rounded-xl border border-border/30 bg-muted/5 overflow-hidden">
            <table className="w-full table-fixed text-left border-collapse">
              <caption className="sr-only">
                Bookmark resources: Resource, Focus, Notes, and link to open.
              </caption>
              <thead className="hidden sm:table-header-group">
                <tr className="border-b border-border/30 bg-muted/15 text-[11px] uppercase tracking-[0.12em] text-foreground/45">
                  <th scope="col" className="px-4 py-3 font-medium text-left min-w-0 w-[26%]">
                    Resource
                  </th>
                  <th scope="col" className="px-4 py-3 font-medium text-left min-w-0 w-[18%]">
                    Focus
                  </th>
                  <th scope="col" className="px-4 py-3 font-medium text-left min-w-0">
                    Notes
                  </th>
                  <th scope="col" className="px-4 py-3 w-10">
                    <span className="sr-only">Open link</span>
                  </th>
                </tr>
              </thead>
                <tbody>
                  {(() => {
                    let rowIndex = 0;
                    return bookmarkSections.flatMap((section, si) => [
                      <tr
                        key={`section-${section.id}`}
                        className={`bg-muted/25 border-t border-border/35 ${si === 0 ? 'border-t-0' : ''}`}
                      >
                        <th colSpan={4} scope="colgroup" className="px-4 py-3 text-left align-top">
                          <span className="text-xs font-medium uppercase tracking-[0.12em] text-foreground/55">
                            {section.label}
                          </span>
                          <span className="mt-1 block text-[0.8125rem] font-normal normal-case tracking-normal text-foreground/40">
                            {section.hint}
                          </span>
                        </th>
                      </tr>,
                      ...section.items.map((bookmark) => {
                        const i = rowIndex++;
                        return (
                          <motion.tr
                            key={bookmark.id}
                            className="border-b border-border/20 last:border-b-0"
                            initial={{ opacity: 0, y: 8 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-40px' }}
                            transition={{
                              duration: 0.35,
                              delay: Math.min(i * 0.03, 0.45),
                              ease: [0.16, 1, 0.3, 1],
                            }}
                          >
                            <td colSpan={4} className="p-0">
                              <BookmarkRowLink bookmark={bookmark} />
                            </td>
                          </motion.tr>
                        );
                      }),
                    ]);
                  })()}
                </tbody>
              </table>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 px-5 sm:px-8 md:px-16 bg-background">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.h2
            className="section-title mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            Like what you see?
          </motion.h2>
          <motion.p
            className="body-lg text-foreground/50 mb-10 max-w-lg mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            I use these same tools and principles to build fast, beautiful products for my clients. Let&apos;s build
            yours.
          </motion.p>
          <motion.div
            className="cta-row"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.button
              type="button"
              onClick={() => setDrawerOpen(true)}
              className="cta-primary"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Start a Project
              <HugeiconsArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </motion.button>
            <Link href="/work" className="cta-secondary">
              View My Work
              <HugeiconsArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </Link>
          </motion.div>
        </motion.div>
      </section>

      <AnimatePresence>
        <ProjectDrawer isOpen={drawerOpen} onClose={() => setDrawerOpen(false)} />
      </AnimatePresence>
    </div>
  );
}
