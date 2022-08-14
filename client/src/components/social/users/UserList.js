import React, { useState } from "react";
import styled, { css } from "styled-components";

const UserList = ({ user, users, setUsers }) => {
  const [listHidden, setListHidden] = useState(false);

  const toggleList = () => {
    setListHidden(!listHidden);
  }

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
    })
      .then(setUsers(users.filter((userObj) => userObj.id !== id)));
  };

  const displayUsers = users.map((userObj) => (
    <Li key={userObj.id}>
      <Avatar src="/images/icons/avatar.png" alt="Avatar" />
      <H2 style={{ marginRight: "auto" }}>{userObj.username}</H2>
      <Button
        src="./images/icons/add-friend.png"
        alt="Add Friend"
        onClick={() => createFriendRequest(userObj.id)}
      />
    </Li>
  )
  );

  return (
    <Wrapper>
      <Label>
        Users
        <ArrowIcon
          src={listHidden ? "/images/icons/arrow-close.png" : "/images/icons/arrow-open.png"}
          alt="Edit Icon"
          onClick={toggleList}
        />
      </Label>
      <Ul style={listHidden ? { display: 'none' } : null}>
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
  height: auto;
  max-height: 40%;
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
  animation: expand 0.2s ease forwards;

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
  margin: 0;
`;

const Button = styled.img`
  ${commonStyles}
  background-color: dimgray;
  border: 1px solid white;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  width: auto;
  height: 30px;
  margin: 2%;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: green;
  }
`;

export default UserList;