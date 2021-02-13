import { combineReducers } from 'redux';
import itemsReducer from './items_reducer';
import cartReducer from './cart_reducer';

const RootReducer = combineReducers({
    items: itemsReducer,
    cart: cartReducer
});

export default RootReducer;