import React, { useState } from "react";
import styled, { css } from "styled-components";

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = (e) => {
    setSearchValue(e.target.value)
  };

  return (
    <Wrapper>
      <Input
        type="text"
        name="search"
        placeholder="Search"
        value={searchValue}
        onChange={(e) => handleSearch(e)}
      />
      <img 
        src="./images/icons/search.png" 
        alt="Search Icon" 
        style={{ backgroundColor: 'rgb(186, 43, 43)' }}
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

const Input = styled.input`
  ${commonStyles}
  width: 90%;
  height: 100%;
`;

export default SearchBar;