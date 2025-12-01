// src/pages/ShopPage.js

import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

// Layout
import Header from '../layout/Header';
import Footer from '../layout/Footer';

// Shop Components
import ShopCategoryCards from '../components/shop/ShopCategoryCards';
import ShopFilterRow from '../components/shop/ShopFilterRow';
import ShopProducts from '../components/shop/ShopProducts';

// Global Components (Daha önce oluşturduğumuz ClientsSection)
import ClientsSection from '../components/ClientsSection'; // 👈 YENİ IMPORT

const ShopPage = () => {
    return (
        <>
            <Header />
            
            <main className="bg-[#FAFAFA] pb-12">
                
                {/* 1. BREADCRUMB */}
                <div className="py-8 md:py-12">
                    <div className="max-w-7xl mx-auto px-4 md:px-8">
                        <div className="flex flex-col items-center md:flex-row md:justify-between gap-4">
                            <h2 className="text-2xl font-bold text-slate-800 tracking-wide">
                                Shop
                            </h2>
                            <nav className="flex items-center gap-2 text-sm font-bold">
                                <Link to="/" className="text-slate-800 hover:text-slate-900 transition-colors">
                                    Home
                                </Link>
                                <ChevronRight size={16} className="text-gray-400" />
                                <span className="text-gray-400">
                                    Shop
                                </span>
                            </nav>
                        </div>
                    </div>
                </div>

                {/* 2. KATEGORİ KARTLARI */}
                <ShopCategoryCards />

                {/* 3. FİLTRE SATIRI */}
                <ShopFilterRow />

                {/* 4. ÜRÜN LİSTESİ VE SAYFALAMA */}
                <ShopProducts />

                {/* 5. CLIENTS (MARKALAR) BÖLÜMÜ */}
                <ClientsSection /> {/* 👈 BURAYA EKLENDİ */}

            </main>

            <Footer />
        </>
    );
};

export default ShopPage;