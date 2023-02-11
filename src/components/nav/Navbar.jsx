import React from "react";
import "./Navbar.css";
import LOGO from "../../assets/logo_y.png";
import { useState } from "react";
import Switch from "../switch/Switch";
import { useTranslation } from "react-i18next";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  const { t } = useTranslation();
  return (
    <nav id="navbar">
      <img className="logo_n" src={LOGO} alt="logo" width="40px" />
      <a
        href="#"
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
      >
        {t("nav.home")}
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        {t("nav.about")}
      </a>
      <a
        href="#experiences"
        onClick={() => setActiveNav("#experiences")}
        className={activeNav === "#experiences" ? "active" : ""}
      >
        {t("nav.exp")}
      </a>
      <a
        href="#portfolio"
        onClick={() => setActiveNav("#portfolio")}
        className={activeNav === "#portfolio" ? "active" : ""}
      >
        {t("nav.proyects")}
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        {t("nav.contact")}
      </a>

      <div className="selector">
        <Switch />
      </div>
    </nav>
  );
};

export default Nav;
