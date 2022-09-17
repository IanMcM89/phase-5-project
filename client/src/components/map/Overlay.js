import React, { useEffect } from 'react';
import { useSelector } from "react-redux";
import { OverlayView } from '@react-google-maps/api';
import PopUpWindow from './PopUpWindow';

const Overlay = ({ setPosition }) => {
  const place = useSelector((state) => state.place);
  const event = useSelector((state) => state.event);

  useEffect(() => {
    if (place) {
      setPosition({
        lat: (Number(place.lat + 0.01)),
        lng: (Number(place.lng)),
      });
    } else if (event) {
      setPosition({
        lat: (Number(event.lat) + 0.01),
        lng: (Number(event.lng)),
      });
    }
  }, [place, event, setPosition]);

  const getPixelPositionOffset = (width, height) => ({
    x: -(width / 2),
    y: -(height / 2)
  });

  const getCoords = () => {
    if (place) {
      return {
        lat: (Number(place.lat)),
        lng: (Number(place.lng)),
      }
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