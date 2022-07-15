import React, { useState, useEffect } from "react";
import { Label } from "../styles";
import styled, { css } from "styled-components";

const ListFriends = () => {
  const [friendships, setFriendships] = useState([]);

  useEffect(() => {
    fetch("/api/friendships").then((r) => {
      if (r.ok) {
        r.json().then((friendshipData) => {
          return setFriendships(friendshipData);
        });
      }
    });
  }, []);

  // const destroyFriendship = (friendship) => {
  //   setFriendships(friendships.filter(((frship) => frship.id !== friendship)));
  // };

  const displayFriends = friendships.map((friendship) => {
    return (
      <Tr key={friendship.id}>
        <Td>{friendship.friend.username}</Td>
        <Td>{''}</Td>
        <Td>{''}</Td>
      </Tr>
    )
  });

  return (
    <>
      <Label htmlFor="friends">My Friends</Label>
      <Table id="friends">
        <Tr>
          <Th>Username</Th>
          <Th>First Name</Th>
          <Th>Last Name</Th>
          <Th />
        </Tr>
        {displayFriends}
      </Table>
    </>
  );
}

const commonStyles = css`
  display: flex;
  width: 25%;
  height: 10%;
`;

const Table = styled.table`
  display: flex;
  flex-direction: column;
  border: solid 1px gray;
  width: 62%;
  height: 60%;
  margin: auto;
  overflow-y: hidden;
`;

const Th = styled.th`
  ${commonStyles}
  background-color: rgb(32, 36, 44);
  color: white;
`;

const Tr = styled.tr`
  ${commonStyles}
`;

const Td = styled.td`
  ${commonStyles}
`;

export default ListFriends;