import React from "react";
import ListFriends from "../components/ListFriends";
// import ListPending from "../components/ListPending";
import ListUsers from "../components/ListUsers";
import styled, { css } from "styled-components";

const FriendsPage = ({ user }) => {

return (
  <Wrapper>
    <ListFriends />
    <ListUsers user={user}/>
  </Wrapper>
)
};

const commonStyles = css`
  display: flex;
  width: 100%;
  height: 100%;
`;

const Wrapper = styled.div`
  ${commonStyles}
  flex-direction: row;
`;

export default FriendsPage;