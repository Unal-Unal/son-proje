// src/App.js

import React from "react";
// ❌ Hata: Router'ın index.js'te tanımlı olduğu varsayımıyla 
// App.js'teki Router importu kaldırılmalı.
import { Routes, Route } from "react-router-dom"; // Sadece Routes ve Route kalsın
import HomePage from "./pages/HomePage"; // HomePage import edildiğini varsayıyoruz
import ShopPage from './pages/ShopPage';
import ProductDetailPage from './pages/ProductDetailPage';
import ContactPage from './pages/ContactPage';
import TeamPage from './pages/TeamPage';
import AboutPage from './pages/AboutPage';

// ⚠️ NOT: Bu fonksiyonun başında gerekli import'ları (Routes, Route, HomePage)
// yaptığınızdan ve App.js'in en üstünde HomePage'i import ettiğinizden emin olun.

function App() {
  return (
    // ❌ Hata: Router burada OLMAMALI! index.js'te zaten tanımlı.
    // <Router> bileşeni kaldırıldı.
    
    <div className="min-h-screen bg-gray-50 antialiased">
      <Routes>
        {/*
          Sadece bir sayfa tanımladık. Path "/" (ana yol) HomePage bileşenini gösterecek.
        */}
        <Route path="/" element={<HomePage />} />
        
        <Route path="/shop" element={<ShopPage />} />
        {/* Örnek olarak bir ürün detay yolu:
        <Route path="/products/:id" element={<ProductDetailPage />} />
        */}
        <Route path="/product" element={<ProductDetailPage />} />

        <Route path="/contact" element={<ContactPage />} />

        <Route path="/team" element={<TeamPage />} />

        <Route path="/about" element={<AboutPage />} />
        
        {/* Örnek olarak bir 404 sayfası:
        <Route path="*" element={<h1>404 Sayfa Bulunamadı</h1>} /> 
        */}
      </Routes>
    </div>
    
    // </Router> bileşeni kaldırıldı.
  );
}

// ⚠️ Ayrıca, App.js'in en üstünde yer alan import'unuzu da düzeltmelisiniz.
// Önceki kodunuzdaki (varsayımsal) hatalı import:
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Yeni import:
// import { Routes, Route } from 'react-router-dom';

export default App;