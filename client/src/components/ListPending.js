import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";

const ListPending = () => {
  const [pendingFriends, setPendingFriends] = useState([]);

  useEffect(() => {
    fetch("/api/pending_friends").then((r) => {
      if (r.ok) {
        r.json().then((pendingFriendData) => {
          return setPendingFriends(pendingFriendData);
        });
      }
    });
  }, []);

  const displayPendingFriends = pendingFriends.length > 0 ? pendingFriends.map((pending) => {
    return (
      <Li key={pending.id}>
        <Avatar src="/images/icons/avatar.png" alt="Avatar"/>
        <H2>{pending.username}</H2>
      </Li>
      )
    }) : (
      <li>No Pending Friendships</li>
  );

  return (
    <Wrapper>
      <Label htmlFor="pending-friends">
        Pending
      </Label>
      <Ul>
      {displayPendingFriends}
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
  color: white;
  font-size: 1rem;
`;

const Ul = styled.ul`
  ${commonStyles}
  border-radius: 6px;
  height: auto;
  padding: 0;
  overflow-y: hidden;
  li:nth-child(odd) {
    background: rgb(50,50,60,0.8);
  }
`;

const Li = styled.li`
  display: flex;
  background-color: rgb(50,50,60,0.5);
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

export default ListPending;