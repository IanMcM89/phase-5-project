import { combineReducers } from "redux";
import createEventsReducer from "./reducers/eventsSlice";
import createUsersReducer from "./reducers/usersSlice";
import showUsersReducer from "./reducers/showUsersSlice";
import placeReducer from "./reducers/placeSlice";
import eventReducer from "./reducers/eventSlice";


const rootReducer = combineReducers({
  events: createEventsReducer('/api/events'),
  friends: createUsersReducer('/api/friends'),
  pending: createUsersReducer('/api/pending_friends'),
  users: createUsersReducer('/api/users'),
  showUsers: showUsersReducer,
  place: placeReducer,
  event: eventReducer
});

export default rootReducer;
