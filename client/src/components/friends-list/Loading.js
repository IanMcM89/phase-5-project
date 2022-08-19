import React from "react";
import styled, { css } from "styled-components";

const Loading = () => {
  const renderDivs = () => {
    return (
      [...Array(2)].map((e, i) => (
        <>
          <LabelDiv />
          <ListDiv />
        </>
      ))
    );
  }

  return (
    <Wrapper>
      {renderDivs()}
    </Wrapper>
  );
}

const commonStyles = css`
  display: flex;
  background-color: rgb(32, 36, 44, 0.7);
  border-radius: 6px;
  margin: 1%;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const LabelDiv = styled.div`
  ${commonStyles}
  width: 50%;
  height: 4%;
  animation: flicker 0.8s infinite;
`;

const ListDiv = styled.div`
  ${commonStyles}
  height: 26%;
  animation: flicker 0.6s infinite;
`;

export default Loading;