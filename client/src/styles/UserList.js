import React from "react";
import { UserLiButton } from "../styles";
import styled, { css } from "styled-components";

const UserList = ({ ...props }) => {
  const displayUsers = () => {
    if (props.users.length > 0) {
      return props.users.map((user) => (
        <Li key={user.id}>
          <Avatar
            src={user.avatar ? user.avatar : "/images/icons/avatar.png"}
            alt="Avatar Image"
          />
          <H2>{user.username}</H2>
          <UserLiButton props={props} user={user}/>
        </Li>
      ));
    } else {
      return (
        <Li>No Users Found</Li>
      );
    }
  }

  return (
    <Ul style={props.showList ? { display: 'none' } : null}>
      {displayUsers()}
    </Ul>
  );
}

const commonStyles = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: white;
  width: 100%;
  height: 100%;
`;

const Ul = styled.ul`
  ${commonStyles}
  border-radius: 4px;
  padding: 0;
  overflow-y: scroll;

  ::-webkit-scrollbar { 
    display: none;
  }

  li:nth-child(odd) {
    background: rgb(10,15,25,0.7);
  }
`;

const Li = styled.li`
  ${commonStyles}
  flex-direction: row;
  background-color: rgb(10,15,25,0.5);
  height: fit-content;
  margin: 0;
  animation: expand 0.2s ease forwards;
`;

const Avatar = styled.img`
  ${commonStyles}
  width: auto;
  height: 30px;
  margin: 2%;
`;

const H2 = styled.h2`
  ${commonStyles}
  font-size: 1rem;
  margin: 0;
`;

export default UserList;