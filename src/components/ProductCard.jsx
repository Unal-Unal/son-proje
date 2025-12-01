// src/components/ProductCard.js

import React from 'react';
import { Link } from 'react-router-dom';

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
    <Link 
      to={`/product/${id}`} 
      className={`flex flex-col w-full bg-white transition-shadow duration-300 hover:shadow-md ${className || ''}`}
    >
        {/* 1. GÖRSEL ALANI */}
        {/* aspect-[3/4] veya aspect-square kullanarak oranı sabitliyoruz.
            Böylece her resim aynı kutu boyutuna sahip oluyor. */}
        <div className="w-full aspect-[3/4] relative overflow-hidden bg-gray-100">
          <img 
            src={imageUrl} 
            alt={name} 
            // object-cover: Resmi kutuya doldur (taşan kısımları kırp)
            // object-center: Resmi ortala
            className="w-full h-full object-cover object-center" 
            onError={(e) => { e.target.onerror = null; e.target.src = "https://via.placeholder.com/400x500?text=No+Image" }}
          />
        </div>

        {/* 2. İÇERİK ALANI */}
        <div className="p-6 flex flex-col items-start">
          <h3 className="text-base font-bold text-slate-800 mb-2">{name}</h3>
          <p className="text-sm font-bold text-gray-500 mb-3">{department}</p>

          <div className="flex items-center gap-2">
            <span className="text-sm font-bold text-gray-400 line-through">${price.toFixed(2)}</span>
            <span className="text-sm font-bold text-teal-600">${discountedPrice.toFixed(2)}</span>
          </div>
        </div>
    </Link>
  );
};

export default ProductCard;