'use client';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { Sparkles } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import Brands from './brands';
import Testimonials from './testimonials';
import ProjectDrawer from './project-drawer';
import { HugeiconsGithub, HugeiconsInstagram, HugeiconsNewTwitter, HugeiconsLinkedin02, HugeiconsArrowUpRight } from './icons';

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const circleScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.2]);
  const circleOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.3]);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrollY = window.scrollY;
        const elements = heroRef.current.querySelectorAll('.parallax');
        elements.forEach((el, i) => {
          const speed = 0.1 + (i * 0.05);
          (el as HTMLElement).style.transform = `translateY(${scrollY * speed}px)`;
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex flex-col bg-background pt-24 sm:pt-28 md:pt-32 overflow-hidden"
      >
        {/* Background Circle — scaled down on mobile */}
        <motion.div 
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
          style={{ scale: circleScale, opacity: circleOpacity }}
        >
          <motion.div 
            className="w-[90vw] h-[90vw] sm:w-[80vw] sm:h-[80vw] max-w-[800px] max-h-[800px] rounded-full border border-border/50"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          />
        </motion.div>

        {/* Horizontal Line — hidden on mobile */}
        <motion.div 
          className="absolute left-0 right-0 top-1/2 h-px bg-border/50 hidden md:block"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        />

        {/* Number Indicators — hidden on small screens */}
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 hidden md:flex justify-between px-8 md:px-16 pointer-events-none">
          {['01', '02', '03', '04', '05', '06', '07', '08', '09'].map((num, index) => (
            <motion.span 
              key={num} 
              className="text-[11px] text-foreground/30 font-light tracking-wider"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.05, ease: [0.16, 1, 0.3, 1] }}
            >
              {num}
            </motion.span>
          ))}
        </div>

        {/* Main Content — centered vertically */}
        <div className="relative z-10 w-full flex-1 flex flex-col items-center justify-center px-5 sm:px-8 md:px-12">
          {/* Name + Image */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-12">
            {/* Left Name - hidden on small screens */}
            <motion.h1 
              className="hero-name text-foreground parallax hidden md:block"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              Olive
            </motion.h1>
            
            {/* Center Image */}
            <motion.div 
              className="relative px-2 sm:px-4 md:px-8 lg:px-12"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <motion.div 
                className="relative w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96 bg-muted rounded-sm overflow-hidden shadow-2xl"
                whileHover={{ scale: 1.02, rotate: 0.5 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              >
                <Image 
                  src="/images/hero.jpeg" 
                  alt="Portfolio Preview" 
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 160px, (max-width: 768px) 224px, (max-width: 1024px) 288px, (max-width: 1280px) 320px, 384px"
                  priority
                  quality={90}
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAn/xAAeEAABBAIDAQAAAAAAAAAAAAABAAIDBAURITFBYf/EABUBAQEAAAAAAAAAAAAAAAAAAAME/8QAGhEAAgMBAQAAAAAAAAAAAAAAAAECAxEhMf/aAAwDAQACEQMRAD8Ao+ytrPW1qzLluTJSTamiY53BJA0D4iIlrodkW2f/2Q=="
                />
              </motion.div>
            </motion.div>
            
            {/* Right Name - hidden on small screens */}
            <motion.h1 
              className="hero-name text-foreground parallax hidden md:block"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
            >
              Bishop
            </motion.h1>
          </div>

          {/* Mobile Name - Shown only on small screens */}
          <motion.h1 
            className="hero-name text-foreground text-center mt-4 sm:mt-6 md:hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            Olive Bishop
          </motion.h1>

          {/* Value Proposition - Below hero name */}
          <motion.p
            className="text-center mt-4 sm:mt-6 md:mt-8 text-foreground/60 body-base max-w-md mx-auto px-4"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4, ease: [0.16, 1, 0.3, 1] }}
          >
            I build high-performance web platforms that help businesses grow, convert, and scale.
          </motion.p>

          {/* CTA — visible on small/medium screens, hidden on lg+ */}
          <div className="block lg:hidden mt-6 sm:mt-8">
            <motion.button
              onClick={() => setDrawerOpen(true)}
              className="cta-primary"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.6, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start a Project
              <HugeiconsArrowUpRight className="w-4 h-4" />
            </motion.button>
          </div>
        </div>

        {/* Mobile Bottom Bar — social links, centered, only on small screens */}
        <motion.div 
          className="relative z-10 flex md:hidden flex-col items-center gap-4 px-5 pb-8 pt-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-primary text-[11px] uppercase tracking-[0.15em] font-medium">
            IAM SOCIAL :)
          </p>
          <div className="flex items-center gap-3">
            {[
              { href: 'https://github.com/olivebishop', icon: HugeiconsGithub, label: 'GitHub' },
              { href: 'https://www.instagram.com/rhymer_ke/', icon: HugeiconsInstagram, label: 'Instagram' },
              { href: 'https://x.com/olivebishop_dev', icon: HugeiconsNewTwitter, label: 'Twitter' },
              { href: 'https://www.linkedin.com/in/olivebishop/', icon: HugeiconsLinkedin02, label: 'LinkedIn' },
            ].map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-foreground/20 flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300 group"
                aria-label={social.label}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  duration: 0.5, 
                  delay: 1.9 + index * 0.1,
                  type: 'spring',
                  stiffness: 200,
                  damping: 15
                }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <social.icon className="w-4 h-4 text-foreground group-hover:text-primary-foreground transition-colors" />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Desktop Social Links — absolute positioned, hidden on mobile */}
        <motion.div 
          className="absolute left-8 md:left-16 bottom-16 md:bottom-32 hidden md:block"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.p 
            className="text-primary text-xs uppercase tracking-[0.15em] font-medium mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.7 }}
          >
            IAM SOCIAL :)
          </motion.p>
          <div className="flex items-center gap-4">
            {[
              { href: 'https://github.com/olivebishop', icon: HugeiconsGithub, label: 'GitHub' },
              { href: 'https://www.instagram.com/rhymer_ke/', icon: HugeiconsInstagram, label: 'Instagram' },
              { href: 'https://x.com/olivebishop_dev', icon: HugeiconsNewTwitter, label: 'Twitter' },
              { href: 'https://www.linkedin.com/in/olivebishop/', icon: HugeiconsLinkedin02, label: 'LinkedIn' },
            ].map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 md:w-11 md:h-11 border border-foreground/20 flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300 group"
                aria-label={social.label}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  duration: 0.5, 
                  delay: 1.8 + index * 0.1,
                  type: 'spring',
                  stiffness: 200,
                  damping: 15
                }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <social.icon className="w-5 h-5 text-foreground group-hover:text-primary-foreground transition-colors" />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Desktop Services & CTA — absolute positioned, hidden on mobile */}
        <motion.div 
          className="absolute right-8 md:right-16 bottom-16 md:bottom-32 text-right hidden md:block"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div 
            className="flex items-start gap-4 mb-4"
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            >
              <Sparkles className="text-primary w-7 h-7 md:w-8 md:h-8" />
            </motion.div>
            <div className="text-xs text-foreground/40 uppercase tracking-[0.12em] -rotate-12 origin-bottom-left">
              Click click
            </div>
          </motion.div>
          <motion.ul 
            className="space-y-1.5 text-[0.9375rem] text-foreground/90"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.7 }}
          >
            <li className="tracking-[-0.01em]">Software Engineer</li>
          </motion.ul>
          <motion.button
            onClick={() => setDrawerOpen(true)}
            className="cta-primary mt-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.9, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start a Project
            <HugeiconsArrowUpRight className="w-5 h-5" />
          </motion.button>
        </motion.div>

      </section>

      {/* Project Drawer */}
      <AnimatePresence>
        <ProjectDrawer isOpen={drawerOpen} onClose={() => setDrawerOpen(false)} />
      </AnimatePresence>

      {/* Brands Section */}
      <Brands />

      {/* Selected Works Section */}
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
            className="hidden sm:inline-flex text-[0.8125rem] uppercase tracking-[0.12em] text-foreground/50 hover:text-primary transition-colors font-medium"
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
            whileHover={{ borderColor: 'rgba(var(--primary), 0.3)' }}
          >
            <motion.div 
              className="relative hidden sm:block aspect-[9/4] overflow-hidden group bg-muted/50"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
            >
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
                className="inline-flex items-center gap-2 text-sm font-medium link-underline hover:text-primary transition-colors text-foreground mt-2"
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
            whileHover={{ borderColor: 'rgba(var(--primary), 0.3)' }}
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
                className="inline-flex items-center gap-2 text-sm font-medium link-underline hover:text-primary transition-colors mt-2"
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
              className="relative hidden sm:block order-1 lg:order-2 aspect-[9/4] overflow-hidden group bg-muted/50"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
            >
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
            </motion.div>
          </motion.article>

          {/* Project 3: Crow Studios */}
          <motion.article 
            className="grid lg:grid-cols-2 gap-0 rounded-sm overflow-hidden border border-border/60 bg-background/60 backdrop-blur-sm depth-card transition-shadow duration-300 hover:depth-elevated"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ borderColor: 'rgba(var(--primary), 0.3)' }}
          >
            <motion.div 
              className="relative hidden sm:block aspect-[9/4] overflow-hidden group bg-muted/50"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
            >
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
                className="inline-flex items-center gap-2 text-sm font-medium link-underline hover:text-primary transition-colors text-foreground mt-2"
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
            whileHover={{ borderColor: 'rgba(var(--primary), 0.3)' }}
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
                className="inline-flex items-center gap-2 text-sm font-medium link-underline hover:text-primary transition-colors mt-2"
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
              className="relative hidden sm:block order-1 lg:order-2 aspect-[9/4] overflow-hidden group bg-muted/50"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
            >
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
            </motion.div>
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
            className="cta-secondary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Work
            <HugeiconsArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </motion.a>
        </motion.div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />
    </div>
  );
}
