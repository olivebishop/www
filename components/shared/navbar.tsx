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
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-6 bg-background/80 backdrop-blur-sm">
      <div className="grid grid-cols-3 items-center">
        {/* Left Navigation */}
        <div className="flex items-center gap-8 md:gap-16">
          <Link
            href="/about"
            className={`nav-link ${isActive('/about') ? 'text-primary' : 'text-foreground'}`}
          >
            <span className="text-lg md:text-xl">Info</span>
            <span className="block text-[10px] uppercase tracking-wider text-muted-foreground mt-0.5">About me</span>
          </Link>
          
          <Link
            href="/work"
            className={`nav-link ${isActive('/work') ? 'text-primary' : 'text-foreground'}`}
          >
            <span className="text-lg md:text-xl">Work</span>
            <span className="block text-[10px] uppercase tracking-wider text-muted-foreground mt-0.5">Some cases</span>
          </Link>
        </div>

        {/* Center Navigation - Home */}
        {pathname !== '/' && (
          <div className="flex justify-center">
            <Link
              href="/"
              className="nav-link text-foreground"
            >
              <span className="text-lg md:text-xl">Home</span>
              <span className="block text-[10px] uppercase tracking-wider text-muted-foreground mt-0.5">Main page</span>
            </Link>
          </div>
        )}

        {/* Right Navigation */}
        <div className="flex items-center justify-end gap-8 md:gap-16">
          <Link
            href="/workflow"
            className={`nav-link ${isActive('/workflow') ? 'text-primary' : 'text-foreground'}`}
          >
            <span className="text-lg md:text-xl">Workflow</span>
            <span className="block text-[10px] uppercase tracking-wider text-muted-foreground mt-0.5">All the processes</span>
          </Link>
          
          <Link
            href="/contact"
            className={`nav-link ${isActive('/contact') ? 'text-primary' : 'text-foreground'}`}
          >
            <span className="text-lg md:text-xl">Contact me</span>
            <span className="block text-[10px] uppercase tracking-wider text-muted-foreground mt-0.5">For any collaborations</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}