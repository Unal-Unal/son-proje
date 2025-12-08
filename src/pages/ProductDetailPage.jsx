// src/pages/ProductDetailPage.js

import React, { useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProduct } from '../store/actions/productActions';
import { ChevronRight, ChevronLeft } from 'lucide-react'; 

import Header from '../layout/Header';
import Footer from '../layout/Footer';
import ClientsSection from '../components/ClientsSection';
import ProductHero from '../components/product-detail/ProductHero';
import ProductDescription from '../components/product-detail/ProductDescription';
import ProductBestSeller from '../components/product-detail/ProductBestSeller';

const ProductDetailPage = () => {
    const { productId } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { activeProduct, fetchState } = useSelector((state) => state.product);

    useEffect(() => {
        window.scrollTo(0, 0); 
        if (productId) {
            dispatch(fetchProduct(productId));
        }
    }, [dispatch, productId]);

    // 1. LOADING
    if (fetchState === "FETCHING") {
        return (
            <div className="min-h-screen bg-white flex flex-col">
                <Header />
                <div className="flex-1 flex flex-col items-center justify-center py-20">
                    <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-sky-500"></div>
                    <p className="mt-4 text-gray-500 font-semibold text-lg">Loading product details...</p>
                </div>
                <Footer />
            </div>
        );
    }

    // 2. ERROR
    if (fetchState === "FAILED") {
        return (
             <div className="min-h-screen bg-white flex flex-col">
                <Header />
                <div className="flex-1 flex flex-col items-center justify-center py-20 text-red-500">
                    <h2 className="text-2xl font-bold">Error</h2>
                    <p>Failed to load product.</p>
                    <button onClick={() => navigate(-1)} className="mt-4 text-sky-500 hover:underline">Go Back</button>
                </div>
                <Footer />
            </div>
        );
    }

    // 3. SUCCESS (Render)
    // Ürün verisi var mı kontrolü (id varsa doludur)
    const hasProduct = activeProduct && activeProduct.id;

    return (
        <>
            <Header />
            
            <main className="bg-[#FAFAFA]">
                
                {/* 1. BREADCRUMB */}
                <div className="py-6">
                    <div className="max-w-7xl mx-auto px-4 md:px-8">
                        <div className="flex items-center justify-between py-4">
                            
                            {/* BACK BUTTON */}
                            <button 
                                onClick={() => navigate(-1)} 
                                className="flex items-center gap-1 text-sm font-bold text-slate-800 hover:text-sky-500 transition-colors"
                            >
                                <ChevronLeft size={16} /> Back
                            </button>

                            <div className="flex items-center gap-2">
                                <Link to="/" className="text-sm font-bold text-slate-800 hover:text-slate-900 transition-colors">Home</Link>
                                <ChevronRight size={16} className="text-gray-400" />
                                <Link to="/shop" className="text-sm font-bold text-gray-400 hover:text-slate-800 transition-colors">Shop</Link>
                                {hasProduct && (
                                    <>
                                        <ChevronRight size={16} className="text-gray-400" />
                                        <span className="text-sm font-bold text-gray-400 truncate max-w-[150px]">
                                            {activeProduct.name}
                                        </span>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/* 2. Components */}
                {/* hasProduct true ise Hero'yu göster, yoksa gösterme (Hatayı önler) */}
                {hasProduct ? (
                    <>
                        <ProductHero product={activeProduct} />
                        <ProductDescription product={activeProduct} />
                    </>
                ) : (
                    // fetchState FETCHED ama ürün yoksa (Nadir durum)
                    <div className="py-10 text-center">Product not found</div>
                )}

                <ProductBestSeller /> 
                <ClientsSection />

            </main>

            <Footer />
        </>
    );
};

export default ProductDetailPage;