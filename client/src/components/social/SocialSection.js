import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import FriendsList from "./friends/FriendsList";
import PendingList from "./pending/PendingList";
import UserList from "./users/UserList";
import styled, { css } from "styled-components";

const SocialSection = ({ user }) => {
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
      <SearchBar/>
      <ListWrapper>
        <FriendsList />
        <PendingList />
        <UserList 
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

  ::-webkit-scrollbar {
    display: none;
  }
`;

export default SocialSection;