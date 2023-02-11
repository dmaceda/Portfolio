import React from "react";
import "./about.css";
import CTB from "./CTB";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { RiTeamLine } from "react-icons/ri";
import { TiLightbulb } from "react-icons/ti";
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
              <h5>Co-Work</h5>
              <div className="about__icon">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </div>
            </article>

            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>{t("nav.exp")}</h5>
              <div className="about__icon">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiOutlineStar />
                <AiOutlineStar />
              </div>
            </article>

            <article className="about__card">
              <RiTeamLine className="about__icon" />
              <h5>Scrum</h5>
              <div className="about__icon">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiOutlineStar />
              </div>
            </article>

            <article className="about__card">
              <TiLightbulb className="about__icon" />
              <h5>{t("nav.crea")}</h5>
              <div className="about__icon">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </div>
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
