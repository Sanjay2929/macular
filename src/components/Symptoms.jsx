import React from "react";
import { Col, Container, Row } from "react-bootstrap-v5";
import Slider from "react-slick";
import stack1 from "../assets/img/webp/stacks1.webp";
import stack2 from "../assets/img/webp/stacks2.webp";
import stack3 from "../assets/img/webp/stacks3.webp";

const Symptoms = () => {
  var symptoms = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  window.onload = () => {
    let sliderImagesBox = document.querySelectorAll(".cards-box");
    sliderImagesBox.forEach((el) => {
      let imageNodes = el.querySelectorAll(".card:not(.hide)");
      let arrIndexes = [];
      (() => {
        let start = 0;
        while (imageNodes.length > start) {
          arrIndexes.push(start++);
        }
      })();

      let setIndex = (arr) => {
        for (let i = 0; i < imageNodes.length; i++) {
          imageNodes[i].dataset.slide = arr[i];
        }
      };
      el.addEventListener("click", () => {
        arrIndexes.unshift(arrIndexes.pop());
        setIndex(arrIndexes);
      });
      setIndex(arrIndexes);
    });
  };
  const first = React.useRef();
  return (
    <>
      <section className="pb-4" id="symptoms">
        <Container className="pb-5 mb-1 stackCardRightShadow position-relative">
          <div className="symptomBg overflow-hidden position-relative z_2">
            <div className="py-4 symptomHeadingBg">
              <h2 className="fw_500 ff_jakarta fs_4x8l clr_white opacity_90 text-center lh_120 pt-3 pb-2 mb-1">
                Symptoms of the disease
              </h2>
              <p className="fw_400 ff_roboto fs_md clr_FA lh_150 opacity_70 text-center mb-3">
                Macular degeneration is a progressive eye disease that can cause
                a range of problems, including:
              </p>
            </div>
            <Row className="align-items-center py_33_36 flex-wrap-reverse justify-content-center position-relative z_2 ">
              <Col md={7} sm={12} className="pt-md-0 pt-4">
                <Slider {...symptoms} ref={first}>
                  <div className="ps-xl-4">
                    <h4 className="fw_500 ff_jakarta fs_3x2l clr_white lh_120 pb-2 mb-1">
                      Blurred or distorted central vision
                    </h4>
                    <p className="fw_400 ff_roboto fs_md clr_FA opacity_70 lh_150 pb-5 mb-0">
                      This is one of the primary symptoms of macular
                      degeneration. As the disease progresses, it can cause the
                      vision to become increasingly blurred or distorted, making
                      it difficult to read, recognize faces, or perform other
                      tasks that require clear vision.
                    </p>
                    <div className="d-flex gap-3">
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
                  <div className="ps-xl-4">
                    <h4 className="fw_500 ff_jakarta fs_3x2l clr_white lh_120 pb-2 mb-1">
                      Dstorted central vision
                    </h4>
                    <p className="fw_400 ff_roboto fs_md clr_FA opacity_70 lh_150 pb-5 mb-0">
                      This is one of the primary symptoms of macular
                      degeneration. As the disease progresses, it can cause the
                      vision to become increasingly blurred or distorted, making
                      it difficult to read, recognize faces, or perform other
                      tasks that require clear vision.
                    </p>
                    <div className="d-flex gap-3">
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
              <Col md={5} xs={10} className="StackCards">
                <div className="cards-box">
                  <div className="card hide">
                    <div className="content-placeholder">
                      <div className="row">
                        <div className="img"></div>
                        <div className="img-text">
                          <img className="w-100" src={stack1} alt="img" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="content-placeholder">
                      <div className="row">
                        <div className="img" data-letter="S"></div>
                        <div className="img-text">
                          <img className="w-100" src={stack1} alt="img" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="content-placeholder">
                      <div className="row">
                        <div className="img" data-letter="A"></div>
                        <div className="img-text">
                          <img className="w-100" src={stack2} alt="img" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="content-placeholder">
                      <div className="row">
                        <div className="img" data-letter="A"></div>
                        <div className="img-text">
                          <img className="w-100" src={stack3} alt="img" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Symptoms;
