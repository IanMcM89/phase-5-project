import React from "react";
import ListFriends from "./ListFriends";
import ListPending from "./ListPending";
// import ListUsers from "./ListUsers";
import styled, { css } from "styled-components";

const FriendsTab = ({ user }) => {

return (
  <Wrapper>
    <ListFriends />
    <ListPending />
    {/* <ListUsers user={user}/> */}
  </Wrapper>
)
};

const commonStyles = css`
  display: flex;
  width: 30%;
  height: 100%;
`;

const Wrapper = styled.div`
  ${commonStyles}
  flex-direction: column;
  background-color: rgb(32, 36, 44);
  background: rgba(20,25,35,0.7);
  padding: 1%;
`;

export default FriendsTab;