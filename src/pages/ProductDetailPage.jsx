// src/pages/ProductDetailPage.js

import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

// Layout
import Header from '../layout/Header';
import Footer from '../layout/Footer';

// Global Components
import ClientsSection from '../components/ClientsSection'; // Markalar için

// Product Detail Components
import ProductHero from '../components/product-detail/ProductHero';
import ProductDescription from '../components/product-detail/ProductDescription';
import ProductBestSeller from '../components/product-detail/ProductBestSeller'; // 👈 YENİ IMPORT

const ProductDetailPage = () => {
    return (
        <>
            <Header />
            
            <main className="bg-[#FAFAFA]">
                
                {/* 1. BREADCRUMB */}
                <div className="py-6">
                    <div className="max-w-7xl mx-auto px-4 md:px-8">
                        <div className="flex items-center justify-center md:justify-start gap-2 py-4">
                            <Link to="/" className="text-sm font-bold text-slate-800 hover:text-slate-900 transition-colors">
                                Home
                            </Link>
                            <ChevronRight size={16} className="text-gray-400" />
                            <span className="text-sm font-bold text-gray-400">
                                Shop
                            </span>
                        </div>
                    </div>
                </div>

                {/* 2. PRODUCT HERO */}
                <ProductHero />

                {/* 3. PRODUCT DESCRIPTION */}
                <ProductDescription />

                {/* 4. BESTSELLER PRODUCTS */}
                <ProductBestSeller /> {/* 👈 BURAYA EKLENDİ */}

                {/* 5. CLIENTS (MARKALAR) */}
                <ClientsSection /> {/* 👈 BURAYA EKLENDİ */}

            </main>

            <Footer />
        </>
    );
};

export default ProductDetailPage;