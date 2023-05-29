import React from "react";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap-v5";
import Accordion from "react-bootstrap/Accordion";
const AskedQuestions = (props) => {
  const [tabs, settabs] = useState("tab1");
  const tabbutton = (changedata) => {
    settabs(changedata.target.id);
  };
  return (
    <div className={props.bgColorChange}>
      <section className="pb-sm-5 line">
        <Container className="py-5 position-relative z_2">
          <h2 className="text-center ff_jakarta fw_500 fs_4x8l clr_white opacity_90 lh_120 p-sm-5 pb-4 ">
            Frequently Asked Questions
          </h2>
          <Row className="pt-3 pb-5">
            <Col md={4} xs={10}>
              <div className="border_bottomTabs mb-4 mb-md-0">
                <button
                  id="tab1"
                  onClick={tabbutton}
                  className={
                    tabs === "tab1"
                      ? "d-flex justify-content-between w-100 tabsButtonSelected align-items-center ff_roboto fw_600 fs_xl clr_FA lh_150  border-0"
                      : "d-flex justify-content-between w-100 align-items-center ff_roboto fw_600 fs_xl clr_FA lh_150 tabsButton border-0"
                  }
                >
                  Customer Questions
                  <svg
                    width="12"
                    height="20"
                    viewBox="0 0 12 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.15039 19.1C0.900391 18.85 0.775391 18.554 0.775391 18.212C0.775391 17.87 0.900391 17.5743 1.15039 17.325L8.47539 10L1.12539 2.65C0.892057 2.41667 0.775391 2.125 0.775391 1.775C0.775391 1.425 0.900391 1.125 1.15039 0.875C1.40039 0.625 1.69639 0.5 2.03839 0.5C2.38039 0.5 2.67606 0.625 2.92539 0.875L11.3254 9.3C11.4254 9.4 11.4964 9.50833 11.5384 9.625C11.5804 9.74167 11.6011 9.86667 11.6004 10C11.6004 10.1333 11.5794 10.2583 11.5374 10.375C11.4954 10.4917 11.4247 10.6 11.3254 10.7L2.90039 19.125C2.66706 19.3583 2.37939 19.475 2.03739 19.475C1.69539 19.475 1.39972 19.35 1.15039 19.1Z"
                      fill="#FAFAFA"
                    />
                  </svg>
                </button>
                <button
                  id="tab2"
                  onClick={tabbutton}
                  className={
                    tabs === "tab2"
                      ? "d-flex justify-content-between w-100 tabsButtonSelected ff_roboto fw_600 fs_xl clr_FA lh_150 align-items-center border-0"
                      : "d-flex justify-content-between w-100 align-items-center tabsButton ff_roboto fw_600 fs_xl clr_FA lh_150 border-0"
                  }
                >
                  Tech Support Questions
                  <svg
                    width="12"
                    height="20"
                    viewBox="0 0 12 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.15039 19.1C0.900391 18.85 0.775391 18.554 0.775391 18.212C0.775391 17.87 0.900391 17.5743 1.15039 17.325L8.47539 10L1.12539 2.65C0.892057 2.41667 0.775391 2.125 0.775391 1.775C0.775391 1.425 0.900391 1.125 1.15039 0.875C1.40039 0.625 1.69639 0.5 2.03839 0.5C2.38039 0.5 2.67606 0.625 2.92539 0.875L11.3254 9.3C11.4254 9.4 11.4964 9.50833 11.5384 9.625C11.5804 9.74167 11.6011 9.86667 11.6004 10C11.6004 10.1333 11.5794 10.2583 11.5374 10.375C11.4954 10.4917 11.4247 10.6 11.3254 10.7L2.90039 19.125C2.66706 19.3583 2.37939 19.475 2.03739 19.475C1.69539 19.475 1.39972 19.35 1.15039 19.1Z"
                      fill="#FAFAFA"
                    />
                  </svg>
                </button>
              </div>
            </Col>
            <Col>
              <div className={tabs === "tab1" ? "d-block ps_44" : "d-none"}>
                <Accordion>
                  <Accordion.Item
                    eventKey="0"
                    className=" bg-transparent border-0"
                  >
                    <Accordion.Header className="fw_500 ff_jakarta fs_xl clr_FA lh_120 ">
                      How long does it take to see improvements with dry AMD?
                    </Accordion.Header>
                    <Accordion.Body>
                      <p className="fw_400 fs_md ff_jakarta mb-0 clr_FA opacity_70 ">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item
                    eventKey="1"
                    className=" bg-transparent border-0"
                  >
                    <Accordion.Header className="fw_500 ff_jakarta fs_xl clr_FA lh_120">
                      Do I need to continue to take the program to sustain the
                      benfits?
                    </Accordion.Header>
                    <Accordion.Body>
                      <p className="fw_400 fs_md ff_jakarta mb-0 clr_FA opacity_70 ">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item
                    eventKey="2"
                    className=" bg-transparent border-0"
                  >
                    <Accordion.Header className="fw_500 ff_jakarta fs_xl clr_FA lh_120">
                      Do Blood Tests Improve?
                    </Accordion.Header>
                    <Accordion.Body>
                      <p className="fw_400 fs_md ff_jakarta mb-0 clr_FA opacity_70 ">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item
                    eventKey="3"
                    className=" bg-transparent border-0"
                  >
                    <Accordion.Header className="fw_500 ff_jakarta fs_xl clr_FA lh_120">
                      How do you decrease the frequency of injections for Wet
                      AMD.
                    </Accordion.Header>
                    <Accordion.Body>
                      <p className="fw_400 fs_md ff_jakarta mb-0 clr_FA opacity_70 ">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item
                    eventKey="4"
                    className=" bg-transparent border-0"
                  >
                    <Accordion.Header className="fw_500 ff_jakarta fs_xl clr_FA lh_120">
                      Is this Anti-Aging Medicine?
                    </Accordion.Header>
                    <Accordion.Body>
                      <p className="fw_400 fs_md ff_jakarta mb-0 clr_FA opacity_70 ">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item
                    eventKey="5"
                    className=" bg-transparent border-0"
                  >
                    <Accordion.Header className="fw_500 ff_jakarta fs_xl clr_FA lh_120">
                      What would slow improvement in Dry or Wet AMD?
                    </Accordion.Header>
                    <Accordion.Body>
                      <p className="fw_400 fs_md ff_jakarta mb-0 clr_FA opacity_70 ">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
              <div className={tabs === "tab2" ? "d-block ps_44" : "d-none"}>
                <Accordion>
                  <Accordion.Item
                    eventKey="1"
                    className=" bg-transparent border-0"
                  >
                    <Accordion.Header className="fw_500 ff_jakarta fs_xl clr_FA lh_120">
                      Do I need to continue to take the program to sustain the
                      benfits?
                    </Accordion.Header>
                    <Accordion.Body>
                      <p className="fw_400 fs_md ff_jakarta mb-0 clr_FA opacity_70 ">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item
                    eventKey="2"
                    className=" bg-transparent border-0"
                  >
                    <Accordion.Header className="fw_500 ff_jakarta fs_xl clr_FA lh_120">
                      Do Blood Tests Improve?
                    </Accordion.Header>
                    <Accordion.Body>
                      <p className="fw_400 fs_md ff_jakarta mb-0 clr_FA opacity_70 ">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item
                    eventKey="3"
                    className=" bg-transparent border-0"
                  >
                    <Accordion.Header className="fw_500 ff_jakarta fs_xl clr_FA lh_120">
                      How do you decrease the frequency of injections for Wet
                      AMD.
                    </Accordion.Header>
                    <Accordion.Body>
                      <p className="fw_400 fs_md ff_jakarta mb-0 clr_FA opacity_70 ">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item
                    eventKey="4"
                    className=" bg-transparent border-0"
                  >
                    <Accordion.Header className="fw_500 ff_jakarta fs_xl clr_FA lh_120">
                      Is this Anti-Aging Medicine?
                    </Accordion.Header>
                    <Accordion.Body>
                      <p className="fw_400 fs_md ff_jakarta mb-0 clr_FA opacity_70 ">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item
                    eventKey="5"
                    className=" bg-transparent border-0"
                  >
                    <Accordion.Header className="fw_500 ff_jakarta fs_xl clr_FA lh_120">
                      What would slow improvement in Dry or Wet AMD?
                    </Accordion.Header>
                    <Accordion.Body>
                      <p className="fw_400 fs_md ff_jakarta mb-0 clr_FA opacity_70 ">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item
                    eventKey="0"
                    className=" bg-transparent border-0"
                  >
                    <Accordion.Header className="fw_500 ff_jakarta fs_xl clr_FA lh_120">
                      How long does it take to see improvements with dry AMD?
                    </Accordion.Header>
                    <Accordion.Body>
                      <p className="fw_400 fs_md ff_jakarta mb-0 clr_FA opacity_70 ">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default AskedQuestions;
