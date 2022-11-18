import React from 'react';
import { LoadScript } from '@react-google-maps/api';
import MapDynamic from "../components/map/MapDynamic";
import styled from "styled-components";

const libraries = ['places'];

function Map({ user }) {
  return (
    <Wrapper>
      <LoadScript
        googleMapsApiKey={`${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`}
        libraries={libraries}
      >
        <MapDynamic user={user} />
      </LoadScript>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  background-color: beige;
  width: 75%;
  height: 100%;
  overflow: hidden;
  @media (max-width: 480px) {
    width 100%;
    height: 50%;
  }
`;

export default Map;