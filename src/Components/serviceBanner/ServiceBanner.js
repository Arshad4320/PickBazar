import React from 'react';
import img from '../../../src/img/about1.jpg'
import img2 from '../../../src/img/about2.jpg'
import img3 from '../../../src/img/about3.jpg'

const ServiceBanner = () => {
    return (
        <div className='bg-white'>
             <div className=' grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 grid-cols-1 m-8 gap-5'>
            <img src={img} alt="" />
            <img src={img2} alt="" />
            <img src={img3} alt="" />
        </div>
       </div>
    );
};

export default ServiceBanner;