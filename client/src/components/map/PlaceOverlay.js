import React, { useEffect } from 'react';
import { useSelector } from "react-redux";
import { OverlayView } from '@react-google-maps/api';
import PlacePopUp from './PlacePopUp';

const Overlay = ({ setPosition }) => {
  const place = useSelector((state) => state.place);

  useEffect(() => {
    if (place) {
      // setPosition({
      //   lat: place.lat,
      //   lng: place.lng,
      // });
    }
  }, [place, setPosition]);

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