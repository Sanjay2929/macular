import React from "react";
import MacularFooter from "../components/MacularFooter";
import AskedQuestions from "../components/AskedQuestions";
import PatientsSays from "../components/PatientsSays";
import Success from "../components/Success";
import PatientsRecovered from "../components/PatientsRecovered";
import AboutHome from "../components/AboutHome";
import Team from "../components/Team";
import Journey from "../components/Journey";
import { Navbar } from "../components/Navbar";

const About = () => {
  return (
    <div className="overflow-hidden">
      <AboutHome heroHeading="About Us" />
      <Journey />
      <Team />
      <PatientsRecovered />
      <Success />
      <PatientsSays />
      <AskedQuestions bgColorChange="bg_green" />
      <MacularFooter />
    </div>
  );
};

export default About;
