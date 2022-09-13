import React, { useEffect, useState } from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import { useDispatch } from "react-redux";
import { setPlace } from "../reducers/places";
import SearchBox from "../components/map/SearchBox";
import Overlay from "../components/map/Overlay";
import Pin from "../components/map/Pin";
import styled from "styled-components";

const libraries = ['places'];

function Map() {
  const [currentLoc, setCurrentLoc] = useState(null);
  const [searchBox, setSearchBox] = useState(null);
  const [events, setEvents] = useState([]);
  const [places, setPlaces] = useState([]);
  const [map, setMap] = useState(null);
  const [zoom, setZoom] = useState(12);

  const dispatch = useDispatch();

  // Fetches current user's geolocation:
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos) => {
      setCurrentLoc({
        lat: pos.coords.latitude,
        lng: pos.coords.longitude,
      });
    });
  }, []);

  useEffect(() => {
    fetch("/api/events").then((r) => {
      if (r.ok) {
        r.json()
          .then((eventData) => setEvents(eventData));
      }
    });
  }, []);

  // Sets map ref on load:
  const loadMap = (ref) => {
    setMap(ref);
  }

  // Sets search ref on load:
  const loadSB = (ref) => {
    setSearchBox(ref);
  };

  // Fetches places from Google Places API using searchbox query:
  const changePlaces = () => {
    const results = searchBox.getPlaces();
    if (results) {
      const loc = results[0].geometry.location;
      dispatch(setPlace(null));
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
        {currentLoc ? (
          <GoogleMap
            options={{ 
              disableDoubleClickZoom: true,
              streetViewControl: false,
              mapTypeId: 'terrain'
            }}
            fullscreenControl={false}
            mapContainerStyle={mapStyles}
            onDragEnd={updateCenter}
            clickableIcons={false}
            onLoad={loadMap}
            zoom={zoom}
            center={{
              lat: currentLoc.lat,
              lng: currentLoc.lng
            }}
          >
            <SearchBox
              map={map}
              onPlacesChanged={changePlaces}
              onSBLoad={loadSB}
            />
            <Overlay setCurrentLoc={setCurrentLoc}/>
            <Pin places={places} />
            <Pin events={events} />
          </GoogleMap>
        ) : (
          null
        )}
      </LoadScript>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: beige;
  width: 100%;
  height: 90vh;
  overflow: hidden;
`;

const mapStyles = {
  width: '100%',
  height: '100%',
};

export default Map;