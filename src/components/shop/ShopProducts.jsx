// src/components/shop/ShopProducts.js

import React from 'react';
import ProductCard from '../ProductCard';

const products = [
    { id: 1, name: "Graphic Design", department: "English Department", price: 16.48, discountedPrice: 6.48, imageUrl: 'https://i.imgur.com/e8QwGLw.jpeg' },
    { id: 2, name: "Graphic Design", department: "English Department", price: 16.48, discountedPrice: 6.48, imageUrl: 'https://i.imgur.com/3efa5lW.jpeg' },
    { id: 3, name: "Graphic Design", department: "English Department", price: 16.48, discountedPrice: 6.48, imageUrl: 'https://i.imgur.com/cTgJfZP.jpeg' },
    { id: 4, name: "Graphic Design", department: "English Department", price: 16.48, discountedPrice: 6.48, imageUrl: 'https://i.imgur.com/mZYQj9a.jpeg' },
    { id: 5, name: "Graphic Design", department: "English Department", price: 16.48, discountedPrice: 6.48, imageUrl: 'https://i.imgur.com/W3rRlef.jpeg' },
    { id: 6, name: "Graphic Design", department: "English Department", price: 16.48, discountedPrice: 6.48, imageUrl: 'https://i.imgur.com/sTnmYRR.jpeg' },
    { id: 7, name: "Graphic Design", department: "English Department", price: 16.48, discountedPrice: 6.48, imageUrl: 'https://i.imgur.com/cVToCE3.jpeg' },
    { id: 8, name: "Graphic Design", department: "English Department", price: 16.48, discountedPrice: 6.48, imageUrl: 'https://i.imgur.com/pfL6RZg.jpeg' },
    { id: 9, name: "Graphic Design", department: "English Department", price: 16.48, discountedPrice: 6.48, imageUrl: 'https://i.imgur.com/ZqMTOOZ.jpeg' },
    { id: 10, name: "Graphic Design", department: "English Department", price: 16.48, discountedPrice: 6.48, imageUrl: 'https://i.imgur.com/e8QwGLw.jpeg' },
    { id: 11, name: "Graphic Design", department: "English Department", price: 16.48, discountedPrice: 6.48, imageUrl: 'https://i.imgur.com/3efa5lW.jpeg' },
    { id: 12, name: "Graphic Design", department: "English Department", price: 16.48, discountedPrice: 6.48, imageUrl: 'https://i.imgur.com/cTgJfZP.jpeg' },
];

const ShopProducts = () => {
    return (
        // 👇 GÜNCELLEME BURADA: bg-[#FAFAFA] yerine bg-white yaptık.
        <section className="pb-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                
                {/* ÜRÜN GRID */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-20">
                    {products.map((product, index) => (
                        // Mobilde ilk 4 ürün, Desktopta hepsi
                        <div 
                            key={product.id} 
                            className={`flex flex-col items-center ${index >= 4 ? 'hidden lg:flex' : 'flex'}`}
                        >
                            <ProductCard product={product} />
                            
                            {/* Renk Seçenekleri */}
                            <div className="flex space-x-1.5 mt-3">
                                <span className="w-4 h-4 rounded-full bg-sky-500 cursor-pointer hover:scale-110 transition-transform"></span>
                                <span className="w-4 h-4 rounded-full bg-emerald-700 cursor-pointer hover:scale-110 transition-transform"></span>
                                <span className="w-4 h-4 rounded-full bg-orange-400 cursor-pointer hover:scale-110 transition-transform"></span>
                                <span className="w-4 h-4 rounded-full bg-slate-800 cursor-pointer hover:scale-110 transition-transform"></span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* SAYFALAMA (PAGINATION) */}
                <div className="flex justify-center">
                    <div className="flex border border-[#E8E8E8] rounded-md bg-white shadow-sm">
                        <button className="px-6 py-4 text-sm font-bold text-gray-400 bg-[#F3F3F3] border-r border-[#E8E8E8] cursor-not-allowed">
                            First
                        </button>
                        <button className="px-5 py-4 text-sm font-bold text-sky-500 border-r border-[#E8E8E8] bg-white hover:bg-gray-50 transition-colors">
                            1
                        </button>
                        <button className="px-5 py-4 text-sm font-bold text-white bg-sky-500 border-r border-[#E8E8E8]">
                            2
                        </button>
                        <button className="px-5 py-4 text-sm font-bold text-sky-500 border-r border-[#E8E8E8] bg-white hover:bg-gray-50 transition-colors">
                            3
                        </button>
                        <button className="px-6 py-4 text-sm font-bold text-sky-500 bg-white hover:bg-gray-50 transition-colors">
                            Next
                        </button>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default ShopProducts;