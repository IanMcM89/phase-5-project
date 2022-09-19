import React from 'react';
import { useDispatch } from "react-redux";
import { setPlace } from "../../reducers/placeSlice";
import { Marker } from '@react-google-maps/api';

const Markers = ({ map, user, places, events }) => {
  const dispatch = useDispatch();

  const getColor = (e) => {
    if (e.user && e.user.id === user.id) {
      return "grn"
    } else if (e.user) {
      return "blu"
    } else {
      return "red"
    }
  }

  const getCoords = (e, type) => {
    switch (type) {
      case "place":
        return e.geometry.location;
      case "event":
        return {
          lat: e.lat,
          lng: e.lng
        }
      default:
        return null;
    }
  }

  const handleClick = (e, type) => {
    dispatch(setPlace(e, type));
    map.panTo(getCoords(e, type));
  }

  const displayPins = (arr, type) => {
    if (arr && arr !== []) {
      return arr.map((e, i) => {
        const color = getColor(e);
        return (
          <Marker
            key={i}
            animation={2}
            icon={{
              url: `http://maps.google.com/mapfiles/kml/paddle/${color}-circle.png`,
              scaledSize: new window.google.maps.Size(40, 40)
            }}
            position={getCoords(e, type)}
            onClick={() => handleClick(e, type)}
          />
        )
      });
    }
  }

  return (
    <>
      {displayPins(places, "place")}
      {displayPins(events, "event")}
    </>
  )

}

export default Markers;