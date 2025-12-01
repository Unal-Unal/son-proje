// src/components/product-detail/ProductDescription.js

import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';

const ProductDescription = () => {
    const [activeTab, setActiveTab] = useState('description');

    return (
        <section className="bg-white pb-12">
            
            {/* 1. TAB MENÜSÜ */}
            <div className="border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-center gap-4 md:gap-8 py-8 text-sm font-bold text-gray-500">
                    <button 
                        onClick={() => setActiveTab('description')}
                        className={`${activeTab === 'description' ? 'text-slate-800 border-b-2 border-slate-800' : 'hover:text-slate-800'} pb-2 transition-colors`}
                    >
                        Description
                    </button>
                    <button 
                        onClick={() => setActiveTab('additional')}
                        className={`${activeTab === 'additional' ? 'text-slate-800 border-b-2 border-slate-800' : 'hover:text-slate-800'} pb-2 transition-colors`}
                    >
                        Additional Information
                    </button>
                    <button 
                        onClick={() => setActiveTab('reviews')}
                        className={`${activeTab === 'reviews' ? 'text-slate-800 border-b-2 border-slate-800' : 'hover:text-slate-800'} pb-2 transition-colors`}
                    >
                        Reviews <span className="text-green-600">(0)</span>
                    </button>
                </div>
            </div>

            {/* 2. İÇERİK BÖLÜMÜ (Sadece Description Tabı İçin) */}
            {activeTab === 'description' && (
                <div className="max-w-7xl mx-auto px-4 md:px-8 pt-8 pb-12">
                    
                    {/* Grid Yapısı:
                        - Mobil: grid-cols-1 (Tek sütun)
                        - Desktop: grid-cols-3 (3 Eşit Sütun)
                        - Gap: 8 (Sütunlar arası boşluk)
                    */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        
                        {/* SOL: GÖRSEL */}
                        <div className="bg-gray-100 rounded-md overflow-hidden h-[300px] lg:h-[400px]">
                            <img 
                                src="https://i.imgur.com/ygHsPvQ.jpeg" // Not: Verdiğin linki jpeg olarak düzelttim, açılmazsa kontrol ederiz.
                                alt="Pink Room" 
                                className="w-full h-full object-cover"
                                onError={(e) => { e.target.src = "https://via.placeholder.com/400x400?text=Image+Error" }} // Hata önleyici
                            />
                        </div>

                        {/* ORTA: METİN BLOĞU */}
                        <div className="flex flex-col gap-4">
                            <h3 className="text-2xl font-bold text-slate-800">
                                the quick fox jumps over 
                            </h3>
                            <p className="text-sm text-gray-500 leading-relaxed">
                                Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
                            </p>
                            <p className="text-sm text-gray-500 leading-relaxed">
                                Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
                            </p>
                            <p className="text-sm text-gray-500 leading-relaxed">
                                Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
                            </p>
                        </div>

                        {/* SAĞ: LİSTE BLOKLARI */}
                        <div className="flex flex-col gap-6">
                            
                            {/* Liste 1 */}
                            <div>
                                <h3 className="text-2xl font-bold text-slate-800 mb-4">
                                    the quick fox jumps over 
                                </h3>
                                <div className="flex flex-col gap-3">
                                    {[1, 2, 3, 4].map((item) => (
                                        <div key={item} className="flex items-center gap-2 text-sm font-bold text-gray-500">
                                            <ChevronRight size={16} className="text-gray-400" />
                                            <span>the quick fox jumps over the lazy dog</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Liste 2 */}
                            <div>
                                <h3 className="text-2xl font-bold text-slate-800 mb-4">
                                    the quick fox jumps over 
                                </h3>
                                <div className="flex flex-col gap-3">
                                    {[1, 2, 3].map((item) => (
                                        <div key={item} className="flex items-center gap-2 text-sm font-bold text-gray-500">
                                            <ChevronRight size={16} className="text-gray-400" />
                                            <span>the quick fox jumps over the lazy dog</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            )}

        </section>
    );
};

export default ProductDescription;