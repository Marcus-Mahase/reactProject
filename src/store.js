import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
import { createStore, applyMiddleware } from "redux";
import { SignUpReducer } from "./reducers/SignUpReducer";

const middleware = [thunk, createLogger()];
const store = createStore(SignUpReducer, applyMiddleware(...middleware));

export default store;