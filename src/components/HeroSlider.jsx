import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const sliderItems = [
    { id: 1, title: 'GROCERIES DELIVERY', description: 'We know how large objects will act, but things on a small scale.', imageUrl: 'https://i.imgur.com/3pytQv6.jpeg', buttonText: 'Start Now', showButton: true },
    { id: 2, title: 'FRESH VEGETABLES', description: 'Get the freshest vegetables delivered to your doorstep daily.', imageUrl: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80', buttonText: '', showButton: false },
];

const HeroSlider = () => {
    return (
        <div className="relative w-full py-12 px-2 md:px-0">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={0}
                slidesPerView={1}
                navigation={true}
                pagination={{ clickable: true }}
                loop={true}
                autoplay={{ delay: 6000, disableOnInteraction: false }}
                className="w-full h-[600px] md:h-[700px] rounded-xl overflow-hidden shadow-2xl"
            >
                {sliderItems.map((item) => (
                    <SwiperSlide key={item.id}>
                        <div className="relative w-full h-full">
                            <img src={item.imageUrl} alt={item.title} className="absolute inset-0 w-full h-full object-cover" />
                            <div className={`absolute inset-0 ${item.id === 1 ? 'bg-red-800/30' : 'bg-black/30'}`}></div>
                            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 sm:px-12">
                                <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-4 drop-shadow-lg">{item.title}</h2>
                                <p className="text-lg sm:text-2xl font-medium mb-8 max-w-2xl drop-shadow-md">{item.description}</p>
                                {item.showButton && (<button className="px-8 py-4 bg-sky-500 text-white font-bold text-lg rounded-lg hover:bg-sky-600 transition duration-300 shadow-xl transform hover:scale-105">{item.buttonText}</button>)}
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default HeroSlider;