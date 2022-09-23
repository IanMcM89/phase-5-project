import React, { useState } from "react";
import { Label } from "../../styles";
import styled, { css } from "styled-components";

const AvatarForm = ({ user, setUser }) => {
  const [avatar, setAvatar] = useState(null);
  const [form, setForm] = useState({ avatar: null });

  const handleChange = (e) => {
    setAvatar(URL.createObjectURL(e.target.files[0]));
    setForm({
      ...form,
      avatar: e.target.files[0]
    });
  }

  const getAvatar = () => {
    if (avatar) {
      return avatar;
    } else if (user.avatar) {
      return user.avatar.url;
    } else {
      return "/images/icons/avatar.png"
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('avatar', form.avatar);
    fetch('/api/me', {
      method: 'PATCH',
      body: formData
    })
      .then((r) => r.json())
      .then((data) => setUser(data))
      .then(setForm({ avatar: null }))
      .catch(err => console.log(err));
  }

  return (
      <Wrapper>
        <Avatar
          src={getAvatar()}
          alt="Avatar"
        />
        <Form onSubmit={handleSubmit} encType="multipart/form-data">
          <FormField>
            <Label style={{ display: "flex", alignItems: "center", margin: 0 }}>
              Choose a profile picture: &nbsp;
            </Label>
            <FileInput
              type="file"
              id="file"
              accept="image/png, image/jpeg"
              multiple={false}
              onChange={handleChange}
            />
            <FileLabel htmlFor="file">
              Select file
            </FileLabel>
          </FormField>
          <FormField>
            {form.avatar ? (
              <File>
                {form.avatar.name} {(form.avatar.size / 1000).toFixed(2)} KB
              </File>
            ) : (
              null
            )}
            {form.avatar ? (<SaveButton>Save</SaveButton>) : (null)}
          </FormField>
        </Form>
      </Wrapper>
  )
}

const commonStyles = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  ${commonStyles}
  flex-direction: column;
  background: rgb(50,55,65);
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
  ${commonStyles}
  flex-direction: column;
  width: 80%;
  height: 15%;
  margin: 5%;
`;

const FormField = styled.div`
  ${commonStyles}
  width: 80%;
  height: 45%;
`;

const FileInput = styled.input`
  display: none;
`;

const FileLabel = styled.label`
  ${commonStyles}
  flex-direction: column;
  background: rgb(200, 55, 55);
  box-shadow: 4px 4px 7px #1a1a1a;
  border-radius: 25px;
  font-weight: bold;
  color: white;
  width: 150px;
  height: fit-content;
  padding: 1% 0;
  cursor: pointer;
  animation: hoverOut 0.2s ease forwards;
  &:hover {
    animation: hoverIn 0.2s ease forwards;
  }
`;

const File = styled.p`
  color: gray;
`;

const SaveButton = styled.button`
  border: solid 2px lightgray;
  border-radius: 10px;
  background: transparent;
  color: lightgray;
  margin-left: 2%;
  cursor: pointer;
  animation: hoverOut 0.2s ease forwards;
  &:hover {
    border: 2px solid white;
    color: white;
    animation: hoverIn 0.2s ease forwards;
  }
`;

export default AvatarForm;