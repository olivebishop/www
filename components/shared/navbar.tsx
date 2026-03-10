'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { MaterialSymbolsChessBishop2 } from './icons';

export function Navigation() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const isActive = (path: string) => {
    if (path === '/') {
      return pathname === '/';
    }
    return pathname?.startsWith(path);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navLinks = [
    { href: '/about', label: 'Info', subtitle: 'About me' },
    { href: '/work', label: 'Work', subtitle: 'Some cases' },
    { href: '/workflow', label: 'Workflow', subtitle: 'All the processes' },
    { href: '/contact', label: 'Contact me', subtitle: 'For any collaborations' },
  ];

  return (
    <>
      <motion.nav 
        className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 md:px-12 py-3 sm:py-4 bg-background/60 backdrop-blur-md border-b border-border/10"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className={`flex flex-wrap items-center justify-between gap-y-3 ${pathname === '/' ? '' : 'lg:grid lg:grid-cols-3 lg:flex-nowrap'}`}>
          {/* Left Navigation - Desktop */}
          <div className="hidden lg:flex items-center gap-3 sm:gap-4 md:gap-6 lg:gap-8 xl:gap-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Link
                href="/about"
                className={`nav-link ${isActive('/about') ? 'active text-primary' : 'text-foreground'}`}
              >
                <span className="text-sm sm:text-base md:text-lg lg:text-xl">Info</span>
                <span className="hidden xl:block text-[10px] uppercase tracking-wider text-muted-foreground mt-0.5">About me</span>
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Link
                href="/work"
                className={`nav-link ${isActive('/work') ? 'active text-primary' : 'text-foreground'}`}
              >
                <span className="text-sm sm:text-base md:text-lg lg:text-xl">Work</span>
                <span className="hidden xl:block text-[10px] uppercase tracking-wider text-muted-foreground mt-0.5">Some cases</span>
              </Link>
            </motion.div>
          </div>

          {/* Hamburger Menu Button - Mobile */}
          <div className="lg:hidden flex items-center justify-between w-full">
            {/* Bishop Icon */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2, type: 'spring', stiffness: 200 }}
            >
              <Link
                href="/"
                className="flex items-center"
                onClick={closeMenu}
              >
                <MaterialSymbolsChessBishop2 className="w-6 h-6 text-foreground hover:text-primary transition-colors" />
              </Link>
            </motion.div>

            {/* Hamburger Button */}
            <motion.button
              onClick={toggleMenu}
              className="p-2 -mr-2 text-foreground hover:text-primary transition-colors"
              aria-label="Toggle menu"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3, type: 'spring', stiffness: 200 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <AnimatePresence mode="wait">
                {isMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <X className="w-6 h-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <svg 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                    >
                      <path 
                        d="M5 8H13.75M5 12H19M10.25 16L19 16" 
                        stroke="currentColor" 
                        strokeWidth="1.5" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      />
                    </svg>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>

          {/* Center Navigation - Home - Desktop */}
          {pathname !== '/' && (
            <motion.div 
              className="hidden lg:flex justify-center"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4, type: 'spring', stiffness: 200 }}
            >
              <Link
                href="/"
                className="nav-link text-foreground"
              >
                <span className="text-sm sm:text-base md:text-lg lg:text-xl">Home</span>
                <span className="hidden xl:block text-[10px] uppercase tracking-wider text-muted-foreground mt-0.5">Main page</span>
              </Link>
            </motion.div>
          )}

          {/* Right Navigation - Desktop */}
          <div className="hidden lg:flex items-center justify-end gap-3 sm:gap-4 md:gap-6 lg:gap-8 xl:gap-16">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Link
                href="/workflow"
                className={`nav-link ${isActive('/workflow') ? 'active text-primary' : 'text-foreground'}`}
              >
                <span className="text-sm sm:text-base md:text-lg lg:text-xl">Workflow</span>
                <span className="hidden xl:block text-[10px] uppercase tracking-wider text-muted-foreground mt-0.5">All the processes</span>
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Link
                href="/contact"
                className={`nav-link ${isActive('/contact') ? 'active text-primary' : 'text-foreground'}`}
              >
                <span className="text-sm sm:text-base md:text-lg lg:text-xl">Contact me</span>
                <span className="hidden xl:block text-[10px] uppercase tracking-wider text-muted-foreground mt-0.5">For any collaborations</span>
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
            onClick={closeMenu}
          >
            <motion.div 
              className="absolute inset-0 bg-background/60 backdrop-blur-md"
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '100%', opacity: 0 }}
            transition={{ 
              type: 'spring', 
              damping: 25, 
              stiffness: 200,
              duration: 0.5
            }}
            className="fixed top-0 right-0 z-50 h-full w-80 max-w-[85vw] bg-background/80 backdrop-blur-xl border-l border-border/30 shadow-2xl lg:hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/85 to-background/90" />
            <div className="relative flex flex-col h-full">
              {/* Menu Header */}
              <motion.div 
                className="flex items-center justify-between p-6 border-b border-border/30 bg-background/40 backdrop-blur-sm"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <h2 className="text-lg font-normal text-foreground">Menu</h2>
                <motion.button
                  onClick={closeMenu}
                  className="p-2 text-foreground hover:text-primary transition-colors"
                  aria-label="Close menu"
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <X className="w-6 h-6" />
                </motion.button>
              </motion.div>

              {/* Menu Links */}
              <nav className="flex-1 overflow-y-auto p-6">
                <div className="space-y-1">
                  {pathname !== '/' && (
                    <motion.div
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      <Link
                        href="/"
                        onClick={closeMenu}
                        className={`block px-4 py-3 rounded-sm text-base font-normal transition-colors hover:bg-muted/30 ${
                          isActive('/') ? 'text-primary bg-primary/10' : 'text-foreground hover:text-primary'
                        }`}
                      >
                        <span>Home</span>
                        <span className="block text-xs uppercase tracking-wider text-muted-foreground mt-1">Main page</span>
                      </Link>
                    </motion.div>
                  )}
                  
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.href}
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.25 + index * 0.1 }}
                    >
                      <Link
                        href={link.href}
                        onClick={closeMenu}
                        className={`block px-4 py-3 rounded-sm text-base font-normal transition-colors hover:bg-muted/30 ${
                          isActive(link.href) ? 'text-primary bg-primary/10' : 'text-foreground hover:text-primary'
                        }`}
                      >
                        <span>{link.label}</span>
                        <span className="block text-xs uppercase tracking-wider text-muted-foreground mt-1">{link.subtitle}</span>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
