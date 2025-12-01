import React from 'react';

const clientLogos = [
    { id: 1, name: "Hooli", url: "https://upload.wikimedia.org/wikipedia/commons/7/77/Font_Awesome_5_brands_hooli.svg" },
    { id: 2, name: "Lyft", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Lyft_logo.svg/2560px-Lyft_logo.svg.png" },
    { id: 3, name: "Pied Piper", url: "https://upload.wikimedia.org/wikipedia/commons/a/ad/Font_Awesome_5_brands_pied-piper-pp.svg" },
    { id: 4, name: "Stripe", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Stripe_Logo%2C_revised_2016.svg/2560px-Stripe_Logo%2C_revised_2016.svg.png" },
    { id: 5, name: "AWS", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/2560px-Amazon_Web_Services_Logo.svg.png" },
    { id: 6, name: "Reddit", url: "https://upload.wikimedia.org/wikipedia/commons/b/b4/Reddit_logo.svg" },
];

const ClientsSection = () => {
    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 lg:px-0">
                <div className="flex flex-col items-center gap-12 lg:flex-row lg:justify-between lg:gap-8">
                    {clientLogos.map((logo) => (
                        <div key={logo.id} className="flex justify-center w-full lg:w-auto px-4">
                            <img 
                                src={logo.url} 
                                alt={logo.name}
                                className="h-16 lg:h-20 w-auto object-contain grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300 cursor-pointer"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ClientsSection;