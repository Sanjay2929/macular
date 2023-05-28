import React from "react";
import { Col, Container, Row } from "react-bootstrap-v5";
import structureImg from "../assets/img/webp/structureImg.webp";

const FeesStructure = () => {
  return (
    <div>
      <section className="py-5 position-relative">
        <Container className="py-5 position-relative z_2">
          <Row className="justify-content-md-between justify-content-center">
            <Col
              md={5}
              className="d-flex flex-column justify-content-between align-items-md-start align-items-center"
            >
              <h2 className="fw_500 ff_jakarta fs_4x8l clr_white opacity_90 pt-1 feesArrow position-relative">
                Fee Structure
              </h2>
              <div className="ps-lg-5 pb-2">
                <img className="w-100 max_w_306" src={structureImg} alt="img" />
              </div>
            </Col>
            <Col lg={6} md={7} xs={11}>
              <div className="d-flex flex-column gap-4 sturctureGreenLight position-relative pe-lg-4">
                <div className="SturctureBoxes SturctureBoxesleft position-relative">
                  <h4 className="fw_500 ff_jakarta fs_2x4l clr_white lh_140">
                    One Time Enrollment $3000/y
                  </h4>
                  <p className="fw_400 ff_roboto fs_md clr_white opacity_70 lh_150 mb-0">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint Velit officia consequat duis enim{" "}
                  </p>
                </div>
                <div className="SturctureBoxes">
                  <h4 className="fw_500 ff_jakarta fs_2x4l clr_white lh_140">
                    Medical Grade Supplements $80-125/m
                  </h4>
                  <p className="fw_400 ff_roboto fs_md clr_white opacity_70 lh_150 mb-0">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint Velit officia consequat duis enim{" "}
                  </p>
                </div>
                <div className="SturctureBoxes SturctureBoxesright position-relative">
                  <h4 className="fw_500 ff_jakarta fs_2x4l clr_white lh_140">
                    Maintenance $450/ Lab check{" "}
                  </h4>
                  <p className="fw_400 ff_roboto fs_md clr_white opacity_70 lh_150 mb-0">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint Velit officia consequat duis enim{" "}
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        <span className="feesSectionLight position-absolute"></span>
      </section>
    </div>
  );
};

export default FeesStructure;
