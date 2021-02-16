import { ADD_PRODUCT, REMOVE_PRODUCT, INCREASE_PRODUCT_QUANTITY, DECREASE_PRODUCT_QUANTITY, CLEAR_CART } from '../actions/cart_actions';

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
            nextState = [...state.products];

            updatedItem = nextState.findIndex(
                item => item.name === action.payload.name
            );

            const incrementedItem = {
                ...nextState[updatedItem]
            };

            incrementedItem.quantity++;

            nextState[updatedItem] = incrementedItem;

            return { ...state, products: nextState };
            
        case DECREASE_PRODUCT_QUANTITY:
            nextState = [...state.products];

            updatedItem = nextState.findIndex(
                item => item.name === action.payload.name
            );

            const decrementedItem = {
                ...nextState[updatedItem]
            };

            decrementedItem.quantity--;

            nextState[updatedItem] = decrementedItem;

            return { ...state, products: nextState };
        case CLEAR_CART:
            return { products: [] };
        default:
            return state;
    }
}

export default CartReducer;