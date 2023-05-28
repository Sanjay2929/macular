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

const Home = () => {
  return (
    <div className=" overflow-hidden">
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
      <AskedQuestions />
      <MacularFooter />
    </div>
  );
};

export default Home;
