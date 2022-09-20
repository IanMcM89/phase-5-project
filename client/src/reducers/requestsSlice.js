// Action Creators:
export const fetchRequests = () => {
  return (dispatch) => {
    dispatch({ type: 'requests/loading' });
    fetch('/api/friend_requests')
      .then((r) => r.json())
      .then((requests) => {
        dispatch({
          type: 'requests/loaded',
          payload: requests
        });
      });
  };
}

const initialState = {
  entities: [], //array of requests
  status: "idle", //loading status
};

// Reducers:
export default function requestsReducer(state = initialState, action) {
  switch (action.type) {
    case 'requests/loaded':
      return {
        ...state,
        status: "idle",
        entities: action.payload,
      };
    case 'requests/loading':
      return {
        ...state,
        status: "loading",
      };
    default:
      return state;
  }
}
