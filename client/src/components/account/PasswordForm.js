import React, { useState } from "react";
import { Button } from "../../styles";
import styled from "styled-components";

const PasswordForm = ({ setUser, setError }) => {
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
        password: '',
        password_confirmation: ''
      });
    } else {
      setError(update.errors[0]);
    }
  }

  return (
      <Form onSubmit={handleSubmit}>
        <H2>Change Password</H2>
        <Input
          id="password"
          type="password"
          autoComplete="off"
          placeholder="New Password"
          value={formData.password}
          onChange={handleChange}
        />
        <Input
          id="password_confirmation"
          type="password"
          autoComplete="off"
          placeholder="Verify New Password"
          value={formData.password_confirmation}
          onChange={handleChange}
        />
        <Button
          style={{ margin: '2%', borderRadius: '15px' }}
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

const H2 = styled.h2`
  font-size: 1.2rem;
  margin: 1% 0 2% 0;
`;

const Input = styled.input`
  color: gray;
  border: solid 2px #bfbfbf;
  border-radius: 6px;
  max-width: 100%;
  font-size: 0.8rem;
  line-height: 1;
  margin: 2% 0;
  padding: 2%;
`;

export default PasswordForm;