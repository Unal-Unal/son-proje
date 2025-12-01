// src/layout/Header.js

import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
// İkonlar
import { Menu, ShoppingCart, User, Search, Heart, Phone, Mail, ChevronDown, ArrowRight } from 'lucide-react'; 
import { FaInstagram, FaYoutube, FaFacebook, FaTwitter } from 'react-icons/fa';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // --- SAYFA KONTROLLERİ ---
  const isShopPage = location.pathname === '/shop' || location.pathname.includes('/product');
  const isContactPage = location.pathname === '/contact';
  const isHomePage = !isShopPage && !isContactPage; 


  // ############################################################################
  // ####################  BÖLÜM 1: CONTACT PAGE HEADER  ########################
  // #################################===================########################
  if (isContactPage) {
    return (
        <div className="w-full font-sans">
            <header className="bg-white shadow-sm relative z-50">
                <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
                    
                    {/* SOL: Logo ve Menü */}
                    <div className="flex items-center md:flex-1">
                        <Link to="/">
                            <h3 className="text-2xl font-bold text-slate-800 tracking-wide mr-24">
                                Bandage
                            </h3>
                        </Link>
                        {/* Desktop Menü */}
                        <nav className="hidden md:flex items-center gap-6 text-sm font-bold text-gray-500">
                            <Link to="/" className="hover:text-slate-900 transition-colors">Home</Link>
                            <Link to="/product" className="hover:text-slate-900 transition-colors">Product</Link>
                            <Link to="/pricing" className="hover:text-slate-900 transition-colors">Pricing</Link>
                            <Link to="/contact" className="hover:text-slate-900 transition-colors">Contact</Link>
                        </nav>
                    </div>

                    {/* SAĞ TARAF */}
                    <div className="flex items-center gap-4">
                        
                        {/* DESKTOP: Sadece Login ve Buton (İkon Yok) */}
                        <div className="hidden md:flex items-center gap-8">
                            <Link to="/login" className="text-sky-500 font-bold text-sm hover:text-sky-600 transition-colors">
                                Login
                            </Link>
                            <Link to="/register" className="bg-sky-500 hover:bg-sky-600 text-white text-sm font-bold py-3 px-6 rounded flex items-center gap-2 transition-colors">
                                Become a member <ArrowRight size={16} />
                            </Link>
                        </div>

                        {/* MOBİL: Search, Cart ve Hamburger (Fotoğraftaki gibi) */}
                        <div className="flex items-center gap-4 md:hidden text-slate-800">
                            <button className="hover:text-sky-500">
                                <Search size={24} strokeWidth={1.5} />
                            </button>
                            <Link to="/cart" className="hover:text-sky-500">
                                <ShoppingCart size={24} strokeWidth={1.5} />
                            </Link>
                            <button onClick={toggleMenu} className="focus:outline-none hover:text-sky-500">
                                <Menu size={24} strokeWidth={1.5} className="mt-1" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* CONTACT MOBİL MENÜ İÇERİĞİ */}
                {/* Sadece Home, Product, Pricing, Contact */}
                <div className={`${isMenuOpen ? 'flex' : 'hidden'} flex-col items-center py-16 space-y-8 md:hidden bg-white border-t border-gray-100 transition-all duration-300 ease-in-out`}>
                    <nav className="flex flex-col items-center gap-8 text-3xl font-normal text-gray-500">
                        <Link to="/" onClick={toggleMenu} className="hover:text-slate-800">Home</Link>
                        <Link to="/product" onClick={toggleMenu} className="hover:text-slate-800">Product</Link>
                        <Link to="/pricing" onClick={toggleMenu} className="hover:text-slate-800">Pricing</Link>
                        <Link to="/contact" onClick={toggleMenu} className="hover:text-slate-800">Contact</Link>
                    </nav>
                    {/* Mobilde Login/Register butonu GİZLENDİ (Görselde yoktu) */}
                </div>
            </header>
        </div>

        
    );
  }


  // ############################################################################
  // #################  BÖLÜM 2: STANDARD HEADER (HOME & SHOP)  #################
  // #################################========================###################
  return (
    <div className="w-full font-sans">
        
        {/* Üst Yeşil Bar (Sadece Shop'ta) */}
        {isShopPage && (
            <div className="hidden lg:block bg-[#23856D] text-white text-sm font-bold py-3 px-4">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-1 hover:text-gray-200 cursor-pointer">
                            <Phone size={16} /> <span>(225) 555-0118</span>
                        </div>
                        <div className="flex items-center gap-1 hover:text-gray-200 cursor-pointer">
                            <Mail size={16} /> <span>michelle.rivera@example.com</span>
                        </div>
                    </div>
                    <div className="flex-1 text-center">
                        <span>Follow Us and get a chance to win 80% off</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <span>Follow Us :</span>
                        <div className="flex items-center gap-3">
                            <a href="#" className="hover:text-gray-200"><FaInstagram size={16} /></a>
                            <a href="#" className="hover:text-gray-200"><FaYoutube size={16} /></a>
                            <a href="#" className="hover:text-gray-200"><FaFacebook size={16} /></a>
                            <a href="#" className="hover:text-gray-200"><FaTwitter size={16} /></a>
                        </div>
                    </div>
                </div>
            </div>
        )}

        {/* Ana Navbar */}
        <header className="bg-white shadow-sm relative z-50">
            
            <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
                
                {/* Sol: Logo ve Menü */}
                <div className="flex items-center gap-12 lg:gap-24">
                    <Link to="/">
                        <h3 className="text-2xl font-bold text-slate-800 tracking-wide">
                            Bandage
                        </h3>
                    </Link>

                    <nav className="hidden md:flex items-center gap-4 text-sm font-bold text-gray-500">
                        <Link to="/" className="hover:text-sky-500 transition-colors">Home</Link>
                        <Link to="/shop" className="flex items-center gap-1 hover:text-sky-500 transition-colors">
                            Shop <ChevronDown size={14} />
                        </Link>
                        <Link to="/about" className="hover:text-sky-500 transition-colors">About</Link>
                        <Link to="/blog" className="hover:text-sky-500 transition-colors">Blog</Link>
                        <Link to="/contact" className="hover:text-sky-500 transition-colors">Contact</Link>
                        <Link to="/pages" className="hover:text-sky-500 transition-colors">Pages</Link>
                    </nav>
                </div>

                {/* Sağ: İkonlar */}
                <div className="flex items-center justify-end gap-6">
                    <div className="hidden md:flex items-center gap-6 text-sky-500 font-bold text-sm">
                        <div className="flex items-center">
                            <Link to="/login" className="flex items-center gap-1 hover:text-sky-600 transition-colors">
                                <User size={16} className="mr-1 text-sky-500" />
                                Login / Register
                            </Link>
                        </div>
                        
                        <div className="flex items-center gap-4">
                            <button className="hover:text-sky-600 transition-colors">
                                <Search size={16} strokeWidth={2} />
                            </button>
                            <Link to="/cart" className="flex items-center gap-1 hover:text-sky-600 transition-colors">
                                <ShoppingCart size={16} strokeWidth={2} /> 
                                <span>1</span>
                            </Link>
                            <Link to="/wishlist" className="flex items-center gap-1 hover:text-sky-600 transition-colors">
                                <Heart size={16} strokeWidth={2} /> 
                                <span>1</span>
                            </Link>
                        </div>
                    </div>

                    {/* Mobil İkonlar */}
                    <div className="flex items-center gap-4 md:hidden text-slate-800">
                        {isHomePage && (
                            <>
                                <Link to="/login"><User size={24} strokeWidth={1.5} /></Link>
                                <button><Search size={24} strokeWidth={1.5} /></button>
                                <Link to="/cart"><ShoppingCart size={24} strokeWidth={1.5} /></Link>
                            </>
                        )}
                        <button onClick={toggleMenu} className="focus:outline-none hover:text-sky-500">
                            <Menu size={24} strokeWidth={1.5} className="mt-1" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobil Menü (Home & Shop) */}
            <div className={`${isMenuOpen ? 'flex' : 'hidden'} flex-col items-center py-12 space-y-8 md:hidden bg-white border-t border-gray-100 transition-all duration-300 ease-in-out`}>
                <nav className="flex flex-col items-center gap-8 text-3xl font-normal text-gray-500">
                    <Link to="/" onClick={toggleMenu} className="hover:text-slate-800">Home</Link>
                    <Link to="/shop" onClick={toggleMenu} className="hover:text-slate-800">Shop</Link>
                    <Link to="/about" onClick={toggleMenu} className="hover:text-slate-800">About</Link>
                    <Link to="/blog" onClick={toggleMenu} className="hover:text-slate-800">Blog</Link>
                    <Link to="/contact" onClick={toggleMenu} className="hover:text-slate-800">Contact</Link>
                    <Link to="/pages" onClick={toggleMenu} className="hover:text-slate-800">Pages</Link>
                </nav>
                
                {isShopPage && (
                    <div className="flex flex-col items-center gap-6 mt-8 text-sky-500 font-bold text-xl">
                        <Link to="/login" onClick={toggleMenu} className="flex items-center gap-2"><User size={24} /> Login / Register</Link>
                        <button className="flex items-center gap-2"><Search size={24} /></button>
                        <Link to="/cart" onClick={toggleMenu} className="flex items-center gap-2"><ShoppingCart size={24} /> 1</Link>
                        <Link to="/wishlist" onClick={toggleMenu} className="flex items-center gap-2"><Heart size={24} /> 1</Link>
                    </div>
                )}
            </div>
        </header>
    </div>
  );
};

export default Header;