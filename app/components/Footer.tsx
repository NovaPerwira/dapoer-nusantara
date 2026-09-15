import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#3B1910] text-[#FDF5E6] pt-16 pb-8 px-6 md:px-12 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
        <div className="flex flex-col justify-between">
          <div className="flex items-center space-x-3 mb-8">
            <div className="w-12 h-12 rounded-full border border-[#FDF5E6] flex items-center justify-center text-xl font-bold font-serif">
              DN
            </div>
            <span className="text-2xl tracking-widest font-light uppercase font-serif leading-tight">
              Dapoer<br />Nusantara
            </span>
          </div>
          <div className="text-sm opacity-70 mt-auto pt-10">Copyright...</div>
        </div>

        <div className="flex flex-col space-y-4 text-sm tracking-wide">
          <h3 className="uppercase opacity-70 mb-2 font-semibold">Explore</h3>
          <Link href="/" className="hover:opacity-70 transition-opacity">Home</Link>
          <Link href="/menu" className="hover:opacity-70 transition-opacity">Menu</Link>
          <Link href="/experience" className="hover:opacity-70 transition-opacity">Experiences</Link>
          <Link href="/about" className="hover:opacity-70 transition-opacity">About</Link>
          <Link href="/special-promo" className="hover:opacity-70 transition-opacity">Special</Link>
          <Link href="/special-promo" className="hover:opacity-70 transition-opacity">Promo</Link>
          <Link href="/blog" className="hover:opacity-70 transition-opacity">Blog</Link>
        </div>

        <div className="flex flex-col">
          <h3 className="uppercase opacity-70 mb-4 text-sm font-semibold">Visit Us</h3>
          <p className="text-sm opacity-90 leading-relaxed mb-10 max-w-sm">
            Sajian hangat, rempah pilihan, dan cerita dari berbagai penjuru Nusantara untuk dinikmati di satu meja.
          </p>

          <h3 className="uppercase opacity-70 mb-4 text-sm font-semibold">Social</h3>
          <div className="flex space-x-6">
            <a href="#" className="hover:opacity-70 transition-opacity bg-white text-[#3B1910] p-1.5 rounded">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]">
                <path d="M18.244 2H21.5l-7.57 8.66L22.7 22h-6.88l-5.38-7.53L4.67 22H1.41l8.1-9.28L1.3 2h7.06l4.86 6.82L18.24 2Zm-1.16 18.2h1.9L7.08 3.68H5.08L17.08 20.2Z" />
              </svg>
            </a>
            <a href="#" className="hover:opacity-70 transition-opacity bg-white text-[#3B1910] p-1.5 rounded">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]">
                <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 3.5A5.5 5.5 0 1 1 6.5 13 5.5 5.5 0 0 1 12 7.5Zm0 2A3.5 3.5 0 1 0 15.5 13 3.5 3.5 0 0 0 12 9.5Zm5.25-3.25a1.25 1.25 0 1 1-1.25 1.25 1.25 1.25 0 0 1 1.25-1.25Z" />
              </svg>
            </a>
            <a href="#" className="hover:opacity-70 transition-opacity bg-white text-[#3B1910] p-1.5 rounded">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]">
                <path d="M13.5 22v-8h3l.5-3h-3.5V7.5c0-.9.5-1.5 1.7-1.5H17V2.8c-.4-.1-1.8-.3-3.2-.3-3.1 0-5.3 1.9-5.3 5.4V11H6v3h2.5v8h5Z" />
              </svg>
            </a>
            <a href="#" className="hover:opacity-70 transition-opacity bg-white text-[#3B1910] p-1.5 rounded">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]">
                <path d="M12 2c2.7 0 3 .1 4.1.1 1.8.1 3.6.7 4.9 2 1.3 1.3 1.9 3.1 2 4.9.1 1.1.1 1.4.1 4.1s-.1 3-.1 4.1c-.1 1.8-.7 3.6-2 4.9-1.3 1.3-3.1 1.9-4.9 2-1.1.1-1.4.1-4.1.1s-3-.1-4.1-.1c-1.8-.1-3.6-.7-4.9-2-1.3-1.3-1.9-3.1-2-4.9C2.1 15 .1 14.7.1 12s.1-3 .1-4.1c.1-1.8.7-3.6 2-4.9C5.5 1.7 7.3 1.1 9.1 1c1.1-.1 1.4-.1 4.1-.1Zm0 6.9a5.1 5.1 0 1 0 5.1 5.1 5.1 5.1 0 0 0-5.1-5.1Zm0 2.4a2.7 2.7 0 1 1-2.7 2.7 2.7 2.7 0 0 1 2.7-2.7Zm5.2-2.7a1.2 1.2 0 1 0 1.2 1.2 1.2 1.2 0 0 0-1.2-1.2Z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
