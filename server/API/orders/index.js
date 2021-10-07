// Libraries
import express from "express";
import passport from "passport";

// Database modal
import { OrderModel } from "../../Database/allModels";

// validation
import { ValidateUserId, ValidateOrderDetails } from "../../Validation/order";

const Router = express.Router();

/*
Route     /
Des       Get all orders based on id
Params    none
Access    Public
Method    GET  
*/
Router.get("/:_id", passport.authenticate("jwt", {session: false}), async (req, res) => {
    try {
        await ValidateUserId(req.params);

        const {_id} = req.params;

        const getOrders = await OrderModel.findOne({user: _id});

        if(!getOrders){
            return res.status(500).json({error: "User not found"});
        }

        return res.status(200).json({orders: getOrders});
    } catch (error) {
        return res.status(500).json({error: error.message});
    }
})

/*
Route     /new
Des       Add new order
Params    _id
Access    Public
Method    POST  
*/
Router.post("/new", passport.authenticate("jwt"), async (req, res) => {
    try {
        await ValidateUserId(req.params);
        await ValidateOrderDetails(req.body);

        const {_id} = req.session.passport.user._doc;
        const {orderDetails} = req.body;

        const addNewOrder = await OrderModel.findOneAndUpdate(
            {
            user: _id,
            },
            {
                $push: {orderDetails},
            },
            {new: true},
        );

        return res.json({order: addNewOrder})
    } catch (error) {
        return res.status(500).json({error: error.message});
    }
});


export default Router;