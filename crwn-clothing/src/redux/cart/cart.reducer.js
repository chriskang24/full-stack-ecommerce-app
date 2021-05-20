import CartActionTypes from './cart.types';

const INITIAL_STATE = {
  hidden: true,
  cartItems: []
}

const cartReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      }

    case CartActionTypes.ADD_ITEM:
      // L20: spread in all existing array values + additional values at end on click
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload]
      }
  
    default:
      return state;
  }
}

export default cartReducer;