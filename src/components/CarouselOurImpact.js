import React from "react";
import styled from "styled-components";
import Carousel from "react-elastic-carousel";

const Main = styled.div`
  width: 100%;
  padding: 100px;
  & .rec.rec-arrow {
    box-shadow: none;
    background-color: inherit;
    font-size: 5rem;
    color: royalblue;
  }
  .rec.rec-arrow:hover {
    color: royalblue;
  }
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  height: 350px;
  margin: 0 10px;
  background-color: inherit;
`;

const Image = styled.img`
  height: 150px;
  width: 150px;
  &[src=""] {
    display: none;
  }
`;

const MessageTop = styled.p`
  color: royalblue;
  width: 100%;
  font-size: 1.3rem;
`;
const MessageMiddle = styled.p`
  color: royalblue;
  width: 100%;
  font-size: 1.3rem;
`;
const MessageBottom = styled.p`
  color: royalblue;
  width: 100%;
  font-size: 1.3rem;
`;

const Name = styled.p`
  color: royalblue;
  font-weight: 300;
  font-size: 1.5rem;
`;
export default function CarouselOurImpact() {
  const breakPoints = [
    { width: 1, itemsToShow: 1, pagination: false },
    {
      width: 550,
      itemsToShow: 1,
      itemsToScroll: 2,
      pagination: false,
    },
    { width: 850, itemsToShow: 1, pagination: false },
    { width: 1150, itemsToShow: 1, itemsToScroll: 2 },
    { width: 1450, itemsToShow: 1 },
    { width: 1750, itemsToShow: 1 },
  ];
  return (
    <Main>
      <Carousel
        // renderArrow={myArrow}
        enableAutoPlay
        autoPlaySpeed={2000}
        itemPadding={[0, 10]}
        breakPoints={breakPoints}
      >
        {/* Item 1 */}
        <Item>
          <Image src="./images/Homepage/quote.png" />
          <MessageTop>
            Limitless opened my mind to my strengths and built
          </MessageTop>
          <MessageMiddle>
            a clearer understanding of my passion and what
          </MessageMiddle>
          <MessageBottom>makes me stir and think.</MessageBottom>
          <Name>- Okarino -</Name>
        </Item>
        {/* Item 2 */}
        <Item>
          <Image src="./images/Homepage/quote.png" />
          <MessageTop>
            Limitless opened my mind to my strengths and built
          </MessageTop>
          <MessageMiddle>
            a clearer understanding of my passion and what
          </MessageMiddle>
          <MessageBottom>makes me stir and think.</MessageBottom>
          <Name>- Okarino -</Name>
        </Item>
      </Carousel>
    </Main>
  );
}
