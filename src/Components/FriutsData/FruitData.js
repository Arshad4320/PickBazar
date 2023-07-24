import React from 'react';

const FruitData = ({ item }) => {
    const {name,img,price}=item
console.log(item);
    return (
        <div className='flex justify-center hover:-translate-y-1 Z-0 hover:ease-in duration-300  '>
            <div className='shadow-md bg-white '>
                <img className='hover:scale-125 ease-in duration-300' src={img} alt="" />

                     <div className=' px-3 '>
                    <p className='text-gray-600  font-semibold'>{price}</p>
                    <p className='text-gray-500 font-semibold'>{name}</p>
                </div>
                <div className='flex w-52  text-white px-3   mx-auto py-5'>
                    <button className='flex w-36 justify-center p-2 bg-gray-100 text-gray-500 rounded-l-sm  hover:translate-x-2 ease-in delay-100 duration-500 hover:bg-teal-600 hover:text-white'>Add </button>
                    <button className='text-2xl font-semibold bg-gray-300 w-12 text-center rounded-r-sm text-gray-500 '>+ </button>
               </div>
            </div>
        </div>
    );
};

export default FruitData;