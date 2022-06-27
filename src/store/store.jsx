import {createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import combineReducers from "./Reducer/compineReducers";


export const store = createStore( combineReducers , composeWithDevTools());