import styled from "styled-components";

function Error({ children }) {
  return (
    <Wrapper>
      <Alert>!</Alert>
      <Message>{children}</Message>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  color: #ff3333;
  font-weight: bold;
  width: 100%;
  margin: 2px;
  animation: expand 0.4s ease forwards;
`;

const Alert = styled.span`
  width: 30px;
  display: grid;
  place-content: center;
`;

const Message = styled.p`
  margin: 0;
`;

export default Error;
