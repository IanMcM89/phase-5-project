import React from "react";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { fetchEvents } from "../../reducers/eventsSlice";
import StaticMap from "../events/StaticMap";
import { Button } from "../../styles";
import styled, { css } from "styled-components";

const Event = ({ event, user }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const handleDelete = () => {
    fetch(`/api/events/${event.id}`, {
      method: "DELETE"
    })
    .then(dispatch(fetchEvents('/api/events')))
    .then(history.push("/events"));
  };

  return (
    <Wrapper>
      <EventWrapper>
        <Section>
          <h1>{event.title}</h1>
          <Label>Location:</Label>
          <h2 style={{ margin: 'auto 0' }}>{event.location}</h2>
          <h3 style={{ margin: 'auto 0', color: 'dimgray' }}>{event.address}</h3>
          <FlexRow>
            <FlexColumn>
              <Label htmlFor="date">Date:</Label>
              <p>{event.date}</p>
            </FlexColumn>
            <FlexColumn>
              <Label htmlFor="time">Time:</Label>
              <p>{event.time}</p>
            </FlexColumn>
          </FlexRow>
          <Section>
            <Label htmlFor="description">Description:</Label>
            <p>{event.description}</p>
          </Section>
          <Section>
            <Button variant="red" style={{ margin: 0 }} onClick={handleDelete}>
              Delete Event
            </Button>
          </Section>
        </Section>
        <Section>
          <StaticMap event={event} />
        </Section>
      </EventWrapper>
    </Wrapper>
  )
};

const commonStyles = css`
  display: flex;
  width: 100%;
`;

const Wrapper = styled.div`
  ${commonStyles}
  background-color: lightgray;
  height: 90vh;
  padding: 3%;
`;

const EventWrapper = styled.div`
  ${commonStyles}
  background-color: white;
  box-shadow: 5px 5px 5px gray;
  border-radius: 10px;
  padding: 1%;
  overflow: hidden;
  animation: appear 0.6s ease forwards;
`;

const Section = styled.section`
  ${commonStyles}
  flex-direction: column;
  width: 50%;
  height: 100%;
`;

const Label = styled.label`
  ${commonStyles}
  font-size: 1rem;
  font-weight: 500;
`;

const FlexRow = styled.div`
  ${commonStyles}
  justify-content: space-between;
`;

const FlexColumn = styled.div`
  ${commonStyles}
  width: 48%;
  flex-direction: column;
`;

export default Event;