'use client';
import { motion } from 'motion/react';

export function Workflow() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-24 md:py-32 px-8 md:px-16">
        <motion.div 
          className="max-w-5xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="page-title">
            It&apos;s all about my <em className="text-primary">design process</em>
          </h1>
        </motion.div>
      </section>

      {/* Process Cards Section */}
      <section className="py-12 md:py-16 px-8 md:px-16 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Learn Card */}
            <motion.div 
              className="border border-border/50 p-6 md:p-8 hover:border-primary/50 transition-colors"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="mb-6">
                <motion.span 
                  className="text-primary text-sm"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, type: 'spring', stiffness: 200 }}
                >
                  A.
                </motion.span>
                <motion.h2 
                  className="text-4xl md:text-5xl mt-2 font-normal"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                >
                  Learn
                </motion.h2>
              </div>
              
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <motion.h3 
                    className="text-lg md:text-xl mb-3 font-normal"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                  >
                    Briefing
                  </motion.h3>
                  <motion.ul 
                    className="space-y-1.5 text-sm text-foreground/80"
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
                    className="text-lg md:text-xl mb-3 font-normal"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.9 }}
                  >
                    Market
                  </motion.h3>
                  <motion.ul 
                    className="space-y-1.5 text-sm text-foreground/80"
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
              className="border border-border/50 p-6 md:p-8 hover:border-primary/50 transition-colors"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="mb-6">
                <motion.span 
                  className="text-primary text-sm"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2, type: 'spring', stiffness: 200 }}
                >
                  B.
                </motion.span>
                <motion.h2 
                  className="text-4xl md:text-5xl mt-2 font-normal"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                >
                  Think
                </motion.h2>
              </div>
              
              <motion.p 
                className="text-foreground/80 text-sm md:text-base leading-relaxed"
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
              className="border border-border/50 p-6 md:p-8 hover:border-primary/50 transition-colors md:col-span-2 lg:col-span-1"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="mb-6">
                <motion.span 
                  className="text-primary text-sm"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4, type: 'spring', stiffness: 200 }}
                >
                  C.
                </motion.span>
                <motion.h2 
                  className="text-4xl md:text-5xl mt-2 font-normal"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                >
                  Create
                </motion.h2>
              </div>
              
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  <motion.h3 
                    className="text-lg md:text-xl mb-3 font-normal"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.9 }}
                  >
                    Visual strategy
                  </motion.h3>
                  <motion.p 
                    className="text-foreground/80 text-sm md:text-base leading-relaxed"
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
                    className="text-lg md:text-xl mb-3 font-normal"
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
                        className="px-3 py-1 border border-border/50 rounded-none text-xs text-foreground/80"
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
                        whileHover={{ scale: 1.1, borderColor: 'var(--primary)' }}
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
      <section className="py-24 md:py-32 px-8 md:px-16 bg-background">
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
            className="text-foreground/80 text-lg leading-relaxed max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            I truly believe in the power of a strong business relationship and years-long collaboration. 
            Success is not a 1-day phenomenon it takes a lot of time and joint effort.
          </motion.p>
        </motion.div>
      </section>
    </div>
  );
}
