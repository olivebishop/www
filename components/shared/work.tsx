'use client';

import { useState, type ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import { Beaker, Globe2, Layers3, Radio } from 'lucide-react';
import { HugeiconsArrowUpRight } from './icons';
import ProjectDrawer from './project-drawer';

interface Project {
  id: number;
  name: string;
  image: string;
  width: number;
  height: number;
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

interface ExplorationReaction {
  author: string;
  handle: string;
  text: string;
  avatarUrl: string;
}

interface Exploration {
  id: number;
  code: string;
  name: string;
  image: string;
  width: number;
  height: number;
  url: string;
  xUrl: string;
  headline: string;
  description: string;
  intent: string;
  techStack: string[];
  reactions: ExplorationReaction[];
}

const explorations: Exploration[] = [
  {
    id: 1,
    code: 'EXP·01',
    name: 'Container',
    image: '/images/container-homes.png',
    width: 309,
    height: 1024,
    url: 'https://container-homes.vercel.app/',
    xUrl: 'https://x.com/olivebishop_dev/status/2064236832812945530',
    headline: 'Modular living concept — motion-first marketing site.',
    description:
      'A speculative container-home brand exploring editorial layout, SVG diagram storytelling, and scroll-linked GSAP micro-animations — posted publicly on X for feedback.',
    intent:
      'No client brief — just a question: what would a premium modular-housing site feel like if factory timelines, terrain adaptability, and install flows were told through animated schematics instead of stock photos?',
    techStack: ['Next.js', 'Tailwind CSS', 'GSAP'],
    reactions: [
      {
        author: 'Blackie',
        handle: '@blackie_360',
        text: 'Smooth',
        avatarUrl:
          'https://pbs.twimg.com/profile_images/2010648446818992128/V2Vj11v2_400x400.jpg',
      },
      {
        author: 'Christal Riziki',
        handle: '@Crissytech',
        text: '👏🙌 Amazing 🤩',
        avatarUrl:
          'https://pbs.twimg.com/profile_images/1995750640153165824/azITXmt5_400x400.jpg',
      },
      {
        author: 'Hillary',
        handle: '@nyakundi_66',
        text: 'Nice one 🔥',
        avatarUrl:
          'https://pbs.twimg.com/profile_images/2062648509170401280/nUBDckmP_400x400.jpg',
      },
      {
        author: 'annuar',
        handle: '@itsannuar',
        text: 'This is dope🔥🔥🔥',
        avatarUrl:
          'https://pbs.twimg.com/profile_images/1586629012901732356/D77h46Wh_400x400.jpg',
      },
      {
        author: 'Lemar',
        handle: '@prlemayian',
        text: 'This is fire 🔥',
        avatarUrl:
          'https://pbs.twimg.com/profile_images/1861070092504850432/o5f2PERf_400x400.jpg',
      },
      {
        author: 'iamchris.base.eth',
        handle: '@_ChrisOketch',
        text: 'So sick bro!',
        avatarUrl:
          'https://pbs.twimg.com/profile_images/2062038913871499264/_-tCXfRs_400x400.jpg',
      },
    ],
  },
];

const projects: Project[] = [
  {
    id: 1,
    name: 'Event Parlour',
    image: '/images/project2.png',
    width: 1350,
    height: 604,
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
    id: 7,
    name: 'Palpluss',
    image: '/images/palpuss.webp',
    width: 1334,
    height: 618,
    url: 'https://www.palpluss.com/',
    type: 'Client project',
    headline: 'Marketing site for an M-Pesa payment gateway API.',
    description:
      'Palpluss is an API-driven fintech that lets businesses integrate M-Pesa STK Push and B2C disbursements without Daraja configuration — I revamped the landing to explain the product and drive developer sign-ups.',
    subtitle: 'Fintech / payment gateway',
    tech: 'Next.js, GSAP, Tailwind CSS — SEO, geo metadata, Open Graph image, custom 404, and performance-first delivery.',
    problem:
      'Businesses struggle to add mobile money to apps without wrestling with Daraja setup, OAuth tokens, and callback URLs. Palpluss solves that with clean REST APIs and a Service Wallet model where teams prepay dedicated funds for transaction fees — but the marketing site had to communicate STK Push, bulk payouts, webhooks, and the console in seconds.',
    systemArchitecture:
      'Revamped the public landing in Next.js with Tailwind CSS and GSAP scroll motion. SEO, geo metadata, Open Graph assets, and a branded 404 support discoverability. The page mirrors the product: one API call triggers STK prompts, B2C disbursements run in bulk, and webhooks log payment events in real time via the developer console.',
    keyFeatures: [
      'M-Pesa STK Push & B2C API',
      'Service Wallet prepay model',
      'Bulk payouts & webhooks',
      'Landing page revamp',
      'SEO, geo & Open Graph',
      'Custom 404 & GSAP motion',
    ],
    techStack: ['Next.js', 'GSAP', 'Tailwind CSS', 'SEO'],
    businessImpact:
      'A faster, clearer entry point that explains programmable M-Pesa integration and routes developers to the console to start building.',
  },
  {
    id: 6,
    name: 'Irungu',
    image: '/images/irungu.jpeg',
    width: 997,
    height: 522,
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
    width: 1348,
    height: 605,
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
    id: 3,
    name: 'Navejo',
    image: '/images/navejo.png',
    width: 1343,
    height: 596,
    url: 'https://navejo.vercel.app/',
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
    width: 1352,
    height: 559,
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
    width: 1352,
    height: 602,
    url: 'https://crow-studios.vercel.app/',
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

function ExplorationCard({ exploration, index }: { exploration: Exploration; index: number }) {
  return (
    <motion.article
      className="group relative overflow-hidden border border-dashed border-white/20 bg-[#0a0a0a]"
      {...fadeUp}
      transition={{ ...fadeUp.transition, delay: index * 0.08 }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)
          `,
          backgroundSize: '24px 24px',
        }}
        aria-hidden
      />

      <div className="relative flex flex-wrap items-center justify-between gap-3 border-b border-white/10 px-5 py-4 sm:px-7">
        <div className="flex items-center gap-3">
          <span className="inline-flex h-8 w-8 items-center justify-center border border-white/12 bg-white/[0.03] text-foreground/55">
            <Beaker className="h-3.5 w-3.5" strokeWidth={1.75} aria-hidden />
          </span>
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-foreground/35">
              {exploration.code}
            </p>
            <p className="text-[10px] uppercase tracking-[0.14em] text-[var(--button)]">Exploration</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          <a
            href={exploration.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 border border-white/15 bg-white/[0.03] px-3 py-1.5 text-[0.6875rem] uppercase tracking-[0.1em] text-foreground/70 transition-colors hover:border-white/30 hover:text-foreground"
          >
            Live demo
            <HugeiconsArrowUpRight className="h-3 w-3" />
          </a>
          <a
            href={exploration.xUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 border border-white/10 px-3 py-1.5 text-[0.6875rem] uppercase tracking-[0.1em] text-foreground/45 transition-colors hover:border-white/25 hover:text-foreground/75"
          >
            View on X
            <HugeiconsArrowUpRight className="h-3 w-3" />
          </a>
        </div>
      </div>

      <div className="relative grid lg:grid-cols-12">
        <div className="flex items-center justify-center border-b border-white/10 bg-[#0b0b0b] px-6 py-10 sm:px-10 sm:py-12 lg:col-span-7 lg:border-b-0 lg:border-r lg:py-14">
          <Image
            src={exploration.image}
            alt={`${exploration.name} exploration screenshot`}
            width={exploration.width}
            height={exploration.height}
            className="h-auto w-full max-w-[200px] shadow-[0_24px_60px_rgba(0,0,0,0.45)] sm:max-w-[240px] lg:max-w-[260px]"
            sizes="260px"
            loading="lazy"
            quality={75}
          />
        </div>

        <div className="relative flex flex-col p-5 sm:p-7 lg:col-span-5 lg:min-h-[22rem]">
          <h3 className="font-display text-2xl tracking-[-0.02em] text-foreground sm:text-[1.75rem]">
            {exploration.name}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-foreground/60 sm:text-[0.9375rem]">
            {exploration.headline}
          </p>
          <p className="mt-4 text-sm leading-[1.7] text-foreground/45">{exploration.description}</p>
          <p className="mt-4 border-l-2 border-white/15 pl-4 text-sm italic leading-[1.7] text-foreground/40">
            {exploration.intent}
          </p>

          <div className="mt-5 flex flex-wrap gap-1.5">
            {exploration.techStack.map((tech) => (
              <span
                key={tech}
                className="border border-dashed border-white/15 px-2 py-0.5 font-mono text-[0.625rem] uppercase tracking-[0.08em] text-foreground/45"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="relative border-t border-white/10 px-5 py-6 sm:px-7 sm:py-8">
        <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
          <p className="flex items-center gap-2 text-[10px] uppercase tracking-[0.14em] text-foreground/35">
            <span className="relative flex h-1.5 w-1.5" aria-hidden>
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--button)] opacity-40" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[var(--button)]" />
            </span>
            Signals from X
          </p>
          <a
            href={exploration.xUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[0.6875rem] uppercase tracking-[0.1em] text-foreground/40 transition-colors hover:text-foreground/70"
          >
            View thread →
          </a>
        </div>

        <ul className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
          {exploration.reactions.map((reaction) => (
            <li
              key={`${reaction.handle}-${reaction.text}`}
              className="flex gap-3 border border-white/[0.08] bg-white/[0.02] p-4"
            >
              <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full border border-white/10 bg-white/5">
                <Image
                  src={reaction.avatarUrl}
                  alt={reaction.author}
                  fill
                  className="object-cover"
                  sizes="40px"
                  loading="lazy"
                />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
                  <span className="text-sm font-medium tracking-[-0.01em] text-foreground/85">
                    {reaction.author}
                  </span>
                  <span className="text-[11px] text-foreground/30">{reaction.handle}</span>
                </div>
                <p className="mt-1.5 text-sm leading-snug text-foreground/65">&ldquo;{reaction.text}&rdquo;</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </motion.article>
  );
}

function WorkPortfolioSnapshot({ count }: { count: number }) {
  const countLabel = String(count).padStart(2, '0');

  return (
    <motion.div
      className="mt-10 w-full lg:col-span-5 lg:col-start-8 lg:mt-0 xl:col-span-4 xl:col-start-9"
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
  const [featured, ...rest] = projects;

  return (
    <div className="min-h-screen bg-background">
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
                stack, and measurable outcomes. Scroll down for side explorations and motion labs.
              </p>
            </motion.div>

            <WorkPortfolioSnapshot count={projects.length} />
          </div>
        </div>
      </section>

      <section className="bg-background px-5 pb-16 pt-4 sm:px-8 sm:pb-20 md:px-16 md:pb-24">
        <div className="mx-auto max-w-7xl">
          <motion.article
            className="group border border-white/10 bg-[#0b0b0b] transition-colors duration-300 hover:border-white/22"
            {...fadeUp}
          >
            <a
              href={featured.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-foreground/30"
              aria-label={`Open ${featured.name} live site`}
            >
              <BrowserFrame live={liveHost(featured.url)} featured>
                <Image
                  src={featured.image}
                  alt={`${featured.name} website`}
                  width={featured.width}
                  height={featured.height}
                  className="block h-auto w-full"
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 90vw, 1152px"
                  priority
                  quality={75}
                  placeholder="blur"
                  blurDataURL={BLUR}
                />
              </BrowserFrame>

              <div className="px-5 py-6 sm:px-7 sm:py-8 md:px-8">
                <p className="text-[10px] uppercase tracking-[0.14em] text-white/35">
                  01 · {featured.type}
                </p>
                <h2 className="mt-2 font-display text-[1.55rem] leading-[1.15] tracking-[-0.02em] text-white sm:text-[1.9rem] md:text-[2.15rem]">
                  {featured.name}
                </h2>
                <p className="mt-2 max-w-2xl text-[0.95rem] leading-relaxed text-white/60">
                  {featured.headline}
                </p>

                <div className="mt-8 grid gap-6 border-t border-white/[0.08] pt-6 md:grid-cols-12">
                  <div className="md:col-span-4">
                    <p className="text-[0.625rem] uppercase tracking-[0.12em] text-white/35">Problem</p>
                    <p className="mt-2 text-[0.9rem] leading-[1.65] text-white/70">{featured.problem}</p>
                  </div>
                  <div className="md:col-span-4">
                    <p className="text-[0.625rem] uppercase tracking-[0.12em] text-white/35">Impact</p>
                    <p className="mt-2 text-[0.9rem] leading-[1.65] text-white/70">{featured.businessImpact}</p>
                  </div>
                  <div className="md:col-span-4">
                    <p className="text-[0.625rem] uppercase tracking-[0.12em] text-white/35">Stack</p>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {featured.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="border border-white/12 px-2 py-0.5 text-[0.625rem] uppercase tracking-[0.08em] text-white/50"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-[0.875rem] text-foreground/75 transition-colors group-hover:text-foreground">
                      {liveHost(featured.url)}
                      <HugeiconsArrowUpRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </div>
              </div>
            </a>
          </motion.article>

          <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">
            {rest.map((project, index) => (
              <motion.article
                key={project.id}
                className="group border border-white/10 bg-[#0b0b0b] transition-colors duration-300 hover:border-white/22"
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: index * 0.05 }}
              >
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-full flex-col focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-foreground/30"
                  aria-label={`Open ${project.name} live site`}
                >
                  <BrowserFrame live={liveHost(project.url)}>
                    <Image
                      src={project.image}
                      alt={`${project.name} website`}
                      width={project.width}
                      height={project.height}
                      className="block h-auto w-full"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      quality={75}
                      placeholder="blur"
                      blurDataURL={BLUR}
                    />
                  </BrowserFrame>

                  <div className="flex flex-1 flex-col justify-between gap-5 px-5 py-5 sm:px-6 sm:py-6">
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.14em] text-white/35">
                        {String(index + 2).padStart(2, '0')} · {project.type}
                      </p>
                      <h2 className="mt-2 font-display text-[1.35rem] leading-[1.2] tracking-[-0.02em] text-white sm:text-[1.5rem]">
                        {project.name}
                      </h2>
                      <p className="mt-2 text-[0.9rem] leading-[1.65] text-white/65">{project.headline}</p>
                      <p className="mt-3 line-clamp-2 text-[0.8125rem] leading-[1.65] text-white/40">
                        {project.problem}
                      </p>
                    </div>
                    <div className="flex flex-wrap items-end justify-between gap-3 border-t border-white/[0.07] pt-4">
                      <div className="flex flex-wrap gap-1.5">
                        {project.techStack.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="border border-white/12 px-2 py-0.5 text-[0.625rem] uppercase tracking-[0.08em] text-white/40"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <span className="inline-flex shrink-0 items-center gap-1.5 text-[0.8125rem] text-foreground/70 transition-colors group-hover:text-foreground">
                        {liveHost(project.url)}
                        <HugeiconsArrowUpRight className="h-3.5 w-3.5" />
                      </span>
                    </div>
                  </div>
                </a>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Explorations */}
      <section className="relative overflow-hidden border-t border-white/10 bg-[#070707] px-5 py-14 sm:py-16 md:px-16 md:py-24">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.22]"
          style={{
            backgroundImage: `repeating-linear-gradient(
              -12deg,
              transparent,
              transparent 11px,
              rgba(255,255,255,0.025) 11px,
              rgba(255,255,255,0.025) 12px
            )`,
          }}
          aria-hidden
        />

        <div className="relative mx-auto max-w-7xl">
          <motion.div
            className="mb-10 flex flex-col gap-6 sm:mb-12 lg:flex-row lg:items-end lg:justify-between"
            {...fadeUp}
          >
            <div className="max-w-2xl">
              <p className="section-label mb-4">Explorations</p>
              <h2 className="font-display text-[clamp(1.75rem,4vw,2.75rem)] font-normal leading-[1.1] tracking-[-0.03em] text-foreground">
                Side builds &amp; motion labs
              </h2>
              <p className="body-base mt-4 max-w-xl leading-[1.75] text-foreground/50">
                Personal experiments shipped in the open — no client brief, just curiosity, craft, and
                feedback from the timeline.
              </p>
            </div>
            <div className="flex shrink-0 items-center gap-3 border border-dashed border-white/15 bg-[#0a0a0a] px-4 py-3">
              <Beaker className="h-4 w-4 text-foreground/40" strokeWidth={1.75} aria-hidden />
              <p className="max-w-[10rem] text-[0.6875rem] uppercase leading-[1.45] tracking-[0.12em] text-foreground/40">
                Pet projects · Posted for feedback
              </p>
            </div>
          </motion.div>

          <div className="space-y-5">
            {explorations.map((exploration, index) => (
              <ExplorationCard key={exploration.id} exploration={exploration} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 pb-20 pt-4 sm:px-8 md:px-16 md:pb-28">
        <motion.div
          className="mx-auto max-w-7xl border border-white/10 bg-[#0b0b0b] px-5 py-10 sm:px-10 sm:py-14 md:px-14"
          {...fadeUp}
        >
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-xl">
              <p className="section-label mb-3">Next</p>
              <h2 className="font-display text-[clamp(1.6rem,3.2vw,2.15rem)] leading-[1.15] tracking-[-0.03em] text-foreground">
                Building something similar?
              </h2>
              <p className="body-base mt-3 text-foreground/50">
                Tell me about the product, users, and timeline. I&apos;ll reply within 24 hours with an
                honest take on fit and approach.
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
                Start a Project
                <HugeiconsArrowUpRight className="h-4 w-4 sm:h-5 sm:w-5" />
              </motion.button>
              <Link href="/workflow" className="cta-secondary cta-hero">
                See how I work
                <HugeiconsArrowUpRight className="h-4 w-4 sm:h-5 sm:w-5" />
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

      <AnimatePresence>
        <ProjectDrawer isOpen={drawerOpen} onClose={() => setDrawerOpen(false)} />
      </AnimatePresence>
    </div>
  );
}
