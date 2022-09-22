import React, { useState, useEffect } from "react";
import {
  ContentDiv, InfoDiv, Label, Button,
  ErrorField, Error
} from "../styles";
import styled from "styled-components";

const AccountPage = ({ user }) => {
  const [avatar, setAvatar] = useState(null);
  const [input, setInput] = useState({
    avatar: null
  });

  useEffect(() => {
    // fetch user avatar on change
    fetch("/api/me").then((r) => {
      if (r.ok) {
        r.json()
          .then((userData) => setAvatar(userData.avatar));
      }
    });
  }, [input]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('avatar', input.avatar);
    fetch('/api/me', {
      method: 'PATCH',
      body: formData
    })
      .then(data => console.log(data))
      .catch(err => console.log(err));
  }

  const handleImageChange = (e) => {
    setInput({
      avatar: e.target.files[0]
    });
  }

  return (
    <Wrapper>
      <ContentDiv>
        <Title>Account</Title>
        <InfoDiv>
          <H2>Change Username</H2>
          <Label variant="blue" style={{ fontSize: "0.8rem" }}>Username</Label>
          <Username>{user.username}</Username>
          <Input
            id="username"
            type="text"
            placeholder="New Username"
            value=""
            onChange={() => console.log("")}
          />
          <Button
            style={{ margin: '4%', borderRadius: '15px' }}
          >
            Save Changes
          </Button>
          <H2>Change Password</H2>
          <Input
            id="passoword"
            type="password"
            placeholder="New Password"
            value=""
            onChange={() => console.log("")}
          />
          <Input
            id="password-confirmation"
            type="password"
            placeholder="Verify New Password"
            value=""
            onChange={() => console.log("")}
          />
          <Button
            style={{ margin: '4%', borderRadius: '15px' }}
          >
            Save Changes
          </Button>
          <ErrorField>
            {/* {error ? (<Error>{error}</Error>) : (null)} */}
          </ErrorField>
          <Button
            variant="red"
            style={{ margin: 'auto 0 0', borderRadius: '6px' }}
          >
            Delete Account
          </Button>
        </InfoDiv>
      </ContentDiv>
      <AvatarDiv>
        <Avatar
          src={avatar ? avatar.url : "/images/icons/avatar.png"}
          alt="Avatar"
        />
        <Form onSubmit={handleSubmit} encType="multipart/form-data">
          <Label htmlFor="avatar">Choose a profile picture:</Label>
          <input type="file"
            id="avatar"
            name="avatar"
            accept="image/png, image/jpeg"
            multiple={false}
            onChange={handleImageChange}
          />
          <button>Save</button>
        </Form>
      </AvatarDiv>
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

const H2 = styled.h2`
  font-size: 1.2rem;
  margin: 1% 0 4% 0;
`;

const Username = styled.h3`
  font-size: 1rem;
  margin: 2% 0;
  font-weight: 500;
`;

const Input = styled.input`
  color: lightgray;
  border: solid 2px #bfbfbf;
  border-radius: 6px;
  max-width: 100%;
  font-size: 0.8rem;
  line-height: 1.2;
  margin: 2% 0;
  padding: 2%;
`;

const AvatarDiv = styled.div`
  background: rgb(50,55,65);
  display: flex;
  flex-direction: column;
  box-shadow: 5px 5px 5px gray;
  border-radius: 10px;
  width: 60%;
  margin: 1%;
  padding: 1%;
  animation: appear 0.6s ease forwards;
`;

const Avatar = styled.img`
  background: gray;
  border: solid 8px gray;
  border-radius: 6px;
  display: flex;
  width: auto;
  height: 75%;
  margin: 5% auto 0;
`;

const Form = styled.form`
  display: flex;
  height: 5%;
  margin: auto;
`;

export default AccountPage;