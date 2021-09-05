import React from 'react';
import Slider from 'react-slick';

// components
import DeliveryCategory from "./DeliveryCategory";
import { NextArrow, PrevArrow } from '../CarousalArrow';

const DeliveryCarousal = () => {

    const categories = [
        {
            image: "https://b.zmtcdn.com/data/dish_images/c598d69f4864f3cba4b0de2d8efc0e521612436494.png",
            title: "Pizza"
        },
        {
            image: "https://b.zmtcdn.com/data/homepage_dish_data/4/4a04890400b5d7bac101baace5d7e994.png",
            title: "Sandwich",
        },
        {
            image: "https://b.zmtcdn.com/data/dish_images/aebeb88b78a4a83ea9e727f234899bed1602781186.png",
            title: "Chaat",
        },
        {
            image: "https://b.zmtcdn.com/data/homepage_dish_data/4/6e69685d22c94ffd42ccd7e70e246bd9.png",
            title: "Burger",
        },
        {
            image: "https://b.zmtcdn.com/data/dish_images/173bc40a5058e328f998f55eed7b7a7f1612459047.png",
            title: "Momos",
        },
        {
            image: "https://b.zmtcdn.com/data/dish_images/770ba11e5159e6740d68f71f1b838a261612463246.png",
            title: "Cake",
        },
        /* {
            image: "https://b.zmtcdn.com/data/homepage_dish_data/4/eb2ef145c0fcad44dbb4ed26aad1527d.png",
            title: "Rolls",
        },
        {
            image: "https://b.zmtcdn.com/data/homepage_dish_data/4/76d788a2600b609bb0a08443e03df95b.png",
            title: "Biryani",
        },
        {
            image: "https://b.zmtcdn.com/data/homepage_dish_data/4/742929dcb631403d7c1c1efad2ca2700.png",
            title: "Chicken",
        },
        {
            image: "https://b.zmtcdn.com/data/dish_images/87d7c630082f7fc8cfc5ad917e7228021602870921.png",
            title: "Samosa",
        },
        {
            image: "https://b.zmtcdn.com/data/homepage_dish_data/4/04e1dbc0ec30031e5f26d0bef922ea0c.png",
            title: "Paneer",
        },
        {
            image: "https://b.zmtcdn.com/data/homepage_dish_data/2/1be4127a9dfd23d89aec9ec57a8e71f7.png",
            title: "Fries",
        }, */
    ];

    const settings = {
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <NextArrow/>,
        prevArrow: <PrevArrow />
    };

    return (
        <>
            <h1 className="text-xl mb-4 font-semibold">Inspiration for your first order</h1>
            <div className="lg:hidden flex gap-3 lg:gap-0 flex-wrap justify-between">
                {categories.map((food) => (
                    <DeliveryCategory {...food} />
                ))}
            </div>

            <div className="hidden lg:block">
                <Slider {...settings}>
                    {categories.map((food) => (
                        <DeliveryCategory {...food} />
                    ))}
                </Slider>
            </div>
        </>
    );
};

export default DeliveryCarousal;
