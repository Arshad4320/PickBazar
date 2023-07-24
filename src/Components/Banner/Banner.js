import React from 'react';
import banner from '../../img/banner.jpg';

const Banner = () => {
  return (
    <div className="bg-cover bg-center bg-no-repeat h-screen " style={{ backgroundImage: `url(${banner})` }}>
           <div className="text-center">
        <h1 className="  text-4xl lg:text-5xl pt-20 mb-8 font-bold text-slate-800">Groceries Delivered in 90 Minutes</h1>
        <p className="text-lg text-gray-600 mb-5">Get your healthy foods & snacks delivered at your doorsteps all day everyday</p>
        <input
          className="w-2/3 mx-auto px-4 py-5 mt-4 text-gray-600  rounded-lg shadow-lg border-teal-600 focus:border-teal-600  "
          type="text"
          value={'Search your Products from here'}
              />
              {/* <p className='bg-teal-600 w-36 h-16 flex justify-center items-center rounded-r-md absolute right-0 -mt-16 text-xl font-semibold text-white mr-48'>search</p> */}
      </div>
    </div>
  );
};

export default Banner;
