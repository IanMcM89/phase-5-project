import styled from "styled-components";

function Button({ variant = "blue", ...props }) {
  let Component;
  if (variant === "blue") {
    Component = BlueButton;
  } else if (variant === "red") {
    Component = RedButton;
  }

  return <Component {...props} />;
}

const ButtonBase = styled.button`
  background-color: transparent;
  color: gray;
  cursor: pointer;
  font-size: 1rem;
  border: 2px solid gray;
  border-radius: 6px;
  padding: 8px 16px;
  text-decoration: none;
  justify-content: center;
  align-items: center;
  margin: auto 0 auto 0;
  transition: 0.3s;
`;

const BlueButton = styled(ButtonBase)`
  &:hover {
    background-color: navy;
    border: 2px solid white;
    color: white;
  }
`;

const RedButton = styled(ButtonBase)`
  &:hover {
    background-color: rgb(186, 43, 43);
    border: 2px solid white;
    color: white;
  }
`;

export default Button;
