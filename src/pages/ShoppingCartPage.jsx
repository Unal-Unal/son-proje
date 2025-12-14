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
    const productsTotal = cart
        .filter(item => item.checked)
        .reduce((total, item) => total + (item.product.price * item.count), 0);

    // Seçili ürün sayısı
    const selectedItemsCount = cart.filter(item => item.checked).length;

    // Kargo Bedeli (Sabit 29.99 TL)
    const shippingPrice = 29.99;
    
    // Kargo İndirimi (150 TL üzeri bedava) - Görseldeki mantık
    // Eğer ürün toplamı 150'den büyükse, kargo bedeli kadar indirim yapıyoruz.
    const shippingDiscount = productsTotal > 150 ? -shippingPrice : 0;
    
    // Genel Toplam: Ürünler + Kargo + (Varsa Kargo İndirimi - eksi olduğu için topluyoruz)
    const grandTotal = productsTotal + shippingPrice + shippingDiscount;

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
                        Sepetim ({cart.length} Ürün)
                    </h2>

                    <div className="flex flex-col lg:flex-row gap-8">
                        
                        {/* --- SOL KOLON: ÜRÜN LİSTESİ --- */}
                        <div className="flex-1">
                            {cart.length === 0 ? (
                                <div className="bg-white p-8 rounded-lg shadow-sm text-center border border-gray-200">
                                    <p className="text-gray-500 text-lg mb-4">Sepetiniz boş.</p>
                                    <Link to="/shop" className="text-sky-500 font-bold hover:underline">
                                        Alışverişe Başla
                                    </Link>
                                </div>
                            ) : (
                                <div className="flex flex-col gap-4">
                                    
                                    {/* Kargo Bilgilendirme Banner'ı */}
                                    <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-md flex items-center gap-2 text-sm font-bold">
                                        <CheckSquare size={18} />
                                        <span>Sepetindeki Ürünleri Bireysel Veya Kurumsal Fatura Seçerek Alabilirsin.</span>
                                    </div>

                                    {/* Ürün Kartları */}
                                    {cart.map((item) => (
                                        <div key={item.product.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                                            
                                            {/* Kart Header (Satıcı Bilgisi vb. - Görseldeki gibi) */}
                                            <div className="bg-gray-50 px-4 py-3 border-b border-gray-100 flex items-center justify-between">
                                                <div className="flex items-center gap-2">
                                                    <button onClick={() => dispatch(toggleItemCheck(item.product.id))} className={`text-xl ${item.checked ? "text-orange-500" : "text-gray-300"}`}>
                                                         {item.checked ? <CheckSquare size={20} /> : <Square size={20} />}
                                                    </button>
                                                    <span className="text-sm font-bold text-slate-700">Satıcı: <span className="text-slate-900">Bandage Store</span></span>
                                                    <span className="bg-green-600 text-white text-[10px] px-1 rounded">9.7</span>
                                                </div>
                                                <div className="bg-green-50 text-green-700 text-xs font-bold px-2 py-1 rounded border border-green-100 flex items-center gap-1">
                                                    <span>📦</span> Kargo Bedava!
                                                </div>
                                            </div>

                                            <div className="p-4 sm:p-6 flex flex-col sm:flex-row gap-6">
                                                {/* Checkbox & Image */}
                                                <div className="flex items-center gap-4">
                                                     <button onClick={() => dispatch(toggleItemCheck(item.product.id))} className={`text-2xl sm:hidden ${item.checked ? "text-orange-500" : "text-gray-300"}`}>
                                                         {item.checked ? <CheckSquare size={24} /> : <Square size={24} />}
                                                    </button>
                                                    <div className="w-24 h-32 shrink-0 border border-gray-200 rounded-md overflow-hidden relative">
                                                        <img 
                                                            src={item.product.images?.[0]?.url || "https://via.placeholder.com/150"} 
                                                            alt={item.product.name} 
                                                            className="w-full h-full object-cover"
                                                        />
                                                    </div>
                                                </div>

                                                {/* Details */}
                                                <div className="flex-1 flex flex-col justify-between">
                                                    <div>
                                                        <h3 className="text-sm font-bold text-slate-800 mb-1 leading-tight">
                                                            {item.product.name}
                                                        </h3>
                                                        <p className="text-xs text-gray-500 mt-1">Beden: Standart</p>
                                                        <div className="mt-2 text-xs text-green-600 font-bold flex items-center gap-1">
                                                            <span>🚚</span> 39 dakika içinde sipariş verirsen en geç yarın kargoda!
                                                        </div>
                                                    </div>

                                                    <div className="flex items-end justify-between mt-4">
                                                        {/* Miktar Kontrolü */}
                                                        <div className="flex items-center border border-gray-300 rounded overflow-hidden h-10">
                                                            <button 
                                                                onClick={() => handleCountChange(item.product.id, item.count, -1)}
                                                                disabled={item.count <= 1}
                                                                className="px-3 bg-gray-50 hover:bg-gray-100 disabled:opacity-50 h-full border-r border-gray-300 flex items-center justify-center text-gray-500"
                                                            >
                                                                <Minus size={14} />
                                                            </button>
                                                            <div className="w-10 font-bold text-sm text-slate-800 bg-white h-full flex items-center justify-center">
                                                                {item.count}
                                                            </div>
                                                            <button 
                                                                onClick={() => handleCountChange(item.product.id, item.count, 1)}
                                                                className="px-3 bg-gray-50 hover:bg-gray-100 h-full border-l border-gray-300 flex items-center justify-center text-orange-500"
                                                            >
                                                                <Plus size={14} />
                                                            </button>
                                                        </div>

                                                        {/* Fiyat ve Silme */}
                                                        <div className="flex items-center gap-6">
                                                            <span className="text-orange-500 font-bold text-lg">
                                                                ${item.product.price}
                                                            </span>
                                                            <button 
                                                                onClick={() => dispatch(removeFromCart(item.product.id))}
                                                                className="text-gray-400 hover:text-red-500 transition-colors"
                                                            >
                                                                <Trash2 size={18} />
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>


                        {/* --- SAĞ KOLON: SİPARİŞ ÖZETİ (GÖRSELE UYGUN) --- */}
                        {cart.length > 0 && (
                            <div className="w-full lg:w-80 shrink-0 space-y-4">
                                
                                {/* Üstteki Turuncu Buton */}
                                <Link to="/order" className="w-full">
                                 <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-md transition-colors text-sm flex items-center justify-center gap-2 shadow-sm">
                                 Sepeti Onayla <ChevronRight size={16} />
                                 </button>
                                </Link>
                                <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200 sticky top-24">
                                    <h3 className="text-lg font-bold text-slate-800 mb-4">Sipariş Özeti</h3>
                                    
                                    <div className="space-y-3 mb-6">
                                        <div className="flex justify-between text-sm text-gray-600">
                                            <span>Ürünün Toplamı</span>
                                            <span className="font-bold text-slate-800">${productsTotal.toFixed(2)}</span>
                                        </div>
                                        <div className="flex justify-between text-sm text-gray-600">
                                            <span>Kargo Toplam</span>
                                            <span className="font-bold text-slate-800">${shippingPrice}</span>
                                        </div>
                                        
                                        {/* Kargo İndirimi Şartı */}
                                        {productsTotal > 150 && (
                                            <div className="flex justify-between text-sm text-orange-500">
                                                <span className="w-2/3">150 $ ve Üzeri Kargo Bedava (Satıcı Karşılar)</span>
                                                <span className="font-bold">${shippingDiscount}</span>
                                            </div>
                                        )}

                                        <div className="border-t border-gray-200 my-2"></div>
                                        
                                        <div className="flex justify-between items-center">
                                            <span className="text-base font-bold text-slate-800">Toplam</span>
                                            <span className="text-xl font-bold text-orange-500">${grandTotal.toFixed(2)}</span>
                                        </div>
                                    </div>

                                    {/* İndirim Kodu Alanı */}
                                    <button className="w-full border border-gray-200 hover:border-gray-300 text-orange-500 font-bold py-3 rounded-md transition-colors flex items-center justify-center gap-2 text-sm mb-4 bg-white">
                                        <Plus size={16} /> İNDİRİM KODU GİR
                                    </button>

                                    {/* Alttaki Turuncu Buton */}
                                    <Link to="/order" className="w-full">
                                       <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 rounded-md transition-colors flex items-center justify-center gap-2 shadow-sm">
                                       Sepeti Onayla <ChevronRight size={18} />
                                       </button>
                                    </Link>

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