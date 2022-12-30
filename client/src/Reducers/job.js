import { GET_JOB_LIST } from "../Constants/Types";

const initialState = {
  job: null,
};

const job = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_JOB_LIST:
      return {
        ...state,
        job: payload,
      };

    default:
      return state;
  }
};

export default job;
