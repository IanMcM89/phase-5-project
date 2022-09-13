// Action Creators:
export const fetchEvents = (search) => {
  return (dispatch) => {
    dispatch({ type: 'events/loading' });
    fetch("/api/events")
      .then((r) => r.json())
      .then((events) => {
        dispatch({
          type: 'events/loaded',
          payload: filterEvents(events, search)
        });
      });
  };
}

const filterEvents = (events, search) => {
  if (search) {
    return events.filter((event) => {
      if (event.title.includes(search)) {
        return event;
      } else if (event.name.includes(search)) {
        return event;
      } else {
        return null;
      }
    });
  } else {
    return events;
  }
}

const initialState = {
  entities: [], //array of events
  status: "idle", //loading status
};

// Reducers:
export default function eventsReducer(state = initialState, action) {
  switch (action.type) {
    case 'events/loaded':
      return {
        ...state,
        status: "idle",
        entities: action.payload,
      };
    case 'events/loading':
      return {
        ...state,
        status: "loading",
      };
    default:
      return state;
  }
}