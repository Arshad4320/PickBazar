import React from 'react';

const FruitData = ({ item }) => {
    const {name,img,price}=item

    return (
        <div className='flex justify-center hover:-translate-y-1  hover:ease-in duration-300  Z-0'>
            <div className='shadow-md bg-white '>
                <img className='' src={img} alt="" />

                     <div className=' px-6 '>
                    <p className='text-gray-600  font-semibold'>{price}</p>
                    <p className='text-gray-500 font-semibold'>{name}</p>
                </div>
                <div className='flex w-48   px-3   mx-auto py-4'>
                    <div className='hover:bg-teal-700 hover:text-white bg-gray-100 text-gray-700 flex  ease-in delay-75 duration-300 rounded-md'>
                        
                    <button className='flex w-32 justify-center p-2     '>Add </button>
                    <button className='text-2xl font-semibold  w-11 text-center  '>+ </button>
                </div>
               </div>
            </div>
        </div>
    );
};

export default FruitData;