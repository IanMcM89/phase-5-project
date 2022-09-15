// Action Creators:
export const setPlace = (place) => {
  return {
    type: 'place/set',
    payload: place
  };
}

// Reducers:
export default function placeReducer(state = null, action) {
  switch (action.type) {
    case 'place/set':
      return state = action.payload
    default:
      return state;
  }
}