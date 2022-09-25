import React, { useState } from "react";
import { Form, Input, Label, Button, Error } from "../../styles";
import styled from "styled-components";

const UsernameForm = ({ user, setUser, setMessage, getVariant }) => {
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
      setMessage(null);
      setFormData({
        username: ''
      });
    } else {
      setMessage(<Error>{update.errors[0]}</Error>);
    }
  }

  return (
    <Form variant="account" onSubmit={handleSubmit}>
      <H2>Change Username</H2>
      <Label variant="blue" style={{ fontSize: "0.8rem" }}>Username</Label>
      <Username>{user.username}</Username>
      <Input
        variant="border"
        id="username"
        type="text"
        autoComplete="off"
        placeholder="New Username"
        value={formData.username}
        onChange={handleChange}
      />
      <Button
        variant={getVariant(formData)}
        style={{ margin: '2% 0 0 0', borderRadius: '15px' }}
      >
        {loading ? "Loading..." : "Save Changes"}
      </Button>
    </Form>
  )
}

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

export default UsernameForm;