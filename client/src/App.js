import React, { useEffect, useState } from "react";
import { Switch, Route } from 'react-router-dom';
import NavBar from "./components/header/NavBar";
import AccountPage from "./pages/AccountPage";
import EventForm from "./components/events/EventForm";
import EventPage from "./pages/EventPage";
import EventsList from "./pages/EventsList";
import LoginPage from "./pages/LoginPage";
import MapPage from "./pages/MapPage";
import UserList from "./components/users/UserList";
import styled from "styled-components";

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // auto-login user
    fetch("/api/me").then((r) => {
      if (r.ok) {
        r.json()
          .then((userData) => setUser(userData))
      }
    });
  }, []);

  if (!user) return (<LoginPage onLogin={setUser} />);

  return (
    <>
      <NavBar setUser={setUser} />
      <Main>
        <UserList user={user} />
        <Switch>
          <Route path="/account">
            <AccountPage user={user} setUser={setUser} />
          </Route>
          <Route path="/events/create">
            <EventForm user={user} />
          </Route>
          <Route path="/events/:id">
            <EventPage user={user} />
          </Route>
          <Route path="/events">
            <EventsList user={user} />
          </Route>
          <Route path="/">
            <MapPage user={user} />
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

  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

export default App;
