import React from 'react';
import Banner from '../../Components/Banner/Banner';
import ServiceBanner from './../../Components/serviceBanner/ServiceBanner';
import FruitsData from '../../Components/FriutsData/FruitsData';



const Home = () => {
    return (
        <div>
            <Banner />
            <ServiceBanner />
            <FruitsData/>
        </div>
    );
};

export default Home;