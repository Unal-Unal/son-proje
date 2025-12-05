// src/components/team/TeamCTA.js

import React from 'react';
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

const TeamCTA = () => {
    return (
        <section className="bg-white py-24 text-center">
            <div className="max-w-2xl mx-auto px-4">
                
                {/* Başlık */}
                <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6 leading-tight">
                    Start your 14 days free trial
                </h2>
                
                {/* Açıklama */}
                <p className="text-sm md:text-base text-gray-500 mb-10 max-w-md mx-auto leading-relaxed">
                    Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent.
                </p>
                
                {/* Buton */}
                <button className="bg-sky-500 hover:bg-sky-600 text-white text-sm font-bold py-4 px-10 rounded-md transition-colors mb-10">
                    Try it free now
                </button>
                
                {/* Sosyal Medya İkonları */}
                <div className="flex justify-center items-center gap-8 text-3xl text-sky-500">
                    <a href="#" className="hover:text-sky-600 transition-colors"><FaTwitter /></a>
                    <a href="#" className="hover:text-sky-600 transition-colors"><FaFacebook /></a>
                    <a href="#" className="hover:text-sky-600 transition-colors"><FaInstagram /></a>
                    <a href="#" className="hover:text-sky-600 transition-colors"><FaLinkedin /></a>
                </div>

            </div>
        </section>
    );
};

export default TeamCTA;