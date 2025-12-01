// src/components/contact/ContactCTA.js

import React from 'react';
import { ArrowDown } from 'lucide-react'; // Ok ikonu için (Şimdilik düz ok kullanıyoruz, kıvrımlı için SVG ekleyebiliriz)

const ContactCTA = () => {
    return (
        <section className="bg-white py-16">
            <div className="max-w-7xl mx-auto px-4 flex flex-col items-center text-center">
                
                {/* OK SİMGESİ (Kıvrımlı ok yerine şimdilik benzer bir SVG çizimi) */}
                <div className="mb-8">
                    {/* Basit bir kıvrımlı ok SVG'si */}
                    <svg width="60" height="60" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-sky-500 transform rotate-12">
                        <path d="M20 20 Q 50 10, 60 50 L 50 40 M 60 50 L 70 40" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>

                {/* ÜST METİN */}
                <h6 className="text-base font-bold text-slate-800 uppercase tracking-wide mb-6">
                    WE Can't WAIT TO MEET YOU
                </h6>

                {/* ANA BAŞLIK */}
                <h2 className="text-5xl md:text-6xl font-bold text-slate-800 mb-8">
                    Let’s Talk
                </h2>

                {/* BUTON */}
                <button className="bg-sky-500 hover:bg-sky-600 text-white text-sm font-bold py-4 px-10 rounded-md transition-colors shadow-md hover:shadow-lg">
                    Try it free now
                </button>

            </div>
        </section>
    );
};

export default ContactCTA;