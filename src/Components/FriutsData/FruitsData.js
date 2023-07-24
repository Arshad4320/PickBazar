import React, { useEffect, useState } from 'react';
import FruitData from './FruitData';
import LeftSideMenu from '../SideMenu/LeftSideMenu';

const FruitsData = () => {
    const [item, setItem] = useState([])


    useEffect(() => {
        fetch("data.json")
        .then(res => res.json())
        .then(data=>setItem(data))
        .catch(error => {
            console.error("Error fetching data:", error);
        });
    },[])
    return (
        <div className='flex flex-wrap'>
            <LeftSideMenu className="w-1/4"/>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4  bg-white gap-5 mx-5 h-96 w-3/4'>
                
            {
                item?.map((item) => <FruitData item={ item} key={item.id} />)
            }
        </div>
       </div>
    );
};

export default FruitsData;