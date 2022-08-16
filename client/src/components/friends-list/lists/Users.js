import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "../../../reducers/users";
import styled, { css } from "styled-components";

const Users = ({ currentUser }) => {
  const [hidden, setHidden] = useState(false);
  const users = useSelector((state) => state.users.entities);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers('/api/pending_friends'));
  }, [dispatch]);
  
  const toggleList = () => {
    setHidden(!hidden);
  }

  const createFriendRequest = (id) => {
    fetch("/api/friend_requests", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id: currentUser.id,
        friend_id: id
      }),
    })
  };

  const displayUsers = users.map((user) => (
    <Li key={user.id}>
      <Avatar src="/images/icons/avatar.png" alt="Avatar" />
      <H2>{user.username}</H2>
      <Button
        src="./images/icons/add-friend.png"
        alt="Add Friend"
        onClick={() => createFriendRequest(user.id)}
      />
    </Li>
  ));

  return (
    <Wrapper style={users.length > 0 ? (null) : ({ display: 'none' })}>
      <Label>
        Users
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
  margin-right: auto;
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

export default Users;