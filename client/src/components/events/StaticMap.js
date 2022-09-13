import React from "react";
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const StaticMap = ({ event }) => {
  const coords = {
    lat: Number(event.lat),
    lng: Number(event.lng)
  }

  return (
    <LoadScript
      googleMapsApiKey={`${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`}
    >
      <GoogleMap
        options={{ gestureHandling: 'none', disableDefaultUI: true }}
        mapContainerStyle={mapStyles}
        clickableIcons={false}
        center={coords}
        zoom={12}
      >
        <Marker
          position={coords}
        />
      </GoogleMap>
    </LoadScript>
  )
};

const mapStyles = {
  background: 'beige',
  width: '96%',
  height: '96%',
  margin: '2%',
};

export default StaticMap;