import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "../../../reducers/users";
import UserSubList from "../styles/UserSubList";
import styled from "styled-components";

const Pending = () => {
  const [hidden, sethidden] = useState(false);
  const pending = useSelector((state) => state.pending.entities);
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers('/api/pending_friends'));
  }, [dispatch]);

  const toggleList = () => {
    sethidden(!hidden);
  }

  return (
    <Wrapper>
      <Label>
        Requested Friends
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
      <UserSubList 
        variant="pending"
        users={pending}
        showList={hidden}
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
  color: white;
  font-size: 1rem;
  height: fit-content;
  border-bottom: solid 1px gray;
`;

const ArrowIcon = styled.img`
  height: 30px;
  margin-left: auto;
  cursor: pointer;
`;

export default Pending;