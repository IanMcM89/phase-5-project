import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchRequests } from "../../reducers/requestsSlice";
import Notifications from "../notifications/NotificationsList";
import { Logo, Button } from "../../styles";
import styled, { css } from "styled-components";

const NavBar = ({ setUser }) => {
  const friendRequests = useSelector((state) => state.requests.entities);
  const [showNotifications, setShowNotifications] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(fetchRequests());
  }, [dispatch]);

  useEffect(() => {
    const list = document.getElementById('notifications');

    return list.style.animation = (
      showNotifications ?
        "slideLeft 0.2s ease forwards" :
        "slideRight 0.2s ease forwards"
    )

  }, [showNotifications])

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
    dispatch(fetchRequests());
  }

  return (
    <Header>
      <Logo />
      <Nav>
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
        <Icon src="/images/icons/profile.png" alt="Profile" />
        <Icon
          src={`/images/icons/${friendRequests.length > 0 ?
            "bell-fill.png" : "bell-empty.png"
            }`
          }
          alt="Notifications"
          onClick={handleBellClick}
        />
        &ensp;
        <Button variant='red' onClick={handleLogout}>
          Logout
        </Button>
      </Nav>
      <Notifications />
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
  animation: hoverOut 0.2s ease forwards;
  &:hover {
    animation: hoverIn 0.2s ease forwards;
  }
`;

export default NavBar;