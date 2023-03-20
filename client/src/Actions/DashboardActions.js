import axios from "axios";
import { toastr } from "react-redux-toastr";
import {
  APPROVE_ALUMNI,
  DASHBOARD_CATEGORY,
  GET_ADMIN_EVENT_LIST,
  GET_ADMIN_MEMBER_LIST,
  GET_ADMIN_USER_LIST,
  GET_DASHBOARD_ALUMNI,
  GET_DASHBOARD_DATA,
  GET_JOB_LIST,
  SEARCH_ADMIN_EVENT_LIST,
  SEARCH_ADMIN_USER_LIST,
} from "../Constants/Types";
import { BASE_URL } from "../Constants/url";

//Load user
export const dashboardSubCatSelect = (category) => (dispatch) => {
  dispatch({
    type: DASHBOARD_CATEGORY,
    payload: category,
  });
};

export const getAdminUserList = (text, page, clear) => async (dispatch) => {
  try {
    const res = await axios.get(
      `${BASE_URL}/PendingAlumniRegistrationList?searchText=${text}&pageNumber=${page}`
    );

    if (res.data.Response !== "Successfull") {
      toastr.error("Error", res.data.ResponseData);
      return false;
    }
    if (clear === true) {
      dispatch({
        type: SEARCH_ADMIN_USER_LIST,
        payload: res.data.ResponseData,
      });

      return true;
    }
    dispatch({
      type: GET_ADMIN_USER_LIST,
      payload: res.data.ResponseData,
    });
    return true;
  } catch (err) {
    return false;
  }
};

export const getAlumni = () => async (dispatch) => {
  try {
    const res = await axios.get(`${BASE_URL}/dashboardMembers`);

    if (res.data.Response !== "Successfull") {
      toastr.error("Error", res.data.ResponseData);
      return false;
    }
    dispatch({
      type: GET_DASHBOARD_ALUMNI,
      payload: res.data.ResponseData,
    });

    return true;
  } catch (err) {
    return false;
  }
};
export const getPendingMember = () => async (dispatch) => {
  try {
    const res = await axios.get(`${BASE_URL}/PendingMemberApplicationList`);

    if (res.data.Response !== "Successfull") {
      toastr.error("Error", res.data.ResponseData);
      return false;
    }
    dispatch({
      type: GET_ADMIN_MEMBER_LIST,
      payload: res.data.ResponseData,
    });

    return true;
  } catch (err) {
    return false;
  }
};
export const getDashboardData = () => async (dispatch) => {
  try {
    const res = await axios.get(`${BASE_URL}/dashboard`);

    if (res.data.Response !== "Successfull") {
      toastr.error("Error", res.data.ResponseData);
      return false;
    }
    dispatch({
      type: GET_DASHBOARD_DATA,
      payload: res.data.ResponseData,
    });

    return true;
  } catch (err) {
    return false;
  }
};

export const approveAlumni = (id) => async (dispatch) => {
  try {
    const res = await axios.post(
      `${BASE_URL}/approveAlumniRegistrationTransaction?transactionId=${id}`
    );

    if (res.data.Response !== "Successfull") {
      toastr.error("Error", res.data.ResponseData);
      return false;
    }
    dispatch({
      type: APPROVE_ALUMNI,
    });
    dispatch(getAdminUserList("", 0, true));
    toastr.success("Approved", "Alumni registration approved!");
    return true;
  } catch (err) {
    return false;
  }
};
export const approveMember = (id) => async (dispatch) => {
  try {
    const res = await axios.post(
      `${BASE_URL}/activePendingMember?studentId=${id}`
    );

    if (res.data.Response !== "Successfull") {
      toastr.error("Error", res.data.ResponseData);
      return false;
    }

    dispatch(getPendingMember());
    toastr.success("Approved", "Member approved!");
    return true;
  } catch (err) {
    return false;
  }
};
export const rejectMember = (id) => async (dispatch) => {
  try {
    const res = await axios.post(
      `${BASE_URL}/rejectPendingMember?studentId=${id}`
    );

    if (res.data.Response !== "Successfull") {
      toastr.error("Error", res.data.ResponseData);
      return false;
    }

    dispatch(getPendingMember());
    toastr.success("Rejected", "Member rejected!");
    return true;
  } catch (err) {
    return false;
  }
};

export const rejectAlumni = (id) => async (dispatch) => {
  try {
    const res = await axios.post(
      `${BASE_URL}/rejectAlumniRegistrationTransaction?transactionId=${id}`,
      {}
    );

    if (res.data.Response !== "Successfull") {
      toastr.error("Error", res.data.ResponseData);
      return false;
    }

    dispatch(getAdminUserList("", 0, true));
    toastr.success("Rejected", "Alumni registration rejected!");
    return true;
  } catch (err) {
    return false;
  }
};

export const getAdminEventList = (text, page, clear) => async (dispatch) => {
  try {
    const res = await axios.get(
      `${BASE_URL}/PendingEventsRegistrationList?searchText=${text}&pageNumber=${page}`
    );

    if (res.data.Response !== "Successfull") {
      toastr.error("Error", res.data.ResponseData);
      return false;
    }
    if (clear === true) {
      dispatch({
        type: SEARCH_ADMIN_EVENT_LIST,
        payload: res.data.ResponseData,
      });

      return true;
    }
    dispatch({
      type: GET_ADMIN_EVENT_LIST,
      payload: res.data.ResponseData,
    });
    return true;
  } catch (err) {
    return false;
  }
};
