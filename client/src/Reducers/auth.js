import {
  LOGIN_ERROR,
  LOGOUT_ADMIN,
  SIGN_UP_SUCCESS,
  LOGIN_SUCCESS,
  GET_AUTH_USER,
} from "../Constants/Types";

const initialState = {
  token: "",
  user: {},
  isAuthenticated: false,
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
    case GET_AUTH_USER:
      return {
        ...state,
        user: { ...payload.admin },
        loading: false,
      };
    case LOGIN_SUCCESS:
      localStorage.setItem("token_cseian", payload.token);
      return {
        ...state,
        token: payload.token,
        isAuthenticated: true,
        loading: false,
      };

    case LOGIN_ERROR:
    case LOGOUT_ADMIN:
      //console.log("Token Remove");
      localStorage.removeItem("token_cseian");
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
