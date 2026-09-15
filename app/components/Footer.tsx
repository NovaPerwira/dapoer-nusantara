import React from 'react';

import Link from 'next/link';

const colors = {
  beige:  '#EBE0D3',
  maroon: '#451A14',
  gold:   '#D4B895',
};

export default function Footer() {
  return (
    <>
      {/* Curved top transition into maroon footer */}
      <div className="w-full relative z-20 -mb-[1px]">
        <svg viewBox="0 0 1440 120" className="w-full block h-12 md:h-20 lg:h-28" preserveAspectRatio="none">
          <path d="M0,120 L1440,120 C960,0 480,0 0,120 Z" fill={colors.maroon} />
        </svg>
      </div>

      <footer className="bg-[#451A14] text-[#EBE0D3] pt-12 pb-10 px-6 relative z-20">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-10 md:gap-20">

          {/* Logo + Copyright */}
          <div className="flex flex-col justify-between">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full border border-[#EBE0D3]/80 flex items-center justify-center relative">
                <span className="italic font-serif text-2xl text-[#EBE0D3]/90 mr-1">N</span>
                <span className="absolute left-3.5 italic font-serif text-2xl text-[#EBE0D3]/90">D</span>
              </div>
              <div className="flex flex-col uppercase tracking-widest leading-tight text-[#EBE0D3] font-serif">
                <span className="text-xl">Dapoer</span>
                <span className="text-xl">Nusantara</span>
              </div>
            </div>
            <div className="text-[12px] opacity-70 mt-16 md:mt-auto pb-4">
              © 2026 Dapoer Nusantara
            </div>
          </div>

          {/* Right: Explore + Visit Us */}
          <div className="flex flex-col md:flex-row gap-16 md:gap-32 pb-4">

            {/* Explore Links */}
            <div>
              <h4 className="font-sans text-base mb-6 text-[#EBE0D3]">Explore</h4>
              <ul className="flex flex-col gap-3 text-sm font-semibold opacity-90">
                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                <li><Link href="/menu" className="hover:text-white transition-colors">Menu</Link></li>
                <li><Link href="/#experiences" className="hover:text-white transition-colors">Experiences</Link></li>
                <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
                <li><Link href="/special-promo" className="hover:text-white transition-colors">Special Promo</Link></li>
                <li><Link href="/#blog" className="hover:text-white transition-colors">Blog</Link></li>
              </ul>
            </div>

            {/* Visit Us + Social */}
            <div className="max-w-xs">
              <h4 className="font-sans text-base mb-6 text-[#EBE0D3]">Visit Us</h4>
              <p className="text-sm opacity-80 leading-relaxed mb-8">
                Sajian hangat, rempah pilihan, dan cerita dari berbagai penjuru Nusantara untuk dinikmati di satu meja.
              </p>

              <h4 className="font-sans text-base mb-6 text-[#EBE0D3]">Social</h4>
              <div className="flex gap-6">
                {/* Tripadvisor */}
                <a href="#" className="text-[#EBE0D3] hover:text-white hover:-translate-y-1 transition-all duration-300">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-5l-2.25 2.25-1.5-1.5L12 7l4.75 4.75-1.5 1.5L13 11.5v5h-2z"/></svg>
                </a>
                {/* Instagram */}
                <a href="#" className="text-[#EBE0D3] hover:text-white hover:-translate-y-1 transition-all duration-300">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                </a>
                {/* Facebook */}
                <a href="#" className="text-[#EBE0D3] hover:text-white hover:-translate-y-1 transition-all duration-300">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.312h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/></svg>
                </a>
                {/* TikTok */}
                <a href="#" className="text-[#EBE0D3] hover:text-white hover:-translate-y-1 transition-all duration-300">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 15.68a6.34 6.34 0 006.33 6.32 6.32 6.32 0 006.32-6.32V10a8.11 8.11 0 004.34 1.24V7.81a4.93 4.93 0 01-2.4-.12z"/></svg>
                </a>
              </div>
            </div>
          </div>

        </div>
      </footer>
    </>
  );
}
