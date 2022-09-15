import React from "react";
import { StaticGoogleMap, Marker } from 'react-static-google-map';
import styled from "styled-components";

const StaticMap = ({ event }) => {
  const coords = `${event.lat},${event.lng}`

  return (
    <MapWrapper>
      <StaticGoogleMap
        apiKey={`${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`}
        maptype="terrain"
        size="700x700"
        zoom={14}
      >
        <Marker
          location={coords}
          iconURL="http://maps.google.com/mapfiles/kml/paddle/red-circle.png"
        />
      </StaticGoogleMap>
    </MapWrapper>
  )
};

const MapWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: beige;
  margin: 2%;
  overflow: hidden;
`;

export default StaticMap;