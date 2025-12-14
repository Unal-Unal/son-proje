// src/components/order/PaymentForm.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCard, updateCard } from '../../store/actions/clientActions';

const PaymentForm = ({ closeForm, editCard }) => {
    const dispatch = useDispatch();

    const [formData, setFormData] = useState({
        card_no: editCard ? editCard.card_no : "",
        expire_month: editCard ? editCard.expire_month : 1,
        expire_year: editCard ? editCard.expire_year : 2024,
        name_on_card: editCard ? editCard.name_on_card : "",
        cvv: "" // API'ye gönderilmeyecek, sadece form validasyonu için
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // API'nin istediği payload yapısı (CVV hariç)
        const payload = {
            card_no: formData.card_no,
            expire_month: parseInt(formData.expire_month),
            expire_year: parseInt(formData.expire_year),
            name_on_card: formData.name_on_card
        };

        if (editCard) {
            dispatch(updateCard({ ...payload, id: editCard.id })).then(closeForm);
        } else {
            dispatch(addCard(payload)).then(closeForm);
        }
    };

    return (
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 mb-6">
            <div className="flex justify-between items-center mb-4">
                 <h3 className="text-lg font-bold text-slate-800">Kart Bilgileri</h3>
                 <button onClick={closeForm} className="text-sm text-gray-500 hover:text-orange-500 underline">Kayıtlı kartımla ödeme yap</button>
            </div>
           
            <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Kart Numarası */}
                <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1">Kart Numarası</label>
                    <div className="relative">
                        <input 
                            type="text" 
                            name="card_no" 
                            value={formData.card_no} 
                            onChange={handleChange} 
                            maxLength={16}
                            placeholder="0000 0000 0000 0000" 
                            className="w-full border border-gray-300 rounded p-3 pl-4 focus:outline-orange-500" 
                            required 
                        />
                        {/* Sol tarafta kırmızı çizgi (görseldeki detay) */}
                        <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-red-400 rounded-l"></div>
                    </div>
                </div>

                <div className="flex gap-4">
                    {/* Son Kullanma Tarihi */}
                    <div className="flex-1">
                        <label className="block text-sm font-bold text-gray-700 mb-1">Son Kullanma Tarihi</label>
                        <div className="flex gap-2">
                            <select name="expire_month" value={formData.expire_month} onChange={handleChange} className="w-1/2 border border-gray-300 rounded p-3 bg-white focus:outline-orange-500">
                                {Array.from({length: 12}, (_, i) => i + 1).map(m => (
                                    <option key={m} value={m}>{m < 10 ? `0${m}` : m}</option>
                                ))}
                            </select>
                            <select name="expire_year" value={formData.expire_year} onChange={handleChange} className="w-1/2 border border-gray-300 rounded p-3 bg-white focus:outline-orange-500">
                                {Array.from({length: 15}, (_, i) => 2024 + i).map(y => (
                                    <option key={y} value={y}>{y}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    {/* CVV */}
                    <div className="w-1/3">
                         <label className="block text-sm font-bold text-gray-700 mb-1 flex items-center gap-1">CVV <span className="text-gray-400 text-xs">ⓘ</span></label>
                         <input 
                            type="text" 
                            name="cvv" 
                            maxLength={3}
                            value={formData.cvv}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded p-3 bg-gray-50 focus:outline-orange-500" 
                         />
                    </div>
                </div>

                {/* Kart Üzerindeki İsim */}
                <div>
                     <label className="block text-sm font-bold text-gray-700 mb-1">Kart Üzerindeki İsim</label>
                     <input 
                        type="text" 
                        name="name_on_card" 
                        value={formData.name_on_card} 
                        onChange={handleChange} 
                        className="w-full border border-gray-300 rounded p-3 focus:outline-orange-500" 
                        required 
                     />
                </div>

                <div className="flex items-center gap-2">
                    <input type="checkbox" id="3dsecure" className="w-5 h-5 accent-orange-500" />
                    <label htmlFor="3dsecure" className="text-sm font-bold text-slate-700">3D Secure ile ödemek istiyorum.</label>
                </div>

                <div className="flex justify-end gap-2 pt-2">
                    <button type="button" onClick={closeForm} className="bg-gray-100 text-slate-700 px-6 py-3 rounded font-bold hover:bg-gray-200">Vazgeç</button>
                    <button type="submit" className="bg-orange-500 text-white px-8 py-3 rounded font-bold hover:bg-orange-600">Kaydet</button>
                </div>

            </form>
        </div>
    );
};

export default PaymentForm;