'use client';
import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
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
  MaterialSymbolsChessBishop2,
} from './icons';

export function About() {
  const sectionRef = useRef<HTMLDivElement>(null);

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
          className="relative h-[50vh] sm:h-[60vh] md:h-screen w-full order-1 md:order-1"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <Image 
            src="/images/about.jpeg" 
            alt="Olive Bishop" 
            fill
            className="object-cover grayscale"
            priority
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, 50vw"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
          />
        </motion.div>

        {/* Content */}
        <div className="bg-background p-6 sm:p-8 md:p-12 lg:p-16 flex flex-col justify-center order-2 md:order-2 min-h-[50vh] sm:min-h-[60vh] md:min-h-0">
          <motion.div 
            className="reveal opacity-0"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-baseline gap-2 sm:gap-3 md:gap-4 mb-6 sm:mb-8">
              <motion.h1 
                className="display-large-sm"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                Olive
              </motion.h1>
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8, type: 'spring', stiffness: 200 }}
              >
                <MaterialSymbolsChessBishop2 style={{ fontSize: 'clamp(2rem, 6vw, 5rem)' }} />
              </motion.div>
            </div>
            <motion.h2 
              className="page-title-sm mb-8 sm:mb-10 lg:mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              a bit about myself
            </motion.h2>

            {/* Technologies */}
            <motion.div 
              className="mt-8 sm:mt-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              <motion.p 
                className="section-label mb-4"
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
                    className="flex items-center gap-2 text-foreground/60 hover:text-foreground transition-colors"
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
                    {!tech.isLogo && <span className="text-sm sm:text-base">{tech.name}</span>}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Achievements */}
      <section className="px-8 md:px-16 py-16 md:py-24 bg-background">
        <motion.div 
          className="max-w-5xl mx-auto reveal opacity-0"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.p 
            className="section-label mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Achievements
          </motion.p>
          <div className="space-y-3">
            <motion.h3 
              className="text-2xl sm:text-3xl md:text-4xl font-normal"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              Event Parlour listed on TanStack Showcase
            </motion.h3>
            <motion.p 
              className="text-sm sm:text-base text-foreground/80 max-w-xl"
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
              className="inline-flex items-center gap-2 text-sm sm:text-base text-foreground hover:text-primary transition-colors underline"
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

    </div>
  );
}
