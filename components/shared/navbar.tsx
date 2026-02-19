'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Navigation() {
  const pathname = usePathname();
  
  const isActive = (path: string) => {
    if (path === '/') {
      return pathname === '/';
    }
    return pathname?.startsWith(path);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 md:px-12 py-3 sm:py-4 bg-background/80 backdrop-blur-sm border-b border-border/10">
      <div className={`flex flex-wrap items-center justify-between gap-y-3 ${pathname === '/' ? '' : 'lg:grid lg:grid-cols-3 lg:flex-nowrap'}`}>
        {/* Left Navigation */}
        <div className="flex items-center gap-3 sm:gap-4 md:gap-6 lg:gap-8 xl:gap-16">
          <Link
            href="/about"
            className={`nav-link ${isActive('/about') ? 'active text-primary' : 'text-foreground'}`}
          >
            <span className="text-sm sm:text-base md:text-lg lg:text-xl">Info</span>
            <span className="hidden xl:block text-[10px] uppercase tracking-wider text-muted-foreground mt-0.5">About me</span>
          </Link>
          
          <Link
            href="/work"
            className={`nav-link ${isActive('/work') ? 'active text-primary' : 'text-foreground'}`}
          >
            <span className="text-sm sm:text-base md:text-lg lg:text-xl">Work</span>
            <span className="hidden xl:block text-[10px] uppercase tracking-wider text-muted-foreground mt-0.5">Some cases</span>
          </Link>
        </div>

        {/* Center Navigation - Home */}
        {pathname !== '/' && (
          <div className="hidden lg:flex justify-center">
            <Link
              href="/"
              className="nav-link text-foreground"
            >
              <span className="text-sm sm:text-base md:text-lg lg:text-xl">Home</span>
              <span className="hidden xl:block text-[10px] uppercase tracking-wider text-muted-foreground mt-0.5">Main page</span>
            </Link>
          </div>
        )}

        {/* Right Navigation */}
        <div className="flex items-center justify-end gap-3 sm:gap-4 md:gap-6 lg:gap-8 xl:gap-16">
          <Link
            href="/workflow"
            className={`nav-link ${isActive('/workflow') ? 'active text-primary' : 'text-foreground'}`}
          >
            <span className="text-sm sm:text-base md:text-lg lg:text-xl">Workflow</span>
            <span className="hidden xl:block text-[10px] uppercase tracking-wider text-muted-foreground mt-0.5">All the processes</span>
          </Link>
          
          <Link
            href="/contact"
            className={`nav-link ${isActive('/contact') ? 'active text-primary' : 'text-foreground'}`}
          >
            <span className="text-sm sm:text-base md:text-lg lg:text-xl">Contact me</span>
            <span className="hidden xl:block text-[10px] uppercase tracking-wider text-muted-foreground mt-0.5">For any collaborations</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}