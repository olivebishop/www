'use client';

import { brands } from '@/data/brands';
import { motion } from 'motion/react';
import Image from 'next/image';

type BrandsProps = {
  id?: string;
};

export default function Brands({ id }: BrandsProps) {
  return (
    <motion.section
      id={id}
      className="bg-background"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="px-5 sm:px-8 md:px-12 py-8 sm:py-10 md:py-12">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-8 mb-8 sm:mb-10">
          <p className="text-[0.8125rem] sm:text-sm text-foreground/50 tracking-[-0.01em]">
            + Worked with startups across Kenya, US &amp; Europe
          </p>
          <div className="flex flex-col gap-1 sm:items-end sm:text-right text-[0.8125rem] sm:text-sm text-foreground/50 tracking-[-0.01em]">
            <p>Accepting 1–2 new system builds per month</p>
            <p className="text-foreground/35">Systems • Platforms • Automation</p>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 divide-x divide-y divide-white/[0.08] border border-white/[0.08] sm:divide-y-0">
          {brands.map((brand, index) => (
            <motion.a
              key={brand.name}
              href={brand.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${brand.name} (opens in new tab)`}
              className="group flex items-center justify-center bg-white/[0.03] px-6 py-9 sm:px-7 sm:py-10 md:px-8 md:py-11 lg:min-h-[7.25rem] transition-colors hover:bg-white/[0.06] outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-foreground/25"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.05 + index * 0.05 }}
            >
              {brand.logo ? (
                <div className="flex w-full items-center justify-center opacity-50 grayscale transition-all duration-300 group-hover:opacity-85 group-hover:grayscale-0">
                  <Image
                    src={brand.logo}
                    alt=""
                    width={160}
                    height={64}
                    className="h-9 w-auto max-h-10 sm:h-10 sm:max-h-11 md:h-11 md:max-h-12 lg:h-12 lg:max-h-[3.25rem] max-w-[min(100%,9rem)] sm:max-w-[min(100%,10rem)] lg:max-w-[min(100%,11rem)] object-contain object-center"
                    loading="lazy"
                    quality={85}
                  />
                </div>
              ) : (
                <span className="text-center text-[0.8125rem] font-medium tracking-[-0.01em] text-foreground/50 group-hover:text-foreground/80 transition-colors">
                  {brand.name}
                </span>
              )}
            </motion.a>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
