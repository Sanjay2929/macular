import React from "react";
import MacularFooter from "../components/MacularFooter";
import AskedQuestions from "../components/AskedQuestions";
import WetDryTestimonials from "../components/WetDryTestimonials";
import YoutubeVideo from "../components/YoutubeVideo";
import { Navbar } from "../components/Navbar";
import AboutHome from "../components/AboutHome";
import Preloader from "../components/Preloader";

const Testimonials = () => {
  setTimeout(() => {
    document.body.classList.add("overflow_hidden");
    document.getElementById("none").style.display = "none";
    document.body.classList.remove("overflow_hidden");
  }, 3000);

  return (
    <div className="overflow-hidden">
      <Preloader />
      <Navbar navATestimo="navA" />
      <AboutHome heroHeading="What people say  " />
      <YoutubeVideo />
      <WetDryTestimonials />
      <AskedQuestions />
      <MacularFooter />
    </div>
  );
};

export default Testimonials;
