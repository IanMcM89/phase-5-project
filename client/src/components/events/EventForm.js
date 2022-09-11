import React, { useState } from "react";
import { Redirect } from 'react-router'
import { useHistory } from "react-router-dom";
import { setPlace } from "../../reducers/places";
import { useSelector, useDispatch } from "react-redux";
import StaticMap from "../events/StaticMap";
import { Button, Form, Error } from "../../styles";
import styled, { css } from "styled-components";

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

  if (!place) return (<Redirect to="/" />);

  return (
    <Wrapper>
      <FormWrapper>
        <Form onSubmit={handleSubmit} style={{ margin: 0 }}>
          <Section>
            <Input
              type="text"
              id="title"
              placeholder="Title:"
              autoComplete="off"
              value={formData.title}
              onChange={handleChange}
            />
            <Label>Location:</Label>
            <h2 style={{ margin: 'auto 0' }}>{formData.location}</h2>
            <h3 style={{ margin: 'auto 0', color: 'dimgray' }}>{formData.address}</h3>
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
          </Section>
          <Section>
            <Label htmlFor="description">Description:</Label>
            <TextArea
              id="description"
              autoComplete="off"
              value={formData.description}
              onChange={handleChange}
            />
          </Section>
          <Section>
            <ErrorField>
              {errors.map((error) =>
                <Error key={error}>{error}</Error>
              )}
            </ErrorField>
            <Button type="submit" variant="green" style={{ margin: 0 }}>
              {loading ? "Loading..." : "Create Event"}
            </Button>
          </Section>
        </Form>
        <StaticMap event={formData}/>
      </FormWrapper>
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
  padding: 1%;
`;

const FormWrapper = styled.div`
  ${commonStyles}
  background-color: white;
  box-shadow: 5px 5px 5px gray;
  padding: 1%;
  overflow: hidden;
`;

const Label = styled.label`
  ${commonStyles}
  font-size: 1rem;
  font-weight: 500;
`;

const Input = styled.input`
  ${commonStyles}
  background: lightgray;
  border: solid 1px gray;
  font-size: 1.8rem;
  margin-bottom: 2%;
  padding: 1%;
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

const DateTime = styled(Input)`
  ${commonStyles}
  font-size: 1rem;
  height: 50%;
`;

const TextArea = styled.textarea`
  ${commonStyles}
  background: lightgray;
  border: solid 1px gray;
  font-size: 1rem;
  height: 90%;
  padding: 1%;
  overflow-y: hidden;
`;

const Section = styled.section`
  ${commonStyles}
  flex-direction: column;
  height: 33.33%;
`;

const ErrorField = styled.div`
  ${commonStyles}
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
`;

export default EventForm;