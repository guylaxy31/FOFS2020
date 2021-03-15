// import {
//     ADD_TO_CART,
//     REMOVE_FROM_CART,
//     CLEAR_CART
// } from "../constant";


export const addToCart = (payload) => {
    return {
        type: 'ADD_TO_CART',
        payload
    }
}
export const removeFromCart = (paylaod) => {
    return {
        type: 'REMOVE_FROM_CART',
        paylaod
    }
}
export const clearCart = () => {
    return 'CLEAR_CART'

}