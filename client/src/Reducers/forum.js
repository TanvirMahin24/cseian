import { GET_POST_LIST, GET_SEARCH_RESULT_DIRECTORY } from "../Constants/Types";

const initialState = {
  post: null,
};

const forum = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_POST_LIST:
      return {
        ...state,
        post: payload,
      };

    default:
      return state;
  }
};

export default forum;
