// Action Creators:
export const setPlace = (place, type) => {
  const PlaceData = place ? (
    {
      id: place.id,
      type: type,
      user: place.user,
      title: place.title,
      name: place.name,
      formatted_address: place.formatted_address,
      rating: place.rating,
      photos: place.photos,
      lat: type.includes("place") ?
        (place.geometry.location.lat()) : (Number(place.lat)),
      lng: type.includes("place") ?
        (place.geometry.location.lng()) : (Number(place.lng))
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