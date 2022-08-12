import React, { useState } from "react";
import FormLogin from "../components/FormLogin";
import FormSignUp from "../components/FormSignUp";
import { Button, Error } from "../styles";
import styled, { css } from "styled-components";

const LoginPage = ({ onLogin }) => {
  const [showLogin, setShowLogin] = useState(true);
  const [errors, setErrors] = useState([]);

  return (
    <Main>
      <Section>
        <Background />
        <LogoContainer>
          <Logo src="/images/pin.png" alt="Pin Logo" />
          <Title>GeoPlanner</Title>
        </LogoContainer>
        {showLogin ? (
          <>
            <FormLogin onLogin={onLogin} setErrors={setErrors} />
            <p style={{ color: 'white' }}>
              Don't have an account? &nbsp;
              <Button variant='transparent' onClick={() => setShowLogin(false)}>
                Sign Up
              </Button>
            </p>
          </>
        ) : (
          <>
            <FormSignUp onLogin={onLogin} setErrors={setErrors} />
            <p style={{ color: 'white' }}>
              Already have an account? &nbsp;
              <Button variant='transparent' onClick={() => setShowLogin(true)}>
                Login
              </Button>
            </p>
          </>
        )}
        <ErrorField style={{ hight: '20%' }}>
          {errors.map((error) => <Error key={error}>{error}</Error>)}
        </ErrorField>
      </Section>
    </Main>
  )
};

const commonStyles = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Main = styled.main`
  ${commonStyles}
  background-color: transparent;
  height: 100vh;
`;

const Background = styled.div`
  background: url("/images/background.png");
  background-color: beige;
  background-size: cover;
  filter: blur(4px);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
`;

const Section = styled.section`
  ${commonStyles}
  background-color: rgba(0,0,0,.6);
  flex-direction: column;
  border-radius: 12px;
  width: 50%;
  height: 80%;
  padding: 1%;
`;

const LogoContainer = styled.div`
  ${commonStyles}
  height: 10%;
  width: 70%;
`;

const Logo = styled.img`
  height: 90%;
  margin: auto 2%;
`;

const Title = styled.h1`
  color: white;
  font-size: 3rem;
  margin: auto 2%;
`;

const ErrorField = styled.div`
  ${commonStyles}
  flex-direction: column;
  height: 15%;
`;

export default LoginPage;