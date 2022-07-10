import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Menu = () => {
  return (
    <Wrapper>
      <Nav>
        <WrapperRed>
          <Icon
            src="/images/icons/menu.png"
            alt="Menu"
            style={{ cursor: 'default' }}
          />
        </WrapperRed>
        <WrapperNavy>
          <Link to="/">
            <Icon
              src="/images/icons/map.png"
              alt="GeoMapper"
            />
          </Link>
        </WrapperNavy>
        <WrapperNavy>
          <Link to="/events">
            <Icon
              src="/images/icons/events.png"
              alt="Events"
            />
          </Link>
        </WrapperNavy>
        <WrapperNavy>
          <Link to="/friends">
            <Icon
              src="/images/icons/friends.png"
              alt="Friends"
            />
          </Link>
        </WrapperNavy>
      </Nav>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background-color: rgb(69, 73, 86);
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 4%;
  margin: 0;
`;

const WrapperRed = styled.div`
  background-color: rgb(186, 43, 43);
  border: 1px solid gray;
  display: flex;
  height: fit-content;
  width: 100%;
`;

const WrapperNavy = styled(WrapperRed)`
  background-color: rgb(45, 50, 61);

  &:hover {
    background-color: dimgray;
  }
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
  margin: 10% auto;
  cursor: pointer;
`;

export default Menu;