import React, { useState, useEffect } from "react";
import Search from "../components/events/Search";
import Loading from "../components/events/Loading";
import EventDiv from "../components/events/EventDiv";
import styled from "styled-components";

const EventsList = () => {
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

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
      <Search />
      <Section>
        <EventsWrapper>
          {!isLoading ? displayEvents : <Loading />}
          {displayEvents}
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
  height: 95%;
`;

const EventsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  align-content: flex-start;
  height: 100%;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const Div = styled.div`
  display: flex;
  background: darkgray;
  box-shadow: 5px 5px 5px gray;
  width: 25%;
  margin: 1%;
`;

export default EventsList;