export const RECEIVE_ALL_ITEMS = "RECEIVE_ALL_ITEMS";
export const RECEIVE_ITEM = "RECEIVE_ITEM";

export const receiveAllItems = (item) => ({
    type: RECEIVE_ALL_ITEMS,
    item
});

export const receiveItem = (item) => ({
    type: RECEIVE_ITEM,
    item
});