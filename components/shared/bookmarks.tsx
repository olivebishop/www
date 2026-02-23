'use client';

import { motion } from 'motion/react';
import { HugeiconsArrowUpRight } from './icons';
import Link from 'next/link';

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
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 px-6 sm:px-8 md:px-16">
        <div className="max-w-5xl">
          <motion.p 
            className="text-[11px] sm:text-xs uppercase tracking-[0.25em] text-muted-foreground mb-4"
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
            className="mt-6 sm:mt-8 text-xs sm:text-sm text-muted-foreground/80 max-w-xs"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            A curated collection of tools and resources for web development and design.
          </motion.p>
        </div>
      </section>

      {/* Bookmarks List */}
      <section className="py-20 sm:py-24 px-6 sm:px-8 md:px-16">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-1">
            {bookmarks.map((bookmark, index) => (
              <motion.a
                key={bookmark.id}
                href={bookmark.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between gap-4 py-3 px-4 hover:bg-muted/30 transition-colors border-b border-border/20 last:border-b-0"
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
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="text-sm sm:text-base font-medium text-foreground group-hover:text-primary transition-colors">
                      {bookmark.title}
                    </h3>
                    <span className="text-[10px] sm:text-xs uppercase tracking-[0.15em] text-muted-foreground">
                      {bookmark.category}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-muted-foreground truncate">
                    {bookmark.description}
                  </p>
                </div>
                <HugeiconsArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
              </motion.a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
