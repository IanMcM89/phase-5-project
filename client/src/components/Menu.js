import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Menu = () => {
  return (
    <Wrapper>
      <MenuIcon
        src="/images/icons/menu.png"
        alt="Menu"
      />
      <Nav>
        <Link to="/">
          <Icon
            src="/images/icons/map.png"
            alt="GeoMapper"
          />
        </Link>
        <Link to="/events">
          <Icon
            src="/images/icons/events.png"
            alt="Events"
          />
        </Link>
        <Link to="/friends">
          <Icon
            src="/images/icons/friends.png"
            alt="Friends"
          />
        </Link>
      </Nav>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background-color: rgb(75, 86, 105);
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 5%;
  margin: 0;
`;

const MenuIcon = styled.img`
  display: flex;
  width: 60%;
  margin: 5% auto;
  cursor: pointer;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: fit-content;
  margin: 0;
`;

const Icon = styled.img`
  display: flex;
  width: 70%;
  margin: 5% auto;
  cursor: pointer;
`;

export default Menu;