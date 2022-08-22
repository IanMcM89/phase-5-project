import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "../../../reducers/users";
import { UserList } from "../../../styles";
import styled from "styled-components";

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

  const toggleIcon = (icon) => {
    switch (icon) {
      case "button":
        return setShowButton(!showButton);
      case "list":
        return setshowList(!showList);
      default:
        return null;
    }
  }

  return (
    <Wrapper>
      <Label>
        My Friends
        <EditIcon
          src="/images/icons/edit.png"
          alt="Edit Icon"
          onClick={() => toggleIcon('button')}
          style={showList ? ({ display: 'none' }) : (null)}
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
          onClick={() => toggleIcon('list')}
          style={showList ? ({ marginLeft: 'auto' }) : (null)}
        />
      </Label>
      <UserList 
        variant="friends"
        users={friends}
        showList={showList}
        showButton={showButton}
        removeFriend={destroyFriendship}
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: fit-content;
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
  cursor: pointer;
`;

const EditIcon = styled(ArrowIcon)`
  margin-left: auto;
`;

export default Friends;