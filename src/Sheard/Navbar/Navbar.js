import React, { useState } from 'react';
import { FaAlignJustify } from "react-icons/fa6";
import { HiMiniXMark} from "react-icons/hi2";
import { Link } from 'react-router-dom';

const Navbar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  

  const routing = <>
           <Link to='/' className="text-gray-500 font-semibold hover:text-gray-400 py-3">Home</Link>
           <Link to='/products' className="text-gray-500 font-semibold hover:text-gray-400 py-3">Product</Link>
           <Link to='/services' className="text-gray-500 font-semibold hover:text-gray-400 py-3">Services</Link>
           <Link to='/login' className="text-gray-500 font-semibold hover:text-gray-400 py-3">Login</Link>
          <button className='text-white font-semibold text-center  bg-teal-500 px-5 py-2 rounded-md   sm:mb-1 md:mb-1 mb-1 lg:mb-0 xl:mb-0'>Become Seller</button>
          <button className='text-white font-semibold bg-teal-500 px-5 py-2 rounded-md'>Join</button>
   </> 


  return (

    <nav className=" py-4 px-2 flex justify-between top-0 sticky bg-white shadow-md z-10">
      <div className=" flex flex-wrap">
        <span className='text-4xl font-bold text-indigo-900 '>Pick</span>
        <span className='text-4xl font-bold text-teal-500 mr-4 '>Bazar</span>
        <button className='text-lg border bg-white font-semibold text-teal-500 px-6 py-2 rounded-md ml:0 lg:ml-16 '>Grocery</button>
      </div>
      <div>
        <div className="container ">
       
        <div className="hidden md:flex space-x-4">
          {routing}
        </div>

        <div className="md:hidden ">
          <button
            className=" focus:outline-none "
            onClick={toggleMenu}
          >
            <svg
              className="h-6 w-6 mt-3 "
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
         <HiMiniXMark className='text-gray-500' />
              ) : (
               <FaAlignJustify className='text-gray-500'/>
              )}
            </svg>
          </button>
        </div>
        {isMenuOpen && (
          <div className="md:hidden -mt-3  grid grid-cols-1 ">
          {routing}
          </div>
        )}
      </div>
      </div>
    </nav>
  );
};

export default Navbar;
