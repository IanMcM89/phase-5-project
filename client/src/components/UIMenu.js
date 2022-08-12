import React from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

const UIMenu = () => {
  return (
    <Wrapper>
      <Nav>
        <IconWrapper>
          <Link to="/">
            <Icon
              src="/images/icons/map.png"
              alt="GeoMapper"
            />
          </Link>
        </IconWrapper>
        <IconWrapper>
          <Link to="/events">
            <Icon
              src="/images/icons/events.png"
              alt="Events"
            />
          </Link>
        </IconWrapper>
        <IconWrapper>
          <Icon
            src="/images/icons/friends.png"
            alt="Friends"
          />
        </IconWrapper>
      </Nav>
    </Wrapper>
  )
}

const commonStyles = css`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items:center;
  width: 100%;
  margin: auto;
`;

const Wrapper = styled.div`
  ${commonStyles}
  background: linear-gradient(153deg, rgba(10,15,25,0.8) 20%, rgba(30,35,45,0.7) 60%);
  border-radius: 6px;
  position: absolute;
  bottom: 0;
  right: 2.5%;
  height: fit-content;
  width: 15%;
  margin: 1.5%;
  z-index: 1;
`;

const IconWrapper = styled.div`
  ${commonStyles}
  background-color: transparent;
  border-radius: 6px;
  width: fit-content;

  &:hover {
    background-color: red;
  }
`;

const Nav = styled.nav`
  ${commonStyles}
`;

const Icon = styled.img`
  ${commonStyles}
  width: 75%;
  cursor: pointer;
`;

export default UIMenu;