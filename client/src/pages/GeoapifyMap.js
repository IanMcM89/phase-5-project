import React, { useState, useEffect, useRef } from 'react';
import SearchBar from '../components/SearchBar';
import maplibregl from 'maplibre-gl';
import styled from "styled-components";

const GeoapifyMap = () => {
  const [mapData, setMapData] = useState(null)
  const mapContainer = useRef(null);
  const myAPIKey = process.env.REACT_APP_GEOAPIFY_API_KEY;

  //Fetch current user's geolocation data
  useEffect(() => {
    fetch(`https://api.geoapify.com/v1/ipinfo?apiKey=${myAPIKey}`)
      .then(resp => resp.json())
      .then((userLocationData) => {
        createMap(userLocationData.location);
      })
  }, [myAPIKey]);

  const createMap = (userLocation) => {
    const mapStyle = 'https://maps.geoapify.com/v1/styles/klokantech-basic/style.json';
    const map = new maplibregl.Map({
      container: mapContainer.current,
      style: `${mapStyle}?apiKey=${myAPIKey}`,
      center: [
        userLocation.longitude, 
        userLocation.latitude
      ],
      zoom: 11,
    });

    map.addControl(new maplibregl.NavigationControl());

    setMapData(map);
  }

  return (
    <Wrapper>
      <SearchBar map={mapData} apiKey={myAPIKey}/>
      <Map className="map-container" ref={mapContainer} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100vw;
  height: 90vh;
  overflow: hidden;
`;

const Map = styled.div`
  width: 100%;
  height: 95%;
`;

export default GeoapifyMap;