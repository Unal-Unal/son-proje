// src/components/product-detail/ProductHero.js

import React from 'react';
import { Star, Heart, ShoppingCart, Eye, ChevronLeft, ChevronRight } from 'lucide-react';

const ProductHero = () => {
    return (
        <section className="bg-[#FAFAFA] pb-12">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                
                {/* Flex Container: Mobile: col, Desktop: row */}
                <div className="flex flex-col md:flex-row gap-8">
                    
                    {/* --- SOL TARAFA: ÜRÜN GÖRSELLERİ (SLIDER) --- */}
                    <div className="w-full md:w-1/2">
                        {/* Büyük Resim */}
                        <div className="relative w-full h-[300px] md:h-[450px] mb-4">
                            <img 
                                src="https://i.imgur.com/q2ILOMS.jpeg" // Sarı Koltuk
                                alt="Product Main" 
                                className="w-full h-full object-cover rounded-md shadow-sm"
                            />
                            {/* Slider Okları (Sadece görsel amaçlı şimdilik) */}
                            <button className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-200">
                                <ChevronLeft size={48} strokeWidth={1} />
                            </button>
                            <button className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-200">
                                <ChevronRight size={48} strokeWidth={1} />
                            </button>
                        </div>

                        {/* Küçük Resimler (Thumbnails) */}
                        <div className="flex gap-4">
                            <div className="w-24 h-24 cursor-pointer opacity-100 hover:opacity-80 transition-opacity">
                                <img src="https://i.imgur.com/72PvsAA.jpeg" alt="Thumbnail 1" className="w-full h-full object-cover rounded-md shadow-sm" />
                            </div>
                            <div className="w-24 h-24 cursor-pointer opacity-50 hover:opacity-100 transition-opacity">
                                <img src="https://i.imgur.com/q2ILOMS.jpeg" alt="Thumbnail 2" className="w-full h-full object-cover rounded-md shadow-sm" />
                            </div>
                        </div>
                    </div>


                    {/* --- SAĞ TARAFA: ÜRÜN DETAYLARI --- */}
                    <div className="w-full md:w-1/2 px-4 md:px-8 py-4">
                        
                        <h4 className="text-xl font-normal text-slate-800 mb-3">
                            Floating Phone
                        </h4>

                        {/* Yıldızlar ve Yorum Sayısı */}
                        <div className="flex items-center gap-2 mb-5">
                            <div className="flex text-yellow-400">
                                <Star size={20} fill="currentColor" />
                                <Star size={20} fill="currentColor" />
                                <Star size={20} fill="currentColor" />
                                <Star size={20} fill="currentColor" />
                                <Star size={20} strokeWidth={1.5} /> {/* Boş Yıldız */}
                            </div>
                            <span className="text-sm font-bold text-gray-500">10 Reviews</span>
                        </div>

                        {/* Fiyat ve Stok */}
                        <div className="mb-5">
                            <h3 className="text-2xl font-bold text-slate-800 mb-1">$1,139.33</h3>
                            <div className="text-sm font-bold text-gray-500">
                                Availability : <span className="text-sky-500">In Stock</span>
                            </div>
                        </div>

                        {/* Açıklama Metni */}
                        <p className="text-sm text-gray-500 leading-relaxed mb-8 border-b border-gray-200 pb-6">
                            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
                        </p>

                        {/* Renk Seçenekleri */}
                        <div className="flex gap-2 mb-8">
                            <span className="w-8 h-8 rounded-full bg-sky-500 cursor-pointer hover:scale-110 transition-transform"></span>
                            <span className="w-8 h-8 rounded-full bg-green-500 cursor-pointer hover:scale-110 transition-transform"></span>
                            <span className="w-8 h-8 rounded-full bg-orange-400 cursor-pointer hover:scale-110 transition-transform"></span>
                            <span className="w-8 h-8 rounded-full bg-slate-800 cursor-pointer hover:scale-110 transition-transform"></span>
                        </div>

                        {/* Aksiyon Butonları */}
                        <div className="flex items-center gap-3">
                            <button className="bg-sky-500 hover:bg-sky-600 text-white font-bold py-3 px-6 rounded-md transition-colors text-sm">
                                Select Options
                            </button>
                            
                            <button className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-full hover:bg-gray-100 transition-colors bg-white">
                                <Heart size={20} className="text-slate-800" />
                            </button>
                            <button className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-full hover:bg-gray-100 transition-colors bg-white">
                                <ShoppingCart size={20} className="text-slate-800" />
                            </button>
                            <button className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-full hover:bg-gray-100 transition-colors bg-white">
                                <Eye size={20} className="text-slate-800" />
                            </button>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
};

export default ProductHero;