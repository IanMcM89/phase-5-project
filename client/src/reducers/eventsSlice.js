// Action Creators:
export const fetchEvents = (url, search) => {
  return (dispatch) => {
    dispatch({ type: `${url}/eventsLoading` });
    fetch(url)
      .then((r) => r.json())
      .then((events) => {
        dispatch({
          type: `${url}/eventsLoaded`,
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
      case `${url}/eventsLoaded`:
        return {
          ...state,
          status: "idle",
          entities: action.payload,
        };
      case `${url}/eventsLoading`:
        return {
          ...state,
          status: "events loading",
        };
      default:
        return state;
    }
  }
}
