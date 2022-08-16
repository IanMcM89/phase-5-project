import React, { useState } from "react";
import LoginForm from "../components/login/LoginForm";
import SignUpForm from "../components/login/SignUpForm";
import { Button, Error } from ".././styles";
import styled, { css } from "styled-components";

const LoginPage = ({ onLogin }) => {
  const [showLogin, setShowLogin] = useState(true);
  const [errors, setErrors] = useState([]);

  return (
    <Main>
      <Wrapper>
        <LogoContainer>
          <Logo src="/images/pin.png" alt="Pin Logo" />
          <Title>GeoPlanner</Title>
        </LogoContainer>
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
        <ErrorField style={{ hight: '20%' }}>
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
    rgba(50,55,65,0.8) 20%, 
    rgba(10,15,25,0.9) 60%
  );
  justify-content: flex-start;
  border-radius: 12px;
  width: 50%;
  height: 80%;
  padding: 5% 1%;
`;

const LogoContainer = styled.div`
  ${commonStyles}
  flex-direction: row;
  height: 15%;
`;

const Logo = styled.img`
  height: 80%;
  margin-right: 2%;
`;

const Title = styled.h1`
  ${commonStyles}
  color: white;
  font-size: 3rem;
  width: fit-content;
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