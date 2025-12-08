// src/components/shop/ShopProducts.js

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setOffset } from '../../store/actions/productActions'; 
import ProductCard from '../ProductCard';
// Link import etmeyi unutma
import { Link } from 'react-router-dom';

// Slug oluşturucu fonksiyon (Türkçe karakter uyumlu)
const slugify = (text) => {
    if (!text) return "";
    return text.toString().toLowerCase()
      .replace(/\s+/g, '-')           // Boşlukları tire yap
      .replace(/[ğ]/g, 'g').replace(/[ü]/g, 'u').replace(/[ş]/g, 's')
      .replace(/[ı]/g, 'i').replace(/[ö]/g, 'o').replace(/[ç]/g, 'c');
};

const ShopProducts = () => {
    const dispatch = useDispatch();

    // categories'i de çekiyoruz ki URL oluştururken gender/title bulabilelim
    const { productList, fetchState, total, limit, offset, categories } = useSelector((state) => state.product);

    const totalPages = Math.ceil(total / limit);
    const currentPage = Math.floor(offset / limit) + 1;

    const handlePageChange = (pageNum) => {
        const newOffset = (pageNum - 1) * limit;
        dispatch(setOffset(newOffset));
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
    }

    if (fetchState === "FETCHING") {
        return (
            <div className="py-24 bg-white flex flex-col items-center justify-center">
                <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-sky-500"></div>
                <p className="mt-4 text-gray-500 font-semibold text-lg">Loading products...</p>
            </div>
        );
    }

    if (fetchState === "FAILED") {
        return (
            <div className="py-24 bg-white text-center text-red-500 font-bold">
                 Failed to load products. Please try again later.
            </div>
        );
    }

    return (
        <section className="pb-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                
                {fetchState === "FETCHED" && (
                    <div className="mb-6 text-gray-500 font-bold">
                        Showing all {total} results
                    </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-20">
                    {productList.map((product) => {
                        // 1. Ürünün kategorisini bul
                        const category = categories.find(c => c.id === product.category_id);
                        
                        // 2. URL Parçalarını hazırla
                        // Eğer kategori henüz yüklenmediyse varsayılan değerler kullan (Hata almamak için)
                        const gender = category ? (category.code.charAt(0) === 'k' ? 'kadin' : 'erkek') : 'genel';
                        const categoryName = category ? slugify(category.title) : 'kategori';
                        const productNameSlug = slugify(product.name);
                        
                        // 3. Hedef URL
                        const productUrl = `/shop/${gender}/${categoryName}/${product.category_id}/${productNameSlug}/${product.id}`;

                        return (
                            <Link 
                                to={productUrl}
                                key={product.id} 
                                // GEREKSİNİM: On Product Card mouse sign should be pointer, and effect on hover
                                className="flex flex-col items-center h-full cursor-pointer hover:shadow-lg hover:-translate-y-1 transition-all duration-300 p-4 rounded-md"
                            >
                                <ProductCard 
                                    product={{
                                        ...product,
                                        imageUrl: product.images && product.images.length > 0 ? product.images[0].url : "https://via.placeholder.com/300", 
                                        department: "English Department"
                                    }} 
                                />
                                
                                <div className="flex space-x-1.5 mt-3">
                                    <span className="w-4 h-4 rounded-full bg-sky-500"></span>
                                    <span className="w-4 h-4 rounded-full bg-emerald-700"></span>
                                    <span className="w-4 h-4 rounded-full bg-orange-400"></span>
                                    <span className="w-4 h-4 rounded-full bg-slate-800"></span>
                                </div>
                            </Link>
                        );
                    })}
                </div>

                {/* PAGINATION AYNI KALIYOR */}
                {totalPages > 1 && (
                    <div className="flex justify-center">
                        <div className="flex border border-[#E8E8E8] rounded-md bg-white shadow-sm overflow-hidden">
                            <button 
                                onClick={() => handlePageChange(1)}
                                disabled={currentPage === 1}
                                className="px-4 md:px-6 py-4 text-sm font-bold text-gray-500 bg-[#F3F3F3] border-r border-[#E8E8E8] disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-200 transition-colors"
                            >
                                First
                            </button>
                            {pages.map(p => (
                                <button
                                    key={p}
                                    onClick={() => handlePageChange(p)}
                                    className={`px-4 md:px-5 py-4 text-sm font-bold border-r border-[#E8E8E8] transition-colors
                                        ${currentPage === p ? 'text-white bg-sky-500' : 'text-sky-500 bg-white hover:bg-gray-50'}`}
                                >
                                    {p}
                                </button>
                            ))}
                            <button 
                                onClick={() => handlePageChange(currentPage + 1)}
                                disabled={currentPage === totalPages}
                                className="px-4 md:px-6 py-4 text-sm font-bold text-sky-500 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                            >
                                Next
                            </button>
                        </div>
                    </div>
                )}

            </div>
        </section>
    );
};

export default ShopProducts;