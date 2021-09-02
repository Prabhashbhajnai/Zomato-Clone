import joi from "joi";


export const ValidateUpdatedUserDetails = (userData)=>{
    const Schema = joi.object({
        fullname: joi.string().min(6),
        email: joi.string().email(),
        password: joi.string().min(5),
        address: joi.array().items(joi.object({detail:joi.string(),for:joi.string()})),
        phoneNumber: joi.number()
    });
    return Schema.validateAsync(userData);
};