// src/pages/ShopPage.js

import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../store/actions/productActions';

// Layout & Components
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import ShopCategoryCards from '../components/shop/ShopCategoryCards';
import ShopFilterRow from '../components/shop/ShopFilterRow';
import ShopProducts from '../components/shop/ShopProducts';
import ClientsSection from '../components/ClientsSection';

const ShopPage = () => {
    const dispatch = useDispatch();
    const { categoryId } = useParams();
    
    // Redux'tan Filter, Sort ve YENİ OLARAK limit/offset değerlerini al
    const { filter, sort, limit, offset } = useSelector((state) => state.product);

    // --- ANA MANTIK ---
    useEffect(() => {
        const queryParams = {
            limit: limit,   // Varsayılan 25
            offset: offset  // Varsayılan 0
        };

        if (categoryId) {
            queryParams.category = categoryId;
        }
        if (filter) {
            queryParams.filter = filter;
        }
        if (sort) {
            queryParams.sort = sort;
        }

        // Action'ı çağır
        dispatch(fetchProducts(queryParams));

    }, [dispatch, categoryId, filter, sort, limit, offset]); // Offset değişince (sayfa atlayınca) tekrar çalışır


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

                {/* 4. ÜRÜN LİSTESİ (Pagination buranın içinde) */}
                <ShopProducts />

                {/* 5. CLIENTS */}
                <ClientsSection />

            </main>

            <Footer />
        </>
    );
};

export default ShopPage;