import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";

const ListFriends = () => {
  const [friendships, setFriendships] = useState([]);
  const [buttonHidden, setButtonHidden] = useState(true);
  const [listHidden, setListHidden] = useState(false);

  useEffect(() => {
    fetch("/api/friendships")
    .then((r) => {
      if (r.ok) {
        r.json().then((responseData) => setFriendships(responseData));
      }
    });
  }, []);

  const destroyFriendship = (id) => {
    fetch(`/api/friendships/${id}`, {
      method: "DELETE"
    })
    .then((r) => {
      if (r.ok) {
        setFriendships(friendships.filter((frship) => frship.id !== id));
      }
    });
  }

  const toggleElement = (element) => {
    switch (element) {
      case "button":
        return setButtonHidden(!buttonHidden);;
      case "list":
        return setListHidden(!listHidden);;
      default: 
        return null;
    }
  }

  const displayFriends = () => {
    if (friendships.length > 0) {
      return friendships.map((friendship) => (
          <Li key={friendship.id}>
            <Avatar src="/images/icons/avatar.png" alt="Avatar" />
            <H2>{friendship.friend.username}</H2>
            <Button
              style={buttonHidden ? { display: 'none' } : null}
              onClick={() => destroyFriendship(friendship.id)}
            >
              Unfriend
            </Button>
          </Li>
        )
      );
    } else {
      return (
        <Li>
          <p>No Frienships</p>
        </Li>
      );
    }
  }

  return (
    <Wrapper>
      <Label htmlFor="friends">
        My Friends
        <EditIcon
          src="/images/icons/edit.png"
          alt="Edit Icon"
          onClick={() => toggleElement('button')}
          style={listHidden ? { display: 'none' } : null}
        />
        <ArrowIcon
          src={listHidden ? "/images/icons/arrow-close.png" : "/images/icons/arrow-open.png"}
          alt="Edit Icon"
          onClick={() => toggleElement('list')}
          style={listHidden ? { marginLeft: 'auto' } : null}
        />
      </Label>
      <Ul style={listHidden ? { display: 'none' } : null}>
        {displayFriends()}
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
  border-bottom: solid 1px gray;
  color: white;
  font-size: 1rem;
  height: fit-content;
`;

const ArrowIcon = styled.img`
  height: 30px;
  width: auto;
  cursor: pointer;
`;

const EditIcon = styled(ArrowIcon)`
  margin-left: auto;
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