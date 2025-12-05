// src/components/about/AboutVideo.js

import React from 'react';
import { Play } from 'lucide-react';

const AboutVideo = () => {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                
                {/* Video Container */}
                {/* h-[400px] md:h-[500px] yüksekliği görselin görünmesi için önemli */}
                <div className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden group cursor-pointer shadow-xl">
                    
                    {/* Arka Plan Görseli (Dağ Manzarası) */}
                    <img 
                        src="https://i.imgur.com/wHvNZNg.jpeg" 
                        alt="Video Thumbnail" 
                        className="w-full h-full object-cover"
                    />
                    
                    {/* Overlay (Hafif karartma) */}
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors"></div>

                    {/* Play Butonu (Tam Orta) */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        <button className="bg-sky-500 hover:bg-sky-600 text-white rounded-full p-6 md:p-8 shadow-2xl transition-transform transform group-hover:scale-110 flex items-center justify-center">
                            <Play size={32} fill="currentColor" className="ml-1 text-white" />
                        </button>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AboutVideo;