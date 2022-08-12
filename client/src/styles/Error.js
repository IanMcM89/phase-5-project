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
  color: red;
  background-color: #ffb3b3;
  border: solid 1px red;
  border-radius: 6px;
  display: flex;
  width: 100%;
  margin: 2px;
  padding: 4px 6px;
  align-items: center;
  animation: expand 0.4s ease forwards;
`;

const Alert = styled.span`
  height: 30px;
  width: 30px;
  font-weight: bold;
  display: grid;
  place-content: center;
`;

const Message = styled.p`
  margin: 0;
`;

export default Error;
