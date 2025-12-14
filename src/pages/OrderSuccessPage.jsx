// src/pages/OrderSuccessPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import Header from '../layout/Header';
import Footer from '../layout/Footer';

const OrderSuccessPage = () => {
    return (
        <>
            <Header />
            <main className="bg-[#FAFAFA] min-h-[60vh] flex items-center justify-center py-12">
                <div className="bg-white p-10 rounded-lg shadow-md text-center max-w-md w-full border border-green-100">
                    <div className="flex justify-center mb-6">
                        <CheckCircle size={80} className="text-green-500" />
                    </div>
                    <h2 className="text-3xl font-bold text-slate-800 mb-4">Tebrikler! 🎉</h2>
                    <p className="text-gray-500 text-lg mb-8">
                        Siparişiniz başarıyla alındı. <br/>
                        Sipariş detaylarını e-posta adresinize gönderdik.
                    </p>
                    <Link to="/" className="block w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 rounded-md transition-colors">
                        Ana Sayfaya Dön
                    </Link>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default OrderSuccessPage;