import React from "react";
import styled from "styled-components";

const Loading = () => {
  return (
    <>
      {
        [...Array(8)].map((e, i) => (
          <Wrapper key={i}/>
        ))
      }
    </>
  );
}

const Wrapper = styled.div`
  display: flex;
  background: gray;
  box-shadow: 5px 5px 5px gray;
  border-radius: 6px;
  width: 24%;
  height: 48%;
  margin: 0.5%;
  animation: flicker 0.6s infinite;
`;

export default Loading;