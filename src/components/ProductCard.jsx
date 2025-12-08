// src/components/ProductCard.js

import React from 'react';
// Link importunu kaldırdık çünkü artık div kullanıyoruz.

const ProductCard = ({ product, className }) => {
  const { 
    id, 
    name = 'Undefined Product', 
    price = 16.48, 
    discountedPrice = 6.48, 
    imageUrl = 'https://i.imgur.com/3dqYRsr.png',
    department = 'English Department'
  } = product || {};

  return (
    // 👇 DEĞİŞİKLİK BURADA: Link yerine div kullandık ve 'to' propunu sildik.
    <div 
      className={`flex flex-col w-full bg-white transition-shadow duration-300 hover:shadow-md h-full ${className || ''}`}
    >
        {/* 1. GÖRSEL ALANI */}
        <div className="w-full aspect-[3/4] relative overflow-hidden bg-gray-100">
          <img 
            src={imageUrl} 
            alt={name} 
            className="w-full h-full object-cover object-center" 
            onError={(e) => { e.target.onerror = null; e.target.src = "https://via.placeholder.com/400x500?text=No+Image" }}
          />
        </div>

        {/* 2. İÇERİK ALANI */}
        <div className="p-6 flex flex-col items-center text-center"> {/* items-start yerine items-center ve text-center daha şık durabilir, senin tercihine kalmış */}
          <h3 className="text-base font-bold text-slate-800 mb-2">{name}</h3>
          <p className="text-sm font-bold text-gray-500 mb-3">{department}</p>

          <div className="flex items-center gap-2">
            <span className="text-sm font-bold text-gray-400 line-through">${price}</span> {/* toFixed bazen string hatası verebilir diye sildim, veri zaten number geliyorsa ekleyebilirsin */}
            <span className="text-sm font-bold text-teal-600">${discountedPrice}</span>
          </div>
        </div>
    </div>
  );
};

export default ProductCard;