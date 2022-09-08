import React from "react";
import FriendRequestList from "./lists/FriendRequestList";
import styled from "styled-components";

const NotificationsList = () => {
  return (
    <Wrapper>
      <Label>Notifications</Label>
      <List>
        <FriendRequestList />
      </List>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background-color: rgb(30,35,45,0.9);
  position: absolute;
  top: 10%;
  right: 0;
  height: fit-content;
  width: 20%;
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

const List = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  margin: 0;
  padding: 0;
  
  ::-webkit-scrollbar {
    display: none;
  }
`;

export default NotificationsList;