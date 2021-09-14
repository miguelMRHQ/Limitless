import React from "react";
import styled from "styled-components";

const Main = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  padding: 2.2% 0;
  @media only screen and (max-width: 900px) {
    flex-direction: column;
  }
`;

const LeftDiv = styled.div`
  flex: 45%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: 4%;
`;

const Image = styled.img`
  height: 680px;
  @media only screen and (max-width: 900px) {
    width: 100vw;
    height: 60vh;
  }
`;

const RightDiv = styled.div`
  flex: 45%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  letter-spacing: 1.3px;
  line-height: 1.58;
`;

const Title = styled.h1`
  font-weight: 800;
  color: mediumturquoise;
`;

const Introduction = styled.p`
  color: #14b;
  font-size: 1.5rem;
  font-weight: 600;
`;

const Message = styled.p`
  color: #14b;
  font-size: 1.5rem;
`;

export default function OurProgrammesDiv() {
  return (
    <Main>
      <LeftDiv>
        <Image src="./images/AboutPage/program.png"></Image>
      </LeftDiv>
      <RightDiv>
        <Title>Our Programmes</Title>
        <Introduction>
          The Year 10 Limitless Conference is back, <br />
          coming to Christchurch on the 22nd and <br />
          23rd November 2021!
        </Introduction>
        <Message>
          The Conference programme will focus on <br />
          exploring Strengths, connecting the dots <br />
          and inspiration. We recommend the <br />
          Limitless Online course to be taken prior to <br />
          Limitless Conference so we can build from <br />
          this.
        </Message>
        <Message>
          Year 10 Limitless Online courses run <br />
          throughout the year. This is a fun and <br />
          engaging module based course that plays <br />
          a key part in building confidence, self <br />
          awareness and greater agency for <br />
          pathways to work.
        </Message>
        <Message>
          For either programme, get in contact with <br />
          us via the form below to learn more.
        </Message>
      </RightDiv>
    </Main>
  );
}
