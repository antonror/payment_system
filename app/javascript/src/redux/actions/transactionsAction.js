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

export const updateTransactionStatus = (id, status) => {
  return function(dispatch) {
    return axios
      .patch(`/api/v1/transactions/${id}`, {transaction:  {status: status}})
      .then((resp) => {
        dispatch(getTransactions());
      });
  };
};
