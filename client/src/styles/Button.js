import styled from "styled-components";

function Button({ variant = "transparent", ...props }) {
  let Component;
  if (variant === "transparent") {
    Component = ButtonTransparent;
  } else if (variant === "red") {
    Component = ButtonRed;
  } else if (variant === "green") {
    Component = ButtonGreen;
  }

  return <Component {...props} />;
}

const ButtonBase = styled.button`
  background-color: transparent;
  color: gray;
  cursor: pointer;
  font-size: 1rem;
  padding: 8px 16px;
  text-decoration: none;
  justify-content: center;
  align-items: center;
  margin: auto 0 auto 0;
  transition: 0.3s;

  &:hover {
    border: 2px solid white;
    color: white;
  }
`;

const ButtonRed = styled(ButtonBase)`
  background-color: rgb(200, 55, 55);
  color: lightgray;
  border: 2px solid transparent;

  &:hover {
    background-color: red;
  }
`;

const ButtonGreen = styled(ButtonBase)`
  background-color: darkgreen;
  color: lightgray;
  border: 2px solid transparent;

  &:hover {
    background-color: #00b300;
  }
`;

const ButtonTransparent = styled(ButtonBase)`
  background-color: rgb(100,100,100,.7);
  color: white;
  border: 2px solid white;

  &:hover {
    background-color: gray;
  }
`;

export default Button;
