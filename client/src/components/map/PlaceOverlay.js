import React, { useEffect } from 'react';
import { useSelector } from "react-redux";
import { OverlayView } from '@react-google-maps/api';
import PlacePopUp from './PlacePopUp';

const Overlay = ({ setLocation }) => {
  const place = useSelector((state) => state.place);

  useEffect(() => {
    if (place) {
      setLocation({
        lat: place.lat,
        lng: place.lng,
      });
    }
  }, [place, setLocation]);

  return (
    <>
      {(place) ? (
        <OverlayView
          position={{
            lat: place.lat,
            lng: place.lng,
          }}
          mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
        >
          <PlacePopUp place={place} />
        </OverlayView>
      ) : (
        null
      )}
    </>
  )
}

export default Overlay;