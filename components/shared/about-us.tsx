'use client';

import { useState, type ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import { Award, CalendarRange, Globe, MapPin, Rocket, Sparkles } from 'lucide-react';
import {
  TeenyiconsNextjsSolid,
  LogosCloudflare,
  DeviconReactWordmark,
  MaterialIconThemeDocker,
  CibTypescript,
  DeviconPlainJavascript,
  LineiconsAws,
  StreamlineLogosFigmaLogoBlock,
  DeviconMotion,
  CibCcStripe,
  LineiconsPostgresql,
  LineiconsSupabase,
  HugeiconsArrowUpRight,
  HugeiconsGithub,
  HugeiconsInstagram,
  HugeiconsNewTwitter,
  HugeiconsLinkedin02,
  IconBrowserWindow,
} from './icons';
import ProjectDrawer from './project-drawer';
import { cn } from '@/lib/utils';

const PORTRAIT_GRAIN =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' result='noise' seed='1'/%3E%3CfeColorMatrix in='noise' type='saturate' values='0'/%3E%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='0.05 0.1 0.15 0.2'/%3E%3C/feComponentTransfer%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")";

const techStack = [
  { icon: TeenyiconsNextjsSolid, name: 'Next.js' },
  { icon: LogosCloudflare, name: 'Cloudflare', wide: true },
  { icon: DeviconReactWordmark, name: 'React' },
  { icon: CibTypescript, name: 'TypeScript' },
  { icon: DeviconPlainJavascript, name: 'JavaScript' },
  { icon: MaterialIconThemeDocker, name: 'Docker' },
  { icon: LineiconsAws, name: 'AWS' },
  { icon: StreamlineLogosFigmaLogoBlock, name: 'Figma' },
  { icon: DeviconMotion, name: 'Motion' },
  { icon: CibCcStripe, name: 'Stripe' },
  { icon: LineiconsPostgresql, name: 'PostgreSQL' },
  { icon: LineiconsSupabase, name: 'Supabase' },
] as const;

const beyondCards = [
  {
    icon: IconBrowserWindow,
    title: 'Events & ticketing',
    body: 'I run the Event Parlour community — posting upcoming events, ticketing drops, and product updates for organizers and attendees.',
    href: 'https://www.instagram.com/event.parlour/',
    linkLabel: '@event.parlour on Instagram',
  },
  {
    icon: Sparkles,
    title: 'Side projects',
    body: 'Event Parlour, Navejo, and late-night UI experiments — the stuff I build because I want to, not because a brief said so.',
    href: '/work',
    linkLabel: 'See the work',
  },
  {
    icon: Globe,
    title: 'Kenya → worldwide',
    body: 'Based in Kenya, collaborating with founders and teams across Africa, the US, and Europe. Time zones are a feature, not a bug.',
    href: null,
    linkLabel: null,
  },
] as const;

const socialLinks = [
  { href: 'https://github.com/olivebishop', icon: HugeiconsGithub, label: 'GitHub' },
  { href: 'https://www.instagram.com/rhymer_ke/', icon: HugeiconsInstagram, label: 'Instagram' },
  { href: 'https://x.com/olivebishop_dev', icon: HugeiconsNewTwitter, label: 'X' },
  { href: 'https://www.linkedin.com/in/olivebishop/', icon: HugeiconsLinkedin02, label: 'LinkedIn' },
] as const;

const TANSTACK_SHOWCASE_URL =
  'https://tanstack.com/showcase/3c337dc8-cc31-40ee-adfc-413e9bdf041b';

type HighlightStat = {
  index: string;
  icon: typeof Rocket;
  display: ReactNode;
  title: string;
  detail: string;
  href: string | null;
  linkLabel: string | null;
  external?: boolean;
  accent?: 'default' | 'featured' | 'live';
  badge?: string;
};

const highlightStats: HighlightStat[] = [
  {
    index: '01',
    icon: Rocket,
    accent: 'default',
    display: (
      <span className="tabular-nums">
        6<span className="text-foreground/50">+</span>
      </span>
    ),
    title: 'Shipped projects',
    detail: 'Client sites, SaaS & products in production',
    href: '/work',
    linkLabel: 'View portfolio',
  },
  {
    index: '02',
    icon: Award,
    accent: 'featured',
    badge: 'Official pick',
    display: (
      <>
        <span className="text-[11px] uppercase tracking-[0.16em] text-foreground/55 font-medium">
          Featured on
        </span>
        <span className="block mt-1 text-3xl sm:text-[2rem] leading-none">TanStack</span>
      </>
    ),
    title: 'Showcase featured',
    detail: 'Event Parlour — Query & Table in production',
    href: TANSTACK_SHOWCASE_URL,
    linkLabel: 'See showcase',
    external: true,
  },
  {
    index: '03',
    icon: CalendarRange,
    accent: 'live',
    badge: 'Open now',
    display: <span className="tabular-nums">1–2</span>,
    title: 'New clients / month',
    detail: 'Selective capacity — quality over volume',
    href: '/contact',
    linkLabel: 'Check availability',
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' as const },
  transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] as const },
};

function AboutHighlightStats() {
  return (
    <motion.div className="mt-10 sm:mt-12 lg:mt-14" {...fadeUp}>
      <p className="section-label mb-4">At a glance</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 sm:gap-3">
        {highlightStats.map((stat) => {
          const cellClass = cn(
            'group relative flex flex-col p-6 sm:p-7 min-h-[11.5rem] transition-colors',
            'border border-white/15 bg-[#080808] hover:bg-white/[0.025]',
          );

          const content = (
            <>
              <span
                className="pointer-events-none absolute bottom-1 right-2 font-display text-[4.25rem] leading-none tracking-[-0.04em] text-white/[0.04] select-none"
                aria-hidden
              >
                {stat.index}
              </span>

              <div className="relative z-[1] flex items-start justify-between gap-3 mb-5">
                <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center border border-white/15 bg-white/5 text-foreground/80">
                  <stat.icon className="h-4 w-4" strokeWidth={1.75} aria-hidden />
                </span>
                {stat.badge ? (
                  <span
                    className={cn(
                      'shrink-0 text-[10px] uppercase tracking-[0.12em] font-medium',
                      stat.accent === 'live'
                        ? 'inline-flex items-center gap-1.5 text-white/90'
                        : 'px-2 py-0.5 border border-white/20 bg-white/5 text-foreground/80',
                    )}
                  >
                    {stat.accent === 'live' && (
                      <span className="relative flex h-1.5 w-1.5" aria-hidden>
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-50" />
                        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-white" />
                      </span>
                    )}
                    {stat.badge}
                  </span>
                ) : (
                  <span className="text-[10px] uppercase tracking-[0.18em] text-foreground/30">
                    {stat.index}
                  </span>
                )}
              </div>

              <div className="relative z-[1] font-display text-[clamp(2rem,4vw,2.75rem)] leading-[0.95] tracking-[-0.03em] text-foreground">
                {stat.display}
              </div>

              <p className="relative z-[1] mt-3 text-sm sm:text-[0.9375rem] tracking-[-0.01em] text-foreground/85">
                {stat.title}
              </p>
              <p className="relative z-[1] mt-1.5 text-sm text-foreground/45 leading-snug flex-1">
                {stat.detail}
              </p>

              {stat.href && stat.linkLabel && (
                <span className="relative z-[1] mt-4 inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.12em] text-foreground/50 group-hover:text-foreground transition-colors">
                  {stat.linkLabel}
                  <HugeiconsArrowUpRight className="w-3.5 h-3.5" />
                </span>
              )}
            </>
          );

          if (stat.href && stat.external) {
            return (
              <a
                key={stat.index}
                href={stat.href}
                target="_blank"
                rel="noopener noreferrer"
                className={cellClass}
              >
                {content}
              </a>
            );
          }

          if (stat.href) {
            return (
              <Link key={stat.index} href={stat.href} className={cellClass}>
                {content}
              </Link>
            );
          }

          return (
            <div key={stat.index} className={cellClass}>
              {content}
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}

export function About() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero — editorial bento */}
      <section className="pt-24 sm:pt-28 md:pt-32 lg:pt-36 pb-16 sm:pb-20 md:pb-24 px-5 sm:px-8 md:px-16">
        <div className="max-w-7xl mx-auto">
          <motion.p
            className="section-label mb-6"
            {...fadeUp}
          >
            About
          </motion.p>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 lg:items-start">
            {/* Portrait — cropped to upper half for a cleaner portfolio read */}
            <motion.div
              className="lg:col-span-5 relative lg:sticky lg:top-28"
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.05 }}
            >
              <figure className="relative">
                <div className="relative">
                  {/* Soft blurred halo behind the frame */}
                  <div
                    className="absolute -inset-3 sm:-inset-4 pointer-events-none overflow-hidden opacity-35 blur-2xl"
                    aria-hidden
                  >
                    <Image
                      src="/images/hero.png"
                      alt=""
                      fill
                      className="object-cover object-top scale-[1.35] brightness-[0.55] saturate-75"
                      sizes="(max-width: 1024px) 100vw, 42vw"
                      quality={40}
                    />
                  </div>

                  <div className="relative aspect-[4/5] overflow-hidden border border-white/10 bg-[#0b0b0b]">
                  <Image
                    src="/images/hero.png"
                    alt="Olive Bishop"
                    fill
                    className="object-cover object-top scale-[2] origin-top"
                    priority
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    quality={90}
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAn/xAAeEAABBAIDAQAAAAAAAAAAAAABAAIDBAURITFBYf/EABUBAQEAAAAAAAAAAAAAAAAAAAME/8QAGhEAAgMBAQAAAAAAAAAAAAAAAAECAxEhMf/aAAwDAQACEQMRAD8Ao+ytrPW1qzLluTJSTamiY53BJA0D4iIlrodkW2f/2Q=="
                  />
                  {/* Soft-blur everything below mid-frame so lower body stays out of focus */}
                  <div
                    className="absolute inset-0 pointer-events-none select-none"
                    aria-hidden
                    style={{
                      maskImage:
                        'linear-gradient(to bottom, transparent 58%, black 78%)',
                      WebkitMaskImage:
                        'linear-gradient(to bottom, transparent 58%, black 78%)',
                    }}
                  >
                    <Image
                      src="/images/hero.png"
                      alt=""
                      fill
                      className="object-cover object-top scale-[2] origin-top blur-2xl brightness-[0.65] saturate-50"
                      sizes="(max-width: 1024px) 100vw, 42vw"
                      quality={60}
                    />
                  </div>
                  <div
                    className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/85 via-black/25 to-black/20"
                    aria-hidden
                  />
                  <div
                    className="absolute inset-0 pointer-events-none mix-blend-soft-light opacity-[0.07]"
                    aria-hidden
                    style={{
                      backgroundImage: PORTRAIT_GRAIN,
                      backgroundSize: '200px 200px',
                    }}
                  />
                  <div
                    className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-white/10"
                    aria-hidden
                  />
                  <figcaption className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-white/45 mb-1.5">
                      Portrait
                    </p>
                    <p className="font-display text-xl sm:text-2xl tracking-[-0.03em] text-white">
                      Olive Bishop
                    </p>
                    <p className="mt-1 text-sm text-white/55">
                      Software engineer · Kenya
                    </p>
                  </figcaption>
                </div>
                </div>
                <div
                  className="mt-3 flex items-center justify-between gap-4 text-[11px] uppercase tracking-[0.14em] text-foreground/35"
                  aria-hidden
                >
                  <span>Based in Kenya</span>
                  <span>Available remotely</span>
                </div>
              </figure>
            </motion.div>

            {/* Intro */}
            <div className="lg:col-span-7 flex flex-col justify-center gap-8 lg:min-h-[32rem]">
              <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.1 }}>
                <h1 className="font-display text-[clamp(2rem,5.5vw,3.25rem)] font-normal leading-[1.08] tracking-[-0.03em] text-foreground mb-5 sm:mb-6">
                  Hey — I&apos;m Olive. I ship web products that{' '}
                  feel fast and convert.
                </h1>
                <p className="body-lg text-foreground/70 leading-[1.75] max-w-xl mb-4">
                  Software engineer focused on Next.js, React, and TypeScript. I partner with
                  founders and teams who need someone to own the frontend — from MVP to production
                  — without the agency overhead.
                </p>
                <p className="body-base text-foreground/55 leading-[1.7] max-w-xl">
                  When we work together, you get direct communication, opinionated UX, and code
                  you can actually maintain. No black boxes.
                </p>
                <div className="flex flex-wrap items-center gap-4 mt-6 text-sm text-foreground/50">
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-foreground/50 shrink-0" aria-hidden />
                    Kenya · remote-friendly
                  </span>
                  <span className="hidden sm:inline text-foreground/25" aria-hidden>
                    |
                  </span>
                  <a
                    href="mailto:hello@olivebishop.com"
                    className="hover:text-foreground transition-colors"
                  >
                    hello@olivebishop.com
                  </a>
                </div>
                <div className="mt-8 pt-6 border-t border-white/10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
                  <div className="flex flex-wrap items-center gap-3">
                    {socialLinks.map((social) => (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 border border-foreground/20 flex items-center justify-center hover:bg-white/10 hover:border-foreground/40 transition-all duration-300"
                        aria-label={social.label}
                      >
                        <social.icon className="w-4 h-4 text-foreground/80" />
                      </a>
                    ))}
                  </div>
                  <p className="text-[0.75rem] sm:text-xs leading-relaxed text-foreground/40 italic max-w-[18rem] sm:max-w-[14rem] sm:text-right">
                    &ldquo;Good software should feel obvious the first time you use it.&rdquo;
                  </p>
                </div>
              </motion.div>
            </div>
          </div>

          <AboutHighlightStats />
        </div>
      </section>

      {/* Off the clock — personality */}
      <section className="px-5 sm:px-8 md:px-16 py-16 sm:py-20 md:py-24">
        <div className="max-w-7xl mx-auto">
          <motion.div className="mb-10 sm:mb-12 md:flex md:items-end md:justify-between md:gap-8" {...fadeUp}>
            <div>
              <p className="section-label mb-3">Off the clock</p>
              <h2 className="section-title max-w-lg">
                The human behind the{' '}
                commits
              </h2>
            </div>
            <p className="body-sm text-foreground/50 max-w-md mt-4 md:mt-0 md:text-right">
              I hire for skill and vibe. Here&apos;s the vibe.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
            {beyondCards.map((card, index) => (
              <motion.article
                key={card.title}
                className="group flex flex-col border border-white/10 bg-[#0b0b0b] p-6 sm:p-7 hover:border-white/25 transition-colors duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
              >
                <card.icon className="mb-4 h-6 w-6 text-foreground/70" aria-hidden />
                <h3 className="font-display text-xl sm:text-[1.35rem] tracking-[-0.02em] text-foreground mb-3">
                  {card.title}
                </h3>
                <p className="body-sm text-foreground/60 leading-[1.65] flex-1">{card.body}</p>
                {card.href && card.linkLabel &&
                  (card.href.startsWith('http') ? (
                    <a
                      href={card.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-5 inline-flex items-center gap-1.5 text-sm text-foreground/70 hover:text-foreground transition-colors"
                    >
                      {card.linkLabel}
                      <HugeiconsArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <Link
                      href={card.href}
                      className="mt-5 inline-flex items-center gap-1.5 text-sm text-foreground/70 hover:text-foreground transition-colors"
                    >
                      {card.linkLabel}
                      <HugeiconsArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  ))}
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Tech stack */}
      <section className="px-5 sm:px-8 md:px-16 py-16 sm:py-20 md:py-24 bg-[#050505]">
        <div className="max-w-7xl mx-auto">
          <motion.div className="mb-10 sm:mb-12" {...fadeUp}>
            <p className="section-label mb-3">Stack</p>
            <h2 className="section-title">Tools I reach for daily</h2>
          </motion.div>
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3"
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.08 }}
          >
            {techStack.map((tech) => (
              <div
                key={tech.name}
                className="flex flex-col items-center justify-center gap-2 border border-white/10 bg-[#0b0b0b] px-3 py-5 sm:py-6 hover:border-white/20 transition-colors"
              >
                <tech.icon
                  className={cn(
                    'h-7 w-7 sm:h-8 sm:w-8 text-foreground/80',
                    'wide' in tech && tech.wide && 'w-16 sm:w-20 h-auto',
                  )}
                />
                <span className="text-[0.6875rem] sm:text-xs uppercase tracking-[0.08em] text-foreground/45 text-center">
                  {tech.name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Recognition — TanStack showcase (only external credential for now) */}
      <section className="px-5 sm:px-8 md:px-16 py-16 sm:py-20 md:py-24">
        <div className="max-w-7xl mx-auto">
          <motion.div className="mb-8 sm:mb-10" {...fadeUp}>
            <p className="section-label mb-3">Recognition</p>
            <p className="body-sm text-foreground/50 max-w-md">
              One official pick so far — production Event Parlour on the TanStack gallery.
            </p>
          </motion.div>
          <motion.a
            href={TANSTACK_SHOWCASE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group block relative overflow-hidden border border-white/15 bg-[#0b0b0b] p-8 sm:p-10 md:p-12 hover:border-white/30 transition-colors duration-300"
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.06 }}
          >
            <span className="inline-flex items-center gap-2 mb-5 px-2.5 py-1 border border-white/20 bg-white/5 text-[10px] uppercase tracking-[0.12em] text-foreground/80 font-medium">
              TanStack Showcase
            </span>
            <h3 className="font-display text-2xl sm:text-3xl md:text-4xl tracking-[-0.02em] leading-[1.2] text-foreground max-w-2xl mb-4">
              Event Parlour on the official TanStack Showcase
            </h3>
            <p className="body-base text-foreground/60 max-w-xl mb-6 leading-[1.7]">
              Production use case for TanStack Query and TanStack Table — real users, real data,
              real event operations.
            </p>
            <span className="inline-flex items-center gap-2 text-sm font-medium text-foreground/80 group-hover:text-foreground transition-colors">
              View showcase entry
              <HugeiconsArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </motion.a>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 sm:px-8 md:px-16 py-20 md:py-28">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          {...fadeUp}
        >
          <h2 className="section-title mb-6">
            Let&apos;s build something{' '}
            worth shipping
          </h2>
          <p className="body-lg text-foreground/60 mb-10 max-w-lg mx-auto">
            I&apos;m taking 1–2 new projects per month. Tell me what you&apos;re building — I&apos;ll
            reply with honest thoughts, not a sales script.
          </p>
          <div className="cta-row">
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
            <Link href="/workflow" className="cta-secondary">
              See Workflow
              <HugeiconsArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </Link>
          </div>
        </motion.div>
      </section>

      <AnimatePresence>
        <ProjectDrawer isOpen={drawerOpen} onClose={() => setDrawerOpen(false)} />
      </AnimatePresence>
    </div>
  );
}
