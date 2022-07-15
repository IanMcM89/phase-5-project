import React, { useState } from "react";
import styled, { css } from "styled-components";

const UserSearchBar = ({ setUsers }) => {
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = (e) => {
    setSearchValue(e.target.value)
  };

  return (
    <Wrapper>
      <img 
        src="./images/icons/search.png" 
        alt="Search Icon" 
        style={{ backgroundColor: 'rgb(32, 36, 44)' }}
      />
      <Input
        type="text"
        name="search"
        placeholder="Search: 'JDoe88'"
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
  width: 96%;
  height: 5%;
  margin: 2%;
`;

const Input = styled.input`
  ${commonStyles}
  width: 90%;
  height: 100%;
`;

export default UserSearchBar;