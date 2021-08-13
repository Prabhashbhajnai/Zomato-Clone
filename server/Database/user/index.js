import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"

const UserSchema = new mongoose.Schema(
    {
        fullname: {type: String, required: true},
        email: {type: String, required: true},
        password: {type: String},
        address: [{detail: {type: String}, for: {type: String}}],
        phoneNumber: [{type: Number}]
    },
    {
        timestamps: true,
    }
);

UserSchema.methods.generateJWTToken = function () {
    return jwt.sign({user: this._id.toString()}, "ZomatoApp");
};

UserSchema.statics.findByEmailAndPhone = async ({email, phoneNumber}) => {
     // Check if email exist
    const checkUserByEmail = await UserModel.findOne({email});
    const checkUserByPhone = await UserModel.findOne({phoneNumber});

    if (checkUserByEmail || checkUserByPhone) {
        throw new Error("User already exist!!");
    }

    return false;
};

UserSchema.pre("save", function(next) {
    const user = this;

    // Checking if password is modified
    if(!user.isModified("password")) return next();

    // generate bcrypt salt
    bcrypt.genSalt(8, (error, salt) => {
        if(error) return next(error);

        // hashing the password
        bcrypt.hash(user.password, salt, (error, hash) => {
            if (error) return next(error);

            //assigning the hashed password 
            user.password = hash;
            return next();
        });
    });
});

export const UserModel = mongoose.model("Users", UserSchema);