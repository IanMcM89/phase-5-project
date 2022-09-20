import { combineReducers } from "redux";
import createUsersReducer from "./reducers/usersSlice";
import visibilityReducer from "./reducers/visibilitySlice";
import requestsReducer from "./reducers/requestsSlice";
import eventsReducer from "./reducers/eventsSlice";
import placeReducer from "./reducers/placeSlice";


const rootReducer = combineReducers({
  friends: createUsersReducer('/api/friends'),
  pending: createUsersReducer('/api/pending_friends'),
  users: createUsersReducer('/api/users'),
  showUsers: visibilityReducer,
  requests: requestsReducer,
  events: eventsReducer,
  place: placeReducer
});

export default rootReducer;
