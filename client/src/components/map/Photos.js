import React, { useState } from 'react';
import styled, { css } from "styled-components";

const Photos = ({ photos }) => {
  const [index, setIndex] = useState(0);

  const incrementIndex = () => {
    const length = (photos.length - 1);
    let i = index;
    if (index <= length) setIndex(i++);
  }

  const decrementIndex = () => {
    let i = index;
    i--;
    if (index > 0) setIndex(i);
  }

  console.log(photos.length)
  console.log(index)

  return (
    <Wrapper>
      <Photo src={photos[index].getUrl()} alt={photos[0].getUrl()} />
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
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  width: 25vw;
  height: 25vh;
  margin: 0;
  overflow: hidden;
`;

const Photo = styled.img`
  display: flex;
  width: 100%;
  height: auto;
  margin: 0;
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