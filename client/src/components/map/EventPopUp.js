import React from 'react';
import { useHistory } from "react-router-dom";
import { OverlayView } from '@react-google-maps/api';
import styled, { css } from "styled-components";

const EventPopUp = ({ user, event }) => {
  const history = useHistory();

  const handleClick = () => {
    history.push(`/events/${event.id}`)
  }

  const getColor = () => {
    return (event.user.id === user.id) ? (
      "limegreen"
    ) : (
      "darkblue"
    );
  }

  return (
    <OverlayView
      mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
      position={{
        lat: event.lat,
        lng: event.lng,
      }}
    >
      <>
        <PopUp onClick={handleClick}>
          <Avatar
            style={{ border: `solid 2px ${getColor()}` }}
            src={
              event.user.avatar ? event.user.avatar : "/images/icons/avatar.png"
            }
            alt=""
          />
          <Username style={{ background: `${getColor()}` }}>
            {event.user.username}
          </Username>
          <Title>{event.title}</Title>
          <PopUpAnchor />
        </PopUp>
      </>
    </OverlayView>
  )
}
const commonStyles = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const PopUp = styled.div`
  ${commonStyles}
  background: white;
  position: absolute;
  transform: translate(-50%, -160%);
  box-shadow: 0px 2px 10px 1px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  width: 9vw;
  cursor: pointer;
  animation: appear 1.6s ease forwards;
`;

const PopUpAnchor = styled.div`
  position: absolute;
  ::after {
    content: "";
    position: absolute;
    transform: translate(-50%, 100%);
    border-left: solid 10px transparent;
    border-right: solid 10px transparent;
    border-top: solid 15px white;
  }
`;

const Avatar = styled.img`
  ${commonStyles}
  position: absolute;
  background: gray;
  border: solid 2px rgb(50,55,65);
  border-radius: 50%;
  top: -20%;
  left: -20%;
  width: 30px;
  height: 30px;
  margin: 1%;
  z-index: 10;
`;

const Username = styled.p`
  ${commonStyles}
  background: rgb(50,55,65);
  border-radius: 0 10px 0;
  color: white;
  font-size: 0.7rem;
  font-weight: bold;
  width: 100%;
  height: 40%;
  margin: 0;
  padding: 2%;
`;

const Title = styled.h2`
  display: flex;
  width: max-content;
  font-size: 0.6rem;
  padding: 4%;
  margin: 0;
`;

export default EventPopUp;