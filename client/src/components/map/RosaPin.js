import React from 'react';
import { useDispatch } from "react-redux";
import { setPlace } from "../../reducers/places";
import { Marker } from '@react-google-maps/api';

const RosaPin = ({ places }) => {
  const dispatch = useDispatch();

  const displayMarkers = () => {
    if (places !== []) return places.map((place, i) =>
      <Marker
        key={i}
        position={place.geometry.location}
        onClick={() => dispatch(setPlace(place))}
      />
    );
  }

  return displayMarkers();
}

export default RosaPin;