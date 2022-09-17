import React from "react";
import { fetchEvents } from "../../reducers/eventsSlice";
import { LoadScript } from '@react-google-maps/api';
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import MapStatic from "../map/MapStatic";
import { Button } from "../../styles";
import styled, { css } from "styled-components";

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
      <Content>
        <Title>{event.title}</Title>
        <Info>
          <Label>Location:</Label>
          <h2 style={{ margin: '1% 0' }}>{event.location}</h2>
          <p style={{ margin: '1% 0' }}>{event.address}</p>
          <Star>★★★★★</Star>
          <FlexRow>
            <FlexColumn>
              <Label htmlFor="date">Date:</Label>
              <P>📅&nbsp;{event.date}</P>
            </FlexColumn>
            <FlexColumn>
              <Label htmlFor="time">Time:</Label>
              <P>🕑&nbsp;{event.time}</P>
            </FlexColumn>
          </FlexRow>
          <Label htmlFor="description">Description:</Label>
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
        </Info>
      </Content>
      <Map>
        <LoadScript
          googleMapsApiKey={`${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`}
          libraries={libraries}
        >
          <MapStatic event={event} />
        </LoadScript>
      </Map>
    </Wrapper>
  )
};

const commonStyles = css`
  display: flex;
  flex-direction: column;
`;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

const Content = styled.div`
  ${commonStyles}
  background: white;
  box-shadow: 5px 5px 5px gray;
  border: solid 4px rgb(50,55,65);
  border-radius: 10px;
  width: 36%;
  margin: 1%;
  animation: appear 0.6s ease forwards;
`;

const Map = styled(Content)`
  border: none;
  width: 60%;
  padding: 1%;
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

const Info = styled.div`
  ${commonStyles}
  width: 100%;
  height: 100%;
  padding: 3%;
`;

const Label = styled.label`
  color: red;
  font-weight: bold;
`;

const Star = styled.div`
  color: gold;
  font-size: 1.2rem;
  margin: 1% 0 3% 0;
`;

const FlexRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

const FlexColumn = styled.div`
  ${commonStyles}
  width: 48%;
`;

const P = styled.p`
  background: rgb(217, 217, 217);
  border: solid 1px black;
  border-radius: 10px;
  margin: 2% 0 6%;
  padding: 3%;
`;

export default Event;