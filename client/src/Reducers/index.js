import { combineReducers } from "redux";
import { Pages } from "./Pages";
import { reducer as toastrReducer } from "react-redux-toastr";
import auth from "./auth";
import directory from "./directory";
import job from "./job";

const reducers = combineReducers({
  pages: Pages,
  toastr: toastrReducer,
  auth,
  directory,
  job,
});
export default reducers;
