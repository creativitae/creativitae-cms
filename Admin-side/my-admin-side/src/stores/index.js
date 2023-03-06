import {
    legacy_createStore as createStore,
    applyMiddleware,
    combineReducers,
  } from "redux";

import thunk from 'redux-thunk'
import templateReducer from "./reduces/templateReduces";
const combinedReducers = combineReducers({
    template : templateReducer
})
const store = createStore(combinedReducers,applyMiddleware(thunk))

export default store