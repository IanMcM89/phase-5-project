import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchEvents } from "../reducers/eventList";
import Search from "../components/events/Search";
import Loading from "../components/events/Loading";
import EventDiv from "../components/events/EventDiv";
import styled from "styled-components";

const EventsList = ({ user }) => {
  const events = useSelector((state) => state.events.entities);
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => {
    return state.events.status.includes('loading');
  });

  useEffect(() => {
    dispatch(fetchEvents('/api/events'));
  }, [dispatch]);

  const filterEvents = events.filter((event) => {
    return event.user.id === user.id;
  }).map((event) => {
    return <EventDiv key={event.id} event={event} />
  });

  const displayEvents = () => {
    const num = (8 - filterEvents.length);

    return (
      <>
        {filterEvents}
        {[...Array(Math.max(0, (num)))].map((e, i) => {
          return <PlaceHolder key={i} />
        })}
      </>
    )
  }

  return (
    <Wrapper>
      <Search />
      <EventsWrapper>
        {!isLoading ? displayEvents() : <Loading />}
      </EventsWrapper>
    </Wrapper>
  )
};

const Wrapper = styled.div`
  background: lightgray;
  width: 100%;
  height: 90vh;
  padding: 1% 0.5%;
`;

const EventsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-content: flex-start;
  align-items: center;
  height: 95%;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const PlaceHolder = styled.div`
  display: flex;
  background: darkgray;
  box-shadow: 5px 5px 5px gray;
  width: 23%;
  height: 46%;
  margin: 1%;
  animation: expand 0.4s ease forwards;
`;

export default EventsList;