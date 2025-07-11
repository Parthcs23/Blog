import React from 'react';

const Bloghome = () => {
  return (
    <div className="px-6 md:px-16 lg:px-24 xl:px-32 py-12 bg-gradient-to-b from-white via-[#f9f6ff] to-white">
      <div className="max-w-7xl mx-auto flex items-center justify-center">
        <div className="overflow-hidden rounded-3xl shadow-lg border border-primary/10 w-full">
          <img
            src="https://static.wixstatic.com/media/0784b1_6e875de35784442e8cefe8a574bb28f7~mv2.jpg/v1/fill/w_1313,h_625,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Cover%20%20Copy%2010.jpg"
            alt="Blog banner"
            className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700 ease-in-out"
          />
        </div>
      </div>
    </div>
  );
};

export default Bloghome;
