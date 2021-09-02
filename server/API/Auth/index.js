// Library
import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import passport from "passport";

// Model
import {UserModel} from "../../Database/user";

// validation
import { ValidateSignup, ValidateSignin } from "../../Validation/auth";

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
        await ValidateSignup(req.body.credentials);

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

/* 
    Route:          /signin
    Description:    Signin with email and password
    Params:         none
    Access:         Public
    Method :        Post
*/
Router.post("/signin", async (req, res) => {
    try {
        await ValidateSignin(req.body.credentials);

        const user = await UserModel.findByEmailAndPassword(req.body.credentials);

        const token = user.generateJWTToken();

        return res.status(200).json({token, status: "Success"});

    } catch (error) {
        return res.status(500).json({error: error.message});
    }
});

/* 
    Route:          /google
    Description:    Goole Signin
    Params:         none
    Access:         Public
    Method :        GET
*/
Router.get("/google", passport.authenticate("google", {
        scope: [
            "https://www.googleapis.com/auth/userinfo.profile",
            "https://www.googleapis.com/auth/userinfo.email",
        ],
    })
);

/* 
    Route:          /google/callback
    Description:    Goole Signin Callback
    Params:         none
    Access:         Public
    Method :        GET
*/
Router.get("/google/callback", 
    passport.authenticate("google", {failureRedirect: "/"}),
    (req, res) => {
        return res.json({token: req.session.passport.user.token});
    }
);

export default Router;