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
  background: rgb(255,204,204,0.8);
  border: solid 1px red;
  border-radius: 6px;
  display: flex;
  padding: 8px;
  align-items: center;
  gap: 8px;
  margin: 8px 0;
  animation: expand 0.4s ease forwards;
`;

const Alert = styled.span`
  background-color: white;
  height: 25px;
  width: 25px;
  border-radius: 50%;
  font-weight: bold;
  display: grid;
  place-content: center;
`;

const Message = styled.p`
  margin: 0;
`;

export default Error;
