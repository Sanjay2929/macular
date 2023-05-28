import React from "react";
import { Col, Container, Row } from "react-bootstrap-v5";
import GreenButton from "./GreenButton";

const Program = () => {
  return (
    <div>
      <section className="py-sm-5">
        <Container className="pt-5 pb-3 mt-md-5">
          <h2 className="fw_500 ff_jakarta fs_4x8l clr_white text-center lh_120 pt-5 mt-5">
            <span className="programArrow position-relative"> Who</span> will be
            eligible for <span className="d-md-block"> the Program</span>
          </h2>
          <Row className="pt-5 pb-4 mt-2 justify-content-center position-relative">
            <Col lg={5} md={6} sm={10} xs={12}>
              <div className="accepted position-relative overflow-hidden">
                <span>
                  <svg
                    width="100"
                    height="95"
                    viewBox="0 0 100 95"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M77.7112 41.1769C77.139 41.9017 76.5668 42.6265 75.9946 43.3512V78.2546C75.9946 81.23 73.5533 83.6713 70.5779 83.6713H16.6398C13.6263 83.6713 11.2231 81.23 11.2231 78.2546V24.3546C11.2231 21.3411 13.6644 18.9379 16.6398 18.9379H67.5262C69.548 16.4966 71.4553 14.2842 73.4388 12.0717L75.1172 10.1263L76.109 9.0582C74.3925 8.40972 72.4852 8.06641 70.5398 8.06641H16.6398C7.67555 8.06641 0.351562 15.3522 0.351562 24.3546V78.2546C0.351562 87.2188 7.63741 94.5428 16.6398 94.5428H70.5398C79.504 94.5428 86.828 87.257 86.828 78.2546V30.1147C84.0052 33.3952 81.0298 36.9809 77.7112 41.1769Z"
                      fill="#25AE87"
                    />
                    <path
                      d="M99.0728 3.2221C97.5088 0.590038 94.0757 -0.287314 91.4437 1.27666C89.956 2.15401 88.5827 3.1458 87.2476 4.21388C86.561 4.74793 85.9507 5.28197 85.3022 5.85415C84.6919 6.42634 84.0815 6.99853 83.4712 7.57071C82.2505 8.71509 81.1443 9.97389 79.9999 11.1946L78.3215 13.0256L76.6812 14.8947C74.4688 17.3742 72.3326 19.9299 70.1965 22.4857L67.0304 26.3384L63.9787 30.2674C59.9353 35.5316 55.9681 40.8338 52.1917 46.2505C50.2844 48.9589 48.4534 51.7054 46.5842 54.4137C45.8976 55.4436 45.2491 56.4736 44.5625 57.5035C43.113 56.2828 41.816 54.9477 40.6335 53.4601C38.2303 50.4847 36.3993 46.8227 34.8353 42.8174L34.7972 42.7411C33.7673 40.109 30.83 38.6977 28.1217 39.575C25.2608 40.4905 23.6968 43.5422 24.5741 46.4031C25.3371 48.8063 26.2144 51.1713 27.2825 53.5364C28.3887 55.9014 29.6857 58.2283 31.2496 60.4407C32.8136 62.6532 34.6828 64.7131 36.7045 66.5441C38.7262 68.3751 40.9005 69.9772 43.1511 71.3504C45.8595 73.0288 49.4833 72.2659 51.2762 69.5957L51.3906 69.4431C53.1835 66.7729 55.0526 64.1409 56.9217 61.547C58.7909 58.9149 60.66 56.321 62.5673 53.7271C66.3819 48.5774 70.2728 43.4277 74.2781 38.4306C78.2834 33.4335 82.365 28.5127 86.5991 23.7445L88.2013 21.9517L89.8034 20.197C90.8715 19.0526 91.9395 17.8701 93.0076 16.6875C94.0757 15.505 95.0675 14.2844 96.0593 13.0256C97.0511 11.8049 98.0047 10.5079 98.8821 9.09654L98.9965 8.90581C100.065 7.26555 100.179 5.05309 99.0728 3.2221Z"
                      fill="#25AE87"
                    />
                  </svg>
                </span>
                <ul className="eligibilityBox mb-0 pt-3 mt-4">
                  <li className="fw_400 ff_roboto fs_16 clr_FA mb-3">
                    Prevention vision loss
                  </li>
                  <li className="fw_400 ff_roboto fs_16 clr_FA mb-3">Drusen</li>
                  <li className="fw_400 ff_roboto fs_16 clr_FA mb-3">
                    Wet in an eye
                  </li>
                  <li className="fw_400 ff_roboto fs_16 clr_FA mb-3">
                    Diabetic Retinopathy
                  </li>
                  <li className="fw_400 ff_roboto fs_16 clr_FA mb-3">
                    Prevention wet AMD
                  </li>
                  <li className="fw_400 ff_roboto fs_16 clr_FA mb-3">
                    Vision loss
                  </li>
                  <li className="fw_400 ff_roboto fs_16 clr_FA mb-3">
                    Wet in both eyes
                  </li>
                  <li className="fw_400 ff_roboto fs_16 clr_FA">
                    Cataract + AMD
                  </li>
                </ul>
              </div>
            </Col>
            <Col lg={5} md={6} sm={10} xs={12} className="pt-3 pt-md-0">
              <div className="notAccepted h-100 position-relative overflow-hidden">
                <span>
                  <svg
                    width="101"
                    height="97"
                    viewBox="0 0 101 97"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M96.0113 23.2739C95.7561 23.4866 84.4447 32.3316 84.4447 32.3316V78.3854C84.4447 81.7023 81.7231 84.4238 78.4063 84.4238H18.3195C14.9601 84.4238 12.281 81.7023 12.281 78.3854V18.2986C12.281 14.9392 15.0026 12.2602 18.3195 12.2602H72.6655C77.4282 8.85822 82.3185 5.58385 87.3363 2.5221C84.6998 1.03376 81.6381 0.183271 78.4063 0.183271H18.3195C8.28375 0.140747 0.161621 8.3054 0.161621 18.2986V78.3854C0.161621 88.3786 8.28375 96.5432 18.3195 96.5432H78.4063C88.3995 96.5432 96.5641 88.4211 96.5641 78.3854V22.8912L96.0113 23.2739Z"
                      fill="#DD2A37"
                    />
                    <path
                      d="M90.8652 6.05159C84.3164 10.0063 77.9378 14.3013 71.8568 18.8514C65.7758 23.444 59.8224 28.1642 54.0817 33.1395C52.4657 34.5428 50.8923 35.9461 49.3189 37.3494C48.8087 36.7541 48.3409 36.1588 47.8306 35.5634L45.6193 32.7143L44.5137 31.311L43.4931 29.8226L41.4094 26.8885C41.0692 26.4207 40.729 25.9104 40.4314 25.4001C40.0912 24.8898 39.751 24.4221 39.3257 23.9543C38.9005 23.4865 38.4327 23.1038 37.9224 22.7211C37.3696 22.3384 36.7743 21.9982 36.0514 21.743L35.2009 21.4454C34.6056 21.2327 33.9252 21.1052 33.2448 21.1052C29.2475 20.8926 25.8456 23.9968 25.6755 27.9941C25.5054 31.226 26.9937 33.5223 28.5671 35.7335L30.9485 39.0504L32.1391 40.7089L33.4149 42.2823L35.9663 45.4716C36.6467 46.2795 37.3696 47.0875 38.0925 47.8529C37.8374 48.1081 37.5823 48.3207 37.3271 48.5758L33.2873 52.5731C31.9691 53.9339 30.6083 55.2522 29.29 56.6129C27.9718 57.9737 26.696 59.377 25.5479 60.9079C24.9525 61.6733 24.3997 62.4388 23.8894 63.2892C23.6343 63.7145 23.3792 64.0972 23.124 64.565C22.8689 64.9902 22.6562 65.4155 22.4436 65.9257C21.6782 67.6267 21.6357 69.7104 22.5712 71.4964C24.1871 74.6007 27.9718 75.8339 31.076 74.218L31.4588 74.0479C31.8415 73.8353 32.2667 73.5801 32.6494 73.325C33.0322 73.0698 33.4149 72.8147 33.7976 72.517C34.563 71.9642 35.2859 71.4114 35.9663 70.816C37.3696 69.6254 38.6879 68.3496 39.9636 67.0314C41.2393 65.7131 42.5151 64.3949 43.8333 63.1191L47.7456 59.2494C48.0857 58.9092 48.3834 58.6116 48.7236 58.3139C49.3189 58.8242 49.9568 59.377 50.5947 59.8448C51.105 60.27 51.6578 60.6953 52.2106 61.1205L53.869 62.3537L55.5275 63.5869C56.0803 64.0122 56.6756 64.3523 57.2285 64.7351C57.7813 65.1178 58.3766 65.5005 58.9294 65.8832C59.5248 66.2659 60.1201 66.6061 60.7154 66.9463C61.3108 67.2865 61.9061 67.6692 62.5015 68.0094L64.33 69.03C64.9253 69.3702 65.5632 69.6679 66.2011 69.9656C66.8389 70.2632 67.4343 70.6034 68.1147 70.8586C68.7525 71.1562 69.3904 71.4539 70.1133 71.709C70.4535 71.8366 70.7937 71.9642 71.1339 72.1343L72.3246 72.5595C74.8335 73.4525 77.6826 72.6021 79.256 70.3057C81.1271 67.5842 80.4467 63.8421 77.7252 61.971L76.7046 61.2481L76.6195 61.2056C76.6195 61.2056 76.5345 61.163 76.492 61.1205L76.1518 60.9504C75.9391 60.8228 75.684 60.6953 75.4714 60.5252C75.0036 60.27 74.5358 59.9298 74.0255 59.6322C73.5578 59.3345 73.0475 58.9943 72.5797 58.6966C72.1119 58.399 71.6017 58.0588 71.1339 57.7186L69.6881 56.698C69.2203 56.3578 68.7525 55.9751 68.2848 55.6349C67.817 55.2947 67.3492 54.9545 66.8815 54.5718C66.4137 54.1891 65.9459 53.8063 65.5207 53.4661C65.0529 53.0834 64.5852 52.7432 64.1599 52.3605L62.7991 51.2123L61.4384 50.0642C61.0131 49.639 60.5879 49.2562 60.1201 48.831C59.865 48.6184 59.6523 48.3632 59.3972 48.1506C60.843 46.7898 62.2888 45.4716 63.7772 44.1108L67.8595 40.4112L71.9844 36.7966C73.3451 35.5634 74.7485 34.4153 76.1518 33.2246L78.2354 31.4386L79.2986 30.5456L80.3617 29.6951L84.6141 26.2506C86.0174 25.1025 87.5057 23.9968 88.909 22.8912L91.0778 21.1902C91.8007 20.6374 92.5236 20.1271 93.2465 19.5743L97.6265 16.2999L97.7541 16.1724C100.22 14.3438 100.901 10.8994 99.285 8.22033C97.4139 5.2011 93.7143 4.3081 90.8652 6.05159Z"
                      fill="#DD2A37"
                    />
                  </svg>
                </span>
                <ul className="eligibilityBox mb-0 pt-3 mt-4">
                  <li className="fw_400 ff_roboto fs_16 clr_FA pb-3">
                    Macular hole
                  </li>
                  <li className="fw_400 ff_roboto fs_16 clr_FA pb-3">
                    Irreversible legal Blindness
                  </li>
                  <li className="fw_400 ff_roboto fs_16 clr_FA pb-3">
                    Macular Puckar
                  </li>
                  <li className="fw_400 ff_roboto fs_16 clr_FA">
                    Chemotherapy
                  </li>
                </ul>
              </div>
            </Col>
            <span className="programGreenLight position-absolute"></span>
          </Row>
          <div className="d-flex justify-content-center pt-3 pb-5">
            <GreenButton greenButton="Book Call" />
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Program;
