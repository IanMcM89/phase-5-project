// Action Creators:
export const setPlace = (placeData) => {
  const place = placeData ? (
    {
      name: placeData.name,
      formatted_address: placeData.formatted_address,
      rating: placeData.rating,
      photos: placeData.photos,
      lat: placeData.geometry.location.lat(),
      lng: placeData.geometry.location.lng()
    }
  ) : (
    null
  );

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