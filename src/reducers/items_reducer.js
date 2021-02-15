import { RECEIVE_ALL_ITEMS, RECEIVE_ITEM } from '../actions/item_actions';

const ItemsReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_ALL_ITEMS:
            return action.items;
        case RECEIVE_ITEM:
            nextState[action.item] = action.item;
            return nextState;
        default:
            return state;
    }
}

export default ItemsReducer;