import React, { useState } from "react";
import LoginForm from "../components/LoginForm";
import SignUpForm from "../components/SignUpForm";
import { Header, FormField, Error, Button } from "../styles";
import styled, { css } from "styled-components";

function Login({ onLogin }) {
  const [showLogin, setShowLogin] = useState(true);
  const [errors, setErrors] = useState([]);

  return (
    <>
      <Header />
      <Main>
        <Section>
          {
            showLogin ? (
              <>
                <LoginForm onLogin={onLogin} setErrors={setErrors} />
                <p>
                  Don't have an account? &nbsp;
                  <Button variant="blue" onClick={() => setShowLogin(false)}>
                    Sign Up
                  </Button>
                </p>
              </>
            ) : (
              <>
                <SignUpForm onLogin={onLogin} setErrors={setErrors} />
                <p>
                  Already have an account? &nbsp;
                  <Button variant="blue" onClick={() => setShowLogin(true)}>
                    Login
                  </Button>
                </p>
              </>
            )
          }
          <FormField>
            {errors.map((error) =>
              <Error key={error}>{error}</Error>
            )}
          </FormField>
        </Section>
      </Main>
    </>
  )
}

const commonStyles = css`
  display: flex;
  align-items: center;
`;

const Main = styled.main`
  ${commonStyles}
  width: 100vw;
  height: 90vh;
  margin: 0;
`;

const Section = styled.section`
  ${commonStyles}
  background-color: white;
  flex-direction: column;
  width: 30%;
  height: 100%;
  margin: auto;
  padding: 2%;
`;

export default Login;