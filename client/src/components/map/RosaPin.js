import React from 'react';
import { Marker } from '@react-google-maps/api';

const RosaPin = ({ places, setOverlay }) => {
  const displayMarkers = () => {
    if (places !== []) return places.map((place, i) =>
      <Marker
        key={i}
        position={place.geometry.location}
        onClick={() => setOverlay(place)}
      />
    );
  }

  return displayMarkers();
}

export default RosaPin;