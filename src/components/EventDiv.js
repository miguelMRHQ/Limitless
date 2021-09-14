import React from "react";
import styled from "styled-components";
// Components
import { ButtonFilled } from "./NavMenu";

const Main = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  font-size: 1.3rem;
  padding: 10px 0;
`;

const ContentWrapper = styled.div`
  width: 70vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const AlertMessage = styled.span`
  color: #f7c2b3;
  text-decoration: underline;
`;

const Event = styled.span`
  color: #0a40a8;
  margin: 0 10px;
`;

export default function EventDiv() {
  return (
    <Main>
      <ContentWrapper>
        <AlertMessage>UPCOMING EVENT: </AlertMessage>
        <Event>22-23rd November 2021 Christchurh Conference</Event>
        <ButtonFilled style={{ boxShadow: "5px 10px #888888;" }}>
          Learn More
        </ButtonFilled>
      </ContentWrapper>
    </Main>
  );
}
