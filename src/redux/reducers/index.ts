import { combineReducers } from "redux";
import counterReducer from "./country.reducer";
import todoReducer from "./jsonplaceholder.reducer";

const rootReducer = combineReducers({
  counter: counterReducer,
  todos: todoReducer,
});
export default rootReducer;
