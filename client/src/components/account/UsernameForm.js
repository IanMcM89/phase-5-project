import React, { useState } from "react";
import { Label, Button } from "../../styles";
import styled from "styled-components";

const UsernameForm = ({ user, setUser, setError }) => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    username: ''
  });

  const handleChange = (e) => {
    setFormData({
      username: e.target.value
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    console.log(formData)

    const r = await fetch("/api/me", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const update = await r.json();
    setLoading(false);
    if (r.ok) {
      setUser(update);
      setError(null);
      setFormData({
        username: ''
      });
    } else {
      setError(update.errors[0]);
    }
  }

  return (
    <Form onSubmit={handleSubmit}>
      <H2>Change Username</H2>
      <Label variant="blue" style={{ fontSize: "0.8rem" }}>Username</Label>
      <Username>{user.username}</Username>
      <Input
        id="username"
        type="text"
        autoComplete="off"
        placeholder="New Username"
        value={formData.username}
        onChange={handleChange}
      />
      <Button
        style={{ margin: '2% 0 0 0', borderRadius: '15px' }}
      >
        {loading ? "Loading..." : "Save Changes"}
      </Button>
    </Form>
  )
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  height: fit-content;
  padding: 3%;
`;

const Username = styled.h3`
  color: red;
  font-size: 1rem;
  margin: 2% 0;
  font-weight: 500;
`;

const H2 = styled.h2`
  font-size: 1.2rem;
  margin: 1% 0 4% 0;
`;

const Input = styled.input`
  color: gray;
  border: solid 2px #bfbfbf;
  border-radius: 6px;
  max-width: 100%;
  font-size: 0.8rem;
  margin: 1% 0;
  padding: 2%;
`;

export default UsernameForm;