// src/components/team/TeamGallery.js

import React from 'react';

const images = [
    'https://i.imgur.com/mZjdlxt.jpeg', // 1. Büyük Kırmızı Elbiseli
    'https://i.imgur.com/o6zCxrF.jpeg', // 2. Beyaz Ceketli 
    'https://i.imgur.com/vUB9buS.jpeg', // 3. Kot Ceketli 
    'https://i.imgur.com/zans8gW.jpeg', // 4. Siyah Kazaklı
    'https://i.imgur.com/MWInHho.jpeg', // 5. Lacivert Ceketli
];

const TeamGallery = () => {
    return (
        // w-full ve h-auto ile içeriğin sığmasını sağlıyoruz. overflow-hidden taşmaları gizler.
        <section className="w-full h-auto overflow-hidden">
            
            {/* --- DESKTOP GÖRÜNÜM (hidden lg:flex) --- */}
            <div className="hidden lg:flex w-full gap-2 h-[530px]">
                
                {/* SOL: BÜYÜK RESİM */}
                <div className="w-1/2 h-full">
                    <img 
                        src={images[0]} 
                        alt="Team Main" 
                        className="w-full h-full object-cover" 
                    />
                </div>

                {/* SAĞ: 4'LÜ GRID */}
                <div className="w-1/2 grid grid-cols-2 grid-rows-2 gap-2 h-full">
                    {images.slice(1).map((img, index) => (
                        <div key={index} className="w-full h-full overflow-hidden">
                            <img 
                                src={img} 
                                alt={`Team Member ${index + 2}`} 
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
                            />
                        </div>
                    ))}
                </div>

            </div>


            {/* --- MOBİL GÖRÜNÜM (lg:hidden) --- */}
            <div className="lg:hidden flex flex-col gap-2">
                
                {/* ÜST: BÜYÜK RESİM */}
                <div className="w-full h-[500px]">
                    <img 
                        src={images[0]} 
                        alt="Team Main" 
                        className="w-full h-full object-cover" 
                    />
                </div>

                {/* ALT: 4'LÜ GRID */}
                <div className="w-full grid grid-cols-2 gap-2">
                    {images.slice(1).map((img, index) => (
                        <div key={index} className="w-full h-[260px]">
                            <img 
                                src={img} 
                                alt={`Team Member ${index + 2}`} 
                                className="w-full h-full object-cover" 
                            />
                        </div>
                    ))}
                </div>

            </div>

        </section>
    );
};

export default TeamGallery;