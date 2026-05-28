'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import { Globe2, Layers3, Radio } from 'lucide-react';
import { HugeiconsArrowUpRight } from './icons';
import ProjectDrawer from './project-drawer';

interface Project {
  id: number;
  name: string;
  image: string;
  url: string;
  type: string;
  headline: string;
  description: string;
  tech: string;
  subtitle?: string;
  problem: string;
  systemArchitecture: string;
  keyFeatures: string[];
  techStack: string[];
  businessImpact: string;
}

const projects: Project[] = [
  {
    id: 6,
    name: 'Irungu',
    image: '/images/irungu.jpeg',
    url: 'https://gatambiairungu.com',
    type: 'Client project',
    headline: 'Premium portfolio and booking for a personal brand.',
    description:
      'A minimal, premium personal portfolio for a client: responsive bento layout, restrained motion, and Cal.com booking — built to feel editorial, not template-driven.',
    subtitle: 'Personal portfolio website',
    tech: 'Next.js (latest), TypeScript, Tailwind CSS, GSAP, View Transitions API, Cloudflare hosting, and Cal.com for scheduling.',
    problem:
      'The client needed a polished one-page presence that communicated credibility and made it effortless to book time — without a heavy CMS or cluttered UI.',
    systemArchitecture:
      'Next.js App Router with TypeScript and Tailwind CSS. GSAP handles scroll and micro-interactions; the View Transitions API ties route and UI state changes into smooth, native-feeling motion. Deployed on Cloudflare for fast global delivery; Cal.com embedded for booking.',
    keyFeatures: [
      'Responsive bento-style layout',
      'GSAP + View Transitions motion',
      'Cal.com integration',
      'SEO and Open Graph setup',
      'Cloudflare edge delivery',
    ],
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'GSAP', 'Cloudflare', 'Cal.com'],
    businessImpact:
      'A fast, trustworthy portfolio that reflects their brand and reduces scheduling friction from day one.',
  },
  {
    id: 2,
    name: 'Brinex Tech',
    image: '/images/project1.png',
    url: 'https://brinex-tech.com/',
    type: 'Freelance',
    headline: 'Lead-gen site for smart tech equipment and services.',
    description: 'A clean, responsive marketing site for a technology company, focused on clarity and trust.',
    subtitle: 'Brand / Company website',
    tech: 'Built with Next.js, SEO best practices, responsive layout, and subtle motion to highlight key sections.',
    problem:
      'Strong products but no digital presence — sales relied on word of mouth and local reach only.',
    systemArchitecture:
      'Static site generation with optimized performance, SEO-first architecture, and analytics integration for lead tracking.',
    keyFeatures: [
      'SEO optimization',
      'Google Analytics',
      'Performance optimization',
      'Lead generation forms',
    ],
    techStack: ['Next.js', 'SEO', 'Google Analytics', 'Responsive Design'],
    businessImpact:
      'Increased inquiries and visibility for smart tech equipment across a wider audience.',
  },
  {
    id: 1,
    name: 'Event Parlour',
    image: '/images/project2.png',
    url: 'https://eventparlour.com/',
    type: 'Startup project',
    headline: 'Unified events, ticketing, and speaker ops in one platform.',
    description: 'Event and ticketing platform helping creators run digital and in-person experiences.',
    tech: 'Built with Next.js, Supabase, Drizzle ORM, Resend, Google Analytics, and Paystack.',
    problem:
      'Organizers juggled Luma, Google Forms, and separate accounts per community — no single workspace.',
    systemArchitecture:
      'Multi-tenant SaaS with workspace-based organization and serverless real-time infrastructure.',
    keyFeatures: [
      'Multi-org workspaces',
      'Ticketing & registration',
      'Call for speakers',
      'Paystack payments',
    ],
    techStack: ['Next.js', 'Supabase', 'Drizzle', 'Resend', 'Paystack'],
    businessImpact:
      'In beta with strong reception — one account, many organizations, fewer tools.',
  },
  {
    id: 3,
    name: 'Navejo',
    image: '/images/navejo.png',
    url: 'https://navejo.crowstudios.tech/',
    type: 'Product',
    headline: 'Bookmark workspace for designers and frontend teams.',
    description:
      'A bookmark management workspace built for frontend engineers and designers who are tired of losing track of useful links.',
    tech: 'Built with Next.js, Prisma, Better Auth, and XATA DB (PostgreSQL).',
    problem:
      'Browser bookmarks were messy, unsearchable, and impossible to share with teammates.',
    systemArchitecture:
      'Full-stack Next.js with Prisma, Better Auth, and AI-assisted tagging for collections.',
    keyFeatures: [
      'AI auto-tagging',
      'Team workspaces',
      'Public/private sharing',
      'Browser import',
    ],
    techStack: ['Next.js', 'Prisma', 'Better Auth', 'PostgreSQL'],
    businessImpact:
      'Shipped as a real product with auth, tiers, and daily use by engineers and designers.',
  },
  {
    id: 5,
    name: 'Sol of African',
    image: '/images/sol.png',
    url: 'https://www.thesolofafrican.com/',
    type: 'Redesign',
    headline: 'Cultural travel platform with modern booking flow.',
    description: 'A modern redesign for a cultural platform celebrating African heritage and stories.',
    tech: 'Built with Next.js, modern design principles, and engaging user experience.',
    problem:
      'Manual bookings, outdated UX, and no way to reach travelers beyond the local market.',
    systemArchitecture:
      'Modern web app with integrated booking, scheduling automation, and content management.',
    keyFeatures: [
      'Integrated booking',
      'Automated scheduling',
      'Testimonial management',
      'SEO for broader reach',
    ],
    techStack: ['Next.js', 'Booking System', 'Performance', 'UX/UI'],
    businessImpact:
      'Less manual ops, more inbound clients locally and overseas.',
  },
  {
    id: 4,
    name: 'Crow Studios',
    image: '/images/crow.png',
    url: 'https://www.crowstudios.tech/',
    type: 'Agency',
    headline: 'Conversion-focused site for a tech agency brand.',
    description: 'A bold, conversion-driven tech agency website showcasing projects, services, and brand identity.',
    subtitle: 'Tech Agency / Brand Website',
    tech: 'Built with Next.js, Tailwind CSS, and Motion for smooth animations.',
    problem:
      'Needed credibility, case studies, and a site that converts visitors into leads.',
    systemArchitecture:
      'Static-first Next.js with Motion scroll animations and performance-minded media.',
    keyFeatures: [
      'Case study showcases',
      'Scroll-driven motion',
      'Service CTAs',
      'Social proof',
    ],
    techStack: ['Next.js', 'Tailwind CSS', 'Motion', 'SEO'],
    businessImpact:
      'Stronger brand presence and steady client inquiry flow.',
  },
];

const ease = [0.16, 1, 0.3, 1] as const;

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-50px' as const },
  transition: { duration: 0.65, ease },
};

function liveHost(url: string) {
  try {
    return new URL(url).hostname.replace(/^www\./, '');
  } catch {
    return url;
  }
}

function WorkPortfolioSnapshot({ count }: { count: number }) {
  const countLabel = String(count).padStart(2, '0');

  return (
    <motion.div
      className="hidden w-full lg:col-span-5 lg:col-start-8 lg:block lg:mt-0 xl:col-span-4 xl:col-start-9"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65, delay: 0.1, ease }}
    >
      <div className="relative overflow-hidden border border-white/12 bg-[#080808]">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage: `repeating-linear-gradient(
              -12deg,
              transparent,
              transparent 11px,
              rgba(255,255,255,0.03) 11px,
              rgba(255,255,255,0.03) 12px
            )`,
          }}
          aria-hidden
        />
        <span
          className="pointer-events-none absolute -right-1 bottom-0 font-display text-[6.5rem] leading-none tracking-[-0.05em] text-white/[0.04] sm:text-[7.5rem] select-none"
          aria-hidden
        >
          {countLabel}
        </span>

        <div className="relative border-l-2 border-white pl-5 pr-5 py-6 sm:pl-6 sm:pr-6 sm:py-7">
          <p className="section-label mb-5">Portfolio snapshot</p>

          <div className="flex items-end justify-between gap-4">
            <p className="font-display text-[clamp(3.25rem,10vw,4.75rem)] leading-[0.88] tracking-[-0.04em] text-foreground tabular-nums">
              {countLabel}
            </p>
            <p className="max-w-[7rem] pb-1 text-right text-[0.6875rem] uppercase leading-[1.35] tracking-[0.14em] text-foreground/40">
              Shipped case studies
            </p>
          </div>

          <ul className="mt-6 space-y-0 divide-y divide-white/10 border-y border-white/10">
            <li className="flex items-start gap-3 py-3.5 sm:py-4">
              <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center border border-white/12 bg-white/[0.04] text-foreground/70">
                <Layers3 className="h-3.5 w-3.5" strokeWidth={1.75} aria-hidden />
              </span>
              <div>
                <p className="text-sm font-medium tracking-[-0.01em] text-foreground/85">SaaS &amp; products</p>
                <p className="mt-0.5 text-xs leading-relaxed text-foreground/45">
                  Platforms, tools, and multi-tenant builds
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3 py-3.5 sm:py-4">
              <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center border border-white/12 bg-white/[0.04] text-foreground/70">
                <Globe2 className="h-3.5 w-3.5" strokeWidth={1.75} aria-hidden />
              </span>
              <div>
                <p className="text-sm font-medium tracking-[-0.01em] text-foreground/85">Client &amp; agency</p>
                <p className="mt-0.5 text-xs leading-relaxed text-foreground/45">
                  Marketing sites, portfolios, and redesigns
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3 py-3.5 sm:py-4">
              <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center border border-white/12 bg-white/[0.04] text-foreground/70">
                <Radio className="h-3.5 w-3.5" strokeWidth={1.75} aria-hidden />
              </span>
              <div className="flex flex-1 flex-wrap items-center justify-between gap-2">
                <div>
                  <p className="text-sm font-medium tracking-[-0.01em] text-foreground/85">Live in production</p>
                  <p className="mt-0.5 text-xs leading-relaxed text-foreground/45">
                    Every project below has a public URL
                  </p>
                </div>
                <span className="inline-flex shrink-0 items-center gap-1.5 rounded-sm border border-white/15 bg-white/[0.04] px-2 py-1 text-[10px] uppercase tracking-[0.12em] text-foreground/60">
                  <span className="relative flex h-1.5 w-1.5" aria-hidden>
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--button)] opacity-50" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[var(--button)]" />
                  </span>
                  Live
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
}

export function Work() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="px-5 pb-8 pt-24 sm:px-8 sm:pb-10 sm:pt-28 md:px-16 md:pb-12 md:pt-32 lg:pb-16 lg:pt-36">
        <div className="mx-auto max-w-7xl">
          <motion.p
            className="section-label mb-6"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease }}
          >
            Work
          </motion.p>

          <div className="lg:grid lg:grid-cols-12 lg:gap-x-10 xl:gap-x-14">
            <motion.div className="lg:col-span-7 xl:col-span-8" {...fadeUp}>
              <h1 className="font-display text-[clamp(2rem,5.5vw,3.5rem)] font-normal leading-[1.08] tracking-[-0.03em] text-foreground">
                Products and platforms shipped for real businesses.
              </h1>
              <p className="body-base mt-5 max-w-xl leading-[1.75] text-foreground/55 sm:body-lg">
                Client sites, SaaS, and internal tools — each tied to a clear problem, a maintainable
                stack, and measurable outcomes.
              </p>
            </motion.div>

            <WorkPortfolioSnapshot count={projects.length} />
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="bg-[#050505] px-5 py-10 sm:px-8 sm:py-14 md:px-16 md:py-20">
        <div className="mx-auto max-w-7xl space-y-4 sm:space-y-5">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              className="group relative overflow-hidden border border-white/12 bg-[#080808] transition-colors hover:border-white/22"
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: index * 0.04 }}
            >
              <span
                className="pointer-events-none absolute right-4 top-3 font-display text-[4.5rem] leading-none tracking-[-0.04em] text-white/[0.035] sm:right-6 sm:text-[5.5rem] select-none"
                aria-hidden
              >
                {String(index + 1).padStart(2, '0')}
              </span>

              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-[#0b0b0b] sm:aspect-[16/9] lg:grid lg:grid-cols-12 lg:gap-0">
                  <div className="relative aspect-[16/10] sm:aspect-[16/9] lg:col-span-7 lg:aspect-auto lg:min-h-[16rem]">
                    <Image
                      src={project.image}
                      alt={project.name}
                      fill
                      className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
                      sizes="(max-width: 1024px) 100vw, 58vw"
                      priority={index === 0}
                      loading={index === 0 ? 'eager' : 'lazy'}
                      quality={88}
                      placeholder="blur"
                      blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAGCAYAAAD68A/GAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAATklEQVQYV2NkYPj/n4EBCBgZGRkYGBj+MzIy/mdkZPzPwMDA8J+RkfE/AwPDfyYGBgYGJgYGBgYmkBQjIyMDEwMDAwMTAwMDExMDAwMAFh8MCGbBHWoAAAAASUVORK5CYII="
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-[#080808]/90" />
                  </div>

                  <div className="relative z-[1] flex flex-col justify-between border-t border-white/10 p-5 sm:p-7 lg:col-span-5 lg:border-l lg:border-t-0 lg:min-h-[16rem]">
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.14em] text-foreground/40">
                        {project.type}
                      </p>
                      <h2 className="mt-2 font-display text-2xl tracking-[-0.02em] text-foreground sm:text-[1.75rem]">
                        {project.name}
                      </h2>
                      <p className="mt-3 text-sm leading-relaxed text-foreground/55 sm:text-[0.9375rem]">
                        {project.headline}
                      </p>
                    </div>

                    <div className="mt-6 space-y-4">
                      <p className="line-clamp-3 text-sm leading-[1.65] text-foreground/45">
                        {project.problem}
                      </p>
                      <div className="flex flex-wrap items-center justify-between gap-3">
                        <div className="flex flex-wrap gap-1.5">
                          {project.techStack.slice(0, 4).map((tech) => (
                            <span
                              key={tech}
                              className="border border-white/12 px-2 py-0.5 text-[0.625rem] uppercase tracking-[0.08em] text-foreground/45"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                        <span className="inline-flex shrink-0 items-center gap-1 text-[0.8125rem] text-foreground/70 transition-colors group-hover:text-foreground">
                          {liveHost(project.url)}
                          <HugeiconsArrowUpRight className="h-3.5 w-3.5" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </motion.article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 py-20 md:px-16 md:py-28">
        <motion.div className="mx-auto max-w-3xl text-center" {...fadeUp}>
          <h2 className="section-title mb-6">Building something similar?</h2>
          <p className="body-lg mx-auto mb-10 max-w-lg text-foreground/55">
            Tell me about the product, users, and timeline. I&apos;ll reply within 24 hours with an
            honest take on fit and approach.
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
              <HugeiconsArrowUpRight className="h-4 w-4 sm:h-5 sm:w-5" />
            </motion.button>
            <Link href="/workflow" className="cta-secondary">
              See how I work
              <HugeiconsArrowUpRight className="h-4 w-4 sm:h-5 sm:w-5" />
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
