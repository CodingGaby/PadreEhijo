import { loginFailure, loginStart, loginSuccess } from "./userRedux";
import { publicRequest, userRequest } from "../requestMethods";
import {
  getProductFailure,
  getProductStart,
  getProductSuccess,
  deleteProductFailure,
  deleteProductStart,
  deleteProductSuccess,
  updateProductFailure,
  updateProductStart,
  updateProductSuccess,
  addProductFailure,
  addProductStart,
  addProductSuccess,
} from "./productRedux";
import {
  getSliderFailure,
  getSliderStart,
  getSliderSuccess,
  updateSliderFailure,
  updateSliderStart,
  updateSliderSuccess,
  addSliderFailure,
  addSliderStart,
  addSliderSuccess,
} from "./sliderRedux";
import {
  getUserStart,
  getUserSuccess,
  getUserFailure,
  deleteUserStart,
  deleteUserSuccess,
  deleteUserFailure,
} from "./usersRedux";
import { 
  getOrderFailure, 
  getOrderStart, 
  getOrderSuccess,
  deleteOrderStart,
  deleteOrderSuccess,
  deleteOrderFailure, 
} from "./orderRedux";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};

export const getProducts = async (dispatch) => {
  dispatch(getProductStart());
  try {
    const res = await publicRequest.get("/products");
    dispatch(getProductSuccess(res.data));
  } catch (err) {
    dispatch(getProductFailure());
  }
};

export const getSliders = async (dispatch) => {
  dispatch(getSliderStart());
  try {
    const res = await publicRequest.get("/sliders");
    dispatch(getSliderSuccess(res.data));
  } catch (err) {
    dispatch(getSliderFailure());
  }
};

export const getUsers = async (dispatch) => {
  dispatch(getUserStart());
  try {
    const res = await publicRequest.get("/users");
    dispatch(getUserSuccess(res.data));
  } catch (err) {
    dispatch(getUserFailure());
  }
};

export const getOrders = async (dispatch) => {
  dispatch(getOrderStart());
  try {
    const res = await publicRequest.get("/orders");
    dispatch(getOrderSuccess(res.data));
  } catch (err) {
    dispatch(getOrderFailure());
  }
};

export const deleteProduct = async (id, dispatch) => {
  dispatch(deleteProductStart());
  try {
    const res = await userRequest.delete(`/products/${id}`);
    dispatch(deleteProductSuccess(res.id));
  } catch (err) {
    dispatch(deleteProductFailure());
  }
};

export const deleteUser = async (id, dispatch) => {
  dispatch(deleteUserStart());
  try {
    const res = await userRequest.delete(`/users/${id}`);
    dispatch(deleteUserSuccess(res.id));
  } catch (err) {
    dispatch(deleteUserFailure());
  }
};

export const deleteOrder = async (id, dispatch) => {
  dispatch(deleteOrderStart());
  try {
    const res = await userRequest.delete(`/orders/${id}`);
    dispatch(deleteOrderSuccess(res.id));
  } catch (err) {
    dispatch(deleteOrderFailure());
  }
};

export const updateProduct = async (id, product, dispatch) => {
  dispatch(updateProductStart());
  try {
    // update
    const res = await userRequest.put(`/products/${id}`, product);
    dispatch(updateProductSuccess(res.product, res.id));
  } catch (err) {
    dispatch(updateProductFailure());
  }
};

export const updateSlider = async (id, slider, dispatch) => {
  dispatch(updateSliderStart());
  try {
    // update
    const res = await userRequest.put(`/sliders/${id}`, slider);
    dispatch(updateSliderSuccess(res.slider, res.id));
  } catch (err) {
    dispatch(updateSliderFailure());
  }
};

export const addProduct = async (product, dispatch) => {
  dispatch(addProductStart());
  try {
    const res = await userRequest.post(`/products`, product);
    dispatch(addProductSuccess(res.data));
  } catch (err) {
    dispatch(addProductFailure());
  }
};

export const addSlider = async (slider, dispatch) => {
  dispatch(addSliderStart());
  try {
    const res = await userRequest.post(`/sliders`, slider);
    dispatch(addSliderSuccess(res.data));
  } catch (err) {
    dispatch(addSliderFailure());
  }
};