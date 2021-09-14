import React from "react";
import styled from "styled-components";

const Main = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 5% 0;
`;
const Title = styled.h2`
  color: mediumturquoise;
  font-weight: 900;
  padding: 70px 0px 0px;
  margin-bottom: 50px;
`;

export default function SponsorsDiv() {
  return (
    <Main id="sponsors">
      <Title>Our Sponsors and Supporters</Title>
      <img src="./images/Homepage/sponsors.png" alt="" />
    </Main>
  );
}
