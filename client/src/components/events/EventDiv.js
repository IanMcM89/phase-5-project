import React from "react";
import { useHistory } from "react-router-dom";
import StaticMap from "./StaticMap";
import styled, { css } from "styled-components";

const EventDiv = ({ event }) => {
  const history = useHistory();

  return (
    <Border>
      <Wrapper onClick={() => history.push(`/events/${event.id}`)}>
        <Title>{event.title}</Title>
        <Date>📅&nbsp;{event.date}</Date>
        <StaticMap event={event} />
      </Wrapper>
    </Border>
  )
};

const commonStyles = css`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const Border = styled.div`
  ${commonStyles}
  width: 24%;
  height: 48%;
  margin: 0.5%;
  &:hover {
    background: red;
  }
`;

const Wrapper = styled.div`
  ${commonStyles}
  position: relative;
  flex-direction: column;
  justify-content: flex-start;
  background: white;
  box-shadow: 5px 5px 5px gray;
  border: solid 4px rgb(50,55,65);
  width: 97%;
  margin: 4px;
  animation: expand 0.4s ease forwards;
  &:hover {
    box-shadow: none;
  }
`;

const Title = styled.h2`
  ${commonStyles}
  background: rgb(50,55,65);
  color: white;
  font-size: 1rem;
  height: 12%;
  margin: 0;
  padding: 1%;
`;

const Date = styled.p`
  position: absolute;
  top: 4%;
  background: rgb(50,55,65,0.7);
  border-radius: 0 0 10px;
  color: white;
  padding: 4px;
  z-index: 1;
`;

export default EventDiv;