import React from "react";
import { Col, Container, Row } from "react-bootstrap-v5";
import oldman from "../assets/img/webp/methodologyMan.webp";
import GreenButton from "./GreenButton";

const Methodology = () => {
  return (
    <>
      <section className="py-md-5">
        <Container className="py-5">
          <Row className="justify-content-between align-items-center">
            <Col lg={5} md={6}>
              <div className="pe-lg-4  GreenBox1 position-relative ">
                <img
                  className="w-100 pe-2 border_left50  position-relative z_3"
                  src={oldman}
                  alt="img"
                />
              </div>
            </Col>
            <Col md={6} className=" methodologyLine position-relative">
              <h3 className="fw_500 ff_jakarta fs_4x8l clr_white pb-3 mb-0 pt-md-0 pt-4">
                Our Methodology
              </h3>
              <p className="fw_400 fs_md ff_roboto clr_FA opacity_70 lh_150 pt-1 mb-0">
                Quisque arcu erat aenean iaculis nisl molestie et tellus. In
                purus aliquam mauris quis molestie ornare mauris egestas nibh.
                Arcu sed neque est lacus vivamus mattis libero.
              </p>
              <p className="fw_400 fs_md ff_roboto clr_FA opacity_70 lh_150 pt-2 pb=lg-4 pb-md-2 pb-4  mb-0">
                Quisque arcu erat aenean iaculis nisl molestie et tellus. In
                purus aliquam mauris quis molestie ornare mauris egestas nibh.
                Arcu sed neque est lacus vivamus mattis libero.
              </p>
              <div className="pt-1">
                <GreenButton greenButton="Learn more" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Methodology;
