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
        {/* <Date>📅&nbsp;{event.date}</Date> */}
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
  flex-direction: column;
  justify-content: flex-start;
  background: white;
  box-shadow: 5px 5px 5px gray;
  margin: 4px;
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
  background: rgb(50,55,65,0.6);
  position: absolute;
  color: white;
  font-weight: 500;
  top: 17.5%;
  padding: 4px;
  z-index: 1;
`;

export default EventDiv;