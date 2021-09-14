import React from "react";
import styled from "styled-components";
import CarouselOurImpact from "./CarouselOurImpact";
import { ButtonOutline } from "./ConferencesDiv";

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  /* background image css */
  background: url("./images/Homepage/vector2.png");
  background-size: 100% 100%;
  background-position: 80% 50%;
  background-repeat: no-repeat;
  padding: 0 2%;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
`;
const InfoWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 350px;
`;
const Title = styled.h2`
  color: royalblue;
  font-weight: 900;
  padding: 8% 0;
`;
const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 150px;
`;
const Message = styled.p`
  color: royalblue;
  text-align: center;
  font-weight: 600;
  font-size: 1.2rem;
`;

const Image = styled.img`
  height: 150px;
  width: 150px;
`;
const Numbers = styled.div`
  background-image: url("./images/Homepage/numbers.png");
  background-repeat: no-repeat;
  background-position: center;
  color: royalblue;
  font-size: 1.6rem;
  font-weight: 900;
  width: 150%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
`;

export default function OurImpactDiv() {
  return (
    <Main id="studies">
      <Content>
        <Title>Our Impact</Title>
        <InfoWrapper>
          <Info>
            <Image src="./images/Homepage/hat.png" />
            <Numbers>730</Numbers>
            <Message>
              Students have <br />
              attended a Limitless <br />
              Conference
            </Message>
          </Info>
          <Info>
            <Image src="./images/Homepage/book.png" />
            <Numbers>32</Numbers>
            <Message>
              Schools have <br />
              participated in the <br />
              Conferences
            </Message>
          </Info>
          <Info>
            <Image src="./images/Homepage/check.png" />
            <Numbers>243</Numbers>
            <Message>
              Students have <br />
              taken our online <br />
              course
            </Message>
          </Info>
        </InfoWrapper>
        <CarouselOurImpact />
        <ButtonOutline>View Case Studies</ButtonOutline>
      </Content>
    </Main>
  );
}
