import { createStore, combineReducers } from "redux";

export default createStore(combineReducers(require("./reducers")));
