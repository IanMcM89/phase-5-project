import React from 'react';
import { OverlayView } from '@react-google-maps/api';
import { Button } from "../../styles";
import styled, { css } from "styled-components";

const Overlay = ({ overlay, setOverlay }) => {
  const getPixelPositionOffset = (width, height) => ({
    x: -(width / 2),
    y: -(height / 2)
  });

  if (overlay) {
    return (
      <OverlayView
        position={overlay.geometry.location}
        mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
        getPixelPositionOffset={getPixelPositionOffset}
      >
        <>
          <PopUp>
            <Exit onClick={() => setOverlay(null)}>X</Exit>
            <Photo src={overlay.photos[0].getUrl()} alt="" />
            <h1 style={{ margin: '2%' }}>{overlay.name}</h1>
            <p style={{ margin: '2%' }}>{overlay.formatted_address}</p>
            <Rating>
              <Star>★</Star>&nbsp;
              <h2 style={{ margin: '2%' }}>{overlay.rating}</h2>
            </Rating>
            {/* <h3 style={{ margin: 0 }}>★{overlay.rating}</h3> */}
            {/* {overlay.photos.map((photo, i) => {
            return (
              <Photo key={i} src={photo.getUrl()} alt=""/>
            )
          })} */}
            <Button
              variant='green'
              onClick={() => console.log(overlay)}
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
  padding: 6px;
  box-shadow: 0px 2px 10px 1px rgba(0, 0, 0, 0.5);
  width: fit-content;
  height: fit-content;
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

const Photo = styled.img`
  ${commonStyles}
  width: 20vw;
`;

const Rating = styled.div`
  ${commonStyles}
  flex-direction: row;
`;

const Star = styled.div`
  ${commonStyles}
  color: gold;
  margin-bottom: 10%;
  font-size: 1.2rem;
`;

export default Overlay;