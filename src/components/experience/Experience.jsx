import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";
import {
  DiJavascript1,
  DiCss3,
  DiReact,
  DiAngularSimple,
  DiHtml5,
  DiJava,
  DiNodejsSmall,
  DiPython,
  DiPostgresql,
} from "react-icons/di";
import {
  SiRedux,
  SiFigma,
  SiMaterialui,
  SiExpress,
  SiSequelize,
  SiMongodb,
} from "react-icons/si";
import { useTranslation } from "react-i18next";

const Experience = () => {
  const { t } = useTranslation();
  return (
    <section id="experiences">
      <h5>{t("exp.subtitle")}</h5>
      <h2>{t("exp.title")}</h2>

      <div className="container experience__pcontainer">
        <p className="texto">
          {t("exp.text1")}
          <br />
          {t("exp.text2")}
          <br />
          {t("exp.text3")}
        </p>
      </div>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend & UI</h3>
          <div className="icons_container">
            <DiHtml5 className="icons_container_ico" />
            <DiCss3 className="icons_container_ico" />
            <DiJavascript1 className="icons_container_ico" />
            <DiReact className="icons_container_ico" />
            <SiRedux className="icons_container_ico" />
            <SiMaterialui className="icons_container_ico" />
            <SiFigma className="icons_container_ico" />
            <DiAngularSimple className="icons_container_ico" />
          </div>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icons" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">{t("exp.level3")}</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icons" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">{t("exp.level3")}</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icons" />
              <div>
                <h4>JavasCript</h4>
                <small className="text-light">{t("exp.level3")}</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icons" />
              <div>
                <h4>React</h4>
                <small className="text-light">{t("exp.level3")}</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icons" />
              <div>
                <h4>Redux</h4>
                <small className="text-light">{t("exp.level2")}</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icons" />
              <div>
                <h4>Material UI</h4>
                <small className="text-light">{t("exp.level2")}</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icons" />
              <div>
                <h4>Figma</h4>
                <small className="text-light">{t("exp.level2")}</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icons" />
              <div>
                <h4>Adobe XD</h4>
                <small className="text-light">{t("exp.level1")}</small>
              </div>
            </article>
          </div>
        </div>

        <div className="experience__frontend">
          <h3>Backend & DB</h3>
          <div className="icons_container">
            <DiJava className="icons_container_ico" />
            <DiNodejsSmall className="icons_container_ico" />
            <DiJavascript1 className="icons_container_ico" />
            <DiPython className="icons_container_ico" />
            <SiExpress className="icons_container_ico" />
            <SiSequelize className="icons_container_ico" />
            <DiPostgresql className="icons_container_ico" />
            <SiMongodb className="icons_container_ico" />
          </div>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icons" />
              <div>
                <h4>Java</h4>
                <small className="text-light">{t("exp.level2")}</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icons" />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">{t("exp.level3")}</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icons" />
              <div>
                <h4>Node Js</h4>
                <small className="text-light">{t("exp.level2")}</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icons" />
              <div>
                <h4>Python</h4>
                <small className="text-light">{t("exp.level1")}</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icons" />
              <div>
                <h4>Express</h4>
                <small className="text-light">{t("exp.level2")}</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icons" />
              <div>
                <h4>Sequelize</h4>
                <small className="text-light">{t("exp.level3")}</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icons" />
              <div>
                <h4>PostgreSQL</h4>
                <small className="text-light">{t("exp.level3")}</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icons" />
              <div>
                <h4>Mongo DB</h4>
                <small className="text-light">{t("exp.level2")}</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
