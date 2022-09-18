import { combineReducers } from "redux";
import createEventsReducer from "./reducers/eventsSlice";
import createUsersReducer from "./reducers/usersSlice";
import visibilityReducer from "./reducers/visibilitySlice";
import placeReducer from "./reducers/placeSlice";


const rootReducer = combineReducers({
  events: createEventsReducer('/api/events'),
  friends: createUsersReducer('/api/friends'),
  pending: createUsersReducer('/api/pending_friends'),
  users: createUsersReducer('/api/users'),
  showUsers: visibilityReducer,
  place: placeReducer
});

export default rootReducer;
