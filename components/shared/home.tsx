'use client';

import { useState, type ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import Brands from './brands';
import ProjectDrawer from './project-drawer';
import {
  HugeiconsGithub,
  HugeiconsInstagram,
  HugeiconsNewTwitter,
  HugeiconsLinkedin02,
  HugeiconsArrowUpRight,
} from './icons';

interface HomeWorkItem {
  name: string;
  type: string;
  image: string;
  width: number;
  height: number;
  url: string;
  headline: string;
  detail: string;
  industry: string;
  live: string;
}

const homeSelectedWorks: HomeWorkItem[] = [
  {
    name: 'Event Parlour',
    type: 'Startup project',
    image: '/images/project2.png',
    width: 1350,
    height: 604,
    url: 'https://eventparlour.com/',
    headline: 'Event platform unifying ticketing, speaker calls, and operations.',
    detail:
      'Created a streamlined organizer workflow that removes tool fragmentation and supports multi-organization collaboration.',
    industry: 'Events SaaS',
    live: 'eventparlour.com',
  },
  {
    name: 'Palpluss',
    type: 'Client project',
    image: '/images/palpuss.webp',
    width: 1334,
    height: 618,
    url: 'https://www.palpluss.com/',
    headline: 'Marketing site for an M-Pesa payment gateway API.',
    detail:
      'Palpluss lets businesses integrate STK Push and B2C payouts via REST APIs and a Service Wallet prepay model — I rebuilt the landing for speed, SEO, and developer sign-ups.',
    industry: 'Fintech / payment gateway',
    live: 'palpluss.com',
  },
  {
    name: 'Irungu',
    type: 'Client project',
    image: '/images/irungu.jpeg',
    width: 997,
    height: 522,
    url: 'https://gatambiairungu.com',
    headline: 'Premium portfolio and booking experience for a personal brand.',
    detail:
      'Designed to build trust fast, reduce booking friction, and convert profile visits into meetings through performance-first UX.',
    industry: 'Personal brand',
    live: 'gatambiairungu.com',
  },
  {
    name: 'Brinex Tech',
    type: 'Business website',
    image: '/images/project1.png',
    width: 1348,
    height: 605,
    url: 'https://brinex-tech.com/',
    headline: 'Business website built to generate consistent qualified leads.',
    detail:
      'Improved visibility and credibility with a clear offer structure, stronger SEO foundations, and conversion-focused sections.',
    industry: 'Smart tech',
    live: 'brinex-tech.com',
  },
  {
    name: 'Navejo',
    type: 'Product',
    image: '/images/navejo.png',
    width: 1343,
    height: 596,
    url: 'https://navejo.vercel.app/',
    headline: 'Bookmark workspace for designers and frontend teams.',
    detail:
      'Structured around smart organization and collaboration so teams can save, find, and share high-value resources faster.',
    industry: 'Productivity',
    live: 'navejo.vercel.app',
  },
];

const socialLinks = [
  { href: 'https://github.com/olivebishop', icon: HugeiconsGithub, label: 'GitHub' },
  { href: 'https://www.instagram.com/rhymer_ke/', icon: HugeiconsInstagram, label: 'Instagram' },
  { href: 'https://x.com/olivebishop_dev', icon: HugeiconsNewTwitter, label: 'Twitter' },
  { href: 'https://www.linkedin.com/in/olivebishop/', icon: HugeiconsLinkedin02, label: 'LinkedIn' },
] as const;

const ease = [0.16, 1, 0.3, 1] as const;

const BLUR =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAGCAYAAAD68A/GAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAATklEQVQYV2NkYPj/n4EBCBgZGRkYGBj+MzIy/mdkZPzPwMDA8J+RkfE/AwPDfyYGBgYGJgYGBgYmkBQjIyMDEwMDAwMTAwMDExMDAwMAFh8MCGbBHWoAAAAASUVORK5CYII=';

function BrowserFrame({
  live,
  featured,
  children,
}: {
  live: string;
  featured?: boolean;
  children: ReactNode;
}) {
  return (
    <div className="overflow-hidden border-b border-white/10 bg-[#080808]">
      <div
        className={`flex items-center gap-3 border-b border-white/[0.07] bg-[#0c0c0c] ${
          featured ? 'px-3.5 py-2.5 sm:px-5 sm:py-3' : 'px-3 py-2 sm:px-4 sm:py-2.5'
        }`}
      >
        <div className="flex items-center gap-1.5" aria-hidden>
          <span className="size-1.5 bg-white/25" />
          <span className="size-1.5 bg-white/15" />
          <span className="size-1.5 bg-white/10" />
        </div>
        <span className="min-w-0 flex-1 truncate text-center font-body text-[10px] tracking-[0.08em] text-white/30 sm:text-[11px]">
          {live}
        </span>
        <HugeiconsArrowUpRight className="size-3.5 shrink-0 text-white/25 transition-colors duration-300 group-hover:text-white/70" />
      </div>
      <div className="relative bg-[#111]">{children}</div>
    </div>
  );
}

function WorkShot({
  item,
  priority,
  sizes,
}: {
  item: HomeWorkItem;
  priority?: boolean;
  sizes: string;
}) {
  return (
    <Image
      src={item.image}
      alt={`${item.name} website — ${item.headline}`}
      width={item.width}
      height={item.height}
      className="block h-auto w-full"
      sizes={sizes}
      priority={priority}
      loading={priority ? 'eager' : 'lazy'}
      quality={75}
      placeholder="blur"
      blurDataURL={BLUR}
    />
  );
}

export default function Home() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [featured, ...rest] = homeSelectedWorks;

  return (
    <div className="min-h-screen">
      <section className="relative bg-background pt-20 sm:pt-24 md:pt-28 pb-8 sm:pb-10 md:pb-12">
        <div className="relative z-10 flex w-full flex-col gap-8 px-5 sm:px-8 md:px-12 lg:flex-row lg:items-end lg:justify-between lg:gap-10">
          <motion.div
  className="flex w-full max-w-2xl flex-col gap-6 pt-4 sm:gap-7 sm:pt-5"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="font-display text-[clamp(1.65rem,4.5vw,2.65rem)] font-normal leading-[1.18] tracking-[-0.03em] text-foreground">
              I design and build digital products for startups, from ideas to experiences people actually use.
            </h1>
            <motion.button
              type="button"
              onClick={() => setDrawerOpen(true)}
              className="cta-primary cta-hero w-full justify-center sm:w-auto sm:justify-start sm:self-start"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
         GET IN TOUCH
              <HugeiconsArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </motion.button>
          </motion.div>

          <motion.div
            className="flex items-center gap-3 sm:gap-4 lg:flex-col lg:items-end"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-foreground/50 text-[11px] uppercase tracking-[0.15em] font-medium shrink-0 hidden sm:block lg:mb-1">
              IAM SOCIAL :)
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 border border-foreground/20 flex items-center justify-center hover:bg-white/10 hover:border-foreground/40 transition-all duration-300 group"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4 text-foreground/80 transition-colors" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Brands id="home-brands" />

      <AnimatePresence>
        <ProjectDrawer isOpen={drawerOpen} onClose={() => setDrawerOpen(false)} />
      </AnimatePresence>

      <section id="work" className="scroll-mt-24 bg-background px-5 pb-24 pt-14 sm:px-8 sm:pb-28 sm:pt-16 md:px-16 md:pb-32 md:pt-20">
        <div className="mx-auto max-w-7xl">
          <motion.div
            className="mb-10 flex flex-col gap-6 sm:mb-12 sm:flex-row sm:items-end sm:justify-between"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease }}
          >
            <div className="max-w-lg">
              <p className="section-label mb-3">Selected works</p>
              <h2 className="font-display text-[clamp(1.75rem,3.6vw,2.35rem)] font-normal leading-[1.15] tracking-[-0.03em] text-foreground">
                Recent products and collaborations.
              </h2>
              <p className="body-sm mt-3 max-w-sm text-foreground/50">
                A snapshot of products and collaborations I&apos;ve been building recently.
              </p>
            </div>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link href="/work" className="cta-secondary cta-hero w-full justify-center sm:w-auto">
                View all work
                <HugeiconsArrowUpRight className="h-4 w-4 sm:h-5 sm:w-5" />
              </Link>
            </motion.div>
          </motion.div>

          <motion.article
            className="group border border-white/10 bg-[#0b0b0b] transition-colors duration-300 hover:border-white/22"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, ease }}
          >
            <a
              href={featured.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-foreground/30"
              aria-label={`Open ${featured.name} live site`}
            >
              <BrowserFrame live={featured.live} featured>
                <WorkShot
                  item={featured}
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 90vw, 1152px"
                />
              </BrowserFrame>

              <div className="grid gap-6 px-5 py-6 sm:px-7 sm:py-7 md:grid-cols-12 md:items-start md:px-8 md:py-8">
                <div className="md:col-span-5">
                  <p className="text-[10px] uppercase tracking-[0.14em] text-white/35">
                    01 · {featured.type}
                  </p>
                  <h3 className="mt-2 font-display text-[1.45rem] leading-[1.2] tracking-[-0.02em] text-white sm:text-[1.75rem] md:text-[1.95rem]">
                    {featured.name}
                  </h3>
                  <p className="mt-2 text-[0.9375rem] leading-relaxed text-white/60">{featured.headline}</p>
                </div>
                <p className="text-[0.9375rem] leading-[1.7] text-white/70 md:col-span-5">{featured.detail}</p>
                <div className="space-y-4 md:col-span-2 md:text-right">
                  <div>
                    <p className="text-[0.625rem] uppercase tracking-[0.11em] text-white/35">Industry</p>
                    <p className="mt-1 text-[0.875rem] text-white/75">{featured.industry}</p>
                  </div>
                  <div>
                    <p className="text-[0.625rem] uppercase tracking-[0.11em] text-white/35">Live site</p>
                    <span className="mt-1 inline-flex items-center gap-1.5 text-[0.875rem] text-foreground/80">
                      {featured.live}
                      <HugeiconsArrowUpRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </div>
              </div>
            </a>
          </motion.article>

          <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">
            {rest.map((item, index) => (
              <motion.article
                key={item.name}
                className="group border border-white/10 bg-[#0b0b0b] transition-colors duration-300 hover:border-white/22"
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.65, delay: index * 0.06, ease }}
              >
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-full flex-col focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-foreground/30"
                  aria-label={`Open ${item.name} live site`}
                >
                  <BrowserFrame live={item.live}>
                    <WorkShot item={item} sizes="(max-width: 768px) 100vw, 50vw" />
                  </BrowserFrame>

                  <div className="flex flex-1 flex-col justify-between gap-5 px-5 py-5 sm:px-6 sm:py-6">
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.14em] text-white/35">
                        {String(index + 2).padStart(2, '0')} · {item.type}
                      </p>
                      <h3 className="mt-2 font-display text-[1.35rem] leading-[1.2] tracking-[-0.02em] text-white sm:text-[1.5rem]">
                        {item.name}
                      </h3>
                      <p className="mt-2 text-[0.9rem] leading-[1.65] text-white/65">{item.headline}</p>
                    </div>
                    <div className="flex items-end justify-between gap-4 border-t border-white/[0.07] pt-4">
                      <p className="text-[0.75rem] text-white/40">{item.industry}</p>
                      <span className="inline-flex shrink-0 items-center gap-1.5 text-[0.8125rem] text-foreground/70 transition-colors group-hover:text-foreground">
                        {item.live}
                        <HugeiconsArrowUpRight className="h-3.5 w-3.5" />
                      </span>
                    </div>
                  </div>
                </a>
              </motion.article>
            ))}
          </div>

          <motion.div
            className="mt-16 border border-white/10 bg-[#0b0b0b] px-5 py-10 sm:mt-20 sm:px-10 sm:py-14 md:px-14"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.6, ease }}
          >
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-xl">
                <p className="section-label mb-3">Next</p>
                <h2 className="font-display text-[clamp(1.6rem,3.2vw,2.15rem)] leading-[1.15] tracking-[-0.03em] text-foreground">
                  Building something similar?
                </h2>
                <p className="body-base mt-3 text-foreground/50">
                  Tell me about the product, users, and timeline. I&apos;ll reply within 24 hours with
                  an honest take on fit.
                </p>
              </div>
              <div className="cta-row lg:shrink-0">
                <motion.button
                  type="button"
                  onClick={() => setDrawerOpen(true)}
                  className="cta-primary cta-hero"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                 GET IN TOUCH
                  <HugeiconsArrowUpRight className="h-4 w-4 sm:h-5 sm:w-5" />
                </motion.button>
                <Link href="/work" className="cta-secondary cta-hero">
                  View all work
                  <HugeiconsArrowUpRight className="h-4 w-4 sm:h-5 sm:w-5" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
