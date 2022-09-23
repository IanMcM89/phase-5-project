import React, { useState } from "react";
import UsernameForm from "../components/account/UsernameForm";
import PasswordForm from "../components/account/PasswordForm";
import AvatarForm from "../components/account/AvatarForm";
import { ContentDiv, Button, ErrorField, Error } from "../styles";
import styled from "styled-components";

const AccountPage = ({ user, setUser }) => {
  const [error, setError] = useState(null);

  return (
    <Wrapper>
      <ContentDiv>
        <Title>Account</Title>
        <UsernameForm user={user} setUser={setUser} setError={setError} />
        <PasswordForm setUser={setUser} setError={setError} />
        <ErrorField style={{ height: '25%', margin: 'auto 4%'}}>
          {error ? (<Error>{error}</Error>) : (null)}
        </ErrorField>
        <Button
          variant="red"
          style={{ margin: '3% 2% 2%', borderRadius: '6px' }}
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

export default AccountPage;