import React from "react";
import { Col, Container, Row } from "react-bootstrap-v5";
import roundCheck from "../assets/img/svg/checkCircleList.svg";
import methodsImg from "../assets/img/webp/HomingMethod.webp";

const HomingMethod = () => {
  return (
    <>
      <section className="py-5">
        <Container className="py-5">
          <Row className="align-items-center flex-wrap-reverse justify-content-center pt-3 pb-4">
            <Col xs={12} lg={6}>
              <h2 className="fw_500 ff_jakarta fs_3x2l clr_white pb-3 mb-1 pt-lg-0 pt-4">
                The HOMING Method
              </h2>
              <p className="fw_400 ff_roboto fs_md clr_white opacity_70 lh_150 mb-0">
                We will start by taking a detailed medical history, including
                any symptoms you may be experiencing. They will ask about your
                family history of eye diseases and other medical conditions.
              </p>
              <div className="pe_64 pe-4">
                <div className="d-flex align-items-start borderBottomMethods">
                  <img src={roundCheck} alt="img" />
                  <div className="ps-2">
                    <h5 className="fw_500 fs_md ff_jakarta clr_white lh_150 mb-0 pb_10">
                      Medical History - Patient Portal
                    </h5>
                    <p className="fw_400 ff_roboto fs_md clr_FA lh_150 mb-0 opacity_70">
                      Quisque arcu erat aenean iaculis nisl molestie et tellus.
                      In
                    </p>
                  </div>
                </div>

                <div className="d-flex align-items-start borderBottomMethods">
                  <img src={roundCheck} alt="img" />
                  <div className="ps-2">
                    <h5 className="fw_500 fs_md ff_jakarta clr_white lh_150 mb-0 pb_10">
                      Lab Test (Insurance Covered)
                    </h5>
                    <p className="fw_400 ff_roboto fs_md clr_FA lh_150 mb-0 opacity_70">
                      Quisque arcu erat aenean iaculis nisl molestie et tellus.
                      In purus aliquam mauris
                    </p>
                  </div>
                </div>

                <div className="d-flex align-items-start borderBottomMethods">
                  <img src={roundCheck} alt="img" />
                  <div className="ps-2">
                    <h5 className="fw_500 fs_md ff_jakarta clr_white lh_150 mb-0 pb_10">
                      Customized Macular Program Report
                    </h5>
                    <p className="fw_400 ff_roboto fs_md clr_FA lh_150 mb-0 opacity_70">
                      Quisque arcu erat aenean iaculis nisl molestie et tellus.
                      In purus aliquam mauris
                    </p>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={6} sm={8} xs={10}>
              <div className="px_20 pe-3 homingBgBox position-relative ">
                <img className="w-100 position-relative z_2" src={methodsImg} alt="img" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default HomingMethod;
