// src/components/product-detail/ProductBestSeller.js

import React from 'react';
import ProductCard from '../ProductCard';

const bestsellerProducts = [
    { id: 1, name: "Graphic Design", department: "English Department", price: 16.48, discountedPrice: 6.48, imageUrl: 'https://i.imgur.com/03OSqBF.jpeg' },
    { id: 2, name: "Graphic Design", department: "English Department", price: 16.48, discountedPrice: 6.48, imageUrl: 'https://i.imgur.com/zH5qnLt.jpeg' },
    { id: 3, name: "Graphic Design", department: "English Department", price: 16.48, discountedPrice: 6.48, imageUrl: 'https://i.imgur.com/J2FHPBI.jpeg' },
    { id: 4, name: "Graphic Design", department: "English Department", price: 16.48, discountedPrice: 6.48, imageUrl: 'https://i.imgur.com/NlkduKw.jpeg' },
    { id: 5, name: "Graphic Design", department: "English Department", price: 16.48, discountedPrice: 6.48, imageUrl: 'https://i.imgur.com/F0k6mCs.jpeg' },
    { id: 6, name: "Graphic Design", department: "English Department", price: 16.48, discountedPrice: 6.48, imageUrl: 'https://i.imgur.com/6to7IoY.jpeg' },
    // Son iki ürün görseli eksikse ilkleri tekrar edebiliriz veya placeholder kalabilir
    { id: 7, name: "Graphic Design", department: "English Department", price: 16.48, discountedPrice: 6.48, imageUrl: 'https://i.imgur.com/03OSqBF.jpeg' },
    { id: 8, name: "Graphic Design", department: "English Department", price: 16.48, discountedPrice: 6.48, imageUrl: 'https://i.imgur.com/zH5qnLt.jpeg' },
];

const ProductBestSeller = () => {
    return (
        <section className="bg-[#FAFAFA] py-12">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                
                {/* Başlık */}
                <h3 className="text-2xl font-bold text-slate-800 mb-6 tracking-wide text-center md:text-left">
                    BESTSELLER PRODUCTS
                </h3>
                
                {/* Çizgi */}
                <div className="w-full h-[1px] bg-gray-300 mb-8"></div>

                {/* Grid Yapısı */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {bestsellerProducts.map((product, index) => (
                        // GİZLEME MANTIĞI:
                        // index >= 4 ise (5. ürün ve sonrası) mobilde gizle ('hidden'),
                        // desktopta göster ('lg:block').
                        <div key={product.id} className={index >= 4 ? 'hidden lg:block' : 'block'}>
                            <ProductCard product={product} />
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default ProductBestSeller;