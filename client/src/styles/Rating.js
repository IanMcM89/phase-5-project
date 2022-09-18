import styled from "styled-components";

const Rating = ({ rating }) => {
  const num = Math.round(rating);

  const displayStars = () => {
    return [...Array(5)].map((e, i) => {
      if (i < num) return <GoldStar key={i}>★</GoldStar>;
      else return <GrayStar key={i}>★</GrayStar>
    });
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

const GoldStar = styled.p`
  color: gold;
  font-size: 1.2rem;
  margin: 1% 0 3% 0;
`;

const GrayStar = styled(GoldStar)`
  color: #bfbfbf;
`;

export default Rating;