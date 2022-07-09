import React, { useEffect, useState } from "react";
import { Switch, Route } from 'react-router-dom';
import Login from "../pages/Login";
import NavBar from "./NavBar";
import Menu from "./Menu";
import GeoapifyMap from "../pages/GeoapifyMap";
import styled from "styled-components";

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // auto-login user
    fetch("/api/me").then((r) => {
      if (r.ok) {
        r.json().then((userData) => setUser(userData));
      }
    });
  }, []);

  if (!user) return (<Login onLogin={setUser} />);

  return (
    <>
      <NavBar user={user} setUser={setUser} />
      <Main>
        <Menu />
        <Switch>
          <Route path="/profile">
            <></>
          </Route>
          <Route path="/friends">
            <></>
          </Route>
          <Route path="/events/:id">
            <></>
          </Route>
          <Route path="/events">
            <></>
          </Route>
          <Route path="/">
            <GeoapifyMap />
          </Route>
        </Switch>
      </Main>
    </>
  );
}

const Main = styled.main`
  display: flex;
  width: 100vw;
  height: 90vh;
  margin: 0;
  overflow: hidden;
`;

export default App;
