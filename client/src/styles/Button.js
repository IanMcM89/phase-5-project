import styled from "styled-components";

function Button({ variant = "tr-navy", ...props }) {
  let Component;
  if (variant === "tr-navy") {
    Component = ButtonTransN;
  } else if (variant === "tr-red") {
    Component = ButtonTransR;
  } else if (variant === "navy") {
    Component = ButtonNavy;
  } else if (variant === "red") {
    Component = ButtonRed;
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

  &:hover {
    border: 2px solid white;
    color: white;
  }
`;

const ButtonTransN = styled(ButtonBase)`
  &:hover {
    background-color: navy;
  }
`;

const ButtonTransR = styled(ButtonBase)`
  &:hover {
    background-color: rgb(186, 43, 43);
  }
`;

const ButtonRed = styled(ButtonBase)`
  background-color: rgb(186, 43, 43);
  color: lightgray;
  border: 2px solid lightgray;

  &:hover {
    background-color: red;
  }
`;

const ButtonNavy = styled(ButtonRed)`
  background-color: rgb(32, 36, 44);

  &:hover {
    background-color: forestgreen;
  }
`;

export default Button;
