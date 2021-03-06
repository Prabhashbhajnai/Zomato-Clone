// Libraries
import express from "express";
import passport from "passport";

// Database model
import {FoodModel} from "../../Database/allModels";

// validation
import { ValidateRestaurantID, Validatecategory } from "../../Validation/food";

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

        await ValidateRestaurantID(req.params);

        const {_id} = req.params;
        const foods = await FoodModel.find({restaurants: _id})

        return res.json({foods});
    } catch (error) {
        return res.status(500).json({error: error.message});
    }
});

/* 
    Route:          /:_id
    Description:    Get food based on id 
    Params:         id
    Access:         Public
    Method :        GET
*/
Router.get("/:_id", async (req, res) => {
    try {
        const {_id} = req.params;
        const foods = await FoodModel.findById(_id)

        return res.json({foods});
    } catch (error) {
        return res.status(500).json({error: error.message});
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
        await Validatecategory(req.params);

        const {category} = req.params;
        const foods = await FoodModel.find({
            category: {$regex: category, $option: "i"},
        });

        return res.json({foods});
    } catch (error) {
        return res.status(500).json({error: error.message});
    }
});

/* 
    Route:          /new
    Description:    Post food
    Params:         none
    Access:         Private
    Method :        POST
*/
Router.post("/new", passport.authenticate("jwt"), async (req, res) => {
    try {
      const { foodData } = req.body;
      const newFood = await FoodModel.create(foodData);
      return res.json({ foods: newFood });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  });

export default Router;