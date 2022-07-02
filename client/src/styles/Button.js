import styled from "styled-components";

const COLORS = {
  blue: {
    "--main": "darkblue",
    "--accent": "white",
  },
  orange: {
    "--main": "darkorange",
    "--accent": "white",
  },
  white: {
    "--main": "white",
    "--accent": "gray",
  }
};

function Button({ variant = "blue", ...props }) {
  let Component;
  if (variant === "blue") {
    Component = BlueButton;
  } else if (variant === "orange") {
    Component = OrangeButton;
  }

  return <Component style={COLORS[variant]} {...props} />;
}

const ButtonBase = styled.button`
  font-family: "Permanent Marker", cursive;
  cursor: pointer;
  font-size: 1rem;
  border: 1px solid transparent;
  border-radius: 6px;
  padding: 8px 16px;
  text-decoration: none;
  justify-content: center;
  align-items: center;
  margin: auto 0 auto 0;
  transition: 0.3s;
  animation: hoverOut 0.4s ease forwards;

  :hover {
    animation: hoverIn 0.4s ease forwards;
  }
`;

const BlueButton = styled(ButtonBase)`
  background-color: var(--main);
  color: var(--accent);

  &:hover {
    background-color: blue;
  }
`;

const OrangeButton = styled(ButtonBase)`
  background-color: var(--main);
  color: var(--accent);

  &:hover {
    background-color: orangered;
  }
`;

export default Button;
