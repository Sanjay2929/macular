import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap-v5";
import sliderOneImg from "../assets/img/webp/testimonialSliderGirl.webp";
import yellowStar from "../assets/img/svg/YellowStar.svg";
import WhiteStar from "../assets/img/svg/WhiteStar.svg";
import slidersecondImg from "../assets/img/webp/testimonialSliderBoy.webp";
import Slider from "react-slick";
const WetDryTestimonials = () => {
  const [tabs, settabs] = useState("slider1");
  const tabbutton = (changedata) => {
    settabs(changedata.target.id);
  };
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    // variableWidth: true,
    slidesToShow: 1.5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          centerMode: true,
          centerPadding: "11%",
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          centerMode: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const mycourse = [
    {
      id: 1,
      sliderImg: sliderOneImg,
    },
    {
      id: 2,
      sliderImg: slidersecondImg,
    },
    {
      id: 3,
      sliderImg: sliderOneImg,
    },
    {
      id: 4,
      sliderImg: slidersecondImg,
    },
  ];
  const mycourse2 = [
    {
      id: 1,
      sliderImg: slidersecondImg,
    },
    {
      id: 2,
      sliderImg: sliderOneImg,
    },
    {
      id: 3,
      sliderImg: slidersecondImg,
    },
    {
      id: 4,
      sliderImg: sliderOneImg,
    },
  ];
  const first = React.useRef();
  return (
    <>
      <section className="py-5 mb-5">
        <Container>
          <div className="d-flex align-items-center gap_20 pb-5 my-2">
            <button
              id="slider1"
              onClick={tabbutton}
              className={
                tabs === "slider1"
                  ? "fw_500 ff_roboto fs_xl clr_FA lh_150 padding_10_18 bg-transparent sliderTabsButton sliderTabsButtonSelected"
                  : "fw_500 ff_roboto fs_xl clr_FA lh_150 padding_10_18 bg-transparent sliderTabsButton"
              }
            >
              Wet AMD Testimonials
            </button>
            <button
              id="slider2"
              onClick={tabbutton}
              className={
                tabs === "slider2"
                  ? "fw_500 ff_roboto fs_xl clr_FA lh_150 padding_10_18 bg-transparent sliderTabsButton sliderTabsButtonSelected"
                  : "fw_500 ff_roboto fs_xl clr_FA lh_150 padding_10_18 bg-transparent sliderTabsButton"
              }
            >
              Dry AMD Testimonials
            </button>
          </div>
        </Container>
        <Slider
          {...settings}
          ref={first}
          className={tabs === "slider1" ? "d-blockmb-5 " : "d-none"}
        >
          {mycourse.map((val) => {
            return (
              <div
                className="testimonialSliderBox d-flex justify-content-lg-between justify-content-center flex-lg-row flex-column  align-items-center gap_98 gap_30 w-100 SliderGreenLight position-relative"
                key={val.id}
              >
                <div className="maxW300 slideBGBox position-relative">
                  <img
                    className="w-100 borderSliderImg position-relative z_3"
                    src={val.sliderImg}
                    alt="img"
                  />
                </div>
                <div className="doubleComa position-relative pt-5 z_2">
                  <h4 className="fw_400 ff_roboto fs_md clr_FA lh_150 opacity_80 pb-4 position-relative z_2">
                    My experience with the Rozakis institute/Advanced-Wellness
                    has been a success. I was receiving the eye shots, but after
                    the nutritional program recommended by Dr. Rozakis, my
                    eyesight in my damaged eye improved and now I have gone from
                    monthly shots to a five month period, and I am expecting to
                    stop them altogether, soon These research have their hands
                    on a valuable remedy and are successful with their
                    pioneering Thanks to them!
                  </h4>
                  <h3 className="fw_500 ff_jakarta fs_2x8l clr_FA pb-3 pt-1">
                    Rodney Gunther
                  </h3>
                  <span className="d-flex align-items-center gap-2">
                    <img src={yellowStar} alt="img" />
                    <img src={yellowStar} alt="img" />
                    <img src={yellowStar} alt="img" />
                    <img src={yellowStar} alt="img" />
                    <img src={WhiteStar} alt="img" />
                  </span>
                  <div className="d-flex justify-content-end gap-3 pt-3">
                    <span
                      className="sliderButtonArrowLeft d-flex justify-content-center align-items-center cursiorPointer"
                      onClick={() => first.current.slickPrev()}
                    >
                      <svg
                        width="9"
                        height="16"
                        viewBox="0 0 9 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.14733 14.9385L0.39143 8.20265C0.311241 8.12247 0.254307 8.0356 0.220628 7.94204C0.186949 7.84849 0.170376 7.74825 0.170911 7.64133C0.170911 7.53442 0.187483 7.43418 0.220628 7.34063C0.253772 7.24707 0.310706 7.1602 0.39143 7.08001L7.14733 0.324117C7.33443 0.13701 7.56832 0.043457 7.84898 0.043457C8.12964 0.043457 8.3702 0.143693 8.57067 0.344165C8.77115 0.544636 8.87138 0.77852 8.87138 1.04582C8.87138 1.31311 8.77115 1.54699 8.57067 1.74747L2.67681 7.64133L8.57067 13.5352C8.75778 13.7223 8.85134 13.953 8.85134 14.2272C8.85134 14.5015 8.7511 14.7386 8.55063 14.9385C8.35016 15.139 8.11627 15.2392 7.84898 15.2392C7.58168 15.2392 7.3478 15.139 7.14733 14.9385Z"
                          fill="#FAFAFA"
                        />
                      </svg>
                    </span>
                    <span
                      className="cursiorPointer sliderButtonArrowLeft d-flex justify-content-center align-items-center"
                      onClick={() => first.current.slickNext()}
                    >
                      <svg
                        width="10"
                        height="16"
                        viewBox="0 0 10 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2.4181 0.34421L9.174 7.08006C9.25419 7.16025 9.31112 7.24712 9.3448 7.34067C9.37848 7.43423 9.39505 7.53446 9.39452 7.64138C9.39452 7.7483 9.37795 7.84853 9.3448 7.94209C9.31166 8.03564 9.25472 8.12251 9.174 8.2027L2.4181 14.9586C2.231 15.1457 1.99711 15.2393 1.71645 15.2393C1.43579 15.2393 1.19523 15.139 0.994756 14.9386C0.794284 14.7381 0.694048 14.5042 0.694048 14.2369C0.694048 13.9696 0.794284 13.7357 0.994756 13.5352L6.88862 7.64138L0.994756 1.74751C0.807649 1.5604 0.714094 1.32973 0.714094 1.05548C0.714094 0.78124 0.81433 0.544147 1.0148 0.34421C1.21527 0.143738 1.44916 0.0435028 1.71645 0.0435028C1.98375 0.0435028 2.21763 0.143738 2.4181 0.34421Z"
                          fill="#FAFAFA"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
        <Slider
          {...settings}
          ref={first}
          className={tabs === "slider2" ? "d-block mb-5" : "d-none"}
        >
          {mycourse2.map((val) => {
            return (
              <div
                className="testimonialSliderBox d-flex justify-content-lg-between justify-content-center flex-lg-row flex-column align-items-center gap_98 w-100 gap_30 SliderGreenLight position-relative "
                key={val.id}
              >
                <div className="borderSliderImg overflow-hidden">
                  <img className="w-100" src={val.sliderImg} alt="img" />
                </div>
                <div className="doubleComa position-relative pt-5 z_2">
                  <h4 className="fw_400 ff_roboto fs_md clr_FA lh_150 opacity_80 pb-4 position-relative z_2">
                    My experience with the Rozakis institute/Advanced-Wellness
                    has been a success. I was receiving the eye shots, but after
                    the nutritional program recommended by Dr. Rozakis, my
                    eyesight in my damaged eye improved and now I have gone from
                    monthly shots to a five month period, and I am expecting to
                    stop them altogether, soon These research have their hands
                    on a valuable remedy and are successful with their
                    pioneering Thanks to them!
                  </h4>
                  <h3 className="fw_500 ff_jakarta fs_2x8l clr_FA pb-3 pt-1">
                    Rodney Gunther
                  </h3>
                  <span className="d-flex align-items-center gap-2">
                    <img src={yellowStar} alt="img" />
                    <img src={yellowStar} alt="img" />
                    <img src={yellowStar} alt="img" />
                    <img src={yellowStar} alt="img" />
                    <img src={WhiteStar} alt="img" />
                  </span>
                  <div className="d-flex justify-content-end gap-3 pt-3">
                    <span
                      className="sliderButtonArrowLeft d-flex justify-content-center align-items-center cursiorPointer"
                      onClick={() => first.current.slickPrev()}
                    >
                      <svg
                        width="9"
                        height="16"
                        viewBox="0 0 9 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.14733 14.9385L0.39143 8.20265C0.311241 8.12247 0.254307 8.0356 0.220628 7.94204C0.186949 7.84849 0.170376 7.74825 0.170911 7.64133C0.170911 7.53442 0.187483 7.43418 0.220628 7.34063C0.253772 7.24707 0.310706 7.1602 0.39143 7.08001L7.14733 0.324117C7.33443 0.13701 7.56832 0.043457 7.84898 0.043457C8.12964 0.043457 8.3702 0.143693 8.57067 0.344165C8.77115 0.544636 8.87138 0.77852 8.87138 1.04582C8.87138 1.31311 8.77115 1.54699 8.57067 1.74747L2.67681 7.64133L8.57067 13.5352C8.75778 13.7223 8.85134 13.953 8.85134 14.2272C8.85134 14.5015 8.7511 14.7386 8.55063 14.9385C8.35016 15.139 8.11627 15.2392 7.84898 15.2392C7.58168 15.2392 7.3478 15.139 7.14733 14.9385Z"
                          fill="#FAFAFA"
                        />
                      </svg>
                    </span>
                    <span
                      className="sliderButtonArrowLeft d-flex justify-content-center align-items-center cursiorPointer"
                      onClick={() => first.current.slickNext()}
                    >
                      <svg
                        width="10"
                        height="16"
                        viewBox="0 0 10 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2.4181 0.34421L9.174 7.08006C9.25419 7.16025 9.31112 7.24712 9.3448 7.34067C9.37848 7.43423 9.39505 7.53446 9.39452 7.64138C9.39452 7.7483 9.37795 7.84853 9.3448 7.94209C9.31166 8.03564 9.25472 8.12251 9.174 8.2027L2.4181 14.9586C2.231 15.1457 1.99711 15.2393 1.71645 15.2393C1.43579 15.2393 1.19523 15.139 0.994756 14.9386C0.794284 14.7381 0.694048 14.5042 0.694048 14.2369C0.694048 13.9696 0.794284 13.7357 0.994756 13.5352L6.88862 7.64138L0.994756 1.74751C0.807649 1.5604 0.714094 1.32973 0.714094 1.05548C0.714094 0.78124 0.81433 0.544147 1.0148 0.34421C1.21527 0.143738 1.44916 0.0435028 1.71645 0.0435028C1.98375 0.0435028 2.21763 0.143738 2.4181 0.34421Z"
                          fill="#FAFAFA"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </section>
    </>
  );
};

export default WetDryTestimonials;
