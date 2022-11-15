import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import {countReducer} from "./countReducer";
import { modalReducer } from "./modalReducer";
import thunk from "redux-thunk";

export const store =  createStore(combineReducers({
    CountState : countReducer,
    modalState : modalReducer
}), compose(applyMiddleware(thunk),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())  )