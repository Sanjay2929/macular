import React from "react";

const Preloader = () => {
  return (
    <>
      <section
        className="d_flex justify-content-center align-items-center min-vh-100 w-100 position-fixed top-0 start-0 bg_preloader z_100"
        id="none"
      >
        <h2
          className="fs_5x6l clr_white ff_poppins fw_900 preloaderAni"
          data-aos="fade-up"
        >
          MACULAR
        </h2>
      </section>
    </>
  );
};

export default Preloader;
