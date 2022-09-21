// Action Creators:
export const setPlace = (place) => {
  const PlaceData = place ? (
    {
      id: place.id,
      name: place.name,
      formatted_address: place.formatted_address,
      rating: place.rating,
      photos: place.photos,
      lat: place.geometry.location.lat(),
      lng: place.geometry.location.lng()
    }
  ) : (
    null
  );

  return {
    type: 'place/set',
    payload: PlaceData
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