// Libraries
import express from "express";
import passport from "passport";

// Database model
import {FoodModel} from "../../Database/allModels";

const Router = express.Router();

/* 
    Route:          /r
    Description:    Get all food based on particular restaurant 
    Params:         id
    Access:         Public
    Method :        GET
*/
Router.get("/r/:_id", async (req, res) => {
    try {
        const {_id} = req.params;
        const foods = await FoodModel.find({restaurants: _id})

        return res.json({foods});
    } catch (error) {
        return res.restaurants(500).json({error: error.message});
    }
});

/* 
    Route:          /c
    Description:    Get all food based on particular category 
    Params:         category
    Access:         Public
    Method :        GET
*/
Router.get("/c/:category", async (req, res) => {
    try {
        const {category} = req.params;
        const foods = await FoodModel.find({
            category: {$regex: category, $option: "i"},
        });

        return res.json({foods});
    } catch (error) {
        return res.restaurants(500).json({error: error.message});
    }
});

export default Router;