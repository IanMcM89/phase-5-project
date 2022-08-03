import React from "react";
import ListFriends from "../components/ListFriends";
import ListPending from "../components/ListPending";
import ListUsers from "../components/ListUsers";
import styled, { css } from "styled-components";

const FriendsPage = ({ user }) => {

return (
  <Wrapper>
    <ListWrapper>
      <ListFriends />
      <ListPending />
    </ListWrapper>
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
`;

const ListWrapper = styled.div`
  ${commonStyles}
  flex-direction: column;
  width: 75%;
`;

export default FriendsPage;