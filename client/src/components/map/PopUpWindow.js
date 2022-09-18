import React from 'react';
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { setPlace } from "../../reducers/placeSlice";
import { Button, Rating } from "../../styles";
import Photos from "./Photos";
import styled, { css } from "styled-components";

const PopUpWindow = ({ place }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  if (place.type.includes("place")) {
    return (
      <>
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
        </PopUp>
        <PopUpAnchor />
      </>
    )
  } else if (place.type.includes("event")) {
    return (
      <>
        <PopUp>
          <Exit onClick={() => dispatch(setPlace(null))}>X</Exit>
          <Avatar
            src={
              place.user.avatar ? place.user.avatar : "/images/icons/avatar.png"
            }
            alt=""
          />
          <Username>{place.user.username}</Username>
          <h2 style={{ width: '16vw' }}>{place.title}</h2>
          <Button
            variant='green'
            onClick={() => history.push(`/events/${place.id}`)}
            style={{ marginBottom: '5%' }}
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
  background: white;
  box-shadow: 0px 2px 10px 1px rgba(0, 0, 0, 0.5);
  border: solid 3px rgb(50,55,65);
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
    transform: translate(-50%, -10%);
    border-left: solid 10px transparent;
    border-right: solid 10px transparent;
    border-top: solid 15px rgb(50,55,65);
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

const Avatar = styled.img`
  ${commonStyles}
  position: absolute;
  background: gray;
  border-radius: 50%;
  border: solid 3px rgb(50,55,65);
  top: -26%;
  left: -11%;
  width: 50px;
  height: 50px;
  margin: 1%;
  z-index: 10;
`;

const Username = styled.p`
  ${commonStyles}
  position: absolute;
  background: rgb(50,55,65);
  color: white;
  font-size: 0.8rem;
  font-weight: bold;
  border-radius: 6px;
  top: -11%;
  left: 0;
  width: 10vw;
  height: fit-content;
  margin: 1%;
  z-index: 9;
`;

export default PopUpWindow;