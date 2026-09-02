'use client';
import React from 'react';
import { ArrowRight, Disc as Discord } from 'lucide-react';

const SocialIcon = ({ kind }: { kind: 'instagram' | 'facebook' | 'twitter' }) => {
  const commonProps = {
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.8,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    className: 'w-[17px] h-[17px]'
  };

  if (kind === 'instagram') {
    return (
      <svg {...commonProps}>
        <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.3" cy="6.7" r="1.1" fill="currentColor" stroke="none" />
      </svg>
    );
  }

  if (kind === 'facebook') {
    return (
      <svg {...commonProps} viewBox="0 0 24 24">
        <path d="M14 8h2V4h-2.5A4.5 4.5 0 0 0 9.5 8.5V11H7v4h2.5v5h4v-5H16l.5-4h-4V8.5A.5.5 0 0 1 13 8h1Z" />
      </svg>
    );
  }

  return (
    <svg {...commonProps} viewBox="0 0 24 24">
      <path d="M22 4.5c-.8.4-1.6.7-2.5.8A4.4 4.4 0 0 0 21.3 3c-.9.5-1.9.9-3 .9A4.5 4.5 0 0 0 13.8 8v1C9.8 9.2 6.7 7.5 4.5 4.8c-1.8 3-.9 6.8 2 8.7-1.3 0-2.4-.4-3.4-1 0 3.1 2.3 5.7 5.3 6.3-1 .7-2.1 1-3.3 1 .9 2.2 3.3 3.8 6.3 3.8A12.3 12.3 0 0 1 2 18.6 8.8 8.8 0 0 0 12 22c7.6 0 11.7-6.5 11.7-12.1v-.6c.8-.7 1.5-1.5 2-2.4Z" />
    </svg>
  );
};

const globalStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Inter:wght@300;400;500;600&display=swap');

  .font-serif {
    font-family: 'Playfair Display', serif;
  }
  .font-sans {
    font-family: 'Inter', sans-serif;
  }
  
  /* Hiding scrollbar for a cleaner premium look */
  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-track {
    background: #F6ECE1;
  }
  ::-webkit-scrollbar-thumb {
    background: #3E1511;
    border-radius: 4px;
  }
    
  body {
    background-color: #F6ECE1;
    color: #3E1511;
  }
`;

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'dark' | 'light' | 'white';
  className?: string;
}

const Button = ({ children, variant = 'dark', className = '' }: ButtonProps) => {
  const baseStyle = "inline-flex items-center justify-center gap-3 px-7 py-3.5 rounded-full text-sm font-medium transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]";
  const variants: Record<'dark' | 'light' | 'white', string> = {
    dark: `bg-[#3E1511] text-[#F6ECE1] hover:bg-[#2c0e0b]`,
    light: `bg-[#F6ECE1] text-[#3E1511] hover:bg-white`,
    white: `bg-white text-[#3E1511] shadow-sm hover:bg-[#F6ECE1]`
  };

  return (
    <button className={`${baseStyle} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
};

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-[#F6ECE1] font-sans selection:bg-[#3E1511] selection:text-[#F6ECE1] overflow-x-hidden">
      <style>{globalStyles}</style>

      {}
      {/* --- HERO SECTION (Full Image Background with Curve) --- */}
      <div 
        className="relative w-full h-[75vh] min-h-[600px] overflow-hidden shadow-xl"
        // Menggunakan teknik border-radius persentase/vw untuk kurva responsif
        style={{ 
            borderRadius: '0 0 50% 50% / 0 0 8vw' 
        }}
      >
        {/* Background Image & Overlay */}
        <img 
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
          alt="Restaurant Interior" 
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>

        {/* Navigation Bar (Absolute over hero) */}
        <header className="absolute top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-[1200px] rounded-full border border-white/20 bg-[#3E1511]/60 backdrop-blur-md z-50 px-6 py-4 flex items-center justify-between text-[#F6ECE1]">
          <div className="flex items-center gap-3">
             <div className="w-9 h-9 rounded-full border border-[#F6ECE1] flex items-center justify-center font-serif text-sm">
                N
             </div>
             <span className="font-serif tracking-widest text-[11px] uppercase leading-tight">Dapoer<br/>Nusantara</span>
          </div>
          
          <nav className="hidden lg:flex items-center gap-10 text-[13px] font-medium tracking-wide">
            <a href="#" className="hover:text-white transition-colors opacity-80 hover:opacity-100">Home</a>
            <a href="#" className="hover:text-white transition-colors opacity-80 hover:opacity-100">Menu</a>
            <a href="#" className="hover:text-white transition-colors opacity-80 hover:opacity-100">Experiences</a>
            <a href="#" className="text-white border-b border-white pb-1">About</a>
            <a href="#" className="hover:text-white transition-colors opacity-80 hover:opacity-100">Special Promo</a>
            <a href="#" className="hover:text-white transition-colors opacity-80 hover:opacity-100">Blog</a>
          </nav>

          <Button variant="light" className="py-2.5 px-6 text-xs font-semibold">
            Reserve Now
          </Button>
        </header>

        {/* Hero Content (Centered) */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 text-[#F6ECE1] pt-16">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-[4.5rem] leading-[1.1] max-w-4xl mx-auto drop-shadow-lg mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing
          </h1>
          <p className="font-sans text-sm md:text-base max-w-2xl mx-auto opacity-90 leading-relaxed drop-shadow-md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>

      {}
      {/* --- CONTENT SECTION 1: Intro Headline --- */}
      <section className="pt-28 pb-16 px-6 md:px-12 max-w-[1200px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 border-b border-[#3E1511]/10 pb-20">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-[3.5rem] max-w-xl leading-[1.1] text-[#3E1511]">
            Lorem ipsum dolor sit amet, consectetur
          </h2>
          <div className="shrink-0 mt-4 md:mt-0">
            <Button variant="dark">
              Reserve now <ArrowRight size={18} strokeWidth={2} />
            </Button>
          </div>
        </div>
      </section>

      {}
      {/* --- CONTENT SECTION 2: Text Left, Image Right --- */}
      <section className="py-12 px-6 md:px-12 max-w-[1200px] mx-auto mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div className="order-2 lg:order-1 pr-0 lg:pr-8">
            <h3 className="font-serif text-3xl md:text-4xl mb-6 text-[#3E1511]">Lorem Ipsum</h3>
            <p className="text-[15px] leading-[1.8] mb-10 text-[#3E1511]/80 text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="dark">
                Reserve Now <ArrowRight size={18} strokeWidth={2} />
              </Button>
              <Button variant="dark">
                Menu <ArrowRight size={18} strokeWidth={2} />
              </Button>
            </div>
          </div>
          <div className="order-1 lg:order-2 aspect-[4/3] rounded-3xl overflow-hidden shadow-lg border border-[#3E1511]/5">
            <img 
              src="https://images.unsplash.com/photo-1544025162-831e505eb31e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              alt="Table setting" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {}
      {/* --- CONTENT SECTION 3: The Cards --- */}
      <section className="py-12 px-6 md:px-12 max-w-[1200px] mx-auto space-y-12">
        
        {/* Card 1: Dark (Image Left, Text Right) */}
        <div className="bg-[#3E1511] text-[#F6ECE1] rounded-[2rem] p-5 md:p-8 flex flex-col lg:flex-row items-center gap-8 lg:gap-16 shadow-xl">
          <div className="w-full lg:w-1/2 aspect-[4/3] rounded-[1.5rem] overflow-hidden shrink-0">
            <img src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Fine Dining" className="w-full h-full object-cover" />
          </div>
          <div className="w-full lg:w-1/2 py-4 lg:py-8 lg:pr-12">
            <h3 className="font-serif text-3xl md:text-4xl mb-6">Lorem Ipsum</h3>
            <p className="text-[15px] leading-[1.8] opacity-80 text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
          </div>
        </div>

        {/* Card 2: Light (Text Left, Image Right) */}
        <div className="bg-white text-[#3E1511] rounded-[2rem] p-5 md:p-8 flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-16 shadow-[0_15px_40px_rgb(62,21,17,0.08)] relative z-10 scale-[1.02]">
          <div className="w-full lg:w-1/2 py-4 lg:py-8 lg:pl-12">
            <h3 className="font-serif text-3xl md:text-4xl mb-6">Lorem Ipsum</h3>
            <p className="text-[15px] leading-[1.8] opacity-80 text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
          </div>
          <div className="w-full lg:w-1/2 aspect-[4/3] rounded-[1.5rem] overflow-hidden shrink-0 shadow-md">
            <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Plated Food" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Card 3: Dark (Image Left, Text Right) */}
        <div className="bg-[#3E1511] text-[#F6ECE1] rounded-[2rem] p-5 md:p-8 flex flex-col lg:flex-row items-center gap-8 lg:gap-16 shadow-xl relative z-0">
          <div className="w-full lg:w-1/2 aspect-[4/3] rounded-[1.5rem] overflow-hidden shrink-0">
            <img src="https://images.unsplash.com/photo-1544025162-831e505eb31e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Restaurant Ambiance" className="w-full h-full object-cover" />
          </div>
          <div className="w-full lg:w-1/2 py-4 lg:py-8 lg:pr-12">
            <h3 className="font-serif text-3xl md:text-4xl mb-6">Lorem Ipsum</h3>
            <p className="text-[15px] leading-[1.8] opacity-80 text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
          </div>
        </div>

      </section>

      {}
      {/* --- CALL TO ACTION --- */}
      <section className="pt-32 pb-32 px-6 text-center max-w-3xl mx-auto flex flex-col items-center">
        <h2 className="font-serif text-4xl md:text-5xl mb-6 text-[#3E1511]">Lorem ipsum dolor sit amet</h2>
        <p className="text-[15px] text-[#3E1511]/80 mb-12 max-w-[550px] leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="flex flex-wrap justify-center gap-5">
          <Button variant="dark">
            Reserve now <ArrowRight size={18} strokeWidth={2} />
          </Button>
          <Button variant="dark">
            View Menu <ArrowRight size={18} strokeWidth={2} />
          </Button>
        </div>
      </section>

      {}
      {/* --- FOOTER (Dark Background with Upward Curve) --- */}
      <footer 
        className="bg-[#3E1511] text-[#F6ECE1] pt-24 pb-12 px-6 md:px-12 mt-12 relative"
        style={{ 
            borderRadius: '8vw 8vw 0 0 / 100px 100px 0 0' 
        }}
      >
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-8 mb-20 mt-6">
          {/* Logo Area */}
          <div className="md:col-span-1 flex items-start gap-4">
             <div className="w-14 h-14 rounded-full border border-[#F6ECE1] flex items-center justify-center font-serif text-2xl shrink-0">
                N
             </div>
             <span className="font-serif tracking-widest text-[15px] uppercase leading-[1.3] mt-1.5">
               Dapoer<br/>Nusantara
             </span>
          </div>

          {/* Explore Links */}
          <div className="md:col-span-1 lg:pl-10">
            <h4 className="font-sans font-semibold text-sm mb-6 tracking-wide">Explore</h4>
            <ul className="space-y-3.5 text-[13px] opacity-70">
              <li><a href="#" className="hover:opacity-100 transition-opacity">Home</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Menu</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Experiences</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">About</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Special Promo</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Blog</a></li>
            </ul>
          </div>

          {/* Visit Us & Socials */}
          <div className="md:col-span-2 md:pl-10">
            <h4 className="font-sans font-semibold text-sm mb-6 tracking-wide">Visit Us</h4>
            <p className="text-[13px] opacity-70 mb-10 max-w-sm leading-[1.8] text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            
            <h4 className="font-sans font-semibold text-sm mb-5 tracking-wide">Social</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-[#F6ECE1]/30 flex items-center justify-center hover:bg-[#F6ECE1] hover:text-[#3E1511] transition-all duration-300">
                <SocialIcon kind="instagram" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-[#F6ECE1]/30 flex items-center justify-center hover:bg-[#F6ECE1] hover:text-[#3E1511] transition-all duration-300">
                <Discord size={17} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-[#F6ECE1]/30 flex items-center justify-center hover:bg-[#F6ECE1] hover:text-[#3E1511] transition-all duration-300">
                <SocialIcon kind="facebook" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-[#F6ECE1]/30 flex items-center justify-center hover:bg-[#F6ECE1] hover:text-[#3E1511] transition-all duration-300">
                <SocialIcon kind="twitter" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="max-w-[1200px] mx-auto flex justify-between items-center text-[11px] opacity-50 tracking-wide font-medium">
          <p>Copyright © 2024</p>
        </div>
      </footer>
    </div>
  );
}