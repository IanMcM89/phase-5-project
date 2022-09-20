// Action Creators:
export const fetchEvents = (text, date) => {
  return (dispatch) => {
    dispatch({ type: 'events/loading' });
    fetch('/api/events')
      .then((r) => r.json())
      .then((events) => {
        dispatch({
          type: 'events/loaded',
          payload: filterEvents(events, text, date)
        });
      });
  };
}

//change default date format to mm/dd/yyyy:
const formatDate = (date) => {
  const arr = date.split("-");
  date = arr[1] + '/' + arr[2] + '/' + arr[0];
  return date;
}

//first filters events by date, then by title/name if text provided:
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
export default function eventsReducer(state = initialState, action) {
  switch (action.type) {
    case 'events/loaded':
      return {
        ...state,
        status: 'idle',
        entities: action.payload,
      };
    case 'events/loading':
      return {
        ...state,
        status: 'loading',
      };
    default:
      return state;
  }
}
