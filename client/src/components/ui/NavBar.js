import React, { useState } from "react";
import {useHistory} from "react-router-dom";
import Notifications from "../notifications/NotificationsList";
import { Link } from "react-router-dom";
import { Header, Button } from "../../styles";
import styled, { css } from "styled-components";

const NavBar = ({ setUser }) => {
  const [showNotifications, setShowNotifications] = useState(false);
  const history = useHistory();

  const handleLogout = () => {
    fetch("/api/logout", {
      method: "DELETE"
    }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }

  const handleClick = () => {
    setShowNotifications(!showNotifications);
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
        <Icon
          src="/images/icons/map.png"
          alt="GeoMapper"
          onClick={() => history.push("/")}
        />
        <Icon
          src="/images/icons/events.png"
          alt="Events"
          onClick={() => history.push("/events")}
        />
        <Icon
          src="/images/icons/bell-empty.png"
          alt="Notifications"
          onClick={handleClick}
        />
        &ensp;
        <Button variant='red' onClick={handleLogout}>
          Logout
        </Button>
      </Nav>
      {showNotifications ? (<Notifications />) : (null)}
    </Header>
  )
};

const commonStyles = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
`;

const LogoWrapper = styled.div`
  ${commonStyles}
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
  margin: 0 1% 0 auto;
`;

const Icon = styled.img`
  height: 60%;
  margin: auto 0;
  cursor: pointer;
`;

export default NavBar;