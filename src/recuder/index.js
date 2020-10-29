import { combineReducers } from "redux";
import { propertyReducer } from "./dataTransfer";
export let rootReducer = combineReducers({
  property: propertyReducer,
});
