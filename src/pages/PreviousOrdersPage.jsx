// src/pages/PreviousOrdersPage.js

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getPreviousOrders } from '../store/actions/clientActions';
import { ChevronDown, ChevronUp, Package, Calendar, CreditCard, Box } from 'lucide-react';
import Header from '../layout/Header';
import Footer from '../layout/Footer';

const PreviousOrdersPage = () => {
    const dispatch = useDispatch();
    const { user, orderList } = useSelector((state) => state.client);
    
    // Hangi siparişin detayının açık olduğunu tutan state
    const [openOrderId, setOpenOrderId] = useState(null);

    const isLoggedIn = user && user.email;

    useEffect(() => {
        if (isLoggedIn) {
            dispatch(getPreviousOrders());
        }
    }, [dispatch, isLoggedIn]);

    // Detay açma/kapama fonksiyonu
    const toggleOrderDetails = (id) => {
        setOpenOrderId(openOrderId === id ? null : id);
    };

    if (!isLoggedIn) return <Navigate to="/login" replace />;

    return (
        <>
            <Header />
            <main className="bg-[#FAFAFA] min-h-screen py-8">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    
                    <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                        <Package className="text-orange-500" /> Siparişlerim
                    </h2>

                    <div className="space-y-4">
                        {orderList?.length === 0 ? (
                            <div className="bg-white p-8 rounded-lg shadow-sm text-center border border-gray-200">
                                <p className="text-gray-500">Henüz hiç siparişiniz bulunmuyor.</p>
                            </div>
                        ) : (
                            orderList?.map((order) => (
                                <div key={order.id} className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden transition-all">
                                    
                                    {/* --- SİPARİŞ ÖZET SATIRI (Header) --- */}
                                    <div 
                                        onClick={() => toggleOrderDetails(order.id)}
                                        className="p-6 flex flex-col md:flex-row justify-between items-center cursor-pointer hover:bg-gray-50 transition-colors gap-4"
                                    >
                                        <div className="flex flex-col md:flex-row gap-4 md:gap-12 w-full">
                                            
                                            {/* Tarih */}
                                            <div className="flex items-center gap-2 min-w-[150px]">
                                                <Calendar size={18} className="text-gray-400" />
                                                <div className="flex flex-col">
                                                    <span className="text-xs text-gray-500 font-bold">Sipariş Tarihi</span>
                                                    <span className="text-sm font-bold text-slate-700">
                                                        {new Date(order.order_date).toLocaleDateString("tr-TR")}
                                                    </span>
                                                </div>
                                            </div>

                                            {/* Sipariş Özeti (Ürün Sayısı) */}
                                            <div className="flex items-center gap-2 min-w-[120px]">
                                                <Box size={18} className="text-gray-400" />
                                                <div className="flex flex-col">
                                                    <span className="text-xs text-gray-500 font-bold">Sipariş Özeti</span>
                                                    <span className="text-sm text-slate-700">
                                                        {order.products?.reduce((acc, p) => acc + p.count, 0)} Ürün
                                                    </span>
                                                </div>
                                            </div>

                                            {/* Tutar */}
                                            <div className="flex items-center gap-2 min-w-[120px]">
                                                <CreditCard size={18} className="text-gray-400" />
                                                <div className="flex flex-col">
                                                    <span className="text-xs text-gray-500 font-bold">Toplam Tutar</span>
                                                    <span className="text-sm font-bold text-orange-500">
                                                        ${order.price}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Aç/Kapa İkonu */}
                                        <div className="flex items-center gap-2 text-sky-500 font-bold text-sm">
                                            Detaylar
                                            {openOrderId === order.id ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                                        </div>
                                    </div>

                                    {/* --- COLLAPSIBLE DETAY ALANI --- */}
                                    {openOrderId === order.id && (
                                        <div className="bg-gray-50 border-t border-gray-100 p-6 animate-fade-in">
                                            
                                            <div className="mb-4">
                                                <h4 className="font-bold text-slate-800 text-sm mb-2">Teslimat Bilgileri</h4>
                                                <p className="text-sm text-gray-600">
                                                    Kart Sahibi: <span className="font-bold">{order.card_name}</span> <br/>
                                                    Kart No: **** **** **** {order.card_no?.toString().slice(-4)}
                                                </p>
                                            </div>

                                            <h4 className="font-bold text-slate-800 text-sm mb-3">Ürünler</h4>
                                            <div className="grid gap-3">
                                                {order.products?.map((item, index) => (
                                                    <div key={index} className="flex items-center bg-white p-3 rounded border border-gray-200 gap-4">
                                                        {/* Ürün resmi (Eğer backend dönmüyorsa placeholder) */}
                                                        <div className="w-16 h-20 bg-gray-200 rounded overflow-hidden shrink-0">
                                                            {/* Not: Backend'den product detay objesi dönüyorsa resim buraya: item.product?.images[0]?.url */}
                                                            <img src="https://via.placeholder.com/100" alt="product" className="w-full h-full object-cover opacity-50" />
                                                        </div>
                                                        
                                                        <div className="flex-1">
                                                            <h5 className="font-bold text-slate-700 text-sm">Ürün ID: {item.product_id}</h5>
                                                            <p className="text-xs text-gray-500">{item.detail}</p>
                                                        </div>

                                                        <div className="text-right">
                                                            <span className="block font-bold text-slate-800 text-sm">Adet: {item.count}</span>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>

                                        </div>
                                    )}

                                </div>
                            ))
                        )}
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default PreviousOrdersPage;