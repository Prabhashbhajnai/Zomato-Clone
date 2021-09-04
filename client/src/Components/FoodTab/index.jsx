import React from 'react';
import {RiShoppingBag3Line, RiHeartAddLine} from "react-icons/ri";
import {MdLocalDining} from "react-icons/md";
import {BiDrink} from "react-icons/bi";

const MobileTabs = () => {
    return (
        <>
            <div className="lg:hidden bg-white shadow-lg p-3 fixed bottom-0 z-10 w-full flex items-center justify-between md:justify-evenly text-gray-500 border">
                <div className="flex flex-col items-center text-xl">
                    <RiShoppingBag3Line/>
                    <h5 className="text-sm">Delivery</h5>
                </div>
                <div className="flex flex-col items-center text-xl">
                    <MdLocalDining/>
                    <h5 className="text-sm">Dining Out</h5>
                </div>
                <div className="flex flex-col items-center text-xl">
                    <BiDrink/>
                    <h5 className="text-sm">Night Life</h5>
                </div>
                <div className="flex flex-col items-center text-xl">
                    <RiHeartAddLine/>
                    <h5 className="text-sm">Nutrition</h5>
                </div>
            </div>
        </>
    )
};

const LargeTabs = () => {
    return (
        <>
            <div className="hidden lg:flex gap-14 container px-20 mx-auto">
                <div className="flex items-center gap-3">
                    <div className="w-16 h-16 bg-gray-100 p-4 rounded-full">
                        <img 
                            src="https://b.zmtcdn.com/data/o2_assets/246bbd71fbba420d5996452be3024d351616150055.png"
                            alt="delivery"
                            className="w-full h-full"
                        />
                    </div>
                    <h3 className="text-xl text-gray-700 font-semibold">Delivery</h3>
                </div>

                <div className="flex items-center gap-3">
                    <div className="w-16 h-16 bg-gray-100 p-4 rounded-full">
                        <img 
                            src="https://b.zmtcdn.com/data/o2_assets/78d25215ff4c1299578ed36eefd5f39d1616149985.png"
                            alt="delivery"
                            className="w-full h-full"
                        />
                    </div>
                    <h3 className="text-xl text-gray-700 font-semibold">Dining Out</h3>
                </div>

                <div className="flex items-center gap-3">
                    <div className="w-16 h-16 bg-gray-100 p-4 rounded-full">
                        <img 
                            src="https://b.zmtcdn.com/data/o2_assets/01040767e4943c398e38e3592bb1ba8a1616150142.png"
                            alt="delivery"
                            className="w-full h-full"
                        />
                    </div>
                    <h3 className="text-xl text-gray-700 font-semibold">Night Life</h3>
                </div>

                <div className="flex items-center gap-3">
                    <div className="w-16 h-16 bg-gray-100 p-4 rounded-full">
                        <img 
                            src="https://b.zmtcdn.com/data/o2_assets/54cad8274d3c3ec7129e0808a13b27c31616582882.png"
                            alt="delivery"
                            className="w-full h-full"
                        />
                    </div>
                    <h3 className="text-xl text-gray-700 font-semibold">Nutrition</h3>
                </div>
            </div>
        </>
    );
};

const FoodTab = () => {
    return (
        <>
            <div>
                <MobileTabs />
                <LargeTabs />
            </div>
        </>
    );
};

export default FoodTab;