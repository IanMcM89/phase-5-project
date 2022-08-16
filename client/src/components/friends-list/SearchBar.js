import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchUsers } from "../../reducers/users";
import styled, { css } from "styled-components";

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState('');
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    const value = e.target.value;
    const urls = [
      '/api/pending_friends',
      '/api/friends',
      '/api/users'
    ];

    urls.map((url) => dispatch(fetchUsers(url, value)));

    return setSearchValue(e.target.value);
  };

  return (
    <Wrapper>
      <Icon src="./images/icons/search.png" alt="Search Icon" />
      <Input
        type="text"
        name="search"
        placeholder="Search"
        value={searchValue}
        onChange={(e) => handleSearch(e)}
      />
    </Wrapper>
  );
}

const commonStyles = css`
  display: flex;
  justify-content: center;
  margin: 0;
`;

const Wrapper = styled.div`
  ${commonStyles}
  height: 5%;
  margin-bottom: 2%;
`;

const Icon = styled.img`
  background-color: rgb(186, 43, 43);
`;

const Input = styled.input`
  ${commonStyles}
  width: 90%;
  height: 100%;
`;

export default SearchBar;