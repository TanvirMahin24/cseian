import axios from "axios";
import { toastr } from "react-redux-toastr";
import { CREATE_JOB } from "../Constants/Types";
import { BASE_URL } from "../Constants/url";

//Login User
export const jobCreate = (values) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  let str = "";
  if (values.postTitle) {
    str += `postTitle=${values.postTitle}`;
  }
  if (values.companyName) {
    str += `companyName=${values.companyName}`;
  }
  if (values.location) {
    str += `location=${values.location}`;
  }
  if (values.deadline) {
    str += `deadline=${values.deadline}`;
  }
  if (values.placementType) {
    str += `placementType=${values.placementType}`;
  }
  if (values.description) {
    str += `description=${values.description}`;
  }
  if (values.applicationlink) {
    str += `applicationlink=${values.applicationlink}`;
  }

  try {
    const res = await axios.post(`${BASE_URL}/addJobPost?${str}`, {}, config);

    //console.log(res.data);
    if (res.data.Response !== "Successfull") {
      toastr.error("Error", res.data.ResponseData);

      return false;
    }
    toastr.success("Success", "You have added a job!");
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
