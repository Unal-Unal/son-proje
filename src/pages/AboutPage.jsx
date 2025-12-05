// src/pages/AboutPage.js

import React from 'react';
// Layout
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import AboutContent from '../components/about/AboutContent';
import AboutStats from '../components/about/AboutStats';
import AboutVideo from '../components/about/AboutVideo';
import AboutTeam from '../components/about/AboutTeam';
import ClientsSection from '../components/ClientsSection';
import AboutTestimonials from '../components/about/AboutTestimonials';

const AboutPage = () => {
    return (
        <>
            <Header />
            
            <main className="bg-white font-sans overflow-hidden">
                
                {/* ============================================================
                    1. MOBILE HERO VIEW
                   ============================================================ */}
                <div className="block lg:hidden w-full py-12 px-4">
                    
                    {/* İçerik */}
                    <div className="flex flex-col items-center text-center space-y-8 mb-16 z-10 relative">
                        <h5 className="text-base font-bold text-slate-800 uppercase tracking-wide">
                            ABOUT COMPANY
                        </h5>
                        <h1 className="text-4xl font-bold text-slate-800 leading-tight">
                            ABOUT US
                        </h1>
                        <p className="text-xl text-gray-500 max-w-xs font-medium leading-relaxed">
                            We know how large objects will act, but things on a small scale
                        </p>
                        <button className="bg-sky-500 hover:bg-sky-600 text-white font-bold py-4 px-10 rounded-md transition-colors text-sm">
                            Get Quote Now
                        </button>
                    </div>

                    {/* Görsel Alanı */}
                    <div className="relative w-full flex justify-center items-center min-h-[450px]">
                        
                        {/* Ana Pembe Daire */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[260px] h-[260px] bg-[#FFE9EA] rounded-full z-0"></div>
                        
                        {/* DEKORATİF NOKTALAR (MOBİL) */}
                        <div className="absolute w-10 h-10 bg-[#FFE9EA] rounded-full z-0 top-[23%] left-[5%] opacity-50"></div>
                        <div className="absolute w-3 h-3 bg-[#977DF4] rounded-full z-0 bottom-[60%] right-[5%]"></div>
                        <div className="absolute w-3 h-3 bg-[#977DF4] rounded-full z-0 bottom-[25%] left-[15%]"></div>
                        
                        {/* Ana Resim */}
                        {/* 👇 GÜNCELLEME: scale-110 eklendi (Mobilde daha büyük) */}
                        <img 
                            src="https://i.imgur.com/yZZM5Wh.png" 
                            alt="About Us Hero" 
                            className="relative z-10 w-full h-auto object-contain scale-150"
                        />
                    </div>
                </div>


                {/* ============================================================
                    2. DESKTOP HERO VIEW
                   ============================================================ */}
                <div className="hidden lg:block w-full py-16">
                    <div className="max-w-7xl mx-auto px-8 flex flex-row items-center justify-between gap-12">
                        
                        {/* Sol: İçerik */}
                        <div className="w-1/2 flex flex-col items-start text-left space-y-8 z-20 -mt-40">
                            <h5 className="text-base font-bold text-slate-800 uppercase tracking-wide hidden md:block">
                                ABOUT COMPANY
                            </h5>
                            <h1 className="text-6xl font-bold text-slate-800 leading-tight">
                                ABOUT US
                            </h1>
                            <p className="text-xl text-gray-500 max-w-sm font-medium leading-relaxed">
                                We know how large objects will act, but things on a small scale
                            </p>
                            <button className="bg-sky-500 hover:bg-sky-600 text-white font-bold py-4 px-10 rounded-md transition-colors text-sm">
                                Get Quote Now
                            </button>
                        </div>

                        {/* Sağ: Görsel ve Arka Plan */}
                        <div className="w-full relative flex justify-center items-center min-h-[600px] overflow-visible">
                            
                            {/* Ana Pembe Daire */}
                            <div className="absolute w-[400px] h-[400px] bg-[#FFE9EA] rounded-full z-0 top-1/3 left-1/2 -translate-x-26 -translate-y-60"></div>
                            
                            {/* DEKORATİF NOKTALAR (DESKTOP) */}
                            <div className="absolute w-12 h-12 bg-[#FFE9EA] rounded-full z-0 top-6 left-80 opacity-60"></div>
                            <div className="absolute w-4 h-4 bg-[#977DF4] rounded-full z-0 top-28 -right-12"></div>
                            <div className="absolute w-4 h-4 bg-[#977DF4] rounded-full z-0 bottom-52 left-100"></div>

                            {/* Ana Resim */}
                            {/* 👇 GÜNCELLEME: max-w-[600px] kaldırıldı, yerine max-w-none eklendi. */}
                            <img 
                                src="https://i.imgur.com/yZZM5Wh.png" 
                                alt="About Us Hero" 
                                className="absolute z-10 -top-8  left-60 w-[800px] h-auto"                          />
                        </div>
                    </div>
                </div>

            </main>

            <AboutContent />

            <AboutStats />

            <AboutVideo />

            <AboutTeam />

            <ClientsSection />

            <AboutTestimonials />

            <Footer />
        </>
    );
};

export default AboutPage;