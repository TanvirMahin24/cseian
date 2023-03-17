import {
  CLOSE_MODAL,
  GET_PROFILE,
  GET_SEARCH_RESULT_DIRECTORY,
} from "../Constants/Types";

const initialState = {
  result: null,
  modal: false,
  profile: null,
};

const directory = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_SEARCH_RESULT_DIRECTORY:
      return {
        ...state,
        result: payload,
      };
    case GET_PROFILE:
      return {
        ...state,
        profile: payload,
        modal: true,
      };

    case CLOSE_MODAL:
      return {
        ...state,
        profile: null,
        modal: false,
      };

    default:
      return state;
  }
};

export default directory;
