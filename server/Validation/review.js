import joi from "joi";

export const ValidateReview = (revdata) => {
    const Schema = joi.object({
        food: joi.string(),
        restaurant: joi.string(),
        user: joi.string(),
        rating: joi.number().precision(0).required(),
        reviewText: joi.string().required(),
        isRestaurantReview: joi.boolean(),
        isFoodReview: joi.boolean(),
        photos: joi.array().items(joi.string())
    });
    return Schema.validateAsync(revdata);
};

export const ValidateReviewId = (revId) => {
    const Schema = joi.object({
        _id: joi.string().required()
    });
    return Schema.validateAsync(revId);
};