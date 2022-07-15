import React, { useEffect, useState } from "react";
import { Switch, Route } from 'react-router-dom';
import UINavBar from "./UINavBar";
import UIMenu from "./UIMenu";
import LoginPage from "../pages/LoginPage";
import MapPage from "../pages/MapPage";
import FriendsPage from "../pages/FriendsPage";
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

  if (!user) return (<LoginPage onLogin={setUser} />);

  return (
    <>
      <UINavBar user={user} setUser={setUser} />
      <Main>
        <UIMenu />
        <Switch>
          <Route path="/profile">
            <></>
          </Route>
          <Route path="/friendslist">
            <FriendsPage user={user} />
          </Route>
          <Route path="/events/:id">
            <></>
          </Route>
          <Route path="/events">
            <></>
          </Route>
          <Route path="/">
            <MapPage />
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
