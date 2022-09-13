import React from 'react';
import { useDispatch } from "react-redux";
import { setPlace } from "../../reducers/places";
import { setEvent } from "../../reducers/event";
import { Marker } from '@react-google-maps/api';

const Pin = ({ places, events }) => {
  const dispatch = useDispatch();

  const handleClick = (place, event) => {
    dispatch(setPlace(place));
    dispatch(setEvent(event));
  }

  const displayMarkers = () => {
    if (places && places !== []) {
      return places.map((place, i) =>
        <Marker
          key={i}
          position={place.geometry.location}
          onClick={() => handleClick(place, null)}
        />
      );
    } else if (events && events !== []) {
      return events.map((event) =>
        <Marker
          icon={{ 
            url: "http://maps.google.com/mapfiles/kml/pushpin/grn-pushpin.png",
            scaledSize: new window.google.maps.Size(40, 40)
          }}
          key={event.id}
          position={{
            lat: Number(event.lat),
            lng: Number(event.lng)
          }}
          onClick={() => handleClick(null, event)}
        />
      );
    }
  }

  return displayMarkers();
}

export default Pin;