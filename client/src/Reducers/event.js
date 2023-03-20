import {
  GET_EVENT_LIST,
  GET_EVENT,
  GET_ADMIN_EVENT_LIST,
  SEARCH_ADMIN_EVENT_LIST,
} from "../Constants/Types";

const initialState = {
  event: null,
  selected_event: null,
  admin_events: null,
};

const event = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_EVENT_LIST:
      return {
        ...state,
        event: payload,
      };
    case GET_EVENT:
      return {
        ...state,
        selected_event: payload,
      };

    case GET_ADMIN_EVENT_LIST:
      return {
        ...state,
        admin_events:
          state.admin_events === null
            ? payload
            : {
                ...payload,
                pageContent: [
                  ...state.admin_events.pageContent,
                  ...payload.pageContent,
                ],
              },
      };

    case SEARCH_ADMIN_EVENT_LIST:
      return {
        ...state,
        admin_events: payload,
      };

    default:
      return state;
  }
};

export default event;
