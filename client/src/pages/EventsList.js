import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchEvents } from "../reducers/eventsSlice";
import { LoadScript } from '@react-google-maps/api';
import EventDiv from "../components/events/EventDiv";
import Loading from "../components/events/Loading";
import Search from "../components/events/Search";
import styled from "styled-components";

const libraries = ['places'];

const EventsList = ({ user }) => {
  const events = useSelector((state) => state.events.entities);
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => {
    return state.events.status.includes('loading');
  });

  useEffect(() => {
    dispatch(fetchEvents('/api/events'));
  }, [dispatch]);

  const filterEvents = events.filter((e) => e.user.id === user.id).map((e) => {
    return <EventDiv key={e.id} event={e} />
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
      <LoadScript
        googleMapsApiKey={`${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`}
        libraries={libraries}
      >
        <Search />
        <EventsWrapper>
          {!isLoading ? displayEvents() : <Loading />}
        </EventsWrapper>
      </LoadScript>
    </Wrapper>
  )
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: lightgray;
  width: 75%;
  height: 100%;
  padding: 1%;
`;

const EventsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
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