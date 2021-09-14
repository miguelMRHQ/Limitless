import React from "react";
import styled from "styled-components";

const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  /* background image css */
  background: url("./images/Homepage/vector3.png");
  background-size: 100% 100%;
  background-position: 80% 50%;
  background-repeat: no-repeat;
  padding: 2% 2% 1%;
`;

const Title = styled.h2`
  color: royalblue;
  font-weight: 900;
  padding: 70px 0px 0px;
`;
const Message = styled.p`
  color: royalblue;
  font-size: 1.5rem;
  margin: 50px 0;
`;

export default function DonorBoxDiv() {
  return (
    <Main id="donor">
      <Title>Donate To Us</Title>
      <Message>
        Your support will help power our mission and grow our impact.
      </Message>

      <script
        src="https://donorbox.org/widget.js"
        paypalExpress="false"
      ></script>
      <iframe
        src="https://donorbox.org/embed/limitless-1"
        name="donorbox"
        allowpaymentrequest="allowpaymentrequest"
        seamless="seamless"
        frameborder="0"
        scrolling="no"
        height="500px"
        width="100%"
        style={{
          maxWidth: "500px",
          minWidth: "250px",
          maxHeight: "none!important",
          marginLeft: "70px",
        }}
      ></iframe>
    </Main>
  );
}
