import React from "react";
import UserButton from "./UserButton";
import styled, { css } from "styled-components";

const User = ({ props, user }) => {
  return (
    <Li key={user.id}>
      {user.login_status ? <Status /> : null}
      <Avatar
        src={user.avatar ? user.avatar : "/images/icons/avatar.png"}
        alt="Avatar Image"
      />
      <H2>{user.username}</H2>
      <UserButton props={props} user={user} />
    </Li>
  )
}

const commonStyles = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: white;
  width: 100%;
  height: 100%;
`;

const Li = styled.li`
  ${commonStyles}
  flex-direction: row;
  background-color: rgb(10,15,25,0.6);
  height: fit-content;
  margin: 0;
  animation: expand 0.2s ease forwards;
`;

const Status = styled.div`
  background-color: Chartreuse;
  border: solid rgb(10,15,25) 2px;
  border-radius: 50%;
  position: absolute;
  bottom: 0;
  left: 0;
  height: 12px;
  width: 12px;
  z-index: 1;
  margin: 2px;
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

export default User;