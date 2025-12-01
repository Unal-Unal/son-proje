import React from 'react';

// max-w-7xl ve mx-auto, içeriği ortalamak ve genişliğini sınırlamak için yaygın kullanılan sınıflardır.
const PageContent = ({ children }) => {
  return (
    // mt-16 Header'ın yüksekliğini telafi eder. md:mt-24 ise desktop'taki çift satırlı Header için.
    <main className="pt-16 md:pt-24 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </main>
  );
};

export default PageContent;