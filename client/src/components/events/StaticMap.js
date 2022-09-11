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
        zoom={17}
      >
        <Marker
          position={coords}
        />
      </GoogleMap>
    </LoadScript>
  )
};

const mapStyles = {
  width: '50%',
  height: '100%',
  marginLeft: '1.5%',
};

export default StaticMap;