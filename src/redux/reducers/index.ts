import { combineReducers } from "redux";
import counterReducer from "./country.reducer";

const rootReducer = combineReducers({
  counter: counterReducer,
});
export default rootReducer;
