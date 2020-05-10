const initialState = {
  relatedTransactions: [],
  isFetching: false
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_DATA":
      return Object.assign({}, state, {
        relatedTransactions: state.currentUser,
        isFetching: true
      });
    case "FETCHED_TRANSACTIONS":
      return Object.assign({}, state, {
        relatedTransactions: action.payload.transactions,
        isFetching: false
      });
    default:
      return state;
  }
};

export default userReducer;
