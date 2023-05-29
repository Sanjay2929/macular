import React, { useState } from "react";
import { Col, Container, Modal, Row } from "react-bootstrap-v5";
import Apatientvideo from "../assets/img/webp/Apatientvideo.webp";
import jennyImg from "../assets/img/webp/jennyVideo.webp";
import cameronImg from "../assets/img/webp/CameronVideo.webp";
import elenorImg from "../assets/img/webp/ElenorVideo.webp";
import estherImg from "../assets/img/webp/EstherVideo.webp";
import dlanneImg from "../assets/img/webp/dlanneVideo.webp";
import jacobImg from "../assets/img/webp/jacobVideo.webp";
import GreenButton from "./GreenButton";
const YoutubeVideo = () => {
  const values = [true];
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }
  const patientsReview = [
    {
      id: 1,
      youtubeImg: jennyImg,
      patientName: "Jenny Wilson",
    },
    {
      id: 2,
      youtubeImg: dlanneImg,
      patientName: "Dianne Russell",
    },
    {
      id: 3,
      youtubeImg: jacobImg,
      patientName: "Jacob Jones",
    },
    {
      id: 4,
      youtubeImg: cameronImg,
      patientName: "Cameron Williamson",
    },
    {
      id: 5,
      youtubeImg: estherImg,
      patientName: "Esther Howard",
    },
    {
      id: 6,
      youtubeImg: elenorImg,
      patientName: "Eleanor Pena",
    },
  ];
  return (
    <div>
      <section className="py-sm-5">
        <Container className="py-5 my-2">
          <h2 className="text-center ff_jakarta fw_500 fs_4x8l clr_FA lh_120 pb-5 arrowLineVideo position-relative">
            Video Testimonials
          </h2>
          <div className="patientVideoRightLight position-relative">
            {values.map((v, idx) => (
              <div
                className="position-relative z_2 position-relative cursiorPointer"
                onClick={() => handleShow(v)}
              >
                <img className="w-100" src={Apatientvideo} alt="img" />
                <button className="position-absolute start-50 top-50 translate-middle youtubeButton position-relative">
                  <svg
                    width="21"
                    height="23"
                    viewBox="0 0 21 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.807129 22.5213L20.7573 11.565L0.807129 0.608795V22.5213Z"
                      fill="white"
                    />
                  </svg>
                </button>
                {/* {typeof v === "string" && below ${v.split("-")[0]}} */}
              </div>
            ))}
            <Modal
              show={show}
              fullscreen={fullscreen}
              onHide={() => setShow(false)}
            >
              <Modal.Header closeButton>
                <Modal.Title>
                  <p className="fw_500 ff_jakarta fs_xl p-4">
                    A patient named Paddy, was suffering from dry AMD and
                    temporary vision loss. Our strategies cured her and now she
                    is living happily.
                  </p>
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <iframe
                  src="https://youtube.com/shorts/DHhGa5UljNc?feature=share"
                  frameborder="0"
                  allow="autoplay"
                  allowfullscreen
                  title="video"
                  width={"75%"}
                  height={"75%%"}
                />
              </Modal.Body>
            </Modal>
            <p className="fw_500 ff_jakarta fs_3x2l clr_white py-4 mb-3 mt-1">
              A patient named Paddy, was suffering from dry AMD and temporary
              vision loss. Our strategies cured her and now she is living
              happily.
            </p>
          </div>
          <Row className="rightSideGreenShadow position-relative">
            {patientsReview.map((val, v, idx) => {
              return (
                <Col
                  lg={4}
                  sm={6}
                  xs={12}
                  key={val.id}
                  onClick={() => handleShow(v)}
                  className="pt-lg-5 pt-sm-4 pt-2 mt-sm-4 mt-2 position-relative z_2 hoverYoutube cursiorPointer"
                >
                  <div className="videoBox overflow-hidden position-relative z_2">
                    <div className="position-relative">
                      <img className="w-100" src={val.youtubeImg} alt="img" />
                      <button className="position-absolute start-50 top-50 z_2 youtubeButton position-relative "></button>
                    </div>
                    <div className="videoData">
                      <h4 className="fw_500 ff_jakarta fs_xl clr_FA mb-3">
                        {val.patientName}
                      </h4>
                      <p className="fw_400 ff_roboto fs_md clr_FA lh_150 opacity_80 mb-0">
                        Amet minim mollit non deserunt ullamco est sit aliqua
                        dolor do amet sint. Velit officia cons
                      </p>
                    </div>
                  </div>
                </Col>
              );
            })}
            <Modal
              show={show}
              fullscreen={fullscreen}
              onHide={() => setShow(false)}
            >
              <Modal.Header closeButton>
                <Modal.Title>
                  <p className="fw_500 ff_jakarta fs_xl p-4">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia cons
                  </p>
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <iframe
                  src="https://youtu.be/LSDxjp6sWYQ"
                  frameborder="0"
                  allow="autoplay"
                  allowfullscreen
                  title="video"
                  width={"75%"}
                  height={"75%"}
                />
              </Modal.Body>
            </Modal>
          </Row>
          <div className="d-flex justify-content-center pt-3">
            <GreenButton greenButton="See all" />
          </div>
        </Container>
      </section>
    </div>
  );
};

export default YoutubeVideo;
