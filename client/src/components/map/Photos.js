import React, { useState } from 'react';
import styled, { css } from "styled-components";

const Photos = ({ photos }) => {
  const [index, setIndex] = useState(0);

  const url = photos ? photos[index].getUrl() : "/images/camera.png";

  const incrementIndex = () => {
    let i = index;
    if (photos && i < (photos.length - 1)) i++;
    return setIndex(i);
  }

  const decrementIndex = () => {
    let i = index;
    if (photos && i > 0) i--;
    return setIndex(i);
  }

  return (
    <Wrapper>
      <Photo 
        src={url} 
        alt={url} />
      <LeftArrow
        src="/images/icons/arrow-left.png"
        alt="Left Arrow"
        onClick={decrementIndex}
      />
      <RightArrow
        src="/images/icons/arrow-right.png"
        alt="Right Arrow"
        onClick={incrementIndex}
      />
    </Wrapper>
  )
}

const commonStyles = css`
  position: absolute;
  top: 25%;
  width: 30px;
  cursor: pointer;
  filter: contrast(50%);
`;

const Wrapper = styled.div`
  background-color: gray;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px 6px 0 0;
  width: 20vw;
  height: 25vh;
  margin: 0;
  overflow: hidden;
`;

const Photo = styled.img`
  display: flex;
  width: 100%;
`;

const LeftArrow = styled.img`
  ${commonStyles}
  left: 0;
`;

const RightArrow = styled.img`
  ${commonStyles}
  right: 0;
`;

export default Photos;