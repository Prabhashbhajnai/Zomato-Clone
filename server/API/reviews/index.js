// Libraries
import express from "express";
import passport from "passport";

// Database modal
import { ReviewModel } from "../../Database/allModels";

// validation
import { ValidateReview, ValidateReviewId } from "../../Validation/review";

const Router = express.Router();

/*
Route     /
Des       Get all reviews
Params    resid
Body      review object
Access    Public
Method    GET  
*/
Router.get("/:resid", async(req, res) => {
    try {
        const reviews = await ReviewModel.find({restaurant: req.params.resid})

        return res.json({reviews});

    } catch (error) {
        return res.status(500).json({error: error.message});        
    }
});

/*
Route     /new
Des       Add new food review/ rating
Params    none
Body      review object
Access    Public
Method    POST  
*/
Router.post("/new", passport.authenticate("jwt"), async(req, res) => {
    try {
        //await ValidateReview(req.body);

        const { _id } =
        req.session.passport.user._doc;

        const {reviewData} = req.body;

        await ReviewModel.create({...reviewData, user: _id});

        return res.json({review: "Sucessfully Created Review."});

    } catch (error) {
        return res.status(500).json({error: error.message});        
    }
});

/*
Route     /deleting/:_id
Des       Add new food review/ rating
Params    _id
Body      none
Access    Public
Method    DELETE  
*/
Router.delete("/delete/:_id", async(req, res) => {
    try {
        await ValidateReviewId(req.params);

        const {_id} = req.params;

        await ReviewModel.findByIdAndDelete(_id);

        return res.status(200).json({review: "Sucessfully Deleted the Review."})
    } catch (error) {
        return res.status(500).json({error: error.message});
    }
});


export default Router;