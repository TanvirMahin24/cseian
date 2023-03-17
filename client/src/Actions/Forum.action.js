import axios from "axios";
import { toastr } from "react-redux-toastr";
import {
  CREATE_POST,
  GET_POST_LIST,
  GET_POST_DETAILS,
  GET_COMMENT,
  DELETE_COMMENT,
  CREATE_COMMENT,
} from "../Constants/Types";
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
  if (values.postTitle) {
    data.append("postTitle", values.postTitle);
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

// COMMENT CREATE
export const commentCreate = (values) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  };
  const data = new FormData();
  if (values.comment) {
    data.append("commentDescription", values.comment);
  }
  if (values.comment) {
    data.append("postId", values.postId);
  }

  try {
    const res = await axios.post(`${BASE_URL}/comment`, data, config);

    //console.log(res.data);
    if (res.data.Response !== "Successfull") {
      toastr.error("Error", res.data.ResponseData);

      return false;
    }
    toastr.success("Success", "You have added a comment!");
    dispatch({
      type: CREATE_COMMENT,
    });
    dispatch(getComments(values.postId));
    return true;
  } catch (err) {
    console.log(err);
    toastr.error("Error", err.message);

    return false;
  }
};

// COMMENT Delete
export const commentDelete = (id) => async (dispatch) => {
  try {
    const res = await axios.delete(`${BASE_URL}/comment?commentId=${id}`);

    //console.log(res.data);
    if (res.data.Response !== "Successfull") {
      toastr.error("Error", res.data.ResponseData);

      return false;
    }
    toastr.success("Success", "Comment deleted!");
    dispatch({
      type: DELETE_COMMENT,
      payload: id,
    });
    return true;
  } catch (err) {
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

// GET POST COMMENTS
export const getComments = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`${BASE_URL}/comments?postId=${id}`);

    if (res.data.Response !== "Successfull") {
      toastr.error("Error", res.data.ResponseData);
      return false;
    }

    dispatch({
      type: GET_COMMENT,
      payload: res.data.ResponseData,
    });
    return true;
  } catch (err) {
    return false;
  }
};
// GET POST
export const getPostDetails = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`${BASE_URL}/post?postId=${id}`);

    if (res.data.Response !== "Successfull") {
      toastr.error("Error", res.data.ResponseData);
      return false;
    }

    dispatch({
      type: GET_POST_DETAILS,
      payload: res.data.ResponseData,
    });
    return true;
  } catch (err) {
    return false;
  }
};
