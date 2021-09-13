import React from 'react'

// components
import FloatMenuButton from '../../Components/Restaurant/Order-Online/FloatMenuButton';
import MenuListContainer from '../../Components/Restaurant/Order-Online/MenuListContainer';

const OrderOnline = () => {
    return (
        <>
            <div className="w-full">
                <aside className="hidden md:flex flex-col gap-3 border-r-2 overflow-y-scroll border-gray-200 h-screen w-64">
                    <MenuListContainer />
                    <MenuListContainer />
                    <MenuListContainer />
                    <MenuListContainer />
                </aside>
                <div className="w-full md:w-4/6"></div>
            </div>
            <FloatMenuButton />
        </>
    );
};

export default OrderOnline;
