import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "../../../reducers/users";
import styled, { css } from "styled-components";

const Friends = () => {
  const [showButton, setShowButton] = useState(true);
  const [showList, setshowList] = useState(false);
  const friends = useSelector((state) => state.friends.entities);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers('/api/friends'));
  }, [dispatch]);

  const destroyFriendship = (id) => {
    fetch(`/api/friends/${id}`, {
      method: "DELETE"
    })
      .then((r) => {
        if (r.ok) {
          dispatch(fetchUsers('/api/friends'));
        }
      });
  }

  const toggleElement = (element) => {
    switch (element) {
      case "button":
        return setShowButton(!showButton);;
      case "list":
        return setshowList(!showList);;
      default:
        return null;
    }
  }

  const displayFriends = () => {
    if (friends.length > 0) {
      return friends.map((friend) => (
        <Li key={friend.id}>
          <Avatar src="/images/icons/avatar.png" alt="Avatar" />
          <H2>{friend.username}</H2>
          <Button
            style={showButton ? { display: 'none' } : null}
            onClick={() => destroyFriendship(friend.id)}
          >
            Unfriend
          </Button>
        </Li>
      ));
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
          style={showList ? { display: 'none' } : null}
        />
        <ArrowIcon
          src={
            showList ? (
              "/images/icons/arrow-close.png"
            ) : (
              "/images/icons/arrow-open.png"
            )
          }
          alt="Edit Icon"
          onClick={() => toggleElement('list')}
          style={showList ? { marginLeft: 'auto' } : null}
        />
      </Label>
      <Ul style={showList ? { display: 'none' } : null}>
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
  max-height: 50%;
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
  animation: expand 0.2s ease forwards;
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

export default Friends;