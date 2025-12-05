// src/components/about/AboutContent.js

import React from 'react';

const AboutContent = () => {
    return (
        // Üst dolgu (pt-0) kaldırıldı, alt dolgu korundu.
        <section className="bg-white pt-0 pb-12 md:pt-0 md:pb-24">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                
                {/* FLEX CONTAINER (İki Sütunlu Yapı)
                   - Mobilde: flex-col (Alt alta)
                   - Desktopta: lg:flex-row (Yan yana)
                   - gap-y-8: Mobilde dikey boşluk
                   - lg:gap-x-24: Desktopta yatay boşluk
                   - items-start: Üstten hizalama
                */}
                <div className="flex flex-col lg:flex-row gap-y-8 lg:gap-x-24 items-start">
                    
                    {/* --- SOL SÜTUN: BAŞLIKLAR --- */}
                    <div className="w-full lg:w-1/2 flex flex-col text-center lg:text-left gap-4">
                        <h6 className="text-sm font-bold text-[#E74040] uppercase tracking-wide">
                            Problems trying
                        </h6>
                        {/* max-w kaldırıldı, sütun genişliğine yayılacak */}
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 leading-tight">
                            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
                        </h2>
                    </div>
                    
                    {/* --- SAĞ SÜTUN: AÇIKLAMA --- */}
                    <div className="w-full lg:w-1/2 flex flex-col text-left pl-4 lg:text-left">
                        {/* max-w kaldırıldı, sütun genişliğine yayılacak */}
                        <p className="text-base text-gray-500 font-medium leading-relaxed mt-14">
                            Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
                        </p>
                    </div>
                    
                </div>
            </div>
        </section>
    );
};

export default AboutContent;