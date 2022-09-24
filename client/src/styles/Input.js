import styled, { css } from "styled-components";

function Input({ variant = "gray", ...props }) {
  let Component;
  if (variant === "gray") {
    Component = InputGray;
  } else if (variant === "border") {
    Component = InputBorder;
  } else if (variant === "textarea") {
    Component = TextArea;
  }

  return <Component {...props} />;
}

const commonStyles = css`
  color: gray;
  border: solid 2px #bfbfbf;
  border-radius: 6px;
  max-width: 100%;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 0.8rem;
  padding: 2%;
`;

const InputGray = styled.input`
  background-color: rgba(0,0,0,.4);
  color: lightgray;
  border-radius: 4px;
  border: none;
  max-width: 100%;
  width: 100%;
  font-size: 1rem;
  line-height: 1.5;
  padding: 4px;
`;

const InputBorder = styled.input`
  ${commonStyles}
  line-height: 1.2;
  margin: 1% 0;
`;

const TextArea = styled.textarea`
  ${commonStyles}
  font-size: 14px;
  height: 25%;
  margin: 2% 0;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export default Input;