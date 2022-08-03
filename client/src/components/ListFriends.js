import React, { useState, useEffect } from "react";
import { Button } from "../styles";
import styled, { css } from "styled-components";

const ListFriends = () => {
  const [friendships, setFriendships] = useState([]);

  useEffect(() => {
    fetch("/api/friendships").then((r) => {
      if (r.ok) {
        r.json().then((frshipData) => {
          return setFriendships(frshipData);
        });
      }
    });
  }, []);

  const destroyFriendship = (id) => {
    fetch(`/api/friendships/${id}`, {
      method: "DELETE"
    }).then(
      setFriendships(friendships.filter((frship) => frship.id !== id))
    )
  };

  const displayFriends = friendships.length > 0 ? friendships.map((friendship) => {
    return (
      <Tr key={friendship.id}>
        <Td>{friendship.friend.username}</Td>
        <Td>
          <Button 
            variant="red" 
            style={{ margin: "0", fontSize: "0.7rem", fontWeight: "bold" }} 
            onClick={() => destroyFriendship(friendship.id)}
          > 
            Remove
          </Button>
        </Td>
      </Tr>
      )
    }) : (
      <Tr>
        <Td>No Current Friendships</Td>
      </Tr>
  );

  return (
    <Wrapper>
      <Label htmlFor="friends">
        My Friends
        <img 
          src="./images/icons/my-friends.png" 
          alt="Pending Friends" 
          style={{ width: "3%", marginLeft: "1%" }}
        />
      </Label>
      <Table id="friends">
        <Tr>
          <Th>Username</Th>
          <Th/>
          <Th/>
          <Th/>
        </Tr>
        {displayFriends}
      </Table>
    </Wrapper>
  );
}

const commonStyles = css`
  display: flex;
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
  width: 25%;
  height: 10%;
`;

export default ListFriends;