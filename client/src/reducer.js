import { combineReducers } from "redux";
import createReducer from "./reducers/users";


const rootReducer = combineReducers({
  friends: createReducer('/api/friends'),
  pending: createReducer('/api/pending_friends'),
  users: createReducer('/api/users'),
});

export default rootReducer;
