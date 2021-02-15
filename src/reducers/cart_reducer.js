import { ADD_PRODUCT, REMOVE_PRODUCT, INCREASE_PRODUCT_QUANTITY, DECREASE_PRODUCT_QUANTITY } from '../actions/cart_actions';

const initialState = {
    products: []
};

const CartReducer = (state = initialState, action) => {
    Object.freeze(state);
    let nextState;
    let updatedItem;
    
    switch (action.type) {
        case ADD_PRODUCT:
            nextState = [...state.products];

            updatedItem = nextState.findIndex(item => item.name === action.payload.name);

            if (updatedItem < 0) {
                nextState.push({ ...action.payload, quantity: 1 });
            } else {
                const item = {
                    ...nextState[updatedItem]
                };

                item.quantity++;
                nextState[updatedItem] = item;
            }

            return { ...state, products: nextState };
        case REMOVE_PRODUCT:
            nextState = [...state.products];

            updatedItem = nextState.findIndex(
                item => item.name === action.payload.name
            );

            nextState.splice(updatedItem, 1);

            return { ...state, products: nextState };
        case INCREASE_PRODUCT_QUANTITY:
            return {
                ...state,
                productToChange: Object.assign({}, action.payload)
            };
        case DECREASE_PRODUCT_QUANTITY:
            return {
                ...state,
                productToChange: Object.assign({}, action.payload)
            };
        default:
            return state;
    }
}

export default CartReducer;