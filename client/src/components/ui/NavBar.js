import React, { useState } from "react";
import {useHistory} from "react-router-dom";
import Notifications from "../notifications/NotificationsList";
import { Logo, Button } from "../../styles";
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

  const handleBellClick = () => {
    setShowNotifications(!showNotifications);
  }

  return (
    <Header>
      <Logo />
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
          onClick={handleBellClick}
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
  align-items: center;
`;

const Header = styled.header`
  ${commonStyles}
  background: rgba(20,25,30);
  justify-content: left;
  width: 100vw;
  height: 10vh;
  margin: 0;
  padding-left: 1%;
  top: 0;
`;

const Nav = styled.nav`
  ${commonStyles}
  flex-direction: row;
  justify-content: right;
  height: 100%;
  margin: 0 1% 0 auto;
`;

const Icon = styled.img`
  height: 60%;
  margin: auto 0;
  cursor: pointer;
`;

export default NavBar;