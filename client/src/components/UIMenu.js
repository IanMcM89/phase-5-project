import React from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

const UIMenu = () => {
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
          <Link to="/friendslist">
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

const commonStyles = css`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Wrapper = styled.div`
  ${commonStyles}
  background-color: rgb(69, 73, 86);
  height: 100%;
  width: 5%;
`;

const WrapperRed = styled.div`
  ${commonStyles}
  background-color: rgb(186, 43, 43);
  border: 1px solid gray;
`;

const WrapperNavy = styled(WrapperRed)`
  background-color: rgb(45, 50, 61);

  &:hover {
    background-color: dimgray;
  }
`;

const Nav = styled.nav`
  ${commonStyles}
  margin: 0;
`;

const Icon = styled.img`
  ${commonStyles}
  width: 70%;
  margin: 10% auto;
  cursor: pointer;
`;

export default UIMenu;