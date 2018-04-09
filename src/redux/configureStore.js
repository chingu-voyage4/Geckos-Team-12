/* eslint-disable no-underscore-dangle */
import { createStore, applyMiddleware, combineReducers } from "redux";

// Middleware
import thunk from "redux-thunk";

import crops from "./Crops";
import auth from "./Auth";
import crop from "./Crop";

const reducer = combineReducers({
  auth,
  crops,
  crop
});

const rootReducer = (state, action) => {
  return reducer(state, action);
};

const store = () =>
  createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk)
  );

export default store;
