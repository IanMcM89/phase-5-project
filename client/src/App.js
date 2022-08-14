import React, { useEffect, useState } from "react";
import { Switch, Route } from 'react-router-dom';
import NavBar from "./features/ui/NavBar";
import Menu from "./features/ui/Menu";
import LoginPage from "./pages/LoginPage";
import MapPage from "./pages/MapPage";
import FriendsTab from "./features/friends/FriendsTab";
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
      <NavBar user={user} setUser={setUser} />
      <Main>
        <FriendsTab user={user} />
        <Switch>
          <Route path="/profile">
            <></>
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
        <Menu/>
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
