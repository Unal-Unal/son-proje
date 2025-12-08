// src/components/shop/ShopCategoryCards.js

import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ShopCategoryCards = () => {
    // 1. Redux Store'dan tüm kategorileri çekiyoruz
    const categories = useSelector((state) => state.product.categories);

    // 2. Kategorileri puana (rating) göre sıralayıp ilk 5 tanesini alıyoruz
    const topCategories = [...categories]
        .sort((a, b) => b.rating - a.rating)
        .slice(0, 5);

    // 3. Link Formatı: shop/:gender/:categoryName/:categoryId
    const getCategoryLink = (cat) => {
        const gender = cat.code.charAt(0) === 'k' ? 'kadin' : 'erkek';
        return `/shop/${gender}/${cat.title.toLowerCase()}/${cat.id}`;
    };

    return (
        <section className="bg-[#FAFAFA] pb-12">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
                    
                    {topCategories.map((category) => (
                        <Link 
                            to={getCategoryLink(category)} 
                            key={category.id} 
                            className="relative w-full h-[300px] md:h-[223px] group overflow-hidden cursor-pointer"
                        >
                            {/* GÖRSEL KISMI: Artık tamamen API'den geliyor */}
                            <img 
                                src={category.img} 
                                alt={category.title} 
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            
                            {/* Karartma */}
                            <div className="absolute inset-0 bg-black/25 group-hover:bg-black/40 transition-colors duration-300"></div>

                            {/* İçerik */}
                            <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
                                <h3 className="text-base font-bold tracking-wide mb-2 uppercase">
                                    {category.title}
                                </h3>
                                {/* Rating Gösterimi */}
                                <p className="text-sm font-medium flex items-center gap-1">
                                     ★ {category.rating}
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