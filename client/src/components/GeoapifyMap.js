import React, { useEffect, useRef } from 'react';
import maplibregl from 'maplibre-gl';
import styled from "styled-components";

const GeoapifyMap = () => {
  const mapContainer = useRef(null);
  const myAPIKey = process.env.REACT_APP_GEOAPIFY_API_KEY;

  useEffect(() => {
    fetch(`https://api.geoapify.com/v1/ipinfo?apiKey=${myAPIKey}`)
      .then(resp => resp.json())
      .then((userLocationData) => {
        renderMap(userLocationData.location);
      })
  }, [myAPIKey]);

  const renderMap = (userLocation) => {
    const marker = `https://api.geoapify.com/v1/icon/?type=awesome&color=red&iconSize=small&scaleFactor=2&apiKey=${myAPIKey}`
    const mapStyle = 'https://maps.geoapify.com/v1/styles/klokantech-basic/style.json';
    const initialState = {
      lat: userLocation.latitude,
      lng: userLocation.longitude,
      zoom: 10,
    };

    const map = new maplibregl.Map({
      container: mapContainer.current,
      style: `${mapStyle}?apiKey=${myAPIKey}`,
      center: [initialState.lng, initialState.lat],
      zoom: initialState.zoom,
    });

    map.on('load', () => {
      const scale=2;
      map.loadImage(marker, function(error, image) {
        if (error) throw error;
        map.addImage('rosa-pin', image, {pixelRatio: scale});
      });
    
      const type = "beach"
      const placesUrl = `https://api.geoapify.com/v2/places?categories=beach&filter=rect:-118.60527526727138,34.18697184817763,-117.76777527892354,33.54534571879304&limit=5&apiKey=${myAPIKey}`
    
      fetch(placesUrl)
      .then(response => response.json())
      .then((places) => {
        showGeoJSONPoints(places, type);
      });
    });
    
    const showGeoJSONPoints = (geojson, id) => {
      const layerId = `${id}-layer`;
    
      if (map.getSource(id)) {
        map.removeLayer(layerId);
        map.removeSource(id);
      }
    
      map.addSource(id, {
        'type': 'geojson',
        'data': geojson
      });
    
      map.addLayer({
        'id': layerId,
        'type': 'symbol',
        'source': id,
        'layout': {
          'icon-image': 'rosa-pin',
          'icon-anchor': 'bottom',
          'icon-offset': [0, 5],
          'icon-allow-overlap': true
        }
      });

      map.on('click', layerId, function(e) {
        const coordinates = e.features[0].geometry.coordinates.slice();
        const name = e.features[0].properties.name;
    
        // Ensure that if the map is zoomed out such that multiple
        // copies of the feature are visible, the popup appears
        // over the copy being pointed to.
        while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
          coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
        }
    
        new maplibregl.Popup({
            anchor: 'bottom',
            offset: [0, -50]
          })
          .setLngLat(coordinates)
          .setText(name)
          .addTo(map);
      });
    
      // Change the cursor to a pointer when the mouse is over the places layer.
      map.on('mouseenter', layerId, function() {
        map.getCanvas().style.cursor = 'pointer';
      });
    
      // Change it back to a pointer when it leaves.
      map.on('mouseleave', layerId, function() {
        map.getCanvas().style.cursor = '';
      });
    }
  }

  return <Map className="map-container" ref={mapContainer} />;
};

const Map = styled.div`
  width: 100vw;
  height: 90vh;
  overflow: hidden;
`;

export default GeoapifyMap;