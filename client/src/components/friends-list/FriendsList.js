import React from "react";
import SearchBar from "./SearchBar";
import Friends from "./lists/Friends";
import Pending from "./lists/Pending";
import Users from "./lists/Users";
import styled, { css } from "styled-components";

const FriendsList = ({ user }) => {

  return (
    <Wrapper>
      <SearchBar/>
      <Lists>
        <Friends />
        <Pending />
        <Users user={user} />
      </Lists>
    </Wrapper>
  )
};

const commonStyles = css`
  display: flex;
  flex-direction: column;
  width: 30%;
  height: 100%;
`;

const Wrapper = styled.div`
  ${commonStyles}
  background-color: rgb(32, 36, 44);
  background: linear-gradient(
    153deg, 
    rgba(30,35,50,0.7) 20%, 
    rgba(10,15,20,0.8) 60%
  );
  padding: 1%;
  overflow: hidden;
`;

const Lists = styled.div`
  ${commonStyles}
  width: 100%;
  overflow-y: scroll;
  
  ::-webkit-scrollbar {
    display: none;
  }
`;

export default FriendsList;