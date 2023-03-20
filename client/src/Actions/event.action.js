import axios from "axios";
import { toastr } from "react-redux-toastr";
import { CREATE_EVENT, GET_EVENT_LIST, GET_EVENT } from "../Constants/Types";
import { BASE_URL } from "../Constants/url";

//Login User
export const jobCreate = (values) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  };
  const data = new FormData();
  if (values.eventName) {
    data.append("eventName", values.eventName);
  }
  if (values.eventDescription) {
    data.append("eventDescription", values.eventDescription);
  }
  if (values.deadline) {
    data.append("deadline", new Date(values.deadline).toISOString());
  }
  if (values.eventDate) {
    data.append("eventDate", new Date(values.eventDate).toISOString());
  }

  if (values.status) {
    data.append("status", values.status);
  }

  try {
    const res = await axios.post(`${BASE_URL}/createEvent`, data, config);

    //console.log(res.data);
    if (res.data.Response !== "Successfull") {
      toastr.error("Error", res.data.ResponseData);

      return false;
    }
    toastr.success("Success", "You have added a event!");
    dispatch({
      type: CREATE_EVENT,
    });
    dispatch(getEventList());
    return true;
  } catch (err) {
    console.log(err);
    toastr.error("Error", err.message);

    return false;
  }
};

export const getEventList = () => async (dispatch) => {
  try {
    const res = await axios.get(`${BASE_URL}/events/running`);

    if (res.data.Response !== "Successfull") {
      toastr.error("Error", res.data.ResponseData);
      return false;
    }
    dispatch({
      type: GET_EVENT_LIST,
      payload: res.data.ResponseData,
    });

    return true;
  } catch (err) {
    return false;
  }
};

export const approveEventAdmin = (id) => async (dispatch) => {
  try {
    const res = await axios.post(
      `${BASE_URL}/approveAlumniRegistrationTransaction?transactionId=${id}`
    );

    if (res.data.Response !== "Successfull") {
      toastr.error("Error", res.data.ResponseData);
      return false;
    }

    dispatch(getEventList());
    toastr.success("Approved", "Event approved!");
    return true;
  } catch (err) {
    return false;
  }
};

export const rejectEventAdmin = (id) => async (dispatch) => {
  try {
    const res = await axios.post(
      `${BASE_URL}/rejectAlumniRegistrationTransaction?transactionId=${id}`
    );

    if (res.data.Response !== "Successfull") {
      toastr.error("Error", res.data.ResponseData);
      return false;
    }

    dispatch(getEventList());
    toastr.success("Rejected", "Event rejected!");
    return true;
  } catch (err) {
    return false;
  }
};

export const registerToEvent = (values, image) => async (dispatch) => {
  try {
    const data = new FormData();
    data.append("eventId", values.eventId);
    data.append("transactionId", values.transactionId);
    data.append("recepientBankAccountNo", values.recepientBankAccountNo);
    data.append("bankName", values.bankName);
    if (image) {
      data.append("bankRecieptImage", image);
    }

    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };

    const res = await axios.post(
      `${BASE_URL}/events/registration`,
      data,
      config
    );

    if (res.data.Response === "Successfull") {
      toastr.success("Success", "Registration sent for verification!");
      return true;
    }
  } catch (err) {
    console.log(err);
    return false;
  }
};

export const createEvent = (values, img) => async (dispatch) => {
  try {
    const data = new FormData();
    data.append("eventName", values.eventName);
    data.append("eventDescription", values.eventDescription);
    data.append("eventDate", new Date(values.eventDate).toISOString());
    data.append("deadline", new Date(values.deadline).toISOString());
    data.append("eventVanue", values.eventVanue);
    data.append("status", parseInt(values.status));
    if (img) {
      data.append("eventPicture", img);
    }
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };

    const res = await axios.post(`${BASE_URL}/createEvent`, data, config);

    if (res.data.Response === "Successfull") {
      toastr.success("Success", "Event Created!");
      dispatch(getEventList());
      return true;
    }
  } catch (err) {
    console.log(err);
    return false;
  }
};
