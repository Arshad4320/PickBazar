import React from 'react';
import Banner from '../../Components/Banner/Banner';
import ServiceBanner from './../../Components/serviceBanner/ServiceBanner';
import FruitsData from '../../Components/FriutsData/FruitsData';
import Checkout from '../../Components/CheckoutCart/Checkout';
import RightSideToggleMenu from '../../Components/CheckoutCart/Checkout';



const Home = () => {
    return (
        <div>
            <Banner />
            <ServiceBanner />
            {/* <Checkout/> */}
            <RightSideToggleMenu/>
            <FruitsData/>
        </div>
    );
};

export default Home;