// src/pages/ContactPage.js

import React from 'react';
import { Twitter, Facebook, Instagram, Linkedin } from 'lucide-react';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import ContactOffices from '../components/contact/ContactOffices';
import ContactCta from '../components/contact/ContactCallToAction';

const ContactPage = () => {
  return (
    <>
      <Header />

      <main className="bg-white font-sans overflow-hidden">

        {/* ============================================================
            1. MOBILE VIEW (GÜNCELLENDİ)
           ============================================================ */}
        <div className="block lg:hidden max-w-7xl mx-auto px-4 py-12">
          
          {/* İçerik */}
          <div className="flex flex-col items-center text-center space-y-8 mb-8 z-10 relative">
            <h5 className="text-base font-bold text-slate-800 uppercase tracking-wide">
              CONTACT US
            </h5>
            <h1 className="text-4xl font-bold text-slate-800 leading-tight">
              Get in touch <br /> today!
            </h1>
            <p className="text-xl text-gray-500 max-w-xs font-medium leading-relaxed">
              We know how large objects will act, but things on a small scale
            </p>

            <div className="flex flex-col gap-1 text-2xl font-bold text-slate-800">
              <span>Phone : +451 215 215</span>
              <span>Fax : +451 215 215</span>
            </div>

            <div className="flex items-center gap-8 text-slate-800 pt-2">
              <Twitter size={30} />
              <Facebook size={30} />
              <Instagram size={30} />
              <Linkedin size={30} />
            </div>
          </div>

          {/* GÖRSEL VE ARKA PLAN (MOBİL) */}
          {/* overflow-visible yaptık ki resim taşarsa kesilmesin (container sınırında) */}
          <div className="relative flex justify-center items-center min-h-[500px] overflow-visible">
            
            {/* PEMBE DAİRE (250px - Küçük bırakıldı) */}
            <div className="absolute w-[250px] h-[250px] bg-[#FFE9EA] rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0"></div>
            
            {/* DEKORATİF NOKTALAR */}
            <div className="absolute w-2 h-2 bg-[#977DF4] rounded-full opacity-50 top-[30%] right-6 z-0"></div>
            <div className="absolute w-12 h-12 bg-[#FFE9EA] rounded-full top-[15%] left-0 opacity-50 z-0"></div>
            <div className="absolute w-3 h-3 bg-[#977DF4] rounded-full bottom-[20%] left-6 opacity-50 z-0"></div>
            <div className="absolute w-4 h-4 bg-[#FFE9EA] rounded-full bottom-[30%] right-4 opacity-50 z-0"></div>

            {/* ANA RESİM */}
            {/* 👇 GÜNCELLEME: w-[140%] ve max-w-none ile görseli zorla büyüttük */}
            <img
              src="https://i.imgur.com/Toz5rdP.png"
              alt="Family Shopping"
              className="relative z-10 w-[140%] max-w-none h-auto object-contain"
            />
          </div>
        </div>

        {/* ============================================================
            2. DESKTOP VIEW (AYNI KALDI - DOKUNULMADI)
           ============================================================ */}
        <div className="hidden lg:block w-full py-28">
          <div className="max-w-7xl mx-auto flex items-start relative px-8">

            {/* LEFT CONTENT */}
            <div className="w-1/2 flex flex-col gap-6 z-30">
              <h5 className="text-base font-bold text-slate-800 uppercase tracking-wide">
                CONTACT US
              </h5>

              <h1 className="text-6xl font-bold text-slate-800 leading-tight">
                Get in touch <br /> today!
              </h1>

              <p className="text-xl text-gray-500 max-w-sm font-medium leading-relaxed">
                We know how large objects will act, but things on a small scale
              </p>

              <div className="flex flex-col gap-1 text-2xl font-bold text-slate-800">
                <span>Phone : +451 215 215</span>
                <span>Fax : +451 215 215</span>
              </div>

              <div className="flex items-center gap-8 text-slate-800 pt-2">
                <Twitter size={28} />
                <Facebook size={28} />
                <Instagram size={28} />
                <Linkedin size={28} />
              </div>
            </div>

            {/* RIGHT IMAGE AREA */}
            <div className="w-1/2 relative max-h-[400px] flex justify-center items-center overflow-visible">

              {/* SMALLER BACKGROUND CIRCLE */}
              <div className="
                  absolute 
                  w-[420px] h-[420px] 
                  bg-[#FFE9EA] 
                  rounded-full 
                  z-20
                  top-1/3 -translate-y-1/2
                  left-1/2 -translate-x-[15%]
                ">
              </div>

              {/* DECOR DOTS */}
              <div className="absolute w-4 h-4 bg-[#977DF4] rounded-full opacity-50 bottom-24 left-28 z-10"></div>
              <div className="absolute w-4 h-4 bg-[#977DF4] rounded-full opacity-50 top-0 right-10 z-30"></div>
              <div className="absolute w-14 h-14 bg-[#FFE9EA] rounded-full opacity-50 top-0 left-40 z-10"></div>

              {/* MAIN IMAGE */}
              <img
                src="https://i.imgur.com/Toz5rdP.png"
                alt="Family Shopping"
                className="relative z-20 max-w-none w-[160%] h-auto object-contain translate-x-40"
              />
            </div>

          </div>
        </div>
              
             <ContactOffices />

             <ContactCta />

      </main>

      <Footer />
    </>
  );
};

export default ContactPage;