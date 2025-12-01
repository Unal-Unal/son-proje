// src/components/shop/ShopCategoryCards.js

import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
    { id: 1, title: 'CLOTHS', itemCount: 5, img: 'https://i.imgur.com/3brTgAa.jpeg' },
    { id: 2, title: 'CLOTHS', itemCount: 5, img: 'https://i.imgur.com/4WElxGK.jpeg' },
    { id: 3, title: 'CLOTHS', itemCount: 5, img: 'https://i.imgur.com/ZYphtnk.jpeg' },
    { id: 4, title: 'CLOTHS', itemCount: 5, img: 'https://i.imgur.com/fByeSZq.jpeg' },
    { id: 5, title: 'CLOTHS', itemCount: 5, img: 'https://i.imgur.com/3Qf9pME.jpeg' },
];

const ShopCategoryCards = () => {
    return (
        <section className="bg-[#FAFAFA] pb-12">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                
                {/* Grid Yapısı:
                    - Mobil: grid-cols-1 (Tek sütun)
                    - Tablet: md:grid-cols-3 (3 sütun)
                    - Desktop: lg:grid-cols-5 (5 sütun)
                    - Gap: 4 (Kartlar arası boşluk)
                */}
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
                    {categories.map((category) => (
                        <Link 
                            to={`/shop/${category.id}`} 
                            key={category.id} 
                            className="relative w-full h-[300px] md:h-[223px] group overflow-hidden cursor-pointer"
                        >
                            {/* Arka Plan Resmi */}
                            <img 
                                src={category.img} 
                                alt={category.title} 
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            
                            {/* Karartma (Overlay) - Yazının okunması için */}
                            <div className="absolute inset-0 bg-black/25 group-hover:bg-black/40 transition-colors duration-300"></div>

                            {/* İçerik (Ortalanmış) */}
                            <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
                                <h3 className="text-base font-bold tracking-wide mb-2 uppercase">
                                    {category.title}
                                </h3>
                                <p className="text-sm font-medium">
                                    {category.itemCount} Items
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ShopCategoryCards;