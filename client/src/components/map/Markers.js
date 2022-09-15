import React from 'react';
import { useDispatch } from "react-redux";
import { setPlace } from "../../reducers/places";
import { setEvent } from "../../reducers/events";
import { Marker } from '@react-google-maps/api';

const Markers = ({ map, user, places, events }) => {
  const dispatch = useDispatch();

  const handleClick = (place, event) => {
    dispatch(setPlace(place));
    dispatch(setEvent(event));
    
    if (place) {
      return map.panTo(place.geometry.location);
    } else {
      return map.panTo({
        lat: Number(event.lat),
        lng: Number(event.lng)
      });
    }
  }

  const displayMarkers = () => {
    if (places && places !== []) {
      return places.map((place, i) =>
        <Marker
          key={i}
          animation={2}
          icon={{
            url: "http://maps.google.com/mapfiles/kml/paddle/red-circle.png",
            scaledSize: new window.google.maps.Size(40, 40)
          }}
          position={place.geometry.location}
          onClick={() => handleClick(place, null)}
        />
      );
    } else if (events && events !== []) {
      return events.map((event, i) => {
        const color = event.user.id === user.id ? "grn" : "blu";

        return (
          <Marker
            key={i}
            animation={2}
            icon={{
              url: `http://maps.google.com/mapfiles/kml/paddle/${color}-circle.png`,
              scaledSize: new window.google.maps.Size(40, 40)
            }}
            position={{
              lat: Number(event.lat),
              lng: Number(event.lng)
            }}
            onClick={() => handleClick(null, event)}
          />
        )
      });
    }
  }

  return displayMarkers();
}

export default Markers;