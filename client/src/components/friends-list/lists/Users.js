import React, { useState } from "react";
import { useSelector } from "react-redux";
import styled, { css } from "styled-components";

const Users = ({ currentUser }) => {
  const [hidden, setHidden] = useState(false);
  const users = useSelector((state) => state.users.entities);
  const showUsers = useSelector((state) => state.showUsers);

  console.log(useSelector((state) => state))

  console.log(users.length)
  
  const toggleList = () => {
    setHidden(!hidden);
  }

  const createFriendRequest = (user) => {
    fetch("/api/friend_requests", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id: currentUser.id,
        friend_id: user.id
      }),
    })
  };

  const displayUsers = () => {
    if (users.length > 0) {
      return users.map((user) => (
        <Li key={user.id}>
          <Avatar 
            src={user.avatar? user.avatar : "/images/icons/avatar.png"} 
            alt="Avatar" 
          />
          <H2>{user.username}</H2>
          <Button
            src="./images/icons/add-friend.png"
            alt="Add Friend"
            onClick={() => createFriendRequest(user)}
          /> 
        </Li>
      ));
    } else {
      return (
        <Li>
          <p>No Users</p>
        </Li>
      );
    }
  };

  return (
    <Wrapper style={!showUsers ? ({ display: 'none' }) : (null)}>
      <Label>
        All Users
        <ArrowIcon
          src={
            hidden ? (
              "/images/icons/arrow-close.png"
            ) : (
              "/images/icons/arrow-open.png"
            )
          }
          alt="Edit Icon"
          onClick={users.length > 0 ? (toggleList) : (null)}
        />
      </Label>
      <Ul style={hidden ? ({ display: 'none' }) : (null)}>
        {displayUsers()}
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
  height: auto;
`;

const Label = styled.label`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: solid 1px gray;
  color: white;
  font-size: 1rem;
  height: fit-content;
`;

const ArrowIcon = styled.img`
  height: 30px;
  width: auto;
  margin-left: auto;
  cursor: pointer;
`;

const Ul = styled.ul`
  ${commonStyles}
  border-radius: 6px;
  height: auto;
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
  display: flex;
  justify-content: center;
  background-color: rgb(10,15,25,0.5);
  color: white;
  flex-direction: row;
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
  justify-content: center;
  font-size: 1rem;
  margin-right: auto;
  margin: 0;
`;

const Button = styled.img`
  ${commonStyles}
  justify-content: center;
  align-items: center;
  width: auto;
  height: 30px;
  margin: 2%;
  cursor: pointer;
  transition: 0.3s;
  animation: hoverOut 0.2s ease forwards;

  &:hover {
    animation: hoverIn 0.2s ease forwards;
  }
`;

export default Users;