import React, { useEffect, useState } from 'react';
import { GoogleMap, StandaloneSearchBox } from '@react-google-maps/api';
import { useSelector, useDispatch } from "react-redux";
import { fetchEvents } from "../../reducers/eventsSlice";
import { setPlace } from "../../reducers/placeSlice";
import EventOverlays from "../map/EventOverlays";
import PlaceOverlay from "../map/PlaceOverlay";
import SearchBox from "../map/SearchBox";
import Markers from "./Markers";

function DynamicMap({ user }) {
  const events = useSelector((state) => state.events.entities);
  const friends = useSelector((state) => state.friends.entities);
  const [searchBox, setSearchBox] = useState(null);
  const [center, setCenter] = useState(null);
  const [location, setLocation] = useState(null);
  const [places, setPlaces] = useState([]);
  const [map, setMap] = useState(null);
  const [zoom, setZoom] = useState(12);
  const dispatch = useDispatch();

  // Fetches current user's geolocation:
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos) => {
      setCenter({
        lat: pos.coords.latitude,
        lng: pos.coords.longitude,
      });
    });
  }, []);

  useEffect(() => {
    dispatch(setPlace(null));
    dispatch(fetchEvents());
  }, [friends, dispatch]);

  // Fetches places from Google Places API using searchbox query:
  const changePlaces = () => {
    const results = searchBox.getPlaces();
    if (results) {
      const loc = results[0].geometry.location;
      dispatch(setPlace(null));
      setPlaces(results);
      setZoom(14);
      map.panTo({
        lat: loc.lat(),
        lng: loc.lng()
      })
    }
  }

  // Sets location to new center coords after map drag:
  const updateCenter = () => {
    if (map) setLocation(map.getCenter().toJSON());
  }

  return (
    <GoogleMap
      options={{
        disableDoubleClickZoom: true,
        gestureHandling: 'greedy',
        fullscreenControl: false,
        streetViewControl: false,
        clickableIcons: false,
        mapTypeId: 'terrain'
      }}
      mapContainerStyle={mapStyles}
      onDragEnd={updateCenter}
      onLoad={(ref) => setMap(ref)}
      zoom={zoom}
      location={location}
      center={center}
    >
      <StandaloneSearchBox
        bounds={map ? map.getBounds() : null}
        onPlacesChanged={changePlaces}
        onLoad={(ref) => setSearchBox(ref)}
      >
        <SearchBox searchBox={searchBox} setPlaces={setPlaces} />
      </StandaloneSearchBox>
      <EventOverlays user={user} events={events}/>
      <PlaceOverlay setLocation={setLocation}/>
      <Markers
        map={map}
        user={user}
        places={places}
        events={events}
      />
    </GoogleMap>
  );
}

const mapStyles = {
  width: '100%',
  height: '100%',
};

export default DynamicMap;