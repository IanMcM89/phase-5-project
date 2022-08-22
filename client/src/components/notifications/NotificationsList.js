import React from "react";
import FriendRequests from "./lists/FriendRequests";
import styled, { css } from "styled-components";

const NotificationsList = () => {
  return (
    <Wrapper>
      <Label>Notifications:</Label>
      <Lists>
        <FriendRequests />
      </Lists>
    </Wrapper>
  )
}

const commonStyles = css`
  display: flex;
  flex-direction: column;
  width: 30%;
  height: 100%;
`;

const Wrapper = styled.div`
  background-color: rgb(30,35,45,0.9);
  position: absolute;
  top: 10%;
  right: 0;
  height: fit-content;
  width: 30%;
  z-index: 1;
  animation: expand 0.2s ease forwards;
`;

const Label = styled.label`
  background-color: rgb(10, 15, 25);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: gray;
  font-size: 1rem;
  font-weight: bold;
  height: fit-content;
  padding: 1%;
`;

const Lists = styled.div`
  ${commonStyles}
  width: 100%;
  overflow-y: scroll;
  padding: 0 2% 2%;
  
  ::-webkit-scrollbar {
    display: none;
  }
`;

export default NotificationsList;