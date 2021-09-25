// Libraries
import express from "express";
import passport from "passport";

// Database model
import {RestaurantModel} from "../../Database/allModels";

// validation
import { ValidateRestaurantCity, ValidateRestaurantSearchString } from "../../Validation/restaurant";
import { ValidateRestaurantID } from "../../Validation/food";
const Router = express.Router();

/* 
    Route:          /
    Description:    Get all the restaurant details based inn city
    Params:         none
    Access:         Public
    Method :        GET
*/
Router.get("/", async (req, res) => {
    try{
        await ValidateRestaurantCity(req.query);

        const {city} = req.query;
        const restaurants = await RestaurantModel.find({city});

        return res.json({restaurants});
    } catch (error) {
        return res.status(500).json({error:error.message});
    }
});

/* 
    Route:          /
    Description:    Get individual restaurant details based on id
    Params:         id
    Access:         Public
    Method :        GET
*/
Router.get("/:_id", async (req, res) => {
    try {
        await ValidateRestaurantID(req.params);

        const {_id} = req.params;
        const restaurant = await RestaurantModel.findById(_id);
        if (!restaurant) 
            return res.status(404).json({error: "Restaurant not Found!!"});     
        return res.json({restaurant});
    }catch (error) {
        return res.status(500).json({error: error.message});     
    }
});

/* 
    Route:          /search
    Description:    Get restaurant details based on search string
    Params:         none
    Body:           searchString
    Access:         Public
    Method :        GET
*/
Router.get("/search", async (req, res) => {
    try {
        await ValidateRestaurantSearchString(req.body);

        const {searchString} = req.body;

        const restaurant = await RestaurantModel.find({
            name: {$regex: searchString, $options: "i"},});
        
            if (!restaurant) 
            return res.status(404).json({error: `No Restaurant matched with ${searchString}`});     
        
            return res.json({restaurant});
    }catch (error) {
        return res.status(500).json({error: error.message});     
    }
});

export default Router;