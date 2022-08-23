import React from 'react';
import { StandaloneSearchBox } from '@react-google-maps/api';

const SearchBox = ({ map, onPlacesChanged, onSBLoad }) => {
  return (
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
  )
}

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

export default SearchBox;