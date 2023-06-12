import { combineReducers } from "redux";
import myReducer from "./Reducer";
import apiReducer from "./apiReducer";

const rootReducer = combineReducers({
    myReducer,
    apiReducer
})

export default rootReducer;