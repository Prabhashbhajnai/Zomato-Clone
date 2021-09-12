import React, {useState} from 'react';
import {HiMenu} from 'react-icons/hi';
import {MdClose} from 'react-icons/md';

// component
import MenuListContainer from './MenuListContainer';

const FloatMenuButton = () => {

    const [isClicked, setIsClicked] = useState(false);

    const toggleMenu = () => setIsClicked((prev) => !prev);

    return (
        <>
            <div className="fixed z-30 w-8/12 flex flex-col items-end gap-3 bottom-2 right-2 md:hidden">
                {isClicked && (
                    <div className="p-3 bg-white h-48 overflow-y-scroll">
                        <MenuListContainer />
                    </div>
                )}
                <button 
                    onClick={toggleMenu}
                    className="flex items-center gap-1 text-white bg-black px-3 py-1 rounded-full md:hidden"
                >
                    {isClicked ? <MdClose /> : <HiMenu />} Menu
                </button>
            </div>
        </>
    );
};

export default FloatMenuButton;