import React from 'react';

// components
import NutritionHeroCarousal from './NutririonHeroCarousal'
import NutritionCarousal from './NutritionCarousal';

const Nutrition = () => {
    return (
        <div>
            <NutritionHeroCarousal />
            <div className="my-4">
                <NutritionCarousal />
            </div>
            
        </div>
    );
};

export default Nutrition;
