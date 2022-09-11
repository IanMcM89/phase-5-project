import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchUsers } from "../../reducers/users";
import { showUsers, hideUsers } from "../../reducers/userList";
import styled, { css } from "styled-components";

const Search = () => {
  const [searchValue, setSearchValue] = useState('');

  const dispatch = useDispatch();

  const handleSearch = (e) => {
    e.preventDefault();

    const urls = [
      '/api/pending_friends',
      '/api/friends',
      '/api/users'
    ];

    urls.map((url) => dispatch(fetchUsers(url, searchValue)));

    if (searchValue.length) dispatch(showUsers()); 
  };

  const handleChange = (e) => setSearchValue(e.target.value);

  const handleRefresh = () => {
    dispatch(hideUsers());
    setSearchValue('');
  }

  return (
    <Form onSubmit={handleSearch}>
      <Input
        type="text"
        name="search"
        placeholder="Search Username"
        value={searchValue}
        onChange={handleChange}
      />
      <Button>
        <Icon src="/images/icons/search.png" alt="Search Icon"/>
      </Button>
      <Button onClick={handleRefresh}>
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
  height: 5%;
  margin-bottom: 2%;
`;

const Input = styled.input`
  ${commonStyles}
  width: 90%;
  height: 100%;
`;

const Button = styled.button`
  background-color: rgb(186, 43, 43);
  border: solid 1px darkred;
  transition: 0.3s;
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