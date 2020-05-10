const initialState = {
  currentUser: null,
  currentState: "merchants",
  isFetching: false,
  merchants: []
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_DATA":
      return Object.assign({}, state, {
        currentUser: state.currentUser,
        currentState: state.currentState,
        isFetching: true,
        merchants: state.merchants
      });
    case "FETCHED_USER":
      return Object.assign({}, state, {
        currentUser: action.payload.user,
        currentState: state.currentState,
        isFetching: false,
        merchants: state.merchants
      });
    case "FETCHED_MERCHANTS":
      return Object.assign({}, state, {
        currentUser: state.currentUser,
        currentState: state.currentState,
        isFetching: false,
        merchants: action.payload.merchants
      });
    case "UPDATE_CURRENT_STATE":
      return Object.assign({}, state, {
        currentUser: state.currentUser,
        currentState: action.payload,
        isFetching: false,
        merchants: state.merchants
      });
    default:
      return state;
  }

};

export default userReducer;
