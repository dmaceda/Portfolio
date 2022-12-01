import React from "react";
import "./certification.css";
import { certif } from "../utils/certif";

// import Swiper core and required modules
import { Navigation, Pagination, Autoplay } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

const Certification = () => {
  return (
    <section id="certifications">
      <h5>Validations</h5>
      <h2>Certificates</h2>
      <Swiper
        className="testimonial__container"
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={100}
        slidesPerView={1}
        autoplay={true}
        pagination={{ clickable: true }}
      >
        {certif.map(({ id, image }) => {
          return (
            <SwiperSlide key={id} className="testimonial">
              <div>
                <img src={image} alt="testimonial" width="100%" />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Certification;
