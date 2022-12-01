import {
  LOGIN_ERROR,
  LOGOUT_ADMIN,
  SIGN_UP_SUCCESS,
  LOGIN_SUCCESS,
} from "../Constants/Types";

const initialState = {
  token: "",
  user: {},
  isAuthenticated: true,
  loading: true,
};

const Pages = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SIGN_UP_SUCCESS:
      return {
        ...state,
        dashboard_category: payload,
        loading: false,
      };

    case LOGOUT_ADMIN:
      return {
        ...state,
        user: {},
        loading: false,
        isAuthenticated: false,
        token: "",
      };

    case LOGIN_SUCCESS:
      localStorage.setItem("token", payload.token);
      return {
        ...state,
        token: payload.token,
        user: { ...payload.admin },
        isAuthenticated: true,
        loading: false,
      };

    case LOGIN_ERROR:
    case LOGOUT_ADMIN:
      //console.log("Token Remove");
      return {
        ...state,
        token: "",
        isAuthenticated: false,
        loading: false,
        user: {},
      };

    default:
      return state;
  }
};

export default Pages;
