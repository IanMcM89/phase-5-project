import React from "react";
import { fetchEvents } from "../../reducers/eventsSlice";
import { LoadScript } from '@react-google-maps/api';
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import MapStatic from "../map/MapStatic";
import styled from "styled-components";
import {
  ContentDiv, Avatar, Username, MapDiv, InfoDiv, 
  FlexColumn, FlexRow, Rating, Button, Label
} from "../../styles";

const libraries = ['places'];

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
      <ContentDiv>
        <Avatar
          src={
            event.user.avatar ? event.user.avatar : "/images/icons/avatar.png"
          }
          alt={event.user.username}
        />
        <Title>{event.title}</Title>
        <InfoDiv>
          <Username>{event.user.username}</Username>
          <Label variant="blue">Location:</Label>
          <h2 style={{ margin: '1% 0' }}>{event.location}</h2>
          <p style={{ margin: '1% 0' }}>{event.address}</p>
          <Rating rating={event.rating} />
          <FlexRow>
            <FlexColumn>
              <Label variant="blue" htmlFor="date">Date:</Label>
              <P>📅&nbsp;{event.date}</P>
            </FlexColumn>
            <FlexColumn>
              <Label variant="blue" htmlFor="time">Time:</Label>
              <P>🕑&nbsp;{event.time}</P>
            </FlexColumn>
          </FlexRow>
          <Label variant="blue" htmlFor="description">Description:</Label>
          <P>{event.description}</P>
          {event.user.id === user.id ? (
            <Button
              variant="red"
              style={{ margin: 'auto 0 0', borderRadius: '6px' }}
              onClick={handleDelete}
            >
              Delete Event
            </Button>
          ) : (
            null
          )}
        </InfoDiv>
      </ContentDiv>
      <MapDiv>
        <LoadScript
          googleMapsApiKey={`${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`}
          libraries={libraries}
        >
          <MapStatic event={event} />
        </LoadScript>
      </MapDiv>
    </Wrapper>
  )
};

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

const Title = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(50,55,65);
  color: white;
  font-size: 1.8rem;
  height: 10%;
  margin: 0;
`;

const P = styled.p`
  background: rgb(217, 217, 217);
  border: solid 1px black;
  border-radius: 10px;
  margin: 2% 0 6%;
  max-height: 50%;
  padding: 2%;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export default Event;