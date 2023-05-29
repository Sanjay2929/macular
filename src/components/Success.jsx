import React from "react";
import { Col, Container, Row } from "react-bootstrap-v5";
import businessNews from "../assets/img/webp/clevelandBusiness.webp";

const Success = () => {
  return (
    <div>
      <section className="position-relative py-5 pb-4 successSection align-items-end d-flex flex-column justify-content-end overflow-hidden">
        <img
          className="position_absolute position-relative top-0 w-75 z_2 end-0 w61percent z_0 transformY50"
          src={businessNews}
          alt="img"
        />
        <Container className="py-4 mt-lg-5 mb-4">
          <Row className="py-lg-5 pb-sm-5">
            <Col lg={6} xs={12}>
              <div className="successBox position-relative z_2">
                <h3 className="fw_500 ff_jakarta fs_4x8l clr_FA">
                  Success: Strive, Thrive, and Shine
                </h3>
                <p className="fw_400 ff_roboto fs_md clr_FA opacity_70">
                  When it comes to achieving success, there are certain
                  qualities that can help you reach your goals. Had it not been
                  for our success in many patients we may never have pursued
                  macular degeneration
                </p>
                <button className="learnMoreBtn">Learn More</button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Success;
