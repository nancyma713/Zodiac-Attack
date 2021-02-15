export const ADD_PRODUCT = 'ADD_PRODUCT';
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT';
export const INCREASE_PRODUCT_QUANTITY = 'INCREASE_PRODUCT_QUANTITY';
export const DECREASE_PRODUCT_QUANTITY = 'DECREASE_PRODUCT_QUANTITY'

export const addProduct = (product) => ({
    type: ADD_PRODUCT,
    payload: product
});

export const removeProduct = (product) => ({
    type: REMOVE_PRODUCT,
    payload: product
});

export const increaseProductQuantity = (product) => ({
    type: INCREASE_PRODUCT_QUANTITY,
    payload: product
});

export const decreaseProductQuantity = (product) => ({
    type: DECREASE_PRODUCT_QUANTITY,
    payload: product
});