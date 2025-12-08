// src/components/shop/ShopFilterRow.js

import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter, setSort } from '../../store/actions/productActions';
import { LayoutGrid, List, ChevronDown } from 'lucide-react';

const ShopFilterRow = () => {
    const dispatch = useDispatch();
    
    // Redux'tan mevcut değerleri çek
    const { total, filter, sort } = useSelector((state) => state.product);

    // Local state (kullanıcı yazarken hemen Redux'a gitmesin, butona basınca veya delay ile gitsin diye)
    // Ancak hocanın isteği: "on sort state change it should create a get request"
    // Bu yüzden doğrudan dispatch edeceğiz.
    
    const handleSortChange = (e) => {
        dispatch(setSort(e.target.value));
    };

    const handleFilterChange = (e) => {
        // İstenirse buraya debounce (gecikme) eklenebilir
        dispatch(setFilter(e.target.value));
    };

    // Formu submit etmeyi engelle (Enter'a basınca sayfa yenilenmesin)
    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <section className="bg-white py-6">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    
                    {/* 1. BLOK: Sonuç Sayısı */}
                    <div className="text-sm font-bold text-gray-500">
                        Showing all {total} results
                    </div>

                    {/* 2. BLOK: Görünüm Seçenekleri (Views) */}
                    <div className="flex items-center gap-4">
                        <span className="text-sm font-bold text-gray-500">Views:</span>
                        <div className="flex items-center gap-2">
                            <button className="p-3 border border-gray-200 rounded hover:bg-gray-50 text-slate-800 transition-colors">
                                <LayoutGrid size={16} strokeWidth={2} fill="currentColor" className="text-slate-800" />
                            </button>
                            <button className="p-3 border border-gray-200 rounded hover:bg-gray-50 text-gray-500 transition-colors">
                                <List size={16} strokeWidth={2} />
                            </button>
                        </div>
                    </div>

                    {/* 3. BLOK: Sıralama ve Filtre */}
                    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center gap-4">
                        
                        {/* FİLTRE INPUT (Gereksinim: "Filtered by an Input beside sort select") */}
                        <input 
                            type="text" 
                            placeholder="Filter products..."
                            value={filter}
                            onChange={handleFilterChange}
                            className="bg-[#F9F9F9] border border-[#DDDDDD] text-gray-500 text-sm px-4 py-3 rounded focus:outline-none focus:border-sky-500 font-normal w-full sm:w-auto"
                        />

                        {/* SIRALAMA SELECT */}
                        <div className="relative w-full sm:w-auto">
                            <select 
                                value={sort}
                                onChange={handleSortChange}
                                className="appearance-none bg-[#F9F9F9] border border-[#DDDDDD] text-gray-500 text-sm px-4 py-3 pr-10 rounded focus:outline-none focus:border-sky-500 cursor-pointer font-normal w-full"
                            >
                                {/* API'nin beklediği değerler: "price:asc", "price:desc" , "rating:asc", "rating:desc" */}
                                <option value="">Default Sorting</option>
                                <option value="price:asc">Price: Low to High</option>
                                <option value="price:desc">Price: High to Low</option>
                                <option value="rating:asc">Rating: Low to High</option>
                                <option value="rating:desc">Rating: High to Low</option>
                            </select>
                            <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
                        </div>

                        {/* Filter Butonu (Görsel olarak durabilir veya işlevsiz kalabilir çünkü onChange kullanıyoruz) */}
                        <button 
                            type="button" // Submit yapmasın
                            className="bg-sky-500 hover:bg-sky-600 text-white text-sm font-bold py-3 px-6 rounded transition-colors w-full sm:w-auto"
                        >
                            Filter
                        </button>
                    </form>

                </div>
            </div>
        </section>
    );
};

export default ShopFilterRow;