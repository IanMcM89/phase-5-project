import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setPlace } from "../../reducers/placeSlice";
import { LoadScript } from '@react-google-maps/api';
import { useHistory } from "react-router-dom";
import { Redirect } from 'react-router';
import MapStatic from "../map/MapStatic";
import { Button, Error } from "../../styles";
import styled, { css } from "styled-components";

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
    lat: place.geometry.location.lat(),
    lng: place.geometry.location.lng()
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
        <Form onSubmit={handleSubmit} style={{ margin: 0, width: '100%' }}>
          <Title>
            <Input
              type="text"
              id="title"
              placeholder="Title:"
              autoComplete="off"
              value={formData.title}
              onChange={handleChange}
            />
          </Title>
          <Info>
            <Label>Location:</Label>
            <h2 style={{ margin: '1% 0' }}>{formData.location}</h2>
            <p style={{ margin: '1% 0' }}>{formData.address}</p>
            <Star>★★★★★</Star>
            <FlexRow>
              <FlexColumn>
                <Label htmlFor="date">Date:</Label>
                <DateTime
                  type="date"
                  id="date"
                  autoComplete="off"
                  value={formData.date}
                  onChange={handleChange}
                />
              </FlexColumn>
              <FlexColumn>
                <Label htmlFor="time">Time:</Label>
                <DateTime
                  type="time"
                  id="time"
                  autoComplete="off"
                  value={formData.time}
                  onChange={handleChange}
                />
              </FlexColumn>
            </FlexRow>
            <Label htmlFor="description">Description:</Label>
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
            <Button type="submit" variant="green" style={{ margin: 0 }}>
              {loading ? "Loading..." : "Create Event"}
            </Button>
          </Info>
        </Form>
      <Map>
        <LoadScript
          googleMapsApiKey={`${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`}
          libraries={libraries}
        >
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
  background: lightgray;
  width: 75%;
  height: 100%;
  padding: 2%;
`;

const Map = styled(Form)`
  border: none;
  width: 60%;
  padding: 1%;
`;

const Form = styled.form`
  ${commonStyles}
  background: white;
  box-shadow: 5px 5px 5px gray;
  border: solid 4px rgb(50,55,65);
  border-radius: 10px;
  width: 36%;
  margin: 1%;
  animation: appear 0.6s ease forwards;
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

const Input = styled.input`
  ${commonStyles}
  background: rgb(217, 217, 217);
  border: solid 1px gray;
  border-radius: 10px;
  font-size: 1.8rem;
  margin: 2% 0 6%;
  padding: 2%;
`;

const FlexRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

const FlexColumn = styled.div`
  ${commonStyles}
  width: 48%;
`;

const DateTime = styled(Input)`
  display: flex;
  flex-direction: row;
  font-size: 1rem;
`;

const TextArea = styled.textarea`
  background: rgb(217, 217, 217);
  border: solid 1px gray;
  border-radius: 10px;
  font-size: 1rem;
  height: 90%;
  margin: 2% 0 6%;
  padding: 2%;
  overflow-y: hidden;
`;

const ErrorField = styled.div`
  ${commonStyles}
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
`;

export default EventForm;