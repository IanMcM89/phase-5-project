import React, { useState } from 'react';
import { GoogleMap, LoadScript, StandaloneSearchBox, Marker } from "@react-google-maps/api";
import styled from "styled-components";

const libraries = ["places"];

const Map = () => {
  const [map, setMap] = useState(null);
  const [coordsResult, setCoordsResult] = useState([]);
  const [currentLoc, setCurrentLoc] = useState({ lat: 0, lng: 0 });
  const [searchValue, setSearchValue] = useState('');
  const [zoom, setZoom] = useState(12);
  
  // Fetch current user's geolocation using Google Maps API:
  const onLoad = (map) => { setMap(map);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setCurrentLoc({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      });
    }
  };
  
  // Add Enter key event listener to searchbox:
  const input = document.getElementById("searchbox");
  if (input) input.addEventListener("keyup", ({key}) => {
    if (key === 'Enter') {
      searchPlaces();
    }
  })

  // Fetch places request using Google Places textsearch query:
  const searchPlaces = () => {
    let service = new window.google.maps.places.PlacesService(map);
    let request = {
      query: searchValue,
      fields: ["name", "geometry"]
    };

    if (searchValue) service.findPlaceFromQuery(request, (results, status) => {
      let loc = results[0].geometry.location;

      console.log(results)

      if (status) {
        setCoordsResult(results);
        setZoom(14);
        setCurrentLoc({
          lat: loc.lat(),
          lng: loc.lng()
        });
      };
    });
  };

  // Set currentLoc state to new coords after map drag:
  const changeCenterPos = () => {
    if (map && !map) setCurrentLoc(map.getCenter().toJSON());
  }

  return (
    <Wrapper>
      <LoadScript
        googleMapsApiKey={`${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`}
        libraries={libraries}
      >
        <GoogleMap
          mapContainerStyle={mapStyles}
          center={{
            lat: currentLoc.lat,
            lng: currentLoc.lng
          }}
          onDragEnd={changeCenterPos}
          zoom={zoom}
          onLoad={onLoad}
        >
          <StandaloneSearchBox
            map={map}
          >
            <input
              id="searchbox"
              type="text"
              placeholder="Search Places"
              style={searchStyles}
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
          </StandaloneSearchBox>
          {coordsResult !== [] &&
            coordsResult.map((result, i) => <Marker 
              key={i} 
              position={result.geometry.location} 
              onClick={() => console.log(result)}
            />)
          }
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

export default React.memo(Map);