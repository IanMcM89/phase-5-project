import styled from "styled-components";

const Rating = ({ rating }) => {
  const displayStars = () => {
    const num = Math.round(rating);
    // Return five star components
    return [...Array(5)].map((e, i) => (
      <Star key={i} style={{ color: i < num ? 'gold' : 'darkgray' }} />
    ));
  }

  return (
    <Wrapper>
      {displayStars()}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  height: fit-content;
`;

const Star = styled.p`
  font-size: 1.2rem;
  margin: 1% 0 3%;
  ::before {
    content: '★';
  }
`;

export default Rating;