import React, { useState } from "react";
import { Form, Button, Input } from "../../styles";
import styled from "styled-components";

const PasswordForm = ({ setUser, setError, getVariant }) => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    password: '',
    password_confirmation: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
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
      setError(null);
      setFormData({
        password: '',
        password_confirmation: ''
      });
    } else {
      setError(update.errors[0]);
    }
  }

  return (
      <Form variant="account" onSubmit={handleSubmit}>
        <H2>Change Password</H2>
        <Input
          variant="border"
          id="password"
          type="password"
          autoComplete="off"
          placeholder="New Password"
          value={formData.password}
          onChange={handleChange}
        />
        <Input
          variant="border"
          id="password_confirmation"
          type="password"
          autoComplete="off"
          placeholder="Verify New Password"
          value={formData.password_confirmation}
          onChange={handleChange}
        />
        <Button
          variant={getVariant(formData)}
          style={{ margin: '2%', borderRadius: '15px' }}
        >
          {loading ? "Loading..." : "Save Changes"}
        </Button>
      </Form>
  )
}

const H2 = styled.h2`
  font-size: 1.2rem;
  margin: 1% 0 2% 0;
`;

export default PasswordForm;