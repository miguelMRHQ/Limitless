import React from "react";
import styled from "styled-components";
import Carousel from "react-elastic-carousel";

const Main = styled.div`
  & .rec.rec-arrow {
    box-shadow: none;
    background-color: inherit;
    font-size: 3rem;
    color: mediumturquoise;
  }
  .rec.rec-arrow:hover {
    color: mediumturquoise;
  }
  .rec.rec-arrow:disabled {
    visibility: hidden;
  }
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  width: 10vw;
  height: 300px;
  margin: 0 10px;
  background-color: inherit;
  color: darkslateblue;
  font-size: 1rem;
`;

const Image = styled.img`
  height: 150px;
  width: 150px;
  &[src=""] {
    display: none;
  }
`;

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 10, itemsToShow: 2, itemsToScroll: 1, pagination: false },
  { width: 10, itemsToShow: 3, pagination: false },
  { width: 10, itemsToShow: 4, itemsToScroll: 1, pagination: false },
];

export default function CarouselConference({ speaker }) {
  // const myArrow = ({ type, onClick, isEdge }) => {
  //   const pointer = type === consts.PREV ? "👈" : "👉";
  //   return (
  //     <button
  //       onClick={onClick}
  //       disabled={isEdge}
  //       className="rec rec-arrow"
  //     >
  //       {pointer}
  //     </button>
  //   );
  // };

  return (
    <Main>
      <Carousel
        // renderArrow={myArrow}
        itemPadding={[0, 10]}
        breakPoints={breakPoints}
        style={{ justifyContent: "baseline", alignItems: "center" }}
      >
        {console.log(speaker)}
        {speaker.map((person) => {
          return (
            <Item>
              <Image src={person.image} />
              {person.name} <br />
              {person.title}
            </Item>
          );
        })}
      </Carousel>
    </Main>
  );
}
