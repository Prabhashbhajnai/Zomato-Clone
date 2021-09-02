// Libraries
import express from "express";
import passport from "passport";

// Database modal
import { UserModel } from "../../Database/allModels";
import { ValidateUserId } from "../../Validation/order";

// validation
import { ValidateUserId } from "../../Validation/order";
import { ValidateUpdatedUserDetails } from "../../Validation/user";

const Router = express.Router();

/*
Route     /:_id
Des       Get User data
Params    _id
Body      none
Access    Public
Method    GET  
*/
Router.get("/:_id", async(req, res) => {
    try {
        await ValidateUserId(req.params);

        const {_id} = req.params;
        const getUser = await UserModel.findById(_id);

        return res.json({user: getUser});
    } catch (error) {
        return res.status(500).json({error: error.message});
    }
});

/*
Route     /update/:_id
Des       Update User id
Params    _id
Body      user data
Access    Public
Method    PUT  
*/
Router.put("/update/:_id", async(req, res) => {
    try {
        await ValidateUserId(req.params);
        await ValidateUpdatedUserDetails(req.body);

        const{_id} = req.params;
        const {userData} = req.body;
        const updateUserData = await UserModel.findByIdAndUpdate(_id,
            {
                $set: userData,
            },
            {new: true}
        );

        return res.json({user: updateUserData});
    } catch (error) {
        return res.status(500).json({error: error.message});
    }
});

export default Router