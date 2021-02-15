import * as ItemUtil from '../utils/item_util';

export const RECEIVE_ALL_ITEMS = "RECEIVE_ALL_ITEMS";
export const RECEIVE_ITEM = "RECEIVE_ITEM";

const receiveAllItems = (items) => ({
    type: RECEIVE_ALL_ITEMS,
    items
});

const receiveItem = (item) => ({
    type: RECEIVE_ITEM,
    item
});

export const fetchAllItems = () => dispatch => (
    dispatch(receiveAllItems(ItemUtil.fetchAllItems()))
);

export const fetchItem = (item) => dispatch => (
    ItemUtil.fetchItem(item)
        .then((item) => dispatch(receiveItem(item)))
);