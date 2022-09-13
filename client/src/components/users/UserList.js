import React from "react";
import { useSelector } from "react-redux";
import Search from "./Search";
import Loading from "./Loading";
import Friends from "./sub-lists/Friends";
import Pending from "./sub-lists/Pending";
import Users from "./sub-lists/Users";
import styled, { css } from "styled-components";

const UserList = ({ user }) => {
  const isLoading = useSelector((state, key) => {
    let array = [];

    for (key in state) {
      if (state[key]) array.push(state[key].status);
    }

    return array.includes('loading');
  });

  return (
    <Wrapper>
      <Search />
      <SubLists style={{ display: isLoading ? ('none') : ('flex') }}>
        <Friends />
        <Pending />
        <Users currentUser={user} />
      </SubLists>
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

const SubLists = styled.div`
  ${commonStyles}
  width: 100%;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export default UserList;