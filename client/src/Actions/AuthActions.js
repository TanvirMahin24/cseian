import {
  ADD_JOB_PROFILE,
  EDIT_PROFILE,
  GET_AUTH_USER,
  LOGIN_ERROR,
  LOGIN_SUCCESS,
  LOGOUT_ADMIN,
  SIGN_UP_ERROR,
  SIGN_UP_SUCCESS,
} from "../Constants/Types";
import { BASE_URL } from "../Constants/url";
import axios from "axios";
import { toastr } from "react-redux-toastr";
import setAuthToken from "../Utils/setAuthToken";

//Sign up
export const signupAction = (values, selectedFile) => async (dispatch) => {
  let formData = new FormData();
  formData.append("image", selectedFile);
  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  };
  try {
    const res = await axios.post(
      `${BASE_URL}/register?firstName=${values.first_name}&lastName=${values.last_name}&studentId=${values.id}&email=${values.email}&contactNo=${values.phone}&country=${values.country}&city=${values.city}&linkedin=${values.linkedin}&availableTimeToContact=${values.availableTimeToContact}&jobTitle=${values.jobTitle}&jobOrganization=${values.jobOrganization}&jobField=${values.jobField}&jobBrunch=${values.jobBrunch}&password=${values.password}`,
      formData,
      config
    );
    if (res.data.Response !== "Successfull") {
      toastr.error("Register Failed", res.data.ResponseData);
      return false;
    }
    toastr.success("Register Success", "You have registered successfully");
    dispatch({
      type: SIGN_UP_SUCCESS,
      payload: res.data,
    });
    console.log(res.data);
    return true;
  } catch (err) {
    toastr.error("Login Error", err.message);
    dispatch({
      type: SIGN_UP_ERROR,
    });
    return false;
  }
};

export const getProfileAuthUser = () => async (dispatch) => {
  //console.log("Token login");

  try {
    const res = await axios.get(`${BASE_URL}/profileInfo`);
    console.log(res);

    if (res.data.Response === "Successfull") {
      dispatch({
        type: GET_AUTH_USER,
        payload: { admin: res.data.ResponseData },
      });
      return true;
    }
  } catch (err) {
    console.log(err);
    return false;
  }
};
export const editProfile = (values, img) => async (dispatch) => {
  try {
    const data = new FormData();
    data.append("firstName", values.fname);
    data.append("lastName", "");
    data.append("contactNo", values.phone);
    data.append("availableTimeToContact", values.availableTimeToContact);
    data.append("country", values.country);
    data.append("city", values.city);
    data.append("linkedin", values.linkedin);

    if (img) {
      data.append("image", img);
    }

    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };

    const res = await axios.patch(`${BASE_URL}/editProfileInfo`, data, config);
    console.log(res);

    if (res.data.Response === "Successfull") {
      dispatch({
        type: EDIT_PROFILE,
      });
      dispatch(getProfileAuthUser());
      return true;
    }
  } catch (err) {
    console.log(err);
    return false;
  }
};
export const addJobProfile = (values) => async (dispatch) => {
  try {
    const data = new FormData();
    data.append("jobField", values.jobField);
    data.append("jobTitle", values.jobTitle);
    data.append("jobOrganization", values.jobOrganization);
    data.append("jobBrunch", values.jobBrunch);

    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };

    const res = await axios.post(`${BASE_URL}/addJob`, data, config);
    console.log(res);

    if (res.data.Response === "Successfull") {
      dispatch({
        type: ADD_JOB_PROFILE,
      });
      dispatch(getProfileAuthUser());
      return true;
    }
  } catch (err) {
    console.log(err);
    return false;
  }
};

//Login User
export const login = (email, password) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify({ username: parseInt(email), password });
  try {
    const res = await axios.post(`${BASE_URL}/authenticate`, body, config);
    console.log(res);
    //console.log(res.data);
    if (res.data.Response !== "Successfull") {
      if (res.data.ResponseData === "Your Account isn't Active") {
        toastr.error("Please verify the OTP you recived via Email!");
        return -1;
      }
      toastr.error("Login Fail", res.data.ResponseData);
      dispatch({
        type: LOGIN_ERROR,
      });
      return false;
    }
    toastr.success("Login Success", "You have been logged in successfully");
    setAuthToken(res.data.ResponseData.authToken.jwt);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: {
        token: res.data.ResponseData.authToken.jwt,
        admin: { memberName: res.data.memberName, memberId: res.data.memberId },
      },
    });
    return true;
  } catch (err) {
    console.log(err);
    toastr.error("Login Fail", err.message);
    dispatch({
      type: LOGIN_ERROR,
    });
    return false;
  }
};

//Logout / clear profile
export const logout = () => (dispatch) => {
  // dispatch({
  //   type: CLEAR_PROFILE,
  // });

  toastr.success("Logout Success", "You have been logged out");
  localStorage.removeItem("token_cseian");
  setAuthToken(null);
  dispatch({
    type: LOGOUT_ADMIN,
  });
};

// TOKEN LOGIN
export const loginToken = (token) => async (dispatch) => {
  //console.log("Token login");

  try {
    const res = await axios.get(`${BASE_URL}/profileInfo`);
    console.log(res);

    if (res.data.Response === "Successfull") {
      dispatch({
        type: GET_AUTH_USER,
        payload: {
          token: localStorage.getItem("token_cseian"),
          admin: res.data.ResponseData,
        },
      });
      return true;
    }
  } catch (err) {
    console.log(err);
    dispatch({
      type: LOGIN_ERROR,
    });
    return false;
  }
};
