import React from "react";
import "./testimonial.css";
import { testimonial } from "../utils/testimonial";

// import Swiper core and required modules
import { Navigation, Pagination, Autoplay } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

//crear array de testimonios y mapearlo

const Testimonial = () => {
  return (
    <section id="testimonial">
      <h5>Reviews</h5>
      <h2>Testimonials</h2>
      <Swiper
        className="testimonial__container"
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={100}
        slidesPerView={1}
        autoplay={true}
        pagination={{ clickable: true }}
      >
        {testimonial.map(({ id, name, image, text }) => {
          return (
            <SwiperSlide key={id} className="testimonial">
              <div className="client__avatar">
                <img src={image} alt="testimonial" width="100%" />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{text}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonial;
