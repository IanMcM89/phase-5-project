import React, { useEffect, useState } from "react";
import { Switch, Route } from 'react-router-dom';
import NavBar from "./components/ui/NavBar";
import EventForm from "./components/events/EventForm";
import EventPage from "./pages/EventPage";
import EventsList from "./pages/EventsList";
import LoginPage from "./pages/LoginPage";
import MapPage from "./pages/MapPage";
import UserList from "./components/users/UserList";
import styled from "styled-components";

const App = ({ cable }) => {
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

  useEffect(() => {
    if (user) cable.subscriptions.create(
        { 
          channel: 'UsersChannel', 
          id: user.id 
        }, 
        {
          connected:    () => { console.log(`${user.username} logged in`) },
          disconnected: () => { console.log(`${user.username} logged off`) },
          received: (data) => { console.log(data) }
        }
      );
  }, [user, cable.subscriptions])

  if (!user) return (<LoginPage onLogin={setUser} />);

  return (
    <>
      <NavBar user={user} setUser={setUser} />
      <Main>
        <UserList user={user} />
        <Switch>
          <Route path="/profile">
            <></>
          </Route>
          <Route path="/events/create">
            <EventForm user={user}/>
          </Route>
          <Route path="/events/:id">
            <EventPage user={user}/>
          </Route>
          <Route path="/events">
            <EventsList user={user}/>
          </Route>
          <Route path="/">
            <MapPage user={user}/>
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
