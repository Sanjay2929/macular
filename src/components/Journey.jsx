import React from "react";
import { Container } from "react-bootstrap-v5";

const Journey = () => {
  return (
    <>
      <section className="py-5 journeyGreenShadow position-relative">
        <Container className="py-4 position-relative z_2 journeyGreenShadowCenter">
          <h2 className="fw_500 ff_jakarta fs_4x8l clr_FA lh_120 text-center pt-3 journeyArrowLine position-relative">
            Our Journey
          </h2>
          <div className="maxW1140 journeyTimeline mx-auto position-relative mt-5 z_2">
            <div className="boxRight d-flex justify-content-end">
              <div className="contnetTimeline right">
                <h4>16 May, 2013</h4>
                <p>
                  My mother had macular degeneration for the last 15 years.
                  After conducting research on the disease, I successfully
                  treated her, and she showed improvement within six months.
                </p>
              </div>
            </div>
            <div className="boxleft d-flex justify-content-lg-start justify-content-end">
              <div className="contnetTimeline left">
                <h4>2015</h4>
                <p>
                  A patient named Paddy did not respond to injections for her
                  eye treatment. I conducted research and found an alternative
                  treatment that did not involve injections. As a result,
                  Paddy's vision improved, and she was able to see clearly.
                </p>
              </div>
            </div>
            <div className="boxRight d-flex justify-content-end">
              <div className="contnetTimeline right">
                <h4>2017</h4>
                <p>
                  In 2017, I studied migraines and worked with 69 patients.
                  Within three to six months of treatment, 54 patients showed
                  improvement in their vision.
                </p>
              </div>
            </div>
            <div className="boxleft d-flex justify-content-lg-start justify-content-end">
              <div className="contnetTimeline left">
                <h4>2021</h4>
                <p>
                  In 2020, I studied 365 cases of eye disease and conducted
                  research on them. In 2021, I conducted a test based on my
                  research, and the results showed a recovery rate of 48% for
                  dry AMD and 60% for wet AMD patients.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Journey;
