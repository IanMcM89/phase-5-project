import React from "react";
import { Header, Button } from "../styles";
import styled from "styled-components";

function NavBar({ user, setUser }) {
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
        <Logo
          src="/images/rosa-pin.png"
          alt="Rosa-Pin Logo" 
        />
        <Title>GeoPlanner</Title>
      </LogoWrapper>
      <Nav>
        <Icon 
          src="/images/icons/profile.png"
          alt="Profile"
        />
        <Icon 
          src="/images/icons/bell-fill.png"
          alt="Notifications"
          style={{ marginRight: '1%'}}
        />
        <Button variant="red" onClick={handleLogout}>
          Logout
        </Button>
      </Nav>
    </Header>
  )
}

const LogoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  margin-left: 5px;
`;

const Logo = styled.img`
  display: flex;
  height: 50%;
  margin: auto 5%;
`;

const Title = styled.h1`
  color: white;
  display: flex;
  font-size: 2rem;
  margin: auto 0;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: right;
  width: 49%;
  height: 100%;
  margin: 0 1% 0 auto;
`;

const Icon = styled.img`
  display: flex;
  height: 60%;
  margin: auto 0;
`;

export default NavBar;