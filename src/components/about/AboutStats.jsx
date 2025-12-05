// src/components/about/AboutStats.js

import React from 'react';

const stats = [
    { id: 1, number: '15K', label: 'Happy Customers' },
    { id: 2, number: '150K', label: 'Monthly Visitors' },
    { id: 3, number: '15', label: 'Countries Worldwide' },
    { id: 4, number: '100+', label: 'Top Partners' },
];

const AboutStats = () => {
    return (
        <section className="bg-white py-32 md:py-24">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                
                {/* Sadece İstatistikler Grid Yapısı */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 justify-items-center">
                    {stats.map((stat) => (
                        <div key={stat.id} className="flex flex-col items-center text-center">
                            <h1 className="text-5xl md:text-6xl font-bold text-slate-800 mb-2">
                                {stat.number}
                            </h1>
                            <h5 className="text-base font-bold text-gray-500">
                                {stat.label}
                            </h5>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default AboutStats;