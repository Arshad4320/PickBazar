import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaShopify } from "react-icons/fa";
import { HiMiniXMark } from "react-icons/hi2";

const RightSideToggleMenu = () => {
  const [isMenuOpen, setIsOpenMenu] = useState(false);

  const toggleMenu = () => {
    setIsOpenMenu((prev) => !prev);
  };

  return (
    <div className="fixed top-1/3  right-0 z-50 bg-white ">

      <button onClick={toggleMenu}
        className="block   ">
        {isMenuOpen ? (
          <div className='flex justify-between w-80 p-5'>
             <div style={{color:"#009F7F"}} className=' font-semibold mb-1'>
                <button className=' h-6 w-6 z-10'>
                <Link to="#">
                  <FaShopify />
                </Link>
              </button>
              <span>5 Items</span>
            </div>
            <HiMiniXMark className='bg-gray-100 h-6 w-6    p-1 rounded-full ' />
            </div>
          ) :(
        <div style={{background:"#009F7F"}}
        className="w-54 h-28 p-4 rounded">
        <div>
            <div className='text-white font-semibold mb-1'>
              <button className=' h-6 w-6 z-10'>
                    <Link to="#">
                      <FaShopify />
                    </Link>
           </button><span>5 Items</span></div>
          <p style={{color:"#009F7F"}} className='bg-white p-2 rounded font-semibold'>$31.55</p>
       </div>
      </div>
          
          )
        }
      </button>
     
      <div className={`${isMenuOpen ? 'block' : 'hidden'}   w-80    rounded p-5`}> 
        <div style={{background:"#009F7F",borderRadius:"39px"}} className='flex justify-between mt-48   p-2'>
          <p className='text-white font-semibold p-2'>Checkout</p>
          <p style={{color:"#009F7F",borderRadius:"39px"}} className='bg-white  w-24 h-10  font-semibold text-center p-2'>$31.55</p>
      </div>
      </div>
    </div>
  );
};

export default RightSideToggleMenu;
