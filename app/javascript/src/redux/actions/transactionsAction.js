import store               from "../store";
import axios               from "axios";

export const fetchData = (data) => {
  return {
    type: "FETCH_DATA"
  };
};

export const receiveTransactions = (data) => {
  return {
    type: "FETCHED_TRANSACTIONS",
    payload: data
  };
};

export const getTransactions = () => {
  store.dispatch(fetchData());
  return function(dispatch) {
    return axios
      .get('/api/v1/transactions')
      .then((resp) => {
        dispatch(receiveTransactions(resp.data));
      });
  };
};

export const createTransaction = (params) => {
  return function(dispatch) {
    return axios
      .post('/api/v1/transactions', {transaction:  params})
      .then((resp) => {
        dispatch(getTransactions());
      });
  };
};
