import React from "react";
import styled from "styled-components";

const Notifications = () => {
  return(
    <Wrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background-color: rgb(32, 36, 44);
  position: absolute;
  top: 10%;
  right: 0;
  height: 30%;
  width: 20%;
  padding: 2%;
  z-index: 1;
  animation: expand 0.2s ease forwards;
`;

export default Notifications;