import React from 'react';
import banner from '../../img/banner.jpg';

const Banner = () => {
  return (
    <div className="bg-cover bg-center bg-no-repeat h-screen lg:block xl:block md:hidden sm:hidden hidden mt-28" style={{ backgroundImage: `url(${banner})` }}>
           <div className="text-center">
        <h1 className="  xl:text-5xl lg:text-4xl md:text-3xl xl pt-20 mb-8 font-bold text-slate-800">Groceries Delivered in 90 Minutes</h1>
        <p className="text-lg text-gray-600 mb-5">Get your healthy foods & snacks delivered at your doorsteps all day everyday</p>
        <input
          className="w-3/5 mx-auto p-4 mt-4 text-gray-600  rounded-lg shadow-lg border-none  "
          type="text"
          value={'Search your Products from here'}
              />
              <p style={{background:"#009F7F"}} className=' w-32 h-14 flex justify-center items-center rounded-r-md absolute right-0 -mt-14 text-xl font-semibold text-white lg:mr-32 xl:mr-60'>search</p>
      </div>
    </div>
  );
};

export default Banner;
