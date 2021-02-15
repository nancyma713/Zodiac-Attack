import Inventory from '../data';

export const fetchAllItems = () => {
    return Inventory;
}

export const fetchItem = (item) => {
    return Inventory[item];
}