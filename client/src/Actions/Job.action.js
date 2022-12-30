import axios from "axios";
import { toastr } from "react-redux-toastr";
import { CREATE_JOB, GET_JOB_LIST } from "../Constants/Types";
import { BASE_URL } from "../Constants/url";

//Login User
export const jobCreate = (values) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  };
  const data = new FormData();
  if (values.postTitle) {
    data.append("postTitle", values.postTitle);
  }
  if (values.companyName) {
    data.append("companyName", values.companyName);
  }
  if (values.location) {
    data.append("location", values.location);
  }
  if (values.deadline) {
    data.append("deadline", values.deadline);
  }
  if (values.placementType) {
    data.append("placementType", values.placementType);
  }
  if (values.durationType) {
    data.append("durationType", values.durationType);
  }
  if (values.description) {
    data.append("description", values.description);
  }
  if (values.applicationlink) {
    data.append("applicationlink", values.applicationlink);
  }

  try {
    const res = await axios.post(`${BASE_URL}/jobPosts`, data, config);

    //console.log(res.data);
    if (res.data.Response !== "Successfull") {
      toastr.error("Error", res.data.ResponseData);

      return false;
    }
    toastr.success("Success", "You have added a job!");
    dispatch(searchJob("", 0, "", ""));
    dispatch({
      type: CREATE_JOB,
    });
    return true;
  } catch (err) {
    console.log(err);
    toastr.error("Error", err.message);

    return false;
  }
};

//Sign up
export const searchJob =
  (text, page, durationType, placementType) => async (dispatch) => {
    try {
      const res = await axios.get(
        `${BASE_URL}/jobPosts?searchText=${text}&pageNumber=${page}&durationType=${durationType}&placementType=${placementType}`
      );

      if (res.data.Response !== "Successfull") {
        toastr.error("Error", res.data.ResponseData);
        return false;
      }
      dispatch({
        type: GET_JOB_LIST,
        payload: res.data.ResponseData,
      });
      return true;
    } catch (err) {
      return false;
    }
  };
