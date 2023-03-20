import {
  LOGIN_ERROR,
  LOGOUT_ADMIN,
  SIGN_UP_SUCCESS,
  LOGIN_SUCCESS,
  GET_AUTH_USER,
  GET_ADMIN_USER_LIST,
  SEARCH_ADMIN_USER_LIST,
  GET_DASHBOARD_DATA,
  GET_DASHBOARD_ALUMNI,
  GET_ADMIN_MEMBER_LIST,
} from "../Constants/Types";

const initialState = {
  token: "",
  user: {},
  isAuthenticated: false,
  loading: true,
  admin_users: null,
  dashboard: null,
  alumni: null,
  member: null,
};

const Pages = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_DASHBOARD_DATA:
      return {
        ...state,
        dashboard: payload,
      };
    case GET_ADMIN_MEMBER_LIST:
      return {
        ...state,
        member: payload,
      };
    case GET_DASHBOARD_ALUMNI:
      return {
        ...state,
        alumni: payload,
      };
    case GET_ADMIN_USER_LIST:
      return {
        ...state,
        admin_users:
          state.admin_users === null
            ? payload
            : {
                ...payload,
                pageContent: [
                  ...state.admin_users.pageContent,
                  ...payload.pageContent,
                ],
              },
      };

    case SEARCH_ADMIN_USER_LIST:
      return {
        ...state,
        admin_users: payload,
      };
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
        isAuthenticated: true,
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
