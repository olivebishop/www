'use client';
import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { Sparkles } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';
import Brands from './brands';
import { HugeiconsGithub, HugeiconsInstagram, HugeiconsNewTwitter, HugeiconsLinkedin02 } from './icons';

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
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
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-24 sm:pt-28 md:pt-32"
      >
        {/* Background Circle */}
        <motion.div 
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
          style={{ scale: circleScale, opacity: circleOpacity }}
        >
          <motion.div 
            className="w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] rounded-full border border-border/50"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          />
        </motion.div>

        {/* Horizontal Line */}
        <motion.div 
          className="absolute left-0 right-0 top-1/2 h-px bg-border/50"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        />

        {/* Number Indicators */}
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-8 md:px-16 pointer-events-none">
          {['01', '02', '03', '04', '05', '06', '07', '08', '09'].map((num, index) => (
            <motion.span 
              key={num} 
              className="text-xs text-muted-foreground font-light"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.05, ease: [0.16, 1, 0.3, 1] }}
            >
              {num}
            </motion.span>
          ))}
        </div>

        {/* Main Content */}
        <div className="relative z-10 w-full px-4 sm:px-6 md:px-8">
          {/* Name + Image */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 lg:gap-12">
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
              className="relative mx-4 md:mx-6 lg:mx-8 px-2 sm:px-4 md:px-8 lg:px-12"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <motion.div 
                className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96 bg-muted rounded-sm overflow-hidden shadow-2xl"
                whileHover={{ scale: 1.02, rotate: 0.5 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              >
                <Image 
                  src="/images/hero.jpeg" 
                  alt="Portfolio Preview" 
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 224px, (max-width: 768px) 256px, (max-width: 1024px) 288px, (max-width: 1280px) 320px, 384px"
                  priority
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
        </div>

        {/* Social Links */}
        <motion.div 
          className="absolute left-4 sm:left-8 md:left-16 bottom-8 sm:bottom-16 md:bottom-32"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.p 
            className="text-primary text-[10px] sm:text-xs uppercase tracking-wider mb-3 sm:mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.7 }}
          >
            IAM SOCIAL :)
          </motion.p>
          <div className="flex items-center gap-3 sm:gap-4">
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
                className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 border border-foreground/20 flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300 group"
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
                <social.icon className="w-4 h-4 sm:w-5 sm:h-5 text-foreground group-hover:text-primary-foreground transition-colors" />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Services & Interactive Elements */}
        <motion.div 
          className="absolute right-4 sm:right-8 md:right-16 bottom-8 sm:bottom-16 md:bottom-32 text-right"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div 
            className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4"
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            >
              <Sparkles className="text-primary w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
            </motion.div>
            <div className="text-[10px] sm:text-xs text-muted-foreground uppercase tracking-wider -rotate-12 origin-bottom-left">
              Click click
            </div>
          </motion.div>
          <motion.ul 
            className="space-y-1 text-xs sm:text-sm text-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.7 }}
          >
            <li>Software Engineer</li>
          </motion.ul>
        </motion.div>

      </section>

      {/* Brands Section */}
      <Brands />

      {/* Selected Works Section */}
      <section className="py-20 sm:py-24 bg-background">
        <motion.div 
          className="px-6 sm:px-8 md:px-16 mb-8 sm:mb-12 flex items-baseline justify-between gap-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div>
            <p className="text-[11px] sm:text-xs uppercase tracking-[0.25em] text-muted-foreground">
              Selected works
            </p>
            <p className="mt-2 text-xs sm:text-sm text-muted-foreground/80 max-w-xs">
              A snapshot of products and collaborations I&apos;ve been building recently.
            </p>
          </div>
          <motion.a
            href="/work"
            className="hidden sm:inline-flex text-xs uppercase tracking-[0.18em] text-muted-foreground hover:text-primary transition-colors"
            whileHover={{ scale: 1.05, x: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            View all work +
          </motion.a>
        </motion.div>

        <div className="space-y-10 sm:space-y-16 px-6 sm:px-8 md:px-16">
          {/* Project 1: Event Parlour */}
          <motion.article 
            className="grid lg:grid-cols-2 gap-0 rounded-sm overflow-hidden border border-border/60 bg-background/60 backdrop-blur-sm"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ borderColor: 'rgba(var(--primary), 0.3)' }}
          >
            <motion.div 
              className="relative hidden sm:block h-64 sm:h-80 md:h-[420px] lg:h-[70vh] overflow-hidden group bg-muted/30"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
            >
              <Image 
                src="/images/project2.png" 
                alt="Event Parlour" 
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </motion.div>
            <div className="p-6 sm:p-8 md:p-12 flex flex-col justify-center gap-3 sm:gap-4">
              <motion.p 
                className="text-[11px] sm:text-xs uppercase tracking-[0.2em] text-muted-foreground"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Startup project
              </motion.p>
              <motion.h3 
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight text-foreground"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              >
                Event Parlour
              </motion.h3>
              <motion.p 
                className="text-sm sm:text-base text-foreground/80"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Event and ticketing platform helping creators run digital and in-person experiences.
              </motion.p>
              <motion.p 
                className="text-xs sm:text-sm text-foreground/70 max-w-md"
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
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium link-underline hover:text-primary transition-colors text-foreground mt-2"
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

          {/* Project 2: Brinex */}
          <motion.article 
            className="grid lg:grid-cols-2 gap-0 rounded-sm overflow-hidden border border-border/60 bg-background/60 backdrop-blur-sm"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ borderColor: 'rgba(var(--primary), 0.3)' }}
          >
            <div className="order-2 lg:order-1 p-6 sm:p-8 md:p-12 flex flex-col justify-center gap-3 sm:gap-4">
              <motion.p 
                className="text-[11px] sm:text-xs uppercase tracking-[0.2em] text-muted-foreground"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Freelance
              </motion.p>
              <motion.h3 
                className="text-3xl sm:text-4xl md:text-5xl leading-tight text-foreground"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                Brinex Tech
              </motion.h3>
              <motion.p 
                className="text-xs sm:text-sm uppercase tracking-[0.18em] text-muted-foreground mb-1"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                Brand / Company website
              </motion.p>
              <motion.p 
                className="text-sm sm:text-base text-foreground/80 max-w-md"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                A clean, responsive marketing site for a technology company, focused on clarity and trust.
              </motion.p>
              <motion.p 
                className="text-xs sm:text-sm text-foreground/70 max-w-md"
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
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium link-underline hover:text-primary transition-colors mt-2"
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
              className="relative hidden sm:block order-1 lg:order-2 h-64 sm:h-80 md:h-[420px] lg:h-[70vh] overflow-hidden group bg-muted/30"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
            >
              <Image 
                src="/images/project1.png" 
                alt="Brinex Tech" 
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </motion.div>
          </motion.article>
        </div>
      </section>
    </div>
  );
}
