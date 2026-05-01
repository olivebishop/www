'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HugeiconsArrowUpRight } from './icons';
import ProjectDrawer from './project-drawer';
import { CalBookingDrawer, CalBookingPreload } from './cal-booking-drawer';

export function Workflow() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [callDrawerOpen, setCallDrawerOpen] = useState(false);
  const [shouldPreloadCal, setShouldPreloadCal] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-28 sm:pt-32 md:pt-36 pb-14 sm:pb-20 md:pb-24 px-5 sm:px-8 md:px-16">
        <motion.div 
          className="max-w-5xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="page-title">
            It&apos;s all about my <em className="text-primary">design process</em>
          </h1>
          <motion.p 
            className="mt-6 body-lg text-foreground/50 max-w-lg mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            A proven approach that turns ideas into products that solve real problems and deliver results.
          </motion.p>
        </motion.div>
      </section>

      {/* Process Cards Section */}
      <section className="py-12 md:py-20 px-5 sm:px-8 md:px-16 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Learn Card */}
            <motion.div 
              className="relative overflow-hidden rounded-2xl border border-white/12 bg-[#101010] p-7 md:p-10 transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -2 }}
            >
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgba(255,125,72,0.16)_0%,rgba(255,125,72,0.07)_24%,rgba(255,125,72,0.02)_42%,transparent_58%)]" />
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_92%_82%,rgba(255,125,72,0.08)_0%,transparent_36%)]" />
              <div className="mb-8">
                <motion.span 
                  className="relative text-primary text-sm font-medium"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, type: 'spring', stiffness: 200 }}
                >
                  A.
                </motion.span>
                <motion.h2 
                  className="relative font-display text-4xl md:text-5xl mt-3 font-normal tracking-[-0.02em] text-white/95"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                >
                  Learn
                </motion.h2>
              </div>
              
              <div className="relative space-y-7">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <motion.h3 
                    className="text-lg md:text-xl mb-3 font-normal tracking-[-0.01em] text-white/90"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                  >
                    Briefing
                  </motion.h3>
                  <motion.ul 
                    className="space-y-2 body-sm text-white/65"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                  >
                    {['Research', 'Project Goals', 'Target Audience'].map((item, index) => (
                      <motion.li
                        key={item}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                      >
                        • {item}
                      </motion.li>
                    ))}
                  </motion.ul>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  <motion.h3 
                    className="text-lg md:text-xl mb-3 font-normal tracking-[-0.01em] text-white/90"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.9 }}
                  >
                    Market
                  </motion.h3>
                  <motion.ul 
                    className="space-y-2 body-sm text-white/65"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 1 }}
                  >
                    {['Problem', 'User Needs', 'Product Objectives'].map((item, index) => (
                      <motion.li
                        key={item}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 1.1 + index * 0.1 }}
                      >
                        • {item}
                      </motion.li>
                    ))}
                  </motion.ul>
                </motion.div>
              </div>
            </motion.div>

            {/* Think Card */}
            <motion.div 
              className="relative overflow-hidden rounded-2xl border border-white/12 bg-[#101010] p-7 md:p-10 transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -2 }}
            >
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgba(255,125,72,0.16)_0%,rgba(255,125,72,0.07)_24%,rgba(255,125,72,0.02)_42%,transparent_58%)]" />
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_92%_82%,rgba(255,125,72,0.08)_0%,transparent_36%)]" />
              <div className="mb-8">
                <motion.span 
                  className="relative text-primary text-sm font-medium"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2, type: 'spring', stiffness: 200 }}
                >
                  B.
                </motion.span>
                <motion.h2 
                  className="relative font-display text-4xl md:text-5xl mt-3 font-normal tracking-[-0.02em] text-white/95"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                >
                  Think
                </motion.h2>
              </div>
              
              <motion.p 
                className="relative text-white/65 body-base leading-[1.8]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                My ultimate goal with every project is to come up with a solution-based design approach 
                to help my clients solve real cases and achieve business needs.
              </motion.p>
            </motion.div>

            {/* Create Card */}
            <motion.div 
              className="relative overflow-hidden rounded-2xl border border-white/12 bg-[#101010] p-7 md:p-10 transition-all duration-300 md:col-span-2 lg:col-span-1"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -2 }}
            >
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgba(255,125,72,0.16)_0%,rgba(255,125,72,0.07)_24%,rgba(255,125,72,0.02)_42%,transparent_58%)]" />
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_92%_82%,rgba(255,125,72,0.08)_0%,transparent_36%)]" />
              <div className="mb-8">
                <motion.span 
                  className="relative text-primary text-sm font-medium"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4, type: 'spring', stiffness: 200 }}
                >
                  C.
                </motion.span>
                <motion.h2 
                  className="relative font-display text-4xl md:text-5xl mt-3 font-normal tracking-[-0.02em] text-white/95"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                >
                  Create
                </motion.h2>
              </div>
              
              <div className="relative space-y-7">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  <motion.h3 
                    className="text-lg md:text-xl mb-3 font-normal tracking-[-0.01em] text-white/90"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.9 }}
                  >
                    Visual strategy
                  </motion.h3>
                  <motion.p 
                    className="text-white/65 body-base leading-[1.8]"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 1 }}
                  >
                    Every digital product must be aesthetically appealing, functional, robust, distinctive and memorable.
                  </motion.p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 1.1 }}
                >
                  <motion.h3 
                    className="text-lg md:text-xl mb-3 font-normal tracking-[-0.01em] text-white/90"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 1.2 }}
                  >
                    Stages
                  </motion.h3>
                  <motion.div 
                    className="flex flex-wrap gap-2"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 1.3 }}
                  >
                    {['UX architecture', 'Visual concepts', 'Interactions', 'Development', 'Testing'].map((item, index) => (
                      <motion.span 
                        key={item} 
                        className="px-3 py-1.5 border border-white/15 rounded-none text-[0.8125rem] text-white/60 tracking-[-0.01em]"
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ 
                          duration: 0.5, 
                          delay: 1.4 + index * 0.1,
                          type: 'spring',
                          stiffness: 200,
                          damping: 15
                        }}
                        whileHover={{ scale: 1.06, borderColor: 'rgba(var(--primary),0.45)' }}
                      >
                        {item}
                      </motion.span>
                    ))}
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Collaboration Section */}
      <section className="py-24 md:py-32 px-5 sm:px-8 md:px-16 bg-background">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.h2 
            className="section-title mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            Long-lasting Collaboration
          </motion.h2>
          
          <motion.p 
            className="text-foreground/60 body-lg leading-[1.8] max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            I truly believe in the power of a strong business relationship and years-long collaboration. 
            Success is not a 1-day phenomenon — it takes time, trust, and joint effort.
          </motion.p>
        </motion.div>
      </section>

      {/* CTA Section — Goal: Convert */}
      <section className="py-20 md:py-28 px-5 sm:px-8 md:px-16 bg-background border-t border-border/30">
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
            Convinced by the <em className="text-primary">process</em>?
          </motion.h2>
          <motion.p 
            className="body-lg text-foreground/50 mb-10 max-w-lg mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Let&apos;s put this process to work for your next project. Share your idea and I&apos;ll get back to you within 24 hours.
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
            <motion.button
              onClick={() => setCallDrawerOpen(true)}
              onMouseEnter={() => setShouldPreloadCal(true)}
              onFocus={() => setShouldPreloadCal(true)}
              onTouchStart={() => setShouldPreloadCal(true)}
              className="cta-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Book a Call
              <HugeiconsArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </motion.button>
          </motion.div>
        </motion.div>
      </section>

      {/* Project Drawer */}
      <AnimatePresence>
        <ProjectDrawer isOpen={drawerOpen} onClose={() => setDrawerOpen(false)} />
      </AnimatePresence>

      {/* Call Drawer */}
      <AnimatePresence>
        <CalBookingDrawer isOpen={callDrawerOpen} onClose={() => setCallDrawerOpen(false)} />
      </AnimatePresence>

      {/* Cal preloader: warm iframe before drawer opens */}
      <CalBookingPreload enabled={shouldPreloadCal && !callDrawerOpen} />
    </div>
  );
}
