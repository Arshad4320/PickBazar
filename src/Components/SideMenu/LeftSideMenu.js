import React, { useState } from 'react';
import { Link } from 'react-router-dom';

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
    <div className="flex  ">
      {/* Menu button */}
      <button
        onClick={toggleMenu}
        className="p-4 text-gray-400 bg-white focus:outline-none md:hidden"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>

      {/* Menu */}
      <div
        className={`${
          isMenuOpen ? 'block' : 'hidden'
        } md:block md:w-64 bg-white shadow-md `}
      >
        {/* Menu Content */}
        <div className="p-4">

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
