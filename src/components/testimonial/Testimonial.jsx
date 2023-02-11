import React from "react";
import "./testimonial.css";
import BR from "../../assets/bruno.png";
import AG from "../../assets/agus.png";
import VI from "../../assets/vicky.png";
import NI from "../../assets/nico.png";
import ME from "../../assets/meli.png";
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();

  const testimonial = [
    {
      id: 1,
      name: "Agustín Godoy",
      image: AG,
      text: t("testi.agus"),
    },
    {
      id: 2,
      name: "Nicolas Maximowicz",
      image: NI,
      text: t("testi.nico"),
    },
    {
      id: 3,
      name: "Maria Victoria Alvarez Windey",
      image: VI,
      text: t("testi.vicky"),
    },
    {
      id: 4,
      name: "Bruno Mele Gavazza",
      image: BR,
      text: t("testi.bruno"),
    },
    {
      id: 5,
      name: "Melina Lourdes Reynoso",
      image: ME,
      text: t("testi.meli"),
    },
  ];

  return (
    <section id="testimonial">
      <h5>{t("testi.subtitle")}</h5>
      <h2>{t("testi.title")}</h2>
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
