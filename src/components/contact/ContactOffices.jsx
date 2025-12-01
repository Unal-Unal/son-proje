// src/components/contact/ContactOffices.js

import React from 'react';
// 👇 Hem Mail hem Send ikonlarını import ediyoruz
import { Phone, MapPin, Mail, Send } from 'lucide-react';

const ContactOffices = () => {
    return (
        <section className="bg-[#FAFAFA] lg:bg-white py-24">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                
                {/* --- BAŞLIK KISMI --- */}
                <div className="text-center mb-20">
                    <h6 className="text-sm font-bold text-slate-800 uppercase tracking-wide mb-4">
                        VISIT OUR OFFICE
                    </h6>
                    <h2 className="text-4xl font-bold text-slate-800 max-w-2xl mx-auto leading-tight">
                        We help small businesses <br /> with big ideas
                    </h2>
                </div>

                {/* --- KARTLAR GRID --- */}
                <div className="flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-0">
                    
                    {/* 1. KART (Telefon) */}
                    <div className="bg-white p-10 flex flex-col items-center text-center gap-4 shadow-sm w-full max-w-[330px] h-[400px]">
                        <div className="text-sky-500 mb-2">
                            <Phone size={72} strokeWidth={1} />
                        </div>
                        <div className="text-sm font-bold text-slate-800">
                            <p>georgia.young@example.com</p>
                            <p>georgia.young@ple.com</p>
                        </div>
                        <div className="font-bold text-slate-800 mt-2">
                            Get Support
                        </div>
                        <button className="mt-2 border border-sky-500 text-sky-500 font-bold py-3 px-6 rounded-none lg:rounded-full hover:bg-sky-50 transition-colors">
                            Submit Request
                        </button>
                    </div>

                    {/* 2. KART (Konum - Koyu) */}
                    <div className="bg-[#252B42] p-10 py-16 flex flex-col items-center text-center gap-4 shadow-lg w-full max-w-[330px] lg:max-w-[340px] h-auto lg:h-[440px] z-10 lg:-my-6">
                        <div className="text-sky-500 mb-2">
                            <MapPin size={72} strokeWidth={1} />
                        </div>
                        <div className="text-sm font-bold text-white">
                            <p>georgia.young@example.com</p>
                            <p>georgia.young@ple.com</p>
                        </div>
                        <div className="font-bold text-white mt-2">
                            Get Support
                        </div>
                        <button className="mt-2 border border-sky-500 text-sky-500 font-bold py-3 px-6 rounded-none lg:rounded-full hover:bg-sky-500 hover:text-white transition-colors">
                            Submit Request
                        </button>
                    </div>

                    {/* 3. KART (Email / Send) */}
                    <div className="bg-white p-10 flex flex-col items-center text-center gap-4 shadow-sm w-full max-w-[330px] h-[400px]">
                        <div className="text-sky-500 mb-2">
                            {/* 👇 GÜNCELLEME BURADA: */}
                            
                            {/* MOBİL İÇİN: Send İkonu (lg:hidden ile desktopta gizlenir) */}
                            <Send size={72} strokeWidth={1} className="block lg:hidden" />
                            
                            {/* DESKTOP İÇİN: Mail İkonu (hidden lg:block ile sadece desktopta görünür) */}
                            <Mail size={72} strokeWidth={1} className="hidden lg:block" />
                            
                        </div>
                        <div className="text-sm font-bold text-slate-800">
                            <p>georgia.young@example.com</p>
                            <p>georgia.young@ple.com</p>
                        </div>
                        <div className="font-bold text-slate-800 mt-2">
                            Get Support
                        </div>
                        <button className="mt-2 border border-sky-500 text-sky-500 font-bold py-3 px-6 rounded-none lg:rounded-full hover:bg-sky-50 transition-colors">
                            Submit Request
                        </button>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ContactOffices;