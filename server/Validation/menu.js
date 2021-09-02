import joi from "joi";

export const ValidateMenuId=(foodId)=>{
    const Schema = joi.object({
        items:joi.string()
    });
    return Schema.validateAsync(foodId);
};

export const ValidateImageId =(imgId)=>{
    const Schema = joi.object({
        _id:joi.string()
    });
    return Schema.validateAsync(imgId);
};