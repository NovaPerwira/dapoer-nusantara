'use client';
import React from 'react';

export default function App() {
    return (
        <div className="min-h-screen bg-[#F4EBD8] font-sans text-[#4A1713] flex flex-col">
            <main className="flex-grow">

                { }
                <section className="relative h-[60vh] min-h-[400px] w-full">
                    <img
                        src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=2000"
                        alt="Restaurant Interior"
                        className="w-full h-full object-cover brightness-50"
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4 text-center">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6 max-w-4xl leading-tight text-white drop-shadow-md">
                            Lorem ipsum dolor sit<br />amet, consectetur adipiscing
                        </h1>
                        <p className="text-sm md:text-base max-w-2xl text-gray-200">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.
                        </p>
                    </div>
                </section>

                { }
                <section className="px-4 py-16 max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="h-[400px] md:h-[600px]">
                            <img
                                src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&q=80&w=800"
                                alt="Dining Area"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-4 h-[400px] md:h-[600px]">
                            <img
                                src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=600"
                                alt="Details"
                                className="w-full h-full object-cover"
                            />
                            <img
                                src="https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&q=80&w=600"
                                alt="Table setup"
                                className="w-full h-full object-cover"
                            />
                            <img
                                src="https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?auto=format&fit=crop&q=80&w=600"
                                alt="Drinks"
                                className="w-full h-full object-cover"
                            />
                            <img
                                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=600"
                                alt="Plating"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </section>

                { }
                <section className="py-12 px-4 max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
                    <h2 className="text-3xl md:text-5xl font-serif leading-tight max-w-xl">
                        Lorem ipsum dolor sit<br />amet, consectetur
                    </h2>
                    <button className="bg-[#4A1713] text-[#F4EBD8] px-8 py-4 flex items-center gap-3 hover:bg-[#3A100C] transition-colors font-serif tracking-widest text-sm whitespace-nowrap">
                        Reserve now
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </button>
                </section>

                { }
                <section className="px-4 py-8 max-w-7xl mx-auto">
                    <img
                        src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1600"
                        alt="Dining Table Spread"
                        className="w-full h-[60vh] object-cover"
                    />
                </section>

                { }
                <section className="py-12 px-4 max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl md:text-5xl font-serif mb-6">
                        Lorem ipsum dolor<br />sit amet
                    </h2>
                    <p className="text-sm md:text-base opacity-80 leading-relaxed max-w-2xl mx-auto">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                </section>

                { }
                <section className="px-4 py-8 max-w-7xl mx-auto">
                    <img
                        src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&q=80&w=1600"
                        alt="Dining Table Spread"
                        className="w-full h-[60vh] object-cover"
                    />
                </section>

                { }
                <section className="py-12 px-4 max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl md:text-5xl font-serif mb-6">
                        Lorem ipsum dolor<br />sit amet
                    </h2>
                    <p className="text-sm md:text-base opacity-80 leading-relaxed max-w-2xl mx-auto">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                </section>

                { }
                <section className="px-4 py-8 max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row gap-2 h-auto md:h-[1350px]">

                        {/* Left Column - approx 49% width, containing 3 stacked image rows */}
                        <div className="w-full md:w-[49%] flex flex-col gap-2 h-[1200px] md:h-full">

                            {/* Top Row in Left Column: 2 side-by-side images */}
                            <div className="flex gap-2 h-[33.33%]">
                                <div className="w-1/2 h-full">
                                    <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=600" alt="Restaurant Interior" className="w-full h-full object-cover" />
                                </div>
                                <div className="w-1/2 h-full">
                                    <img src="https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=80&w=600" alt="Dining Room" className="w-full h-full object-cover" />
                                </div>
                            </div>

                            {/* Middle Row in Left Column: 1 full-width image */}
                            <div className="h-[33.33%]">
                                <img src="https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&q=80&w=1200" alt="Table setting wide middle" className="w-full h-full object-cover" />
                            </div>

                            {/* Bottom Row in Left Column: 2 side-by-side images */}
                            <div className="flex gap-2 h-[33.33%]">
                                <div className="w-1/2 h-full">
                                    <img src="https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?auto=format&fit=crop&q=80&w=600" alt="Drinks bottom left" className="w-full h-full object-cover" />
                                </div>
                                <div className="w-1/2 h-full">
                                    <img src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=600" alt="Details bottom right" className="w-full h-full object-cover" />
                                </div>
                            </div>

                        </div>

                        {/* Right Column - approx 51% width, containing 1 tall top image and 1 bottom row */}
                        <div className="w-full md:w-[51%] flex flex-col gap-2 h-[1000px] md:h-full">
                            {/* Top Image: Tall image */}
                            <div className="h-[52%]">
                                <img src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&q=80&w=1000" alt="Dining area right top" className="w-full h-full object-cover" />
                            </div>
                            {/* Bottom Block: Split into top restaurant ambiance + bottom food table */}
                            <div className="h-[48%] flex flex-col gap-2">
                                <div className="h-[40%]">
                                    <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800" alt="Ambiance" className="w-full h-full object-cover" />
                                </div>
                                <div className="h-[60%]">
                                    <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=1000" alt="Food right bottom" className="w-full h-full object-cover" />
                                </div>
                            </div>
                        </div>

                    </div>
                </section>

                { }
                <section className="text-center max-w-2xl mx-auto pb-10 pt-8">
                    <h3 className="text-3xl md:text-4xl font-serif text-[#4A1713] mb-4">Lorem ipsum dolor sit amet</h3>
                    <p className="text-sm opacity-80 leading-relaxed text-[#4A1713] mb-8 max-w-md mx-auto">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <div className="flex justify-center gap-6">
                        <button className="bg-[#3A1412] text-[#F4EBD8] px-8 py-3 flex items-center gap-2 hover:bg-[#2A0E0C] transition-colors font-serif tracking-wider text-sm">
                            Reserve now
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </button>
                        <button className="bg-[#3A1412] text-[#F4EBD8] px-8 py-3 flex items-center gap-2 hover:bg-[#2A0E0C] transition-colors font-serif tracking-wider text-sm">
                            View Menu
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </button>
                    </div>
                </section>

            </main>
        </div>
    );
}