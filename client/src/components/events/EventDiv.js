import React from "react";
import { useHistory } from "react-router-dom";
import MapStatic from "../map/MapStatic";
import styled, { css } from "styled-components";

const EventDiv = ({ event }) => {
  const history = useHistory();

  return (
    <Wrapper onClick={() => history.push(`/events/${event.id}`)}>
      <Title>{event.title}</Title>
      <Date>📅&nbsp;{event.date}</Date>
      <MapStatic event={event} />
    </Wrapper>
  )
};

const commonStyles = css`
  display: flex;
  justify-content: center;
  background: rgb(50,55,65);
`;

const Wrapper = styled.div`
  ${commonStyles}
  position: relative;
  flex-direction: column;
  justify-content: flex-start;
  background: white;
  box-shadow: 5px 5px 5px gray;
  border: solid 4px rgb(50,55,65);
  width: 23%;
  height: 46%;
  margin: 1%;
  animation: expand 0.4s ease forwards;
  
  &:hover {
    border: solid 4px red;
  }
`;

const Title = styled.h2`
  ${commonStyles}
  color: white;
  font-size: 1rem;
  height: 12%;
  margin: 0;
  padding: 1%;
`;

const Date = styled.p`
  ${commonStyles}
  position: absolute;
  bottom: 0;
  border-radius: 0 10px 0 0;
  color: white;
  margin: 0;
  padding: 4px;
  z-index: 1;
`;

export default EventDiv;