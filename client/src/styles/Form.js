import styled from "styled-components";

function Form({ variant = "login", ...props }) {
  let Component;
  if (variant === "login") {
    Component = LoginForm;
  } else if (variant === "event") {
    Component = EventForm;
  } else if (variant === "account") {
    Component = AccountForm;
  }

  return <Component {...props} />;
}

const LoginForm = styled.form`
  width: 50%;
  margin-top: 3%;
  animation: appear 1.5s ease forwards;

  @media (max-width: 480px) {
    width: 80%;
  }
`;

const EventForm = styled.form`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const AccountForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  height: fit-content;
  padding: 3%;
`;

export default Form;