import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../styles";
import styled from "styled-components";

function NotFound({ response }) {
  return (
    <Wrapper>
      <H1>⚠️</H1>
      <H2>{response.status}</H2>
      <h3>{response.statusText}</h3>
      <Button as={Link} variant="red" to="/">Home</Button>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: flex;
  background-color: white;
  border: solid 4px orange;
  box-shadow: 10px 10px 10px gray;
  flex-direction: column;
  align-items: center;
  width: 75%;
  height: 75%;
  margin: auto;
  padding: 2%;
`;

const H1 = styled.h1`
  font-size: 8rem;
  margin: 2%;
`;

const H2 = styled(H1)`
  font-size: 4rem;
  margin: 0;
`;

export default NotFound;