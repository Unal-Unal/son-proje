// src/pages/TeamPage.js

import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

// Layout
import Header from '../layout/Header';
import Footer from '../layout/Footer';

// Components
import TeamGallery from '../components/team/TeamGallery';
import TeamMembers from '../components/team/TeamMembers';
import TeamCTA from '../components/team/TeamCTA'; // 👈 YENİ IMPORT

const TeamPage = () => {
    return (
        <>
            <Header />
            
            <main className="bg-white font-sans">
                
                {/* 1. HERO SECTION */}
                <div className="block lg:hidden py-12 text-center px-4">
                    <div className="flex flex-col items-center gap-4">
                        <h5 className="text-base font-bold text-gray-500 uppercase tracking-wide">WHAT WE DO</h5>
                        <h1 className="text-4xl font-bold text-slate-800 leading-tight max-w-xs mx-auto">Innovation tailored for you</h1>
                        <div className="flex items-center gap-2 pt-4">
                            <Link to="/" className="text-sm font-bold text-slate-800 hover:text-slate-900">Home</Link>
                            <ChevronRight size={20} className="text-gray-400" />
                            <span className="text-sm font-bold text-gray-400">Team</span>
                        </div>
                    </div>
                </div>

                <div className="hidden lg:block py-20 text-center">
                    <div className="max-w-7xl mx-auto px-8 flex flex-col items-center gap-4">
                        <h5 className="text-base font-bold text-gray-500 uppercase tracking-wide">WHAT WE DO</h5>
                        <h1 className="text-6xl font-bold text-slate-800 leading-tight">Innovation tailored for you</h1>
                        <div className="flex items-center gap-2 pt-4">
                            <Link to="/" className="text-sm font-bold text-slate-800 hover:text-slate-900">Home</Link>
                            <ChevronRight size={20} className="text-gray-400" />
                            <span className="text-sm font-bold text-gray-400">Team</span>
                        </div>
                    </div>
                </div>


                {/* 2. TEAM GALLERY */}
                <div className="mb-0"> 
                    <TeamGallery />
                </div>

                {/* 3. TEAM MEMBERS */}
                <TeamMembers />

                {/* 👇 4. TEAM CTA (YENİ BÖLÜM) */}
                <TeamCTA />

            </main>

            <Footer />
        </>
    );
};

export default TeamPage;