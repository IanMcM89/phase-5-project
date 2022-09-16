import React from "react";
import { GoogleMap, Marker } from '@react-google-maps/api'

const StaticMap = ({ event }) => {
  const position = {
    lat: Number(event.lat),
    lng: Number(event.lng)
  };

  return (
    <GoogleMap
      options={{
        disableDoubleClickZoom: true,
        disableDefaultUI: true,
        scrollwheel: false,
        draggable: false,
        mapTypeId: 'terrain'
      }}
      mapContainerStyle={mapStyles}
      zoom={14}
      center={position}
    >
      <Marker
        animation={2}
        icon={{
          url: "http://maps.google.com/mapfiles/kml/paddle/red-circle.png",
          scaledSize: new window.google.maps.Size(40, 40)
        }}
        position={position}
      />
    </GoogleMap>
  )
};

const mapStyles = {
  width: '100%',
  height: '100%',
};

export default StaticMap;