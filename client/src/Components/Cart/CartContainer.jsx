import React, { useState, useEffect } from 'react';
import { IoMdArrowDropdown, IoMdArrowDropup, IoMdArrowDropright, IoMdArrowDropleft } from 'react-icons/io';
import { IoCloseSharp } from 'react-icons/io5';
import { useSelector, useDispatch } from 'react-redux'

// component
import FoodItem from './FoodItem';

// redux action
import { getCart } from '../../Redux/Reducer/Cart/Cart.action';

const CartSm = ({ toggle }) => {
    const reduxState = useSelector((global) => global.cart.cart);

    return (
        <>
            <div className="md:hidden flex items-center justify-between">
                <div className="flex flex-col items-start">
                    <small className="flex items-center gap-1" onClick={toggle}>
                        {reduxState.length} Item <IoMdArrowDropup />
                    </small>
                    <h4 className>
                        ₹{
                            reduxState.reduce(
                                (acc, curVal) => acc + curVal.totalPrice, 0)
                        }
                        <sub>(plus tax)</sub>
                    </h4>
                </div>
                <button className="flex items-center gap-1 bg-zomato-400 px-3 py-1 rounded-lg text-white rounded-lg">
                    Continue <IoMdArrowDropright />
                </button>
            </div>
        </>
    );
};

const CartLg = ({ toggle }) => {
    const reduxState = useSelector((global) => global.cart.cart);

    return (
        <>
            <div className=" hidden md:flex items-center justify-between container px-20 mx-auto">
                <div className="flex gap-2 text-xl items-start">
                    <span className="border bg-white border-gray-400 p-1 rounded" onClick={toggle}>
                        <IoMdArrowDropup />
                    </span>
                    <h4>Your Orders ({reduxState.length})</h4>
                </div>
                <div className="flex items-center gap-2">
                    <h4 className="text-xl font-semibold">
                        Subtotal: ₹
                        {
                            reduxState.reduce(
                                (acc, curVal) => acc + curVal.totalPrice, 0)
                        }
                    </h4>
                    <button className="flex items-center text-lg font-light h-10 gap-1 bg-zomato-400 px-3 py-1 rounded-lg text-white">
                        Continue <IoMdArrowDropright />
                    </button>
                </div>
            </div>
        </>
    );
};

const CartContainer = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [cartData, setCartData] = useState([]);

    const dispatch = useDispatch();
    const reduxState = useSelector((global) => global.cart.cart);

    const toggleCart = () => setIsOpen((prev) => !prev);
    const closeCart = () => setIsOpen(false);

    return (
        <>
            {reduxState.length && (
                <>
                    {isOpen && (
                        <div className="fixed w-full overflow-y-scroll h-64 bottom-14 w-full z-10 p-2 px-3 bg-white">
                            <div className="flex items-center justify-between md:px-20">
                                <h3 className="text-xl font-semibold">Your Orders</h3>
                                <IoCloseSharp onClick={closeCart} />
                            </div>
                            <hr className="my-2" />

                            <div className="flex flex-col gap-2 md:px-20">
                                {reduxState.map((food) => (
                                    <FoodItem key={food._id} {...food} />
                                ))}
                            </div>
                        </div>
                    )}
                    <div className="fixed bottom-0 w-full z-10 p-2 px-3 bg-white">
                        <CartSm toggle={toggleCart} />
                        <CartLg toggle={toggleCart} />
                    </div>
                </>

            )}
        </>
    );
};

export default CartContainer;