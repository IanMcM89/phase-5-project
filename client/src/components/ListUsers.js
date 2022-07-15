import React, { useState, useEffect } from "react";
import UserSearchBar from "./UserSearchBar";
import styled, { css } from "styled-components";

const ListUsers = ({ user }) => {
  const [users, setUsers] = useState([]);
  
  useEffect(() => {
    fetch("/api/users")
    .then((r) => r.json())
    .then((userData) => console.log(userData))
  }, [user]);
  
  const displayUsers = users.map((userObj) => {
    return (
      <Li key={userObj.id}>
        <h3>{userObj.username}</h3>
        <button>Add+</button>
      </Li>
    )
  });

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
`;

const Wrapper = styled.div`
  ${commonStyles}
  background-color: rgb(72, 81, 98);
  width: 30%;
  margin: 0;
`;

const Ul = styled.ul`
  ${commonStyles}
  overflow-y: hidden;
  width: 90%;
  height: 90%;
  margin: auto;
  padding: 0;
`;

const Li = styled.li`
  ${commonStyles}
  background-color: rgb(32, 36, 44);
  border: solid 1px dimgray;
  color: white;
  flex-direction: row;
  height: 8%;
`;

export default ListUsers;