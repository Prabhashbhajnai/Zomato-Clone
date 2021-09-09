import React from 'react';
import classnames from 'classnames';

const InfoButtons = (props) => {
    return (
        <>
            <button 
                className={classnames(
                    "flex items-center bg-white px-3 py-2 rounded-lg border hover:bg-gray-100",
                    {
                        "bg-white": props.isActive,
                    }
                )}
            >
                {props.children}
            </button>           
        </>
    );
};

export default InfoButtons;

/* "flex items-center bg-zomato-400 text-white px-3 py-2 rounded-lg" */