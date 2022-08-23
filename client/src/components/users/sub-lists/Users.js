import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addUser, removeUser } from "../../../reducers/users";
import UserSubList from "../styles/UserSubList";
import styled from "styled-components";

const Users = ({ currentUser }) => {
  const [hidden, setHidden] = useState(false);
  const showUsers = useSelector((state) => state.showUsers);
  const users = useSelector((state) => state.users.entities);

  const dispatch = useDispatch();

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
      .then((r) => r.json())
      .then(dispatch(addUser('/api/pending_friends', user)))
      .then(dispatch(removeUser('/api/users', user.id)));
  };

  return showUsers ? (
    <Wrapper>
      <Label>
        All Users
        <ArrowIcon
          src={hidden ? (
            "/images/icons/arrow-close.png"
          ) : (
            "/images/icons/arrow-open.png"
          )}
          alt="Edit Icon"
          onClick={users.length ? (toggleList) : (null)}
        />
      </Label>
      <UserSubList
        variant="users"
        users={users}
        showList={hidden}
        requestFriend={createFriendRequest}
      />
    </Wrapper>
  ) : (
    null
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: fit-content;
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
  margin-left: auto;
  cursor: pointer;
`;

export default Users;