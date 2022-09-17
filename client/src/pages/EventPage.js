import React, { useState, useEffect } from "react";
import { useLocation } from "react-router";
import Event from "../components/events/Event";
import Response from "../components/ui/Response";
import styled from "styled-components";

function EventPage({ user }) {
  const [event, setEvent] = useState(null);
  const [response, setResponse] = useState(null)
  const location = useLocation();

  useEffect(() => {
    fetch(`/api${location.pathname}`).then((r) => {
      if (r.ok) {
        r.json().then(setEvent);
      } else {
        setResponse(r);
      }
    });
  }, [location.pathname]);

  const renderPage = () => {
    if (event) {
      return <Event event={event} user={user} />
    } else if (response) {
      return <Response response={response} />
    } else {
      return <Wrapper />
    }
  }

  return (
    <Wrapper>
      {renderPage()}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  background: lightgray;
  width: 75%;
  height: 100%;
  padding: 2%;
`;

export default EventPage;