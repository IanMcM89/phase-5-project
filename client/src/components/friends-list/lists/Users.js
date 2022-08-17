import React, { useState } from "react";
import { useSelector } from "react-redux";
import { UserList } from "../../../styles";
import styled, { css } from "styled-components";

const Users = ({ currentUser }) => {
  const [hidden, setHidden] = useState(false);
  const users = useSelector((state) => state.users.entities);
  const showUsers = useSelector((state) => state.showUsers);
  
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
      <UserList 
        variant="users"
        users={users}
        showList={hidden}
        createFriendRequest={createFriendRequest}
      />
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

export default Users;