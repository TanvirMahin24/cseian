import axios from "axios";
import { toastr } from "react-redux-toastr";
import {
  CLOSE_MODAL,
  GET_PROFILE,
  GET_SEARCH_RESULT_DIRECTORY,
} from "../Constants/Types";
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

export const getProfile = (id) => async (dispatch) => {
  //console.log("Token login");

  try {
    const res = await axios.get(`${BASE_URL}/profileInfo?studentId=${id}`);
    console.log(res);

    if (res.data.Response === "Successfull") {
      dispatch({
        type: GET_PROFILE,
        payload: res.data.ResponseData,
      });
      return true;
    }
  } catch (err) {
    console.log(err);
    return false;
  }
};

export const closeModal = () => (dispatch) => {
  dispatch({
    type: CLOSE_MODAL,
  });
};
