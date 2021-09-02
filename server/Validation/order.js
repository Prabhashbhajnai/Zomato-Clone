import joi from "joi";

export const ValidateUserId =(userId)=>{
    const Schema = joi.object({
        user:joi.string(),
    });
    return Schema.validateAsync(userId);
};

export const ValidateOrderDetails =(orderdetails)=>{
    const Schema =joi.object({
        user:joi.string(),
        orderDetails:joi.array().items(joi.object({
            food:joi.string(),
            quantity:joi.number().precision(0).required(),
            paymode:joi.string().required(),
            status:joi.string(),
            paymentDetails:{
                itemTotal:joi.number().required(),
                promo:joi.number().required(),
                tax:joi.number().required()
            }
        }))
        
    });
    return Schema.validateAsync(orderdetails);
};