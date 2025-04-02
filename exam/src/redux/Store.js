import { applyMiddleware, legacy_createStore } from "redux";
import reducers from "./Reducer";
import { thunk } from "redux-thunk";

const store = legacy_createStore(reducers, applyMiddleware(thunk));

export default store;
