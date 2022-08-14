import React, { useState, useEffect } from "react";
import UserSearchBar from "./SearchBar";
import ListFriends from "./FriendsList";
import ListPending from "./PendingFriendsList";
import ListUsers from "./UsersList";
import styled, { css } from "styled-components";

const FriendsTab = ({ user }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("/api/users")
      .then((r) => {
        if (r.ok) {
          r.json().then((userData) => setUsers(userData));
        }
      });
  }, [user]);

  return (
    <Wrapper>
      <UserSearchBar/>
      <ListWrapper>
        <ListFriends />
        <ListPending />
        <ListUsers 
          user={user}
          users={users}
          setUsers={setUsers} 
        />
      </ListWrapper>
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
  background: rgba(20,25,35,0.7);
  padding: 1%;
  overflow: hidden;
`;

const ListWrapper = styled.div`
  ${commonStyles}
  width: 100%;
  overflow-y: scroll;
`;

export default FriendsTab;