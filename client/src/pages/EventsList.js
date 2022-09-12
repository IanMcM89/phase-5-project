import React, { useState, useEffect } from "react";
import EventDiv from "../components/events/EventDiv";
import styled from "styled-components";

const EventsList = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("/api/events").then((r) => {
      if (r.ok) {
        r.json()
          .then((eventData) => setEvents(eventData));
      }
    });
  }, []);

  const displayEvents = events.map((event) => {
    return (
      <EventDiv key={event.id} event={event} />
    )
  })

  return (
    <Wrapper>
      <Section>
        <Label>My Events</Label>
        <EventsWrapper>
          {displayEvents}
          <Div />
        </EventsWrapper>
      </Section>
      <Section>
        <Label>Friends' Events</Label>
        <EventsWrapper>
          <Div />
          <Div />
          <Div />
          <Div />
          <Div />
        </EventsWrapper>
      </Section>
    </Wrapper>
  )
};

const Wrapper = styled.div`
  background-color: lightgray;
  width: 100%;
  height: 90vh;
  overflow: hidden;
  padding: 1% 0.5%;
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  height: 50%;
  overflow-x: hidden;
`;

const Label = styled.label`
  display: flex;
  flex-direction: row;
  align-items: center;
  background: white;
  color: gray;
  font-size: 1rem;
  font-weight: 500;
  border-radius: 4px;
  box-shadow: 0 0 5px darkgray;
  height: 8%;
  margin: 0 1%;
  padding: 4px;
`;

const EventsWrapper = styled.div`
  display: flex;
  height: 92%;
`;

const Div = styled.div`
  display: flex;
  background: darkgray;
  box-shadow: 5px 5px 5px gray;
  width: 18%;
  margin: 1%;
`;
export default EventsList;