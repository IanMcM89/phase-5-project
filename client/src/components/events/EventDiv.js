import React from "react";
import { useHistory } from "react-router-dom";
import StaticMap from "./StaticMap";
import styled, { css } from "styled-components";

const EventDiv = ({ event }) => {
  const history = useHistory();

  console.log(event.user)

  return (
    <Border>
      <Wrapper>
        <UserWrapper>
          <Avatar
            src={event.user.avatar ? event.user.avatar : "/images/icons/avatar.png"}
            alt="Avatar Image"
          />
          <H2>{event.user.username}</H2>
        </UserWrapper>
        <MapWrapper onClick={() => history.push(`/events/${event.id}`)}>
          <StaticMap event={event} />
        </MapWrapper>
        <InfoWrapper>
          <h4>{event.title}</h4>
          <p>{event.date}</p>
          <p>{event.time}</p>
        </InfoWrapper>
      </Wrapper>
    </Border>
  )
};

const commonStyles = css`
  display: flex;
  width: 100%;
`;

const Border = styled.div`
  ${commonStyles}
  width: 20%;
  margin: 0.5%;
  &:hover {
    background: red;
  }
`;

const Wrapper = styled.div`
  ${commonStyles}
  flex-direction: column;
  margin: 4px;
  background: white;
  box-shadow: 5px 5px 5px gray;
  &:hover {
    box-shadow: none;
  }
`;

const UserWrapper = styled.div`
  ${commonStyles}
  background: rgb(50,55,65);
  overflow: hidden;
`;

const MapWrapper = styled.div`
  ${commonStyles}
  height: 60%;
`;

const InfoWrapper = styled.div`
  ${commonStyles}
  display: flex;
  flex-direction: column;
  height: 25%;
  overflow: hidden;
`;

const Avatar = styled.img`
  ${commonStyles}
  flex-direction: column;
  justify-content: center;
  width: auto;
  height: 30px;
  margin: 2%;
`;

const H2 = styled.h2`
  ${commonStyles}
  justify-content: flex-start;
  color: white;
  font-size: 1rem;
  margin: auto;
`;

export default EventDiv;