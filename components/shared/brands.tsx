'use client';
import { brands } from "@/data/brands";
import { motion } from 'motion/react';
import Image from 'next/image';

export default function Brands() {
  return (
    <motion.section 
      className="py-20 sm:py-24 md:py-28 lg:py-32 bg-background"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-16">
        <div className="flex flex-col gap-10 sm:gap-14">
          {/* Top Section: Headline — Clear value proposition */}
          <div className="space-y-6 sm:space-y-8">
            {/* Headline */}
            <motion.h2 
              className="text-xl sm:text-2xl md:text-3xl lg:text-[2.25rem] font-normal leading-[1.2] tracking-[-0.02em] text-foreground max-w-5xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              High-performance web platforms & AI-enabled internal systems for growing tech and service businesses.
            </motion.h2>
          </div>

          {/* Additional Info - Trust indicators */}
          <motion.div 
            className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-8 lg:gap-12 body-sm text-foreground/50"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.35 }}
          >
            <p className="text-center sm:text-left">+ Worked with startups across Kenya, US & Europe</p>
            <div className="flex flex-col gap-1.5 text-[0.8125rem]">
              <p>Accepting 1–2 new system builds per month</p>
              <p className="text-foreground/40">Systems • Platforms • Automation</p>
            </div>
          </motion.div>

          {/* Logo Grid - All 6 logos in one row with boxes */}
          <motion.div 
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-1"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {brands.map((brand, index) => (
              <motion.a
                key={brand.name}
                href={brand.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${brand.name} (opens in new tab)`}
                className="border border-border/50 bg-muted p-3 sm:p-6 md:p-8 flex items-center justify-center min-h-[80px] sm:min-h-[120px] md:min-h-[140px] overflow-hidden group sm:aspect-square depth-ambient transition-shadow duration-300 hover:depth-card outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                style={{ backgroundColor: 'oklch(var(--muted))' }}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.05, zIndex: 10 }}
              >
                {brand.logo ? (
                  <div className="relative w-full h-full flex items-center justify-center pointer-events-none">
                    <Image
                      src={brand.logo}
                      alt=""
                      width={100}
                      height={50}
                      className="max-w-[70%] max-h-[50%] sm:max-w-[80%] sm:max-h-[60%] object-contain"
                      loading="eager"
                      quality={80}
                    />
                  </div>
                ) : (
                  <span className="text-foreground/70 text-sm sm:text-[0.9375rem] font-medium tracking-[-0.01em]">
                    {brand.name}
                  </span>
                )}
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
