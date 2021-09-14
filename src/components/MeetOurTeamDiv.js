import React from "react";
import styled from "styled-components";
import { ButtonOutline } from "./ConferencesDiv";
import { NavHashLink as Link } from "react-router-hash-link";

const Main = styled.div`
  height: 700px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const Content = styled.div`
  height: 620px;
  width: 95%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  border-radius: 10px;
  background-color: snow;
  margin-top: -100px;
  box-shadow: 0px 10px 10px #d9e1e2;
`;

const InfoWrapper = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 3% 6%;
`;

const Title = styled.h2`
  color: #14b;
  font-size: 2.5rem;
  font-weight: 800;
`;

export default function MeetOurTeamDiv() {
  return (
    <Main>
      <Content>
        <InfoWrapper>
          <Title>Meet Our Team</Title>
        </InfoWrapper>
      </Content>
      <Link to="/about#top">
        <ButtonOutline>Back to top</ButtonOutline>
      </Link>
    </Main>
  );
}
