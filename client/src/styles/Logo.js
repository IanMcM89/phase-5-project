import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Logo = () => {
  return (
    <Wrapper>
      &ensp;
      <Link to="/" style={{ textDecoration: 'none' }}>
        <Title>Geo</Title>
      </Link>
    </Wrapper>
  )
};

const Wrapper = styled.div`
  display: flex;
`;

const Title = styled.h1`
  color: red;
  font-size: 2.8rem;
  width: 100%;
  margin: auto;
  ::after {
    content:'Planner';
    color: white;
  }
`;

export default Logo;