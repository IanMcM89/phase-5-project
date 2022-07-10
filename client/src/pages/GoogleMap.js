import React, { useState, useEffect } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import { Button } from "../styles";
import styled from "styled-components";

const GoogleMap = ({ google }) => {
  const [location, setLocation] = useState(null);
  const [searchValue, setSearchValue] = useState('');
  const [markers, setMarkers] = useState(null);
  const [zoom, setZoom] = useState(12);

  const mapStyles = {
    width: '100%',
    height: '100%',
  };

  //Fetch current user's geolocation data
  useEffect(() => {
    fetch(`https://api.geoapify.com/v1/ipinfo?apiKey=${process.env.REACT_APP_GEOAPIFY_API_KEY}`)
      .then(resp => resp.json())
      .then((locationData) => {
        setLocation({
          lat: locationData.location.latitude,
          lng: locationData.location.longitude
        });
      })
  }, []);

  const fetchPlaces = () => {
    const placesUrl = `https://api.geoapify.com/v2/places?categories=${searchValue}&filter=circle:${location.lng},${location.lat},25000&bias=proximity:${location.lng},${location.lat}&limit=5`;

    fetch(`${placesUrl}&apiKey=${process.env.REACT_APP_GEOAPIFY_API_KEY}`)
    .then(resp => resp.json())
    .then((places) => {
      setMarkers(createMarkers(places));
      setLocation({
        lat: places.features[0].geometry.coordinates[1],
        lng: places.features[0].geometry.coordinates[0]
      });
      setZoom(11);
    });
  };

  const createMarkers = (places) => {
    return places.features.map((place, index) => {
      return <Marker key={index} id={index} position={{
       lat: place.geometry.coordinates[1],
       lng: place.geometry.coordinates[0]
     }}
     onClick={() => console.log(place)}/>
    })
  };

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
        <Button variant="orange" onClick={searchValue ? fetchPlaces : null}>Search</Button>
      </SearchWrapper>
      {location ? <Map
          google={google}
          zoom={zoom}
          style={mapStyles}
          initialCenter={location}
          center={location}
        >
          {markers}
        </Map> : null}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 95vw;
  height: 90vh;
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

export default GoogleApiWrapper({
  apiKey: `${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`
})(GoogleMap);