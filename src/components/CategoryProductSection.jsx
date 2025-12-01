// src/components/CategoryProductSection.js

import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ProductCard from './ProductCard'; 

const CategoryProductSection = ({ 
    title, 
    products, 
    bannerColor, 
    bannerImg, 
    bannerImgClass, 
    isReverse = false 
}) => {
    return (
        <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 lg:px-0">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-[48px]">
                
                {/* BANNER KISMI */}
                <div className={`lg:w-[389px] flex-none ${isReverse ? 'lg:order-2' : ''}`}>
                    <Link 
                        to="/shop/furniture" 
                        // 👇 GÜNCELLEME BURADA YAPILDI: lg:h-[828px]
                        className={`relative w-full max-w-[389px] mx-auto lg:mx-0 h-[550px] lg:h-[828px] ${bannerColor} rounded-xl overflow-hidden shadow-xl block hover:opacity-95 transition-opacity`}
                    >
                        <div className="absolute top-8 left-8 z-10 text-slate-800">
                            <h2 className="text-xl font-extrabold tracking-wider">FURNITURE</h2>
                            <p className="text-sm font-bold opacity-80">5 Items</p>
                        </div>
                        <div className={`absolute inset-0 w-full h-full ${bannerImgClass === 'center' ? 'flex items-end justify-center' : ''}`}>
                             <img 
                                src={bannerImg} 
                                alt="Furniture" 
                                className={`w-full h-full object-cover ${bannerImgClass === 'bottom' ? 'object-bottom' : ''} ${bannerImgClass === 'center' ? 'w-[80%] object-contain pb-24' : ''}`} 
                             />
                        </div>
                    </Link>
                </div>

                {/* ÜRÜN LİSTESİ KISMI */}
                <div className={`flex-1 ${isReverse ? 'lg:order-1' : ''}`}>
                    {/* Header */}
                    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center mb-6">
                        <h2 className="text-2xl font-bold text-slate-800 tracking-wider whitespace-nowrap mb-4 lg:mb-0 text-center lg:text-left">
                            {title}
                        </h2>
                        
                        <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-6">
                            <div className="flex space-x-4 overflow-x-auto whitespace-nowrap py-2 max-w-full">
                                <button className="text-sm font-bold text-sky-500 border-b-2 border-sky-500 px-3 py-1">Men</button>
                                <button className="text-sm font-bold text-gray-500 hover:text-sky-500 transition-colors px-3 py-1">Women</button>
                                <button className="text-sm font-bold text-gray-500 hover:text-sky-500 transition-colors px-3 py-1">Accessories</button>
                            </div>
                            <div className="flex space-x-2">
                                <button className="w-12 h-12 flex items-center justify-center border border-gray-300 rounded-full text-gray-600 hover:border-sky-500 hover:text-sky-500 transition-colors">
                                    <ChevronLeft size={16} strokeWidth={2} />
                                </button>
                                <button className="w-12 h-12 flex items-center justify-center border border-gray-300 rounded-full text-gray-600 hover:border-sky-500 hover:text-sky-500 transition-colors">
                                    <ChevronRight size={16} strokeWidth={2} />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {products.map((product, index) => (
                            <div key={product.id} className={index >= 3 ? 'hidden lg:block' : 'block'}>
                                <ProductCard product={product} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CategoryProductSection;