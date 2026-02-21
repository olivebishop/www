'use client';
import Image from 'next/image';
import { motion } from 'motion/react';
import { HugeiconsArrowUpRight } from './icons';

interface Project {
  id: number;
  name: string;
  image: string;
  url: string;
  type: string;
  description: string;
  tech: string;
  subtitle?: string;
}

const projects: Project[] = [
  { 
    id: 1, 
    name: 'Event Parlour', 
    image: '/images/project2.png', 
    url: 'https://eventparlour.com/',
    type: 'Startup project',
    description: 'Event and ticketing platform helping creators run digital and in-person experiences.',
    tech: 'Built with Next.js, Supabase, Drizzle ORM, Resend, Google Analytics, and Paystack.'
  },
  { 
    id: 2, 
    name: 'Brinex Tech', 
    image: '/images/project1.png', 
    url: 'https://brinex-tech.com/',
    type: 'Freelance',
    description: 'A clean, responsive marketing site for a technology company, focused on clarity and trust.',
    subtitle: 'Brand / Company website',
    tech: 'Built with Next.js, SEO best practices, responsive layout, and subtle motion to highlight key sections.'
  },
  { 
    id: 3, 
    name: 'Sol of African', 
    image: '/images/sol.png', 
    url: 'https://www.thesolofafrican.com/',
    type: 'Redesign',
    description: 'A modern redesign for a cultural platform celebrating African heritage and stories.',
    tech: 'Built with Next.js, modern design principles, and engaging user experience.'
  },
];

export function Work() {
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
            Selected work
          </motion.p>
          <motion.h1 
            className="page-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            A few <em className="text-primary">projects</em> I&apos;ve worked on
          </motion.h1>
          <motion.p 
            className="mt-6 sm:mt-8 text-xs sm:text-sm text-muted-foreground/80 max-w-xs"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            A snapshot of products and collaborations I&apos;ve been building recently.
          </motion.p>
        </div>
      </section>

      {/* Projects */}
      <section className="py-20 sm:py-24 px-6 sm:px-8 md:px-16">
        <div className="space-y-10 sm:space-y-16">
          {projects.map((project, index) => (
            <motion.article 
              key={project.id}
              className="grid lg:grid-cols-2 gap-0 rounded-sm overflow-hidden border border-border/60 bg-background/60 backdrop-blur-sm"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.15,
                ease: [0.16, 1, 0.3, 1] 
              }}
              whileHover={{ borderColor: 'rgba(var(--primary), 0.3)', scale: 1.01 }}
            >
              {/* Image - Alternates left/right */}
              {index % 2 === 0 ? (
                <motion.div 
                  className="relative hidden sm:block h-64 sm:h-80 md:h-[420px] lg:h-[70vh] overflow-hidden group bg-muted/30"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.15 + 0.2 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <Image 
                    src={project.image} 
                    alt={project.name} 
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority={index === 0}
                  />
                </motion.div>
              ) : null}

              {/* Content */}
              <motion.div 
                className={`p-6 sm:p-8 md:p-12 flex flex-col justify-center gap-3 sm:gap-4 ${
                  index % 2 === 1 ? 'lg:order-1' : ''
                }`}
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.15 + 0.3 }}
              >
                <motion.p 
                  className="text-[11px] sm:text-xs uppercase tracking-[0.2em] text-muted-foreground"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 + 0.4 }}
                >
                  {project.type}
                </motion.p>
                <motion.h3 
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight text-foreground font-normal"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.15 + 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  {project.name}
                </motion.h3>
                {project.subtitle && (
                  <motion.p 
                    className="text-xs sm:text-sm uppercase tracking-[0.18em] text-muted-foreground mb-1"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.15 + 0.6 }}
                  >
                    {project.subtitle}
                  </motion.p>
                )}
                <motion.p 
                  className="text-sm sm:text-base text-foreground/80 max-w-md"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 + 0.7 }}
                >
                  {project.description}
                </motion.p>
                <motion.p 
                  className="text-xs sm:text-sm text-foreground/70 max-w-md"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 + 0.8 }}
                >
                  {project.tech}
                </motion.p>
                <motion.a 
                  href={project.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium link-underline hover:text-primary transition-colors text-foreground mt-2"
                  whileHover={{ x: 5, scale: 1.02 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 + 0.9 }}
                >
                  Visit website +
                </motion.a>
              </motion.div>

              {/* Image - For odd indices (right side) */}
              {index % 2 === 1 ? (
                <motion.div 
                  className="relative hidden sm:block h-64 sm:h-80 md:h-[420px] lg:h-[70vh] overflow-hidden group bg-muted/30"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.15 + 0.2 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <Image 
                    src={project.image} 
                    alt={project.name} 
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </motion.div>
              ) : null}
            </motion.article>
          ))}
        </div>
      </section>

      {/* Phone Photography */}
      <section className="py-24 md:py-32 px-6 sm:px-8 md:px-16">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 30 }}
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
              Phone photography
            </motion.p>
            <motion.h2 
              className="section-title mb-4 sm:mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              Moments captured on my phone
            </motion.h2>
            <motion.p 
              className="text-base sm:text-lg text-foreground/70 max-w-3xl"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              A collection of moments captured through mobile photography, showcasing everyday beauty and spontaneous compositions.
            </motion.p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mb-16 sm:mb-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {[
              '/images/photography/image0.jpeg',
              '/images/photography/image1.jpeg',
              '/images/photography/image2.jpeg',
              '/images/photography/image6.jpeg',
              '/images/photography/image7.jpeg',
              '/images/photography/image8.jpeg',
              '/images/photography/image9.jpeg',
            ].map((src, index) => (
              <motion.div
                key={src}
                className="relative aspect-[3/4] bg-muted overflow-hidden group cursor-pointer"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.5 + index * 0.1,
                  ease: [0.16, 1, 0.3, 1]
                }}
                whileHover={{ scale: 1.05, zIndex: 10 }}
                whileTap={{ scale: 0.98 }}
              >
                <Image
                  src={src}
                  alt={`Phone photography ${index + 1}`}
                  fill
                  className="object-cover transition-all duration-500 saturate-0 group-hover:saturate-100 group-hover:scale-105"
                />
              </motion.div>
            ))}
          </motion.div>

          {/* X Thread CTA */}
          <motion.div 
            className="border-t border-border/40 pt-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.p 
              className="text-xs uppercase tracking-widest text-muted-foreground mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              More context
            </motion.p>
            <motion.a
              href="https://x.com/olivebishop_dev/status/1999532067701359103?s=20"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm md:text-base text-foreground hover:text-primary transition-colors underline"
              whileHover={{ x: 5, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              Read the X thread about this work
              <HugeiconsArrowUpRight className="w-4 h-4" />
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
