import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setPlace } from "../../reducers/placeSlice";
import { LoadScript } from '@react-google-maps/api';
import { useHistory } from "react-router-dom";
import { Redirect } from 'react-router';
import MapStatic from "../map/MapStatic";
import styled from "styled-components";
import {
  ContentDiv, Avatar, Username, MapDiv, InfoDiv, FlexColumn,
  FlexRow, Rating, Button, Form, Label, ErrorField, Error, Input
} from "../../styles";

const libraries = ['places'];

const EventForm = ({ user }) => {
  const place = useSelector((state) => state.place);
  const dispatch = useDispatch();
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState(place ? {
    user_id: user.id,
    title: "",
    location: place.name,
    address: place.formatted_address,
    rating: place.rating,
    date: "",
    time: "",
    description: "",
    lat: place.lat,
    lng: place.lng
  } : null);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    const r = await fetch("/api/events", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const newEvent = await r.json();
    setLoading(false);
    if (r.ok) {
      dispatch(setPlace(null));
      history.push('/events');
    } else {
      setError(newEvent.errors[0]);
    }
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  }

  if (!place) return (<Redirect to="/events" />);

  return (
    <Wrapper>
      <ContentDiv>
        <Avatar
          src={
            user.avatar ? user.avatar : "/images/icons/avatar.png"
          }
          alt={user.username}
        />
        <Form variant="event" onSubmit={handleSubmit}>
          <TitleWrapper>
            <Title
              type="text"
              id="title"
              placeholder="Title"
              autoComplete="off"
              value={formData.title}
              onChange={handleChange}
            />
          </TitleWrapper>
          <InfoDiv>
            <Username>{user.username}</Username>
            <Label variant="blue" >Location:</Label>
            <h2 style={{ margin: '1% 0' }}>{formData.location}</h2>
            <p style={{ margin: '1% 0' }}>{formData.address}</p>
            <Rating rating={place.rating} />
            <FlexRow>
              <FlexColumn>
                <Label variant="required" htmlFor="date">Date:</Label>
                <Input
                  variant="border"
                  type="date"
                  id="date"
                  autoComplete="off"
                  value={formData.date}
                  onChange={handleChange}
                />
              </FlexColumn>
              <FlexColumn>
                <Label variant="required" htmlFor="time">Time:</Label>
                <Input
                  variant="border"
                  type="time"
                  id="time"
                  autoComplete="off"
                  value={formData.time}
                  onChange={handleChange}
                />
              </FlexColumn>
            </FlexRow>
            <Label variant="required" htmlFor="description">Description:</Label>
            <Input
              variant="textarea"
              id="description"
              autoComplete="off"
              value={formData.description}
              onChange={handleChange}
            />
            <ErrorField>
              {error ? (<Error>{error}</Error>) : (null)}
            </ErrorField>
            <Button
              type="submit"
              variant="green"
              style={{ margin: 'auto 0 0', borderRadius: '6px' }}
            >
              {loading ? "Loading..." : "Create Event"}
            </Button>
          </InfoDiv>
        </Form>
      </ContentDiv>
      <MapDiv>
        <LoadScript
          googleMapsApiKey={`${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`}
          libraries={libraries}
        >
          <MapStatic event={place} />
        </LoadScript>
      </MapDiv>
    </Wrapper>
  )
};

const Wrapper = styled.div`
  display: flex;
  background: lightgray;
  width: 75%;
  height: 100%;
  padding: 2%;
`;

const TitleWrapper = styled.div`
  display: flex;
  background: rgb(50,55,65);
  height: 10%;
  margin: 0;
  padding: 2%;
`;

const Title = styled.input`
  display: flex;
  background: rgb(50,55,65);
  border: solid 1px gray;
  border-radius: 10px;
  text-align: center;
  color: lightgray;
  font-size: 1.8rem;
  width: 100%;
  margin: 0 0 1% 0;
  padding: 1%;
`;

export default EventForm;