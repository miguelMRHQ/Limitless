import React from "react";
import styled from "styled-components";

const Main = styled.div`
  background-image: url("./images/AboutPage/vector.png");
  background-size: 100% 100%;
  background-position: 50% 50%;
  background-repeat: no-repeat;
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
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  letter-spacing: 1.3px;
  line-height: 1.58;
  color: #14b;
  padding-left: 5.5%;
`;

const Title = styled.h1`
  font-weight: 800;
`;

const Introduction = styled.p`
  font-size: 1.5rem;
  font-weight: 600;
`;

const Message = styled.p`
  font-size: 1.5rem;
`;

const RightDiv = styled.div`
  flex: 45%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  @media only screen and (max-width: 900px) {
    width: 100vw;
  }
`;

export default function WhoWeAreDiv() {
  return (
    <Main>
      <LeftDiv>
        <Title>Who We Are</Title>
        <Introduction>
          Limitless is a Charitable Trust with the mission <br />
          To equip young New Zealanders to lead lives of <br />
          passion and purpose
        </Introduction>
        <Message>
          We see young people better equipped to <br />
          navigate with confidence towards careers where <br />
          their creativity, innovation, strength and values <br />
          can be unleashed. Our vision ultimately is to see <br />
          young people with greater agency over their <br />
          career pathways.
        </Message>
        <Message>
          Based in Ōtautahi Christchurch, Limitless <br />
          empower secondary students to discover their <br />
          strengths and values, and to envision future <br />
          potential careers based on their self discovery. <br />
          We create space for young people to explore <br />
          their "what's next?" for after high school.
        </Message>
        <Message>
          We will each work around 80,000 hours in our <br />
          life, and research tells us young people today <br />
          are likely to work 17 different jobs over five <br />
          careers in their lifetime. Limitless helps youth <br />
          explore the topic of career pathways in <br />
          meaningful ways. Our conversations and korerō <br />
          give them a new sense of confidence and <br />
          focus.
        </Message>
        <Message>
          Limitless was founded in 2016 by <br />
          Christchurch - based April Mclennant age 18 <br />
          through a social enterprise accelerator. We <br />
          quickly grew an epic community to see the <br />
          Limitless vision come to life and to <br />
          iterate and grow.
        </Message>
      </LeftDiv>
      <RightDiv>
        <Image
          src="./images/AboutPage/conference11.png"
          alt="student conference"
        />
      </RightDiv>
    </Main>
  );
}
