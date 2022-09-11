import React from "react";
import User  from "./User";
import styled, { css } from "styled-components";

const UserSubList = ({ ...props }) => {
  const displayUsers = () => {
    if (props.users.length > 0) {
      return props.users.map((user) => (
        <User key={user.id} user={user} props={props}/>
      ));
    } else {
      return (
        <P>No Users Found</P>
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
    background: rgb(10,15,25,0.8);
  }
`;

const P = styled.p`
  color: gray;
  margin: auto;
  animation: expand 0.2s ease forwards;
`;

export default UserSubList;