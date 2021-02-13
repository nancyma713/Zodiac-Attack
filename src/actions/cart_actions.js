export const LOAD_CART = 'LOAD_CART';
export const ADD_PRODUCT = 'ADD_PRODUCT';
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT';
export const CHANGE_PRODUCT_QUANTITY = 'CHANGE_PRODUCT_QUANTITY';

export const loadCart = products => ({
    type: LOAD_CART,
    payload: products
});
export const addProduct = product => ({
    type: ADD_PRODUCT,
    payload: product
});
export const removeProduct = product => ({
    type: REMOVE_PRODUCT,
    payload: product
});
export const changeProductQuantity = product => ({
    type: CHANGE_PRODUCT_QUANTITY,
    payload: product
});