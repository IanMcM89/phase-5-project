import React, { useEffect } from 'react';
import { useSelector } from "react-redux";
import { OverlayView } from '@react-google-maps/api';
import PopUpWindow from './PopUpWindow';

const Overlay = ({ setCurrentLoc }) => {
  const place = useSelector((state) => state.place);
  const event = useSelector((state) => state.event);

  useEffect(() => {
    if (place) {
      setCurrentLoc({
        lat: (place.geometry.location.lat() + 0.01),
        lng: place.geometry.location.lng(),
      });
    } else if (event) {
      setCurrentLoc({
        lat: (Number(event.lat) + 0.01),
        lng: (Number(event.lng)),
      });
    }
  }, [place, event, setCurrentLoc]);

  const getPixelPositionOffset = (width, height) => ({
    x: -(width / 2),
    y: -(height / 2)
  });

  const getCoords = () => {
    if (place) {
      return place.geometry.location;
    } else if (event) {
      return {
        lat: (Number(event.lat)),
        lng: (Number(event.lng)),
      }
    }
  }

  return (
    <>
      {(place || event) ? (
        <OverlayView
          position={getCoords()}
          mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
          getPixelPositionOffset={getPixelPositionOffset}
        >
          <PopUpWindow />
        </OverlayView>
      ) : (
        null
      )}
    </>
  )
}

export default Overlay;