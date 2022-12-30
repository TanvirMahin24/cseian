import { GET_SEARCH_RESULT_DIRECTORY } from "../Constants/Types";

const initialState = {
  result: null,
};

const directory = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_SEARCH_RESULT_DIRECTORY:
      return {
        ...state,
        result: payload,
      };

    default:
      return state;
  }
};

export default directory;
