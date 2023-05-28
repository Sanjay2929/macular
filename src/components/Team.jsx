import React from "react";
import { Col, Container, Row } from "react-bootstrap-v5";
import GeorgeTeam from "../assets/img/webp/AboutTeamGeorge.webp";
import BrianTeam from "../assets/img/webp/AboutTeamBrian.webp";
const Team = () => {
  return (
    <div>
      <section className="py-5">
        <Container className="py-5 teamLeftShadow position-relative">
          <h2 className="fw_500 ff_jakarta fs_4x8l clr_FA lh_120 text-center pb-5 mb-4 teamsRightShadow position-relative">
            Our Team
          </h2>
          <Row className="justify-content-lg-between justify-content-center align-items-center pt-1 pb-5 position-relative z_2">
            <Col xl={5} lg={6} sm={9} xs={11}>
              <div className="px-4 georgeImgBgBox position-relative">
                <img
                  className="w-100 z_2 position-relative"
                  src={GeorgeTeam}
                  alt="img"
                />
              </div>
            </Col>
            <Col lg={6} xs={12} className="pt-lg-0 pt-4">
              <h4 className="fw_500 ff_jakarta fs_3x2l lh_120 clr_white pb-3 mb-0">
                George W. Rozakis, MD
              </h4>
              <p className="fw_400 ff_roboto fs_md clr_FA opacity_80 lh_150 pb-3 mb-0">
                Dr. Rozakis is a board certified biomedical engineer who studied
                medicine at Cornell Medical Center and studied Ophthalmology at
                the Duke Eye Center. Dr. Rozakis worked in the field of Advanced
                Wellness / Functional Medicine & The Optimization of
                Biochemistry for over 15 years. He has applied this science
                age-related chronic conditions. Dr. Rozakis won the advancements
                in healthcare award in Cleveland, Ohio (beating out the
                Cleveland Clinic) in 2015 for his work in Advanced Wellness and
                advocates for this approach to health care to his patients and
                colleagues.
              </p>
              <p className="fw_400 ff_roboto fs_md clr_FA opacity_80 lh_150 mb-0">
                Dr. Rozakis pioneered the field of Lasik refractive surgery,
                phakic refractive lenses, and the use of hormones and other
                advanced testing to treat macular degeneration, migraine,
                parkinson's, arthritis, insomnia, menopause, low testosterone,
                auto immune disease and other age-related chronic conditions.{" "}
              </p>
            </Col>
          </Row>
          <Row className="justify-content-lg-between justify-content-center align-items-center pt-5 mt-4 flex-wrap-reverse brianRightShadow position-relative">
            <Col lg={6} xs={12} className="pt-lg-0 pt-4 position-relative z_2">
              <h4 className="fw_500 ff_jakarta fs_3x2l lh_120 clr_white pb-3 mb-0">
                Brian Bakke, Ph.D.
              </h4>
              <p className="fw_400 ff_roboto fs_md clr_FA opacity_80 lh_150 pb-3 mb-0">
                Dr. Bakke also holds a master’s degree in human nutrition from
                Columbia University. His master’s thesis work focused on
                studying the clinical nutrition practice patterns used by eye
                professionals in the prevention and treatment of Age-Related
                Macular Degeneration (AMD).
              </p>
              <p className="fw_400 ff_roboto fs_md clr_FA opacity_80 lh_150 mb-0">
                Prior to partnering with the Advanced Wellness Program through
                Investihealth, Dr. Bakke spent 6 years working as chief science
                officer with a medical consulting company. His work as chief
                science officer focused on collaborating with primary care
                physicians in developing personalized nutrition and bioidentical
                hormone based care plans for improving clinical outcomes for
                patients with complex medical conditions. Previously, Dr. Bakke
                spent 7 years working with the multi- national chemistry,
                biotechnology and life science companies BASF and Syngenta as a
                senior chemist.
              </p>
            </Col>
            <Col xl={5} lg={6} sm={9} xs={11}>
              <div className="px-4 BrianImgBgBox position-relative z_2">
                <img
                  className="w-100 z_2 position-relative"
                  src={BrianTeam}
                  alt="img"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Team;
