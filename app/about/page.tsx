'use client';
import React from 'react';
import { ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'dark' | 'light' | 'white';
  className?: string;
}

const Button = ({ children, variant = 'dark', className = '' }: ButtonProps) => {
  const baseStyle = "inline-flex items-center justify-center gap-3 px-7 py-3.5 rounded-full text-sm font-medium transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]";
  const variantStyles: Record<'dark' | 'light' | 'white', string> = {
    dark: 'bg-[#3E1511] text-[#F6ECE1] hover:bg-[#2c0e0b]',
    light: 'bg-[#F6ECE1] text-[#3E1511] hover:bg-white',
    white: 'bg-white text-[#3E1511] shadow-sm hover:bg-[#F6ECE1]',
  };
  return (
    <button className={baseStyle + ' ' + variantStyles[variant] + ' ' + className}>
      {children}
    </button>
  );
};

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-[#EBE0D3] font-sans overflow-x-hidden">

      {/* HERO */}
      <div className="relative w-full h-[75vh] min-h-[600px] overflow-hidden shadow-xl" style={{ borderRadius: '0 0 50% 50% / 0 0 8vw' }}>
        <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" alt="Restaurant Interior" className="absolute inset-0 w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>
        <Navbar activePage="about" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 text-[#F6ECE1] pt-16">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-[4.5rem] leading-[1.1] max-w-4xl mx-auto drop-shadow-lg mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing</h1>
          <p className="font-sans text-sm md:text-base max-w-2xl mx-auto opacity-90 leading-relaxed drop-shadow-md">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
      </div>

      {/* CONTENT 1 */}
      <section className="pt-28 pb-16 px-6 md:px-12 max-w-[1200px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 border-b border-[#3E1511]/10 pb-20">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-[3.5rem] max-w-xl leading-[1.1] text-[#3E1511]">Lorem ipsum dolor sit amet, consectetur</h2>
          <div className="shrink-0 mt-4 md:mt-0">
            <Button variant="dark">Reserve now <ArrowRight size={18} strokeWidth={2} /></Button>
          </div>
        </div>
      </section>

      {/* CONTENT 2 */}
      <section className="py-12 px-6 md:px-12 max-w-[1200px] mx-auto mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div className="order-2 lg:order-1 pr-0 lg:pr-8">
            <h3 className="font-serif text-3xl md:text-4xl mb-6 text-[#3E1511]">Lorem Ipsum</h3>
            <p className="text-[15px] leading-[1.8] mb-10 text-[#3E1511]/80 text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <div className="flex flex-wrap gap-4">
              <Button variant="dark">Reserve Now <ArrowRight size={18} strokeWidth={2} /></Button>
              <Button variant="dark">Menu <ArrowRight size={18} strokeWidth={2} /></Button>
            </div>
          </div>
          <div className="order-1 lg:order-2 aspect-[4/3] rounded-3xl overflow-hidden shadow-lg border border-[#3E1511]/5">
            <img src="https://images.unsplash.com/photo-1544025162-831e505eb31e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Table setting" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* CARDS */}
      <section className="py-12 px-6 md:px-12 max-w-[1200px] mx-auto space-y-12">
        <div className="bg-[#3E1511] text-[#F6ECE1] rounded-[2rem] p-5 md:p-8 flex flex-col lg:flex-row items-center gap-8 lg:gap-16 shadow-xl">
          <div className="w-full lg:w-1/2 aspect-[4/3] rounded-[1.5rem] overflow-hidden shrink-0">
            <img src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Fine Dining" className="w-full h-full object-cover" />
          </div>
          <div className="w-full lg:w-1/2 py-4 lg:py-8 lg:pr-12">
            <h3 className="font-serif text-3xl md:text-4xl mb-6">Lorem Ipsum</h3>
            <p className="text-[15px] leading-[1.8] opacity-80 text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
        </div>
        <div className="bg-white text-[#3E1511] rounded-[2rem] p-5 md:p-8 flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-16 shadow-[0_15px_40px_rgb(62,21,17,0.08)] relative z-10 scale-[1.02]">
          <div className="w-full lg:w-1/2 py-4 lg:py-8 lg:pl-12">
            <h3 className="font-serif text-3xl md:text-4xl mb-6">Lorem Ipsum</h3>
            <p className="text-[15px] leading-[1.8] opacity-80 text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <div className="w-full lg:w-1/2 aspect-[4/3] rounded-[1.5rem] overflow-hidden shrink-0 shadow-md">
            <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Plated Food" className="w-full h-full object-cover" />
          </div>
        </div>
        <div className="bg-[#3E1511] text-[#F6ECE1] rounded-[2rem] p-5 md:p-8 flex flex-col lg:flex-row items-center gap-8 lg:gap-16 shadow-xl relative z-0">
          <div className="w-full lg:w-1/2 aspect-[4/3] rounded-[1.5rem] overflow-hidden shrink-0">
            <img src="https://images.unsplash.com/photo-1544025162-831e505eb31e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Restaurant Ambiance" className="w-full h-full object-cover" />
          </div>
          <div className="w-full lg:w-1/2 py-4 lg:py-8 lg:pr-12">
            <h3 className="font-serif text-3xl md:text-4xl mb-6">Lorem Ipsum</h3>
            <p className="text-[15px] leading-[1.8] opacity-80 text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pt-32 pb-32 px-6 text-center max-w-3xl mx-auto flex flex-col items-center">
        <h2 className="font-serif text-4xl md:text-5xl mb-6 text-[#3E1511]">Lorem ipsum dolor sit amet</h2>
        <p className="text-[15px] text-[#3E1511]/80 mb-12 max-w-[550px] leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <div className="flex flex-wrap justify-center gap-5">
          <Button variant="dark">Reserve now <ArrowRight size={18} strokeWidth={2} /></Button>
          <Button variant="dark">View Menu <ArrowRight size={18} strokeWidth={2} /></Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
