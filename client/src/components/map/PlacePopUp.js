import React from 'react';
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { setPlace } from "../../reducers/placeSlice";
import { Button, Rating } from "../../styles";
import Photos from "./Photos";
import styled, { css } from "styled-components";

const PopUpPlace = ({ place }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  return (
    <PopUp>
      <Exit onClick={() => dispatch(setPlace(null))}>X</Exit>
      <Photos photos={place.photos} />
      <h2>{place.name}</h2>
      <p style={{ margin: '1%' }}>{place.formatted_address}</p>
      <Rating rating={place.rating} />
      <Button
        variant='green'
        onClick={() => history.push("/events/create")}
        style={{ margin: '5%' }}
      >
        Create Event
      </Button>
      <PopUpAnchor />
    </PopUp>
  )
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
  transform: translate(-50%, -108%);
  background: white;
  box-shadow: 0px 2px 10px 1px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  width: fit-content;
  height: fit-content;
  animation: appear 0.6s ease forwards;
`;

const PopUpAnchor = styled.div`
  position: absolute;
  ::after {
    content: "";
    position: absolute;
    transform: translate(-50%, 1160%);
    border-left: solid 10px transparent;
    border-right: solid 10px transparent;
    border-top: solid 15px white;
  }
`;

const Exit = styled.button`
  ${commonStyles}
  position: absolute;
  background: rgb(200, 55, 55);
  color: lightgray;
  border: none;
  top: 0;
  right: 0;
  width: 25px;
  height: 25px;
  margin: 1%;
  cursor: pointer;
  transition: 0.3s;
  z-index: 10;
  &:hover {
    background-color: red;
  }
`;

export default PopUpPlace;