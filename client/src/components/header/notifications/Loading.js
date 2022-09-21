import React from "react";
import styled, { css } from "styled-components";

const Loading = () => {
  return (
    <>
      {
        [...Array(3)].map((e, i) => (
          <Wrapper key={i}>
            <LabelDiv />
            <ListDiv />
          </Wrapper>
        ))
      }
    </>
  );
}

const commonStyles = css`
  display: flex;
  background-color: rgb(100, 105, 115, 0.9);
  border-radius: 6px;
  margin: 1%;
  animation: flicker 0.6s infinite;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 15vh;
  padding: 2%;
`;

const LabelDiv = styled.div`
  ${commonStyles}
  width: 50%;
  height: 20%;
`;

const ListDiv = styled.div`
  ${commonStyles}
  height: 80%;
`;

export default Loading;