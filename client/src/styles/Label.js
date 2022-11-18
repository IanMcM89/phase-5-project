import styled from "styled-components";

function Label({ variant = "base", ...props }) {
  let Component;
  if (variant === "base") {
    Component = LabelBase;
  } else if (variant === "blue") {
    Component = LabelBlue;
  } else if (variant === "required") {
    Component = LabelRequired;
  }

  return <Component {...props} />;
}

const LabelBase = styled.label`
  color: white;
  display: block;
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 5px;
  
  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

const LabelBlue = styled(LabelBase)`
  color: rgb(50,55,65);
  font-weight: bold;
  margin-bottom: 0;
`;

const LabelRequired = styled(LabelBlue)`
  ::before {
    content:'*';
    color: red;
  }
`;

export default Label;