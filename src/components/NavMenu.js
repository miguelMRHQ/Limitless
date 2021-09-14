import React from "react";
import styled from "styled-components";
import { NavHashLink as Link } from "react-router-hash-link";

// images
import logo from "../images/Homepage/logo.png";

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #0a40a8;

  @media only screen and (max-width: 1114px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 50vh;
  }
`;

const ContentWrapper = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding-top: 10px;
  @media only screen and (max-width: 1114px) {
    flex-direction: column;
  }
`;
const LinkItem = styled.li`
  @media only screen and (max-width: 1114px) {
    margin: 10px;
  }
  & a {
    text-decoration: none;
    color: white;
    font-size: 1.2rem;
    margin: 0 50px;
  }
`;

export const ButtonOutline = styled.button`
  border: 2px solid #f7c2b3;
  border-radius: 5px;
  border-color: #f7c2b3;
  background-color: inherit;
  color: white;
  padding: 8px 10px;
  cursor: pointer;
  width: 220px;
  &:hover {
    background-color: #f7c2b3;
  }
`;

export const ButtonFilled = styled.button`
  border: 2px solid black;
  border-radius: 5px;
  border-color: #f7977d;
  background-color: #f7977d;
  color: white;
  padding: 8px 2%;
  cursor: pointer;
  width: 220px;
  /* offset-x | offset-y | blur-radius | spread-radius | color */
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  font-size: 1.2rem;
  &:hover {
    background-color: white;
    color: #f7977d;
  }
`;

export default function NavMenu() {
  return (
    <Container id="top">
      <ContentWrapper>
        <Link to="/home">
          <img src={logo} alt="Limitless" />
        </Link>
        <LinkItem>
          {/* <a href="/home/#about">About</a> */}
          <Link
            smooth
            to="/home#about"
            activeStyle={{
              textDecoration: "underline",
            }}
          >
            About
          </Link>
        </LinkItem>
        <LinkItem>
          <Link
            smooth
            to="/home#conferences"
            activeStyle={{
              textDecoration: "underline",
            }}
          >
            Conferences
          </Link>
        </LinkItem>
        <LinkItem>
          <Link
            smooth
            to="/home#courses"
            activeStyle={{
              textDecoration: "underline",
            }}
          >
            Online Courses
          </Link>
        </LinkItem>
        <LinkItem>
          <Link
            smooth
            to="/home#studies"
            activeStyle={{
              textDecoration: "underline",
            }}
          >
            Case Studies
          </Link>
        </LinkItem>
        <LinkItem>
          <Link
            smooth
            to="/home#contact"
            activeStyle={{
              textDecoration: "underline",
            }}
          >
            <ButtonOutline>Contact</ButtonOutline>
          </Link>
        </LinkItem>
        <LinkItem>
          <ButtonFilled>Sign In To The Portal</ButtonFilled>
        </LinkItem>
      </ContentWrapper>
    </Container>
  );
}
