import { DASHBOARD_CATEGORY } from "../Constants/Types";

//Load user
export const dashboardSubCatSelect = (category) => (dispatch) => {
  dispatch({
    type: DASHBOARD_CATEGORY,
    payload: category,
  });
};
