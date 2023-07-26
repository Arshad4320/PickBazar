import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSlidersH} from "react-icons/fa";
import { HiMiniXMark} from "react-icons/hi2";



const LeftSideMenu = () => {
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    
    <div className=" bg-white top-14 sticky border-top border-gray-400  p-4 xl:mb-0 lg:mb-0 mb-3 shadow-md z-10 lg:p-5 xl:p-5 ">
      <div className='flex justify-between    '>
         <button onClick={toggleMenu}
        className=" text-gray-900 bg-white focus:outline-none md:block lg:hidden xl:hidden flex">
            {isMenuOpen ? (
           
            <HiMiniXMark className='bg-gray-100 h-6 w-6 mt-3   p-1 rounded-full ' />
          ) :
           (<div className='flex justify-center items-center bg-gray-100 py-2 px-4 rounded-lg'><FaSlidersH className=' h-4 w-4 '/><span className='ml-2 text-md font-semibold'>Filter</span></div> )}
          </button>
        
 <button style={{color:"#009F7F"}} className='text-lg sm:block md:block  xl:hidden border bg-white font-semibold  px-6 py-2 rounded-md ml:0 lg:hidden '>Grocery</button>
     </div>
      {/* Menu */}
      <div
        className={`${
          isMenuOpen ? 'block' : 'hidden'
        } lg:block xl:block  `}
      >
        {/* Menu Content */}
        <div className=" scroll-m-3 ">

          <ul className="space-y-2 ">
            <li className=''>
              <Link to="/" className="block  px-4 py-2 font-semibold text-gray-500 hover:text-teal-500 rounded ">
                Fruits & Vegetables
              </Link>
            </li>

            <li>
               <Link to="/" className="block px-4 py-2 font-semibold text-gray-500 hover:text-teal-500 rounded">
                Meat & Fish
              </Link>
            </li>

            <li>
               <Link to="/" className="block px-4 py-2 font-semibold text-gray-500 hover:text-teal-500 rounded">
               Snacks
              </Link>
            </li>

            <li>
               <Link to="/" className="block px-4 py-2 font-semibold text-gray-500 hover:text-teal-500 rounded">
               Pet Care
              </Link>
            </li>

            <li>
               <Link to="/" className="block px-4 py-2 font-semibold text-gray-500 hover:text-teal-500 rounded">
                Home & Cleaning
              </Link>
            </li>
            <li>
               <Link to="/" className="block px-4 py-2 font-semibold text-gray-500 hover:text-teal-500 rounded">
                Home & Cleaning
              </Link>
            </li>
           
            <li>
               <Link to="/" className="block px-4 py-2 font-semibold text-gray-500 hover:text-teal-500 rounded">
                Home & Cleaning
              </Link>
            </li>
            <li>
               <Link to="/" className="block px-4 py-2 font-semibold text-gray-500 hover:text-teal-500 rounded">
                Home & Cleaning
              </Link>
            </li>
            <li>
               <Link to="/" className="block px-4 py-2 font-semibold text-gray-500 hover:text-teal-500 rounded">
                Home & Cleaning
              </Link>
            </li>
            <li>
               <Link to="/" className="block px-4 py-2 font-semibold text-gray-500 hover:text-teal-500 rounded">
                Home & Cleaning
              </Link>
            </li>
           

            {/* Dropdown Menu */}
            <li>
              <button
                onClick={toggleDropdown}
                className="block w-full px-4 py-2 text-left font-semibold text-gray-500 hover:text-teal-500 rounded">
                Dairy
                <svg
                  className={`inline-block w-4 h-4 ml-2 transform ${
                    isDropdownOpen ? '-rotate-90' : 'rotate-90'
                  } transition-transform`}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M9 5l7 7-7 7"></path>
                </svg>
              </button>
              {/* Dropdown Content */}
              <ul
                className={`pl-8 space-y-2 ${
                  isDropdownOpen ? 'block' : 'hidden'
                }`}
              >
                <li>
                  <Link
                    to="/item1"
                    className="block px-4 py-2 font-semibold text-gray-500 hover:text-teal-500 rounded"
                  >
                    Milk
                  </Link>
                </li>
               
                <li>
                  <Link
                    to="/item2"
                    className="block px-4 py-2 font-semibold text-gray-500 hover:text-teal-500 rounded"
                  >
                   Butter
                  </Link>
                </li>
                
                {/* Add more dropdown items here */}
              </ul>
              
            </li>

            
            
           
            {/* Add more menu items here */}
          </ul>
         
        </div>
      </div>
    </div>
 
  );
};

export default LeftSideMenu;


