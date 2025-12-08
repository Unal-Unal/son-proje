// src/pages/ShoppingCartPage.js

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus, ChevronRight, CheckSquare, Square } from 'lucide-react';
import { updateItemCount, removeFromCart, toggleItemCheck } from '../store/actions/shoppingCartActions';

// Layout
import Header from '../layout/Header';
import Footer from '../layout/Footer';

const ShoppingCartPage = () => {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.shoppingCart.cart);

    // --- HESAPLAMALAR ---
    // Sadece 'checked: true' olan ürünlerin toplamını al
    const totalAmount = cart
        .filter(item => item.checked)
        .reduce((total, item) => total + (item.product.price * item.count), 0);

    // Seçili ürün sayısı
    const selectedItemsCount = cart.filter(item => item.checked).length;

    // Kargo Bedeli (Örnek mantık: 150$ üzeri bedava)
    const shippingCost = totalAmount > 150 || totalAmount === 0 ? 0 : 29.99;
    
    // Genel Toplam
    const grandTotal = totalAmount + shippingCost;


    // --- HANDLERS ---
    const handleCountChange = (productId, currentCount, delta) => {
        const newCount = currentCount + delta;
        if (newCount > 0) {
            dispatch(updateItemCount(productId, newCount));
        }
    };

    return (
        <>
            <Header />
            
            <main className="bg-[#FAFAFA] min-h-screen py-8">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    
                    <h2 className="text-2xl font-bold text-slate-800 mb-6">
                        Shopping Cart ({cart.length} Items)
                    </h2>

                    <div className="flex flex-col lg:flex-row gap-8">
                        
                        {/* --- SOL KOLON: ÜRÜN LİSTESİ --- */}
                        <div className="flex-1">
                            
                            {cart.length === 0 ? (
                                <div className="bg-white p-8 rounded-lg shadow-sm text-center border border-gray-200">
                                    <p className="text-gray-500 text-lg mb-4">Your cart is empty.</p>
                                    <Link to="/shop" className="text-sky-500 font-bold hover:underline">
                                        Start Shopping
                                    </Link>
                                </div>
                            ) : (
                                <div className="flex flex-col gap-4">
                                    {cart.map((item) => (
                                        <div key={item.product.id} className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-gray-200 flex flex-col sm:flex-row gap-6 group transition-all hover:shadow-md">
                                            
                                            {/* 1. Checkbox & Image */}
                                            <div className="flex items-center gap-4">
                                                <button 
                                                    onClick={() => dispatch(toggleItemCheck(item.product.id))}
                                                    className={`text-2xl transition-colors ${item.checked ? "text-sky-500" : "text-gray-300"}`}
                                                >
                                                    {item.checked ? <CheckSquare size={24} /> : <Square size={24} />}
                                                </button>
                                                
                                                <div className="w-24 h-32 shrink-0 bg-gray-100 rounded-md overflow-hidden border border-gray-100">
                                                    <img 
                                                        src={item.product.images?.[0]?.url || "https://via.placeholder.com/150"} 
                                                        alt={item.product.name} 
                                                        className="w-full h-full object-cover"
                                                    />
                                                </div>
                                            </div>

                                            {/* 2. Details */}
                                            <div className="flex-1 flex flex-col justify-between">
                                                <div>
                                                    <h3 className="text-lg font-bold text-slate-800 mb-1 leading-tight">
                                                        {item.product.name}
                                                    </h3>
                                                    <p className="text-sm text-gray-500 line-clamp-2">
                                                        {item.product.description}
                                                    </p>
                                                    {/* Kargo Bedava Rozeti (Görseldeki gibi) */}
                                                    <div className="mt-2 inline-flex items-center px-2 py-1 bg-green-50 text-green-700 text-xs font-bold rounded border border-green-200">
                                                        <span className="mr-1">🚀</span> Free Shipping
                                                    </div>
                                                </div>

                                                <div className="flex items-center justify-between mt-4 sm:mt-0">
                                                    {/* Fiyat */}
                                                    <div className="text-sky-500 font-bold text-xl">
                                                        ${item.product.price}
                                                    </div>

                                                    {/* Miktar Kontrolü & Silme - Mobil İçin Alt Satır */}
                                                    <div className="flex items-center gap-4">
                                                        
                                                        {/* Artır/Azalt Butonları */}
                                                        <div className="flex items-center border border-gray-300 rounded overflow-hidden">
                                                            <button 
                                                                onClick={() => handleCountChange(item.product.id, item.count, -1)}
                                                                disabled={item.count <= 1}
                                                                className="px-3 py-2 bg-gray-50 hover:bg-gray-100 disabled:opacity-50 transition-colors border-r border-gray-300"
                                                            >
                                                                <Minus size={14} className="text-gray-600" />
                                                            </button>
                                                            <div className="px-4 py-2 font-bold text-sm text-slate-800 bg-white min-w-[40px] text-center">
                                                                {item.count}
                                                            </div>
                                                            <button 
                                                                onClick={() => handleCountChange(item.product.id, item.count, 1)}
                                                                className="px-3 py-2 bg-gray-50 hover:bg-gray-100 transition-colors border-l border-gray-300"
                                                            >
                                                                <Plus size={14} className="text-gray-600" />
                                                            </button>
                                                        </div>

                                                        {/* Sil Butonu */}
                                                        <button 
                                                            onClick={() => dispatch(removeFromCart(item.product.id))}
                                                            className="p-2 text-gray-400 hover:text-red-500 transition-colors"
                                                            title="Remove from cart"
                                                        >
                                                            <Trash2 size={20} />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>


                        {/* --- SAĞ KOLON: SİPARİŞ ÖZETİ (ORDER SUMMARY) --- */}
                        {cart.length > 0 && (
                            <div className="w-full lg:w-96 shrink-0">
                                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 sticky top-24">
                                    <h3 className="text-lg font-bold text-slate-800 mb-6">Order Summary</h3>
                                    
                                    <div className="space-y-4 mb-6">
                                        <div className="flex justify-between text-sm text-gray-600">
                                            <span>Product Total ({selectedItemsCount} items)</span>
                                            <span className="font-bold text-slate-800">${totalAmount.toFixed(2)}</span>
                                        </div>
                                        <div className="flex justify-between text-sm text-gray-600">
                                            <span>Shipping</span>
                                            {shippingCost === 0 ? (
                                                <span className="font-bold text-green-600">Free</span>
                                            ) : (
                                                <span className="font-bold text-slate-800">${shippingCost}</span>
                                            )}
                                        </div>
                                        <div className="flex justify-between text-sm text-gray-600">
                                            <span>Discount</span>
                                            <span className="font-bold text-slate-800">$0.00</span>
                                        </div>
                                        <div className="border-t border-gray-200 my-2"></div>
                                        <div className="flex justify-between items-center">
                                            <span className="text-base font-bold text-slate-800">Total</span>
                                            <span className="text-xl font-bold text-sky-500">${grandTotal.toFixed(2)}</span>
                                        </div>
                                    </div>

                                    {/* Create Order Butonu - Note: Logic next task */}
                                    <button className="w-full bg-sky-500 hover:bg-sky-600 text-white font-bold py-4 rounded-md transition-colors flex items-center justify-center gap-2">
                                        Create Order <ChevronRight size={18} />
                                    </button>

                                    <div className="mt-4 text-center">
                                        <button className="text-sm font-bold text-gray-500 hover:text-slate-800 transition-colors flex items-center justify-center gap-1 mx-auto">
                                            <Plus size={14} /> Enter Discount Code
                                        </button>
                                    </div>

                                </div>
                            </div>
                        )}

                    </div>
                </div>
            </main>

            <Footer />
        </>
    );
};

export default ShoppingCartPage;