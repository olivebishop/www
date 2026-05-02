'use client';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import {
  TeenyiconsNextjsSolid,
  LogosVercel,
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
} from './icons';
import ProjectDrawer from './project-drawer';

export function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.reveal');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);


  return (
    <div ref={sectionRef} className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen grid grid-cols-1 md:grid-cols-2 pt-24 sm:pt-28 md:pt-32 lg:pt-40">
        {/* Portrait Image */}
        <motion.div 
          className="relative h-[40vh] sm:h-[50vh] md:h-screen w-full order-1 md:order-1"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <Image 
            src="/images/about.jpeg" 
            alt="Olive Bishop" 
            fill
            className="object-contain grayscale"
            priority
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, 50vw"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
          />
        </motion.div>

        {/* Content */}
        <div className="bg-background p-6 sm:p-8 md:p-12 lg:p-16 flex flex-col justify-center order-2 md:order-2 min-h-0">
          <motion.div 
            className="reveal opacity-0"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.h1 
              className="display-large-sm leading-[0.95] mb-2 sm:mb-3"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              Hey, I&apos;m Olive
            </motion.h1>
            <motion.h2 
              className="font-display text-2xl sm:text-3xl md:text-[2.25rem] lg:text-[2.75rem] tracking-[-0.02em] leading-[1.2] text-foreground/60 mb-10 sm:mb-12 lg:mb-14"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              a bit about myself
            </motion.h2>

            {/* Technologies */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              <motion.p 
                className="section-label mb-5"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.1 }}
              >
                Technologies
              </motion.p>
              <div className="flex flex-wrap items-center gap-4 sm:gap-6">
                {[
                  { icon: TeenyiconsNextjsSolid, name: 'Next.js' },
                  { icon: LogosVercel, name: 'Vercel', isLogo: true },
                  { icon: DeviconReactWordmark, name: 'React' },
                  { icon: MaterialIconThemeDocker, name: 'Docker' },
                  { icon: CibTypescript, name: 'TypeScript' },
                  { icon: DeviconPlainJavascript, name: 'JavaScript' },
                  { icon: LineiconsAws, name: 'AWS' },
                  { icon: StreamlineLogosFigmaLogoBlock, name: 'Figma' },
                  { icon: DeviconMotion, name: 'Motion' },
                  { icon: CibCcStripe, name: 'Stripe' },
                  { icon: LineiconsPostgresql, name: 'PostgreSQL' },
                  { icon: LineiconsSupabase, name: 'Supabase' },
                ].map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    className="flex items-center gap-2 text-foreground/50 hover:text-foreground transition-colors"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ 
                      duration: 0.5, 
                      delay: 1.2 + index * 0.05,
                      type: 'spring',
                      stiffness: 200,
                      damping: 15
                    }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <tech.icon className={`w-6 h-6 sm:w-8 sm:h-8 ${tech.isLogo ? 'w-20 sm:w-24 h-auto' : ''}`} />
                    {!tech.isLogo && <span className="text-sm sm:text-[0.9375rem] tracking-[-0.01em]">{tech.name}</span>}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Personal Story / Mission Section */}
      <section className="px-5 sm:px-8 md:px-16 py-20 md:py-28 bg-background">
        <motion.div 
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.p 
            className="section-label mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            My approach
          </motion.p>
          <motion.h2 
            className="section-title mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            Building with <span className="text-primary">purpose</span>
          </motion.h2>
          <motion.p 
            className="body-lg text-foreground/70 mb-6 leading-[1.8]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            I don&apos;t just write code — I solve real business problems. Every project starts with understanding 
            what you&apos;re trying to achieve and who you&apos;re trying to reach. From there, I craft web experiences 
            that are fast, accessible, and designed to convert visitors into customers.
          </motion.p>
          <motion.p 
            className="body-lg text-foreground/70 leading-[1.8]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            I believe great software should feel effortless to use — purposeful, elegant, and approachable. 
            That&apos;s the standard I hold myself to on every build.
          </motion.p>
        </motion.div>
      </section>

      {/* Achievements */}
      <section className="px-5 sm:px-8 md:px-16 py-20 md:py-28 bg-background">
        <motion.div 
          className="max-w-5xl mx-auto reveal opacity-0"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.p 
            className="section-label mb-5"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Achievements
          </motion.p>
          <div className="space-y-4">
            <motion.h3 
              className="font-display text-2xl sm:text-3xl md:text-4xl font-normal tracking-[-0.02em] leading-[1.25]"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              Event Parlour listed on TanStack Showcase
            </motion.h3>
            <motion.p 
              className="body-base text-foreground/70 max-w-xl"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Event Parlour, the event and ticketing platform I&apos;m building, is featured on the official TanStack Showcase as a production use case for TanStack Query and TanStack Table.
            </motion.p>
            <motion.a
              href="https://tanstack.com/showcase/3c337dc8-cc31-40ee-adfc-413e9bdf041b"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm sm:text-[0.9375rem] text-foreground hover:text-primary transition-colors underline"
              whileHover={{ x: 5, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              View on TanStack Showcase
            </motion.a>
          </div>
        </motion.div>
      </section>

      {/* CTA Section — Goal: Drive to contact */}
      <section className="px-5 sm:px-8 md:px-16 py-20 md:py-28 bg-background border-t border-border/30">
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
            Ready to build <span className="text-primary">together</span>?
          </motion.h2>
          <motion.p 
            className="body-lg text-foreground/60 mb-10 max-w-lg mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            I&apos;m currently accepting 1–2 new projects per month. Let&apos;s talk about how I can help your business grow.
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
