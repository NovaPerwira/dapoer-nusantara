'use client';

import React from 'react';
import { Menu, Send, Camera, BadgeCheck, Disc as Discord } from 'lucide-react';

// Types for our blog post data
interface BlogPost {
    id: number;
    title: string;
    excerpt: string;
    imageUrl: string;
}

// Sample data based on the design
const blogPosts: BlogPost[] = [
    {
        id: 1,
        title: 'Lorem ipsum',
        excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        imageUrl: 'https://images.unsplash.com/photo-1559314809-0d155014e29e?q=80&w=800&auto=format&fit=crop', // Shrimp fried rice
    },
    {
        id: 2,
        title: 'Lorem ipsum',
        excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        imageUrl: 'https://images.unsplash.com/photo-1547496502-affa22d38842?q=80&w=800&auto=format&fit=crop', // Spaghetti with shrimp
    },
    {
        id: 3,
        title: 'Lorem ipsum',
        excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        imageUrl: 'https://images.unsplash.com/photo-1559314809-0d155014e29e?q=80&w=800&auto=format&fit=crop', // Shrimp fried rice
    },
    {
        id: 4,
        title: 'Lorem ipsum',
        excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        imageUrl: 'https://images.unsplash.com/photo-1547496502-affa22d38842?q=80&w=800&auto=format&fit=crop', // Spaghetti with shrimp
    },
    {
        id: 5,
        title: 'Lorem ipsum',
        excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        imageUrl: 'https://images.unsplash.com/photo-1559314809-0d155014e29e?q=80&w=800&auto=format&fit=crop', // Shrimp fried rice
    },
    {
        id: 6,
        title: 'Lorem ipsum',
        excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        imageUrl: 'https://images.unsplash.com/photo-1547496502-affa22d38842?q=80&w=800&auto=format&fit=crop', // Spaghetti with shrimp
    },
];

export default function App() {
    return (
        <div className="min-h-screen bg-[#FDF5E6] font-serif text-[#3B1910]">
            {/* HERO SECTION */}
            { }
            <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center text-center">
                {/* Background Image with Overlay */}
                <div
                    className="absolute inset-0 bg-cover bg-center z-0"
                    style={{
                        backgroundImage: "url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop')", // Restaurant exterior placeholder
                    }}
                >
                    <div className="absolute inset-0 bg-black/40"></div>
                </div>

                {/* Hero Content */}
                <div className="relative z-10 max-w-3xl px-4 flex flex-col items-center">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-normal mb-6 leading-tight">
                        Lorem ipsum dolor sit amet,<br />
                        consectetur
                    </h1>
                    <p className="text-white/80 text-sm md:text-base max-w-lg mx-auto leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>
            </section>

            {/* MAIN CONTENT - BLOG GRID */}
            { }
            <main className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
                    {blogPosts.map((post) => (
                        <div key={post.id} className="flex flex-col group cursor-pointer overflow-hidden shadow-lg">
                            {/* Image Container */}
                            <div className="h-64 md:h-80 overflow-hidden bg-gray-200">
                                <img
                                    src={post.imageUrl}
                                    alt={post.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                            {/* Content Container */}
                            <div className="bg-[#4A1C12] text-[#FDF5E6] p-8 flex-grow">
                                <h2 className="text-3xl mb-3 font-normal">{post.title}</h2>
                                <p className="text-sm opacity-80 leading-relaxed font-sans">{post.excerpt}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </main>

        </div>
    );
}