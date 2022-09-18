import styled from "styled-components";

const Avatar = styled.img`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: gray;
  border: solid 3px rgb(50,55,65);
  border-radius: 50%;
  top: -5%;
  left: -8%;
  width: 70px;
  height: 70px;
  margin: 1%;
  z-index: 2;
`;

export default Avatar;