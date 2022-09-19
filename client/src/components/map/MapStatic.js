import React from "react";
import { GoogleMap, Marker } from '@react-google-maps/api'

const MapStatic = ({ event }) => {
  const position = {
    lat: event.lat,
    lng: event.lng
  };

  return (
    <GoogleMap
      options={{
        disableDoubleClickZoom: true,
        disableDefaultUI: true,
        clickableIcons: false,
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

export default MapStatic;