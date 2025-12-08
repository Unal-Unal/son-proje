// src/App.js

import React, { useEffect } from "react"; // useEffect eklendi
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux"; // useDispatch eklendi
import { autoLogin } from "./store/actions/clientActions"; // Action import edildi
import { fetchCategories } from "./store/actions/productActions"; // <-- YENİ IMPORT

// Sayfa Importları
import HomePage from "./pages/HomePage";
import ShopPage from './pages/ShopPage';
import ProductDetailPage from './pages/ProductDetailPage';
import ContactPage from './pages/ContactPage';
import TeamPage from './pages/TeamPage';
import AboutPage from './pages/AboutPage';
import SignUpPage from './pages/SignUpPage';
import LoginPage from './pages/LoginPage';
import ShoppingCartPage from './pages/ShoppingCartPage';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(autoLogin());      // Kullanıcıyı hatırla
    dispatch(fetchCategories()); // <-- Kategorileri çek
  }, [dispatch]);

  return (
    <div className="min-h-screen bg-gray-50 antialiased">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/shop/:gender/:category/:categoryId" element={<ShopPage />} />
        <Route 
  path="/shop/:gender/:category/:categoryId/:productNameSlug/:productId" 
  element={<ProductDetailPage />} 
/>
        <Route path="/product" element={<ProductDetailPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/cart" element={<ShoppingCartPage />} />
      </Routes>
    </div>
  );
}

export default App;