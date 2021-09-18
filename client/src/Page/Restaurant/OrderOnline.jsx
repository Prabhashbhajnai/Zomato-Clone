import React from 'react';
import {AiOutlineCompass} from 'react-icons/ai';
import {BiTimeFive} from 'react-icons/bi';


// components
import FloatMenuButton from '../../Components/Restaurant/Order-Online/FloatMenuButton';
import MenuListContainer from '../../Components/Restaurant/Order-Online/MenuListContainer';
import FoodItem from '../../Components/Restaurant/Order-Online/FoodItem';
import FoodList from '../../Components/Restaurant/Order-Online/FoodList';

const OrderOnline = () => {
    return (
        <>
            <div className="w-full h-screen flex">
                <aside className="hidden md:flex flex-col gap-3 border-r-2 overflow-y-scroll border-gray-200 h-screen w-64 mr-10">
                    <MenuListContainer />
                    <MenuListContainer />
                    <MenuListContainer />
                    <MenuListContainer />
                </aside>
                <div className="w-full h-screen px-3 md:w-4/6">
                    <div className="pl-3 mb-4">
                        <h2 className="text-xl font-semibold">Order Online</h2>
                        <h4 className="flex items-center gap-2 font-light text-gray-500">
                            <AiOutlineCompass /> Live Track Your Order | <BiTimeFive /> 45 Min
                        </h4>
                    </div>

                    <section className="flex flex-col h-screen overflow-y-scroll gap-3 md:gap-5">
                        <FoodList 
                            title="Recommended" 
                            items={[
                                {
                                    title: "Mutton Handi [Half]",
                                    price: "1000",
                                    rating: 3,
                                    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure quae laborum aliquam iusto cupiditate quisquam fugiat quidem eligendi, maxime officiis eum qui. Aperiam assumenda laboriosam libero rem doloribus, consequatur maiores!",
                                    image: "https://b.zmtcdn.com/data/dish_photos/261/1816eba714ae23f5cbde48d7e9086261.jpg"
                                },
                                {
                                    title: "Mutton Handi [Half]",
                                    price: "1000",
                                    rating: 3,
                                    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure quae laborum aliquam iusto cupiditate quisquam fugiat quidem eligendi, maxime officiis eum qui. Aperiam assumenda laboriosam libero rem doloribus, consequatur maiores!",
                                    image: "https://b.zmtcdn.com/data/dish_photos/261/1816eba714ae23f5cbde48d7e9086261.jpg"
                                },
                            ]} 
                        />
                    </section>
                </div>
            </div>
            <FloatMenuButton />
        </>
    );
};

export default OrderOnline;