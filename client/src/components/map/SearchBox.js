import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setPlace } from "../../reducers/placeSlice";
import styled from "styled-components";

const SearchBox = ({ setPlaces }) => {
  const [searchValue, setSearchValue] = useState('');
  const dispatch = useDispatch();

  const handleChange = (e) => {
    return setSearchValue(e.target.value);
  }

  const handleClick = () => {
    dispatch(setPlace(null));
    setSearchValue("")
    setPlaces(null);
  }

  return (
    <Wrapper>
      <Input
        type="text"
        placeholder="Search Places"
        value={searchValue}
        onChange={(e) => handleChange(e)}
      />
      <Button onClick={handleClick}>
        <Icon src="/images/icons/refresh.png" alt="Refresh Icon" />
      </Button>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
  left: 50%;
  height: 5%;
  margin-left: -120px;
  margin-top: 1%;
`;

const Input = styled.input`
  box-sizing: border-box;
  border: 1px solid transparent;
  border-radius: 3px 0 0 3px;
  width: 220px;
  height: 100%;
  padding: 0 12px;
  font-size: 14px;
  outline: none;
  text-overflow: ellipses;
`;

const Button = styled.button`
  background-color: rgb(186, 43, 43);
  border: solid 1px darkred;
  transition: 0.3s;
  width: fit-content;
  padding: 0;
  &:hover {
    background-color: red;
  }
`;

const Icon = styled.img`
  display: flex;
  justify-content: center;
  height: 100%;
  margin: 0;
`;

export default SearchBox;