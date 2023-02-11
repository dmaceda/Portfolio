import React from "react";
import "./certification.css";
import { certif } from "../../utils/certif";
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

const Certification = () => {
  const { t } = useTranslation();
  return (
    <section id="certifications">
      <h5>{t("cert.subtitle")}</h5>
      <h2>{t("cert.title")}</h2>
      <div className="container experience__pcontainer">
        <p>
          {t("cert.text1")}
          <a
            href="https://certificates.soyhenry.com/cert?id=6d0555b8-79c9-4de2-8c00-454418baafa6"
            target="_blank"
          >
            Henry
          </a>
          {t("cert.text1b")}
          <a
            href="https://www.credly.com/badges/2f4bf033-00c2-4b96-9838-d5b8cd202392/linked_in_profile"
            target="_blank"
          >
            Google
          </a>
          {t("cert.text1c")}
          <a
            href="https://www.info.unlp.edu.ar/carreras-gradoarticulo/plan-2015-licenciatura-en-sistema/"
            target="_blank"
          >
            UNLP
          </a>
          .
          <br />
          {t("cert.text2")}
          <a href="https://www.somosawaq.org/" target="_blank">
            Awaq
          </a>
          {t("cert.text2b")}
        </p>
      </div>
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
