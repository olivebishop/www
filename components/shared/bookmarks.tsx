'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HugeiconsArrowUpRight } from './icons';
import Link from 'next/link';
import ProjectDrawer from './project-drawer';

interface Bookmark {
  id: number;
  title: string;
  description: string;
  url: string;
  category: string;
}

const bookmarks: Bookmark[] = [
  {
    id: 1,
    title: 'Fontshare',
    description: 'Free fonts for designers and developers',
    url: 'https://fontshare.com/',
    category: 'Design',
  },
  {
    id: 2,
    title: 'Shoogle',
    description: 'Shadcn components for Google',
    url: 'https://shoogle.dev/',
    category: 'Development',
  },
  {
    id: 3,
    title: 'Screen',
    description: 'Screen recorder tool',
    url: 'https://screen.now/',
    category: 'Tools',
  },
  {
    id: 4,
    title: 'Web Dev Resources',
    description: 'Web development resources with free tier',
    url: 'https://web-dev-resources.com/',
    category: 'Resources',
  },
  {
    id: 5,
    title: 'Squoosh',
    description: 'Image compression tool',
    url: 'https://squoosh.app/',
    category: 'Tools',
  },
  {
    id: 6,
    title: 'Cheat Sheets',
    description: 'Cheat sheets for developers',
    url: 'https://cheatsheets.zip/',
    category: 'Resources',
  },
];

export function Bookmarks() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="pt-28 sm:pt-32 md:pt-36 pb-14 sm:pb-18 px-5 sm:px-8 md:px-16">
        <div className="max-w-5xl">
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
            Resources i <em className="text-primary">use</em>
          </motion.h1>
          <motion.p 
            className="mt-6 sm:mt-8 body-base text-foreground/50 max-w-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            A curated collection of tools and resources I rely on for web development and design. Sharing what works.
          </motion.p>
        </div>
      </section>

      {/* Bookmarks List */}
      <section className="py-20 sm:py-24 px-5 sm:px-8 md:px-16">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-1">
            {bookmarks.map((bookmark, index) => (
              <motion.a
                key={bookmark.id}
                href={bookmark.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between gap-4 py-4 px-5 hover:bg-muted/30 transition-colors border-b border-border/20 last:border-b-0"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ 
                  duration: 0.4, 
                  delay: index * 0.05,
                  ease: [0.16, 1, 0.3, 1] 
                }}
              >
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-1.5">
                    <h3 className="text-[0.9375rem] sm:text-base font-medium text-foreground group-hover:text-primary transition-colors tracking-[-0.01em]">
                      {bookmark.title}
                    </h3>
                    <span className="text-[11px] sm:text-[0.8125rem] uppercase tracking-[0.1em] text-foreground/35 font-medium">
                      {bookmark.category}
                    </span>
                  </div>
                  <p className="text-[0.8125rem] sm:text-sm text-foreground/45 truncate">
                    {bookmark.description}
                  </p>
                </div>
                <HugeiconsArrowUpRight className="w-4 h-4 text-foreground/30 group-hover:text-primary transition-colors flex-shrink-0" />
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Conversion CTA - Tie back to main goal */}
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
            Like what you <em className="text-primary">see</em>?
          </motion.h2>
          <motion.p 
            className="body-lg text-foreground/50 mb-10 max-w-lg mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            I use these same tools and principles to build fast, beautiful products for my clients. Let&apos;s build yours.
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

      {/* Project Drawer */}
      <AnimatePresence>
        <ProjectDrawer isOpen={drawerOpen} onClose={() => setDrawerOpen(false)} />
      </AnimatePresence>
    </div>
  );
}
