'use client';
import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

// Common colors based on the new design
const colors = {
  beige: '#EBE0D3',   // Primary background
  maroon: '#451A14',  // Primary dark accent
  gold: '#D4B895',    // Accent lines and buttons
};

// SVG Icons
const ArrowRight = ({ className = "w-4 h-4 ml-2" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
  </svg>
);
 
const ArrowLeft = ({ className = "w-4 h-4 mr-2" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
  </svg>
);

const StarIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

const ReviewCard = () => (
  <div className="bg-white p-6 flex flex-col justify-between h-[200px] min-w-[280px] md:min-w-[320px] flex-1 shadow-lg text-[#451A14]">
    <div>
      <div className="flex gap-1 mb-3">
        {[...Array(5)].map((_, i) => <StarIcon key={i} className="w-4 h-4 text-yellow-500" />)}
      </div>
      <p className="text-sm font-bold mb-2 font-serif">A very pleasant place...</p>
      <p className="text-xs leading-relaxed opacity-80">
        up and chat-quiet music and relaxed atmosphere. It's perfect for both a work meeting or...
      </p>
    </div>
    <div className="flex items-center gap-3 mt-4">
      <div className="w-8 h-8 bg-gray-200 overflow-hidden">
        <img src="https://i.pravatar.cc/150?img=32" alt="User" className="w-full h-full object-cover"/>
      </div>
      <div className="text-xs font-bold">Sarah Jenkins</div>
    </div>
  </div>
);



const Reveal = ({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 28 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay }}
    viewport={{ once: true, margin: '-80px' }}
    className={className}
  >
    {children}
  </motion.div>
);

export default function DapoerNusantara() {
  // --- State for Experiences Slider ---
  const expImages = [
    "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=2000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1600891964092-4316c288032e?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=2070&auto=format&fit=crop"
  ];
  const [expIndex, setExpIndex] = useState(0);

  // Auto-play experiences
  useEffect(() => {
    const timer = setInterval(() => {
      setExpIndex((prev) => (prev + 1) % expImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [expImages.length]);

  const getExpIndex = (offset: number) => {
    const len = expImages.length;
    return (((expIndex + offset) % len) + len) % len;
  };

  // --- State & Handlers for Reviews Sliders ---
  const reviewContainerRefGoogle = useRef<HTMLDivElement>(null);
  const reviewContainerRefTrip = useRef<HTMLDivElement>(null);

  const scrollReviews = (ref: React.RefObject<HTMLDivElement | null>, direction: number) => {
    if (ref.current) {
      // 320px represents card width + gap approximation
      const scrollAmount = 320; 
      ref.current.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
    }
  };

  const springTransition = { 
    type: "spring" as const, 
    stiffness: 80, 
    damping: 15, 
    mass: 1 
  };

  return (
    <div className="min-h-screen font-sans" style={{ backgroundColor: colors.beige }}>
      
      {/* ================= HERO SECTION ================= */}
      {}
      <div className="relative w-full h-[85vh] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <motion.img 
            initial={{ scale: 1.08 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2.2, ease: 'easeOut' }}
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop" 
            alt="Restaurant Interior" 
            className="w-full h-full object-cover"
          />
          {/* Subtle gradient to make text readable */}
          <div className="absolute inset-0 bg-black/40 bg-gradient-to-t from-black/70 via-transparent to-black/30"></div>
        </div>

        {/* Hero Text - positioned at bottom */}
        <div className="absolute bottom-0 left-0 right-0 z-10">
          <motion.div initial={{ opacity: 0, y: 35 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.55, ease: 'easeOut' }} className="w-full max-w-7xl mx-auto px-6 pb-32 md:pb-40">
            <h1 id="home" className="text-4xl md:text-5xl lg:text-6xl font-serif text-white/95 leading-tight max-w-2xl">
              Lorem ipsum dolor sit<br/>amet, consectetur adipiscing
            </h1>
          </motion.div>
        </div>

        {/* Hero Bottom Convex Curve with Gold Stroke */}
        <div className="absolute bottom-0 left-0 w-full z-20 translate-y-[1px]">
          <svg viewBox="0 0 1440 120" className="w-full block h-16 md:h-24 lg:h-32" preserveAspectRatio="none">
             <path d="M0,120 L1440,120 L1440,50 C960,150 480,150 0,50 Z" fill={colors.beige} />
             <path d="M0,50 C480,150 960,150 1440,50" fill="none" stroke={colors.gold} strokeWidth="2" opacity="0.6" />
          </svg>
        </div>
      </div>


      {/* ================= ABOUT US SECTION ================= */}
      {}
      <section id="about" className="max-w-6xl mx-auto px-6 py-20 lg:py-32 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <Reveal className="flex flex-col justify-center">
            <h2 className="text-4xl md:text-5xl font-serif text-[#451A14] mb-8">About Us</h2>
            <p className="text-[#451A14]/80 leading-relaxed text-sm md:text-base pr-4 text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </Reveal>
          
          {/* Image */}
          <Reveal delay={0.15} className="relative overflow-hidden shadow-2xl h-[300px] md:h-[350px] group">
             <motion.img 
               whileHover={{ scale: 1.06 }}
               transition={{ duration: 0.7 }}
               src="https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=2070&auto=format&fit=crop" 
               alt="Restaurant Ambience"
               className="absolute inset-0 w-full h-full object-cover"
             />
             <div className="absolute inset-0 bg-[#451A14]/10 group-hover:bg-transparent transition-colors duration-500" />
          </Reveal>
        </div>
      </section>


      {/* ================= SIGNATURE MENU ================= */}
      {}
      <section id="menu" className="max-w-6xl mx-auto px-6 pb-24 relative z-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
        
        {/* Column 1 (Left Images) */}
        {/* z-0 agar berada di belakang kotak CTA tengah saat animasi */}
        <div className="flex flex-col gap-6 relative z-0">
          <motion.div 
            initial={{ x: "100%", y: "50%", scale: 0.5, opacity: 0 }}
            whileInView={{ x: 0, y: 0, scale: 1, opacity: 1 }}
            transition={{ ...springTransition, delay: 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
            className="overflow-hidden shadow-xl relative aspect-[5/4]"
          >
            <img src="https://images.unsplash.com/photo-1563379926898-05f4575a45d8?q=80&w=1000&auto=format&fit=crop" alt="Pasta Dish" className="absolute inset-0 w-full h-full object-cover" />
          </motion.div>
          
          <motion.div 
            initial={{ x: "100%", y: "-50%", scale: 0.5, opacity: 0 }}
            whileInView={{ x: 0, y: 0, scale: 1, opacity: 1 }}
            transition={{ ...springTransition, delay: 0.3 }}
            viewport={{ once: true, margin: "-100px" }}
            className="overflow-hidden shadow-xl relative aspect-[5/4]"
          >
            <img src="https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=1000&auto=format&fit=crop" alt="Rice Dish" className="absolute inset-0 w-full h-full object-cover" />
          </motion.div>
        </div>

        {/* Column 2 (Center CTA) */}
        {/* z-10 agar menutupi gambar saat mereka baru mulai keluar dari tengah */}
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="bg-[#451A14] shadow-2xl flex flex-col items-center justify-center p-10 text-center min-h-[300px] relative z-10"
        >
          <h3 className="text-3xl md:text-4xl font-serif text-[#EBE0D3] leading-snug mb-8">
            Try Our<br/>Signature<br/>Menu!
          </h3>
          <button className="bg-[#EBE0D3] text-[#451A14] px-6 py-2.5 text-sm font-bold flex items-center hover:bg-white transition-colors">
            Explore Menu <ArrowRight className="w-4 h-4 ml-2" />
          </button>
        </motion.div>

        {/* Column 3 (Right Images) */}
        <div className="flex flex-col gap-6 relative z-0">
          <motion.div 
            initial={{ x: "-100%", y: "50%", scale: 0.5, opacity: 0 }}
            whileInView={{ x: 0, y: 0, scale: 1, opacity: 1 }}
            transition={{ ...springTransition, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
            className="overflow-hidden shadow-xl relative aspect-[5/4]"
          >
            <img src="https://images.unsplash.com/photo-1551218808-94e220e084d2?q=80&w=1000&auto=format&fit=crop" alt="Seafood Dish" className="absolute inset-0 w-full h-full object-cover" />
          </motion.div>

          <motion.div 
            initial={{ x: "-100%", y: "-50%", scale: 0.5, opacity: 0 }}
            whileInView={{ x: 0, y: 0, scale: 1, opacity: 1 }}
            transition={{ ...springTransition, delay: 0.4 }}
            viewport={{ once: true, margin: "-100px" }}
            className="overflow-hidden shadow-xl relative aspect-[5/4]"
          >
            <img src="https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?q=80&w=1000&auto=format&fit=crop" alt="Creamy Dish" className="absolute inset-0 w-full h-full object-cover" />
          </motion.div>
        </div>
        
      </div>
    </section>


      {/* ================= EXPERIENCES SLIDER & TRANSITION ================= */}
      {}
      <section id="experiences" className="w-full relative pt-12 pb-24">
        
        {/* Title */}
        <div className="max-w-2xl mx-auto px-6 text-center mb-16 relative z-30">
          <h2 className="text-3xl md:text-4xl font-serif text-[#451A14] leading-tight">
            Explore unique local experiences<br/>and create lasting memories
          </h2>
        </div>

        {/* Carousel / Slider Container */}
        <div className="relative w-full max-w-[1400px] mx-auto h-[350px] md:h-[450px] flex justify-center items-center overflow-hidden z-30">
           
           {/* Left Phantom Image */}
           <div 
             className="absolute left-[-10%] md:left-0 w-1/3 md:w-[30%] h-[70%] overflow-hidden opacity-30 shadow-lg blur-[2px] cursor-pointer hover:opacity-60 hover:scale-[1.02] transition-all duration-700 z-20"
             onClick={() => setExpIndex(getExpIndex(-1))}
           >
              <img src={expImages[getExpIndex(-1)]} alt="Experience Left" className="w-full h-full object-cover transition-all duration-700" />
           </div>

           {/* Center Main Image */}
            <motion.div key={expIndex} initial={{ opacity: 0.35, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} className="relative z-40 w-[80%] md:w-[50%] h-full overflow-hidden shadow-2xl border-4 border-black/5 transition-all duration-700">
              <motion.img whileHover={{ scale: 1.05 }} transition={{ duration: 0.8 }} src={expImages[expIndex]} alt="Main Experience" className="w-full h-full object-cover transition-all duration-700" />
            </motion.div>

           {/* Right Phantom Image */}
           <div 
             className="absolute right-[-10%] md:right-0 w-1/3 md:w-[30%] h-[70%] overflow-hidden opacity-30 shadow-lg blur-[2px] cursor-pointer hover:opacity-60 hover:scale-[1.02] transition-all duration-700 z-20"
             onClick={() => setExpIndex(getExpIndex(1))}
           >
              <img src={expImages[getExpIndex(1)]} alt="Experience Right" className="w-full h-full object-cover transition-all duration-700" />
           </div>
        </div>

        {/* Background Maroon Curve that transitions upwards into Beige */}
        {/* This SVG is placed absolutely behind the carousel to create the background separation */}
        <div className="absolute bottom-[-1px] left-0 w-full z-10 h-56 md:h-72 pointer-events-none">
          <svg viewBox="0 0 1440 200" className="w-full h-full block" preserveAspectRatio="none">
             <path d="M0,200 L1440,200 L1440,80 C960,0 480,0 0,80 Z" fill={colors.maroon} />
          </svg>
        </div>

      </section>

      
      {/* ================= FOOTER / DARK SECTION ================= */}
      {}
      <section className="bg-[#451A14] text-[#EBE0D3] relative z-20 pt-8 pb-20 w-full overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 flex flex-col items-center text-center">
          
          {/* Pagination Bars for Experiences */}
          <div className="flex gap-2 mb-8 justify-center">
            {expImages.map((_, idx) => (
              <button 
                key={idx}
                onClick={() => setExpIndex(idx)}
                className={`h-1 transition-all duration-300 ${idx === expIndex ? 'w-8 bg-[#EBE0D3]' : 'w-2 bg-white/40 hover:bg-white/70'}`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          {/* Footer Text Area */}
          <p className="text-sm md:text-base opacity-80 leading-relaxed max-w-2xl mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do<br/>
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <button className="bg-[#EBE0D3] text-[#451A14] px-6 py-2.5 text-sm font-bold flex items-center hover:bg-white transition-colors">
            Reserve Now <ArrowRight className="w-4 h-4 ml-2" />
          </button>
        </div>

        {/* Separator Curve */}
        <div className="w-full relative h-20 md:h-32 flex items-center justify-center my-8 pointer-events-none">
          <svg viewBox="0 0 1440 100" className="absolute w-full min-w-[1440px]" preserveAspectRatio="none">
            <path d="M0,50 Q720,100 1440,50" fill="none" stroke={colors.gold} strokeWidth="1" opacity="0.4" />
          </svg>
        </div>

        {/* ================= REVIEWS SLIDERS ================= */}
        <div className="max-w-[1400px] mx-auto px-4 md:px-10 flex flex-col gap-12 mb-24">
          
          {/* Google Reviews Row */}
          <div className="flex flex-col xl:flex-row items-center gap-6">
            {/* Logo */}
            <div className="w-full xl:w-48 flex-shrink-0 flex flex-col items-center xl:items-start xl:pr-6">
              <div className="flex items-center gap-1">
                <span className="text-blue-500 font-bold text-2xl tracking-tighter">G</span>
                <span className="text-red-500 font-bold text-2xl tracking-tighter">o</span>
                <span className="text-yellow-500 font-bold text-2xl tracking-tighter">o</span>
                <span className="text-blue-500 font-bold text-2xl tracking-tighter">g</span>
                <span className="text-green-500 font-bold text-2xl tracking-tighter">l</span>
                <span className="text-red-500 font-bold text-2xl tracking-tighter">e</span>
              </div>
              <div className="flex gap-0.5 mt-1">
                {[...Array(5)].map((_, i) => <StarIcon key={i} className="w-4 h-4 text-yellow-500" />)}
              </div>
              <div className="text-white/60 text-xs mt-1">Reviews</div>
            </div>
            
            {/* Slider Container */}
            <div className="relative flex-grow w-full">
              {/* Left Arrow Button */}
              <button 
                onClick={() => scrollReviews(reviewContainerRefGoogle, -1)}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 -ml-4 w-8 h-8 flex items-center justify-center bg-[#451A14] text-[#EBE0D3] border border-[#D4B895] hover:bg-[#31110d] transition-colors shadow-lg"
              >
                 <ArrowLeft className="w-4 h-4 mr-0" />
              </button>
              
              {/* Cards */}
              <div 
                ref={reviewContainerRefGoogle}
                className="flex gap-6 overflow-x-auto snap-x snap-mandatory px-4 py-2 scroll-smooth"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }} // Hides scrollbar in Firefox/IE
              >
                {/* Custom styling to hide webkit scrollbar but keep functionality */}
                <style>{`
                  div::-webkit-scrollbar { display: none; }
                `}</style>
                {[...Array(6)].map((_, i) => (
                   <div key={`google-${i}`} className="snap-start shrink-0">
                     <ReviewCard />
                   </div>
                ))}
              </div>

              {/* Right Arrow Button */}
              <button 
                onClick={() => scrollReviews(reviewContainerRefGoogle, 1)}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 -mr-4 w-8 h-8 flex items-center justify-center bg-[#451A14] text-[#EBE0D3] border border-[#D4B895] hover:bg-[#31110d] transition-colors shadow-lg"
              >
                 <ArrowRight className="w-4 h-4 ml-0" />
              </button>
            </div>
          </div>

          {/* Tripadvisor Reviews Row */}
          <div className="flex flex-col-reverse xl:flex-row items-center gap-6">
            
            {/* Slider Container */}
            <div className="relative flex-grow w-full">
              {/* Left Arrow Button */}
              <button 
                onClick={() => scrollReviews(reviewContainerRefTrip, -1)}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 -ml-4 w-8 h-8 flex items-center justify-center bg-[#451A14] text-[#EBE0D3] border border-[#D4B895] hover:bg-[#31110d] transition-colors shadow-lg"
              >
                 <ArrowLeft className="w-4 h-4 mr-0" />
              </button>
              
              {/* Cards */}
              <div 
                ref={reviewContainerRefTrip}
                className="flex gap-6 overflow-x-auto snap-x snap-mandatory px-4 py-2 scroll-smooth"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                {[...Array(6)].map((_, i) => (
                   <div key={`trip-${i}`} className="snap-start shrink-0">
                     <ReviewCard />
                   </div>
                ))}
              </div>

              {/* Right Arrow Button */}
              <button 
                onClick={() => scrollReviews(reviewContainerRefTrip, 1)}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 -mr-4 w-8 h-8 flex items-center justify-center bg-[#451A14] text-[#EBE0D3] border border-[#D4B895] hover:bg-[#31110d] transition-colors shadow-lg"
              >
                 <ArrowRight className="w-4 h-4 ml-0" />
              </button>
            </div>

            {/* Logo */}
            <div className="w-full xl:w-48 flex-shrink-0 flex justify-center xl:justify-end xl:pl-6">
               <div className="flex items-center gap-2 font-bold text-xl">
                 {/* Fake Owl Icon */}
                 <div className="w-8 h-8 bg-green-600 flex items-center justify-center text-white">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-5l-2.25 2.25-1.5-1.5L12 7l4.75 4.75-1.5 1.5L13 11.5v5h-2z"/></svg>
                 </div>
                 Tripadvisor
               </div>
            </div>
          </div>
        </div>

        {/* ================= LOCATION / MAP ================= */}
        <div className="max-w-5xl mx-auto px-6 mb-24">
          <div className="overflow-hidden shadow-2xl border-4 border-white/10 relative h-[300px] md:h-[450px] w-full">
            {/* Dummy Map Image */}
            <img 
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074&auto=format&fit=crop" 
              alt="Location Map" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Map Overlay to make it look somewhat like a styled map */}
            <div className="absolute inset-0 bg-blue-900/20 mix-blend-overlay"></div>
            {/* Pin Marker */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
               <svg className="w-12 h-12 text-red-500 drop-shadow-lg" fill="currentColor" viewBox="0 0 24 24">
                 <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
               </svg>
               <div className="bg-white text-black px-3 py-1 text-xs font-bold mt-1 shadow-md">
                 Dapoer Nusantara
               </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <h2 className="text-3xl md:text-4xl font-serif leading-tight mb-8">
              Easily pin our location and plan<br/>your visit today
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-[#EBE0D3] text-[#451A14] px-6 py-2.5 text-sm font-bold flex items-center hover:bg-white transition-colors">
                Reserve now <ArrowRight className="w-4 h-4 ml-2" />
              </button>
              <button className="bg-[#EBE0D3] text-[#451A14] px-6 py-2.5 text-sm font-bold flex items-center hover:bg-white transition-colors">
                Open in Google Maps <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>
          </div>
        </div>

        {/* Separator Curve */}
        <div className="w-full relative h-20 md:h-32 flex items-center justify-center my-8 pointer-events-none">
          <svg viewBox="0 0 1440 100" className="absolute w-full min-w-[1440px]" preserveAspectRatio="none">
            <path d="M0,50 Q720,100 1440,50" fill="none" stroke={colors.gold} strokeWidth="1" opacity="0.4" />
          </svg>
        </div>

        {/* ================= FINAL CTA ================= */}
        <div className="max-w-3xl mx-auto px-6 text-center pb-12 relative z-10">
          <h2 className="text-3xl md:text-5xl font-serif leading-tight mb-6">
            Reserve your table now to secure an<br className="hidden md:block"/>unforgettable dining experience with us
          </h2>
          <p className="text-sm md:text-base opacity-70 leading-relaxed max-w-xl mx-auto mb-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/>
            Sed do eiusmod tempor incididunt ut labore et dolore<br/>
            magna aliqua.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-[#EBE0D3] text-[#451A14] px-8 py-3 text-sm font-bold flex items-center hover:bg-white transition-colors shadow-lg">
              Reserve now <ArrowRight className="w-4 h-4 ml-2" />
            </button>
            <button className="bg-[#EBE0D3] text-[#451A14] px-8 py-3 text-sm font-bold flex items-center hover:bg-white transition-colors shadow-lg">
              Explore Menu <ArrowRight className="w-4 h-4 ml-2" />
            </button>
          </div>
        </div>
      </section>

      {}
      {/* Convex curve under FINAL CTA (Maroon pointing down into Beige) */}
      <div className="w-full relative z-20 -mt-[1px]">
        <svg viewBox="0 0 1440 120" className="w-full block h-12 md:h-20 lg:h-28" preserveAspectRatio="none">
           <path d="M0,0 L1440,0 C960,120 480,120 0,0 Z" fill={colors.maroon} />
        </svg>
      </div>

      {/* ================= BLOG SECTION ================= */}
      <section className="max-w-5xl mx-auto px-6 py-20 md:py-28 relative z-10">
        <h2 className="text-3xl md:text-4xl font-serif text-[#451A14] text-center mb-12">Visit Our Blog</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="overflow-hidden shadow-xl aspect-square border-4 border-white/40">
            <img src="https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=1000&auto=format&fit=crop" alt="Blog 1" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"/>
          </div>
          <div className="overflow-hidden shadow-xl aspect-square border-4 border-white/40">
            <img src="https://images.unsplash.com/photo-1563379926898-05f4575a45d8?q=80&w=1000&auto=format&fit=crop" alt="Blog 2" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"/>
          </div>
          <div className="overflow-hidden shadow-xl aspect-square border-4 border-white/40">
            <img src="https://images.unsplash.com/photo-1551218808-94e220e084d2?q=80&w=1000&auto=format&fit=crop" alt="Blog 3" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"/>
          </div>
        </div>
      </section>


    </div>
  );
}