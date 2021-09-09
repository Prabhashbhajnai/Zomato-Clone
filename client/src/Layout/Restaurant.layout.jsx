import React from 'react';
import {MdStarBorder} from 'react-icons/md';
import {RiDirectionLine, RiShareForwardLine} from 'react-icons/ri';
import {BiBookmarkPlus} from 'react-icons/bi';

// components
import RestaurantNavbar from '../Components/Navbar/restaurantNavbar';
import ImageGrid from '../Components/Restaurant/ImageGrid';
import RestaurantInfo from '../Components/Restaurant/RestaurantInfo';
import ReviewButtons from '../Components/Restaurant/ReviewButton';
import InfoButtons from '../Components/Restaurant/InfoButtons';

const RestaurantLayout = () => {
    return (
        <>
            <RestaurantNavbar />    
            <div className="container mx-auto px-4 lg:px-24">
                <ImageGrid 
                    images={[
                        "https://b.zmtcdn.com/data/pictures/1/3300011/733f7837d034da88fcbd459876ccdf7a.jpg",
                        "https://b.zmtcdn.com/data/pictures/1/3300011/733f7837d034da88fcbd459876ccdf7a.jpg",
                        "https://b.zmtcdn.com/data/pictures/1/3300011/733f7837d034da88fcbd459876ccdf7a.jpg",
                        "https://b.zmtcdn.com/data/pictures/1/3300011/733f7837d034da88fcbd459876ccdf7a.jpg",
                        "https://b.zmtcdn.com/data/pictures/1/3300011/733f7837d034da88fcbd459876ccdf7a.jpg",
                        "https://b.zmtcdn.com/data/pictures/1/3300011/733f7837d034da88fcbd459876ccdf7a.jpg",
                    ]} 
                />
                <RestaurantInfo 
                    name="Babbu Hotel" 
                    restaurantRating="4.3" 
                    deliveryRating="3.8" 
                    cuisine="North Indian, Mughlai, Biryani, Beverages" 
                    address="Mominpura, Nagpur" 
                />
                <div className="my-4 flex flex-wrap gap-3">
                    <ReviewButtons isActive>
                        <MdStarBorder /> Add Review
                    </ReviewButtons>
                    <InfoButtons isActive>
                        <RiDirectionLine className="text-zomato-400"/> Direction
                    </InfoButtons>
                    <InfoButtons isActive>
                        <BiBookmarkPlus className="text-zomato-400"/> Bookmark
                    </InfoButtons>
                    <InfoButtons isActive>
                        <RiShareForwardLine className="text-zomato-400"/> Share
                    </InfoButtons>
                </div>
            </div>

        </>
    );
};


export default RestaurantLayout;
