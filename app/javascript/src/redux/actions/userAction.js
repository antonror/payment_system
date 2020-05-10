import store               from "../store";
import axios               from "axios";

export const fetchData = (data) => {
  return {
    type: "FETCH_DATA"
  };
};

export const receiveUser = (data) => {
  return {
    type: "FETCHED_USER",
    payload: data
  };
};

export const receiveMerchants = (data) => {
  return {
    type: "FETCHED_MERCHANTS",
    payload: data
  };
};

export const updateCurrentState = (state) => {
  return {
    type: "UPDATE_CURRENT_STATE",
    payload: state
  };
};

export const getMerchants = () => {
  store.dispatch(fetchData());
  return function(dispatch) {
    return axios
      .get('/api/v1/users')
      .then((resp) => {
        dispatch(receiveMerchants(resp.data));
      });
  };
};

export const updateMerchantStatus = (id, status) => {
  return function(dispatch) {
    return axios
      .patch(`/api/v1/users/${id}`, { user: {status: status} })
      .then((resp) => {
        dispatch(getMerchants());
      });
  };
};

export const destroyMarchent = (id) => {
  return function(dispatch) {
    return axios
      .delete(`/api/v1/users/${id}`)
      .then((resp) => {
        dispatch(getMerchants());
      });
  };
};

export const getCurrentUser = () => {
  store.dispatch(fetchData());
  return function(dispatch) {
    return axios
      .get('/api/v1/users/check_for_user')
      .then((resp) => {
        dispatch(receiveUser(resp.data));
      });
  };
};
