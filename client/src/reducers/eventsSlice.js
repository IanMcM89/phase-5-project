// Action Creators:
export const fetchEvents = (url, text, date) => {
  return (dispatch) => {
    dispatch({ type: `${url}/eventsLoading` });
    fetch(url)
      .then((r) => r.json())
      .then((events) => {
        dispatch({
          type: `${url}/eventsLoaded`,
          payload: filterEvents(events, text, date)
        });
      });
  };
}

const formatDate = (date) => {
  const arr = date.split("-");
  date = arr[1] + '/' + arr[2] + '/' + arr[0];
  return date;
}

const filterEvents = (events, text, date) => {
  events = (date && date !== '') ? (
    events.filter((e) => e.date === formatDate(date))
  ) : (
    events
  );

  if (text && text !== '') {
    text = text.toLowerCase();
    return events.filter((e) => {
      if (e.location.toLowerCase().includes(text)) {
        return e;
      } else if (e.title.toLowerCase().includes(text)) {
        return e;
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
