import { combineReducers } from "redux";
import { Pages } from "./Pages";
import { reducer as toastrReducer } from "react-redux-toastr";
import auth from "./auth";

const reducers = combineReducers({
  pages: Pages,
  toastr: toastrReducer,
  auth,
});
export default reducers;
