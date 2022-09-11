import { combineReducers } from "redux";
import createUserReducer from "./reducers/users";
import showUsersReducer from "./reducers/userList";
import placesReducer from "./reducers/places";


const rootReducer = combineReducers({
  friends: createUserReducer('/api/friends'),
  pending: createUserReducer('/api/pending_friends'),
  users: createUserReducer('/api/users'),
  showUsers: showUsersReducer,
  place: placesReducer
});

export default rootReducer;
