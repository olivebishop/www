'use client';
import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import { HugeiconsArrowUpRight } from './icons';
import ProjectDrawer from './project-drawer';

interface Project {
  id: number;
  name: string;
  image: string;
  url: string;
  type: string;
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
    url: 'https://irungu.pages.dev',
    type: 'Client project',
    description:
      'A minimal, premium personal portfolio for a client: responsive bento layout, restrained motion, and Cal.com booking — built to feel editorial, not template-driven.',
    subtitle: 'Personal portfolio website',
    tech: 'Next.js (latest), TypeScript, Tailwind CSS, GSAP, View Transitions API, Cloudflare hosting, and Cal.com for scheduling.',
    problem:
      'The client needed a polished one-page presence that communicated credibility and made it effortless to book time — without a heavy CMS or cluttered UI. It had to perform well on mobile, rank cleanly for search and social previews, and still feel bespoke.',
    systemArchitecture:
      'Next.js App Router with TypeScript and Tailwind CSS. GSAP handles scroll and micro-interactions; the View Transitions API ties route and UI state changes into smooth, native-feeling motion. Deployed on Cloudflare for fast global delivery; Cal.com embedded for booking. Typography pairs Figtree and Geist Mono with Chillax for display moments. SEO includes Open Graph metadata and performance-minded defaults; Lighthouse scores landed above 94% in lab testing.',
    keyFeatures: [
      'Responsive bento-style layout: structured grids that scale cleanly from phone to desktop',
      'Minimal visual language with premium spacing, hierarchy, and motion (GSAP + View Transitions)',
      'Cal.com integration so visitors can book without leaving the experience',
      'SEO and Open Graph setup for accurate link previews and discoverability',
      'Strong Core Web Vitals and Lighthouse lab scores (94%+ overall)',
      'Cloudflare-hosted edge delivery for low latency worldwide',
    ],
    techStack: [
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'GSAP',
      'View Transitions API',
      'Cloudflare',
      'Cal.com',
      'Open Graph / SEO',
    ],
    businessImpact:
      'The client gets a fast, trustworthy portfolio that reflects their personal brand, reduces back-and-forth scheduling, and ships with metrics and metadata that support growth from day one.',
  },
  { 
    id: 2, 
    name: 'Brinex Tech', 
    image: '/images/project1.png', 
    url: 'https://brinex-tech.com/',
    type: 'Freelance',
    description: 'A clean, responsive marketing site for a technology company, focused on clarity and trust.',
    subtitle: 'Brand / Company website',
    tech: 'Built with Next.js, SEO best practices, responsive layout, and subtle motion to highlight key sections.',
    problem: 'The owner was selling smart tech equipment (smart curtains, intelligent car parking, CCTV maintenance) with solid products, but couldn\'t make sales or reach a wide audience due to lack of digital presence.',
    systemArchitecture: 'Static site generation with optimized performance, SEO-first architecture, and analytics integration for lead tracking and conversion optimization.',
    keyFeatures: [
      'SEO optimization for better search visibility',
      'Google Analytics integration for tracking and insights',
      'Fast page loads and performance optimization',
      'Fully responsive design across all devices',
      'Clear product showcase and lead generation forms'
    ],
    techStack: ['Next.js', 'SEO Optimization', 'Google Analytics', 'Responsive Design', 'Performance Optimization'],
    businessImpact: 'Generated significant leads and improved online visibility. The digital presence helped Brinex Tech reach a wider audience, resulting in increased inquiries and sales opportunities for their smart tech equipment.'
  },
  { 
    id: 1, 
    name: 'Event Parlour', 
    image: '/images/project2.png', 
    url: 'https://eventparlour.com/',
    type: 'Startup project',
    description: 'Event and ticketing platform helping creators run digital and in-person experiences.',
    tech: 'Built with Next.js, Supabase, Drizzle ORM, Resend, Google Analytics, and Paystack.',
    problem: 'Event organizers were juggling multiple tools (Luma for events, Google Forms for call for speakers) and creating multiple accounts instead of having unified workspaces. A user could be an organizer at Angular, GDG Pwani, etc., but had to manage separate accounts for each.',
    systemArchitecture: 'Multi-tenant SaaS architecture with workspace-based organization, allowing users to manage multiple event organizations from a single account. Built on serverless infrastructure with real-time capabilities.',
    keyFeatures: [
      'Unified workspace system for managing multiple organizations',
      'Event creation and management in one platform',
      'Call for speakers functionality',
      'Ticketing and registration system',
      'Real-time updates and notifications'
    ],
    techStack: ['Next.js', 'Supabase', 'Drizzle ORM', 'Resend', 'Google Analytics', 'Paystack'],
    businessImpact: 'Currently in beta with strong reception. The platform addresses a real gap in the event management space, providing organizers with a streamlined solution that eliminates the need for multiple tools and accounts.'
  },
  {
    id: 3,
    name: 'Navejo',
    image: '/images/navejo.png',
    url: 'https://navejo.crowstudios.tech/',
    type: 'Personal Product',
    description: 'A bookmark management workspace built for frontend engineers and designers who are tired of losing track of useful links.',
    tech: 'Built with Next.js, Prisma, Better Auth, and XATA DB (PostgreSQL).',
    problem: 'As a frontend engineer, I was constantly losing track of useful links — tutorials, design references, tools, docs. Browser bookmarks were messy, unsearchable, and impossible to share with teammates. I needed something purpose-built for how developers actually work.',
    systemArchitecture: 'Full-stack Next.js application with Prisma ORM connected to XATA (PostgreSQL). Authentication handled via Better Auth with session management. AI-powered auto-tagging pipeline for bookmark categorization. Real-time sync for team collaboration features.',
    keyFeatures: [
      'AI-powered auto-tagging and smart folder organization',
      'Team collaboration with shared workspaces and real-time sync',
      'Collection sharing with public/private visibility controls',
      'Browser-ready experience with import from Chrome, Safari, and Firefox',
      'Advanced search across all bookmarks and collections',
      'Pricing tiers with free and premium plans'
    ],
    techStack: ['Next.js', 'Prisma', 'Better Auth', 'XATA DB (PostgreSQL)', 'AI Auto-tagging'],
    businessImpact: 'Turned a personal pain point into a real product with authentication, pricing tiers, and a polished browser-ready experience. Actively used by frontend engineers and designers to organize their digital resources.'
  },
  {
    id: 5, 
    name: 'Sol of African', 
    image: '/images/sol.png', 
    url: 'https://www.thesolofafrican.com/',
    type: 'Redesign',
    description: 'A modern redesign for a cultural platform celebrating African heritage and stories.',
    tech: 'Built with Next.js, modern design principles, and engaging user experience.',
    problem: 'Micheal had a poor website with no booking functionality, requiring manual handling of bookings, scheduling, and testimonial management. This created excessive workload and limited the ability to attract clients beyond the local market.',
    systemArchitecture: 'Modern web application with integrated booking system, automated scheduling, and content management. Built with performance and user experience as core priorities.',
    keyFeatures: [
      'Modern, attractive design that appeals to travel audience',
      'Fast loading times and responsive across all devices',
      'Integrated booking system following modern best practices',
      'Automated scheduling to reduce manual work',
      'Testimonial management system',
      'SEO optimization for broader reach'
    ],
    techStack: ['Next.js', 'Booking System', 'Responsive Design', 'Performance Optimization', 'Modern UX/UI'],
    businessImpact: 'Dramatically reduced Micheal\'s workload by automating bookings, scheduling, and testimonial management. The modern web app attracted more clients both locally and overseas, expanding the business reach and improving operational efficiency.'
  },
  {
    id: 4,
    name: 'Crow Studios',
    image: '/images/crow.png',
    url: 'https://www.crowstudios.tech/',
    type: 'Agency Website',
    description: 'A bold, conversion-driven tech agency website showcasing projects, services, and brand identity.',
    subtitle: 'Tech Agency / Brand Website',
    tech: 'Built with Next.js, Tailwind CSS, and Motion for smooth animations.',
    problem: 'Crow Studios needed a strong digital presence that communicated credibility, showcased past work, and converted visitors into leads. The site had to reflect the agency\'s bold brand while maintaining performance and accessibility.',
    systemArchitecture: 'Static-first Next.js site with dynamic sections powered by Motion for scroll-driven animations. Tailwind CSS for rapid, consistent styling. Optimized for performance with lazy loading and responsive images.',
    keyFeatures: [
      'Bold, modern design reflecting the agency brand identity',
      'Project showcases with detailed case studies',
      'Smooth scroll-driven animations using Motion',
      'Service breakdowns with clear call-to-actions',
      'Client testimonials and social proof sections',
      'Fully responsive across all devices'
    ],
    techStack: ['Next.js', 'Tailwind CSS', 'Motion', 'Responsive Design', 'SEO Optimization'],
    businessImpact: 'Established a strong brand presence for Crow Studios, driving client inquiries and building trust through professional design, case studies, and a seamless user experience.'
  },
];

export function Work() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="pt-28 sm:pt-32 md:pt-36 pb-14 sm:pb-18 px-5 sm:px-8 md:px-16">
        <div className="max-w-5xl">
          <motion.p 
            className="section-label mb-5"
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
            A few <span className="text-primary">projects</span> I&apos;ve worked on
          </motion.h1>
          <motion.p 
            className="mt-6 sm:mt-8 body-base text-foreground/50 max-w-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            A snapshot of products and collaborations I&apos;ve been building recently. Each one solved a real problem for a real business.
          </motion.p>
        </div>
      </section>

      {/* Projects */}
      <section className="py-20 sm:py-24 px-5 sm:px-8 md:px-16">
        <div className="space-y-10 sm:space-y-12 md:space-y-14 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.article 
              key={project.id}
              className="group border border-border/40 bg-black/40 overflow-hidden"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ 
                duration: 0.7, 
                delay: index * 0.08,
                ease: [0.16, 1, 0.3, 1] 
              }}
            >
              <motion.a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
                whileTap={{ scale: 0.995 }}
              >
                <div className="relative aspect-[16/10] sm:aspect-[16/9] overflow-hidden bg-muted">
                  <Image
                    src={project.image}
                    alt={project.name}
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

                <div className="border-t border-white/10 px-5 sm:px-7 md:px-8 py-5 sm:py-6 md:py-7 bg-[#0b0b0b]">
                  <div className="grid gap-6 md:grid-cols-12 md:items-start">
                    <div className="md:col-span-5">
                      <h3 className="font-display text-[1.35rem] sm:text-[1.6rem] md:text-[1.9rem] leading-[1.2] tracking-[-0.02em] text-white">
                        {project.name} — {project.description}
                      </h3>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {project.techStack.slice(0, 3).map((tech) => (
                          <span
                            key={`${project.id}-${tech}`}
                            className="text-[0.6875rem] uppercase tracking-[0.08em] px-2.5 py-1 border border-white/15 text-white/55"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="md:col-span-5">
                      <p className="text-[0.95rem] text-white/80 leading-[1.65]">
                        {project.problem}
                      </p>
                      <p className="mt-3 text-[0.8125rem] text-white/50 leading-[1.6]">
                        {project.businessImpact}
                      </p>
                    </div>

                    <div className="md:col-span-2 md:text-right space-y-3">
                      <div>
                        <p className="text-[0.625rem] uppercase tracking-[0.11em] text-white/40">Industry</p>
                        <p className="mt-1 text-[0.875rem] text-white/80">{project.type}</p>
                      </div>
                      <div>
                        <p className="text-[0.625rem] uppercase tracking-[0.11em] text-white/40">Live site</p>
                        <span className="mt-1 inline-flex items-center gap-1.5 text-[0.875rem] text-primary">
                          Visit
                          <HugeiconsArrowUpRight className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.a>
            </motion.article>
          ))}
        </div>
        {/* Start a Project CTA */}
        <motion.div
          className="flex justify-center mt-14 sm:mt-16 md:mt-20 px-5 sm:px-8 md:px-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-30px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
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
        </motion.div>
      </section>

      {/* Project Drawer */}
      <AnimatePresence>
        <ProjectDrawer isOpen={drawerOpen} onClose={() => setDrawerOpen(false)} />
      </AnimatePresence>

      {/* Phone Photography */}
      <section className="py-24 md:py-32 px-5 sm:px-8 md:px-16">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="mb-14 sm:mb-16"
            initial={{ opacity: 0, y: 30 }}
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
              Phone photography
            </motion.p>
            <motion.h2 
              className="section-title mb-5 sm:mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              Moments captured on my phone
            </motion.h2>
            <motion.p 
              className="body-lg text-foreground/50 max-w-3xl"
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
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                  quality={80}
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAn/xAAeEAABBAIDAQAAAAAAAAAAAAABAAIDBAURITFBYf/EABUBAQEAAAAAAAAAAAAAAAAAAAME/8QAGhEAAgMBAQAAAAAAAAAAAAAAAAECAxEhMf/aAAwDAQACEQMRAD8Ao+ytrPW1qzLluTJSTamiY53BJA0D4iIlrodkW2f/2Q=="
                />
              </motion.div>
            ))}
          </motion.div>

          {/* X Thread CTA */}
          <motion.div 
            className="border-t border-border/30 pt-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.p 
              className="section-label mb-4"
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
              className="inline-flex items-center gap-2 text-sm md:text-[0.9375rem] text-foreground hover:text-primary transition-colors underline tracking-[-0.01em]"
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
