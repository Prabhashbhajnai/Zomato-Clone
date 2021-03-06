import React, {useState, useEffect} from 'react';
import { Link, useParams } from 'react-router-dom';
import { IoMdArrowDropright } from 'react-icons/io';
import Slider from 'react-slick';
import { useSelector, useDispatch } from 'react-redux';
import { NextArrow, PrevArrow } from '../../Components/CarousalArrow';
import ReactStars from "react-rating-stars-component";

// component
import MenuCollection from '../../Components/Restaurant/MenuCollection';
import MenuSimilarRestaurantcard from '../../Components/Restaurant/MenuSimilarRestaurantCard';
import ReviewCard from '../../Components/Restaurant/Reviews/reviewCard';
import Mapview from '../../Components/Restaurant/Mapview';

import {getImage} from '../../Redux/Reducer/Image/Image.action';
import { getReviews } from '../../Redux/Reducer/Reviews/review.action';

const Overview = () => {
    const [menuImage, setMenuImages] = useState({images: []});
    const [Reviews, setReviews] = useState([]);

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

    const reduxState = useSelector(
        (globalStore) => globalStore.restaurant.selectedRestaurant.restaurant
    );

    const dispatch = useDispatch();

    useEffect(() => {
        if(reduxState) {
            dispatch(getImage(reduxState?.menuImage)).then((data) => {
                const images = [];
                data.payload.image.images.map(({location}) => images.push(location))
                setMenuImages(images)
            });

            // for review
            dispatch(getReviews(reduxState._id)).then((data) => 
                setReviews(data.payload.reviews)
            );
        }
    }, [reduxState]);

    const ratingChanged = (newRating) => {
        console.log(newRating);
    };

    const getLatLong = (mapAddress) => {
        return mapAddress?.split(",").map((item) => parseFloat(item))
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
                            image={menuImage}
                        />
                    </div>
                    <h4 className="text-lg font-medium mt-4">Cuisines</h4>
                    <div className="flex flex-wrap gap-2 mt-2">
                        {reduxState?.cuisine.map((data) => (
                            <span className="border border-gray-400 text-blue-600 px-2 py-1 rounded-full">
                                {data}
                            </span>
                        ))}
                    </div>
                    <div className="my-4">
                        <h4 className="text-lg font-medium">Average Cost</h4>
                        <h6 className="mt-1">???{reduxState?.averageCost} for two people (approx.)</h6>
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
                    <div className="my-4 md:hidden flex flex-col gap-4">
                        <Mapview
                            title={reduxState?.name}
                            phno={`+91${reduxState?.contactNumber}`}
                            mapLocation={getLatLong(reduxState?.mapLocation)}
                            address={reduxState?.address} 
                        />
                    </div>
                    <div className="my-4 flex flex-col gap-4">
                        {Reviews.map((reviewData) => (
                            <ReviewCard {...reviewData} />
                        ))}
                    </div>
                </div>
                <aside
                    style={{ height: "fit-content" }}
                    className="hidden md:flex md:w-4/12 sticky rounded-xl fixed top-2 bg-white p-3 shadow-md flex flex-col gap-4"
                >
                    <Mapview 
                        title={reduxState?.name}
                        phno={`+91${reduxState?.contactNumber}`}
                        mapLocation={getLatLong(reduxState?.mapLocation)}
                        address={reduxState?.address}
                    />
                </aside>
            </div>
        </>
    );
};

export default Overview;