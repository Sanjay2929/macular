import React from "react";
import MacularFooter from "../components/MacularFooter";
import AskedQuestions from "../components/AskedQuestions";
import WetDryTestimonials from "../components/WetDryTestimonials";
import YoutubeVideo from "../components/YoutubeVideo";
import { Navbar } from "../components/Navbar";
import AboutHome from "../components/AboutHome";

const Testimonials = () => {
  return (
    <div className="overflow-hidden">
      <AboutHome heroHeading="What people say  " />
      <YoutubeVideo />
      <WetDryTestimonials />
      <AskedQuestions />
      <MacularFooter />
    </div>
  );
};

export default Testimonials;
