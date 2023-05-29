import React from "react";
import Slider from "react-slick";
import { Col, Container, Row } from "react-bootstrap-v5";
import patientsImgs from "../assets/img/webp/patientsSaysImg.webp";

const PatientsSays = () => {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const first = React.useRef();
  return (
    <div>
      <section className="py-md-5">
        <Container className="py-sm-5">
          <div className="d-flex flex-column align-items-center pb-4 pt-5">
            <h2 className="text-center fw_500 ff_jakarta fs_4x8l clr_white opacity_90 mb-3 patientsArrow position-relative">
              What our patients say
            </h2>
            <p className="text-center maxW637 fw_400 ff_roboto fs_md lh_150 clr_FA opacity_70 lh_150 mb-0 ">
              Viverra nisi integer convallis ultricies tellus mauris. Ante purus
              pretium ac vitae morbi in ultricies ut. Orci pharetra adipiscing
              ut.
            </p>
          </div>
          <Row className="justify-content-between align-items-center pb-5">
            <Col lg={5} md={6}>
              <div className="px-lg-4 patientsGreenLight position-relative">
                <img
                  className="w-100 position-relative z_2"
                  src={patientsImgs}
                  alt="img"
                />
              </div>
            </Col>
            <Col md={6}>
              <Slider {...settings} ref={first}>
                <div className="ps-xl-5">
                  <h4 className="fw_500 ff_jakarta fs_2x4l clr_FA lh_120 pb-2 mb-1">
                    Alex willson
                  </h4>
                  <p className="fw_400 ff_roboto fs_md clr_white opacity_70 lh_150 pb-2 mb-1">
                    Lectus adipiscing pulvinar et praesent justo libero luctus
                    tortor. A semper feugiat non dui ut egestas eu. Euismod eu
                    fames ante in vestibulum duis in odio. Amet pharetra mauris
                    at pellentesque. Netus libero nulla eu id.
                  </p>
                  <button className="border-0 bg-transparent readMoreButton">
                    Read More...
                  </button>
                  <div className="d-flex gap-3 pt-4 mt-1">
                    <span
                      onClick={() => first.current.slickPrev()}
                      className="cursiorPointer"
                    >
                      <svg
                        width="36"
                        height="36"
                        viewBox="0 0 36 36"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M20.1478 24.939L13.3919 18.2031C13.3117 18.123 13.2548 18.0361 13.2211 17.9425C13.1874 17.849 13.1709 17.7487 13.1714 17.6418C13.1714 17.5349 13.188 17.4347 13.2211 17.3411C13.2543 17.2476 13.3112 17.1607 13.3919 17.0805L20.1478 10.3246C20.3349 10.1375 20.5688 10.0439 20.8495 10.0439C21.1301 10.0439 21.3707 10.1442 21.5712 10.3447C21.7716 10.5451 21.8719 10.779 21.8719 11.0463C21.8719 11.3136 21.7716 11.5475 21.5712 11.748L15.6773 17.6418L21.5712 23.5357C21.7583 23.7228 21.8518 23.9535 21.8518 24.2277C21.8518 24.502 21.7516 24.7391 21.5511 24.939C21.3506 25.1395 21.1168 25.2397 20.8495 25.2397C20.5822 25.2397 20.3483 25.1395 20.1478 24.939Z"
                          fill="#27BBA2"
                        />
                        <circle
                          cx="17.6415"
                          cy="17.6415"
                          r="17.2406"
                          stroke="#27BBA2"
                          strokeWidth="0.801887"
                        />
                      </svg>
                    </span>
                    <span
                      onClick={() => first.current.slickNext()}
                      className="cursiorPointer"
                    >
                      <svg
                        width="36"
                        height="36"
                        viewBox="0 0 36 36"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="17.9247"
                          cy="17.6415"
                          r="17.6415"
                          fill="#27BBA2"
                        />
                        <path
                          d="M15.4186 10.3442L22.1745 17.0801C22.2547 17.1602 22.3116 17.2471 22.3453 17.3407C22.379 17.4342 22.3955 17.5345 22.395 17.6414C22.395 17.7483 22.3784 17.8485 22.3453 17.9421C22.3121 18.0356 22.2552 18.1225 22.1745 18.2027L15.4186 24.9586C15.2315 25.1457 14.9976 25.2393 14.7169 25.2393C14.4363 25.2393 14.1957 25.139 13.9952 24.9386C13.7948 24.7381 13.6945 24.5042 13.6945 24.2369C13.6945 23.9696 13.7948 23.7357 13.9952 23.5352L19.8891 17.6414L13.9952 11.7475C13.8081 11.5604 13.7146 11.3297 13.7146 11.0555C13.7146 10.7812 13.8148 10.5441 14.0153 10.3442C14.2158 10.1437 14.4496 10.0435 14.7169 10.0435C14.9842 10.0435 15.2181 10.1437 15.4186 10.3442Z"
                          fill="#FAFAFA"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
                <div className="ps-xl-5">
                  <h4 className="fw_500 ff_jakarta fs_2x4l clr_FA lh_120 pb-2 mb-1">
                    Sanjay Jyani
                  </h4>
                  <p className="fw_400 ff_roboto fs_md clr_white opacity_70 lh_150 pb-2 mb-1">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Nemo nihil iste, at consequuntur cumque rerum, molestiae
                    voluptates animi tempore explicabo sunt aliquam labore
                    adipisci atque pariatur nisi inventore temporibus dolore.
                  </p>
                  <button className="border-0 bg-transparent readMoreButton">
                    Read More...
                  </button>
                  <div className="d-flex gap-3 pt-4 mt-1">
                    <span
                      onClick={() => first.current.slickPrev()}
                      className="cursiorPointer"
                    >
                      <svg
                        width="36"
                        height="36"
                        viewBox="0 0 36 36"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M20.1478 24.939L13.3919 18.2031C13.3117 18.123 13.2548 18.0361 13.2211 17.9425C13.1874 17.849 13.1709 17.7487 13.1714 17.6418C13.1714 17.5349 13.188 17.4347 13.2211 17.3411C13.2543 17.2476 13.3112 17.1607 13.3919 17.0805L20.1478 10.3246C20.3349 10.1375 20.5688 10.0439 20.8495 10.0439C21.1301 10.0439 21.3707 10.1442 21.5712 10.3447C21.7716 10.5451 21.8719 10.779 21.8719 11.0463C21.8719 11.3136 21.7716 11.5475 21.5712 11.748L15.6773 17.6418L21.5712 23.5357C21.7583 23.7228 21.8518 23.9535 21.8518 24.2277C21.8518 24.502 21.7516 24.7391 21.5511 24.939C21.3506 25.1395 21.1168 25.2397 20.8495 25.2397C20.5822 25.2397 20.3483 25.1395 20.1478 24.939Z"
                          fill="#27BBA2"
                        />
                        <circle
                          cx="17.6415"
                          cy="17.6415"
                          r="17.2406"
                          stroke="#27BBA2"
                          strokeWidth="0.801887"
                        />
                      </svg>
                    </span>
                    <span
                      onClick={() => first.current.slickNext()}
                      className="cursiorPointer"
                    >
                      <svg
                        width="36"
                        height="36"
                        viewBox="0 0 36 36"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="17.9247"
                          cy="17.6415"
                          r="17.6415"
                          fill="#27BBA2"
                        />
                        <path
                          d="M15.4186 10.3442L22.1745 17.0801C22.2547 17.1602 22.3116 17.2471 22.3453 17.3407C22.379 17.4342 22.3955 17.5345 22.395 17.6414C22.395 17.7483 22.3784 17.8485 22.3453 17.9421C22.3121 18.0356 22.2552 18.1225 22.1745 18.2027L15.4186 24.9586C15.2315 25.1457 14.9976 25.2393 14.7169 25.2393C14.4363 25.2393 14.1957 25.139 13.9952 24.9386C13.7948 24.7381 13.6945 24.5042 13.6945 24.2369C13.6945 23.9696 13.7948 23.7357 13.9952 23.5352L19.8891 17.6414L13.9952 11.7475C13.8081 11.5604 13.7146 11.3297 13.7146 11.0555C13.7146 10.7812 13.8148 10.5441 14.0153 10.3442C14.2158 10.1437 14.4496 10.0435 14.7169 10.0435C14.9842 10.0435 15.2181 10.1437 15.4186 10.3442Z"
                          fill="#FAFAFA"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </Slider>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default PatientsSays;
