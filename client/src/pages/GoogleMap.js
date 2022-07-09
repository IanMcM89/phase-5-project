import React, { useState, useEffect } from 'react';
import GoogleMaps from "simple-react-google-maps";
import { Button } from "../styles";
import styled from "styled-components";

const GoogleMap = () => {
  const [userLocation, setUserLocation] = useState(null);
  const [searchValue, setSearchValue] = useState('');
  const [markers, setMarkers] = useState([]);

  //Fetch current user's geolocation data
  useEffect(() => {
    fetch(`https://api.geoapify.com/v1/ipinfo?apiKey=${process.env.REACT_APP_GEOAPIFY_API_KEY}`)
      .then(resp => resp.json())
      .then((locationData) => {
        setUserLocation({
          lat: locationData.location.latitude,
          lng: locationData.location.longitude
        });
      })
  }, []);

  const fetchPlaces = () => {
    const placesUrl = `https://api.geoapify.com/v2/places?categories=${searchValue}&filter=circle:${userLocation.lng},${userLocation.lat},25000&bias=proximity:${userLocation.lng},${userLocation.lat}&limit=5`;

    fetch(`${placesUrl}&apiKey=${process.env.REACT_APP_GEOAPIFY_API_KEY}`)
    .then(resp => resp.json())
    .then((places) => {
      console.log(places);

      let markers = [];

      places.features.map((place) => markers.push({ 
        lat: place.geometry.coordinates[1], 
        lng: place.geometry.coordinates[0]
      }));

      setMarkers(markers);
    });
  }

  return (
    <Wrapper>
      <SearchWrapper>
        <Input
          type="text"
          name="search"
          placeholder="Search Categories"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <Button variant="orange" onClick={fetchPlaces}>Search</Button>
      </SearchWrapper>
      {userLocation ? <GoogleMaps
        apiKey={"AIzaSyCd8r2uiMhkaHw5p8WJe1inGbiQSgXX3co"}
        style={{ height: "100%", width: "100%" }}
        zoom={12}
        center={userLocation}
        markers={markers}
      /> : (
        null
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100vw;
  height: 85vh;
  overflow: hidden;
`;

const SearchWrapper = styled.div`
  display: flex; 
  width: 100vw;
  height: 5%;
`;

const Input = styled.input`
  width: 30%;
  height: 100%;
  margin: 0;
`;

export default GoogleMap;