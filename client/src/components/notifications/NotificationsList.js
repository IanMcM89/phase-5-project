import React from "react";
import FriendRequest from "../notifications/lists/FriendRequest";
import { useSelector, useDispatch } from "react-redux";
import { fetchRequests } from "../../reducers/requestsSlice";
import { addUser } from "../../reducers/usersSlice";
import Loading from "./Loading";
import styled from "styled-components";

const NotificationsList = () => {
  const dispatch = useDispatch();
  const friendRequests = useSelector((state) => state.requests.entities);
  const isLoading = useSelector((state) => {
    return state.requests.status.includes('loading');
  });

  const updateRequest = (currentRequest) => {
    fetch(`/api/friend_requests/${currentRequest.id}`, {
      method: "PATCH"
    })
      .then((r) => {
        if (r.ok) {
          dispatch(fetchRequests());
        }
      })
      .then(dispatch(addUser('/api/friends', currentRequest.user)))
  }

  const destroyRequest = (id) => {
    fetch(`/api/friend_requests/${id}`, {
      method: "DELETE"
    })
      .then((r) => {
        if (r.ok) {
          dispatch(fetchRequests());
        }
      })
  }

  const displayFriendrequests = () => {
    if (friendRequests.length > 0) {
      return friendRequests.map((request) =>
        <FriendRequest
          key={request.id}
          request={request}
          onUpdate={() => updateRequest(request)}
          onDelete={() => destroyRequest(request.id)}
        />
      );
    } else {
      return (
        <Message>No Notifications</Message>
      )
    }
  };

  return (
    <Wrapper>
      <Label>Notifications</Label>
      {!isLoading ? (
        <List>
          {displayFriendrequests()}
        </List>
      ) : (
        <Loading />
      )}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background-color: rgb(30,35,45,0.9);
  position: absolute;
  top: 10%;
  right: 0;
  height: fit-content;
  width: 25%;
  z-index: 1;
  animation: expand 0.2s ease forwards;
`;

const Label = styled.label`
  background-color: rgb(10, 15, 25);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: gray;
  font-size: 1rem;
  font-weight: bold;
  height: fit-content;
  padding: 1%;
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  margin: 0;
  padding: 0;
  
  ::-webkit-scrollbar {
    display: none;
  }
`;

const Message = styled.p`
  color: white;
  text-align: center;
`;

export default NotificationsList;