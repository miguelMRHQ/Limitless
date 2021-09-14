import React from "react";
import styled from "styled-components";
import BackImage from "../images/Homepage/J-Kelly-Brito.png";

const Main = styled.div`
  background: url(${BackImage}) no-repeat center;
  background-size: 100% 100%;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  height: 500px;
  margin-top: 4%;
  display: flex;
  justify-content: center;
  align-items: start;
`;

const Content = styled.div`
  height: 40vh;
  width: 25vw;
  border-radius: 10px;
  background-color: snow;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  top: -40px;
`;

const Title = styled.h4`
  font-weight: 800;
  color: #0a40a8;
  padding-top: 2%;
  margin-bottom: 50px;
  font-size: 1.8rem;
`;

const Message = styled.p`
  color: #0a40a8;
  padding: 0 12%;
  align-self: center;
  margin: 0;
`;

const ButtonFilled = styled.button`
  border: 2px solid black;
  border-radius: 5px;
  border-color: #f7977d;
  background-color: #f7977d;
  color: white;
  padding: 8px 2%;
  cursor: pointer;
  width: 200px;
  margin-top: 50px;
  font-size: 1.2rem;
  font-weight: 900px;
  /* offset-x | offset-y | blur-radius | spread-radius | color */
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  &:hover {
    background-color: white;
    color: #f7977d;
  }
`;

export default function CourseDiv() {
  return (
    <Main>
      <Content>
        <Title id="courses">Our Online Course</Title>
        <Message>Limitless Online is our e-learning course</Message>
        <Message>for Year 10 students that builds</Message>
        <Message>confidence, self-awareness and greater</Message>
        <Message>agency for pathways to work.</Message>
        <ButtonFilled>Learn More</ButtonFilled>
      </Content>
    </Main>
  );
}
