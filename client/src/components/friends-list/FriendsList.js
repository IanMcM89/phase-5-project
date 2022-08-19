import React from "react";
import SearchBar from "./SearchBar";
import Friends from "./lists/Friends";
import Pending from "./lists/Pending";
import Users from "./lists/Users";
import Loading from "./Loading";
import { useSelector } from "react-redux";
import styled, { css } from "styled-components";

const FriendsList = ({ user }) => {
  const isLoading = useSelector((state, key) => {
    let array = [];

    for (key in state) {
      if (state[key].status) array.push(state[key].status);
    }

    return (array).includes('loading');
  });

  return (
    <Wrapper>
      <SearchBar />
      <Lists style={{ display: isLoading ? ('none') : ('flex') }}>
        <Friends />
        <Pending />
        <Users currentUser={user} />
      </Lists>
      {isLoading ? (<Loading />) : (null)}
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
  ${commonStyles}
  background-color: rgb(32, 36, 44);
  background: linear-gradient(
    153deg, 
    rgba(30,35,50,0.7) 20%, 
    rgba(10,15,20,0.8) 60%
  );
  padding: 1%;
  overflow-y: hidden;
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