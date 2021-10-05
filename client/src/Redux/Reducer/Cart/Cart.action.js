import axios from 'axios';

//Redux types
import { GET_CART, ADD_CART, DELETE_CART, INCREMENT_QTY, DECREMENT_QTY } from './Cart.type';

export const getCart = ()  => async (dispatch) => {
    try {
        let cartData = { cart: [] };

        if(localStorage.getItem){
            cartData.cart = JSON.parse(localStorage.getItem("zomatoCart"));
        }

        return dispatch({ type: GET_CART,  payload: cartData.cart });
    } catch (error) {
        return dispatch({ type: "ERROR", payload: error})
    }
};

export const addCart = (newFood) => async (dispatch) => {
    try {
        let cartData = { cart: [] };

        if(localStorage.getItem){
            cartData.cart = JSON.parse(localStorage.getItem("zomatoCart"));
        }

        cartData.cart.push(newFood);

        localStorage.setItem("zomatoCart", JSON.stringify({cart: cartData.cart}))

        return dispatch({ type: ADD_CART,  payload: cartData.cart });
    } catch (error) {
        return dispatch({ type: "ERROR", payload: error})
    }
}

export const DeleteCart = (foodId) => async (dispatch) => {
    try {
        let cartData = { cart: [] };

        if(localStorage.getItem){
            cartData.cart = JSON.parse(localStorage.getItem("zomatoCart"));
        }

        if(!cartData.cart.length){
            return dispatch({ type: "ERROR", payload: "Cart is Empty"});
        }

        cartData.cart = cartData.cart.filter(({_id}) => _id !== foodId);

        localStorage.setItem("zomatoCart", JSON.stringify({cart: cartData.cart}))

        return dispatch({ type: DELETE_CART,  payload: cartData.cart });
    } catch (error) {
        return dispatch({ type: "ERROR", payload: error})
    }
}

export const IncQty = (foodId) => async (dispatch) => {
    try {
        let cartData = { cart: [] };

        if(localStorage.getItem){
            cartData.cart = JSON.parse(localStorage.getItem("zomatoCart"));
        }

        if(!cartData.cart.length){
            return dispatch({ type: "ERROR", payload: "Cart is Empty"});
        }

        cartData.cart = cartData.cart.map((food) => 
            food._id !== foodId ? { ...food, quantity: food.quantity + 1 } : food
        );

        localStorage.setItem("zomatoCart", JSON.stringify({cart: cartData.cart}))

        return dispatch({ type: INCREMENT_QTY,  payload: cartData.cart });
    } catch (error) {
        return dispatch({ type: "ERROR", payload: error})
    }
}

export const DecQty = (foodId) => async (dispatch) => {
    try {
        let cartData = { cart: [] };

        if(localStorage.getItem){
            cartData.cart = JSON.parse(localStorage.getItem("zomatoCart"));
        }

        if(!cartData.cart.length){
            return dispatch({ type: "ERROR", payload: "Cart is Empty"});
        }

        cartData.cart = cartData.cart.map((food) => 
            food._id !== foodId ? { ...food, quantity: food.quantity - 1 } : food
        );

        localStorage.setItem("zomatoCart", JSON.stringify({cart: cartData.cart}))

        return dispatch({ type: DECREMENT_QTY,  payload: cartData.cart });
    } catch (error) {
        return dispatch({ type: "ERROR", payload: error})
    }
}