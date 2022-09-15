import { combineReducers } from "redux";
import createUserReducer from "./reducers/users";
import showUsersReducer from "./reducers/userList";
import placesReducer from "./reducers/places";
import eventsReducer from "./reducers/events";
import createEventsReducer from "./reducers/eventList";


const rootReducer = combineReducers({
  friends: createUserReducer('/api/friends'),
  pending: createUserReducer('/api/pending_friends'),
  users: createUserReducer('/api/users'),
  showUsers: showUsersReducer,
  events: createEventsReducer('/api/events'),
  place: placesReducer,
  event: eventsReducer
});

export default rootReducer;
