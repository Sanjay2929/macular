import React, { useState } from "react";
import { Container } from "react-bootstrap-v5";
import eyeShape from "../assets/img/svg/eyeShapeLogoBg.svg";
import { Link } from "react-router-dom";
import GreenButton from "./GreenButton";
import { RiMenu3Fill } from "react-icons/ri";

export const Navbar = (props) => {
  const [first, setfirst] = useState(true);
  function showUl() {
    setfirst(!first);
  }
  if (!first) {
    document.body.classList.add("overflow-hidden");
  } else {
    document.body.classList.remove("overflow-hidden");
  }
  return (
    <>
      <nav className="py-3 position-sm-fixed z_40 start-0 top-0 w-100 clearHeader darkHeader">
        <Container>
          <div className="d-flex justify-content-between align-items-center">
            <div className="eyeShapeLogo position-relative d-flex justify-content-center align-items-center">
              <Link
                to="/"
                className="ff_roboto fw_700 fs_sm clr_white position-relative z_3 lh_12"
              >
                macular <span className="d-block ">program</span>
              </Link>
              <img
                className="position-absolute top-0 start-0 h-100 z_0"
                src={eyeShape}
                alt="logo"
              />
            </div>
            <div onClick={showUl} className="z_51">
              <h3 className="d-block d-md-none clr_white">
                <RiMenu3Fill />
              </h3>
            </div>
            <ul
              className={
                first
                  ? "mb-0 ps-0 d-flex flex-md-row flex-column mobileScreen align-items-center gap_40 gap_20 navbar"
                  : "d-flex align-items-center ps-0 mobileScreen Nav0 navbar"
              }
            >
              <li>
                <Link className={props.navAHome} to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className={props.navAbout} to="/About">
                  About
                </Link>
              </li>
              <li>
                <Link className={props.navATestimo} to="/Testimonials">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link className="" to="/Location">
                  Location{" "}
                </Link>
              </li>
              <li>
                <Link className="" to="/Process">
                  Process
                </Link>
              </li>
              <li className="d-block d-md-none">
                <GreenButton greenButton="Contact Us" />
              </li>
            </ul>
            <div className="d-md-block d-none">
              <GreenButton greenButton="Contact Us" />
            </div>
          </div>
        </Container>
      </nav>
    </>
  );
};
