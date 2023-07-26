import React, { useState } from 'react';
import { FaAlignJustify } from "react-icons/fa6";
import { HiMiniXMark} from "react-icons/hi2";
import { Link } from 'react-router-dom';
import BottomNavbar from './BottomNavbar';

const Navbar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  

  const routing = <>
           <Link to='/' className="text-gray-800  hover:text-teal-600 py-3">Home</Link>
           <Link to='/products' className="text-gray-800  hover:text-teal-600 py-3">Product</Link>
           <Link to='/services' className="text-gray-800  hover:text-teal-600 py-3">Services</Link>
           <Link to='/login' className="text-gray-800  hover:text-teal-600 py-3">Login</Link>
          <button style={{background:"#009F7F"}} className='text-white  text-center   px-5 py-2 rounded-md   sm:mb-1 md:mb-1 mb-1 lg:mb-0 xl:mb-0'>Become Seller</button>
          <button  style={{background:"#009F7F"}} className='text-white px-5 py-2 rounded-md'>Join</button>
   </> 


  return (

    <div className='top-0  fixed  left-0 right-0 z-50'>
{/* single nav */}
      <div className='text-center bg-white shadow-sm py-3 xl:hidden lg:hidden md:block sm:block top-0  fixed  left-0 right-0 z-50'><span className='text-4xl font-bold text-indigo-900 '>Pick</span>
        <span  style={{color:"#009F7F"}} className='text-4xl font-bold  mr-4 '>Bazar</span>
      </div>
      {/* main navbar */}
      <div className='hidden sm:hidden md:hidden lg:block xl:block'>
          <nav className="  py-4 px-2 flex justify-between  bg-white shadow-md z-10">
      <div className=" flex flex-wrap ">
        <span className='text-4xl font-bold text-indigo-900 '>Pick</span>
        <span  style={{color:"#009F7F"}} className='text-4xl font-bold  mr-4 '>Bazar</span>
        <button style={{color:"#009F7F"}} className='text-lg hidden xl:block border bg-white font-semibold  px-6 py-2 rounded-md ml:0 lg:ml-16 '>Grocery</button>
      </div>
      <div>
        <div className="container ">
       
        <div className="hidden md:flex space-x-4">
          {routing}
        </div>
      </div>
      </div>
      </nav>
     </div>
      <BottomNavbar/>
   </div>
  );
};

export default Navbar;
