import { SIGN_IN, SIGN_UP, GOOGLE_Auth } from "./Auth.type";

const INITIAL_STATE = {};

const AuthReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SIGN_IN: 
            return {
                ...state,
            };

        case SIGN_UP: 
            return {
                ...state,
            };
            
        default:
            return {
                ...state,
            };
    }
};

export default FoodReducer;