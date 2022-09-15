import React, { useState } from "react";
import LoginForm from "../components/login/LoginForm";
import SignUpForm from "../components/login/SignUpForm";
import { Logo, Button, Error } from ".././styles";
import styled, { css } from "styled-components";

const LoginPage = ({ onLogin }) => {
  const [showLogin, setShowLogin] = useState(true);
  const [errors, setErrors] = useState([]);

  return (
    <Main>
      <Wrapper>
        <Logo />
        {showLogin ? (
          <Section>
            <LoginForm onLogin={onLogin} setErrors={setErrors} />
            <P>
              Don't have an account? &nbsp;
              <Button variant='transparent' onClick={() => setShowLogin(false)}>
                Sign Up
              </Button>
            </P>
          </Section>
        ) : (
          <Section>
            <SignUpForm onLogin={onLogin} setErrors={setErrors} />
            <P>
              Already have an account? &nbsp;
              <Button variant='transparent' onClick={() => setShowLogin(true)}>
                Login
              </Button>
            </P>
          </Section>
        )}
        <ErrorField>
          {errors.map((error) => <Error key={error}>{error}</Error>)}
        </ErrorField>
      </Wrapper>
    </Main>
  )
};

const commonStyles = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Main = styled.main`
  ${commonStyles}
  background-color: transparent;
  height: 100vh;
`;

const Wrapper = styled.div`
  ${commonStyles}
  background: linear-gradient(
    153deg, 
    rgba(60,65,75,0.8) 20%, 
    rgba(20,25,35,0.9) 60%
  );
  justify-content: flex-start;
  border-radius: 12px;
  width: 50%;
  height: 80%;
  padding: 5% 1%;
`;

const Section = styled.section`
  ${commonStyles}
  width: 100%;
`;

const P = styled.p`
  color: white;
`;

const ErrorField = styled.div`
  ${commonStyles}
  height: 20%;
  width: fit-content;
`;

export default LoginPage;