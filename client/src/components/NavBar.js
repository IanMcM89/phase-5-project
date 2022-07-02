import React from "react";
import { Header, Button } from "../styles";
import styled from "styled-components";

function NavBar({ user, setUser }) {
  function handleLogout() {
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
      <Nav>
        <Message>Welcome {user.username}!</Message>
        <Button variant="orange" onClick={handleLogout}>
          Logout
        </Button>
      </Nav>
    </Header>
  )
}

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: right;
  width: 49%;
  height: 100%;
  margin: 0 1% 0 auto;
`;

const Message = styled.p`
  font-family: cursive;
  color: white;
  font-size: 1rem;
  text-align: center;
  margin: auto 2% auto 2%;
`;

export default NavBar;