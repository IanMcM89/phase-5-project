import React, { useState } from "react";
import {useHistory} from "react-router-dom";
import Notifications from "../notifications/NotificationsList";
import Logo from "./Logo";
import { Header, Button } from "../../styles";
import styled from "styled-components";

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

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
  justify-content: right;
  margin: 0 1% 0 auto;
`;

const Icon = styled.img`
  height: 60%;
  margin: auto 0;
  cursor: pointer;
`;

export default NavBar;