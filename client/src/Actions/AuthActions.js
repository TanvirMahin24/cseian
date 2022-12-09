import {
  LOGIN_ERROR,
  LOGIN_SUCCESS,
  LOGOUT_ADMIN,
  SIGN_UP_ERROR,
  SIGN_UP_SUCCESS,
} from "../Constants/Types";
import { BASE_URL } from "../Constants/url";
import axios from "axios";
import { toastr } from "react-redux-toastr";

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
      `${BASE_URL}/register?firstName=${values.first_name}&lastName=${values.last_name}&studentId=${values.id}&email=${values.email}&contactNo=${values.phone}&country=${values.country}&city=${values.city}&linkedin=${values.linkedin}&availableTimeToContact=${values.availableTimeToContact}&jobTitle=${values.jobTitle}&jobOrganization=${values.jobOrganization}&jobBrunch=${values.jobBrunch}&password=${values.password}`,
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
      toastr.error("Login Fail", res.data.ResponseData);
      dispatch({
        type: LOGIN_ERROR,
      });
      return false;
    }
    toastr.success("Login Success", "You have been logged in successfully");
    dispatch({
      type: LOGIN_SUCCESS,
      payload: { token: res.data.token, admin: res.data.currentUser },
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
  localStorage.removeItem("token");
  dispatch({
    type: LOGOUT_ADMIN,
  });
};

// TOKEN LOGIN
export const loginToken = (token) => async (dispatch) => {
  //console.log("Token login");
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify({ token });
  try {
    const res = await axios.post(
      `${BASE_URL}/api/user/verify-user-token`,
      body,
      config
    );
    console.log(res);

    if (res.data.verified === true) {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: { token: token, admin: res.data.user[0] },
      });
      return true;
    } else {
      dispatch({
        type: LOGOUT_ADMIN,
      });
    }
  } catch (err) {
    console.log(err);
    dispatch({
      type: LOGIN_ERROR,
    });
    return false;
  }
};
