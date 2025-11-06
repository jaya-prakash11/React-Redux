import { actionTypes } from "../constants/action-type";

const initialState = {
  products: [],
};

export const productReducer = (state = initialState, action) => {
  switch (action?.type) {
    case actionTypes.SET_PRODUCTS:
      return { ...state, products: action?.payload }; // Update products with payload
    default:
      return state;
  }
};

export const selectedProductReducer = (state = initialState, action) => {
  let payload = action.payload;
  switch (action?.type) {
    case actionTypes.SELECTED_PRODUCT:
      return { ...state, ...payload }; // Update products with payload

    case actionTypes.REMOVE_SELECTED_PRODUCT:
      return {}; // removes the product
    default:
      return state;
  }
};
