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
      <Tr key={pending.id}>
        <Td>{pending.username}</Td>
        <Td>Awaiting Approval</Td>
      </Tr>
      )
    }) : (
      <Tr>
        <Td>No Pending Friendships</Td>
      </Tr>
  );

  return (
    <Wrapper>
      <Label htmlFor="pending-friends">
        Pending Friends
        <img 
          src="./images/icons/pending.png" 
          alt="Pending Friends" 
          style={{ width: "4%", marginLeft: "1%" }}
        />
      </Label>
      <Table id="pending-friends">
        <Tr>
          <Th>Username</Th>
          <Th></Th>
          <Th></Th>
          <Th>Status</Th>
        </Tr>
        {displayPendingFriends}
      </Table>
    </Wrapper>
  );
}

const commonStyles = css`
  display: flex;
  width: 25%;
  height: 10%;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 50%;
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  font-size: 1rem;
  font-weight: 500;
  margin: 1% 4% 0 4%;
`;

const Table = styled.table`
  display: flex;
  flex-direction: column;
  height: 90%;
  margin: 1% 4%;
  overflow-y: hidden;

  tr:nth-child(even) {
    background: #e6e6e6;
  }

  tr:nth-child(odd) {
    background: lightgray;
  }
`;

const Tr = styled.tr`
  ${commonStyles}
  width: 100%;
  height: 15%;
`;

const Th = styled.th`
  ${commonStyles}
  background-color: rgb(32, 36, 44);
  color: white;
  width: 100%;
  height: 100%;
`;

const Td = styled.td`
  ${commonStyles}
`;

export default ListPending;