// src/components/shop/ShopFilterRow.js

import React from 'react';
import { LayoutGrid, List, ChevronDown } from 'lucide-react';

const ShopFilterRow = () => {
    return (
        <section className="bg-white py-6">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                {/* Flex Container:
                    - Mobil: flex-col (alt alta), items-center (ortalı), gap-6 (aralarında boşluk)
                    - Desktop: md:flex-row (yan yana), md:justify-between (iki uca yaslı)
                */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    
                    {/* 1. BLOK: Sonuç Sayısı */}
                    <div className="text-sm font-bold text-gray-500">
                        Showing all 12 results
                    </div>

                    {/* 2. BLOK: Görünüm Seçenekleri (Views) */}
                    <div className="flex items-center gap-4">
                        <span className="text-sm font-bold text-gray-500">Views:</span>
                        <div className="flex items-center gap-2">
                            {/* Grid View Butonu */}
                            <button className="p-3 border border-gray-200 rounded hover:bg-gray-50 text-slate-800 transition-colors">
                                <LayoutGrid size={16} strokeWidth={2} fill="currentColor" className="text-slate-800" />
                            </button>
                            {/* List View Butonu */}
                            <button className="p-3 border border-gray-200 rounded hover:bg-gray-50 text-gray-500 transition-colors">
                                <List size={16} strokeWidth={2} />
                            </button>
                        </div>
                    </div>

                    {/* 3. BLOK: Sıralama ve Filtre Butonu */}
                    <div className="flex items-center gap-4">
                        {/* Dropdown (Select) */}
                        <div className="relative">
                            <select className="appearance-none bg-[#F9F9F9] border border-[#DDDDDD] text-gray-500 text-sm px-4 py-3 pr-10 rounded focus:outline-none focus:border-sky-500 cursor-pointer font-normal">
                                <option>Popularity</option>
                                <option>Newest</option>
                                <option>Price: Low to High</option>
                                <option>Price: High to Low</option>
                            </select>
                            {/* Custom Chevron Icon */}
                            <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
                        </div>

                        {/* Filter Button */}
                        <button className="bg-sky-500 hover:bg-sky-600 text-white text-sm font-bold py-3 px-6 rounded transition-colors">
                            Filter
                        </button>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ShopFilterRow;