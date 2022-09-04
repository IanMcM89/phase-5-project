import React, { useState, useEffect } from "react";
import { Button } from "../../../styles";
import styled, { css } from "styled-components";

const FriendRequests = () => {
  const [friendRequests, setFriendRequests] = useState([]);

  useEffect(() => {
    fetch("/api/friend_requests").then((r) => {
      if (r.ok) {
        r.json()
          .then((data) => setFriendRequests(data));
      }
    });
  }, []);

  const destroyFriendRequest = (id) => {
    fetch(`/api/friend_requests/${id}`, {
      method: "DELETE"
    })
      .then((r) => {
        if (r.ok) {
          setFriendRequests(friendRequests.filter((request) => {
            return request.id !== id;
          }));
        }
      });
  }

  const displayFriendrequests = friendRequests.map((request) => {
    return (
      <FriendRequest key={request.id}>
        <Timestamp>{request.created_at}</Timestamp>
        <Content>
          <Avatar
            src={request.user.avatar ? (
              request.user.avatar
            ) : (
              "/images/icons/avatar.png"
            )}
            alt="Avatar Image"
          />
          <Message>{request.user.username} sent you a friend request:</Message>
        </Content>
        <Buttons>
          <Button
            style={{ margin: "0 4%", padding: "4px 8px"}} 
            variant="green"
            onClick={() => console.log("Request Accepted")}
          >
            Accept
          </Button>
          <Button
            style={{ padding: "4px 8px"}}
            variant="red" 
            onClick={() => destroyFriendRequest(request.id)}
          >
            Reject
          </Button>
        </Buttons>
      </FriendRequest>
    )
  });

  return (
    <Wrapper>
      {displayFriendrequests}
    </Wrapper>
  );
}

const commonStyles = css`
  display: flex;
  width: 100%;
  height: fit-content;
  justify-content: center;
  flex-direction: column;
`;

const Wrapper = styled.div`
  ${commonStyles}

  div:nth-child(odd) {
    background: rgb(10,15,25,0.6);
  }
`;

const FriendRequest = styled.div`
  ${commonStyles}
`;

const Timestamp = styled.p`
  color: gray;
  margin: 0 0 0 2%;
  font-size: 0.7vw;
`;

const Content = styled.div`
  ${commonStyles}
  flex-direction: row;
`;

const Avatar = styled.img`
  ${commonStyles}
  width: auto;
  height: 30px;
  margin: 2%;
`;

const Message = styled.p`
  ${commonStyles}
  color: white;
  height: auto;
  margin: 0;
`;

const Buttons = styled.nav`
  ${commonStyles}
  flex-direction: row;
  width: fit-content;
  margin: 0 2% 2%;
`;

export default FriendRequests;