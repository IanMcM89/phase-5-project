import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { setPlace } from "../../reducers/places";
import { setEvent } from "../../reducers/event";
import { Button } from "../../styles";
import Photos from "./Photos";
import styled, { css } from "styled-components";

const PopUpWindow = () => {
  const place = useSelector((state) => state.place);
  const event = useSelector((state) => state.event);
  const dispatch = useDispatch();
  const history = useHistory();

  if (place) {
    return (
        <>
          <PopUp>
            <Exit onClick={() => dispatch(setPlace(null))}>X</Exit>
            <Photos photos={place.photos} />
            <h2>{place.name}</h2>
            <p style={{ margin: '2%' }}>{place.formatted_address}</p>
            <Star>★★★★★</Star>
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
    )
  } else if (event) {
    return (
        <>
          <PopUp>
            <Exit onClick={() => dispatch(setEvent(null))}>X</Exit>
            <h1>{event.user.username}</h1>
            <h2>{event.title}</h2>
            <Button
              variant='green'
              onClick={() => history.push(`/events/${event.id}`)}
              style={{ margin: '2%' }}
            >
              See Event
            </Button>
          </PopUp>
          <PopUpAnchor />
        </>
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
    transform: translate(-50%, -10%);
    border-left: solid 6px transparent;
    border-right: solid 6px transparent;
    border-top: solid 8px white;
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

const Star = styled.div`
  ${commonStyles}
  color: gold;
  font-size: 1.2rem;
  margin: 0;
`;

export default PopUpWindow;