import API from "../config/API";
import {
  CREATE_PRODUCT,
  DELETE_PRODUCT,
  GET_PRODUCTS,
  UPDATE_PRODUCT,
} from "./ActionType";

const methodAPI = {
  get: () => async (dispatch) => {
    const { data } = await API.get("/products");
    dispatch(getProducts(data));
  },
  post: (data) => async (dispatch) => {
    const { data: newProduct } = await API.post("/products", data);
    dispatch(createProduct(newProduct));
  },
  patch: (data) => async (dispatch) => {
    const { data: updatedProduct } = await API.patch(
      `/products/${data.id}`,
      data
    );
    dispatch(updateProduct(updatedProduct.id));
  },
  delete: (id) => async (dispatch) => {
    await API.delete(`/products/${id}`);
    dispatch(deleteProduct(id));
  },
};

const getProducts = (payload) => ({
  type: GET_PRODUCTS,
  payload,
});

const createProduct = (payload) => ({
  type: CREATE_PRODUCT,
  payload,
});

const updateProduct = (id, data) => ({
  type: UPDATE_PRODUCT,
  payload: { id, data },
});

const deleteProduct = (id) => ({
  type: DELETE_PRODUCT,
  payload: id,
});

export default methodAPI;
