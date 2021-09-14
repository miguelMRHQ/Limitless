import React from "react";
import HeroImg from "../images/Homepage/hero.png";
import HeroImg2 from "../images/Homepage/hero2.png";
import styled from "styled-components";

const Main = styled.div`
  background: url(${HeroImg}) no-repeat center;
  background-size: cover;
  height: 800px;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  background: url(${HeroImg2}) center center;
  background-size: cover;
  color: white;
  text-shadow: 2px 2px 1px black;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MainMessage = styled.h1`
  font-size: 6.4vw;
`;

export default function Homepage() {
  return (
    <Main>
      <Content>
        <MainMessage>
          Equipping for lives of <br />
          passion & purpose
        </MainMessage>
      </Content>
    </Main>
  );
}
