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
import Preloader from "../components/Preloader";

const About = () => {
  setTimeout(() => {
    document.body.classList.add("overflow_hidden");
    document.getElementById("none").style.display = "none";
    document.body.classList.remove("overflow_hidden");
  }, 3000);

  return (
    <div className="overflow-hidden">
      <Preloader />
      <Navbar navAbout="navA" />
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
