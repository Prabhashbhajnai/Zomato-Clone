import React from 'react';

const PhotoCollection = (props) => {
    return (
        <>
            <div className="w-32 h-32 md:w-56 flex flex-col h-56" onClick={props.openViewer}>
                <div className="w-full h-full overflow-hidden rounded-lg">
                    <img
                        src={props.image}
                        alt="menu"
                        className="w-full h-full rounded-lg transform transition duration-400 hover:scale-110"
                    />
                </div>
            </div>
        </>
    );
};

export default PhotoCollection;