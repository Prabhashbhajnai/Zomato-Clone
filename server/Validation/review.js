import joi from "joi";

export const ValidateReview = (reviewdata) => {
    const Schema = joi.object({
        food: joi.string(),
        restaurant: joi.string(),
        user: joi.string(),
        rating: joi.number().required(),
        reviewText: joi.string().required(),
        isRestaurantReview: joi.boolean(),
        isFoodReview: joi.boolean(),
        photos: joi.array().items(joi.string())
    });
    return Schema.validateAsync(reviewdata);
};

export const ValidateReviewId = (_id) => {
    const Schema = joi.object({
        _id: joi.string().required()
    });
    return Schema.validateAsync(_id);
};