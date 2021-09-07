import React from 'react';

// components
import RestaurantNavbar from '../Components/Navbar/restaurantNavbar';
import ImageGrid from '../Components/Restaurant/ImageGrid';

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
            </div>

        </>
    );
};


export default RestaurantLayout;
