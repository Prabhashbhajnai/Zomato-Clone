import React from 'react';
import { useState } from 'react';

// components
import DeliveryCarousal from './DeliveryCarousal';
import Brand from './Brand';
import RestaurantCard from '../RestaurantCard';

const Delivery = () => {

    const[restaurantList, setRestaurantList] = useState([
        {
            _id: "123456",
            photos: [
                "https://b.zmtcdn.com/data/pictures/1/3300011/733f7837d034da88fcbd459876ccdf7a.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*"
            ],
            name: "Babbu Hotel",
            cuisine: ["North Indian", "Mughlai", "Biryani", "Beverages"],
            averageCost: 300,
            isPro: true,
            isOff: 75,
            durationOfdelivery: 47,
            restaurantReviewValue: 3.8,
        },
        {
            _id: "123456-2",
            photos: [
                "https://b.zmtcdn.com/data/pictures/5/19414175/01cd455a034207a3cdf8ba4a7cc1732c_o2_featured_v2.jpg"
            ],
            name: "Bullockcart NX",
            cuisine: ["North Indian", "Mughlai", "Biryani", "Kebab", "Chinese", "Rolls"],
            averageCost: 300,
            isPro: true,
            isOff: 75,
            durationOfdelivery: 47,
            restaurantReviewValue: 3.8,
        },
        {
            _id: "123456-3",
            photos: [
                "https://b.zmtcdn.com/data/pictures/1/3301941/6f8780c0e0102852bc34341d4ef31c09.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*"
            ],
            name: "Jubilee Bakery",
            cuisine: ["Bakery", "Fast Food", "Beverages", "Sandwich"],
            averageCost: 300,
            isPro: true,
            isOff: 75,
            durationOfdelivery: 47,
            restaurantReviewValue: "3.8",
        },
    ]);

    return (
        <>
            <DeliveryCarousal />
            {/* <Brand /> */}
            <div className="flex justify-between flex-wrap">
                {restaurantList.map((restaurant) => (
                    <RestaurantCard {...restaurant} key={restaurant._id} />
                ))}
            </div>
        </>
    );
};

export default Delivery;