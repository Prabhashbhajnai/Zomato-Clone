import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router';
import {useDispatch} from 'react-redux';
import {MdStarBorder} from 'react-icons/md';
import {RiDirectionLine, RiShareForwardLine} from 'react-icons/ri';
import {BiBookmarkPlus} from 'react-icons/bi';

// components
import RestaurantNavbar from '../Components/Navbar/restaurantNavbar';
import ImageGrid from '../Components/Restaurant/ImageGrid';
import RestaurantInfo from '../Components/Restaurant/RestaurantInfo';
import ReviewButtons from '../Components/Restaurant/ReviewButton';
import InfoButtons from '../Components/Restaurant/InfoButtons';
import TabContainer from '../Components/Restaurant/Tabs';
import CartContainer from '../Components/Cart/CartContainer';

// Redux actions
import { getSpecificRestaurant } from '../Redux/Reducer/Restaurant/restaurant.action';
import { getImage } from '../Redux/Reducer/Image/Image.action';
import { getCart } from '../Redux/Reducer/Cart/Cart.action';

const RestaurantLayout = (props) => {
    const [restaurant , setRestaurant] = useState({
        images: [],
        name: "",
        cuisine: "",
        address: "",
    });
    const {id} = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getSpecificRestaurant(id)).then((data) => {
            setRestaurant((prev) => ({
                ...prev, 
                ...data.payload.restaurant
            }));
            dispatch(getImage(data.payload.restaurant.photos)).then(data => 
                setRestaurant((prev) => ({...prev, ...data.payload.image}))
            );
        });
        
        dispatch(getCart());
    }, []);

    return (
        <>
            <RestaurantNavbar />    
            <div className="container mx-auto px-4 lg:px-24 pb-10">
                <ImageGrid 
                    images={restaurant.images} 
                />
                <RestaurantInfo 
                    name={restaurant.name} 
                    restaurantRating={restaurant?.rating || 0} 
                    deliveryRating={restaurant?.rating || 0} 
                    cuisine={restaurant?.cuisine} 
                    address={restaurant?.address}
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
                <div className="my-8">
                    <TabContainer />
                </div>
                <div className="relative">{props.children}</div>
            </div>
            <CartContainer />
        </>
    );
};


export default RestaurantLayout;
