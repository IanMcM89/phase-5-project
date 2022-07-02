import React, { useState, useEffect } from "react";
import { Button, Input, Form, FormField, Label } from "../styles";

function SignUpForm({ onLogin, setErrors }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setErrors([]);
  }, [setErrors]);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    const r = await fetch("/api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
        password_confirmation: passwordConfirmation
      }),
    });

    const newUserData = await r.json();
    setLoading(false);
    if (r.ok) {
      onLogin(newUserData);
    } else {
      setErrors(newUserData.errors);
    }
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormField>
        <Label htmlFor="username">Username</Label>
        <Input
          type="text"
          id="username"
          autoComplete="off"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </FormField>
      <FormField>
        <Label htmlFor="password">Password</Label>
        <Input
          type="password"
          id="password"
          autoComplete="off"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </FormField>
      <FormField>
        <Label htmlFor="password_confirmation">Password Confirmation</Label>
        <Input
          type="password"
          id="password_confirmation"
          autoComplete="off"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
        />
      </FormField>
      <FormField>
        <Button type="submit">
          {loading ? "Loading..." : "Sign Up"}
        </Button>
      </FormField>
    </Form>
  )
}

export default SignUpForm;