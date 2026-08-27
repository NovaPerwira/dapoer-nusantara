'use client';
import React, { useState, useEffect, useRef } from 'react';

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
  <div className="bg-white rounded-2xl p-6 flex flex-col justify-between h-[200px] min-w-[280px] md:min-w-[320px] flex-1 shadow-lg text-[#451A14]">
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
      <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden">
        <img src="https://i.pravatar.cc/150?img=32" alt="User" className="w-full h-full object-cover"/>
      </div>
      <div className="text-xs font-bold">Sarah Jenkins</div>
    </div>
  </div>
);

const Logo = () => (
  <div className="flex items-center gap-2 mr-6">
    <div className="w-8 h-8 rounded-full border border-white/80 flex items-center justify-center">
      <span className="italic font-serif text-sm text-white/90">DN</span>
    </div>
    <div className="flex flex-col uppercase tracking-widest text-[8px] leading-tight text-white/90">
      <span>Dapoer</span>
      <span>Nusantara</span>
    </div>
  </div>
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

  const getExpIndex = (offset) => {
    const len = expImages.length;
    return (((expIndex + offset) % len) + len) % len;
  };

  // --- State & Handlers for Reviews Sliders ---
  const reviewContainerRefGoogle = useRef(null);
  const reviewContainerRefTrip = useRef(null);

  const scrollReviews = (ref, direction) => {
    if (ref.current) {
      // 320px represents card width + gap approximation
      const scrollAmount = 320; 
      ref.current.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen font-sans" style={{ backgroundColor: colors.beige }}>
      
      {/* ================= HERO SECTION ================= */}
      {}
      <div className="relative w-full h-[85vh] flex flex-col justify-between overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop" 
            alt="Restaurant Interior" 
            className="w-full h-full object-cover"
          />
          {/* Subtle gradient to make text readable */}
          <div className="absolute inset-0 bg-black/40 bg-gradient-to-t from-black/70 via-transparent to-black/30"></div>
        </div>

        {/* Floating Unified Navbar */}
        <nav className="relative z-20 w-full px-6 py-6 md:py-8 flex justify-center">
           <div className="bg-black/20 backdrop-blur-md border border-white/20 p-2 pl-4 pr-2 rounded-full flex items-center justify-between w-full max-w-5xl shadow-2xl">
              
              <Logo />
              
              {/* Center Links */}
              <div className="hidden md:flex items-center gap-6 text-[11px] uppercase tracking-wider text-white/80 font-medium px-4">
                 <a href="#" className="hover:text-white transition-colors">Home</a>
                 <a href="#" className="hover:text-white transition-colors">Menu</a>
                 <a href="#" className="hover:text-white transition-colors">Experiences</a>
                 {/* Active Boxed Link */}
                 <a href="#" className="border border-white/40 px-4 py-1.5 rounded-full text-white">About</a>
                 <a href="#" className="hover:text-white transition-colors">Special Promo</a>
                 <a href="#" className="hover:text-white transition-colors">Blog</a>
              </div>

              {/* Right Reservation Button */}
              <button className="bg-[#451A14] text-[#EBE0D3] px-6 py-2 rounded-full text-[11px] uppercase tracking-wider font-semibold hover:bg-[#31110d] transition-colors ml-4">
                Reservation
              </button>
           </div>
        </nav>

        {/* Hero Text */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pb-32 md:pb-40">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white/95 leading-tight max-w-2xl text-shadow-lg">
            Lorem ipsum dolor sit<br/>amet, consectetur adipiscing
          </h1>
        </div>

        {/* Hero Bottom Convex Curve with Gold Stroke */}
        <div className="absolute bottom-0 left-0 w-full z-20 translate-y-[1px]">
          <svg viewBox="0 0 1440 120" className="w-full block h-16 md:h-24 lg:h-32" preserveAspectRatio="none">
             {/* Filled Area */}
             <path d="M0,120 L1440,120 L1440,50 C960,150 480,150 0,50 Z" fill={colors.beige} />
             {/* Gold Stroke Line */}
             <path d="M0,50 C480,150 960,150 1440,50" fill="none" stroke={colors.gold} strokeWidth="2" opacity="0.6" />
          </svg>
        </div>
      </div>


      {/* ================= ABOUT US SECTION ================= */}
      {}
      <section className="max-w-6xl mx-auto px-6 py-20 lg:py-32 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl md:text-5xl font-serif text-[#451A14] mb-8">About Us</h2>
            <p className="text-[#451A14]/80 leading-relaxed text-sm md:text-base pr-4 text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          
          {/* Image */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[300px] md:h-[350px]">
             <img 
               src="https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=2070&auto=format&fit=crop" 
               alt="Restaurant Ambience"
               className="absolute inset-0 w-full h-full object-cover"
             />
          </div>
        </div>
      </section>


      {/* ================= SIGNATURE MENU ================= */}
      {}
      <section className="max-w-6xl mx-auto px-6 pb-24 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Column 1 (Left Images) */}
          <div className="flex flex-col gap-6">
             <div className="rounded-2xl overflow-hidden shadow-xl relative aspect-[5/4]">
                <img src="https://images.unsplash.com/photo-1563379926898-05f4575a45d8?q=80&w=1000&auto=format&fit=crop" alt="Pasta Dish" className="absolute inset-0 w-full h-full object-cover" />
             </div>
             <div className="rounded-2xl overflow-hidden shadow-xl relative aspect-[5/4]">
                <img src="https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=1000&auto=format&fit=crop" alt="Rice Dish" className="absolute inset-0 w-full h-full object-cover" />
             </div>
          </div>

          {/* Column 2 (Center CTA) */}
          <div className="bg-[#451A14] rounded-2xl shadow-2xl flex flex-col items-center justify-center p-10 text-center min-h-[300px]">
             <h3 className="text-3xl md:text-4xl font-serif text-[#EBE0D3] leading-snug mb-8">
               Try Our<br/>Signature<br/>Menu!
             </h3>
             <button className="bg-[#EBE0D3] text-[#451A14] px-6 py-2.5 rounded-full text-sm font-bold flex items-center hover:bg-white transition-colors">
               Explore Menu <ArrowRight className="w-4 h-4 ml-2" />
             </button>
          </div>

          {/* Column 3 (Right Images) */}
          <div className="flex flex-col gap-6">
             <div className="rounded-2xl overflow-hidden shadow-xl relative aspect-[5/4]">
                <img src="https://images.unsplash.com/photo-1551218808-94e220e084d2?q=80&w=1000&auto=format&fit=crop" alt="Seafood Dish" className="absolute inset-0 w-full h-full object-cover" />
             </div>
             <div className="rounded-2xl overflow-hidden shadow-xl relative aspect-[5/4]">
                <img src="https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?q=80&w=1000&auto=format&fit=crop" alt="Creamy Dish" className="absolute inset-0 w-full h-full object-cover" />
             </div>
          </div>
          
        </div>
      </section>


      {/* ================= EXPERIENCES SLIDER & TRANSITION ================= */}
      {}
      <section className="w-full relative pt-12 pb-24">
        
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
             className="absolute left-[-10%] md:left-0 w-1/3 md:w-[30%] h-[70%] rounded-3xl overflow-hidden opacity-30 shadow-lg blur-[2px] cursor-pointer hover:opacity-60 hover:scale-[1.02] transition-all duration-700 z-20"
             onClick={() => setExpIndex(getExpIndex(-1))}
           >
              <img src={expImages[getExpIndex(-1)]} alt="Experience Left" className="w-full h-full object-cover transition-all duration-700" />
           </div>

           {/* Center Main Image */}
           <div className="relative z-40 w-[80%] md:w-[50%] h-full rounded-3xl overflow-hidden shadow-2xl border-4 border-black/5 transition-all duration-700">
              <img src={expImages[expIndex]} alt="Main Experience" className="w-full h-full object-cover transition-all duration-700" />
           </div>

           {/* Right Phantom Image */}
           <div 
             className="absolute right-[-10%] md:right-0 w-1/3 md:w-[30%] h-[70%] rounded-3xl overflow-hidden opacity-30 shadow-lg blur-[2px] cursor-pointer hover:opacity-60 hover:scale-[1.02] transition-all duration-700 z-20"
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
          
          {/* Pagination Dots for Experiences */}
          <div className="flex gap-2 mb-8 justify-center">
            {expImages.map((_, idx) => (
              <button 
                key={idx}
                onClick={() => setExpIndex(idx)}
                className={`h-1.5 rounded-full transition-all duration-300 ${idx === expIndex ? 'w-8 bg-[#EBE0D3]' : 'w-1.5 bg-white/40 hover:bg-white/70'}`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          {/* Footer Text Area */}
          <p className="text-sm md:text-base opacity-80 leading-relaxed max-w-2xl mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do<br/>
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <button className="bg-[#EBE0D3] text-[#451A14] px-6 py-2.5 rounded-full text-sm font-bold flex items-center hover:bg-white transition-colors">
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
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 -ml-4 w-8 h-8 flex items-center justify-center bg-[#451A14] text-[#EBE0D3] rounded-full border border-[#D4B895] hover:bg-[#31110d] transition-colors shadow-lg"
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
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 -mr-4 w-8 h-8 flex items-center justify-center bg-[#451A14] text-[#EBE0D3] rounded-full border border-[#D4B895] hover:bg-[#31110d] transition-colors shadow-lg"
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
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 -ml-4 w-8 h-8 flex items-center justify-center bg-[#451A14] text-[#EBE0D3] rounded-full border border-[#D4B895] hover:bg-[#31110d] transition-colors shadow-lg"
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
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 -mr-4 w-8 h-8 flex items-center justify-center bg-[#451A14] text-[#EBE0D3] rounded-full border border-[#D4B895] hover:bg-[#31110d] transition-colors shadow-lg"
              >
                 <ArrowRight className="w-4 h-4 ml-0" />
              </button>
            </div>

            {/* Logo */}
            <div className="w-full xl:w-48 flex-shrink-0 flex justify-center xl:justify-end xl:pl-6">
               <div className="flex items-center gap-2 font-bold text-xl">
                 {/* Fake Owl Icon */}
                 <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-5l-2.25 2.25-1.5-1.5L12 7l4.75 4.75-1.5 1.5L13 11.5v5h-2z"/></svg>
                 </div>
                 Tripadvisor
               </div>
            </div>
          </div>
        </div>

        {/* ================= LOCATION / MAP ================= */}
        <div className="max-w-5xl mx-auto px-6 mb-24">
          <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10 relative h-[300px] md:h-[450px] w-full">
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
               <div className="bg-white text-black px-3 py-1 rounded-full text-xs font-bold mt-1 shadow-md">
                 Dapoer Nusantara
               </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <h2 className="text-3xl md:text-4xl font-serif leading-tight mb-8">
              Easily pin our location and plan<br/>your visit today
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-[#EBE0D3] text-[#451A14] px-6 py-2.5 rounded-full text-sm font-bold flex items-center hover:bg-white transition-colors">
                Reserve now <ArrowRight className="w-4 h-4 ml-2" />
              </button>
              <button className="bg-[#EBE0D3] text-[#451A14] px-6 py-2.5 rounded-full text-sm font-bold flex items-center hover:bg-white transition-colors">
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
            <button className="bg-[#EBE0D3] text-[#451A14] px-8 py-3 rounded-full text-sm font-bold flex items-center hover:bg-white transition-colors shadow-lg">
              Reserve now <ArrowRight className="w-4 h-4 ml-2" />
            </button>
            <button className="bg-[#EBE0D3] text-[#451A14] px-8 py-3 rounded-full text-sm font-bold flex items-center hover:bg-white transition-colors shadow-lg">
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
          <div className="rounded-[2rem] overflow-hidden shadow-xl aspect-square border-4 border-white/40">
            <img src="https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=1000&auto=format&fit=crop" alt="Blog 1" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"/>
          </div>
          <div className="rounded-[2rem] overflow-hidden shadow-xl aspect-square border-4 border-white/40">
            <img src="https://images.unsplash.com/photo-1563379926898-05f4575a45d8?q=80&w=1000&auto=format&fit=crop" alt="Blog 2" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"/>
          </div>
          <div className="rounded-[2rem] overflow-hidden shadow-xl aspect-square border-4 border-white/40">
            <img src="https://images.unsplash.com/photo-1551218808-94e220e084d2?q=80&w=1000&auto=format&fit=crop" alt="Blog 3" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"/>
          </div>
        </div>
      </section>

      {}
      {/* ================= FOOTER ================= */}
      {/* Convex curve for Footer (Maroon dome pointing up into Beige) */}
      <div className="w-full relative z-20 -mb-[1px]">
        <svg viewBox="0 0 1440 120" className="w-full block h-12 md:h-20 lg:h-28" preserveAspectRatio="none">
           <path d="M0,120 L1440,120 C960,0 480,0 0,120 Z" fill={colors.maroon} />
        </svg>
      </div>
      
      <footer className="bg-[#451A14] text-[#EBE0D3] pt-12 pb-10 px-6 relative z-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-6 mb-12">
          
          {/* Logo Area */}
          <div className="md:col-span-4 flex flex-col justify-start">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-full border border-[#EBE0D3]/80 flex items-center justify-center">
                <span className="italic font-serif text-xl text-[#EBE0D3]/90">DN</span>
              </div>
              <div className="flex flex-col uppercase tracking-widest leading-tight text-[#EBE0D3] font-serif">
                <span className="text-lg">Dapoer</span>
                <span className="text-lg">Nusantara</span>
              </div>
            </div>
          </div>

          {/* Explore Links */}
          <div className="md:col-span-3">
            <h4 className="font-serif text-lg mb-5 text-[#EBE0D3]">Explore</h4>
            <ul className="flex flex-col gap-3 text-sm opacity-80">
              <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Menu</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Experiences</a></li>
              <li><a href="#" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Special Promo</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>

          {/* Visit Us & Socials */}
          <div className="md:col-span-5">
            <h4 className="font-serif text-lg mb-5 text-[#EBE0D3]">Visit Us</h4>
            <p className="text-sm opacity-80 leading-relaxed mb-8 max-w-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            
            <h4 className="font-serif text-lg mb-5 text-[#EBE0D3]">Social</h4>
            <div className="flex gap-4">
              {/* Tripadvisor Icon */}
              <a href="#" className="w-10 h-10 rounded-[0.8rem] bg-[#EBE0D3] text-[#451A14] flex items-center justify-center hover:bg-white hover:-translate-y-1 transition-all duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-5l-2.25 2.25-1.5-1.5L12 7l4.75 4.75-1.5 1.5L13 11.5v5h-2z"/></svg>
              </a>
              {/* Instagram Icon */}
              <a href="#" className="w-10 h-10 rounded-[0.8rem] bg-[#EBE0D3] text-[#451A14] flex items-center justify-center hover:bg-white hover:-translate-y-1 transition-all duration-300">
                 <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
              {/* Facebook Icon */}
              <a href="#" className="w-10 h-10 rounded-[0.8rem] bg-[#EBE0D3] text-[#451A14] flex items-center justify-center hover:bg-white hover:-translate-y-1 transition-all duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.312h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/></svg>
              </a>
              {/* TikTok Icon */}
              <a href="#" className="w-10 h-10 rounded-[0.8rem] bg-[#EBE0D3] text-[#451A14] flex items-center justify-center hover:bg-white hover:-translate-y-1 transition-all duration-300">
                 <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 15.68a6.34 6.34 0 006.33 6.32 6.32 6.32 0 006.32-6.32V10a8.11 8.11 0 004.34 1.24V7.81a4.93 4.93 0 01-2.4-.12z"/></svg>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="max-w-6xl mx-auto text-[12px] opacity-70">
          Copyright...
        </div>
      </footer>

    </div>
  );
}