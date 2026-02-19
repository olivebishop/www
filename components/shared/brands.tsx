'use client';
import { brands } from "@/data/brands";

export default function Brands() {
  // Double the brands array for seamless infinite scroll
  const duplicatedBrands = [...brands, ...brands];

  return (
    <section className="py-8 sm:py-10 overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-8 sm:gap-12">
          {/* Left text */}
          <p className="text-muted-foreground text-xs sm:text-sm tracking-wide flex-shrink-0 max-w-[140px] sm:max-w-none leading-relaxed">
            Brands and companies I have worked with
          </p>

          {/* Marquee Container */}
          <div className="relative flex-1 overflow-hidden">
            {/* Left fade gradient */}
            <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
            
            {/* Right fade gradient */}
            <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

            {/* Scrolling brands */}
            <div className="flex gap-8 sm:gap-12 items-center animate-marquee">
              {duplicatedBrands.map((brand, index) => (
                <span
                  key={`${brand.name}-${index}`}
                  className="flex-shrink-0 text-foreground/80 text-sm sm:text-base font-medium tracking-tight whitespace-nowrap"
                >
                  {brand.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
