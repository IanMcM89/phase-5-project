import React from 'react';
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import styled from "styled-components";

const mapStyles = {
  width: '100%',
  height: '100%',
};

function Map() {
  const [map, setMap] = React.useState(null);
  const [currentLoc, setCurrentLoc] = React.useState({
    lat: 0,
    lng: 0,
  });

  console.log(currentLoc)

  const onLoad = React.useCallback(function callback(map) {
    setMap(map);

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setCurrentLoc({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      });
    }
  }, []);

  const handleCenterChange = () => {
    if (map && !map) return;
    const newPos = map.getCenter().toJSON();
    setCurrentLoc(newPos);
  }

  return (
    <Wrapper>
      <LoadScript googleMapsApiKey={`${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`}>
        <GoogleMap
          mapContainerStyle={mapStyles}
          center={{ lat: currentLoc.lat, lng: currentLoc.lng }}
          onDragEnd={handleCenterChange}
          zoom={12}
          onLoad={onLoad}
        >
          {/* Child components, such as markers, info windows, etc. */}
          <></>
        </GoogleMap>
      </LoadScript>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 95vw;
  height: 90vh;
  overflow: hidden;
`;

export default React.memo(Map);