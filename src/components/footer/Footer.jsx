import React from "react";
import "./footer.css";
import LOGO from "../../assets/logo_tipo.png";
import { useTranslation } from "react-i18next";
import {
  AiOutlineGithub,
  AiFillLinkedin,
  AiOutlineTwitter,
} from "react-icons/ai";
const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer>
      <img className="logo" src={LOGO} alt="logo" width="100px" />
      <ul className="links">
        <li>
          <a href="#">{t("nav.home")}</a>
        </li>
        <li>
          <a href="#about">{t("nav.about")}</a>
        </li>
        <li>
          <a href="#experiences">{t("nav.exp")}</a>
        </li>
        <li>
          <a href="#portfolio">{t("nav.proyects")}</a>
        </li>
        <li>
          <a href="#contact"> {t("nav.contact")}</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/dmaceda/" target="_blank">
          {" "}
          <AiFillLinkedin />{" "}
        </a>
        <a href="https://github.com/dmaceda" target="_blank">
          {" "}
          <AiOutlineGithub />{" "}
        </a>
        <a href="https://twitter.com/?lang=es" target="_blank">
          {" "}
          <AiOutlineTwitter />{" "}
        </a>
      </div>
      <div className="footer__copyright">
        <small>Copyright&copy; 2023 Diego Maceda. {t("header.copy")}</small>
      </div>
    </footer>
  );
};

export default Footer;
