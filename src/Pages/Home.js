import React from "react";
import { Navbar } from "../components/Navbar";
import HeroHome from "../components/HeroHome";
import Symptoms from "../components/Symptoms";
import Methodology from "../components/Methodology";
import HomingMethod from "../components/HomingMethod";
import BioChemistry from "../components/BioChemistry";
import PatientsRecovered from "../components/PatientsRecovered";
import Success from "../components/Success";
import Program from "../components/Program";
import FeesStructure from "../components/FeesStructure";
import Experts from "../components/Experts";
import PatientsSays from "../components/PatientsSays";
import AskedQuestions from "../components/AskedQuestions";
import MacularFooter from "../components/MacularFooter";
import Preloader from "../components/Preloader";

const Home = () => {
   document.body.classList.add("overflow_hidden");
   setTimeout(() => {
     document.getElementById("none").style.display = "none";
     document.body.classList.remove("overflow_hidden");
   }, 3000);

  return (
    <div className=" overflow-hidden">
      <Preloader />
      <HeroHome />
      <Symptoms />
      <Methodology />
      <HomingMethod />
      <BioChemistry />
      <PatientsRecovered />
      <Success />
      <Program />
      <FeesStructure />
      <Experts />
      <PatientsSays />
      <AskedQuestions bgColorChange="frequentlyLine" />
      <MacularFooter />
    </div>
  );
};

export default Home;
