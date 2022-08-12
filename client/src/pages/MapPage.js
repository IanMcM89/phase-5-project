import React, { useEffect, useState } from 'react';
import { GoogleMap, LoadScript, StandaloneSearchBox, Marker } from '@react-google-maps/api';
import styled from "styled-components";

const libraries = ['places'];

function Map() {
  const [currentLoc, setCurrentLoc] = useState({ lat: 42, lng: -118 });
  const [searchBox, setSearchBox] = useState(null);
  const [places, setPlaces] = useState([]);
  const [map, setMap] = useState(null);
  const [zoom, setZoom] = useState(12);

  // Fetches current user's geolocation:
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos) => {
      setCurrentLoc({
        lat: pos.coords.latitude,
        lng: pos.coords.longitude,
      });
    });
  }, []);

  // Sets map ref on load:
  const onMapLoad = (ref) => {
    setMap(ref);
  }

  // Sets search ref on load:
  const onSBLoad = (ref) => {
    setSearchBox(ref);
  };

  // Fetches places from Google Places API using searchbox query:
  const onPlacesChanged = () => {
    const results = searchBox.getPlaces();
    if (results) {
      const loc = results[0].geometry.location;
      setPlaces(results);
      setZoom(14);
      setCurrentLoc({
        lat: loc.lat(),
        lng: loc.lng()
      });
    }
  }

  // Sets currentLoc to new center coords after map drag:
  const updateCenter = () => {
    if (map) setCurrentLoc(map.getCenter().toJSON());
  }

  return (
    <Wrapper>
      <LoadScript
        googleMapsApiKey={`${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`}
        libraries={libraries}
      >
        <GoogleMap
          mapContainerStyle={mapStyles}
          onDragEnd={updateCenter}
          clickableIcons={false}
          onLoad={onMapLoad}
          zoom={zoom}
          center={{
            lat: currentLoc.lat,
            lng: currentLoc.lng
          }}
        >
          <StandaloneSearchBox
            bounds={map ? map.getBounds() : null}
            onPlacesChanged={onPlacesChanged}
            onLoad={onSBLoad}
          >
            <input
              type="text"
              placeholder="Search Places"
              style={searchStyles}
            />
          </StandaloneSearchBox>
          {places !== [] &&
            places.map((place, i) => <Marker
              key={i}
              position={place.geometry.location}
              onClick={() => console.log(place)}
            />)
          }
        </GoogleMap>
      </LoadScript>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 90vh;
  overflow: hidden;
`;

const mapStyles = {
  width: '100%',
  height: '100%',
};

const searchStyles = {
  boxSizing: 'border-box',
  border: '1px solid transparent',
  width: '240px',
  height: '32px',
  padding: '0 12px',
  borderRadius: '3px',
  boxShadow: '0 2px 6px rgba(0, 0, 0, 0.3)',
  fontSize: '14px',
  outline: 'none',
  textOverflow: 'ellipses',
  position: 'absolute',
  left: '50%',
  marginLeft: '-120px',
  marginTop: '1%'
};

export default Map;