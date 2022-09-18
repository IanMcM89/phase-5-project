import React, { useEffect, useState } from 'react';
import { GoogleMap } from '@react-google-maps/api';
import { useDispatch } from "react-redux";
import { setPlace } from "../../reducers/placeSlice";
import SearchBox from "../map/SearchBox";
import Overlay from "../map/Overlay";
import Markers from "./Markers";

function DynamicMap({ user }) {
  const [position, setPosition] = useState(null);
  const [searchBox, setSearchBox] = useState(null);
  const [events, setEvents] = useState([]);
  const [places, setPlaces] = useState([]);
  const [map, setMap] = useState(null);
  const [zoom, setZoom] = useState(12);
  const dispatch = useDispatch();

  // Fetches current user's geolocation:
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos) => {
      setPosition({
        lat: pos.coords.latitude,
        lng: pos.coords.longitude,
      });
    });
  }, []);

  useEffect(() => {
    dispatch(setPlace(null));
    fetch("/api/events").then((r) => {
      if (r.ok) {
        r.json()
          .then((eventData) => setEvents(eventData));
      }
    });
  }, [dispatch]);

  // Fetches places from Google Places API using searchbox query:
  const changePlaces = () => {
    const results = searchBox.getPlaces();
    if (results) {
      const loc = results[0].geometry.location;
      dispatch(setPlace(null));
      setPlaces(results);
      setZoom(14);
      setPosition({
        lat: loc.lat(),
        lng: loc.lng()
      });
    }
  }

  // Sets position to new center coords after map drag:
  const updateCenter = () => {
    if (map) setPosition(map.getCenter().toJSON());
  }

  return (
    <>
      <GoogleMap
        options={{
          disableDoubleClickZoom: true,
          fullscreenControl: false,
          streetViewControl: false,
          clickableIcons: false,
          mapTypeId: 'terrain'
        }}
        mapContainerStyle={mapStyles}
        onDragEnd={updateCenter}
        onLoad={(ref) => setMap(ref)}
        zoom={zoom}
        center={position ? ({
          lat: position.lat,
          lng: position.lng
        }) : null}
      >
        <SearchBox
          map={map}
          onPlacesChanged={changePlaces}
          onSBLoad={(ref) => setSearchBox(ref)}
        />
        <Overlay
          position={position}
          setPosition={setPosition}
        />
        <Markers
          map={map}
          user={user}
          places={places}
          events={events}
        />
      </GoogleMap>
    </>
  );
}

const mapStyles = {
  width: '100%',
  height: '100%',
};

export default DynamicMap;