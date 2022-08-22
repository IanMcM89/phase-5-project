import React, { useState, useEffect } from "react";
import styled from "styled-components";

const FriendRequests = () => {
  const [hidden, sethidden] = useState(false);
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

  const toggleList = () => {
    sethidden(!hidden);
  }

  // const displayFriendrequests = friendRequests.map((request) => {
  //   return(
  //     <FriendRequest key={request.id} request={request}/>
  //   )
  // });

  return (
    <Wrapper>
      <Label htmlFor="friend-requests">
        Friend Requests
        <ArrowIcon
          src={
            hidden ? (
              "/images/icons/arrow-close.png"
            ) : (
              "/images/icons/arrow-open.png"
            )
          }
          alt="Edit Icon"
          onClick={toggleList}
        />
      </Label>
      {/* {displayFriendrequests} */}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: fit-content;
`;

const Label = styled.label`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: solid 1px gray;
  color: white;
  font-size: 1rem;
  height: fit-content;
`;

const ArrowIcon = styled.img`
  height: 30px;
  cursor: pointer;
`;

export default FriendRequests;