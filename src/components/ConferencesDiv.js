import React, { useState } from "react";
import styled from "styled-components";
import CarouselConference from "./CarouselConference";

const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 750px;
  background-color: #0a40a8;
  box-shadow: 5px 5px 15px #888888;
`;

const Title = styled.h2`
  color: white;
  font-weight: 800;
`;

const Content = styled.div`
  display: flex;
  width: 95vw;
  margin: 30px 0;
`;

const LeftDiv = styled.div`
  width: 15vw;

  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  background-color: mediumturquoise;
  border-radius: 10px;
`;

const MiddleDiv = styled.div`
  width: 70vw;

  border-radius: 10px;
  background-color: lightcyan;
`;
const Image = styled.img`
  width: 30vw;
  border-radius: 10px;
`;
const TitleLeftDiv = styled.h3`
  color: white;
  border-bottom: 1px solid white;
  font-weight: 200;
  letter-spacing: 2px;
`;

const TitleInfo = styled.h4`
  color: darkslateblue;
  padding: 8px 50px;
`;

const PInfo = styled.p`
  color: darkslateblue;
  padding: 8px 50px;
  width: 70%;
`;

const Button = styled.button`
  background-color: mediumturquoise;
  color: white;
  padding: 10px 15%;
  border-radius: 5px;
  outline: 0;
  cursor: pointer;
  border: #0a40a8;
  font-size: 20px;
`;
export const ButtonOutline = styled.button`
  border: 2px solid lightsalmon;
  border-radius: 5px;
  border-color: lightsalmon;
  background-color: snow;
  color: lightsalmon;
  padding: 8px 10px;
  cursor: pointer;
  width: 220px;
  font-size: 1.2rem;
  &:hover {
    background-color: lightsalmon;
    color: white;
  }
`;

export default function ConferencesDiv() {
  const Dates = [
    {
      title: "2021 Conference",
      message: "",
      image: "./images/Homepage/2021.png",
      speaker: [
        {
          name: "",
          title: "",
          image: "",
        },
      ],
    },
    {
      title: "2018 Conference",
      message:
        "In August 2018, we held our fourth Year 10 Limitless Conference with 230 students attending from 18 different schools around Canterbury",
      image: "./images/Homepage/2018.png",
      speaker: [
        {
          name: "Merenia Hudson",
          title: "National Kaitiaki of Manawa Ahi",
          image: "./images/Homepage/merenia.png",
        },
        {
          name: "Seung-woo Hong(Suggie)",
          title: "Film Maker and Visual Storyteller",
          image: "./images/Homepage/suggie.png",
        },
      ],
    },
    {
      title: "2017 Conference",
      message: `We ran two Limitless conferences in August - for students all throughout Canterbury and the West Coast.
      We had 360 students attend and we are excited to work with 27 schools throughout the region, who brought 
      students to the programme`,
      image: "./images/Homepage/2017.png",
      speaker: [
        {
          name: "Stephen Henry",
          title: "CEO, Kode Biotech Group",
          image: "./images/Homepage/stephen.png",
        },
        {
          name: "Hannah Duder",
          title: "CEO, Indigo & Iris",
          image: "./images/Homepage/hannah.png",
        },
        {
          name: "Jaye Pukepuke",
          title: "Founding Director, Bros For Change",
          image: "./images/Homepage/jaye.png",
        },
        {
          name: "Sophie Kennedy",
          title: "Sustainability Engineer, Fulton Hogan",
          image: "./images/Homepage/sophie.png",
        },
        {
          name: "Grant Ryan",
          title: "Founding Coordinator, The Cacophony Project",
          image: "./images/Homepage/grant.png",
        },
        {
          name: "Rochelle Faimalo",
          title:
            "Social Recovery Coordinator, Hurunui District Council",
          image: "./images/Homepage/rochelle.png",
        },
        {
          name: "Zion Tauamati",
          title: "Suicide Prevention, He Waka Tapu",
          image: "./images/Homepage/zion.png",
        },
        {
          name: "Andrea Ryan",
          title: "Strategy Development Manager, Girl Guiding NZ",
          image: "./images/Homepage/andrea.png",
        },
      ],
    },
    {
      title: "2016 Conference",
      message: `On the 13th & 14th of October 2016, 140 students from 20 schools gathered at the La Vida Centre for the inaugural
      Limitless Conference.`,
      image: "./images/Homepage/2016.png",
      speaker: [
        {
          name: "Emily Muli",
          title: "Singer / Songwriter at Emily",
          image: "./images/Homepage/emily.png",
        },
        {
          name: "Chris Jupp",
          title: "Youth Partner Manager at World Vision",
          image: "./images/Homepage/chris1.png",
        },
        {
          name: "Katie Cowan",
          title: "Founder / Director and Lawyer at Cowan Litigation",
          image: "./images/Homepage/katie.png",
        },
        {
          name: "Dace Caldwell",
          title: "Director of Corporate Finance at PWC",
          image: "./images/Homepage/dace.png",
        },
        {
          name: "Chris Mene",
          title: "Director of Mene Solutions",
          image: "./images/Homepage/chris2.png",
        },
        {
          name: "Guy Ryan",
          title:
            "CEO / Founder Insipiring Stories Trust & Young New Zealander Of The Year 2015",
          image: "./images/Homepage/guy.png",
        },
        {
          name: "Dr Victoria Metcalf",
          title:
            "National Coordinator, Participatory Science Platform",
          image: "./images/Homepage/victoria.png",
        },
        {
          name: "Eva Ridell",
          title:
            "Programme Creator, Live The Dream & Indepedent Design Thinking Consultant",
          image: "./images/Homepage/eva.png",
        },
      ],
    },
    {
      title: "Pilot",
      message: `In February we ran a first pilot of the Limitless event at Ao Tawhiti Unlimited Discovery School. The pilot was a 2 half-day
      programme that included 3 workshops and 3 talks from speakers. The workshops were on "Finding Your Passion" "Strengths Finder" 
      and "Goal Setting". 18 students participated.`,
      image: "./images/Homepage/pilot.png",
      speaker: [
        {
          name: "",
          title: "",
          image: "",
        },
      ],
    },
  ];

  const [chosenConference, setChosenConference] = useState({});
  return (
    <Main id="conferences">
      <Title>Limitless Conferences</Title>
      <Content>
        {/* ///////////////////////// Dates */}
        <LeftDiv>
          <TitleLeftDiv>Conferences</TitleLeftDiv>
          <Button
            onClick={() => {
              setChosenConference(Dates[0]);
            }}
          >
            2021
          </Button>
          <Button
            onClick={() => {
              setChosenConference(Dates[1]);
            }}
          >
            2018
          </Button>
          <Button
            onClick={() => {
              setChosenConference(Dates[2]);
            }}
          >
            2017
          </Button>
          <Button
            onClick={() => {
              setChosenConference(Dates[3]);
            }}
          >
            2016
          </Button>
          <Button
            onClick={() => {
              setChosenConference(Dates[4]);
            }}
          >
            Pilot
          </Button>
        </LeftDiv>
        {/* ///////////////////////// Info*/}
        <MiddleDiv>
          <TitleInfo>
            {chosenConference.title
              ? chosenConference.title
              : Dates[1].title}
          </TitleInfo>
          <PInfo>
            {chosenConference.message
              ? chosenConference.message
              : Dates[1].message}
          </PInfo>
          <TitleInfo>Speakers & Facilitators</TitleInfo>
          <CarouselConference
            speaker={
              chosenConference.speaker
                ? chosenConference.speaker
                : Dates[1].speaker
            }
          />
        </MiddleDiv>
        {/* /////////////////////////// Image*/}

        <Image
          src={
            chosenConference.image
              ? chosenConference.image
              : Dates[1].image
          }
          alt="conference"
          style={{}}
        />
      </Content>
      <ButtonOutline style={{ textAlign: "center" }}>
        View Details
      </ButtonOutline>
    </Main>
  );
}
