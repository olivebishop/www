'use client';
import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import Brands from './brands';
import ProjectDrawer from './project-drawer';
import { HugeiconsGithub, HugeiconsInstagram, HugeiconsNewTwitter, HugeiconsLinkedin02, HugeiconsArrowUpRight } from './icons';

interface HomeWorkItem {
  name: string;
  type: string;
  image: string;
  url: string;
  headline: string;
  detail: string;
  industry: string;
  live: string;
}

const homeSelectedWorks: HomeWorkItem[] = [
  {
    name: 'Palpluss',
    type: 'Client project',
    image: '/images/palpuss.webp',
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
    url: 'https://gatambiairungu.com',
    headline: 'Premium portfolio and booking experience for a personal brand.',
    detail: 'Designed to build trust fast, reduce booking friction, and convert profile visits into meetings through performance-first UX.',
    industry: 'Personal brand',
    live: 'gatambiairungu.com',
  },
  {
    name: 'Brinex Tech',
    type: 'Business website',
    image: '/images/project1.png',
    url: 'https://brinex-tech.com/',
    headline: 'Business website built to generate consistent qualified leads.',
    detail: 'Improved visibility and credibility with a clear offer structure, stronger SEO foundations, and conversion-focused sections.',
    industry: 'Smart tech',
    live: 'brinex-tech.com',
  },
  {
    name: 'Event Parlour',
    type: 'Startup project',
    image: '/images/project2.png',
    url: 'https://eventparlour.com/',
    headline: 'Event platform unifying ticketing, speaker calls, and operations.',
    detail: 'Created a streamlined organizer workflow that removes tool fragmentation and supports multi-organization collaboration.',
    industry: 'Events SaaS',
    live: 'eventparlour.com',
  },
  {
    name: 'Navejo',
    type: 'Product',
    image: '/images/navejo.png',
    url: 'https://navejo.crowstudios.tech/',
    headline: 'Bookmark workspace for designers and frontend teams.',
    detail: 'Structured around smart organization and collaboration so teams can save, find, and share high-value resources faster.',
    industry: 'Productivity',
    live: 'navejo.crowstudios.tech',
  },
];

const socialLinks = [
  { href: 'https://github.com/olivebishop', icon: HugeiconsGithub, label: 'GitHub' },
  { href: 'https://www.instagram.com/rhymer_ke/', icon: HugeiconsInstagram, label: 'Instagram' },
  { href: 'https://x.com/olivebishop_dev', icon: HugeiconsNewTwitter, label: 'Twitter' },
  { href: 'https://www.linkedin.com/in/olivebishop/', icon: HugeiconsLinkedin02, label: 'LinkedIn' },
] as const;

export default function Home() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <section className="relative bg-background pt-20 sm:pt-24 md:pt-28 pb-8 sm:pb-10 md:pb-12">
        <div className="relative z-10 flex w-full flex-col gap-8 px-5 sm:px-8 md:px-12 lg:flex-row lg:items-end lg:justify-between lg:gap-10">
          <motion.div
            className="flex w-full max-w-2xl flex-col gap-6 sm:gap-7"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="font-display text-[clamp(1.65rem,4.5vw,2.65rem)] font-normal leading-[1.18] tracking-[-0.03em] text-foreground">
              I build high-performance web platforms that help businesses grow, convert, and scale.
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
              Start a Project
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

      {/* Project Drawer */}
      <AnimatePresence>
        <ProjectDrawer isOpen={drawerOpen} onClose={() => setDrawerOpen(false)} />
      </AnimatePresence>

      {/* Selected Works Section */}
      <section id="work" className="pt-10 sm:pt-12 pb-24 sm:pb-28 md:pb-32 bg-background">
        <motion.div
          className="mb-10 flex flex-col gap-6 px-5 sm:mb-14 sm:flex-row sm:items-end sm:justify-between sm:gap-4 sm:px-8 md:px-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div>
            <p className="section-label mb-2">Selected works</p>
            <p className="mt-3 body-sm max-w-sm text-foreground/50">
              A snapshot of products and collaborations I&apos;ve been building recently.
            </p>
          </div>
          <motion.a
            href="/work"
            className="cta-secondary cta-hero w-full justify-center sm:inline-flex sm:w-auto sm:shrink-0"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            View all work
            <HugeiconsArrowUpRight className="h-4 w-4 sm:h-5 sm:w-5" />
          </motion.a>
        </motion.div>

        <div className="space-y-10 sm:space-y-12 md:space-y-14 px-5 sm:px-8 md:px-16">
          {homeSelectedWorks.map((item, index) => (
            <motion.article
              key={item.name}
              className="border border-white/10 bg-[#0b0b0b] overflow-hidden"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.75, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              <a href={item.url} target="_blank" rel="noopener noreferrer" className="block group">
                <div className="relative aspect-[16/10] sm:aspect-[16/9] overflow-hidden bg-muted">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
                    sizes="(max-width: 768px) 100vw, 90vw"
                    priority={index === 0}
                    loading={index === 0 ? 'eager' : 'lazy'}
                    quality={88}
                    placeholder="blur"
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAGCAYAAAD68A/GAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAATklEQVQYV2NkYPj/n4EBCBgZGRkYGBj+MzIy/mdkZPzPwMDA8J+RkfE/AwPDfyYGBgYGJgYGBgYmkBQjIyMDEwMDAwMTAwMDExMDAwMAFh8MCGbBHWoAAAAASUVORK5CYII="
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent pointer-events-none" />
                </div>

                <div className="border-t border-white/10 px-5 sm:px-7 md:px-8 py-5 sm:py-6 md:py-7">
                  <div className="grid gap-6 md:grid-cols-12 md:items-start">
                    <div className="md:col-span-5">
                      <h3 className="font-display text-[1.35rem] sm:text-[1.6rem] md:text-[1.9rem] leading-[1.2] tracking-[-0.02em] text-white">
                        {item.name} — {item.headline}
                      </h3>
                    </div>

                    <div className="md:col-span-5">
                      <p className="text-[0.95rem] text-white/80 leading-[1.65]">{item.detail}</p>
                    </div>

                    <div className="md:col-span-2 md:text-right space-y-3">
                      <div>
                        <p className="text-[0.625rem] uppercase tracking-[0.11em] text-white/40">Industry</p>
                        <p className="mt-1 text-[0.875rem] text-white/80">{item.industry}</p>
                      </div>
                      <div>
                        <p className="text-[0.625rem] uppercase tracking-[0.11em] text-white/40">Live site</p>
                        <span className="mt-1 inline-flex items-center gap-1.5 text-[0.875rem] text-foreground/80">
                          {item.live}
                          <HugeiconsArrowUpRight className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </motion.article>
          ))}
        </div>

        <motion.div
          className="mt-14 w-full px-5 sm:mt-16 md:mt-20 sm:px-8 md:px-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-30px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.a
            href="/work"
            className="cta-primary cta-hero flex w-full max-w-full justify-center sm:mx-auto sm:w-auto sm:max-w-none"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            View all work
            <HugeiconsArrowUpRight className="h-4 w-4 sm:h-5 sm:w-5" />
          </motion.a>
        </motion.div>
      </section>

      {/* Legacy Selected Works (disabled) */}
      {false && (
      <section className="py-24 sm:py-28 md:py-32 bg-background">
        <motion.div 
          className="px-5 sm:px-8 md:px-16 mb-10 sm:mb-14 flex items-baseline justify-between gap-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div>
            <p className="section-label mb-2">
              Selected works
            </p>
            <p className="mt-3 body-sm text-foreground/50 max-w-sm">
              A snapshot of products and collaborations I&apos;ve been building recently.
            </p>
          </div>
          <motion.a
            href="/work"
            className="hidden sm:inline-flex text-[0.8125rem] uppercase tracking-[0.12em] text-foreground/50 hover:text-foreground transition-colors font-medium"
            whileHover={{ scale: 1.05, x: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            View all work +
          </motion.a>
        </motion.div>

        <div className="space-y-12 sm:space-y-16 md:space-y-20 px-5 sm:px-8 md:px-16">
          {/* Project 1: Event Parlour */}
          <motion.article 
            className="grid lg:grid-cols-2 gap-0 rounded-sm overflow-hidden border border-border/60 bg-background/60 backdrop-blur-sm depth-card transition-shadow duration-300 hover:depth-elevated"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ borderColor: 'rgba(255, 255, 255, 0.2)' }}
          >
            <motion.div 
              className="relative hidden sm:block aspect-[9/4] overflow-hidden group"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
            >
              <div className="absolute inset-0 flex items-center justify-center p-5 sm:p-6 md:p-8">
                <div className="relative w-full h-full rounded-xl overflow-hidden shadow-2xl shadow-black/50 ring-1 ring-white/[0.08]">
                  <Image 
                    src="/images/project2.png" 
                    alt="Event Parlour" 
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                    quality={85}
                    placeholder="blur"
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAGCAYAAAD68A/GAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAATklEQVQYV2NkYPj/n4EBCBgZGRkYGBj+MzIy/mdkZPzPwMDA8J+RkfE/AwPDfyYGBgYGJgYGBgYmkBQjIyMDEwMDAwMTAwMDExMDAwMAFh8MCGbBHWoAAAAASUVORK5CYII="
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-14 bg-gradient-to-t from-background to-transparent pointer-events-none z-10" />
            </motion.div>
            <div className="p-6 sm:p-8 md:p-12 lg:p-14 flex flex-col justify-center gap-4 sm:gap-5">
              <motion.p 
                className="section-label"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Startup project
              </motion.p>
              <motion.h3 
                className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.1] tracking-[-0.02em] text-foreground"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              >
                Event Parlour
              </motion.h3>
              <motion.p 
                className="body-base text-foreground/70"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Event and ticketing platform helping creators run digital and in-person experiences.
              </motion.p>
              <motion.p 
                className="body-sm text-foreground/50 max-w-md"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                Built with Next.js, Supabase, Drizzle ORM, Resend, Google Analytics, and Paystack.
              </motion.p>
              <motion.a 
                href="https://eventparlour.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium link-underline hover:text-foreground transition-colors text-foreground mt-2"
                whileHover={{ x: 5 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                Visit website +
              </motion.a>
            </div>
          </motion.article>

          {/* Project 2: Navejo */}
          <motion.article 
            className="grid lg:grid-cols-2 gap-0 rounded-sm overflow-hidden border border-border/60 bg-background/60 backdrop-blur-sm depth-card transition-shadow duration-300 hover:depth-elevated"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ borderColor: 'rgba(255, 255, 255, 0.2)' }}
          >
            <div className="order-2 lg:order-1 p-6 sm:p-8 md:p-12 lg:p-14 flex flex-col justify-center gap-4 sm:gap-5">
              <motion.p 
                className="section-label"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Personal Product
              </motion.p>
              <motion.h3 
                className="font-display text-3xl sm:text-4xl md:text-5xl leading-[1.1] tracking-[-0.02em] text-foreground"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                Navejo
              </motion.h3>
              <motion.p 
                className="text-[0.8125rem] uppercase tracking-[0.12em] text-foreground/40 font-medium mb-1"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                Bookmarking Tool
              </motion.p>
              <motion.p 
                className="body-base text-foreground/70 max-w-md"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                A bookmark management workspace built for frontend engineers and designers. Features AI-powered auto-tagging, smart folders, team collaboration, and collection sharing.
              </motion.p>
              <motion.p 
                className="body-sm text-foreground/50 max-w-md"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                Built with Next.js, Prisma, Better Auth, and XATA DB (PostgreSQL).
              </motion.p>
              <motion.a 
                href="https://navejo.crowstudios.tech/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium link-underline hover:text-foreground transition-colors mt-2"
                whileHover={{ x: 5 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                Visit website +
              </motion.a>
            </div>
            <motion.div 
              className="relative hidden sm:block order-1 lg:order-2 aspect-[9/4] overflow-hidden group"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
            >
              <div className="absolute inset-0 flex items-center justify-center p-5 sm:p-6 md:p-8">
                <div className="relative w-full h-full rounded-xl overflow-hidden shadow-2xl shadow-black/50 ring-1 ring-white/[0.08]">
                  <Image 
                    src="/images/navejo.png" 
                    alt="Navejo" 
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    loading="eager"
                    quality={85}
                    placeholder="blur"
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAGCAYAAAD68A/GAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAATklEQVQYV2NkYPj/n4EBCBgZGRkYGBj+MzIy/mdkZPzPwMDA8J+RkfE/AwPDfyYGBgYGJgYGBgYmkBQjIyMDEwMDAwMTAwMDExMDAwMAFh8MCGbBHWoAAAAASUVORK5CYII="
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-14 bg-gradient-to-t from-background to-transparent pointer-events-none z-10" />
            </motion.div>
          </motion.article>

          {/* Project 3: Crow Studios */}
          <motion.article 
            className="grid lg:grid-cols-2 gap-0 rounded-sm overflow-hidden border border-border/60 bg-background/60 backdrop-blur-sm depth-card transition-shadow duration-300 hover:depth-elevated"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ borderColor: 'rgba(255, 255, 255, 0.2)' }}
          >
            <motion.div 
              className="relative hidden sm:block aspect-[9/4] overflow-hidden group"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
            >
              <div className="absolute inset-0 flex items-center justify-center p-5 sm:p-6 md:p-8">
                <div className="relative w-full h-full rounded-xl overflow-hidden shadow-2xl shadow-black/50 ring-1 ring-white/[0.08]">
                  <Image 
                    src="/images/crow.png" 
                    alt="Crow Studios" 
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    loading="eager"
                    quality={85}
                    placeholder="blur"
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAGCAYAAAD68A/GAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAATklEQVQYV2NkYPj/n4EBCBgZGRkYGBj+MzIy/mdkZPzPwMDA8J+RkfE/AwPDfyYGBgYGJgYGBgYmkBQjIyMDEwMDAwMTAwMDExMDAwMAFh8MCGbBHWoAAAAASUVORK5CYII="
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-14 bg-gradient-to-t from-background to-transparent pointer-events-none z-10" />
            </motion.div>
            <div className="p-6 sm:p-8 md:p-12 lg:p-14 flex flex-col justify-center gap-4 sm:gap-5">
              <motion.p 
                className="section-label"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Agency Website
              </motion.p>
              <motion.h3 
                className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.1] tracking-[-0.02em] text-foreground"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              >
                Crow Studios
              </motion.h3>
              <motion.p 
                className="text-[0.8125rem] uppercase tracking-[0.12em] text-foreground/40 font-medium mb-1"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Tech Agency / Brand Website
              </motion.p>
              <motion.p 
                className="body-base text-foreground/70"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                A bold, conversion-driven tech agency website showcasing projects, services, and brand identity.
              </motion.p>
              <motion.p 
                className="body-sm text-foreground/50 max-w-md"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                Built with Next.js, Tailwind CSS, and Motion for smooth animations.
              </motion.p>
              <motion.a 
                href="https://www.crowstudios.tech/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium link-underline hover:text-foreground transition-colors text-foreground mt-2"
                whileHover={{ x: 5 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                Visit website +
              </motion.a>
            </div>
          </motion.article>

          {/* Project 4: Brinex */}
          <motion.article 
            className="grid lg:grid-cols-2 gap-0 rounded-sm overflow-hidden border border-border/60 bg-background/60 backdrop-blur-sm depth-card transition-shadow duration-300 hover:depth-elevated"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ borderColor: 'rgba(255, 255, 255, 0.2)' }}
          >
            <div className="order-2 lg:order-1 p-6 sm:p-8 md:p-12 lg:p-14 flex flex-col justify-center gap-4 sm:gap-5">
              <motion.p 
                className="section-label"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Freelance
              </motion.p>
              <motion.h3 
                className="font-display text-3xl sm:text-4xl md:text-5xl leading-[1.1] tracking-[-0.02em] text-foreground"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                Brinex Tech
              </motion.h3>
              <motion.p 
                className="text-[0.8125rem] uppercase tracking-[0.12em] text-foreground/40 font-medium mb-1"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                Brand / Company website
              </motion.p>
              <motion.p 
                className="body-base text-foreground/70 max-w-md"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                A clean, responsive marketing site for a technology company, focused on clarity and trust.
              </motion.p>
              <motion.p 
                className="body-sm text-foreground/50 max-w-md"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                Built with Next.js, SEO best practices, responsive layout, and subtle motion to highlight key sections.
              </motion.p>
              <motion.a 
                href="https://www.brinex-tech.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium link-underline hover:text-foreground transition-colors mt-2"
                whileHover={{ x: 5 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                Visit website +
              </motion.a>
            </div>
            <motion.div 
              className="relative hidden sm:block order-1 lg:order-2 aspect-[9/4] overflow-hidden group"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
            >
              <div className="absolute inset-0 flex items-center justify-center p-5 sm:p-6 md:p-8">
                <div className="relative w-full h-full rounded-xl overflow-hidden shadow-2xl shadow-black/50 ring-1 ring-white/[0.08]">
                  <Image 
                    src="/images/project1.png" 
                    alt="Brinex Tech" 
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    loading="eager"
                    quality={85}
                    placeholder="blur"
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAGCAYAAAD68A/GAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAATklEQVQYV2NkYPj/n4EBCBgZGRkYGBj+MzIy/mdkZPzPwMDA8J+RkfE/AwPDfyYGBgYGJgYGBgYmkBQjIyMDEwMDAwMTAwMDExMDAwMAFh8MCGbBHWoAAAAASUVORK5CYII="
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-14 bg-gradient-to-t from-background to-transparent pointer-events-none z-10" />
            </motion.div>
          </motion.article>

          {/* Project 5: Irungu — client personal portfolio */}
          <motion.article 
            className="grid lg:grid-cols-2 gap-0 rounded-sm overflow-hidden border border-border/60 bg-background/60 backdrop-blur-sm depth-card transition-shadow duration-300 hover:depth-elevated"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ borderColor: 'rgba(255, 255, 255, 0.2)' }}
          >
            <motion.div 
              className="relative hidden sm:block aspect-[9/4] overflow-hidden group"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
            >
              <div className="absolute inset-0 flex items-center justify-center p-5 sm:p-6 md:p-8">
                <div className="relative w-full h-full rounded-xl overflow-hidden shadow-2xl shadow-black/50 ring-1 ring-white/[0.08]">
                  <Image 
                    src="/images/irungu.jpeg" 
                    alt="Irungu — client personal portfolio" 
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    loading="eager"
                    quality={85}
                    placeholder="blur"
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAGCAYAAAD68A/GAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAATklEQVQYV2NkYPj/n4EBCBgZGRkYGBj+MzIy/mdkZPzPwMDA8J+RkfE/AwPDfyYGBgYGJgYGBgYmkBQjIyMDEwMDAwMTAwMDExMDAwMAFh8MCGbBHWoAAAAASUVORK5CYII="
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-14 bg-gradient-to-t from-background to-transparent pointer-events-none z-10" />
            </motion.div>
            <div className="p-6 sm:p-8 md:p-12 lg:p-14 flex flex-col justify-center gap-4 sm:gap-5">
              <motion.p 
                className="section-label"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Client project
              </motion.p>
              <motion.h3 
                className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.1] tracking-[-0.02em] text-foreground"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              >
                Irungu
              </motion.h3>
              <motion.p 
                className="text-[0.8125rem] uppercase tracking-[0.12em] text-foreground/40 font-medium mb-1"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Personal portfolio website
              </motion.p>
              <motion.p 
                className="body-base text-foreground/70 max-w-md"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                Minimal yet premium: a responsive bento layout with Figtree, Geist Mono, and Chillax, GSAP motion, View Transitions, Cal.com booking, Open Graph SEO, and Lighthouse lab scores over 94%.
              </motion.p>
              <motion.p 
                className="body-sm text-foreground/50 max-w-md"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                Next.js (latest), TypeScript, Tailwind CSS, hosted on Cloudflare.
              </motion.p>
              <motion.a 
                href="https://gatambiairungu.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium link-underline hover:text-foreground transition-colors text-foreground mt-2"
                whileHover={{ x: 5 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                Visit website +
              </motion.a>
            </div>
          </motion.article>
        </div>

        {/* View All Work CTA */}
        <motion.div
          className="flex justify-center mt-14 sm:mt-16 md:mt-20 px-5 sm:px-8 md:px-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-30px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.a
            href="/work"
            className="cta-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Work
            <HugeiconsArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </motion.a>
        </motion.div>
      </section>
      )}

    </div>
  );
}
