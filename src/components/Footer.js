import React from "react";
import styled from "styled-components";

const Main = styled.div`
  width: 100%;
  background-color: #0a40a8;
  font-size: 1.3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
`;

const LeftDiv = styled.div`
  width: 50%;
  color: mediumturquoise;
  text-align: center;
  word-spacing: 5px;
  letter-spacing: 2px;
`;

const RightDiv = styled.div`
  width: 50%;
  color: white;
  word-spacing: 5px;
  letter-spacing: 2px;
  text-align: center;
`;

const Image = styled.img`
  width: 8%;
`;

export default function Footer() {
  return (
    <Main>
      <LeftDiv>
        Follow us on social media:
        <a
          href="https://www.facebook.com/limitlessnz/"
          target="_blank"
        >
          <Image
            src="./images/Homepage/facebook.png"
            alt="social media icon"
          />
        </a>
        <a
          href="https://www.instagram.com/limitless_nz/"
          target="_blank"
        >
          <Image
            src="./images/Homepage/insta.png"
            alt="social media icon"
          />
        </a>
      </LeftDiv>
      <RightDiv>
        All Rights Reserved | &copy; Limitless Charitable Trust 2021
      </RightDiv>
    </Main>
  );
}
