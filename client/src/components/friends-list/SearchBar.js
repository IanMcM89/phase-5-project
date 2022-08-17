import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchUsers } from "../../reducers/users";
import { showUserList, hideUserList } from "../../reducers/userList";
import styled, { css } from "styled-components";

const SearchBar = () => {
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

    if (searchValue.length > 0) return dispatch(showUserList()); 
  };

  const handleRefresh = () => {
    dispatch(hideUserList());
    return setSearchValue('');
  }

  return (
    <Form onSubmit={handleSearch}>
      <Input
        type="text"
        name="search"
        placeholder="Search Username"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <Button>
        <Icon src="./images/icons/search.png" alt="Search Icon"/>
      </Button>
      <Button onClick={handleRefresh}>
        <Icon src="./images/icons/refresh.png" alt="Search Icon"/>
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

export default SearchBar;