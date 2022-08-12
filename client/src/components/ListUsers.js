import React, { useState, useEffect } from "react";
import UserSearchBar from "./UserSearchBar";
import styled, { css } from "styled-components";

const ListUsers = ({ user }) => {
  const [users, setUsers] = useState([]);
  
  useEffect(() => {
    fetch("/api/users")
    .then((r) => r.json())
    .then((userData) => {
      setUsers(userData.filter((userObj) => {
        if (user.pending_friends.find((fr) => fr.username === userObj.username)) {
          return null;
        } else if (user.friends.find((fr) => fr.username === userObj.username)) {
          return null;
        } else if (user.username === userObj.username) {
          return null;
        } else {
          return userObj;
        }
      }))
    })
  }, [user]);

  const createFriendRequest = (id) => {
    fetch("/api/friend_requests", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id: user.id,
        friend_id: id
      }),
    }).then(
      setUsers(users.filter((userObj) => userObj.id !== id))
    );
  };
  
  const displayUsers = users.map((userObj) => (
      <Li key={userObj.id}>
        <H3 style={{ marginRight: "auto" }}>{userObj.username}</H3>
        <Button onClick={() => createFriendRequest(userObj.id)}>
          <img 
            src="./images/icons/add-friend.png" 
            alt="Add Friend" 
            style={{ height: "100%" }}
          />
        </Button>
      </Li>
    )
  );

  return (
    <Wrapper>
      <UserSearchBar
        users={users}
        setUsers={setUsers}
      />
      <Ul>
        {displayUsers}
      </Ul>
    </Wrapper>
  );
}

const commonStyles = css`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  margin: auto;
`;

const Wrapper = styled.div`
  ${commonStyles}
  background-color: rgb(72, 81, 98);
  margin: 0;
`;

const Ul = styled.ul`
  ${commonStyles}
  width: 95%;
  height: 95%;
  padding: 0;
  overflow-y: hidden;

  li:nth-child(odd) {
    background: rgb(50, 50, 60);
  }
`;

const Li = styled.li`
  ${commonStyles}
  background-color: rgb(32, 36, 44);
  color: white;
  flex-direction: row;
  height: 8%;
  margin: 0;
`;

const H3 = styled.h3`
  ${commonStyles}
  margin-left: 2%;
  justify-content: center;
`;

const Button = styled.button`
  ${commonStyles}
  background-color: dimgray;
  border: 1px solid white;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  width: fit-content;
  height: 70%;
  margin-right: 2%;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: green;
  }
`;

export default ListUsers;