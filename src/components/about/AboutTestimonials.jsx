// src/components/about/AboutTestimonials.js

import React from 'react';

const AboutTestimonials = () => {
    return (
        // Yükseklik 500px sabit.
        <section className="w-full flex flex-col lg:flex-row lg:h-[640px]">
            
            {/* --- SOL KISIM (MAVİ ALAN) --- */}
            <div className="w-full lg:w-3/5 bg-[#2A7CC7] text-white py-12 px-8 flex flex-col justify-center items-center h-full">
                <div className="max-w-md flex flex-col items-center lg:items-start text-center lg:text-left gap-4">
                    <h5 className="text-base font-bold uppercase tracking-wide">
                        WORK WITH US
                    </h5>
                    <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                        Now Let’s grow Yours
                    </h2>
                    <p className="text-sm font-medium leading-relaxed">
                        The gradual accumulation of information about atomic and small-scale behavior during the first quarter of the 20th
                    </p>
                    <button className="border border-white text-white text-sm font-bold py-3 px-10 rounded-md hover:bg-white hover:text-[#2A7CC7] transition-colors mt-2">
                        Button
                    </button>
                </div>
            </div>

            {/* --- SAĞ KISIM (GÖRSEL) --- */}
            <div className="hidden lg:block w-full lg:w-2/5 h-full bg-white">
                <img 
                    src="https://imgur.com/MWInHho.png" 
                    alt="Testimonial Woman" 
                    // 👇 GÜNCELLEME: object-cover ve object-top
                    // Alanı tamamen doldurur (boşluk kalmaz).
                    // Resmi kırpar ama üst kısmını (yüzü) öncelikli gösterir.
                    className="w-full h-full object-top"
                />
            </div>
            
        </section>
    );
};

export default AboutTestimonials;