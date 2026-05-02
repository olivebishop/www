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
    id: 9,
    title: 'Shoogle',
    description: 'Shadcn-style components for Google’s design language.',
    url: 'https://shoogle.dev/',
    category: 'Development',
    focus: 'UI components',
    group: 'other',
  },
  {
    id: 10,
    title: 'Screen',
    description: 'Lightweight screen recorder for quick demos.',
    url: 'https://screen.now/',
    category: 'Tools',
    focus: 'Recording',
    group: 'other',
  },
  {
    id: 11,
    title: 'Web Dev Resources',
    description: 'Web development resources with a useful free tier.',
    url: 'https://web-dev-resources.com/',
    category: 'Resources',
    focus: 'Index',
    group: 'other',
  },
  {
    id: 12,
    title: 'Squoosh',
    description: 'Image compression in the browser.',
    url: 'https://squoosh.app/',
    category: 'Tools',
    focus: 'Images',
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
      className="group grid grid-cols-1 gap-2 items-start px-4 py-3.5 outline-none transition-colors hover:bg-muted/25 focus-visible:bg-muted/25 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary/35 sm:grid-cols-[minmax(0,1.1fr)_minmax(0,0.75fr)_minmax(0,1.35fr)_auto] sm:gap-x-3 md:gap-x-4"
    >
      <div className="min-w-0">
        <span className="font-medium text-foreground group-hover:text-primary transition-colors tracking-[-0.01em] break-words">
          {bookmark.title}
        </span>
        <span className="mt-1 block text-[11px] uppercase tracking-[0.08em] text-foreground/35">{bookmark.category}</span>
      </div>
      <span className="text-sm text-foreground/55 break-words sm:pt-0.5 sm:whitespace-nowrap">{bookmark.focus}</span>
      <span className="text-sm text-foreground/45 leading-relaxed min-w-0 break-words">{bookmark.description}</span>
      <span className="flex justify-end pt-0.5 sm:pt-1" aria-hidden>
        <HugeiconsArrowUpRight className="w-4 h-4 shrink-0 text-foreground/30 group-hover:text-primary transition-colors" />
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
            Resources i <span className="text-primary">use</span>
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

      <section className="py-20 md:py-28 px-5 sm:px-8 md:px-16 bg-background border-t border-border/30">
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
            Like what you <span className="text-primary">see</span>?
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
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.button
              onClick={() => setDrawerOpen(true)}
              className="cta-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start a Project
              <HugeiconsArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </motion.button>
            <Link href="/work">
              <motion.span
                className="cta-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View My Work
                <HugeiconsArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </motion.span>
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
