'use client'
import React, { useState } from 'react';

const MenuPage = () => {
  const [activeMenu, setActiveMenu] = useState('menu1');

  const menuOptions = [
    { id: 'menu1', label: 'Menu 1', pdfUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf' },
    { id: 'menu2', label: 'Menu 2', pdfUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf' }, // Reused dummy for testing
    { id: 'menu3', label: 'Menu 3', pdfUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf' }, // Reused dummy for testing
    { id: 'menu4', label: 'Menu 4', pdfUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf' },
  ];

  return (
    <div className="font-serif text-[#3e1f1c] bg-[#F7E7CE] min-h-screen">
      
      {}
      <div 
        className="relative w-full h-[800px] bg-cover bg-center overflow-hidden rounded-b-[40%] shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")' }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-[#F7E7CE] p-8 mt-20">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg tracking-wide">
            Lorem ipsum dolor sit amet.<br />consectetur
          </h1>
          <p className="max-w-2xl text-base md:text-lg mb-10 drop-shadow-md opacity-90 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="flex space-x-6">
            <button className="px-8 py-3 bg-[#F7E7CE] text-[#3e1f1c] rounded-full font-bold hover:bg-white transition duration-300 flex items-center shadow-xl">
              Reservation <span className="ml-3">➔</span>
            </button>
            <button className="px-8 py-3 bg-transparent border-2 border-[#F7E7CE] text-[#F7E7CE] rounded-full font-bold hover:bg-[#F7E7CE] hover:text-[#3e1f1c] transition duration-300 flex items-center shadow-xl">
              Contact us <span className="ml-3">➔</span>
            </button>
          </div>
        </div>
      </div>

      {}
      <div className="max-w-7xl mx-auto px-6 py-32 flex flex-col md:flex-row items-center gap-20">
        <div className="w-full md:w-1/2 flex justify-end relative">
          {/* Decorative background shape to match the design's cutout feel */}
          <div className="absolute top-4 left-1/4 w-3/4 h-full bg-[#E8D5BA] rounded-tl-[4rem] rounded-br-[4rem] -z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
            alt="Dining Table" 
            className="w-4/5 object-cover h-[450px] rounded-tl-[4rem] rounded-br-[4rem] shadow-2xl z-10"
          />
        </div>
        <div className="w-full md:w-1/2 pr-12">
          <h2 className="text-4xl font-bold mb-8 text-[#4a2e2b]">Lorem Ipsum</h2>
          <p className="text-[#5a3e3b] leading-loose text-lg mb-6 text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
        </div>
      </div>

      {}
      <div className="text-center py-16 px-4">
        <h2 className="text-5xl font-bold mb-6 text-[#4a2e2b]">
          Lorem ipsum dolor sit<br />amet. consectetur
        </h2>
        <p className="max-w-3xl mx-auto text-[#5a3e3b] text-lg leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      {}
      <div className="bg-[#440B0B] w-full py-24 px-4">
        <div className="max-w-5xl mx-auto">
          
          {/* Radio Button Tabs - Styled to look like connected tabs */}
          <div className="flex mx-auto w-3/4 max-w-3xl -mb-px">
            {menuOptions.map((menu, index) => (
              <label 
                key={menu.id} 
                className={`flex-1 text-center py-4 px-6 cursor-pointer transition-all duration-300 border border-[#F7E7CE]
                  ${activeMenu === menu.id 
                    ? 'bg-[#F7E7CE] text-[#440B0B] font-bold border-b-transparent' 
                    : 'bg-[#8B5A55] text-[#F7E7CE] hover:bg-[#A0706A] opacity-80'
                  }
                  ${index === 0 ? 'rounded-tl-lg' : ''}
                  ${index === menuOptions.length - 1 ? 'rounded-tr-lg' : ''}
                `}
              >
                <input
                  type="radio"
                  name="menuSelection"
                  value={menu.id}
                  checked={activeMenu === menu.id}
                  onChange={() => setActiveMenu(menu.id)}
                  className="hidden" 
                />
                <span className="text-lg tracking-wider">{menu.label}</span>
              </label>
            ))}
          </div>
          
          {/* PDF Container - Large rectangle area */}
          <div className="bg-[#F7E7CE] w-full h-[900px] flex items-center justify-center mx-auto border-4 border-[#F7E7CE] shadow-2xl relative z-10">
             <iframe 
                src={menuOptions.find(m => m.id === activeMenu)?.pdfUrl} 
                width="100%" 
                height="100%" 
                title="Restaurant Menu"
                className="border-none bg-white"
             >
                <p>It appears your browser doesn't support iframes or PDF viewing. You can <a href={menuOptions.find(m => m.id === activeMenu)?.pdfUrl}>download the menu here</a>.</p>
             </iframe>
          </div>
        </div>
      </div>

      {}
      <div className="max-w-7xl mx-auto px-6 py-32">
        <div className="mb-16">
          <p className="text-sm uppercase tracking-widest text-[#5a3e3b] mb-3 font-semibold">Lorem ipsum</p>
          <h2 className="text-5xl font-bold text-[#4a2e2b]">Lorem ipsum dolor sit amet</h2>
        </div>

        {/* Gallery Grid Layout matching the design */}
        <div className="flex flex-col gap-6">
           {/* Top Row: 3 smaller images */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <img src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Restaurant interior" className="w-full h-72 object-cover rounded-xl shadow-lg hover:opacity-90 transition-opacity" />
            <img src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Restaurant interior" className="w-full h-72 object-cover rounded-xl shadow-lg hover:opacity-90 transition-opacity" />
            <img src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Restaurant interior" className="w-full h-72 object-cover rounded-xl shadow-lg hover:opacity-90 transition-opacity" />
          </div>
          
          {/* Middle Row: 1 large image spanning full width */}
          <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="Table setup" className="w-full h-[500px] object-cover rounded-xl shadow-lg hover:opacity-90 transition-opacity" />
          
          {/* Bottom Row: 2 medium images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Restaurant interior" className="w-full h-96 object-cover rounded-xl shadow-lg hover:opacity-90 transition-opacity" />
            <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Restaurant interior" className="w-full h-96 object-cover rounded-xl shadow-lg hover:opacity-90 transition-opacity" />
          </div>
        </div>

        {}
        <div className="text-center mt-24 px-4">
          <h3 className="text-3xl font-bold mb-6 text-[#4a2e2b]">Lorem ipsum dolor sit amet</h3>
          <p className="max-w-2xl mx-auto text-[#5a3e3b] mb-10 text-base leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="flex justify-center space-x-8">
            <button className="px-10 py-3 bg-[#440B0B] text-[#F7E7CE] rounded-full font-bold hover:bg-[#6a1717] transition duration-300 flex items-center shadow-xl">
              Reservation <span className="ml-3">➔</span>
            </button>
            <button className="px-10 py-3 bg-[#440B0B] text-[#F7E7CE] rounded-full font-bold hover:bg-[#6a1717] transition duration-300 flex items-center shadow-xl">
              View Menu <span className="ml-3">➔</span>
            </button>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default MenuPage;