import React from "react";
import SwiperCore, { EffectCoverflow, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

SwiperCore.use([EffectCoverflow, Pagination]);

const Symptoms = () => {
  return (
    <div>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
        //   rotate: 50,
        //   stretch: 0,
        //   depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        pagination={true}
        className="mySwiper"
      >
        <SwiperSlide>
          <h2>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab,
            repellendus voluptatum. Officia non hic quod incidunt eligendi
            magnam minima quis praesentium corrupti dicta velit facilis dolores
            natus reiciendis, doloremque aspernatur.
          </h2>
        </SwiperSlide>
        <SwiperSlide>
          <h2>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab,
            repellendus voluptatum. Officia non hic quod incidunt eligendi
            magnam minima quis praesentium corrupti dicta velit facilis dolores
            natus reiciendis, doloremque aspernatur.
          </h2>
        </SwiperSlide>
        <SwiperSlide>
          <h2>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab,
            repellendus voluptatum. Officia non hic quod incidunt eligendi
            magnam minima quis praesentium corrupti dicta velit facilis dolores
            natus reiciendis, doloremque aspernatur.
          </h2>
        </SwiperSlide>
        <SwiperSlide>
          <h2>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab,
            repellendus voluptatum. Officia non hic quod incidunt eligendi
            magnam minima quis praesentium corrupti dicta velit facilis dolores
            natus reiciendis, doloremque aspernatur.
          </h2>
        </SwiperSlide>
        <SwiperSlide>
          <h2>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab,
            repellendus voluptatum. Officia non hic quod incidunt eligendi
            magnam minima quis praesentium corrupti dicta velit facilis dolores
            natus reiciendis, doloremque aspernatur.
          </h2>
        </SwiperSlide>
        <SwiperSlide>
          <h2>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab,
            repellendus voluptatum. Officia non hic quod incidunt eligendi
            magnam minima quis praesentium corrupti dicta velit facilis dolores
            natus reiciendis, doloremque aspernatur.
          </h2>
        </SwiperSlide>
        <SwiperSlide>
          <h2>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab,
            repellendus voluptatum. Officia non hic quod incidunt eligendi
            magnam minima quis praesentium corrupti dicta velit facilis dolores
            natus reiciendis, doloremque aspernatur.
          </h2>
        </SwiperSlide>
        <SwiperSlide>
          <h2>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab,
            repellendus voluptatum. Officia non hic quod incidunt eligendi
            magnam minima quis praesentium corrupti dicta velit facilis dolores
            natus reiciendis, doloremque aspernatur.
          </h2>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Symptoms;
