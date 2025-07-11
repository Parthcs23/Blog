import React from 'react';

const Writing = () => {
  return (
    <div className="bg-gradient-to-b from-white via-[#f9f6ff] to-white px-6 md:px-16 lg:px-24 xl:px-32 py-24 text-gray-800">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 place-items-center">
        
        <div className="bg-white bg-opacity-60 backdrop-blur-md p-8 rounded-2xl shadow-md border border-primary/10 hover:shadow-xl transition-all duration-300 w-full h-full">
          <h3 className="text-2xl font-semibold text-[#6945BA] mb-4">Secure platform</h3>
          <p className="text-base text-gray-600 leading-relaxed">
            Our world class experts and enterprise-grade security system work 24/7 so your audiences' information will always be kept safe and secure.
          </p>
        </div>

        <div className="bg-white bg-opacity-60 backdrop-blur-md p-8 rounded-2xl shadow-md border border-primary/10 hover:shadow-xl transition-all duration-300 w-full h-full">
          <h3 className="text-2xl font-semibold text-[#6945BA] mb-4">Faster loading</h3>
          <p className="text-base text-gray-600 leading-relaxed">
            We have a performance-first culture, meaning our priority is providing the best user experience for you and your visitors, with faster loading sites that perform great on any device.
          </p>
        </div>
        
      </div>
    </div>
  );
};

export default Writing;
