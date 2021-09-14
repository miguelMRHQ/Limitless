import React from "react";
import styled from "styled-components";
import { ButtonFilled } from "./NavMenu";
import { ButtonOutline } from "./ConferencesDiv";
import { HashLink as Link } from "react-router-hash-link";

const Main = styled.div`
  background: url("./images/Homepage/contact.png") no-repeat;
  background-size: cover;
  /* height: 100%; */
  width: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-bottom: 2%;
`;

const Content = styled.div`
  display: flex;
  width: 90%;
  align-content: space-between;
`;

const Title = styled.h2`
  color: white;
  font-weight: 800;
  padding: 4% 0 0;
`;

const Form = styled.form`
  flex-basis: 45%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 90px 150px 90px 0;
`;

const EmptyDiv = styled.div`
  flex-basis: 45%;
`;

const Input = styled.input`
  width: 80%;
  font-size: 1.5rem;
  padding: 5px;
  margin: 20px;
  &::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: royalblue;
  }
`;

const Dropdown = styled.select`
  width: 80%;
  font-size: 1.5rem;
  padding: 5px;
  margin: 20px;
  color: royalblue;
  & option {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: royalblue;
  }
`;

const Comments = styled.textarea`
  width: 80%;
  height: 250px;
  font-size: 1.5rem;
  padding: 5px;
  margin: 20px;
  &::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: royalblue;
  }
`;

export default function ContactUsDiv() {
  return (
    <Main id="contact">
      <Title>Contact Us</Title>
      <Content>
        <Form action="mailto:miguel.sor@icloud.com">
          <Input type="text" placeholder="Name" />
          <Input type="text" placeholder="Email" />
          <Dropdown>
            <option value="" disabled selected hidden>
              How did you hear about us?
            </option>
            <option value="Facebook">Facebook</option>
            <option value="Friend">Friend</option>
            <option value="Website">Website</option>
          </Dropdown>
          <Comments placeholder="How can we help" />
          <ButtonFilled
            style={{
              width: "80%",
              height: "50px",
              fontSize: "1.5rem",
            }}
          >
            Ask Away
          </ButtonFilled>
        </Form>
        <EmptyDiv />
      </Content>
      <Link to="/home#top">
        <ButtonOutline>Home</ButtonOutline>
      </Link>
    </Main>
  );
}
