import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";

const ListPending = () => {
  const [pendingFriends, setPendingFriends] = useState([]);
  const [listHidden, setListHidden] = useState(false);

  useEffect(() => {
    fetch("/api/pending_friends").then((r) => {
      if (r.ok) {
        r.json().then((responseData) => setPendingFriends(responseData));
      }
    });
  }, []);

  const toggleList = () => {
    setListHidden(!listHidden);
  }

  const displayPendingFriends = () => {
    if (pendingFriends.length > 0) {
      return pendingFriends.map((pending) => (
        <Li key={pending.id}>
          <Avatar src="/images/icons/avatar.png" alt="Avatar" />
          <H2>{pending.username}</H2>
          <Icon
            src="/images/icons/pending.png"
            alt="Hour Glass Icon"
          />
        </Li>
      ));
    } else {
      return (
        <Li style={{ justifyContent: 'center' }}>
          <p>No Requests</p>
        </Li>
      );
    }
  }

  return (
    <Wrapper>
      <Label htmlFor="pending-friends">
        Pending
        <ArrowIcon
          src={listHidden ? "/images/icons/arrow-close.png" : "/images/icons/arrow-open.png"}
          alt="Edit Icon"
          onClick={toggleList}
        />
      </Label>
      <Ul style={listHidden ? { display: 'none' } : null}>
        {displayPendingFriends()}
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

const Icon = styled.img`
  ${commonStyles}
  align-items: center;
  width: auto;
  height: 40px;
  }`

export default ListPending;