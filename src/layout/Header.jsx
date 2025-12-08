// src/layout/Header.js

import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
// --- REDUX ---
import { useSelector, useDispatch } from 'react-redux'; // useDispatch eklendi
import { addToCart } from '../store/actions/shoppingCartActions'; // (Test amaçlı gerekebilir)
// -------------
// İkonlar
import { Menu, ShoppingCart, User, Search, Heart, Phone, Mail, ChevronDown, ArrowRight, Trash2 } from 'lucide-react'; 
import { FaInstagram, FaYoutube, FaFacebook, FaTwitter } from 'react-icons/fa';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isShopDropdownOpen, setIsShopDropdownOpen] = useState(false);
  
  // 👇 YENİ: Sepet Dropdown Kontrolü
  const [isCartDropdownOpen, setIsCartDropdownOpen] = useState(false);
  
  const location = useLocation();

  // --- REDUX VERİLERİ ---
  const user = useSelector((state) => state.client.user);
  const categories = useSelector((state) => state.product.categories);
  // 👇 YENİ: Sepet verisini çekiyoruz
  const cart = useSelector((state) => state.shoppingCart.cart);
  
  const isLoggedIn = user && user.email; 

  // Sepetteki toplam ürün sayısını hesapla
  const totalCartItems = cart.reduce((total, item) => total + item.count, 0);

  // --- KATEGORİ MANTIĞI ---
  const groupedCategories = categories.reduce((acc, cat) => {
    const gender = cat.code.charAt(0) === 'k' ? 'kadin' : 'erkek';
    acc[gender].push(cat);
    return acc;
  }, { kadin: [], erkek: [] });

  groupedCategories.kadin.sort((a, b) => b.rating - a.rating);
  groupedCategories.erkek.sort((a, b) => b.rating - a.rating);

  const getCategoryLink = (cat) => {
      const gender = cat.code.charAt(0) === 'k' ? 'kadin' : 'erkek';
      return `/shop/${gender}/${cat.title.toLowerCase()}/${cat.id}`;
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isShopPage = location.pathname === '/shop' || location.pathname.includes('/product');
  const isContactPage = location.pathname === '/contact' || location.pathname === '/team' || location.pathname === '/about';
  const isHomePage = !isShopPage && !isContactPage; 


  // ############################################################################
  // ####################  BÖLÜM 1: CONTACT PAGE HEADER  ########################
  // #################################===================########################
  if (isContactPage) {
    return (
        <div className="w-full font-sans">
            <header className="bg-white shadow-sm relative z-50">
                <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
                    
                    <div className="flex items-center md:flex-1">
                        <Link to="/">
                            <h3 className="text-2xl font-bold text-slate-800 tracking-wide mr-24">
                                Bandage
                            </h3>
                        </Link>
                        <nav className="hidden md:flex items-center gap-6 text-sm font-bold text-gray-500">
                            <Link to="/" className="hover:text-slate-900 transition-colors">Home</Link>
                            <Link to="/product" className="hover:text-slate-900 transition-colors">Product</Link>
                            <Link to="/pricing" className="hover:text-slate-900 transition-colors">Pricing</Link>
                            <Link to="/contact" className="hover:text-slate-900 transition-colors">Contact</Link>
                        </nav>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="hidden md:flex items-center gap-8">
                            {isLoggedIn ? (
                                <div className="flex items-center gap-3 animate-fade-in">
                                    <img src={user.avatar} alt={user.name} className="w-10 h-10 rounded-full object-cover border-2 border-sky-500" />
                                    <span className="text-slate-800 font-bold text-sm">{user.name}</span>
                                </div>
                            ) : (
                                <>
                                    <Link to="/login" className="text-sky-500 font-bold text-sm hover:text-sky-600 transition-colors">Login</Link>
                                    <Link to="/signup" className="bg-sky-500 hover:bg-sky-600 text-white text-sm font-bold py-3 px-6 rounded flex items-center gap-2 transition-colors">Become a member <ArrowRight size={16} /></Link>
                                </>
                            )}
                        </div>

                        <div className="flex items-center gap-4 md:hidden text-slate-800">
                            <button className="hover:text-sky-500"><Search size={24} strokeWidth={1.5} /></button>
                            <Link to="/cart" className="hover:text-sky-500"><ShoppingCart size={24} strokeWidth={1.5} /></Link>
                            <button onClick={toggleMenu} className="focus:outline-none hover:text-sky-500"><Menu size={24} strokeWidth={1.5} className="mt-1" /></button>
                        </div>
                    </div>
                </div>
                {/* Mobile Menu logic omitted for brevity as requested not to change */}
                <div className={`${isMenuOpen ? 'flex' : 'hidden'} flex-col items-center py-16 space-y-8 md:hidden bg-white border-t border-gray-100 transition-all duration-300 ease-in-out`}>
                    <nav className="flex flex-col items-center gap-8 text-3xl font-normal text-gray-500">
                        <Link to="/" onClick={toggleMenu}>Home</Link>
                        <Link to="/product" onClick={toggleMenu}>Product</Link>
                        <Link to="/pricing" onClick={toggleMenu}>Pricing</Link>
                        <Link to="/contact" onClick={toggleMenu}>Contact</Link>
                    </nav>
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
        
        {isShopPage && (
            <div className="hidden lg:block bg-[#23856D] text-white text-sm font-bold py-3 px-4">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-1 hover:text-gray-200 cursor-pointer"><Phone size={16} /> <span>(225) 555-0118</span></div>
                        <div className="flex items-center gap-1 hover:text-gray-200 cursor-pointer"><Mail size={16} /> <span>michelle.rivera@example.com</span></div>
                    </div>
                    <div className="flex-1 text-center"><span>Follow Us and get a chance to win 80% off</span></div>
                    <div className="flex items-center gap-3">
                        <span>Follow Us :</span>
                        <div className="flex items-center gap-3">
                            <a href="#"><FaInstagram size={16} /></a>
                            <a href="#"><FaYoutube size={16} /></a>
                            <a href="#"><FaFacebook size={16} /></a>
                            <a href="#"><FaTwitter size={16} /></a>
                        </div>
                    </div>
                </div>
            </div>
        )}

        <header className="bg-white shadow-sm relative z-50">
            <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
                
                <div className="flex items-center gap-12 lg:gap-24">
                    <Link to="/"><h3 className="text-2xl font-bold text-slate-800 tracking-wide">Bandage</h3></Link>

                    <nav className="hidden md:flex items-center gap-4 text-sm font-bold text-gray-500">
                        <Link to="/" className="hover:text-sky-500 transition-colors">Home</Link>
                        
                        <div className="relative group h-full flex items-center" onMouseEnter={() => setIsShopDropdownOpen(true)} onMouseLeave={() => setIsShopDropdownOpen(false)}>
                            <Link to="/shop" className="flex items-center gap-1 hover:text-sky-500 transition-colors py-4">Shop <ChevronDown size={14} /></Link>
                            {isShopDropdownOpen && (
                                <div className="absolute top-full left-0 bg-white shadow-lg border border-gray-100 py-6 px-8 min-w-[300px] z-50 flex gap-12 animate-fade-in cursor-default">
                                    <div className="flex flex-col min-w-[100px]">
                                        <h4 className="text-slate-800 font-bold mb-4 border-b pb-2 text-base">Kadın</h4>
                                        <ul className="space-y-3">{groupedCategories.kadin.map(cat => (<li key={cat.id}><Link to={getCategoryLink(cat)} className="text-gray-500 hover:text-sky-500 font-normal block transition-colors" onClick={() => setIsShopDropdownOpen(false)}>{cat.title}</Link></li>))}</ul>
                                    </div>
                                    <div className="flex flex-col min-w-[100px]">
                                        <h4 className="text-slate-800 font-bold mb-4 border-b pb-2 text-base">Erkek</h4>
                                        <ul className="space-y-3">{groupedCategories.erkek.map(cat => (<li key={cat.id}><Link to={getCategoryLink(cat)} className="text-gray-500 hover:text-sky-500 font-normal block transition-colors" onClick={() => setIsShopDropdownOpen(false)}>{cat.title}</Link></li>))}</ul>
                                    </div>
                                </div>
                            )}
                        </div>

                        <Link to="/about" className="hover:text-sky-500 transition-colors">About</Link>
                        <Link to="/blog" className="hover:text-sky-500 transition-colors">Blog</Link>
                        <Link to="/contact" className="hover:text-sky-500 transition-colors">Contact</Link>
                        <Link to="/pages" className="hover:text-sky-500 transition-colors">Pages</Link>
                    </nav>
                </div>

                <div className="flex items-center justify-end gap-6">
                    <div className="hidden md:flex items-center gap-6 text-sky-500 font-bold text-sm">
                        
                        <div className="flex items-center">
                            {isLoggedIn ? (
                                <div className="flex items-center gap-2 cursor-pointer hover:text-sky-700 transition-colors">
                                    <img src={user.avatar} alt={user.name} className="w-8 h-8 rounded-full object-cover" />
                                    <span>{user.name}</span>
                                </div>
                            ) : (
                                <Link to="/login" className="flex items-center gap-1 hover:text-sky-600 transition-colors">
                                    <User size={16} className="mr-1 text-sky-500" /> Login / Register
                                </Link>
                            )}
                        </div>
                        
                        <div className="flex items-center gap-4 relative">
                            <button className="hover:text-sky-600 transition-colors"><Search size={16} strokeWidth={2} /></button>
                            
                            {/* --- SEPET DROPDOWN BAŞLANGIÇ --- */}
                            <div className="relative">
                                {/* Sepet İkonu */}
                                <button 
                                    className="flex items-center gap-1 hover:text-sky-600 transition-colors"
                                    onClick={() => setIsCartDropdownOpen(!isCartDropdownOpen)}
                                >
                                    <ShoppingCart size={16} strokeWidth={2} /> 
                                    <span>{totalCartItems}</span>
                                </button>

                                {/* Dropdown Menü (Fotoğraftaki Tasarım) */}
                                {isCartDropdownOpen && (
                                    <div className="absolute top-full right-0 mt-3 w-80 bg-white shadow-xl border border-gray-200 rounded-lg z-50 animate-fade-in font-sans">
                                        
                                        {/* Header */}
                                        <div className="p-4 border-b border-gray-100">
                                            <h4 className="text-slate-800 font-bold text-sm">
                                                Sepetim ({totalCartItems} Ürün)
                                            </h4>
                                        </div>

                                        {/* Liste */}
                                        <div className="max-h-80 overflow-y-auto">
                                            {cart.length === 0 ? (
                                                <div className="p-6 text-center text-gray-500 text-sm">
                                                    Sepetiniz boş.
                                                </div>
                                            ) : (
                                                cart.map((item, index) => (
                                                    <div key={index} className="flex gap-4 p-4 border-b border-gray-50 hover:bg-gray-50 transition-colors">
                                                        {/* Ürün Resmi */}
                                                        <div className="w-16 h-20 shrink-0 rounded-md overflow-hidden border border-gray-200">
                                                            <img 
                                                                src={item.product.images?.[0]?.url || "https://via.placeholder.com/100"} 
                                                                alt={item.product.name} 
                                                                className="w-full h-full object-cover"
                                                            />
                                                        </div>
                                                        {/* Bilgiler */}
                                                        <div className="flex-1 flex flex-col justify-between">
                                                            <h5 className="text-slate-800 font-bold text-sm line-clamp-2 leading-tight">
                                                                {item.product.name}
                                                            </h5>
                                                            <div className="flex items-center justify-between mt-2">
                                                                <span className="text-xs text-gray-500">Adet: {item.count}</span>
                                                                <span className="text-sky-500 font-bold text-sm">
                                                                    ${(item.product.price * item.count).toFixed(2)}
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))
                                            )}
                                        </div>

                                        {/* Footer / Butonlar */}
                                        <div className="p-4 flex gap-3">
                                            <Link 
                                                to="/cart" 
                                                onClick={() => setIsCartDropdownOpen(false)}
                                                className="flex-1 bg-gray-100 hover:bg-gray-200 text-slate-800 text-center py-3 rounded text-sm font-bold transition-colors"
                                            >
                                                Sepete Git
                                            </Link>
                                            <button 
                                                className="flex-1 bg-orange-500 hover:bg-orange-600 text-white text-center py-3 rounded text-sm font-bold transition-colors"
                                            >
                                                Siparişi Tamamla
                                            </button>
                                        </div>

                                    </div>
                                )}
                            </div>
                            {/* --- SEPET DROPDOWN BİTİŞ --- */}

                            <Link to="/wishlist" className="flex items-center gap-1 hover:text-sky-600 transition-colors">
                                <Heart size={16} strokeWidth={2} /> <span>1</span>
                            </Link>
                        </div>
                    </div>

                    <div className="flex items-center gap-4 md:hidden text-slate-800">
                        {isHomePage && (
                            <>
                                {isLoggedIn ? (
                                    <Link to="/profile"><img src={user.avatar} className="w-6 h-6 rounded-full" /></Link>
                                ) : (
                                    <Link to="/login"><User size={24} strokeWidth={1.5} /></Link>
                                )}
                                <button><Search size={24} strokeWidth={1.5} /></button>
                                <Link to="/cart"><ShoppingCart size={24} strokeWidth={1.5} /></Link>
                            </>
                        )}
                        <button onClick={toggleMenu} className="focus:outline-none hover:text-sky-500"><Menu size={24} strokeWidth={1.5} className="mt-1" /></button>
                    </div>
                </div>
            </div>

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
                        {isLoggedIn ? (
                             <div className="flex items-center gap-2"><img src={user.avatar} className="w-8 h-8 rounded-full" /><span>{user.name}</span></div>
                        ) : (
                            <Link to="/login" onClick={toggleMenu} className="flex items-center gap-2"><User size={24} /> Login / Register</Link>
                        )}
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