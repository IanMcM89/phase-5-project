import React, { useState } from "react";
import LoginForm from "../components/LoginForm";
import SignUpForm from "../components/SignUpForm";
import { Header, Error, Button } from "../styles";
import styled, { css } from "styled-components";

function Login({ onLogin }) {
  const [showLogin, setShowLogin] = useState(true);
  const [errors, setErrors] = useState([]);

  return (
    <>
      <Header />
      <Main>
        <Section style={{ backgroundColor: 'transparent' }}>
          <Background />
          <LogoWrapper>
            <Logo src="/images/pin.png" alt="Pin Logo" />
            <Title>GeoPlanner</Title>
          </LogoWrapper>
        </Section>
        <Section>
          {
            showLogin ? (
              <>
                <LoginForm onLogin={onLogin} setErrors={setErrors} />
                <p>
                  Don't have an account? &nbsp;
                  <Button variant="red" onClick={() => setShowLogin(false)}>
                    Sign Up
                  </Button>
                </p>
              </>
            ) : (
              <>
                <SignUpForm onLogin={onLogin} setErrors={setErrors} />
                <p>
                  Already have an account? &nbsp;
                  <Button variant="red" onClick={() => setShowLogin(true)}>
                    Login
                  </Button>
                </p>
              </>
            )
          }
          <ErrorField stylle={{ hight: '20%' }}>
            {errors.map((error) =>
              <Error key={error}>{error}</Error>
            )}
          </ErrorField>
        </Section>
      </Main>
    </>
  )
};

const commonStyles = css`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const Main = styled.main`
  ${commonStyles}
  height: 90vh;
`;

const Section = styled.section`
  ${commonStyles}
  background-color: white;
  flex-direction: column;
  width: 50%;
`;

const Background = styled.div`
  background-color: beige;
  background: url("/images/background.png");
  background-size: cover;
  position: absolute;
  top: 10vh;
  left: 0;
  width: 100%;
  height: 90%;
  filter: blur(3px);
  z-index: -1;
`;

const LogoWrapper = styled.div`
  ${commonStyles}
  background-color: rgb(32, 36, 44);
  border: solid 1px black;
  box-shadow: 0 0 20px;
  height: 40%;
  width: 70%;
`;

const Logo = styled.img`
  height: 40%;
  margin: auto 2%;
`;

const Title = styled.h1`
  color: white;
  font-size: 4rem;
  margin: auto 2%;
`;

const ErrorField = styled.div`
  ${commonStyles}
  flex-direction: column;
  height: 15%;
`;

export default Login;