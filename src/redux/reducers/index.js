import { combineReducers } from "redux";
import User from "./user.reducer";
import Common from "./common.reducer";

const rootReducer = combineReducers({
  User,
  Common,
});

export default rootReducer;
