import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { IoMdArrowDropright } from 'react-icons/io';
import Slider from 'react-slick';
import { NextArrow, PrevArrow } from '../../Components/CarousalArrow';
import ReactStars from "react-rating-stars-component";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

// component
import MenuCollection from '../../Components/Restaurant/MenuCollection';
import MenuSimilarRestaurantcard from '../../Components/Restaurant/MenuSimilarRestaurantCard';
import ReviewCard from '../../Components/Restaurant/Reviews/reviewCard';

const Overview = () => {

    const { id } = useParams();
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: false,
                    arrows: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const ratingChanged = (newRating) => {
        console.log(newRating);
    };

    return (
        <>
            <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-8/12">
                    <h2 className="font-semibold text-lg md:text-xl my-4">About This Place</h2>
                    <div className="flex justify-between items-center">
                        <h4 className="text-lg font-medium">Menu</h4>
                        <Link to={`/restaurant/${id}/menu`}>
                            <span className="flex items-center gap-1 text-zomato-400">
                                See all Menu <IoMdArrowDropright />
                            </span>
                        </Link>
                    </div>
                    <div className="flex flex-wrap gap-3 mt-4">
                        <MenuCollection
                            menuTitle="Menu"
                            pages="3"
                            image="https://b.zmtcdn.com/data/menus/011/3300011/07d261f26041c8f91f22ce4bd50a69c3.jpg"
                        />
                    </div>
                    <h4 className="text-lg font-medium mt-4">Cuisines</h4>
                    <div className="flex flex-wrap gap-2 mt-2">
                        <span className="border border-gray-400 text-green-600 px-2 py-1 rounded-full">North Indian</span>
                        <span className="border border-gray-400 text-green-600 px-2 py-1 rounded-full">Mughlai</span>
                        <span className="border border-gray-400 text-green-600 px-2 py-1 rounded-full">Biryani</span>
                        <span className="border border-gray-400 text-green-600 px-2 py-1 rounded-full">Beverages</span>
                    </div>
                    <div className="my-4">
                        <h4 className="text-lg font-medium">Average Cost</h4>
                        <h6 className="mt-1">₹650 for two people (approx.)</h6>
                        <small className="text-gray-500">Exclusive of applicable taxes and charges, if any</small>
                    </div>
                    <div className="my-4">
                        <h4 className="text-lg font-medium">Similar Restaurants</h4>
                        <Slider {...settings}>
                            <MenuSimilarRestaurantcard
                                image="https://b.zmtcdn.com/data/pictures/chains/5/18711475/4be376adb66b75764946d00a7dcf9991_featured_v2.jpg?output-format=webp"
                                title="tea"
                            />
                            <MenuSimilarRestaurantcard
                                image="https://b.zmtcdn.com/data/pictures/chains/5/18711475/4be376adb66b75764946d00a7dcf9991_featured_v2.jpg?output-format=webp"
                                title="tea"
                            />
                            <MenuSimilarRestaurantcard
                                image="https://b.zmtcdn.com/data/pictures/chains/5/18711475/4be376adb66b75764946d00a7dcf9991_featured_v2.jpg?output-format=webp"
                                title="tea"
                            />
                            <MenuSimilarRestaurantcard
                                image="https://b.zmtcdn.com/data/pictures/chains/5/18711475/4be376adb66b75764946d00a7dcf9991_featured_v2.jpg?output-format=webp"
                                title="tea"
                            />
                        </Slider>
                    </div>
                    <div className="my-4">
                        <h4 className="text-lg font-medium">Rate your delivery experience</h4>
                        <ReactStars
                            count={5}
                            onChange={ratingChanged}
                            size={24}
                            activeColor="#ffd700"
                        />
                    </div>
                    <div className="my-4 flex flex-col gap-4">
                        <ReviewCard />
                        <ReviewCard />
                        <ReviewCard />
                    </div>
                </div>
                <aside
                    style={{ height: "fit-content" }}
                    className="hidden md:block md:w-4/12 sticky rounded-xl fixed top-2 bg-white p-3 shadow-md"
                >
                    <div>
                        <h4 className="text-xl font-medium">Call</h4>
                        <h5 className="text-zomato-400 font-regular">+919860020163</h5>
                    </div>
                    <div>
                        <h4 className="text-xl font-medium">Direction</h4>
                        <div className="w-full h-48">
                            <MapContainer center={[21.158777982421885, 79.09673108473021]} zoom={13} scrollWheelZoom={false}>
                                <TileLayer
                                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                />
                                <Marker position={[21.158777982421885, 79.09673108473021]}>
                                    <Popup>
                                        A pretty CSS3 popup. <br /> Easily customizable.
                                    </Popup>
                                </Marker>
                            </MapContainer>
                        </div>
                    </div>
                </aside>
            </div>
        </>
    );
};

export default Overview;