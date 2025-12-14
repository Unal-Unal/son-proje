// src/components/order/AddressForm.js
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addAddress, updateAddress } from '../../store/actions/clientActions';

const AddressForm = ({ editAddress, closeForm }) => {
    const dispatch = useDispatch();
    
    // Şehir Listesi (Örnek veriler, normalde API'den veya json'dan gelebilir)
    const cities = ["İstanbul", "Ankara", "İzmir", "Antalya", "Bursa"];

    const [formData, setFormData] = useState({
        title: "",
        name: "",
        surname: "",
        phone: "",
        city: "İstanbul",
        district: "",
        neighborhood: "" // API isterlerine göre "Address" detayı buraya map edilecek
    });

    // Eğer düzenleme modundaysak verileri doldur
    useEffect(() => {
        if (editAddress) {
            setFormData({
                id: editAddress.id,
                title: editAddress.title,
                name: editAddress.name,
                surname: editAddress.surname,
                phone: editAddress.phone,
                city: editAddress.city,
                district: editAddress.district,
                neighborhood: editAddress.neighborhood,
            });
        }
    }, [editAddress]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const action = editAddress ? updateAddress(formData) : addAddress(formData);
        
        dispatch(action).then(() => {
            closeForm(); // İşlem başarılıysa formu kapat
        });
    };

    return (
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 mb-8">
            <h3 className="text-lg font-bold text-slate-800 mb-4">
                {editAddress ? "Adresi Düzenle" : "Yeni Adres Ekle"}
            </h3>
            
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                
                {/* Adres Başlığı */}
                <div className="col-span-2">
                    <label className="block text-sm font-bold text-gray-700 mb-1">Adres Başlığı</label>
                    <input type="text" name="title" value={formData.title} onChange={handleChange} placeholder="Örn: Ev, İş" className="w-full border border-gray-300 rounded p-2 focus:outline-sky-500" required />
                </div>

                {/* Ad & Soyad */}
                <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1">Ad</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full border border-gray-300 rounded p-2 focus:outline-sky-500" required />
                </div>
                <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1">Soyad</label>
                    <input type="text" name="surname" value={formData.surname} onChange={handleChange} className="w-full border border-gray-300 rounded p-2 focus:outline-sky-500" required />
                </div>

                {/* Telefon & Şehir */}
                <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1">Telefon</label>
                    <input type="text" name="phone" value={formData.phone} onChange={handleChange} placeholder="05..." className="w-full border border-gray-300 rounded p-2 focus:outline-sky-500" required />
                </div>
                <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1">İl</label>
                    <select name="city" value={formData.city} onChange={handleChange} className="w-full border border-gray-300 rounded p-2 focus:outline-sky-500">
                        {cities.map(city => <option key={city} value={city.toLowerCase()}>{city}</option>)}
                    </select>
                </div>

                {/* İlçe & Mahalle */}
                <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1">İlçe</label>
                    <input type="text" name="district" value={formData.district} onChange={handleChange} className="w-full border border-gray-300 rounded p-2 focus:outline-sky-500" required />
                </div>
                {/* Not: API JSON yapısında 'neighborhood' text alanı olarak kullanılıyor */}
                <div className="col-span-2">
                    <label className="block text-sm font-bold text-gray-700 mb-1">Adres Detayı (Mahalle, Sokak, Kapı No)</label>
                    <textarea 
                        name="neighborhood" 
                        value={formData.neighborhood} 
                        onChange={handleChange} 
                        rows="3" 
                        className="w-full border border-gray-300 rounded p-2 focus:outline-sky-500"
                        required
                    ></textarea>
                </div>

                <div className="col-span-2 flex justify-end gap-2 mt-2">
                    <button type="button" onClick={closeForm} className="bg-gray-200 text-slate-800 px-4 py-2 rounded font-bold hover:bg-gray-300 transition">Vazgeç</button>
                    <button type="submit" className="bg-orange-500 text-white px-6 py-2 rounded font-bold hover:bg-orange-600 transition">Kaydet</button>
                </div>

            </form>
        </div>
    );
};

export default AddressForm;