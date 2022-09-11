import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { OverlayView } from '@react-google-maps/api';
import Photos from "./Photos";
import { setPlace } from "../../reducers/places";
import { Button } from "../../styles";
import styled, { css } from "styled-components";

const Overlay = ({ setCurrentLoc }) => {
  const getPixelPositionOffset = (width, height) => ({
    x: -(width / 2),
    y: -(height / 2)
  });

  const place = useSelector((state) => state.place);

  const dispatch = useDispatch();

  const history = useHistory();

  useEffect(() => {
    if (place) setCurrentLoc({
        lat: (place.geometry.location.lat() + 0.01),
        lng: place.geometry.location.lng(),
      });
  }, [place, setCurrentLoc]);

  if (place) {
    return (
      <OverlayView
        position={place.geometry.location}
        mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
        getPixelPositionOffset={getPixelPositionOffset}
      >
        <>
          <PopUp>
            <Exit onClick={() => dispatch(setPlace(null))}>X</Exit>
            <Photos photos={place.photos} />
            <Heading>
              <H1>{place.name}</H1>
              {place.rating ? (
                <Rating>
                  <Star>★</Star>&nbsp;
                  <H2>{place.rating}</H2>
                </Rating>
              ) : (
                null
              )}
            </Heading>
            <p style={{ margin: '2%' }}>{place.formatted_address}</p>
            <Button
              variant='green'
              onClick={() => history.push("/events/create")}
              style={{ margin: '2%' }}
            >
              Create Event
            </Button>
          </PopUp>
          <PopUpAnchor />
        </>
      </OverlayView>
    )
  } else {
    return null;
  }
}

const commonStyles = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  text-align: center;
  margin: 0;
`;

const PopUp = styled.div`
  ${commonStyles}
  position: absolute;
  transform: translate(-50%, -100%);
  background-color: white;
  box-shadow: 0px 2px 10px 1px rgba(0, 0, 0, 0.5);
  width: fit-content;
  height: fit-content;
  animation: appear 0.6s ease forwards;
`;

const PopUpAnchor = styled.div`
  position: absolute;

  ::after {
    content: "";
    position: absolute;
    transform: translate(-50%, 0);
    border-left: solid 6px transparent;
    border-right: solid 6px transparent;
    border-top: solid 8px white;
  }
`;

const Exit = styled.button`
  ${commonStyles}
  position: absolute;
  background-color: red;
  box-shadow: 0px 2px 10px 1px rgba(0, 0, 0, 0.4);
  border-radius: 50%;
  color: lightgray;
  border: none;
  top: 0;
  right: 0;
  width: 25px;
  height: 25px;
  margin: 1%;
  cursor: pointer;
`;

const Heading = styled.div`
  ${commonStyles}
  width: 100%;
  flex-direction: row;
`;

const Rating = styled.div`
  ${commonStyles}
  flex-direction: row;
`;

const H1 = styled.h1`
  font-size: 1vw;
  margin: 2%;
`;

const H2 = styled.h2`
  color: dimgray;
`;

const Star = styled.div`
  ${commonStyles}
  color: gold;
  margin-bottom: 8%;
  font-size: 1.2rem;
`;

export default Overlay;