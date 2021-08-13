// Library
import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"

// Model
import {UserModel} from "../../Database/user";

const Router = express.Router();

/* 
    Route:          /signup
    Description:    Register New User
    Params:         none
    Access:         Public
    Method :        Post
*/
Router.post("/signup", async (req, res) => {
    try {

        await UserModel.findByEmailAndPhone(req.body.credentials);

        // save to database
        const newUser = await UserModel.create(req.body.credentials);

        // generate JWT auth token
        const token = newUser.generateJWTToken();

        // return 
        return res.status(200).json({token, status: "Success"});

    } catch (error) {
        return res.status(500).json({error: error.message});
    }
});

export default Router;