// src/components/team/TeamMembers.js

import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const teamMembers = [
    { id: 1, img: 'https://i.imgur.com/oI6ZtLy.jpeg', name: 'Username', profession: 'Profession' },
    { id: 2, img: 'https://i.imgur.com/NnJnVB9.jpeg', name: 'Username', profession: 'Profession' },
    { id: 3, img: 'https://i.imgur.com/9YmU2pQ.jpeg', name: 'Username', profession: 'Profession' },
    { id: 4, img: 'https://i.imgur.com/67ur2am.jpeg', name: 'Username', profession: 'Profession' },
    { id: 5, img: 'https://i.imgur.com/QNMbt29.jpeg', name: 'Username', profession: 'Profession' },
    { id: 6, img: 'https://i.imgur.com/8EO4gyl.jpeg', name: 'Username', profession: 'Profession' },
    { id: 7, img: 'https://i.imgur.com/3R4eXFW.jpeg', name: 'Username', profession: 'Profession' },
    { id: 8, img: 'https://i.imgur.com/HQ0ysUI.jpeg', name: 'Username', profession: 'Profession' },
    { id: 9, img: 'https://i.imgur.com/8yXWIvF.jpeg', name: 'Username', profession: 'Profession' },
];

const TeamMembers = () => {
    return (
        <section className="bg-white py-24">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                
                {/* --- BAŞLIK --- */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-slate-800 tracking-tight">
                        Meet Our Team
                    </h2>
                </div>

                {/* --- GRID --- */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {teamMembers.map((member) => (
                        <div key={member.id} className="flex flex-col items-center text-center">
                            
                            {/* Görsel */}
                            <div className="w-full h-[300px] overflow-hidden mb-6">
                                <img 
                                    src={member.img} 
                                    alt={member.name} 
                                    className="w-full h-full object-cover" 
                                />
                            </div>

                            {/* İsim ve Unvan */}
                            <h5 className="text-base font-bold text-slate-800 mb-2">
                                {member.name}
                            </h5>
                            <h6 className="text-sm font-bold text-gray-500 mb-4">
                                {member.profession}
                            </h6>

                            {/* Sosyal Medya İkonları */}
                            <div className="flex items-center gap-5 text-xl">
                                <a href="#" className="text-[#1877F2] hover:opacity-80 transition-opacity"><FaFacebook /></a>
                                <a href="#" className="text-[#E4405F] hover:opacity-80 transition-opacity"><FaInstagram /></a>
                                <a href="#" className="text-[#1DA1F2] hover:opacity-80 transition-opacity"><FaTwitter /></a>
                            </div>

                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default TeamMembers;