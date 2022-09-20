import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchEvents } from "../../reducers/eventsSlice";
import styled, { css } from "styled-components";

const SearchBox = () => {
  const [text, setText] = useState('');
  const [date, setDate] = useState('');
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(fetchEvents(text, date));
  };

  const handleRefresh = () => {
    setText('');
    setDate('');
  }

  return (
    <Form onSubmit={handleSearch}>
      <Date
        type="date"
        id="date"
        autoComplete="off"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <Text
        type="text"
        name="search"
        placeholder="Search Events"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <Button>
        <Icon src="/images/icons/search.png" alt="Search Icon"/>
      </Button>
      <Button onClick={handleRefresh}>
        <Icon src="/images/icons/refresh.png" alt="Refresh Icon"/>
      </Button>
    </Form>
  );
}

const commonStyles = css`
  display: flex;
  justify-content: center;
  height: 100%;
  margin: 0;
`;

const Form = styled.form`
  display: flex;
  justify-content: space-between;
  margin: 0 1%;
  height: 5%;
  width: 98%;
`;

const Date = styled.input`
  ${commonStyles}
  font-family: Arial, Helvetica, sans-serif;
  color: gray;
  width: 23.5%;
  padding: 1%;
  margin-right: auto;
`;

const Text = styled.input`
  ${commonStyles}
  width: 41%;
  padding: 1%;
`;

const Button = styled.button`
  ${commonStyles}
  background-color: rgb(186, 43, 43);
  border: solid 1px darkred;
  transition: 0.3s;
  width: 4%;
  padding: 0;
  &:hover {
    background-color: red;
  }
`;

const Icon = styled.img`
  ${commonStyles}
`;

export default SearchBox;