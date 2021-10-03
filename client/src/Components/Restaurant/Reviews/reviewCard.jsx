import React, {useState, useEffect} from 'react';
import {AiFillStar} from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import dayjs from 'dayjs';
import {getUser} from '../../../Redux/Reducer/User/user.action';

const ReviewCard = (props) => {
    const [user, setUser] = useState({});
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getUser(props.user)).then((data) =>
        setUser(data.payload.user)
      );
    }, []);

    return (
        <>
            <div className="my-3 flex flex-col gap-3">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="w-10 h-10 rounded-full">
                            <img 
                                src="https://b.zmtcdn.com/images/user_avatars/cupcake.png" 
                                alt="avatar"
                                className="w-full h-full rounded-full object-cover"
                            />
                        </div>
                        <div className="flex flex-col">
                            <h3 className="text-lg font-semibold">{user?.fullname}</h3>
                            <small className="text-gray-400">5 reviews &#8226; 3 Followers</small>
                        </div>
                    </div>
                    <button className="text-zomato-400 border border-zomato-400 py-2 px-4 rounded-lg">Follow</button>
                </div>
                <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-3">
                        <span className="flex text-xs text-white bg-green-500 px-2 py-1 rounded-lg items-center gap-1">
                            3 <AiFillStar />
                        </span>
                        <h5 className="font-regular uppercase">{props.isRestaurantReview ? "Dining" : "Delivery"}</h5>
                        <small className="text-gray-500">{dayjs(props.createdAt).format("DD MMM YYYY")}</small>
                    </div>
                    <div className="w-full">
                        <p className="w-full text-gray-800 font-light text-base">
                            {props.reviewText}
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ReviewCard;