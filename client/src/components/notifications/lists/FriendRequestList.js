import React, { useState, useEffect } from "react";
import FriendRequest from "./FriendRequest";
import { useDispatch } from "react-redux";
import { addUser } from "../../../reducers/usersSlice";
import styled, { css } from "styled-components";

const FriendRequestList = () => {
  const [friendRequests, setFriendRequests] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("/api/friend_requests").then((r) => {
      if (r.ok) {
        r.json()
          .then((data) => setFriendRequests(data));
      }
    });
  }, []);

  const updateRequest = (currentRequest) => {
    fetch(`/api/friend_requests/${currentRequest.id}`, {
      method: "PATCH"
    })
      .then((r) => {
        if (r.ok) {
          setFriendRequests(friendRequests.filter((request) => {
            return request.id !== currentRequest.id;
          }));
        }
      })
      .then(dispatch(addUser('/api/friends', currentRequest.user)));
  }

  const destroyRequest = (id) => {
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
    return <FriendRequest
      key={request.id}
      request={request}
      onUpdate={updateRequest}
      onDelete={destroyRequest}
    />
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

export default FriendRequestList;