// src/components/BlogSection.js

import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, ChartArea, ChevronRight } from 'lucide-react';

const blogPosts = [
    {
        id: 1,
        // Bu görsel değişmedi (Renkli Yol)
        image: "https://images.unsplash.com/photo-1519999482648-25049ddd37b1?q=80&w=2026&auto=format&fit=crop", 
        tags: ["Google", "Trending", "New"],
        title: "Loudest à la Madison #1 (L'integral)",
        description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
        date: "22 April 2021",
        comments: 10
    },
    {
        id: 2,
        // 👇 GÜNCELLEME 1: Pembe Araba görseli
        image: "https://i.imgur.com/WMicfsW.png", 
        tags: ["Google", "Trending", "New"],
        title: "Loudest à la Madison #1 (L'integral)",
        description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
        date: "22 April 2021",
        comments: 10
    },
    {
        id: 3,
        // 👇 GÜNCELLEME 2: Şemsiyeler görseli
        image: "https://images.unsplash.com/photo-1602427670924-d4942df40999?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dW1icmVsbGFzfGVufDB8fDB8fHww", 
        tags: ["Google", "Trending", "New"],
        title: "Loudest à la Madison #1 (L'integral)",
        description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
        date: "22 April 2021",
        comments: 10
    }
];

const BlogSection = () => {
    return (
        <section className="py-24 max-w-7xl mx-auto px-4 lg:px-0">
            <div className="flex flex-col items-center text-center mb-16">
                <h6 className="text-sm font-bold text-sky-500 mb-2">Practice Advice</h6>
                <h2 className="text-4xl font-bold text-slate-800 tracking-tight">Featured Posts</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {blogPosts.map((post) => (
                    <div key={post.id} className="bg-white shadow-lg group hover:shadow-xl transition-shadow duration-300 flex flex-col">
                        <div className="relative h-[300px] overflow-hidden">
                            <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"/>
                            <span className="absolute top-5 left-5 bg-red-500 text-white text-sm font-bold px-3 py-1 rounded shadow-md">NEW</span>
                        </div>
                        <div className="p-6 flex flex-col flex-grow">
                            <div className="flex items-center space-x-4 mb-3 text-xs text-gray-500">
                                {post.tags.map((tag, i) => (
                                    <span key={i} className={`${i === 0 ? 'text-sky-400' : ''}`}>{tag}</span>
                                ))}
                            </div>
                            <h3 className="text-xl font-bold text-slate-800 mb-2 leading-snug">{post.title}</h3>
                            <p className="text-sm text-gray-500 mb-4 line-clamp-3">{post.description}</p>
                            <div className="mt-auto">
                                <div className="flex justify-between items-center py-4">
                                    <div className="flex items-center text-xs text-gray-500 font-medium"><Clock size={16} className="text-sky-500 mr-1" />{post.date}</div>
                                    <div className="flex items-center text-xs text-gray-500 font-medium"><ChartArea size={16} className="text-green-700 mr-1" />{post.comments} comments</div>
                                </div>
                                <Link to={`/blog/${post.id}`} className="inline-flex items-center text-base font-bold text-gray-500 hover:text-sky-500 transition-colors mt-2 group-hover:translate-x-1 duration-300">
                                    Learn More <ChevronRight size={20} className="text-sky-500 ml-2" />
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default BlogSection;