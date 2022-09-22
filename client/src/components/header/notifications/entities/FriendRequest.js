import React from "react";
import { Button } from "../../../../styles";
import styled, { css } from "styled-components";

const FriendRequest = ({ request, onUpdate, onDelete }) => {
  return (
    <Wrapper key={request.id}>
      <Timestamp>{request.created_at}</Timestamp>
      <Content>
        <Avatar
          src={request.user.avatar ? (
            request.user.avatar.url
          ) : (
            "/images/icons/avatar.png"
          )}
          alt="Avatar Image"
        />
        <Message>{request.user.username} sent you a friend request:</Message>
      </Content>
      <Buttons>
        <Button
          style={{ margin: "0 4%" }}
          variant="red"
          onClick={() => onUpdate(request)}
        >
          Accept
        </Button>
        <Button
          onClick={() => onDelete(request.id)}
        >
          Reject
        </Button>
      </Buttons>
    </Wrapper>
  )
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
  background: rgb(10,15,25,0.7);
  border-radius: 6px;
  width: 96%;
  margin: 0 2% 2%;
  padding: 1%;
`;

const Timestamp = styled.p`
  color: lightgray;
  margin: 0 0 0 2%;
  font-size: 0.7vw;
`;

const Content = styled.div`
  ${commonStyles}
  flex-direction: row;
  align-items: center;
  margin: auto;
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

export default FriendRequest;