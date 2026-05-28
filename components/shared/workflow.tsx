'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import {
  Compass,
  Layers,
  Rocket,
  Wrench,
  type LucideIcon,
} from 'lucide-react';
import { HugeiconsArrowUpRight } from './icons';
import ProjectDrawer from './project-drawer';
import { CalBookingDrawer, CalBookingPreload } from './cal-booking-drawer';

type Phase = {
  index: string;
  title: string;
  tagline: string;
  icon: LucideIcon;
  blocks: { heading: string; items: string[] }[];
  deliverables: string[];
};

const phases: Phase[] = [
  {
    index: '01',
    title: 'Discover',
    tagline: 'Understand the problem before touching pixels or code.',
    icon: Compass,
    blocks: [
      {
        heading: 'Kickoff',
        items: ['Goals & success metrics', 'Users & constraints', 'Timeline & budget fit'],
      },
      {
        heading: 'Research',
        items: ['Competitive scan', 'Content & IA audit', 'Technical feasibility'],
      },
    ],
    deliverables: ['Scope summary', 'Risk list', 'Recommended stack'],
  },
  {
    index: '02',
    title: 'Define',
    tagline: 'Turn ambiguity into a plan everyone can align on.',
    icon: Layers,
    blocks: [
      {
        heading: 'Structure',
        items: ['User flows & wireframes', 'System architecture', 'Milestone roadmap'],
      },
      {
        heading: 'Alignment',
        items: ['Async Loom walkthroughs', 'Written decisions', 'Shared Notion / Figma'],
      },
    ],
    deliverables: ['Signed-off scope', 'Milestone plan', 'Design direction'],
  },
  {
    index: '03',
    title: 'Build',
    tagline: 'Design and engineering in parallel — no throw-over-the-wall handoffs.',
    icon: Wrench,
    blocks: [
      {
        heading: 'Execution',
        items: ['UI in Figma + production React', 'API integrations & auth', 'Performance & accessibility'],
      },
      {
        heading: 'Rhythm',
        items: ['Weekly progress demos', 'Staging previews', 'Slack / email updates'],
      },
    ],
    deliverables: ['Staging builds', 'Component library', 'Documentation'],
  },
  {
    index: '04',
    title: 'Ship',
    tagline: 'Launch, measure, and hand you something you can own.',
    icon: Rocket,
    blocks: [
      {
        heading: 'Launch',
        items: ['Production deploy (Vercel / Cloudflare)', 'SEO & analytics setup', 'QA & cross-browser pass'],
      },
      {
        heading: 'Aftercare',
        items: ['Handoff walkthrough', '30-day bug-fix window', 'Optional retainer support'],
      },
    ],
    deliverables: ['Live product', 'Repo access', 'Deploy runbook'],
  },
];

const principles = [
  { label: 'Direct line to me', detail: 'No account managers — you work with the person building it.' },
  { label: 'Written by default', detail: 'Decisions documented so nothing gets lost in chat.' },
  { label: 'Production-minded', detail: 'TypeScript, tests where it matters, deploy-ready from day one.' },
  { label: 'Honest scope', detail: 'I’ll tell you what’s realistic before we start, not after.' },
];

const ease = [0.16, 1, 0.3, 1] as const;

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' as const },
  transition: { duration: 0.65, ease },
};

export function Workflow() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [callDrawerOpen, setCallDrawerOpen] = useState(false);
  const [shouldPreloadCal, setShouldPreloadCal] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="px-5 pb-14 pt-24 sm:px-8 sm:pb-16 sm:pt-28 md:px-16 md:pb-20 md:pt-32 lg:pt-36">
        <div className="mx-auto max-w-7xl">
          <motion.p className="section-label mb-6" {...fadeUp}>
            Workflow
          </motion.p>

          <div className="lg:grid lg:grid-cols-12 lg:gap-x-10 xl:gap-x-14">
            <motion.div className="lg:col-span-7 xl:col-span-8" {...fadeUp}>
              <h1 className="font-display text-[clamp(2rem,5.5vw,3.5rem)] font-normal leading-[1.08] tracking-[-0.03em] text-foreground">
                A clear path from idea to production — without agency theatre.
              </h1>
              <p className="body-base mt-5 max-w-xl leading-[1.75] text-foreground/55 sm:body-lg">
                Four phases. Transparent updates. Design and code under one roof so your product ships
                faster and stays maintainable after launch.
              </p>
            </motion.div>

            <motion.div
              className="mt-10 grid w-full grid-cols-1 gap-2 min-[380px]:grid-cols-2 sm:gap-3 lg:col-span-5 lg:col-start-8 lg:mt-0 lg:flex lg:flex-col lg:gap-3 lg:justify-end xl:col-span-4 xl:col-start-9"
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.08 }}
            >
              {phases.map((phase) => (
                <div
                  key={phase.index}
                  className="flex min-w-0 w-full items-center gap-2.5 border border-white/10 bg-white/[0.02] px-3 py-3 sm:gap-3 sm:px-4 sm:py-3.5 lg:px-5"
                >
                  <span className="shrink-0 font-display text-base tabular-nums tracking-[-0.02em] text-foreground/35 sm:text-lg">
                    {phase.index}
                  </span>
                  <span className="min-w-0 truncate text-[0.8125rem] font-medium tracking-[-0.01em] text-foreground/80 sm:text-sm sm:whitespace-normal">
                    {phase.title}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-[#050505] px-5 py-16 sm:px-8 md:px-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <motion.p className="section-label mb-10 md:mb-14" {...fadeUp}>
            The process
          </motion.p>

          <div className="relative space-y-3 sm:space-y-4">
            {/* Vertical connector — desktop */}
            <div
              className="pointer-events-none absolute bottom-8 left-[1.65rem] top-8 hidden w-px bg-white/10 lg:block"
              aria-hidden
            />

            {phases.map((phase, i) => (
              <motion.article
                key={phase.index}
                className="relative overflow-hidden border border-white/12 bg-[#080808] lg:grid lg:grid-cols-12 lg:gap-8"
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: i * 0.06 }}
              >
                <span
                  className="pointer-events-none absolute right-2 top-1 font-display text-[3.5rem] leading-none tracking-[-0.04em] text-white/[0.03] sm:right-6 sm:top-2 sm:text-[5rem] lg:text-[6.5rem] select-none"
                  aria-hidden
                >
                  {phase.index}
                </span>

                {/* Step header */}
                <div className="relative z-[1] flex flex-col gap-4 border-b border-white/10 p-5 sm:flex-row sm:p-8 lg:col-span-4 lg:flex-col lg:border-b-0 lg:border-r lg:border-white/10">
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center border border-white/15 bg-white/5 text-foreground/85">
                    <phase.icon className="h-5 w-5" strokeWidth={1.75} aria-hidden />
                  </span>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.16em] text-foreground/35 tabular-nums">
                      Phase {phase.index}
                    </p>
                    <h2 className="mt-1 font-display text-2xl tracking-[-0.03em] text-foreground sm:text-3xl lg:text-4xl">
                      {phase.title}
                    </h2>
                    <p className="mt-2 text-sm leading-relaxed text-foreground/50">{phase.tagline}</p>
                  </div>
                </div>

                {/* Detail blocks */}
                <div className="relative z-[1] grid grid-cols-1 gap-6 p-5 sm:grid-cols-2 sm:p-8 lg:col-span-5">
                  {phase.blocks.map((block) => (
                    <div key={block.heading}>
                      <h3 className="text-sm font-medium tracking-[-0.01em] text-foreground/90">
                        {block.heading}
                      </h3>
                      <ul className="mt-3 space-y-2">
                        {block.items.map((item) => (
                          <li
                            key={item}
                            className="flex gap-2 text-sm leading-snug text-foreground/45 before:shrink-0 before:content-['—']"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                {/* Deliverables */}
                <div className="relative z-[1] border-t border-white/10 p-5 sm:p-8 lg:col-span-3 lg:border-l lg:border-t-0 lg:border-white/10">
                  <p className="section-label mb-4">You get</p>
                  <ul className="space-y-2">
                    {phase.deliverables.map((d) => (
                      <li
                        key={d}
                        className="text-sm tracking-[-0.01em] text-foreground/70"
                      >
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="px-5 py-16 sm:px-8 md:px-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <motion.div className="mb-10 sm:mb-12" {...fadeUp}>
            <p className="section-label mb-3">How I work</p>
            <h2 className="section-title max-w-2xl">Built for founders who want clarity, not chaos</h2>
          </motion.div>

          <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4 sm:gap-3">
            {principles.map((item, i) => (
              <motion.div
                key={item.label}
                className="border border-white/12 bg-[#080808] p-5 sm:p-6"
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: i * 0.05 }}
              >
                <p className="text-sm font-medium tracking-[-0.01em] text-foreground">{item.label}</p>
                <p className="mt-2 text-sm leading-relaxed text-foreground/45">{item.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Collaboration */}
      <section className="px-5 py-16 sm:px-8 md:px-16 md:py-20 bg-[#050505]">
        <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-10">
          <motion.div className="lg:col-span-6" {...fadeUp}>
            <p className="section-label mb-4">Partnership</p>
            <h2 className="font-display text-[clamp(1.75rem,4vw,2.75rem)] leading-[1.12] tracking-[-0.03em] text-foreground">
              Long-term beats one-off transactions.
            </h2>
          </motion.div>
          <motion.p
            className="mt-6 text-sm leading-[1.8] text-foreground/50 sm:text-base lg:col-span-6 lg:col-start-7 lg:mt-0 lg:flex lg:items-end"
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.08 }}
          >
            The best results come from trust built over multiple releases — MVPs that grow into
            platforms, sites that evolve with the business. I&apos;m here for the second and third
            version, not just the launch day screenshot.
          </motion.p>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 py-20 md:px-16 md:py-28">
        <motion.div className="mx-auto max-w-3xl text-center" {...fadeUp}>
          <h2 className="section-title mb-6">Ready to run this playbook?</h2>
          <p className="body-lg mx-auto mb-10 max-w-lg text-foreground/55">
            Share what you&apos;re building. I&apos;ll respond within 24 hours with an honest take on
            fit, timeline, and next steps.
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
              <HugeiconsArrowUpRight className="h-4 w-4 sm:w-5 sm:w-5" />
            </motion.button>
            <motion.button
              type="button"
              onClick={() => setCallDrawerOpen(true)}
              onMouseEnter={() => setShouldPreloadCal(true)}
              onFocus={() => setShouldPreloadCal(true)}
              onTouchStart={() => setShouldPreloadCal(true)}
              className="cta-secondary"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Book a Call
              <HugeiconsArrowUpRight className="h-4 w-4 sm:h-5 sm:w-5" />
            </motion.button>
          </div>
          <p className="mt-8 text-sm text-foreground/35">
            Or{' '}
            <Link href="/work" className="text-foreground/55 underline-offset-4 hover:text-foreground hover:underline">
              see shipped work
            </Link>{' '}
            first
          </p>
        </motion.div>
      </section>

      <AnimatePresence>
        <ProjectDrawer isOpen={drawerOpen} onClose={() => setDrawerOpen(false)} />
      </AnimatePresence>

      <AnimatePresence>
        <CalBookingDrawer isOpen={callDrawerOpen} onClose={() => setCallDrawerOpen(false)} />
      </AnimatePresence>

      <CalBookingPreload enabled={shouldPreloadCal && !callDrawerOpen} />
    </div>
  );
}
