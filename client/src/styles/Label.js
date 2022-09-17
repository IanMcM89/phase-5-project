import styled from "styled-components";

function Label({ variant = "base", ...props }) {
  let Component;
  if (variant === "base") {
    Component = LabelBase;
  } else if (variant === "red") {
    Component = LabelRed;
  }

  return <Component {...props} />;
}

const LabelBase = styled.label`
  color: white;
  display: block;
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 5px;
`;

const LabelRed = styled(LabelBase)`
  color: red;
  font-weight: bold;
  margin-bottom: 0;
`;

export default Label;