const initialState = {
  currentUser: null,
  currentState: "merchants",
  isFetching: false
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_USER":
      return Object.assign({}, state, {
        currentUser: state.currentUser,
        currentState: state.currentState,
        isFetching: true
      });
    case "FETCHED_USER":
      return Object.assign({}, state, {
        currentUser: action.payload.user,
        currentState: state.currentState,
        isFetching: false
      });
      return state;
    case "UPDATE_CURRENT_STATE":
      return Object.assign({}, state, {
        currentUser: state.currentUser,
        currentState: action.payload,
        isFetching: false
      });
    default:
      return state;
  }

};

export default userReducer;
