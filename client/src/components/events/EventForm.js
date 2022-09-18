import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setPlace } from "../../reducers/placeSlice";
import { LoadScript } from '@react-google-maps/api';
import { useHistory } from "react-router-dom";
import { Redirect } from 'react-router';
import MapStatic from "../map/MapStatic";
import styled from "styled-components";
import {
  ContentDiv, Avatar, Username, MapDiv, InfoDiv,
  FlexColumn, FlexRow, Rating, Button, Label, Error
} from "../../styles";

const libraries = ['places'];

const EventForm = ({ user }) => {
  const place = useSelector((state) => state.place);
  const dispatch = useDispatch();
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState([]);
  const [formData, setFormData] = useState(place ? {
    user_id: user.id,
    title: "",
    location: place.name,
    address: place.formatted_address,
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
      history.push(`/events/${newEvent.id}`);
    } else {
      setErrors(newEvent.errors);
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
        <Form onSubmit={handleSubmit}>
          <Title
            type="text"
            id="title"
            placeholder="Title:"
            autoComplete="off"
            value={formData.title}
            onChange={handleChange}
          />
          <InfoDiv>
            <Username>{user.username}</Username>
            <Label variant="red" >Location:</Label>
            <h2 style={{ margin: '1% 0' }}>{formData.location}</h2>
            <p style={{ margin: '1% 0' }}>{formData.address}</p>
            <Rating rating={place.rating} />
            <FlexRow>
              <FlexColumn>
                <Label variant="red" htmlFor="date">Date:</Label>
                <DateTime
                  type="date"
                  id="date"
                  autoComplete="off"
                  value={formData.date}
                  onChange={handleChange}
                />
              </FlexColumn>
              <FlexColumn>
                <Label variant="red" htmlFor="time">Time:</Label>
                <DateTime
                  type="time"
                  id="time"
                  autoComplete="off"
                  value={formData.time}
                  onChange={handleChange}
                />
              </FlexColumn>
            </FlexRow>
            <Label variant="red" htmlFor="description">Description:</Label>
            <TextArea
              id="description"
              autoComplete="off"
              value={formData.description}
              onChange={handleChange}
            />
            <ErrorField>
              {errors.map((error) =>
                <Error key={error}>{error}</Error>
              )}
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

const Form = styled.form`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const Title = styled.input`
  display: flex;
  background: rgb(50,55,65);
  text-align: center;
  border: none;
  color: lightgray;
  font-size: 1.8rem;
  width: 100;
  height: 10%;
  margin: 0;
  padding: 1%;
`;

const DateTime = styled.input`
  display: flex;
  flex-direction: row;
  background: rgb(217, 217, 217);
  border: solid 1px gray;
  border-radius: 10px;
  font-size: 1rem;
  margin: 2% 0 6%;
  padding: 2%;
`;

const TextArea = styled.textarea`
  background: rgb(217, 217, 217);
  border: solid 1px gray;
  border-radius: 10px;
  font-size: 1rem;
  height: 20%;
  margin: 2% 0 6%;
  padding: 2%;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const ErrorField = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
`;

export default EventForm;