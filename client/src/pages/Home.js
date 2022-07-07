import React from "react";
import styled, { css } from "styled-components";
import GeoapifyMap from "../components/GeoapifyMap";

function Home() {
  return (
    <Wrapper>
      <GeoapifyMap />
    </Wrapper>
  );
}

const commonStyles = css`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  margin: 0;
`;

const Wrapper = styled.div`
  ${commonStyles}
  width: 100vw;
  height: 90vh;
  overflow: hidden;
`;

export default Home;