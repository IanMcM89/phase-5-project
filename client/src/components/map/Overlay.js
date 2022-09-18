import React, { useEffect } from 'react';
import { useSelector } from "react-redux";
import { OverlayView } from '@react-google-maps/api';
import PopUpWindow from './PopUpWindow';

const Overlay = ({ setPosition }) => {
  const place = useSelector((state) => state.place);

  useEffect(() => {
    if (place) {
      setPosition({
        lat: place.lat,
        lng: place.lng,
      });
    }
  }, [place, setPosition]);

  const getPixelPositionOffset = (width, height) => ({
    x: -(width / 2),
    y: -(height / 2)
  });

  return (
    <>
      {(place) ? (
        <OverlayView
          position={{
            lat: place.lat,
            lng: place.lng,
          }}
          mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
          getPixelPositionOffset={getPixelPositionOffset}
        >
          <PopUpWindow place={place} />
        </OverlayView>
      ) : (
        null
      )}
    </>
  )
}

export default Overlay;