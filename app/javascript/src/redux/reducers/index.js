import user                 from './userReducer';
import transactions         from './transactionsReducer';
import {combineReducers}    from "redux";

const reducer = combineReducers({
  user,
  transactions
});

export default reducer;
