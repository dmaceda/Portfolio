import React from "react";
import "./about.css";
import CTB from "./CTB";
import { FiUsers } from "react-icons/fi";
import { VscSymbolColor } from "react-icons/vsc";
import { IoMdSpeedometer } from "react-icons/io";
import { BsLaptop } from "react-icons/bs";
import { FaMobileAlt } from "react-icons/fa";
import { AiOutlineCode } from "react-icons/ai";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  return (
    <section id="about">
      <h5>{t("about.subtitle")}</h5>
      <h2>{t("about.title")}</h2>
      <div className="container about__container">
        <div className="about__content">
          <p className="texto">
            {t("about.text1")}
            <br />
            {t("about.text2")}
            <br />
            {t("about.text3")}
            <br />
            {t("about.text4")}
            <br />
            {t("about.text5")}
          </p>
          <div className="about__cards">
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5> {t("about.c1")}</h5>
              <h4>{t("about.c1b")}</h4>
            </article>

            <article className="about__card">
              <FaMobileAlt className="about__icon" />
              <h5>{t("about.c2")}</h5>
              <h4>{t("about.c2b")}</h4>
            </article>

            <article className="about__card">
              <AiOutlineCode className="about__icon" />
              <h5>{t("about.c3")}</h5>
              <h4>{t("about.c3b")}</h4>
            </article>

            <article className="about__card">
              <VscSymbolColor className="about__icon" />
              <h5>{t("about.c4")}</h5>
              <h4>{t("about.c4b")}</h4>
            </article>

            <article className="about__card">
              <IoMdSpeedometer className="about__icon" />
              <h5>{t("about.c5")}</h5>
              <h4>{t("about.c5b")}</h4>
            </article>

            <article className="about__card">
              <BsLaptop className="about__icon" />
              <h5>{t("about.c6")}</h5>
              <h4>{t("about.c6b")}</h4>
            </article>
          </div>

          <div className="contact_button">
            <a href="#contact" className="btn btn-primary">
              {t("about.talk")}
            </a>
          </div>
          <CTB />
        </div>
      </div>
    </section>
  );
};

export default About;
