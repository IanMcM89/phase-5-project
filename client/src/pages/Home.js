import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import DynamicMap from "../components/DynamicMap";

function Home({ user }) {
  const [users, setUsers] = useState([]);

  const mapIsReadyCallback = (map) => {
    console.log(map);
  };

  useEffect(() => {
    fetch("/api/users").then((r) => {
      if (r.ok) {
        r.json().then((users) => {
          setUsers(users);
        });
      }
    });
  }, []);

  return (
    <Wrapper>
      <DynamicMap mapIsReadyCallback={mapIsReadyCallback}/>
      {/* <ul>
        {users.map((u) => u.username !== user.username ? (
          <li key={u.id}>{u.username}</li>
        ) : (
          null
        )
        )}
      </ul> */}
    </Wrapper>
  );
}

const commonStyles = css`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  margin: 0;
`;

const Wrapper = styled.div`
  ${commonStyles}
  width: 100vw;
  height: 90vh;
  overflow: hidden;
`;

export default Home;