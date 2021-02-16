import { RECEIVE_ALL_ITEMS, RECEIVE_ITEM } from '../actions/item_actions';
import { ADD_PRODUCT, REMOVE_PRODUCT, INCREASE_PRODUCT_QUANTITY, DECREASE_PRODUCT_QUANTITY } from '../actions/cart_actions';

const ItemsReducer = (state = [], action) => {
    Object.freeze(state);
    let nextState = Object.assign([], state);
    let updatedItem;

    switch (action.type) {
        case RECEIVE_ALL_ITEMS:
            return action.items;
        case RECEIVE_ITEM:
            nextState[action.item] = action.item;
            return nextState;
        case REMOVE_PRODUCT:
            updatedItem = action.payload.name.toLowerCase();
            
            const incrementedItem = {
                ...nextState[updatedItem]
            };

            incrementedItem.inventory += action.payload.quantity;

            nextState[updatedItem] = incrementedItem;

            return nextState;
        case DECREASE_PRODUCT_QUANTITY:
            updatedItem = action.payload.name.toLowerCase();

            const incrementedItm = {
                ...nextState[updatedItem]
            };

            incrementedItm.inventory++;

            nextState[updatedItem] = incrementedItm;

            return nextState;
        case ADD_PRODUCT:
            updatedItem = action.payload.name.toLowerCase();

            const decrementedItem = {
                ...nextState[updatedItem]
            };

            decrementedItem.inventory--;

            nextState[updatedItem] = decrementedItem;

            return nextState;
        case INCREASE_PRODUCT_QUANTITY:
            updatedItem = action.payload.name.toLowerCase();

            const decrementedItm = {
                ...nextState[updatedItem]
            };

            decrementedItm.inventory--;

            nextState[updatedItem] = decrementedItm;

            return nextState;
        default:
            return state;
    }
}

export default ItemsReducer;