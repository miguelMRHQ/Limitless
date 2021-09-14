import React from "react";
import styled from "styled-components";
import backgroundImg from "../images/Homepage/Vector3.png";
import ReactPlayer from "react-player";
import { NavHashLink as Link } from "react-router-hash-link";

const Main = styled.div`
  background: url(${backgroundImg});
  background-size: 100% 100%;
  background-position: 50% 50%;
  background-repeat: no-repeat;
`;

const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  padding: 3% 0;
`;

const InfoWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: start;
  font-size: 14px;
  width: 56vw;
  position: relative;
  @media only screen and (max-width: 1120px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const WhiteInfoDiv = styled.div`
  width: 15vw;
  color: #0a40a8;
  background-color: #fdfaf5;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  padding: 10px 10px;
  height: 250px;
  position: absolute;
  top: -20px;
  @media only screen and (max-width: 1120px) {
    width: 100%;
    position: static;
  }
`;

const BlueInfoDivLeft = styled.div`
  flex-basis: 14vw;
  color: white;
  background-color: #0a40a8;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  padding: 10px 20px;
  height: 250px;
  @media only screen and (max-width: 1120px) {
    width: 100%;
    height: 250px;
    margin: 20px 0;
  }
`;

const BlueInfoDivRight = styled.div`
  flex-basis: 14vw;
  color: white;
  background-color: #0a40a8;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  padding: 10px 20px;
  height: 250px;
  @media only screen and (max-width: 1120px) {
    width: 100%;
    height: 250px;
  }
`;

const InfoTitle = styled.h4`
  font-weight: 800;
`;

const ButtonOutline = styled.button`
  border: 2px solid #f7c2b3;
  border-radius: 5px;
  border-color: #f7c2b3;
  background-color: inherit;
  color: #f7c2b3;
  padding: 8px 10px;
  cursor: pointer;
  width: 220px;
  margin: 30px 0;
  &:hover {
    background-color: #f7c2b3;
    color: white;
  }
`;

export default function AboutDiv() {
  return (
    <Main id="about">
      <ContentWrapper>
        <InfoWrapper>
          <BlueInfoDivLeft>
            <InfoTitle>Our</InfoTitle>
            <InfoTitle>Programmes</InfoTitle>
            <p>
              Limitless Online and our Limitless Conference build
              confidence, self awareness and agency for pathways to
              work.
            </p>
          </BlueInfoDivLeft>
          <WhiteInfoDiv>
            <InfoTitle>Who We Are</InfoTitle>
            <p>
              A Charitable Trust with a mission to equip young New
              Zealanders for lives of passion and purpose. Our vision
              and specific focus is to see young people with greater
              agency over their career decisions.
            </p>
          </WhiteInfoDiv>
          <BlueInfoDivRight>
            <InfoTitle>Our Values</InfoTitle>
            <p>Our values ground our decisions.</p>
            <ul>
              <li>Passion</li>
              <li>Purpose</li>
              <li>Empowerment</li>
              <li>Optimism</li>
              <li>Responsibility</li>
            </ul>
          </BlueInfoDivRight>
        </InfoWrapper>
        <Link to="/about#top">
          <ButtonOutline>More About Us</ButtonOutline>
        </Link>
        <ReactPlayer
          url="https://vimeo.com/270208851"
          width="56vw"
          height="24vw"
        />
      </ContentWrapper>
    </Main>
  );
}
