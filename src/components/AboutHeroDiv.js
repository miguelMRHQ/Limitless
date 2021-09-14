import React from "react";
import styled from "styled-components";

const Main = styled.div`
  background: url("./images/AboutPage/about.png") no-repeat;
  background-position: 50% 0;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 540px;
`;

const Content = styled.div`
  background: url("./images/AboutPage/mainbg.png") center center;
  background-size: cover;
  color: white;
  text-shadow: 2px 2px 1px black;
  height: 200px;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MainMessage = styled.h1`
  font-size: 6.4vw;
`;
export default function AboutHeroDiv() {
  return (
    <Main id="hero">
      <Content>
        <MainMessage>About Us</MainMessage>
      </Content>
    </Main>
  );
}
