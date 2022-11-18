import styled from "styled-components";

function Button({ variant = "transparent", ...props }) {
  let Component;

  switch (variant) {
    case "red":
      Component = ButtonRed;
      break;
    case "green":
      Component = ButtonGreen;
      break;
    default:
      Component = ButtonTransparent;
  }

  return <Component {...props} />;
}

const ButtonBase = styled.button`
  justify-content: center;
  align-items: center;
  background: transparent;
  color: gray;
  cursor: pointer;
  font-size: 1rem;
  padding: 8px 16px;
  text-decoration: none;
  margin: auto 0;
  transition: 0.3s;

  &:hover {
    border: 2px solid white;
    color: white;
  }
`;

const ButtonRed = styled(ButtonBase)`
  background: rgb(200, 55, 55);
  color: lightgray;
  border: 2px solid transparent;

  &:hover {
    background: red;
  }
`;

const ButtonGreen = styled(ButtonRed)`
  background: darkgreen;

  &:hover {
    background: #00b300;
  }
`;

const ButtonTransparent = styled(ButtonBase)`
  background: rgb(100,100,100,.7);
  color: white;
  border: 2px solid white;

  &:hover {
    background: gray;
  }
`;

export default Button;
