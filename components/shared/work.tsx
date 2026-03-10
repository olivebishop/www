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
];

export function Work() {
  const [drawerOpen, setDrawerOpen] = useState(false);

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
                  className="relative hidden sm:block aspect-[9/4] overflow-hidden group bg-muted/50"
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
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority={index === 0}
                    loading="eager"
                    quality={85}
                    placeholder="blur"
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAGCAYAAAD68A/GAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAATklEQVQYV2NkYPj/n4EBCBgZGRkYGBj+MzIy/mdkZPzPwMDA8J+RkfE/AwPDfyYGBgYGJgYGBgYmkBQjIyMDEwMDAwMTAwMDExMDAwMAFh8MCGbBHWoAAAAASUVORK5CYII="
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

                {/* Detailed Project Information */}
                <motion.div 
                  className="mt-6 sm:mt-8 space-y-6 sm:space-y-8 max-w-md"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 + 0.8 }}
                >
                  {/* Problem */}
                  <div>
                    <h4 className="text-xs sm:text-sm uppercase tracking-[0.15em] text-muted-foreground mb-2">Problem</h4>
                    <p className="text-xs sm:text-sm text-foreground/70 leading-relaxed">{project.problem}</p>
                  </div>

                  {/* System Architecture */}
                  <div>
                    <h4 className="text-xs sm:text-sm uppercase tracking-[0.15em] text-muted-foreground mb-2">System Architecture</h4>
                    <p className="text-xs sm:text-sm text-foreground/70 leading-relaxed">{project.systemArchitecture}</p>
                  </div>

                  {/* Key Features */}
                  <div>
                    <h4 className="text-xs sm:text-sm uppercase tracking-[0.15em] text-muted-foreground mb-2">Key Features</h4>
                    <ul className="space-y-1.5">
                      {project.keyFeatures.map((feature, idx) => (
                        <li key={idx} className="text-xs sm:text-sm text-foreground/70 flex items-start gap-2">
                          <span className="text-primary mt-1.5">•</span>
                          <span className="leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack */}
                  <div>
                    <h4 className="text-xs sm:text-sm uppercase tracking-[0.15em] text-muted-foreground mb-2">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, idx) => (
                        <span 
                          key={idx}
                          className="text-xs px-2.5 py-1 border border-border/40 bg-background/40 rounded-sm text-foreground/70"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Business Impact */}
                  <div>
                    <h4 className="text-xs sm:text-sm uppercase tracking-[0.15em] text-muted-foreground mb-2">Business Impact</h4>
                    <p className="text-xs sm:text-sm text-foreground/70 leading-relaxed">{project.businessImpact}</p>
                  </div>
                </motion.div>

                <motion.a 
                  href={project.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium link-underline hover:text-primary transition-colors text-foreground mt-6 sm:mt-8"
                  whileHover={{ x: 5, scale: 1.02 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 + 1.0 }}
                >
                  Visit website +
                </motion.a>
              </motion.div>

              {/* Image - For odd indices (right side) */}
              {index % 2 === 1 ? (
                <motion.div 
                  className="relative hidden sm:block aspect-[9/4] overflow-hidden group bg-muted/50"
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
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    loading="eager"
                    quality={85}
                    placeholder="blur"
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAGCAYAAAD68A/GAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAATklEQVQYV2NkYPj/n4EBCBgZGRkYGBj+MzIy/mdkZPzPwMDA8J+RkfE/AwPDfyYGBgYGJgYGBgYmkBQjIyMDEwMDAwMTAwMDExMDAwMAFh8MCGbBHWoAAAAASUVORK5CYII="
                  />
                </motion.div>
              ) : null}
            </motion.article>
          ))}
        </div>
        {/* Start a Project CTA */}
        <motion.div
          className="flex justify-center mt-10 sm:mt-14 md:mt-16 px-6 sm:px-8 md:px-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-30px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.button
            onClick={() => setDrawerOpen(true)}
            className="inline-flex items-center gap-1.5 sm:gap-2 px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 bg-foreground text-background text-[10px] sm:text-xs md:text-sm font-medium tracking-wide uppercase rounded-sm hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start a Project
            <HugeiconsArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5" />
          </motion.button>
        </motion.div>
      </section>

      {/* Project Drawer */}
      <AnimatePresence>
        <ProjectDrawer isOpen={drawerOpen} onClose={() => setDrawerOpen(false)} />
      </AnimatePresence>

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
