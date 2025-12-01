import React from 'react';

// Kart içeriğini tanımlayan yeniden kullanılabilir bileşen
const CardContent = ({ titleText, headingText, imageSrc, titleColor, headingColor, buttonClasses, titleFontWeightClasses, titleWidth, titleHeight }) => (
  /* KART İÇERİĞİ */
  <div className="w-[332px] h-[232px] flex items-center overflow-hidden mx-auto">
    
    {/* SOL TARAFTAKİ İÇERİK */}
    <div className="w-1/2 h-full p-4 sm:p-6 flex flex-col justify-center items-start bg-white z-10">
        
      {/* BAŞLIK (YOUR SPACE / ENDS TODAY) */}
      {/* Boyutlar artık titleWidth ve titleHeight prop'ları ile ayarlanıyor */}
      <h5 className={`text-base ${titleColor} mb-2 ${titleWidth} ${titleHeight} ${titleFontWeightClasses || 'font-normal'}`}> 
        {titleText}
      </h5>
      
      {/* ANA BAŞLIK (UNIQUE LIFE / ELEMENTS STYLE) */}
      <h2 className={`font-bold ${headingColor} text-3xl mb-6 leading-8 tracking-normal w-[94px] h-[70px]`}>
        {/* Başlıkta <br /> kullanımı için split/map yapısı */}
        {headingText.split('<br />').map((line, index) => (
            <React.Fragment key={index}>
                {line}
                {index < headingText.split('<br />').length - 1 && <br />}
            </React.Fragment>
        ))}
      </h2>
      
      {/* BUTON - Önceki sabit boyutlarına geri döndürüldü: w-[86px] h-[16px] */}
      <button className={`bg-white text-[#252B42] font-normal ${buttonClasses} flex items-center justify-center rounded-full hover:bg-slate-100 transition-colors duration-300 text-sm tracking-wider whitespace-nowrap`}>
        Explore Items
      </button>
    </div>

    {/* SAĞ TARAFTAKİ RESİM */}
    <div className="w-1/2 h-full relative bg-white flex items-center justify-center">
        <img 
            src={imageSrc} 
            alt="Furniture or Product" 
            className="w-full h-full object-contain"
            // Görsel yüklenemediğinde hata önleyici bir yer tutucu eklemek iyi bir pratik.
            onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/166x232/CCCCCC/FFFFFF?text=Gorsel%20Yok" }}
        />
    </div>

  </div>
);


const ShopCards = () => {
  return (
    <div className="w-full bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        
        {/* Grid Yapısı - sm:justify-items-center eklenerek mobil cihazlarda öğelerin merkezlenmesi sağlandı */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-auto justify-center sm:justify-items-center">
          
          {/* KART 1: Orijinal Boyutlar (w-[81px] h-[32px]) */}
          <CardContent
                titleText="Your Space"
                headingText="Unique<br />Life"
                imageSrc="https://i.imgur.com/3dqYRsr.png"
                titleColor="text-[#737373]"
                headingColor="text-[#252B42]"
                buttonClasses="w-[86px] h-[16px] font-bold"
                titleWidth="w-[81px]" // Orijinal genişlik
                titleHeight="h-[32px]" // Orijinal yükseklik
            />

          {/* KART 2: Yeni Boyutlar (w-[100px] h-[24px]) -> Genişlik 100px yapıldı */}
          <CardContent
                titleText="Ends Today" 
                headingText="Elements Style" 
                imageSrc="https://i.imgur.com/sN6sNue.jpeg" 
                titleColor="text-[#737373]"
                headingColor="text-[#252B42]"
                buttonClasses="w-[86px] h-[16px] font-bold"
                titleFontWeightClasses="font-bold"
                titleWidth="w-[100px]" // Yeni genişlik: 100px
                titleHeight="h-[24px]" // Yeni yükseklik: 24px
            />

          {/* KART 3: Yeni Boyutlar (w-[100px] h-[24px]) -> Genişlik 100px yapıldı */}
          <CardContent
                titleText="Ends Today" 
                headingText="Elements Style" 
                imageSrc="https://i.imgur.com/LG4excZ.jpeg" 
                titleColor="text-[#737373]"
                headingColor="text-[#252B42]"
                buttonClasses="w-[86px] h-[16px] font-bold"
                titleFontWeightClasses="font-bold"
                titleWidth="w-[100px]" // Yeni genişlik: 100px
                titleHeight="h-[24px]" // Yeni yükseklik: 24px
            />

        </div>
      </div>
    </div>
  );
};

export default ShopCards;