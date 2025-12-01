// src/layout/Footer.js

import React from 'react';
import { Link, useLocation } from 'react-router-dom';
// İkonlar
import { Phone, MapPin, Mail } from 'lucide-react';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  const location = useLocation();
  
  // Hangi sayfadayız kontrolü
const isShopPage = location.pathname === '/shop' || location.pathname.includes('/product') || location.pathname === '/contact';

  // ====================================================================
  // 🛒 DURUM 1: SHOP SAYFASI İÇİN FOOTER (BEYAZ TEMA)
  // ====================================================================
  if (isShopPage) {
    return (
      <footer className="w-full bg-white font-sans">
        <div className="max-w-7xl mx-auto px-6 md:px-8">

          {/* 1. Logo ve Sosyal Medya */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center py-10 border-b border-gray-200 gap-6">
            <h3 className="text-2xl font-bold text-slate-800 tracking-wide">Bandage</h3>
            <div className="flex items-center gap-5">
              <a href="#" className="text-sky-500 hover:opacity-80 transition-opacity"><FaFacebook size={24} /></a>
              <a href="#" className="text-sky-500 hover:opacity-80 transition-opacity"><FaInstagram size={24} /></a>
              <a href="#" className="text-sky-500 hover:opacity-80 transition-opacity"><FaTwitter size={24} /></a>
            </div>
          </div>

          {/* 2. Linkler ve Abonelik Formu */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 py-12">
            {/* Kolonlar */}
            <div className="flex flex-col gap-4">
              <h5 className="text-base font-bold text-slate-800">Company Info</h5>
              <nav className="flex flex-col gap-3 text-sm font-bold text-gray-500">
                <Link to="/about" className="hover:text-slate-800">About Us</Link>
                <Link to="/carrier" className="hover:text-slate-800">Carrier</Link>
                <Link to="/hiring" className="hover:text-slate-800">We are hiring</Link>
                <Link to="/blog" className="hover:text-slate-800">Blog</Link>
              </nav>
            </div>
            <div className="flex flex-col gap-4">
              <h5 className="text-base font-bold text-slate-800">Legal</h5>
              <nav className="flex flex-col gap-3 text-sm font-bold text-gray-500">
                <Link to="/about" className="hover:text-slate-800">About Us</Link>
                <Link to="/carrier" className="hover:text-slate-800">Carrier</Link>
                <Link to="/hiring" className="hover:text-slate-800">We are hiring</Link>
                <Link to="/blog" className="hover:text-slate-800">Blog</Link>
              </nav>
            </div>
            <div className="flex flex-col gap-4">
              <h5 className="text-base font-bold text-slate-800">Features</h5>
              <nav className="flex flex-col gap-3 text-sm font-bold text-gray-500">
                <Link to="/marketing" className="hover:text-slate-800">Business Marketing</Link>
                <Link to="/analytic" className="hover:text-slate-800">User Analytic</Link>
                <Link to="/livechat" className="hover:text-slate-800">Live Chat</Link>
                <Link to="/support" className="hover:text-slate-800">Unlimited Support</Link>
              </nav>
            </div>
            <div className="flex flex-col gap-4">
              <h5 className="text-base font-bold text-slate-800">Resources</h5>
              <nav className="flex flex-col gap-3 text-sm font-bold text-gray-500">
                <Link to="/ios-android" className="hover:text-slate-800">IOS & Android</Link>
                <Link to="/demo" className="hover:text-slate-800">Watch a Demo</Link>
                <Link to="/customers" className="hover:text-slate-800">Customers</Link>
                <Link to="/api" className="hover:text-slate-800">API</Link>
              </nav>
            </div>
            {/* Abonelik Formu */}
            <div className="flex flex-col gap-4 md:col-span-1">
              <h5 className="text-base font-bold text-slate-800">Get In Touch</h5>
              <div className="flex flex-col gap-2">
                  <div className="flex">
                      <input type="email" placeholder="Your Email" className="bg-[#F9F9F9] border border-[#E6E6E6] text-sm px-4 py-3 rounded-l-md focus:outline-none focus:border-sky-500 w-full text-gray-500 font-normal"/>
                      <button className="bg-sky-500 hover:bg-sky-600 text-white text-sm font-normal px-6 py-3 rounded-r-md transition-colors">Subscribe</button>
                  </div>
                  <p className="text-xs text-gray-500 font-normal">Lore imp sum dolor Amit</p>
              </div>
            </div>
          </div>
        </div>

        {/* 3. Copyright */}
        <div className="bg-[#FAFAFA] py-6">
            <div className="max-w-7xl mx-auto px-6 md:px-8">
              <div className="text-sm font-bold text-gray-500 text-center md:text-left">
                  {/* 👇 GÜNCELLENDİ: Finland */}
                  Made With Love By Finland All Right Reserved
              </div>
            </div>
        </div>
      </footer>
    );
  }

  // ====================================================================
  // 🏠 DURUM 2: HOME SAYFASI VE DİĞERLERİ İÇİN FOOTER (KOYU TEMA)
  // ====================================================================
  return (
    <footer className="w-full bg-[#252B42] text-white pt-16 pb-16 font-sans">
      <div className="max-w-7xl mx-auto px-6 md:px-8">

        {/* 1. ÜST CTA */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-8 pb-12 border-b border-slate-700/30">
          <div className="flex flex-col gap-4 w-full max-w-[300px] mx-auto md:max-w-none md:mx-0 md:w-auto text-left">
            <h3 className="text-2xl font-bold tracking-wide leading-tight">Consulting Agency For Your Business</h3>
            <p className="text-sm text-gray-300">the quick fox jumps over the lazy dog</p>
          </div>
          <div className="w-full max-w-[300px] mx-auto md:max-w-none md:mx-0 md:w-auto text-left">
            <Link to="/contact" className="inline-block bg-sky-500 hover:bg-sky-600 text-white font-bold py-3 px-8 rounded transition-colors">Contact Us</Link>
          </div>
        </div>

        {/* 2. LİNKLER (GRID) */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 py-12">
          <div className="flex flex-col gap-4 w-full max-w-[300px] mx-auto md:mx-0 md:max-w-none">
            <h5 className="text-lg font-bold">Company Info</h5>
            <nav className="flex flex-col gap-3 text-sm font-bold text-gray-300">
              <Link to="/about" className="hover:text-sky-500">About Us</Link>
              <Link to="/carrier" className="hover:text-sky-500">Carrier</Link>
              <Link to="/hiring" className="hover:text-sky-500">We are hiring</Link>
              <Link to="/blog" className="hover:text-sky-500">Blog</Link>
            </nav>
          </div>
          <div className="flex flex-col gap-4 w-full max-w-[300px] mx-auto md:mx-0 md:max-w-none">
            <h5 className="text-lg font-bold">Legal</h5>
            <nav className="flex flex-col gap-3 text-sm font-bold text-gray-300">
              <Link to="/about" className="hover:text-sky-500">About Us</Link>
              <Link to="/carrier" className="hover:text-sky-500">Carrier</Link>
              <Link to="/hiring" className="hover:text-sky-500">We are hiring</Link>
              <Link to="/blog" className="hover:text-sky-500">Blog</Link>
            </nav>
          </div>
          <div className="flex flex-col gap-4 w-full max-w-[300px] mx-auto md:mx-0 md:max-w-none">
            <h5 className="text-lg font-bold">Features</h5>
            <nav className="flex flex-col gap-3 text-sm font-bold text-gray-300">
              <Link to="/marketing" className="hover:text-sky-500">Business Marketing</Link>
              <Link to="/analytic" className="hover:text-sky-500">User Analytic</Link>
              <Link to="/livechat" className="hover:text-sky-500">Live Chat</Link>
              <Link to="/support" className="hover:text-sky-500">Unlimited Support</Link>
            </nav>
          </div>
          <div className="flex flex-col gap-4 w-full max-w-[300px] mx-auto md:mx-0 md:max-w-none">
            <h5 className="text-lg font-bold">Resources</h5>
            <nav className="flex flex-col gap-3 text-sm font-bold text-gray-300">
              <Link to="/ios-android" className="hover:text-sky-500">IOS & Android</Link>
              <Link to="/demo" className="hover:text-sky-500">Watch a Demo</Link>
              <Link to="/customers" className="hover:text-sky-500">Customers</Link>
              <Link to="/api" className="hover:text-sky-500">API</Link>
            </nav>
          </div>
          <div className="flex flex-col gap-4 w-full max-w-[300px] mx-auto md:mx-0 md:max-w-none">
            <h5 className="text-lg font-bold">Get In Touch</h5>
            <div className="flex flex-col gap-3 text-sm font-bold text-gray-300">
              <div className="flex items-center gap-2"><Phone size={24} className="text-sky-500 shrink-0" /><span>(480) 555-0103</span></div>
              <div className="flex items-center gap-2"><MapPin size={28} className="text-sky-500 shrink-0" /><span>4517 Washington Ave.</span></div>
              <div className="flex items-center gap-2"><Mail size={24} className="text-sky-500 shrink-0" /><span>debra.holt@example.com</span></div>
            </div>
          </div>
        </div>

        {/* 3. Copyright & Social */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center py-8 gap-6 w-full max-w-[300px] mx-auto md:max-w-none">
          <div className="text-sm font-bold text-gray-300 text-left">
            {/* 👇 GÜNCELLENDİ: Finland */}
            Made With Love By Finland<br className="md:hidden" /> All Right Reserved
          </div>
          <div className="flex items-center gap-5">
            <a href="#" className="text-[#1877F2] hover:opacity-80 transition-opacity"><FaFacebook size={24} /></a>
            <a href="#" className="text-[#E4405F] hover:opacity-80 transition-opacity"><FaInstagram size={24} /></a>
            <a href="#" className="text-sky-500 hover:opacity-80 transition-opacity"><FaTwitter size={24} /></a>
            <a href="#" className="text-[#FF0000] hover:opacity-80 transition-opacity"><FaYoutube size={24} /></a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;