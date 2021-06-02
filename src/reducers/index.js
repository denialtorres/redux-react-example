import { combineReducers } from "redux";
import userReducer from "./users";

export default combineReducers({
  userReducer: userReducer,
  // OTHER reducers
});
