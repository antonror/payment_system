import store               from "../store";
import axios               from "axios";

export const fetchHotel = (data) => {
  return {
    type: "FETCH_USER"
  };
};

export const receiveUser = (data) => {
  return {
    type: "FETCHED_USER",
    payload: data
  };
};

export const updateCurrentState = (state) => {
  return {
    type: "UPDATE_CURRENT_STATE",
    payload: state
  }
};

export const getCurrentUser = () => {
  store.dispatch(fetchHotel());
  return function(dispatch) {
    return axios
      .get('/api/v1/users/check_for_user')
      .then((resp) => {
        dispatch(receiveUser(resp.data));
      });
  };
};
