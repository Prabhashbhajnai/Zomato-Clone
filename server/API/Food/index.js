// Libraries
import express from "express";
import passport from "passport";

// Database model
import {FoodModel} from "../../Database/allModels";

const Router = express.Router();

/* 
    Route:          /
    Description:    Get all the restaurant details based inn city
    Params:         none
    Access:         Public
    Method :        GET
*/