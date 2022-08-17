import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "../../../reducers/users";
import { UserList } from "../../../styles";
import styled, { css } from "styled-components";

const Pending = () => {
  const [hidden, sethidden] = useState(false);
  const pendingFriends = useSelector((state) => state.pending.entities);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers('/api/pending_friends'));
  }, [dispatch]);

  const toggleList = () => {
    sethidden(!hidden);
  }

  return (
    <Wrapper>
      <Label htmlFor="pending-friends">
        Pending Requests
        <ArrowIcon
          src={
            hidden ? (
              "/images/icons/arrow-close.png"
            ) : (
              "/images/icons/arrow-open.png"
            )
          }
          alt="Edit Icon"
          onClick={toggleList}
        />
      </Label>
      <UserList 
        variant="pending"
        users={pendingFriends}
        showList={hidden}
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
  overflow-y: hidden;
`;

const Label = styled.label`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: white;
  font-size: 1rem;
  height: fit-content;
  border-bottom: solid 1px gray;
`;

const ArrowIcon = styled.img`
  height: 30px;
  width: auto;
  margin-left: auto;
  cursor: pointer;
`;

export default Pending;