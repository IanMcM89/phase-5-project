// Action Creators:
export const fetchEvents = (url, search) => {
  return (dispatch) => {
    dispatch({ type: `${url}/loading` });
    fetch(url)
      .then((r) => r.json())
      .then((events) => {
        dispatch({
          type: `${url}/loaded`,
          payload: filterEvents(events, search)
        });
      });
  };
}

const filterEvents = (events, search) => {
  if (search) {
    search = search.toLowerCase();
    return events.filter((event) => {
      if (event.location.toLowerCase().includes(search)) {
        return event;
      } else if (event.title.toLowerCase().includes(search)) {
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
export default function createEventsReducer(url = '') {
  return function reducer(state = initialState, action) {
    switch (action.type) {
      case `${url}/loaded`:
        return {
          ...state,
          status: "idle",
          entities: action.payload,
        };
      case `${url}/loading`:
        return {
          ...state,
          status: "loading",
        };
      default:
        return state;
    }
  }
}
