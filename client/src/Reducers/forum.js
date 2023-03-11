import {
  DELETE_COMMENT,
  GET_COMMENT,
  GET_POST_DETAILS,
  GET_POST_LIST,
} from "../Constants/Types";

const initialState = {
  post: null,
  selected_post: null,
  comment: null,
};

const forum = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_POST_LIST:
      return {
        ...state,
        post: payload,
      };
    case GET_POST_DETAILS:
      return {
        ...state,
        selected_post: payload,
      };
    case GET_COMMENT:
      return {
        ...state,
        comment: payload,
      };
    case DELETE_COMMENT:
      return {
        ...state,
        comment: state.comment.filter((cm) => cm.commentId !== payload),
      };

    default:
      return state;
  }
};

export default forum;
