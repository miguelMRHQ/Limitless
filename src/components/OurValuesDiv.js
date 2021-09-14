import React from "react";
import styled from "styled-components";

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  /* background image css */
  background: url("./images/AboutPage/vector2.png");
  background-size: 100%;
  background-repeat: no-repeat;
  height: 1200px;
  padding: 9.5% 2% 15%;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 95%;
`;

const Title = styled.h2`
  color: lightsalmon;
  font-weight: 700;
  font-size: 2.5rem;
  padding: 0 0 6%;
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`;

const HeadingWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`;

const MessageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`;

const Image = styled.img`
  height: 150px;
  width: 150px;
`;
const Message = styled.p`
  color: royalblue;
  text-align: center;
`;

const Heading = styled.div`
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

export default function OurValuesDiv() {
  return (
    <Main>
      <Content>
        <Title>Our Values</Title>
        <ImageWrapper>
          <Image src="./images/AboutPage/passion.png" alt="passion" />
          <Image src="./images/AboutPage/purpose.png" alt="purpose" />
          <Image
            src="./images/AboutPage/empowerment.png"
            alt="empowerment"
          />
          <Image
            src="./images/AboutPage/optimism.png"
            alt="optimism"
          />
          <Image
            src="./images/AboutPage/responsibility.png"
            alt="responsibility"
          />
        </ImageWrapper>
        <HeadingWrapper>
          <Heading>Passion</Heading>
          <Heading>Purpose</Heading>
          <Heading>Empowerment</Heading>
          <Heading>Optimism</Heading>
          <Heading>Responsibility</Heading>
        </HeadingWrapper>
        <MessageWrapper>
          <Message>
            We are passionate <br />
            about what we do. <br />
            We exemplify <br />
            passion &<br />
            encourage others <br />
            to find theirs. <br />
          </Message>
          <Message>
            We do <br />
            everything with <br />
            a purpose, and <br />
            our purpose is <br />
            to empower. <br />
          </Message>
          <Message>
            We believe in <br />
            empowering people. <br />
            We believe that when <br />
            every young person <br />
            is empowered to <br />
            reach their full <br />
            potential, we will see <br />
            generational change. <br />
          </Message>
          <Message>
            We believe the <br />
            future is bright,
            <br />
            and young <br />
            people are our <br />
            future. We face <br />
            every challenge <br />
            with optimism. <br />
          </Message>
          <Message>
            We are aware <br />
            that every action <br />
            we take affects <br />
            others. We are <br />
            responsible to <br />
            uplift and respect <br />
            others with every <br />
            word and action.
            <br />
          </Message>
        </MessageWrapper>
      </Content>
    </Main>
  );
}
