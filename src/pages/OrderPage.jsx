// src/pages/OrderPage.js

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom'; // useNavigate eklendi
import { getAddressList, deleteAddress, getCardList, deleteCard } from '../store/actions/clientActions';
import { setAddress, setPayment, createOrder } from '../store/actions/shoppingCartActions'; // createOrder eklendi
import AddressForm from '../components/order/AddressForm';
import PaymentForm from '../components/order/PaymentForm';
import { Plus, User, Phone, Edit2, Trash2, CreditCard } from 'lucide-react';
import { toast } from "react-toastify"; // Toast eklendi

import Header from '../layout/Header';
import Footer from '../layout/Footer';

const OrderPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate(); // Yönlendirme için
    
    // Store'dan veriler
    const { user, addressList, cardList } = useSelector((state) => state.client);
    const { cart, address, payment } = useSelector((state) => state.shoppingCart);

    // --- STATE ---
    const [activeTab, setActiveTab] = useState('address'); 
    
    // Adres State
    const [showAddressForm, setShowAddressForm] = useState(false);
    const [editingAddress, setEditingAddress] = useState(null);
    const [selectedAddressId, setSelectedAddressId] = useState(null);
    
    // Kart State
    const [showCardForm, setShowCardForm] = useState(false);
    const [editingCard, setEditingCard] = useState(null);
    const [selectedCardId, setSelectedCardId] = useState(null);
    const [cvv, setCvv] = useState(""); // CVV State (Kayıtlı kartlar için manuel giriş gerekebilir ama şimdilik statik 321 yollayacağız veya buradan alacağız)

    const isLoggedIn = user && user.email; 
    
    useEffect(() => {
        if (isLoggedIn) {
            dispatch(getAddressList());
            dispatch(getCardList());
        }
    }, [dispatch, isLoggedIn]);

    // --- HESAPLAMALAR ---
    const productsTotal = cart.filter(i => i.checked).reduce((acc, item) => acc + (item.product.price * item.count), 0);
    const shippingPrice = 29.99;
    const shippingDiscount = productsTotal > 150 ? -shippingPrice : 0;
    const grandTotal = productsTotal + shippingPrice + shippingDiscount;

    // --- HANDLERS (ADRES) ---
    const handleAddressSelect = (addr) => {
        setSelectedAddressId(addr.id);
        dispatch(setAddress(addr));
    };
    const handleAddressDelete = (id) => { if(window.confirm("Silinsin mi?")) dispatch(deleteAddress(id)); };
    
    // --- HANDLERS (KART) ---
    const handleCardSelect = (card) => {
        setSelectedCardId(card.id);
        dispatch(setPayment(card));
    };
    const handleCardDelete = (id) => { if(window.confirm("Kart silinsin mi?")) dispatch(deleteCard(id)); };
    const handleEditCard = (card) => {
        setEditingCard(card);
        setShowCardForm(true);
    };

    // --- SİPARİŞİ TAMAMLA (FİNAL) ---
    const handleCompleteOrder = () => {
        // 1. Validasyonlar
        if (!address || !address.id) {
            toast.error("Lütfen bir teslimat adresi seçin.");
            setActiveTab('address');
            return;
        }
        if (!payment || !payment.card_no) {
            toast.error("Lütfen bir ödeme yöntemi seçin.");
            return;
        }

        // 2. Payload Hazırlama (İstenen JSON Formatına %100 Uyumlu)
        const orderPayload = {
            address_id: address.id,
            order_date: new Date().toISOString(), // Örn: "2024-01-10T14:18:30"
            card_no: payment.card_no, // String veya Number (API esnekse)
            card_name: payment.name_on_card,
            card_expire_month: payment.expire_month,
            card_expire_year: payment.expire_year,
            card_ccv: 321, // Not: Kayıtlı kartlarda CVV saklanmaz, kullanıcıdan istenmesi gerekir. Demo için statik 321 gönderiyoruz.
            price: grandTotal,
            products: cart.map(item => ({
                product_id: item.product.id,
                count: item.count,
                detail: item.product.description || "Standart" // API detay istiyor
            }))
        };

        // 3. API İsteği
        dispatch(createOrder(orderPayload))
            .then(() => {
                // Başarılı olursa Success sayfasına git
                navigate("/order-success");
            })
            .catch((err) => {
                // Hata zaten action içinde toast ile gösteriliyor
                console.log("Order error handled in component");
            });
    };


    if (!isLoggedIn) return <Navigate to="/login" replace />;

    return (
        <>
            <Header />
            <main className="bg-[#FAFAFA] min-h-screen py-8">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    
                    {/* TABLAR */}
                    <div className="flex flex-col sm:flex-row gap-4 mb-8">
                        {/* 1. ADRES TAB */}
                        <div 
                            onClick={() => setActiveTab('address')}
                            className={`flex-1 p-6 rounded-lg border-2 relative overflow-hidden shadow-sm cursor-pointer transition-colors
                                ${activeTab === 'address' ? 'bg-white border-orange-500' : 'bg-white border-gray-200 opacity-80'}
                            `}
                        >
                            <h3 className={`font-bold text-xl mb-1 ${activeTab === 'address' ? 'text-orange-500' : 'text-slate-700'}`}>Adres Bilgileri</h3>
                            <p className="text-sm text-gray-500">
                                {addressList.find(a => a.id === selectedAddressId)?.title || "Teslimat adresi seçiniz"}
                            </p>
                            <div className={`absolute top-4 left-4 font-bold text-5xl opacity-10 -z-0 ${activeTab === 'address' ? 'text-orange-500' : 'text-gray-400'}`}>1</div>
                        </div>

                        {/* 2. ÖDEME TAB */}
                        <div 
                            onClick={() => {
                                if(selectedAddressId) setActiveTab('payment'); 
                                else toast.warn("Lütfen önce bir teslimat adresi seçin.");
                            }}
                            className={`flex-1 p-6 rounded-lg border-2 relative overflow-hidden shadow-sm cursor-pointer transition-colors
                                ${activeTab === 'payment' ? 'bg-white border-orange-500' : 'bg-white border-gray-200'}
                            `}
                        >
                            <h3 className={`font-bold text-xl mb-1 ${activeTab === 'payment' ? 'text-orange-500' : 'text-slate-700'}`}>Ödeme Seçenekleri</h3>
                            <p className="text-sm text-gray-500">Banka/Kredi Kartı ile ödeme</p>
                            <div className={`absolute top-4 left-4 font-bold text-5xl opacity-10 -z-0 ${activeTab === 'payment' ? 'text-orange-500' : 'text-gray-400'}`}>2</div>
                        </div>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-8">
                        
                        {/* --- SOL KOLON: İÇERİK --- */}
                        <div className="flex-1">
                            
                            {/* --- TAB 1: ADRES İÇERİĞİ --- */}
                            {activeTab === 'address' && (
                                <div>
                                    {showAddressForm && (
                                        <AddressForm editAddress={editingAddress} closeForm={() => { setShowAddressForm(false); setEditingAddress(null); }} />
                                    )}
                                    <h3 className="text-lg font-bold text-slate-800 mb-4">Teslimat Adresi</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div onClick={() => { setEditingAddress(null); setShowAddressForm(true); }} className="bg-white border-2 border-dashed border-gray-300 rounded-lg min-h-[160px] flex flex-col items-center justify-center cursor-pointer hover:border-orange-500 hover:bg-orange-50 transition-colors group">
                                            <Plus size={40} className="text-gray-400 group-hover:text-orange-500 mb-2" />
                                            <span className="font-bold text-slate-600 group-hover:text-orange-500">Yeni Adres Ekle</span>
                                        </div>
                                        {addressList.map((addr) => (
                                            <div key={addr.id} onClick={() => handleAddressSelect(addr)} className={`bg-white rounded-lg p-4 relative cursor-pointer border-2 transition-all shadow-sm ${selectedAddressId === addr.id ? 'border-orange-500 bg-orange-50' : 'border-gray-200 hover:border-orange-300'}`}>
                                                <div className="flex justify-between items-start mb-2">
                                                    <div className="flex items-center gap-2">
                                                        {selectedAddressId === addr.id ? <div className="w-4 h-4 rounded-full border border-orange-500 flex items-center justify-center"><div className="w-2 h-2 rounded-full bg-orange-500"></div></div> : <div className="w-4 h-4 rounded-full border border-gray-400"></div>}
                                                        <span className="font-bold text-slate-800">{addr.title}</span>
                                                    </div>
                                                    <div className="flex gap-2">
                                                        <button onClick={(e) => { e.stopPropagation(); setEditingAddress(addr); setShowAddressForm(true); }} className="text-slate-500 hover:text-orange-500"><Edit2 size={16} /></button>
                                                        <button onClick={(e) => { e.stopPropagation(); handleAddressDelete(addr.id); }} className="text-slate-500 hover:text-red-500"><Trash2 size={16} /></button>
                                                    </div>
                                                </div>
                                                <div className="text-sm text-gray-600 line-clamp-3">{addr.neighborhood} {addr.district}/{addr.city}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* --- TAB 2: ÖDEME İÇERİĞİ --- */}
                            {activeTab === 'payment' && (
                                <div>
                                    
                                    {showCardForm ? (
                                        <PaymentForm closeForm={() => { setShowCardForm(false); setEditingCard(null); }} editCard={editingCard} />
                                    ) : (
                                        <div className="mb-8">
                                            <div className="flex justify-between items-center mb-4">
                                                <h3 className="text-lg font-bold text-slate-800">Kart Bilgileri</h3>
                                                <button onClick={() => setShowCardForm(true)} className="text-sm font-bold text-slate-700 underline hover:text-orange-500">Başka bir Kart ile Ödeme Yap</button>
                                            </div>
                                            
                                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                                {cardList.map((card) => (
                                                    <div key={card.id} onClick={() => handleCardSelect(card)} className={`bg-white rounded-lg p-4 border-2 cursor-pointer transition-all relative ${selectedCardId === card.id ? 'border-orange-500 shadow-md' : 'border-gray-200'}`}>
                                                        <div className="flex justify-between items-start mb-4">
                                                            <div className="flex items-center gap-2">
                                                                <input type="radio" checked={selectedCardId === card.id} readOnly className="accent-orange-500 w-4 h-4" />
                                                                <span className="font-bold text-slate-800">{card.name_on_card}</span>
                                                            </div>
                                                            <div className="flex gap-2">
                                                                <button onClick={(e) => { e.stopPropagation(); handleEditCard(card); }} className="text-gray-400 hover:text-orange-500"><Edit2 size={14} /></button>
                                                                <button onClick={(e) => { e.stopPropagation(); handleCardDelete(card.id); }} className="text-gray-400 hover:text-red-500"><Trash2 size={14} /></button>
                                                            </div>
                                                        </div>
                                                        <div className="flex items-center gap-3 mb-2">
                                                            <CreditCard size={32} className="text-slate-400" />
                                                            <span className="text-lg font-mono text-slate-600 tracking-wider">
                                                                **** {card.card_no.slice(-4)}
                                                            </span>
                                                        </div>
                                                        <div className="text-xs text-gray-400 text-right">{card.expire_month}/{card.expire_year}</div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {/* Taksit Seçenekleri */}
                                    {selectedCardId && !showCardForm && (
                                        <div className="bg-white rounded-lg border border-gray-200 p-6 mt-6">
                                            <h3 className="text-lg font-bold text-slate-800 mb-4">Taksit Seçenekleri</h3>
                                            <table className="w-full text-sm text-left">
                                                <thead className="text-xs text-gray-500 uppercase bg-gray-50">
                                                    <tr>
                                                        <th className="px-4 py-3">Taksit Sayısı</th>
                                                        <th className="px-4 py-3">Aylık Ödeme</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr className="bg-white border-b hover:bg-gray-50">
                                                        <td className="px-4 py-4 font-bold flex items-center gap-2">
                                                            <input type="radio" name="taksit" defaultChecked className="accent-orange-500" />
                                                            Tek Çekim
                                                        </td>
                                                        <td className="px-4 py-4 font-bold text-orange-500">
                                                            ${grandTotal.toFixed(2)}
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    )}

                                </div>
                            )}

                        </div>

                        {/* --- SAĞ KOLON: ÖZET VE ONAY --- */}
                        <div className="w-full lg:w-80 shrink-0 space-y-4">
                            <button 
                                onClick={() => {
                                    if(activeTab === 'address') setActiveTab('payment');
                                    else handleCompleteOrder();
                                }}
                                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-md transition-colors text-sm shadow-sm"
                            >
                                {activeTab === 'address' ? 'Kaydet ve Devam Et' : 'Ödeme Yap'}
                            </button>

                            <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200">
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
                                    {productsTotal > 150 && (
                                        <div className="flex justify-between text-sm text-orange-500">
                                            <span className="w-2/3">150 $ ve Üzeri Kargo Bedava</span>
                                            <span className="font-bold">${shippingDiscount}</span>
                                        </div>
                                    )}
                                    <div className="border-t border-gray-200 my-2"></div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-base font-bold text-slate-800">Toplam</span>
                                        <span className="text-xl font-bold text-orange-500">${grandTotal.toFixed(2)}</span>
                                    </div>
                                </div>
                                <button 
                                    onClick={() => {
                                        if(activeTab === 'address') {
                                            if(selectedAddressId) setActiveTab('payment');
                                            else toast.warn("Lütfen adres seçin");
                                        } else {
                                            handleCompleteOrder(); // SİPARİŞİ TAMAMLA
                                        }
                                    }}
                                    className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 rounded-md transition-colors shadow-sm"
                                >
                                    {activeTab === 'address' ? 'Kaydet ve Devam Et' : 'Ödeme Yap'}
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default OrderPage;