import React from 'react';
import classnames from 'classnames';

const ReviewButtons = (props) => {
    return (
        <>
            <button 
                className={classnames(
                    "flex items-center text-white px-3 py-2 rounded-lg hover:bg-zomato-300",
                    {
                        "bg-zomato-400": props.isActive,
                    }
                )}
            >
                {props.children}
            </button>           
        </>
    );
};

export default ReviewButtons;