import styled, { css } from "styled-components";

function UserButton({ props, user }) {
  const displayComponent = () => {
    switch (props.variant) {
      case "friends":
        return (
          <RemoveButton
            style={{display: props.showButton ? 'none' : null}}
            onClick={() => props.removeFriend(user.id)}
          >
            Remove
          </RemoveButton>
        );
      case "pending":
        return (
          <PendingIcon
            src="/images/icons/pending.png"
            alt="Hour Glass Icon"
          />
        );
      case "users":
        return (
          <AddButton
            src="./images/icons/add-friend.png"
            alt="Add Friend"
            onClick={() => props.requestFriend(user)}
          />
        );
      default:
        return null
    }
  }

  return (
    <>
      {displayComponent()}
    </>
  );
}

const commonStyles = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: auto;
  height: 100%;
  cursor: pointer;
  transition: 0.3s;
  animation: hoverOut 0.2s ease forwards;

  :hover {
    animation: hoverIn 0.2s ease forwards;
  }
`;

const RemoveButton = styled.button`
  ${commonStyles}
  background-color: transparent;
  color: white;
  border: none;
  margin-right: 2%;
`;

const PendingIcon = styled.img`
  ${commonStyles}
  height: 40px;
  animation: none;

  :hover {
    animation: none;
  }
`;

const AddButton = styled.img`
  ${commonStyles}
  height: 30px;
  margin: 2%;
`;

export default UserButton;