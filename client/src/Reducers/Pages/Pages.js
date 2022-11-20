import { DASHBOARD_CATEGORY } from "../../Constants/Types";

const initialState = {
  dashboard_category: "Home",
};

const Pages = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case DASHBOARD_CATEGORY:
      return {
        ...state,
        dashboard_category: payload,
      };

    default:
      return state;
  }
};

export default Pages;
