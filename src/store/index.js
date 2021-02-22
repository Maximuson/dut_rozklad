import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import rootReducer from "./reducers/index";

const initialState = {};

// let middlewares = compose(applyMiddleware(thunk, logger));
let middlewares = compose(applyMiddleware(thunk));

const store = createStore(rootReducer, initialState, middlewares);

export default store;
