import React from "react";
import { Navbar } from "./Navbar";
import { Container } from "react-bootstrap-v5";
const TestimonialsHero = () => {
  return (
    <div>
      <header className="d-flex flex-column minVh40">
        <Navbar />
        <section className="d-flex justify-content-center align-items-center flex-grow-1 aboutus position-relative">
          <Container className="pt-5">
            <h2 className="text-center ff_jakarta fw_600 fs_5x6l lh_120 clr_white pt-5 position-relative z_2">
              What people say
            </h2>
          </Container>
        </section>
      </header>
    </div>
  );
};

export default TestimonialsHero;
