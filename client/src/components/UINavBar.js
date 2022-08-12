import React from "react";
import { Link } from "react-router-dom";
import { Header, Button } from "../styles";
import styled, { css } from "styled-components";

const UINavBar = ({ setUser }) => {
  const handleLogout = () => {
    fetch("/api/logout", {
      method: "DELETE"
    }).then((response) => {
      if (response.ok) {
        setUser(null);
      }
    });
  }

  return (
    <Header>
      <LogoWrapper>
        &ensp;
        <Logo src="/images/pin.png" alt="Pin Logo" />
        <Link to="/" style={{ textDecoration: 'none' }}>
          <Title>GeoPlanner</Title>
        </Link>
      </LogoWrapper>
      <Nav>
        {/* <Icon src="/images/icons/profile.png" alt="Profile" /> */}
        <Icon src="/images/icons/bell-fill.png" alt="Notifications" />
        &ensp;
        <Button variant='red' onClick={handleLogout}>
          Logout
        </Button>
      </Nav>
    </Header>
  )
};

const commonStyles = css`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const LogoWrapper = styled.div`
  ${commonStyles}
  height: 100%;
`;

const Logo = styled.img`
  height: 50%;
  margin: auto 5%;
`;

const Title = styled.h1`
  color: white;
  font-size: 2rem;
  margin: auto;
`;

const Nav = styled.nav`
  ${commonStyles}
  justify-content: right;
  height: 100%;
  margin: 0 1% 0 auto;
`;

const Icon = styled.img`
  height: 60%;
  margin: auto 0;
  cursor: pointer;
`;

export default UINavBar;