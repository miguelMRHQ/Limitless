import React from "react";
//Components
import HeroDiv from "./HeroDiv";
import EventDiv from "./EventDiv";
import AboutDiv from "./AboutDiv";
import CourseDiv from "./CourseDiv";
import ConferencesDiv from "./ConferencesDiv";
import OurImpactDiv from "./OurImpactDiv";
import SponsorsDiv from "./SponsorsDiv";
import DonorBoxDiv from "./DonorBoxDiv";
import ContactUsDiv from "./ContactUsDiv";

export default function Homepage() {
  return (
    <>
      <HeroDiv />
      <EventDiv />
      <AboutDiv />
      <CourseDiv />
      <ConferencesDiv />
      <OurImpactDiv />
      <SponsorsDiv />
      <DonorBoxDiv />
      <ContactUsDiv />
    </>
  );
}
