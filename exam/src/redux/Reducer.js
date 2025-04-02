import {
  CREATE_PRODUCT,
  DELETE_PRODUCT,
  GET_PRODUCTS,
  UPDATE_PRODUCT,
} from "./ActionType";

const intialState = {
  products: [],
};

const reducers = (state = intialState, { type, payload }) => {
  switch (type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: payload,
      };

    case CREATE_PRODUCT:
      return {
        ...state,
        products: [...state.products, payload],
      };

    case UPDATE_PRODUCT:
      return {
        ...state,
        products: state.products.map((ele) =>
          ele.id === payload.id ? payload : ele
        ),
      };

    case DELETE_PRODUCT:
      return {
        ...state,
        products: state.products.filter((ele) => ele.id !== payload),
      };

    default:
      return state;
  }
};

export default reducers;
