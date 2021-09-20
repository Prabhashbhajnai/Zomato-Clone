import React, {useState} from 'react';
import { IoMdArrowDropdown, IoMdArrowDropup, IoMdArrowDropright, IoMdArrowDropleft } from 'react-icons/io';
import { IoCloseSharp } from 'react-icons/io5';

// component
import FoodItem from './FoodItem';

const CartSm = ({toggle}) => {
    return (
        <>
            <div className="md:hidden flex items-center justify-between">
                <div className="flex flex-col items-start">
                    <small className="flex items-center gap-1" onClick={toggle}>
                        1 Item <IoMdArrowDropup />
                    </small>
                    <h4 className>
                        ₹300 <sub>(plus tax)</sub>
                    </h4>
                </div>
                <button className="flex items-center gap-1 bg-zomato-400 px-3 py-1 rounded-lg text-white rounded-lg">
                    Continue <IoMdArrowDropright />
                </button>
            </div>
        </>
    );
};

const CartLg = ({toggle}) => {
    return (
        <>
            <div className=" hidden md:flex items-center justify-between container px-20 mx-auto">
                <div className="flex gap-2 text-xl items-start">
                    <span className="border bg-white border-gray-400 p-1 rounded" onClick={toggle}>
                        <IoMdArrowDropup />
                    </span>
                    <h4>Your Orders (1)</h4>
                </div>
                <div className="flex items-center gap-2">
                    <h4 className="text-xl font-semibold">Subtotal: ₹300</h4>
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

    const toggleCart = () => setIsOpen((prev) => !prev);
    const closeCart = () => setIsOpen(false);

    return (
        <>
            {isOpen && (
                <div className="fixed w-full overflow-y-scroll h-64 bottom-14 w-full z-10 p-2 px-3 bg-white">
                    <div className="flex items-center justify-between md:px-20">
                        <h3 className="text-xl font-semibold">Your Orders</h3>
                        <IoCloseSharp onClick={closeCart} />
                    </div>
                    <hr className="my-2" />

                    <div className="flex flex-col gap-2 md:px-20">
                        <FoodItem name="Pizza" quantity="3" price="90" />
                        <FoodItem name="Pizza" quantity="3" price="90" />
                        <FoodItem name="Pizza" quantity="3" price="90" />
                        <FoodItem name="Pizza" quantity="3" price="90" />
                    </div>
                    
                </div>
            )}
            <div className="fixed bottom-0 w-full z-10 p-2 px-3 bg-white">
                <CartSm toggle={toggleCart} />
                <CartLg toggle={toggleCart} />
            </div>
        </>
    );
};

export default CartContainer;