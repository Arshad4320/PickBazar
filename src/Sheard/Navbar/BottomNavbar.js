import React, { useState } from 'react';
import { FaAlignLeft } from "react-icons/fa6";
import { FaSearch,FaHome,FaRegUser,FaShopify } from "react-icons/fa";
import { HiMiniXMark} from "react-icons/hi2";
import { Link } from 'react-router-dom';


const BottomNavbar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  

  const routing = <>
           <Link to='/' className="text-gray-900 text-md hover:text-teal-600 py-2">Home</Link>
           <Link to='/products' className="text-gray-900 text-md hover:text-teal-600 py-2">Product</Link>
           <Link to='/services' className="text-gray-900 text-md hover:text-teal-600 py-2">Services</Link>
           <Link to='/login' className="text-gray-900 text-md hover:text-teal-600 py-2">Login</Link>

   </>
// translate-x-2 ease-in delay-100 duration-500
  return (

     
      <div className='bg-white  fixed bottom-0 left-0 right-0 flex justify-between lg:hidden p-3 z-10'>
          <nav className=" justify-center ">
           <div  className="   fixed bottom-0 bg-white  z-0 w-96 px-5 py-3 ">
          <button onClick={toggleMenu} className=''>
            {isMenuOpen ? (
            <div className='flex justify-between'>
                <div className='  shadow-sm  '>
                 <span className='text-4xl font-bold text-indigo-900 '>Pick</span>
                 <span  style={{color:"#009F7F"}} className='text-4xl font-bold  mr-4 '>Bazar</span>
            </div>

                                      

            <HiMiniXMark className='bg-gray-100 h-6 w-6 mt-3 ml-36  p-1 rounded-full ' />
           </div>) :
                          (<FaAlignLeft className=' h-4 w-4 ' />)}
                      
          </button>
        
                  
                  {isMenuOpen &&
                      (
                      <div className="    grid grid-cols-1 ">
                          {routing}
                      </div>
                          )}
                </div>
            
          </nav>
          <button className=' h-6 w-6 z-10'>
              <Link to="#"><FaSearch /></Link>
          </button>
          <button className=' h-6 w-6 z-10'>
              <Link to="#"><FaHome/></Link>
          </button>
          <button className=' h-6 w-6 z-10'>
              <Link to="#"><FaShopify/></Link>
          </button>
          <button className=' h-6 w-6 z-10'>
              <Link to="#"><FaRegUser/></Link>
          </button>
          </div>
          
  
  );
};

export default BottomNavbar;
