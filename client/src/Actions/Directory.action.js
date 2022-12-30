import axios from "axios";
import { toastr } from "react-redux-toastr";
import { GET_SEARCH_RESULT_DIRECTORY } from "../Constants/Types";
import { BASE_URL } from "../Constants/url";

//Sign up
export const searchDirectory = (text) => async (dispatch) => {
  try {
    const res = await axios.get(`${BASE_URL}/users?searchText=${text}`);

    if (res.data.Response !== "Successfull") {
      toastr.error("Error", res.data.ResponseData);
      return false;
    }
    dispatch({
      type: GET_SEARCH_RESULT_DIRECTORY,
      payload: res.data.ResponseData,
    });
    console.log(res.data);
    return true;
  } catch (err) {
    return false;
  }
};
