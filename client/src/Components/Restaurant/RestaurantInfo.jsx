import React from 'react';
import {MdStar} from 'react-icons/md';

const RestaurantInfo = (props) => {
    return (
        <>
            <div className="my-4">
                <div className="flex flex-col flex-col-reverse md:flex-row md:items-center justify-between gap-3">
                    <h1 className="text-xl md:text-4xl font-semibold">{props.name}</h1>
                    <div className="flex items-center gap-6 text-xs md:text-base">
                        <div className="flex items-center gap-2">
                            <span className="flex rounded items-center gap-1 text-white font-medium bg-green-600 h-6 px-1 rounded-md">
                                {props.restaurantRating} <MdStar />
                            </span>
                            <span>
                                <strong>1481</strong>
                                <p className="text-sm text-light border-dashed border-b">
                                    Dining Reviews
                                </p>
                            </span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="flex rounded items-center gap-1 text-white font-medium bg-green-600 h-6 px-1 rounded-md">
                                {props.deliveryRating} <MdStar />
                            </span>
                            <span>
                                <strong>44.8K</strong>
                                <p className="text-sm text-light border-dashed border-b">
                                    Delivery Reviews
                                </p>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="text-md text-gray-600">
                    <h3>{props.cuisine}</h3>
                    <h3 className="text-gray-400">{props.address}</h3>
                    <h3>
                        <span className="text-yellow-500">Open now</span> - 11am – 2am (Today)
                    </h3>
                </div>
            </div>
        </>
    );
};

export default RestaurantInfo;
