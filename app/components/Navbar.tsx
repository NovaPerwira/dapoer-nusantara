'use client';
import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export type NavPage = 'home' | 'menu' | 'experiences' | 'about' | 'promo' | 'blog';

const NavLogo = () => (
  <div className="flex items-center gap-3 mr-6">
    <div className="w-9 h-9 rounded-full border border-white/80 flex items-center justify-center relative">
      <span className="italic font-serif text-sm text-white/90 mr-1">N</span>
      <span className="absolute left-2 italic font-serif text-sm text-white/90">D</span>
    </div>
    <div className="flex flex-col uppercase tracking-widest text-[9px] leading-tight text-white/90 font-serif">
      <span>Dapoer</span>
      <span>Nusantara</span>
    </div>
  </div>
);

const navLinks: { label: string; href: string; page: NavPage }[] = [
  { label: 'Home',          href: '/',             page: 'home' },
  { label: 'Menu',          href: '/menu',          page: 'menu' },
  { label: 'Experiences',   href: '/#experiences',  page: 'experiences' },
  { label: 'About',         href: '/about',         page: 'about' },
  { label: 'Special Promo', href: '/special-promo', page: 'promo' },
  { label: 'Blog',          href: '/#blog',         page: 'blog' },
];

export default function Navbar({ activePage = 'home' }: { activePage?: NavPage }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.25 }}
      className="absolute top-0 left-0 right-0 z-50 w-full px-6 py-6 md:py-8 flex justify-center"
    >
      <div className="bg-black/20 backdrop-blur-md border border-white/20 p-2 pl-6 pr-2 flex items-center justify-between w-full max-w-5xl rounded-full shadow-2xl relative">
        <NavLogo />

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6 text-[13px] text-white/90 font-medium px-4">
          {navLinks.map((link) =>
            link.page === activePage ? (
              <a key={link.page} href={link.href} className="border border-white/40 rounded-full px-5 py-1.5 text-white">
                {link.label}
              </a>
            ) : (
              <a key={link.page} href={link.href} className="hover:text-white transition-colors">
                {link.label}
              </a>
            )
          )}
        </div>

        {/* Reservation Button */}
        <motion.a
          href="/special-promo#reservation"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          className="bg-[#451A14] text-[#EBE0D3] rounded-full px-6 py-2.5 text-[13px] font-semibold hover:bg-[#31110d] transition-colors ml-4 hidden md:block"
        >
          Reservasi
        </motion.a>

        {/* Mobile Hamburger */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsMenuOpen((open) => !open)}
          className="md:hidden w-10 h-10 border border-white/30 rounded-full text-white flex items-center justify-center ml-2"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
        >
          <span className="text-lg leading-none">{isMenuOpen ? 'x' : '='}</span>
        </motion.button>

        {/* Mobile Dropdown */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.96 }}
              className="absolute top-full right-0 mt-3 w-56 border border-white/20 bg-[#451A14]/95 backdrop-blur-md p-3 shadow-2xl md:hidden rounded-2xl"
            >
              {navLinks.map((link) => (
                <a
                  key={link.page}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={link.page === activePage ? 'block px-4 py-3 text-xs uppercase tracking-widest text-white bg-white/10 rounded-xl' : 'block px-4 py-3 text-xs uppercase tracking-widest text-white/80 hover:bg-white/10 hover:text-white transition-colors rounded-xl'}
                >
                  {link.label}
                </a>
              ))}
              <div className="border-t border-white/20 mt-2 pt-2">
                <a href="#" onClick={() => setIsMenuOpen(false)} className="block px-4 py-3 text-xs uppercase tracking-widest text-[#EBE0D3] font-bold hover:bg-white/10 rounded-xl transition-colors">
                  Reservasi
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
