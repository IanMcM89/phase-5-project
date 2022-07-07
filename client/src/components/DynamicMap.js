import React, { useEffect, useRef } from 'react';
import maplibregl from 'maplibre-gl';
import styled from "styled-components";

const DynamicMap = ({ mapIsReadyCallback }) => {
  const mapContainer = useRef(null);

  useEffect(() => {
    const myAPIKey = '';
    const mapStyle = 'https://maps.geoapify.com/v1/styles/klokantech-basic/style.json';
    const initialState = {
      lat: 34,
      lng: -118,
      zoom: 10,
    };

    const map = new maplibregl.Map({
      container: mapContainer.current,
      style: `${mapStyle}?apiKey=${myAPIKey}`,
      center: [initialState.lng, initialState.lat],
      zoom: initialState.zoom,
    });

    mapIsReadyCallback(map);
  }, [mapContainer.current]);

  return <Map className="map-container" ref={mapContainer} />;
};

const Map = styled.div`
  width: 100vw;
  height: 90vh;
  overflow: hidden;
`;

export default DynamicMap;