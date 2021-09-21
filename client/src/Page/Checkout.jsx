import React from 'react';

// components
import FoodItem from '../Components/Cart/FoodItem';
import AddressList from '../Components/Checkout/AddressList';

const Checkout = () => {

    const address = [
        {
            name: "Home",
            address: "India"
        },
        {
            name: "Gym",
            address: "India"
        },
        {
            name: "Office",
            address: "India"
        },
    ]

    return (
        <>
            <div className="my-3 flex flex-col gap-3 items-center">
                <h1 className="text-xl text-center md:text-2xl font-bold">Checkout</h1>

                <div className="w-full md:w-3/5 rounded-lg shadow-lg py-3 bg-white flex flex-col items-center">
                    <h3 className="text-lg font-semibold">Summary</h3>
                    <div className="flex w-full flex-col gap-2 items-center">
                        <h5 className="text-base tracking-wider">Order From</h5>
                        <div className="flex w-full flex-col items-center text-gray-400">
                            <h4>Domino's Pizza</h4>
                            <small>Eternity Mall, Variety Square, Sitabuldi, Nagpur</small>
                        </div>
                        <div className="my-4 px-4 flex flex-col gap-2 w-full md:w-3/5">
                            <FoodItem name="Pizza" quantity={3} price={300} />
                        </div>
                        <div className="flex flex-col px-6 gap-3 w-full md:w-3/5">
                            <h4 className="text-xl font-semibold">Choose Address</h4>
                            <AddressList address={address} />
                        </div>
                    </div>
                    <button className="my-4 md:my-8 w-full md:w-3/5 px-0 h-14 text-white font-medium text-lg bg-zomato-400 rounded-lg">
                        Pay Now
                    </button>
                </div>
            </div>
        </>
    );
};

export default Checkout;