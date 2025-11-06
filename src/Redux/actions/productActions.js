import FakestoreApi from "../../apis/FakestoreApi";
import { actionTypes } from "../constants/action-type";

export const fetchProducts = () => async (dispatch) => {
  let response = await FakestoreApi.get("/products").catch((error) =>
    console.log(error)
  );

  dispatch({ type: actionTypes.FETCH_PRODUCT, payload: response?.data });
};

export const fetchSelectedProduct = (id) => async (dispatch) => {
  console.log("inres", id);
  let response = await FakestoreApi.get(`/products/${id}`).catch((error) =>
    console.log(error)
  );
  dispatch({
    type: actionTypes.FETCH_SELECTED_PRODUCT,
    payload: response?.data,
  });
};

export const setProducts = (products) => {
  return {
    type: actionTypes.SET_PRODUCTS,
    payload: products,
  };
};

export const selectedProduct = (product) => {
  return {
    type: actionTypes.SELECTED_PRODUCT,
    payload: product,
  };
};

export const removeSelectedProduct = (product) => {
  return {
    type: actionTypes.REMOVE_SELECTED_PRODUCT,
  };
};
