import axios from 'axios'

//Redux types
import { GET_FOOD, GET_FOOD_LIST } from './Food.type'


export const getFood = (foodId)  => async (dispatch) => {
    try {
        const Food = await axios({
            method: "GET",
            url: `http://localhost:4000/food/${foodId}`
        })

        return dispatch({ type: GET_FOOD,  payload: Food.data})
    } catch (error) {
        return dispatch({ type: "ERROR", payload: error})
    }
}


export const getFoodList = (menuId)  => async (dispatch) => {
    try {
        const Menu = await axios({
            method: "GET",
            // url: `http://localhost:4000/menu/list/6160649258fcc030687ed244`
            url: `http://localhost:4000/menu/list/${menuId}`
        })

        return dispatch({ type: GET_FOOD_LIST, payload: Menu.data})
    } catch (error) {
        return dispatch({ type: "ERROR", payload: error})
    }
}