import React, { useState } from "react";
import UsernameForm from "../components/account/UsernameForm";
import PasswordForm from "../components/account/PasswordForm";
import AvatarForm from "../components/account/AvatarForm";
import { ContentDiv, Button, ErrorField, Error } from "../styles";
import styled from "styled-components";

const AccountPage = ({ user, setUser }) => {
  const [message, setMessage] = useState(null);

  const getVariant = (formData) => {
    if (!Object.values(formData).includes('')) {
      return "red";
    } else {
      return "transparent";
    }
  }

  const handleClick = () => {
    return setMessage(
      <Error>
        Account cannot be recovered! Confirm:
        <br/>
        <Confirm onClick={handleDelete}>Yes</Confirm>
        <Confirm onClick={() => setMessage(null)}>No</Confirm>
      </Error>
    )
  }

  const handleDelete = () => {
    fetch('/api/me', {
      method: "DELETE"
    })
      .then(setUser(null));
  }

  return (
    <Wrapper>
      <ContentDiv>
        <Title>Account</Title>
        <UsernameForm
          user={user}
          setUser={setUser}
          setMessage={setMessage}
          getVariant={getVariant}
        />
        <PasswordForm
          setUser={setUser}
          setMessage={setMessage}
          getVariant={getVariant}
        />
        <ErrorField style={{ height: '25%', margin: 'auto 4%' }}>
          {message ? (message) : (null)}
        </ErrorField>
        <Button
          variant="red"
          style={{ margin: '3% 2% 2%', borderRadius: '6px' }}
          onClick={handleClick}
        >
          Delete Account
        </Button>
      </ContentDiv >
      <AvatarForm user={user} setUser={setUser} />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  background: lightgray;
  width: 75%;
  height: 100%;
  padding: 2%;
`;

const Title = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(50,55,65);
  color: white;
  font-size: 1.8rem;
  height: 10%;
  margin: 0;
`;

const Confirm = styled.button`
  background: rgb(200, 55, 55);
  color: lightgray;
  border: 2px solid transparent;
  border-radius: 4px;
  margin: 0 1%;
  cursor: pointer;
  &:hover {
    background: red;
    color: white;
  }
`;

export default AccountPage;