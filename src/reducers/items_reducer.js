//import actions

const ItemsReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);
    switch (action.type) {
        default:
            return nextState;
    }
}

export default ItemsReducer;