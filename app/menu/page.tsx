'use client';
import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, Loader2, Youtube, Instagram, Facebook } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('food');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isPdfLoading, setIsPdfLoading] = useState(true);

  // Menyisipkan font Google secara dinamis
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  const pdfMenus = {
    food: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
    beverage: 'https://s2.q4cdn.com/175719177/files/doc_presentations/Placeholder-PDF.pdf',
    dessert: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf'
  };

  const handleTabChange = (category) => {
    if (activeTab === category) return;
    setActiveTab(category);
    setIsPdfLoading(true);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="font-sans antialiased bg-[#f4eadc] text-[#4a2511] overflow-x-hidden" style={{ fontFamily: "'Inter', sans-serif" }}>
      
      {/* Navbar (Absolute over hero) */}
      <header className="absolute top-0 left-0 w-full z-50 py-4 px-6 md:px-12 lg:px-24 text-white">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full border border-white/50 flex items-center justify-center text-xl tracking-wider" style={{ fontFamily: "'Playfair Display', serif" }}>
              DN
            </div>
            <div className="flex flex-col text-sm uppercase tracking-widest font-semibold leading-tight">
              <span>Dapoer</span>
              <span>Nusantara</span>
            </div>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-8 text-sm uppercase tracking-wide">
            <a href="#" className="hover:text-[#e8cca6] transition-colors">Home</a>
            <a href="#menu" className="hover:text-[#e8cca6] transition-colors border border-white/30 rounded-full px-4 py-1 backdrop-blur-sm">Menu</a>
            <a href="#" className="hover:text-[#e8cca6] transition-colors">Special Promo</a>
            <a href="#" className="hover:text-[#e8cca6] transition-colors">About</a>
            <a href="#" className="hover:text-[#e8cca6] transition-colors">Contact Us</a>
            <a href="#" className="hover:text-[#e8cca6] transition-colors">Blog</a>
          </nav>

          {/* Reservation Button (Desktop) */}
          <div className="hidden md:block">
            <a href="#" className="bg-[#3a1008] text-white hover:bg-[#3a1008]/80 px-6 py-2.5 rounded-sm text-sm uppercase tracking-widest font-semibold transition-all">
              Reservation
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="lg:hidden text-white focus:outline-none" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-[#3a1008] flex flex-col items-center py-6 gap-4 shadow-xl lg:hidden">
            <a href="#" className="text-white hover:text-[#e8cca6] uppercase tracking-wide" onClick={toggleMobileMenu}>Home</a>
            <a href="#menu" className="text-white hover:text-[#e8cca6] uppercase tracking-wide" onClick={toggleMobileMenu}>Menu</a>
            <a href="#" className="text-white hover:text-[#e8cca6] uppercase tracking-wide" onClick={toggleMobileMenu}>Special Promo</a>
            <a href="#" className="text-white hover:text-[#e8cca6] uppercase tracking-wide" onClick={toggleMobileMenu}>About</a>
            <a href="#" className="text-white hover:text-[#e8cca6] uppercase tracking-wide" onClick={toggleMobileMenu}>Contact Us</a>
            <a href="#" className="text-white hover:text-[#e8cca6] uppercase tracking-wide" onClick={toggleMobileMenu}>Blog</a>
            <a href="#" className="bg-[#e8cca6] text-[#3a1008] px-6 py-2 rounded-sm text-sm uppercase font-semibold mt-2">Reservation</a>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative w-full h-[80vh] min-h-[600px] overflow-hidden flex items-center justify-center rounded-b-[50%_60px] md:rounded-b-[50%_120px]">
        {/* Background Image */}
        <img 
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80" 
          alt="Restaurant Interior" 
          className="absolute inset-0 w-full h-full object-cover z-0" 
        />
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#3a1008]/80 to-transparent z-10"></div>

        {/* Hero Content */}
        <div className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto mt-16">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight drop-shadow-lg" style={{ fontFamily: "'Playfair Display', serif" }}>
            Lorem ipsum dolor sit amet,<br/>consectetur
          </h1>
          <p className="text-sm md:text-base font-light max-w-2xl mx-auto mb-10 text-white/90">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          
          {/* Hero Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a href="#" className="bg-[#f4eadc] text-[#3a1008] px-8 py-3 rounded-md flex items-center justify-between w-48 font-semibold hover:bg-white transition-colors">
              <span>Reservation Now</span>
              <ChevronRight size={16} />
            </a>
            <a href="#menu" className="bg-[#f4eadc] text-[#3a1008] px-8 py-3 rounded-md flex items-center justify-between w-48 font-semibold hover:bg-white transition-colors">
              <span>View Menu</span>
              <ChevronRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* Intro / About Section */}
      <section className="py-20 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image Left */}
          <div className="relative w-full aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
            <img 
              src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&q=80" 
              alt="Dining Table" 
              className="w-full h-full object-cover" 
            />
          </div>
          
          {/* Text Right */}
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl text-[#3a1008] font-bold mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              Lorem Ipsum
            </h2>
            <p className="text-[#4a2511]/80 leading-relaxed mb-4 text-justify md:text-left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
          </div>
        </div>
      </section>

      {/* Menu / PDF Section */}
      <section id="menu" className="py-16 px-4 md:px-12 lg:px-24 bg-[#f4eadc]">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-5xl text-[#3a1008] font-bold mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            Lorem ipsum dolor sit<br/>amet, consectetur
          </h2>
          <p className="text-[#4a2511]/80 text-sm md:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        {/* PDF Menu Container */}
        <div className="max-w-5xl mx-auto bg-[#3a1008] rounded-t-3xl overflow-hidden shadow-2xl border-4 border-[#3a1008]">
          
          {/* Menu Tabs */}
          <div className="flex flex-row overflow-x-auto">
            <button 
              onClick={() => handleTabChange('food')} 
              className={`flex-1 py-4 px-6 text-sm md:text-base font-semibold uppercase tracking-wider whitespace-nowrap transition-colors duration-300 ${activeTab === 'food' ? 'bg-[#3a1008] text-white' : 'bg-[#2b0b05] text-[#a3958f] border-b-2 border-[#5a1f11] hover:bg-[#4a150a] hover:text-[#e8cca6]'}`}
            >
              Food Menu
            </button>
            <button 
              onClick={() => handleTabChange('beverage')} 
              className={`flex-1 py-4 px-6 text-sm md:text-base font-semibold uppercase tracking-wider whitespace-nowrap border-l border-[#3a1008]/50 transition-colors duration-300 ${activeTab === 'beverage' ? 'bg-[#3a1008] text-white' : 'bg-[#2b0b05] text-[#a3958f] border-b-2 border-[#5a1f11] hover:bg-[#4a150a] hover:text-[#e8cca6]'}`}
            >
              Beverage Menu
            </button>
            <button 
              onClick={() => handleTabChange('dessert')} 
              className={`flex-1 py-4 px-6 text-sm md:text-base font-semibold uppercase tracking-wider whitespace-nowrap border-l border-[#3a1008]/50 transition-colors duration-300 ${activeTab === 'dessert' ? 'bg-[#3a1008] text-white' : 'bg-[#2b0b05] text-[#a3958f] border-b-2 border-[#5a1f11] hover:bg-[#4a150a] hover:text-[#e8cca6]'}`}
            >
              Desserts
            </button>
          </div>

          {/* The PDF Viewer (White Area) */}
          <div className="bg-white w-full h-[600px] md:h-[800px] relative p-1 md:p-2">
            
            {/* Loading indicator */}
            {isPdfLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-50 z-10">
                <div className="flex flex-col items-center text-[#3a1008]">
                  <Loader2 className="w-10 h-10 animate-spin mb-4" />
                  <p className="italic" style={{ fontFamily: "'Playfair Display', serif" }}>Loading Menu...</p>
                </div>
              </div>
            )}

            {/* Iframe Container */}
            <iframe 
              src={pdfMenus[activeTab]} 
              className="w-full h-full border-none shadow-inner rounded-sm relative z-20"
              title="Menu PDF Viewer"
              onLoad={() => setIsPdfLoading(false)}
            />
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-[#3a1008] text-white mt-20 pt-20 pb-10 px-6 md:px-12 lg:px-24 rounded-t-[50%_40px] md:rounded-t-[50%_80px]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* Footer Col 1: Logo */}
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full border border-[#e8cca6] flex items-center justify-center text-2xl text-[#e8cca6] tracking-wider" style={{ fontFamily: "'Playfair Display', serif" }}>
                DN
              </div>
              <div className="flex flex-col text-sm uppercase tracking-widest font-bold leading-tight text-[#e8cca6]">
                <span>Dapoer</span>
                <span>Nusantara</span>
              </div>
            </div>
            <p className="text-white/50 text-sm mt-auto mb-0 pt-12">
              Copyright © 2024. All rights reserved.
            </p>
          </div>

          {/* Footer Col 2: Menu Links */}
          <div className="flex flex-col gap-3">
            <h4 className="text-xl mb-4 text-[#e8cca6]" style={{ fontFamily: "'Playfair Display', serif" }}>Menu</h4>
            <a href="#" className="text-white/80 hover:text-[#e8cca6] text-sm transition-colors">Home</a>
            <a href="#menu" className="text-white/80 hover:text-[#e8cca6] text-sm transition-colors">Menu</a>
            <a href="#" className="text-white/80 hover:text-[#e8cca6] text-sm transition-colors">Special Promo</a>
            <a href="#" className="text-white/80 hover:text-[#e8cca6] text-sm transition-colors">About</a>
            <a href="#" className="text-white/80 hover:text-[#e8cca6] text-sm transition-colors">Special Promo</a>
            <a href="#" className="text-white/80 hover:text-[#e8cca6] text-sm transition-colors">Blog</a>
          </div>

          {/* Footer Col 3: Text content */}
          <div className="lg:col-span-2 flex flex-col">
            <h4 className="text-xl mb-4 text-[#e8cca6]" style={{ fontFamily: "'Playfair Display', serif" }}>Visit Us</h4>
            <p className="text-white/80 text-sm leading-relaxed mb-8 max-w-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            
            <h4 className="text-lg mb-4 text-[#e8cca6]" style={{ fontFamily: "'Playfair Display', serif" }}>Social</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#e8cca6] hover:text-[#3a1008] transition-all">
                <Youtube size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#e8cca6] hover:text-[#3a1008] transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#e8cca6] hover:text-[#3a1008] transition-all">
                <Facebook size={18} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}