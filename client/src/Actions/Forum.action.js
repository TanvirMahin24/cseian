import axios from "axios";
import { toastr } from "react-redux-toastr";
import { CREATE_POST, GET_POST_LIST } from "../Constants/Types";
import { BASE_URL } from "../Constants/url";

// POST CREATE
export const postCreate = (values, img) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  };
  const data = new FormData();
  if (values.description) {
    data.append("postDescription", values.description);
  }
  if (img) {
    data.append("image", img);
  }

  try {
    const res = await axios.post(`${BASE_URL}/post`, data, config);

    //console.log(res.data);
    if (res.data.Response !== "Successfull") {
      toastr.error("Error", res.data.ResponseData);

      return false;
    }
    toastr.success("Success", "You have added a forum post!");
    dispatch({
      type: CREATE_POST,
    });
    dispatch(getPosts(""));
    return true;
  } catch (err) {
    console.log(err);
    toastr.error("Error", err.message);

    return false;
  }
};

// GET POST
export const getPosts = (text, page) => async (dispatch) => {
  try {
    const res = await axios.get(
      `${BASE_URL}/posts?searchText=${text ? text : ""}${
        page ? `&pageNumber=${page}` : ""
      }`
    );

    if (res.data.Response !== "Successfull") {
      toastr.error("Error", res.data.ResponseData);
      return false;
    }

    dispatch({
      type: GET_POST_LIST,
      payload: res.data.ResponseData,
    });
    return true;
  } catch (err) {
    return false;
  }
};
