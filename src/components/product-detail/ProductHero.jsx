// src/components/product-detail/ProductHero.js

import React, { useState, useEffect } from 'react';
import { Star, Heart, ShoppingCart, Eye, ChevronLeft, ChevronRight } from 'lucide-react';

const ProductHero = ({ product }) => {
    // Verileri güvenli şekilde alalım. product null gelebilir diye default değerler ({}) veriyoruz.
    const { name, description, price, stock, rating, images, sell_count } = product || {};

    const [activeImage, setActiveImage] = useState("");

    // Ürün veya resimler değiştiğinde ilk resmi seç
    useEffect(() => {
        if (images && images.length > 0) {
            setActiveImage(images[0].url);
        }
    }, [product]);

    // Gösterilecek resim
    const displayImage = activeImage || "https://via.placeholder.com/600x400?text=No+Image";
    const starCount = Math.round(rating || 0);

    return (
        <section className="bg-[#FAFAFA] pb-12">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="flex flex-col md:flex-row gap-8">
                    
                    {/* SOL: GALERİ */}
                    <div className="w-full md:w-1/2">
                        <div className="relative w-full h-[300px] md:h-[450px] mb-4">
                            <img 
                                src={displayImage} 
                                alt={name} 
                                className="w-full h-full object-cover rounded-md shadow-sm transition-opacity duration-300"
                            />
                            {/* Oklar görsel amaçlı */}
                            <button className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-200"><ChevronLeft size={48} /></button>
                            <button className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-200"><ChevronRight size={48} /></button>
                        </div>

                        {/* Thumbnails */}
                        <div className="flex gap-4 overflow-x-auto pb-2">
                            {images?.map((img, index) => (
                                <div 
                                    key={index}
                                    onClick={() => setActiveImage(img.url)}
                                    className={`w-24 h-24 shrink-0 cursor-pointer rounded-md overflow-hidden shadow-sm transition-opacity ${activeImage === img.url ? 'opacity-100 ring-2 ring-sky-500' : 'opacity-60 hover:opacity-100'}`}
                                >
                                    <img src={img.url} alt={`thumb-${index}`} className="w-full h-full object-cover" />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* SAĞ: BİLGİLER */}
                    <div className="w-full md:w-1/2 px-4 md:px-8 py-4">
                        <h4 className="text-xl font-normal text-slate-800 mb-3">{name}</h4>
                        
                        <div className="flex items-center gap-2 mb-5">
                            <div className="flex text-yellow-400">
                                {[1, 2, 3, 4, 5].map(s => (
                                    <Star key={s} size={20} fill={s <= starCount ? "currentColor" : "none"} stroke="currentColor" />
                                ))}
                            </div>
                            <span className="text-sm font-bold text-gray-500">{sell_count} Reviews</span>
                        </div>

                        <div className="mb-5">
                            <h3 className="text-2xl font-bold text-slate-800 mb-1">${price}</h3>
                            <div className="text-sm font-bold text-gray-500">
                                Availability : <span className={stock > 0 ? "text-sky-500" : "text-red-500"}>{stock > 0 ? "In Stock" : "Out of Stock"}</span>
                            </div>
                        </div>

                        <p className="text-sm text-gray-500 leading-relaxed mb-8 border-b border-gray-200 pb-6">{description}</p>

                        <div className="flex items-center gap-3">
                            <button className="bg-sky-500 hover:bg-sky-600 text-white font-bold py-3 px-6 rounded-md transition-colors text-sm">Select Options</button>
                            <button className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-full hover:bg-gray-100 bg-white"><Heart size={20} /></button>
                            <button className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-full hover:bg-gray-100 bg-white"><ShoppingCart size={20} /></button>
                            <button className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-full hover:bg-gray-100 bg-white"><Eye size={20} /></button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ProductHero;