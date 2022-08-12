import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";

const ListFriends = () => {
  const [friendships, setFriendships] = useState([]);
  const [hidden, setHidden] = useState(true);

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

  const toggleButton = () => {
    setHidden(!hidden);
  }

  const displayFriends = friendships.length > 0 ? friendships.map((friendship) => {
    return (
      <Li key={friendship.id}>
        <Avatar src="/images/icons/avatar.png" alt="Avatar"/>
        <H2>{friendship.friend.username}</H2>
        <Button 
          style={hidden ? {display: 'none'} : null} 
          onClick={() => destroyFriendship(friendship.id)}
        > 
          Unfriend
        </Button>
      </Li>
      )
    }) : (
      <li>No Current Friendships</li>
  );

  return (
    <Wrapper>
      <Label htmlFor="friends">
        My Friends
        <Icon 
          src="/images/icons/edit.png" 
          alt="Edit Icon" 
          onClick={toggleButton}
        />
      </Label>
      <Ul>
        {displayFriends}
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
  display: flex;
  flex-direction: row;
  align-items: center;
  color: white;
  font-size: 1rem;
  height: fit-content;
`;

const Icon = styled.img`
  height: 40px;
  width: auto;
  margin-left: auto;
  cursor: pointer;
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

const Button = styled.button`
  background-color: transparent;
  color: white;
  border: none;
  cursor: pointer;
  margin-right: 2%;
  transition: 0.3s;
  animation: hoverOut 0.4s ease forwards;

  :hover {
    animation: hoverIn 0.4s ease forwards;
  }
`;

export default ListFriends;