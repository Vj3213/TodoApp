import { combineReducers } from "redux";
import todoReducer from "./todoReducer";
import visibilityFilterReducer from "./visibilityFilter";

const rootReducer = combineReducers({
  todos: todoReducer,
  visibilityFilter: visibilityFilterReducer
});

export default rootReducer;
