import { ADD_TO_CART, GET_NUMBERS_BASKET } from './types';

export const addToCart = (product) => {
    return async dispatch => {
        await dispatch({
            type: ADD_TO_CART,
            payload: product
        });
    }
}

export const getCartNumbers = () => {
    return (dispatch) => {
        dispatch({
            type: GET_NUMBERS_BASKET
        })
    }
}