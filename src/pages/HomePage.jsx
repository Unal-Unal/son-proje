// src/pages/HomePage.js

import React from 'react';

// Layout
import Header from '../layout/Header';
import PageContent from '../layout/PageContent';
import Footer from '../layout/Footer';

// Global Components
import ProductCard from '../components/ProductCard';
import ShopCards from '../components/ShopCards';

// Page Specific Components
import HeroSlider from '../components/HeroSlider';
import CategoryProductSection from '../components/CategoryProductSection';
import ContentSection from '../components/ContentSection';
import ClientsSection from '../components/ClientsSection';
import BlogSection from '../components/BlogSection';

// --- DATA ---

// Section 1: Sarı Bannerlı Bestsellers
const bestsellerProducts = [
    { id: 101, name: "Caramel Cone", category: "Graphic Design", department: "English Department", price: 16.48, discountedPrice: 6.48, imageUrl: 'https://i.imgur.com/iEPmDu9.png' },
    { id: 102, name: "Fresh Apples", category: "Graphic Design", department: "English Department", price: 16.48, discountedPrice: 6.48, imageUrl: 'https://i.imgur.com/sN6sNue.jpeg' },
    { id: 103, name: "Grilled Ham", category: "Graphic Design", department: "English Department", price: 16.48, discountedPrice: 6.48, imageUrl: 'https://i.imgur.com/LG4excZ.jpeg' },
    { id: 104, name: "Caramel Cone 2", category: "Graphic Design", department: "English Department", price: 16.48, discountedPrice: 6.48, imageUrl: 'https://i.imgur.com/iEPmDu9.png' },
    { id: 105, name: "Fresh Apples 2", category: "Graphic Design", department: "English Department", price: 16.48, discountedPrice: 6.48, imageUrl: 'https://i.imgur.com/sN6sNue.jpeg' },
    { id: 106, name: "Grilled Ham 2", category: "Graphic Design", department: "English Department", price: 16.48, discountedPrice: 6.48, imageUrl: 'https://i.imgur.com/LG4excZ.jpeg' },
];

// Section 3: Mavi Bannerlı Featured
const featuredProducts = [
    { id: 201, name: "Pink Donut", category: "Graphic Design", department: "English Department", price: 16.48, discountedPrice: 6.48, imageUrl: 'https://i.imgur.com/iEPmDu9.png' },
    { id: 202, name: "Green Apple", category: "Graphic Design", department: "English Department", price: 16.48, discountedPrice: 6.48, imageUrl: 'https://i.imgur.com/sN6sNue.jpeg' },
    { id: 203, name: "Roasted Chicken", category: "Graphic Design", department: "English Department", price: 16.48, discountedPrice: 6.48, imageUrl: 'https://i.imgur.com/LG4excZ.jpeg' },
    { id: 204, name: "Pink Donut 2", category: "Graphic Design", department: "English Department", price: 16.48, discountedPrice: 6.48, imageUrl: 'https://i.imgur.com/iEPmDu9.png' },
    { id: 205, name: "Green Apple 2", category: "Graphic Design", department: "English Department", price: 16.48, discountedPrice: 6.48, imageUrl: 'https://i.imgur.com/sN6sNue.jpeg' },
    { id: 206, name: "Roasted Chicken 2", category: "Graphic Design", department: "English Department", price: 16.48, discountedPrice: 6.48, imageUrl: 'https://i.imgur.com/LG4excZ.jpeg' },
];

// Section 5: En Alttaki Bestsellers
const bottomBestsellers = [
    // 👇 GÜNCELLENEN KISIM BURASI
    { id: 301, name: "Blue Plastic Cup", category: "Graphic Design", department: "English Department", price: 16.48, discountedPrice: 6.48, imageUrl: 'https://atlas-content-cdn.pixelsquid.com/stock-images/blue-plastic-cup-mr7KWm1-600.jpg' }, 
    { id: 302, name: "Cheese Tray", category: "Graphic Design", department: "English Department", price: 16.48, discountedPrice: 6.48, imageUrl: 'https://i.imgur.com/LG4excZ.jpeg' },
    { id: 303, name: "Clean Bleach", category: "Graphic Design", department: "English Department", price: 16.48, discountedPrice: 6.48, imageUrl: 'https://i.imgur.com/sN6sNue.jpeg' },
    { id: 304, name: "Werther's Candy", category: "Graphic Design", department: "English Department", price: 16.48, discountedPrice: 6.48, imageUrl: 'https://i.imgur.com/iEPmDu9.png' },
];

const HomePage = () => {
  return (
    <>
      <Header />
      
      <HeroSlider />
      
      <ShopCards />

      <PageContent>
        
        {/* SECTION 1: Yellow Banner Bestsellers */}
        <CategoryProductSection 
            title="BESTSELLER PRODUCTS" 
            products={bestsellerProducts} 
            bannerColor="bg-[#FEE998]"
            bannerImg="https://i.imgur.com/pWCHNFT.jpeg"
            bannerImgClass="bottom"
            isReverse={false} 
        />

        {/* SECTION 2: Most Popular V1 (Solda Resim) */}
        <ContentSection 
            mainImg="https://i.imgur.com/Gx5RMLw.jpeg"
            productImg="https://i.imgur.com/AEhL8st.jpeg"
            isReverse={false}
            showList={true}
        />

        {/* SECTION 3: Blue Banner Featured */}
       <CategoryProductSection 
            title="FEATURED PRODUCTS" 
            products={featuredProducts} 
            bannerColor="bg-[#DAF3F8]"
            // 👇 GÜNCELLEME 1: Yeni görsel URL'si
            bannerImg="https://i.imgur.com/Pqi7VzR.jpeg"
            // 👇 GÜNCELLEME 2: 'center' yerine boş bırakıldı.
            // Bu sayede görsel tüm banner alanını kaplayacak.
            bannerImgClass="" 
            isReverse={true} 
        />

        {/* SECTION 4: Most Popular V2 (Sağda Resim) */}
        <ContentSection 
            mainImg="https://images.unsplash.com/photo-1525385133512-2f3bdd039054?q=80&w=1970&auto=format&fit=crop"
            productImg="https://i.imgur.com/pWCHNFT.jpeg"
            isReverse={true}
        />

        {/* SECTION 5: Bottom Simple Grid */}
        <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 lg:px-0">
            <div className="mb-8">
                <h3 className="text-2xl font-bold text-slate-800 tracking-wider mb-4">
                    BESTSELLER PRODUCTS
                </h3>
                <div className="w-full h-[1px] bg-gray-200"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {bottomBestsellers.map((product) => (
                    <div key={product.id}>
                        <ProductCard product={product} />
                    </div>
                ))}
            </div>
        </section>

        {/* SECTION 6: Clients */}
        <ClientsSection />

        {/* SECTION 7: Blog */}
        <BlogSection />

      </PageContent>

      <Footer />
    </>
  );
};

export default HomePage;