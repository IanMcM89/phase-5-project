// Action Creators:
export const setEvent = (event) => {
  return {
    type: 'event/set',
    payload: event
  };
}

// Reducers:
export default function eventsReducer(state = null, action) {
  switch (action.type) {
    case 'event/set':
      return state = action.payload
    default:
      return state;
  }
}