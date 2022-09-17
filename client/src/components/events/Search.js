import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchEvents } from "../../reducers/eventsSlice";
import styled, { css } from "styled-components";

const Search = () => {
  const [searchValue, setSearchValue] = useState('');
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(fetchEvents('/api/events', searchValue));
  };

  return (
    <Form onSubmit={handleSearch}>
      <Input
        type="text"
        name="search"
        placeholder="Search Events"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <Button>
        <Icon src="/images/icons/search.png" alt="Search Icon"/>
      </Button>
      <Button onClick={() => setSearchValue('')}>
        <Icon src="/images/icons/refresh.png" alt="Search Icon"/>
      </Button>
    </Form>
  );
}

const commonStyles = css`
  display: flex;
  justify-content: center;
  margin: 0;
`;

const Form = styled.form`
  ${commonStyles}
  justify-content: right;
  height: 5%;
  margin: 0 1%;
`;

const Input = styled.input`
  ${commonStyles}
  width: 42%;
`;

const Button = styled.button`
  ${commonStyles}
  background-color: rgb(186, 43, 43);
  border: solid 1px darkred;
  transition: 0.3s;
  width: 3.5%;
  padding: 0;

  &:hover {
    background-color: red;
  }
`;

const Icon = styled.img`
  ${commonStyles}
  height: 100%;
`;

export default Search;