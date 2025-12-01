// src/components/ContentSection.js

import React from 'react';
import { Download } from 'lucide-react';

const ContentSection = ({ mainImg, productImg, isReverse = false, showList = false }) => {
    return (
        <section className="max-w-7xl mx-auto py-16 px-4 lg:px-0">
             {/* --- MOBILE GÖRÜNÜM --- */}
             <div className="lg:hidden">
                <div className="w-full max-w-[348px] bg-white rounded-xl shadow-xl flex flex-col items-center pb-6 text-center mx-auto">
                    <img src={mainImg} alt="Mobile promotion" className="w-full h-[500px] object-cover rounded-t-xl" />
                    <div className="pt-8 pb-4 px-6">
                        <h3 className="text-2xl font-bold text-slate-800 tracking-wider mb-2">MOST POPULAR</h3>
                        <p className="text-sm text-gray-500">We focus on ergonomics and meeting you where you work. It's only a keystroke away.</p>
                    </div>
                    <div className="w-full h-[226px] relative overflow-hidden mb-4">
                        <img src={productImg} alt="Product" className="w-full h-full object-contain" />
                    </div>
                    {/* Ürün Detayları */}
                    <ProductDetailsContent />
                    
                    {/* 👇 GÜNCELLEME BURADA: Mobile Liste artık 'showList' true ise görünüyor */}
                    {showList && (
                        <div className="flex flex-col w-full px-4 pt-4">
                            {[1, 2, 3, 4].map((num) => (
                                <div key={num} className="flex items-start p-4 border-b border-gray-200 last:border-0">
                                    <span className="text-red-500 text-3xl font-bold mr-4">{num}.</span>
                                    <div className="text-left">
                                        <h3 className="text-lg font-bold text-slate-800 mb-1">Easy to use</h3>
                                        <p className="text-xs text-gray-500">Things on a very small that you have any direct</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            {/* --- DESKTOP GÖRÜNÜM (Kart Bölümü) --- */}
            <div className="hidden lg:flex lg:flex-row bg-white rounded-xl shadow-xl overflow-hidden mb-12">
                 {/* Resim */}
                <div className={`w-1/2 h-auto relative ${isReverse ? 'lg:order-2' : ''}`}>
                    <img src={mainImg} alt="Desktop promotion" className="w-full h-full object-cover absolute inset-0" />
                </div>
                {/* İçerik */}
                <div className={`w-1/2 flex flex-col justify-center items-center text-center p-20 bg-white z-10 relative ${isReverse ? 'lg:order-1' : ''}`}>
                     <h3 className="text-3xl font-bold text-slate-800 tracking-wider mb-4">MOST POPULAR</h3>
                     <p className="text-base text-gray-500 mb-8 max-w-sm">We focus on ergonomics and meeting you where you work. It's only a keystroke away.</p>
                     <div className="w-full max-w-[280px] flex flex-col items-center text-center">
                        <div className="w-full h-[180px] relative overflow-hidden mb-2">
                             <img src={productImg} alt="Product" className="w-full h-full object-contain" />
                        </div>
                        <ProductDetailsContent />
                     </div>
                </div>
            </div>
            
            {/* --- DESKTOP GÖRÜNÜM (Alt Liste Bölümü) --- */}
            {showList && (
                <div className="hidden lg:flex justify-between w-full mt-16 px-4">
                    {[1, 2, 3, 4].map((num) => (
                        <div key={num} className="flex flex-col w-1/4 px-4">
                            <div className="flex items-start">
                                <h3 className="text-5xl font-bold text-red-500 mr-4 leading-none">{num}.</h3>
                                <div className="text-left">
                                    <h4 className="text-lg font-bold text-slate-800 mb-1">Easy to use</h4>
                                    <p className="text-sm text-gray-500 leading-snug">Things on a very small that you have any direct</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </section>
    );
};

const ProductDetailsContent = () => (
    <div className="flex flex-col items-center">
        <h4 className="text-sm font-bold text-gray-500 mb-1">English Department</h4>
        <div className="flex items-center mb-2">
            <Download size={16} className="text-gray-400 mr-2" />
            <span className="text-sm font-bold text-gray-400">15 Sales</span>
        </div>
        <div className="flex items-center space-x-2 mb-4">
            <span className="text-sm text-gray-400 line-through font-bold">$16.48</span>
            <span className="text-sm font-bold text-green-500">$6.48</span>
        </div>
        <div className="flex space-x-2 mb-6">
            <span className="w-4 h-4 rounded-full bg-blue-500"></span>
            <span className="w-4 h-4 rounded-full bg-green-500"></span>
            <span className="w-4 h-4 rounded-full bg-orange-500"></span>
            <span className="w-4 h-4 rounded-full bg-slate-800"></span>
        </div>
    </div>
);

export default ContentSection;